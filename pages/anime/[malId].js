import { useEffect } from "react"
import Header from "../../components/header"
import Loading from "../../components/loading"
import Post from "../../components/post"
import Card from "../../components/post/card"
import SubNav from "../../components/subNav"

const AnimeDetails = ({ anime }) => {
    return (
        <>
            <Header title={anime.title} />
            {/* <SubNav title={anime.title} /> */}
            <>
                {
                    !anime ? <Loading /> :
                        <div className="container">
                            <div className="row">
                                <Post text={anime.synopsis}
                                    os={anime.ending_themes}
                                    op={anime.opening_themes}
                                    geners={anime.genres}
                                    related={anime.related}
                                    trailer={anime.trailer_url} />
                                <Card title={anime.title}
                                    jTitle={anime.title_japanese}
                                    image={anime.image_url}
                                    episodes={anime.episodes}
                                    producers={anime.producers}
                                    premiered={anime.premiered}
                                    status={anime.status}
                                    rank={anime.rank}
                                    score={anime.score}
                                    duration={anime.duration} />
                            </div>

                        </div>
                }
            </>
        </>
    )
}

export default AnimeDetails

export async function getStaticPaths() {
    const response = await fetch("https://api.jikan.moe/v3/top/anime/1/bypopularity");
    const data = await response.json()
    const paths = data.top.map(d => {
        return { params: { malId: `${d.mal_id}` } }
    })
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { params } = context

    const response = await fetch(`https://api.jikan.moe/v3/anime/${params.malId}`);
    const data = await response.json()


    return {
        props: {
            anime: data,
        }
    }
}

/*
return {
        props: {
            anime: data.status === 404 ? null : data,
        }
    }

*/