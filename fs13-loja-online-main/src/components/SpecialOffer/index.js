import { Button, Grid } from "@mui/material";
import React from "react";
import "./styles.scss";
import offerbg from "./offerbg.svg";
import offershoes from "./offershoes.svg";

export default function SpecialOffer () {
    return (
        <Grid container className="divSpecialOffer"> 
            <Grid item className="gridImagem">
                <img src={offerbg} alt="imagem tenis"/>
                <img src={offershoes} alt="imagem tenis"/>
            </Grid>

            <Grid item className="gridTexto">

                <h4>Oferta Especial</h4>
                <h1>Air Jordan edição de colecionador</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br/>
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br/>
                    aliquip
                </p>
                <Button variant='contained'>Ver Oferta</Button>
            </Grid>
        </Grid>
    )
}