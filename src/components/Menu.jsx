import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

const Menu = () => {
    return ( 
        <nav className="navbar navbar-expand-lg bg-body-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="https://www.maquimas.pe/wp-content/themes/maquisistema/img/common/maquiplus-logo.png" alt="Logo" width="100px"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarMenu">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item me-sm-4">
                        <a className="nav-link" href="/">INICIO</a>
                    </li>
                    <li className="nav-item me-sm-4">
                        <a className="nav-link" href="autos">AUTOS</a>
                    </li>
                    <li className="nav-item me-sm-4">
                        <a className="nav-link" href="inmuebles">INMUEBLES</a>
                    </li>
                </ul>
                <button className="btn btn-danger rounded-pill ms-auto" type="button">COTIZA AQUÍ</button>
                </div>
            </div>
        </nav>

    );
}
 
export default Menu;