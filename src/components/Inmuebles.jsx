import Footer from "./Footer.jsx";
import Menu from "./Menu.jsx";

const Inmuebles = () => {
    return (
        <>
        <Menu />
        <div className="container text-light">
            <h1>Inmuebles</h1>
            <p>Bienvenido a la sección de inmuebles.</p>
            <p>Aquí puedes encontrar una variedad de propiedades disponibles para la venta o alquiler.</p>
            <p>Explora nuestras opciones y encuentra el hogar de tus sueños.</p>
        </div>
        <Footer />
        </>
        
    );
}
 
export default Inmuebles;