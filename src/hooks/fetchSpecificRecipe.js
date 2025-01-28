import axios from "axios";
import { useReducer} from "react";
// const options = {
//     method: 'GET',
//     url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
//     params: { id: '8138' },
//     headers: {
//         'x-rapidapi-key': '033baafe09msh030d1629a951e0dp1e3571jsn169d551d3a62',
//         'x-rapidapi-host': 'tasty.p.rapidapi.com'
//     }
// };
const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
    params: { id: '8138' },
    headers: {
        'x-rapidapi-key': 'e56e143f21mshbcb988acff54d4ap14166bjsn2e17080b2486',
        'x-rapidapi-host': 'tasty.p.rapidapi.com'
    }
};
export default function fetchSpecificRecipe() {
    const initial_state = {
        data:null,
        loading:false,
        error:null
    }
    const Action = {
        LOADING:"LOADING",
        SUCCESSFULL_FETCH:"SUCCESSFULL_FETCH",
        REQUEST_EXCEPTION:"REQUEST_EXCEPTION"
    }
    const reducer = (_,action) => {
        switch(action.type){
            case Action.LOADING:
                return {
                    data:null,
                    loading:true,
                    error:null
                }
            case Action.SUCCESSFULL_FETCH:
                return {
                    data:action.payload,
                    loading:false,
                    error:null
                }
            case Action.REQUEST_EXCEPTION:
                return {
                    data:null,
                    loading:false,
                    error:action.payload
                }
        }
    }
    const [state,dispatch] = useReducer(reducer,initial_state)
    const fetchTheSpecificRecipe = async (id) => {
        try {
            dispatch({
                type:Action.LOADING,
            })
            const modifiedOptions = { ...options }
            if (id) modifiedOptions.params.id = id;
            const response = await axios.request(modifiedOptions);
            console.log(`Request Results After ${id} query`);
            dispatch({
                type: Action.SUCCESSFULL_FETCH,
                payload:response.data
            })
        } catch (error) {
            dispatch({
                type:Action.REQUEST_EXCEPTION,
                payload:error
            })
        }
    }
    return [fetchTheSpecificRecipe,state];
}
