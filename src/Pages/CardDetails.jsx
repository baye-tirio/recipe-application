import { useState, useEffect } from "react"
import RecipeHeader from "../Components/RecipeHeader";
import { useParams } from "react-router-dom"
import fetchSpecificRecipe from "../hooks/fetchSpecificRecipe";
import RecipeInfo from "../Components/RecipeInfo";
import LoadingState from "../Components/LoadingState";
import Error from "../Components/Error";
import { Outlet } from "react-router-dom";
export default function CardDetails() {
    const { id } = useParams();
    const [fetchTheSpecificRecipe, {data, loading, error}] = fetchSpecificRecipe()
    useEffect(() => {
        fetchTheSpecificRecipe(id)
        console.log("The data that is received looks like this:");
    }, [])
    if (loading) return <center><LoadingState /></center>
    if(error) return <center><h1>Can't load Results</h1></center>
    if (!data) return <center><Error message = "The result is null" explanation ="Try to modify the request to see if results can be obtained" /></center>
    console.log(data);
    const context = {
        instructions : data.instructions,
        ingridients : data.sections[0].components,
        image:data.thumbnail_url
    }
    return (<>
        {data ? <>
            <RecipeHeader recipe_nutrition={data.nutrition} name={data.name} />
            <Outlet context={context} />
            {/* <RecipeInfo instructions={data.instructions} image ={data.thumbnail_url} /> */}
        </> : null}
    </>
    )
}