import Footer from "../../components/Footer";
import FeaturedCollections from "../../components/FeaturedCollections";
import Carousel from "../../components/Carousel";
import TrendingProducts from "../../components/TrendingProducts";
import Header from "../../components/Header";
import { Menu } from "@mui/material";

export default function Home() {
    return (
        <div>

            <Menu />
            <Header />

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
