import RecipeNutritionalFacts from "./RecipeNutritionalFacts"
import { CiWheat } from "react-icons/ci"
import { AiOutlineFire } from "react-icons/ai"
import { BiCheese,BiCake } from "react-icons/bi"
import { IoFish } from "react-icons/io5"
export default function RecipeHeader({recipe_nutrition, name}) {
    const nutritionalFactsArray = [
        {
            id: 1,
            amount: recipe_nutrition.calories,
            category: "calories",
            Icon:AiOutlineFire,
        },
        {
            id: 2,
            amount: recipe_nutrition.carbohydrates,
            category: "carbs",
            Icon:CiWheat,
        },
        {
            id: 3,
            amount: recipe_nutrition.protein,
            category: "protein",
            Icon:IoFish,
        },
        {
            id: 4,
            amount: recipe_nutrition.fat,
            category: "fat",
            Icon:BiCheese,
        },
        {
            id: 5,
            amount: recipe_nutrition.sugar,
            category: "sugar",
            Icon:BiCake,

        }
    ]
    return (
        <div className="recipe-header">
            <h1>{name}</h1>
            <div className="nutritional-facts-container">
            {nutritionalFactsArray.map((fact)=>{
            return (
                <RecipeNutritionalFacts key={fact.id} data = {fact} />
            )
        })}
            </div>
        </div>
    )
}