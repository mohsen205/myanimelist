import Header from "../components/header"
import Link from "next/link"
const NotFound = () => {
    return (
        <>
            <Header title="Not Found" />
            <div className="d-flex justify-content-center text-center" style={{ paddingTop: "125px", paddingBottom: "125px" }}>
                <div>
                    <div className="display-1 fw-bold linear-text">
                        Oops!
                    </div>
                    <div className="my-2">
                        <div className="h5">404 - page Not Found</div>
                        <p>The page you are looking for might have been removed <br />
                            had its name change or is temporaly unavaible </p>
                    </div>
                    <div className="">
                        <Link href="/">
                            <a className="text-white">Back To Home Page</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound
