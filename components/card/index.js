import PropTypes from 'prop-types'
import card from "../../styles/card.module.css"
import Link from "next/link"
const Card = ({ title, url, bg, text }) => {
    return (
        <div className="col-md-6 col-sm-12 mt-2 ">
            <div className={`rounded-2 p-3 shadow-sm ${card.border}`} style={{ backgroundImage: `url(/images/${bg})` }}>
                <Link href={url}>
                    <a className={`text-white h1 text-uppercase ${card.anchor}`}> {title} </a>
                </Link>
                <p className="text-white mt-2"> {text} </p>
                <a className="text-white text-decoration-none" href={title === "anime" ? "https://en.wikipedia.org/wiki/Anime" : "https://en.wikipedia.org/wiki/Manga"} rel="noreferrer" target="_blank" >Learn More...</a>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Card
