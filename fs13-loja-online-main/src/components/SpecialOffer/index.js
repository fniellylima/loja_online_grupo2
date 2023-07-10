import { Button, Grid } from "@mui/material";
import React from "react";
import "./styles.scss";
import offerbg from "./offerbg.svg";
import offershoes from "./offershoes.svg";

export default function SpecialOffer () {
    return (
        <Grid container className="divSpecialOffer"> 
            <Grid item className="gridImagem">
                <div>
                    <img src={offerbg} alt="imagem tenis" className="offerbg"/>
                    <img src={offershoes} alt="imagem tenis" className="offershoes"/>
                </div>
            </Grid>

            <Grid item className="gridTexto">
                <div>
                    <h4>Oferta Especial</h4>
                    <h1>
                        Air Jordan edição de <br/>
                        colecionador
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br/>
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br/>
                        aliquip
                    </p>
                    <Button variant='contained'>Ver Oferta</Button>
                </div>
            </Grid>
        </Grid>
    )
}