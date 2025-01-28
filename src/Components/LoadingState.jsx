import loadingGif from "../assets/loading.gif"
export default function LoadingState (){
    return (
        <div className="loading-state-container">
            <img src={loadingGif} alt="loading gif" />
        </div>
    )
}