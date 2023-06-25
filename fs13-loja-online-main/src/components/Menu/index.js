import { Link, useLocation } from "react-router-dom";

import "./styles.scss";

export default function Menu() {
    const url = useLocation();

    const isActive = (path) => {
        return (path === url.pathname) ? "active" : "";
    }

    return (
        <div className="menu">
            <Link className={isActive('/')} to="/">Inicio</Link>
            <Link className={isActive('/produtos')} to="/produtos">Produtos</Link>
            <Link className={isActive('/categorias')} to="/categorias">Categorias</Link>
            <Link className={isActive("/meus-pedidos")} to="/meus-pedidos">Meus Pedidos</Link>
        </div>
    )
}
