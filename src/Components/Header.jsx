import { useState } from "react"
import { useSearchParams } from "react-router-dom";
export default function Header({ updateSearchValue }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [queryParameters,setQueryParameters] = useSearchParams(); 
    const handleSearchClicking = () => {
        if(searchTerm) setQueryParameters ({search:searchTerm}); 
        updateSearchValue(searchTerm);
        setSearchTerm("");
    }
    return (
        <header className="main_header">
            <div className="text-container">
                <h1 className="header-title">Look for a <span>Banger</span> Food </h1>
                <p className="header-description">A platform where you can learn to cook damn near everything</p>
                <div className="header-input-container">
                    <input type="text"
                        placeholder="find a recipe..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                        onKeyDown={(e) => { if (e.key === "Enter") handleSearchClicking() }}
                    />
                    <button onClick={handleSearchClicking}>Search</button>
                </div>
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyTkmg38ScgJ9rcIzIUzQGvX_Rqwon6qdnYQ&s" alt="recipes-header-image" className="main_img" />
            </div>
        </header>
    )
}