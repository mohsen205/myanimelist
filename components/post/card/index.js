import PropTypes from 'prop-types'
import Link from "next/link"
const Card = ({ title, jTitle, image, episodes, producers, premiered, status, score, rank, duration }) => {
    return (
        <div className="col-lg-4 col-md-5">
            <div className="border p-4 rounded-2">
                <div className="text-center">
                    <img src={image} className="img-fluid" />
                </div>
                <div className="">
                    <ul className="list-unstyled mt-2">
                        <li>
                            English Title: <span className=""> {title}</span>
                        </li>
                        <li>
                            Japanise Title: <span className=""> {jTitle}</span>
                        </li>
                        <li>
                            Episodes: <span className=""> {!episodes ? "******" : episodes}</span>
                        </li>
                        <li className="d-flex">
                            Producers:
                            <ul className="ms-2 list-unstyled">
                                {
                                    producers.map(producer => {
                                        return (
                                            <li key={producer.mal_id}>
                                                <Link href={`/anime/producer/${producer.mal_id}`}>
                                                    <a className="text-info text-decoration-none">
                                                        {producer.name}
                                                    </a>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                        <li>
                            Premiered : <span className=""> {premiered}</span>
                        </li>
                        <li>
                            Status : <span className=""> {status}</span>
                        </li>
                        <li>
                            Duration : <span className=""> {duration}</span>
                        </li>
                        <li>
                            Rank : <span className=""> {rank}</span>
                        </li>
                        <li>
                            Score <span className="text-danger">*</span> : <span className=""> {score}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
Card.defaultProps = {
    title: "******",
    jTitle: "******",
    image: "******",
    episodes: "******",
    producers: "******",
    premiered: "******",
    status: "******",
    score: "******",
    rank: "******",
    duration: "******",
}
Card.propTypes = {
    title: PropTypes.string.isRequired,
    jTitle: PropTypes.any.isRequired,
    image: PropTypes.any.isRequired,
    episodes: PropTypes.number,
    producers: PropTypes.any.isRequired,
    premiered: PropTypes.string.isRequired,
    status: PropTypes.any.isRequired,
    score: PropTypes.number.isRequired,
    rank: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
}

export default Card
