import { useOutletContext } from "react-router-dom"
import { useParams,useNavigate } from "react-router-dom";
export default function Ingridients() {
    const {id} = useParams();
    const navigate = useNavigate()
    const {ingridients,image} = useOutletContext();
    console.log("These are the ingridients:");
    console.log(ingridients);
    return (
        <div className="recipe-info">
            <div className="recipe-info-container">
                <div className="recipe-info-header">
                <h3 ><b>INGRIDIENTS</b></h3>
                <button onClick={()=> navigate(`/Recipe/${id}/instructions`)}><h3 ><b>INSTRUCTIONS</b></h3></button>
                </div>
                {ingridients.map(({ingredient, position,raw_text}) => {
                    return (
                        <div className="recipe-info-content-container" key={position}>
                            <p className="recipe-step">
                                {position}
                            </p>
                            <p className="recipe-text">
                                {raw_text}
                            </p>
                        </div>
                    )
                })}
            </div>
            <img className = "recipe-img" src={image} alt="image of the food type shit" />
        </div>
    )
}