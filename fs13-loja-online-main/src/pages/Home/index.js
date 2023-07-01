import Footer from "../../components/Footer";
import FeaturedCollections from "../../components/FeaturedCollections";
import Carousel from "../../components/Carousel";
import Header from "../../components/Header";

export default function Home() {
    return (
        <div>
            <Header/>

            <Carousel/>

            <FeaturedCollections/>

            <div>
                Coleções em Destaque 2
            </div>

            <div>
                Produtos
            </div>

            <div>
                Oferta Especial
            </div>

            <Footer/>
        </div>
    )
}