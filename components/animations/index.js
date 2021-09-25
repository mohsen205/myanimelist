import PropTypes from 'prop-types'
import SingleAnimations from "./SingleAnimations"
const MultiAnimations = ({ animes }) => {
    return (
        <div className="container">
            <div className="row">
                {
                    animes.top.map(anime => {
                        return (
                            <SingleAnimations key={anime.mal_id}
                                star={anime.score}
                                bg={anime.image_url}
                                title={anime.title}
                                rank={anime.rank}
                                id={anime.mal_id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

MultiAnimations.propTypes = {
    animes: PropTypes.any.isRequired

}

export default MultiAnimations
