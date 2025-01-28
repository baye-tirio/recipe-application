import CardList from "../Components/Cardlist";
import Header from "../Components/Header";
import fetchData from "../hooks/fetchData";
import LoadingState from "../Components/LoadingState";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { lastElementRef } from "../hooks/Contexts";
export default function HomePage() {
    const [queryParameters, setQueryParameters] = useSearchParams();
    const [fetchTheData, { data, loading, error }] = fetchData();
    //offset for our scroll based pagination
    const [offset, setOffset] = useState(0);
    const updateSearchValue = (newSearchValue) => {
        if (newSearchValue) {
            fetchTheData({ searchValue: newSearchValue, searchOffset: 0 , searched:true});
        }
    }
    useEffect(() => {
        fetchTheData({ searchValue: queryParameters.get("search"), searchOffset: offset });
    }, [offset])
    const observer = useRef(null);
    //Function to instatiate an IntersectionObserver object and link it with a node
    //The reason we're using a function for that is because we want to instantiate the object when we render the particular div of interest.
    const lastElement = (node) => {
        console.log("Called and the node is ");
        console.log(node);
        if (loading) return;
        else {
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    console.log(`Intersecting the node and the offset is set to ${offset + 16}`);
                    setOffset(offset + 16);
                }
            })
            if (node) observer.current.observe(node);
        }
    }
    return (
        <div className="App">
            <main className="main_container">
                <Header updateSearchValue={updateSearchValue} />
                <lastElementRef.Provider value={lastElement}>
                    {data ? <CardList data={data} /> : null}
                    {error ? <h1> Can't Load Results : {error.message}</h1> : null}
                    {loading ? <center><LoadingState /></center> : null}
                </lastElementRef.Provider>
            </main>
        </div>
    )
} 