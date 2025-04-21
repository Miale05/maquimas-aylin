import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center py-3 bg-light">
            <p className="fw-bold">MAQUI<span className="text-danger">+</span></p>
            <p>Aylin Albujar - Asesora de Ventas</p>
            <p>Contacto: +51 999 888 777</p>
            <p>Email: <a href="mailto:correocomercial@maqui.com">correocomercial@maqui.com</a></p>
            <p>&copy; {new Date().getFullYear()} MAQUI+. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;