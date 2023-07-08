import React from "react";
import { Grid, Button } from "@mui/material";
import "./styles.scss";
import Camiseta from "./img/Camiseta.svg"


export default function FeaturedCollections() {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:8000/collections')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    const Card = (props) => {
        return (
            <Grid item xs={4}>
                <div className="card">
                    <div className="cardInfos">
                        {props.discount && <span id="cardOffer">{props.discount}% OFF</span>}
                        <p id="cardText">{props.text}</p>
                        <Button variant="contained" id="cardButton">Comprar</Button>
                    </div>

                    <div>
                        <img src={Camiseta} alt="Camiseta" />
                    </div>
                </div>
            </Grid>
        )
    }

    return (
        <div className="featured-collections">
            <h3 id="FeaturedCollectionsTitle">Coleções em Destaque</h3>

            <div id="CardContainer">
                <Grid container spacing={22.5}>
                    {items.map(cada => (
                        <Card text={cada.title} discount={cada.discount} image={cada.image} />
                    ))}
                </Grid>
            </div>
        </div>
    )
}
