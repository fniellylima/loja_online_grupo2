import React from "react";
import { Grid } from "@mui/material";
import "./styles.scss";
import RightIcon from './img/RightIcon.svg'
import productImg from "./img/productImg.svg"

import Card from "../Card"

export default function TrendingProducts() {

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div>
            <div className="TrendingProductsHeader">
                <h3 id="TrendingProducts">Produtos em alta</h3>
                <div className="TrendingProductsSeeAll">
                    <p id="SeeAll">Ver todos</p>
                    <span id="RightIcon">
                        <img src={RightIcon} alt="Right Arrow" />
                    </span>
                </div>
            </div>
            <Grid container spacing={2} >
                {products.map(product => (
                    <Card offer={product.offer} productImg={productImg} productName={product.product} brand={product.brand} model={product.model} price={product.price} />
                ))}
            </Grid>
        </div>
    );
}
