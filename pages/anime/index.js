import Loading from "../../components/loading"
import Animations from "../../components/animations"
import SubNav from "../../components/subNav"
import Header from "../../components/header"
const Anime = ({ animes }) => {
    return (
        <>
            <Header title="Anime" />
            <SubNav title="Top" />
            {
                !animes ? <Loading /> :
                    <Animations animes={animes} />
            }
        </>
    )
}

export default Anime

export async function getStaticProps() {
    const response = await fetch("https://api.jikan.moe/v3/top/anime/1/bypopularity");
    const data = await response.json()
    return {
        props: {
            animes: data
        }
    }
}