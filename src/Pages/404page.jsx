import { useRouteError } from "react-router-dom"
import NavBar from "../Components/NavBar";
export default function Page404 (){
    const routeError = useRouteError()
    console.log("Below is an output of what the route error object looks like in case we actually might want to utilize it :");
    console.log(routeError);
    return (
        <>
     <NavBar />
        <center>
        <h1>Page Not Found</h1>
        </center>
        </>
    )
}