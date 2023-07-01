import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import FeaturedCollections from "../../components/FeaturedCollections";
import Carousel from "../../components/Carousel";
import TrendingProducts from "../../components/TrendingProducts";

export default function Home() {
    return (
        <div>
            <Navbar />

            <Menu />

            <Carousel />

            <FeaturedCollections />

            <TrendingProducts />

            <div>
                Oferta Especial
            </div>

            <Footer />
        </div>
    )
}
