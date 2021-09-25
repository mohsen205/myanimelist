import { useRouter } from "next/dist/client/router"
import Link from "next/link"

const SubNav = ({ title }) => {
    const router = useRouter()
    console.log(router);
    return (
        <div className="container">
            <Link href="/">
                <a className="text-white text-decoration-none">Home</a>
            </Link>
            {'>'} Anime {'>'} {title}
        </div>
    )
}

export default SubNav
