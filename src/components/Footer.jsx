import React from 'react';
import logoPage from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="text-center py-3 bg-white">
            <img src={logoPage} alt="Logo" className="mb-4" />
            <p>Aylin Albujar - Asesora de Ventas</p>
            <p>Contacto: +51 999 888 777</p>
            <p>Email: <a href="mailto:correocomercial@maqui.com">correocomercial@maqui.com</a></p>
            <p>&copy; {new Date().getFullYear()} MAQUI+. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;