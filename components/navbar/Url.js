import Link from "next/link"
const Url = ({ href, label }) => {
    return (
        <li className="nav-item">
            <Link href={href}>
                <a className="nav-link text-uppercase text-white"> {label} </a>
            </Link>
        </li>
    )
}

export default Url
