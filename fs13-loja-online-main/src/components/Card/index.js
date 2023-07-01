import React from "react";
import { Grid } from "@mui/material";

import "./styles.scss";

export default function Card({ offer, productImg, productName, brand, model, price }) {

    function DiscountCalculation(price, offer) {
        const OfferPrice = offer / 100;
        const discount = OfferPrice * price
        return (
            price - discount
        )
    }

    return (
        <Grid item xs="3">
            <div className="CardContainer">
                <div className="CardItem">
                    {offer && <span id="CardOffer">{offer}% OFF</span>}
                    <img id="CardImg" src={productImg} alt="Tênis" />
                </div>
                <div className="CardInfo">
                    <h3 id="ItemName">{productName}</h3>
                    <p id="ItemBrandModel">{brand} {model}</p>
                    <div className="ItemPrice">
                        {offer ? <p id="Price">${price}</p> : <p id="noOffer">${price}</p> }
                        {offer && <p id="DiscountedItemValue">${DiscountCalculation(price, offer)}</p>}
                    </div>
                </div>
            </div>
        </Grid>
    )
}
