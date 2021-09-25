import loading from "../../styles/loading.module.css"
const Loading = () => {
    return (
        <div className={` ${loading.load}`}>
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading
