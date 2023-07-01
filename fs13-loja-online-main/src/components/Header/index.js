import React from "react";
import { Button, Icon, Link } from "@mui/material";
import "./styles.scss";
import logo from "./logo.png";
import SearchField from "../SerchField";
import Navbar from "../Navbar";
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';


export default function Header() {
    return (
        <section className="sectionHeader">  
            <div className="divHeader">
                <div className="logo">
                    <img src={logo} alt="logo" height={'33px'}/> <p>Digital Store</p>
                </div> 

                <div>
                    <SearchField/>
                </div>

                <div>
                    <a href="">Cadastre-se</a>

                </div>

                <div>
                    <Button variant="contained">Entrar</Button>
                </div>

                <div className="cart">
                    <LocalGroceryStoreOutlinedIcon/>
                </div>
            </div>

            <Navbar className="navbar"/>
        </section>
    )
}