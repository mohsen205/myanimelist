import Card from "../components/card"
import Header from "../components/header"
const Home = () => {
    return (
        <>
            <Header title="Home" />
            <div className="home mb-5">
                <div className="text-center">
                    <h1 className="my-5">  Welcome To My<span className="linear-text"> Anime </span>List</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <Card title="anime"
                            url="/anime"
                            bg="anime.png"
                            text="is Japanese for 'animation'. In Japan, anime is the word used for all animation. ... Also, some anime cartoons are just movies, but they have cartoon characters and animation instead of real people and places. Anime is often based on Japanese comics that are called manga and graphic novels." />
                        <Card title="manga"
                            url="/manga"
                            bg="manga.jpg"
                            text="Manga are comics or graphic novels originating from Japan. Most manga conform to a style developed in Japan in the late 19th century, and the form has a long prehistory in earlier Japanese art. The term manga is used in Japan to refer to both comics and cartooning" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

Home.getLayout = function getLayout(page) {
    return (
        <>
            {page}
        </>
    )
}