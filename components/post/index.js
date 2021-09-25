import PropTypes from 'prop-types'
import Link from "next/link"
import ReactPlayer from 'react-player';
import Related from './related';
const Post = ({ text, os, op, geners, related, trailer }) => {
    return (
        <div className="col-lg-8 col-md-7">
            <div>
                <div className="h5"> Synopsis  </div>
                <hr />
                <p className="lh-lg ms-3">{text}</p>
            </div>
            <div>
                <div className="h5"> Trailer </div>
                <hr />
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item mx-auot py-2" src={trailer} allowFullScreen></iframe>
                </div>
            </div>
            <div>
                <div className="h5"> OP/OS theme  </div>
                <hr />
                <>
                    <h5> Open Theme :</h5>
                    <ul className="ms-3 list-unstyled">
                        {
                            op.map((o, i) => {
                                return (
                                    <li key={i}>
                                        {o}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </>
                <>
                    <h5> Ending Theme </h5>
                    <ul className="ms-3 list-unstyled">
                        {
                            os.map((o, i) => {
                                return (
                                    <li key={i}>
                                        {o}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </>
            </div>
            <div>
                <div className="h5"> Genres  </div>
                <hr />
                <ul className="ms-3 list-unstyled">
                    {
                        geners.map(gener => {
                            return (
                                <li key={gener.mal_id}>
                                    <Link href={`/anime/genre/${gener.mal_id}`}>
                                        <a className="text-info text-decoration-none">
                                            {gener.name}
                                        </a>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <Related data={related} />
        </div>
    )
}

Post.propTypes = {
    text: PropTypes.string.isRequired,
    op: PropTypes.any.isRequired,
    os: PropTypes.any.isRequired,
    geners: PropTypes.any.isRequired,
    related: PropTypes.any,
    trailer: PropTypes.any.isRequired,
}

export default Post
