import Head from "next/head"
const Header = ({ title }) => {
    return (
        <>
            <Head>
                <meta name="description" content="Welcome to MyAnimeList, the world&#039;s most active online anime and manga community and database. Join the online community, create your anime and manga list, read reviews, explore the forums, follow news, and so much more!" />
                <meta name="keywords" content="anime, myanimelist, anime news, manga" />
                <title>
                    {
                        !title ? "MyAnimeList" :
                            `${title} | MyAnimeList`
                    }
                </title>
            </Head>

        </>
    )
}

export default Header
