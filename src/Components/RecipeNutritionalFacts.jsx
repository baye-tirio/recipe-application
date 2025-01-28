export default function RecipeNutritionalFacts ({data}) {
    const {Icon} = data;
    return (
<div className="recipe-fact-container">
   <Icon />
    <h3>{data.amount}</h3>
    <p>{data.category}</p>
</div>
    )
}