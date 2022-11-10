import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.jpg"
import './NavBar.css'

import {Link, NavLink} from "react-router-dom";

const Navbar = () =>{


const categorias = [
    {nombre: "River Plate", id:0, ruta:"/categoria/River Plate"},
    {nombre: "Boca Juniors", id:1, ruta:"/categoria/Boca Juniors"},
    {nombre: "Selección Argentina", id:2, ruta:"/categoria/Selección Argentina"},
    {nombre: "Avellaneda", id:3, ruta:"/categoria/Avellaneda"},
]

    return (
        <header>
            <Link to="/">
            <img src={logo} alt="Logo de la tienda"/>
            </Link>
            <h1 className="Titulo">Tienda Online</h1>
            <nav>
                <ul>{
                    categorias.map((categoria)=>{
                        return <NavLink key={categoria.id} to={categoria.ruta} className="btn-one">{categoria.nombre}</NavLink>
                    })}
                </ul>
            </nav>
            <Link to="/cart">
            <button className='btn-nav'><CartWidget/></button>
            </Link>
        </header>
    );
}

export default Navbar;