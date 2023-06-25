import React from "react";
import { Grid, Button } from "@mui/material";
import "./styles.scss";
import tenis from "./img/tenis.png";

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
                    <div>
                        {props.discount}
                        {props.discount && "%"} 
                        
                        <br/>
                        {props.text} <br/>

                        <Button variant="contained">Comprar</Button>
                    </div>

                    <div>
                        <img src={props.image}/>
                    </div>
                </div>
            </Grid>
        )
    }

    return (
        <div className="featured-collections">
            Coleções em Destaque

            <Grid container spacing={2}>
                {items.map(cada => (
                    <Card text={cada.title} discount={cada.discount} image={cada.image}/>
                ))}
            </Grid>
        </div>
    )
}