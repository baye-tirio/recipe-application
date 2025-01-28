import { useOutletContext, useParams ,useNavigate } from "react-router-dom"
export default function RecipeInfo() {
    const {instructions,image} = useOutletContext();
    const {id} = useParams();
    const navigate = useNavigate();
    return (
        <div className="recipe-info">
            <div className="recipe-info-container">
                <div className="recipe-info-header">
                <h3 ><b>INSTRUCTIONS</b></h3>
                    <button onClick={()=> navigate(`/Recipe/${id}/ingridients`)}><h3 ><b>INGRIDIENTS</b></h3></button>
                </div>
                {instructions.map(({display_text, position}) => {
                    return (
                        <div className="recipe-info-content-container" key={position}>
                            <p className="recipe-step">
                                {position}
                            </p>
                            <p className="recipe-text">
                                {display_text}
                            </p>
                        </div>
                    )
                })}
            </div>
            <img className = "recipe-img" src={image} alt="image of the food type shit" />
        </div>
    )
}