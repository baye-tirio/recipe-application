import axios from "axios";
import { useEffect, useReducer, useRef } from "react";
const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/list',
  params: {
    from: '0',
    size: '20',
    q: '',
  },
  headers: {
    'x-rapidapi-key': '1c2abc40aamsh94eecb89688170fp1b8b46jsnd613d7a2e301',
    'x-rapidapi-host': 'tasty.p.rapidapi.com'
  }
};
//'1c2abc40aamsh94eecb89688170fp1b8b46jsnd613d7a2e301'
//'033baafe09msh030d1629a951e0dp1e3571jsn169d551d3a62'
// const options = {
//   method: 'GET',
//   url: 'https://tasty.p.rapidapi.com/recipes/list',
//   params: {
//     from: '0',
//     size: '16',
//   },
//   headers: {
//     'x-rapidapi-key': 'e56e143f21mshbcb988acff54d4ap14166bjsn2e17080b2486',
//     'x-rapidapi-host': 'tasty.p.rapidapi.com'
//   }
// };
const fetchData = () => {
  //This is the initial of the state managed by the reducer function
  const initial_state = {
    data: null,
    error: null,
    loading: false
  }
  //let's define our actions
  const Action = {
    SUCCESSFUL_FETCH: "SUCCESSFUL_FETCH",
    LOADING_DATA: "LOADING_DATA",
    REQUEST_EXCEPTION: "REQUEST_EXCEPTION",
    SEARCHING: "SEARCH"
  }
  // The function accessed through the dispatch function whose main purpose is to update the managed state
  const reducer = (state, action) => {
    switch (action.type) {
      case Action.SUCCESSFUL_FETCH:
        return {
          data: action.payload,
          error: null,
          loading: false
        }
      case Action.LOADING_DATA:
        return {
          ...state,
          loading: true,
          error: null
        }
      case Action.REQUEST_EXCEPTION:
        return {
          data: null,
          error: action.payload,
          loading: false
        }
      case Action.SEARCHING:
        return {
          data: null,
          error: null,
          loading: true
        }

      default:
        return initial_state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initial_state)
  //Well this variable is to handle the situations where the flow starts as a result of promise resolution because when that happens we don't hass through line 74 of this file and thus our state is kind dumbshit
  const state_ref = useRef(null);
  state_ref.current = state;
  const fetchTheData = async (searchOptions) => {
    try {
      if (searchOptions?.searched) {
        dispatch({
          type: Action.SEARCHING
        });
      }
      else {
        dispatch({
          type: Action.LOADING_DATA
        });
      }
      const modifiedOptions = {
        ...options, params: {
          from: `${searchOptions.searchOffset}`,
          size: `16`,
        }
      }
      if (searchOptions.searchValue) modifiedOptions.params.q = searchOptions.searchValue;
      const response = await axios.request(modifiedOptions);
      dispatch({
        type: Action.SUCCESSFUL_FETCH,
        payload: ((state_ref.current.data) ? [...state_ref.current.data, ...response.data.results] : response.data.results)
      })

    } catch (error) {
      dispatch({
        type: Action.REQUEST_EXCEPTION,
        payload: error,
      })
    }
  }
  return [fetchTheData, state];
}
export default fetchData;