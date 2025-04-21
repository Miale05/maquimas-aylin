const Card = ({ car }) => {
  
    return (
        <div className="card col-11 col-sm-6 col-md-4 col-lg-3 m-3 p-2 rounded-4">
            <img src={car.foto} className="card-img-top" alt={car.nombre} />
            <div className="card-body">
                <h4 className="card-title">{car.marca} - {car.modelo} - {car.color}</h4>
                <hr/>
                <span class="badge rounded-pill text-bg-warning">Plan Auto Ahorro</span> <br />
                <span class="badge rounded-pill text-bg-success">Plan Auto Pronto</span> <br />
                <span class="badge rounded-pill text-bg-info">Plan Seminuevo 60</span>
                <h5 className="card-text mt-3 text-danger">Precio: ${car.precio}</h5>
                <a 
                    href={'https://wa.me/51940093770?text=Hola,%20me%20interesa%20el%20auto%20' + car.marca + '%20' + car.modelo + '%20' + car.color} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-danger container rounded-5 mt-2"
                >
                    COTIZAR AQUI
                </a>
            </div>
        </div>
    );
};

export default Card;