import { useState, useEffect } from "react"
import Header from "../components/header"
import { useRouter } from "next/router"
import axios from "axios"
import Loading from "../components/loading"
import SingleAnitmion from "../components/animations/SingleAnimations"
const Search = () => {
    const [resulat, setResulat] = useState([])
    const router = useRouter()
    useEffect(() => {
        axios.get(`https://api.jikan.moe/v3/search/anime?q=${router.query.q}`)
            .then(response => {
                setResulat(response.data)
            }).catch(error => console.log(error))
    }, [router.query.q])
    return (
        <>
            <Header title="Search" />
            {
                resulat.length === 0 ? <Loading /> :
                    <div className="search-res">
                        <div className="container">
                            <div className="row">
                                {
                                    resulat.results.map(anime => {
                                        return (
                                            <SingleAnitmion key={anime.mal_id}
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
                    </div>
            }
        </>
    )
}

export default Search
