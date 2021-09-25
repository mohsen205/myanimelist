import { useState } from "react"
import { IoSearchSharp, IoCloseOutline } from "react-icons/io5"
import ss from "../../styles/search.module.css"
import { useRouter } from "next/router"
const Model = () => {
    const router = useRouter()
    const [search, setSearch] = useState("")
    const searching = (e) => {
        e.preventDefault()
        router.push(`/search?q=${search}`)
    }
    return (
        <div className="modal fade" id="searchModel" tabIndex="-1" aria-labelledby="searchModelLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl h-100">
                <div className="modal-content">
                    <div className="modal-header d-flex justify-content-end">
                        <button type="button" className={ss.btn} data-bs-dismiss="modal" aria-label="Close"> <IoCloseOutline /> </button>
                    </div>
                    <div className="d-flex justify-content-center mt-5 modal-body">
                        <form>
                            <div className={`d-flex ${ss.border}`}>
                                <input type="text"
                                    className={` ${ss.inputSearch}`}
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    placeholder="Search"
                                />
                                <IoSearchSharp className={` ${ss.icons}`} onClick={searching} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model
