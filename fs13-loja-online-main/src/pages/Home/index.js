import Footer from "../../components/Footer";
import FeaturedCollections from "../../components/FeaturedCollections";
import Carousel from "../../components/Carousel";
import TrendingProducts from "../../components/TrendingProducts";
import Header from "../../components/Header";
import { Menu } from "@mui/material";
import SpecialOffer from "../../components/SpecialOffer";

export default function Home() {
    return (
        <div>

            <Menu />
            <Header />

            <Carousel />

            <FeaturedCollections />

            <TrendingProducts />

            <SpecialOffer/>

            <Footer />
        </div>
    )
}
