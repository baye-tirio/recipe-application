import { Link } from "react-router-dom";
export default function Error ({message,explanation}) {
    return (
        <div className="not-found-container">
            <img src="https://media.istockphoto.com/id/1170315961/photo/white-plate-wooden-table-tablecloth-rustic-wooden-clean-copy-freepik-table-top-view-wallpaper.jpg?s=612x612&w=0&k=20&c=DHB3nUXj-OpIzWIN__QfyK--thApc9UIH-tDSzEGLWA=" alt="Empty Plate" className="not-found-image" />
        <h1 className="not-found-header">{message? message : "Oh no!!!"}</h1>
        <p>{explanation?explanation:"Something went wrong"}</p>
        <Link to = "/">Go Home</Link>
        </div>
    )
}