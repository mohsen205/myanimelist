import Loading from "../../../components/loading"
import SingleAnimations from "../../../components/animations/SingleAnimations"
import Header from "../../../components/header"
import SubNav from "../../../components/subNav"
const Genre = ({ animes }) => {
    return (
        <>
            <Header title={animes.mal_url.name} />
            <SubNav title={animes.mal_url.name} />
            {
                !animes ? <Loading /> :
                    <div className="container">
                        <div className="row">
                            {
                                animes.anime.map(anime => {
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
            }
        </>
    )
}

export default Genre

export async function getServerSideProps(context) {
    const { params } = context
    const { genreId } = params
    const response = await fetch(`https://api.jikan.moe/v3/genre/anime/${genreId}`);
    const data = await response.json()
    return {
        props: {
            animes: data
        }
    }
}
