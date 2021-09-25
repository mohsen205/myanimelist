import PropTypes from 'prop-types'
import { AiFillStar } from "react-icons/ai"
import single from "../../../styles/singleAnimations.module.css"
import Link from "next/link"
import Header from '../../header'
const SingleAnitmion = ({ star, bg, title, rank, id }) => {
    return (
        <>
            <div className="col">
                <div className={` mx-auto p-3 ${single.card} `} style={{ backgroundImage: `url(${bg})` }}>
                    {
                        !star ? null :
                            <div className="d-flex justify-content-end">
                                <div>
                                    <AiFillStar className={`${single.starIcons}`} />
                                    <div className={`${single.starRank}`}>
                                        {Math.round(star)}
                                    </div>
                                </div>
                            </div>
                    }
                    <div className={`${single.hOne}`}>
                        <div className="h3">{title}</div>
                        {
                            !rank ? <div className="mt-4"></div> : <div className="h4"># {rank}</div>
                        }

                        <div className="d-flex justify-content-between">
                            <Link href={`/anime/${id}`}>
                                <button type="button" className={`rounded-pill ${single.button}`}>
                                    <a className="text-white text-decoration-none">See More</a>
                                </button>
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

SingleAnitmion.propTypes = {
    star: PropTypes.number.isRequired,
    bg: PropTypes.string.isRequired,
    rank: PropTypes.number,
    id: PropTypes.number.isRequired,
}

export default SingleAnitmion
