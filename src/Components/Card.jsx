import { useNavigate } from "react-router-dom";
import { lastElementRef } from "../hooks/Contexts";
import { useContext, useRef } from "react";
export default function Card({recipe,isLast}) {
    const local_ref = useRef(null);
    const lastElement = useContext(lastElementRef);
    const { id, name, total_time_minutes, thumbnail_url, topics } = recipe;
    const navigate = useNavigate()
    const navigateToThePage = () => {
        navigate(`/Recipe/${id}/ingridients`);
    }
    return (
        <div onClick={navigateToThePage} className="card" ref={(isLast)?lastElement:local_ref}>
            <img src={thumbnail_url} alt="poke-bowl" />
            <div className="card-content">
                <h3>{name}</h3>
            </div>
            <div className="card-content">
                <div className="card-info">
                    <div className="tag">
                        {topics?.length ? <p>{topics[0].name}</p> : null}
                    </div>
                    {total_time_minutes > 0 ? <p className="time-text">{total_time_minutes} min</p> : null}
                </div>
            </div>
        </div>

    )
}