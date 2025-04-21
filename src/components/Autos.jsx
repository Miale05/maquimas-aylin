import React, { useState, useEffect } from 'react';
import Menu from "./Menu.jsx";
import Card from './Card.jsx';

const Autos = () => {

    const [cars, setCars] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedMarca, setSelectedMarca] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [filteredCars, setFilteredCars] = useState([]);

    // Fetch data
    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await fetch('/autos.json');
                const data = await response.json();
                setCars(data);
            } catch (error) {
                console.error('Error fetching cars data:', error);
            }
        };
        fetchCars();
    }, []);

    console.log(cars);

    // Filter and sort cars
    useEffect(() => {
        const filterAndSortCars = () => {
            let filtered = cars.filter(car =>
                (car.marca.toLowerCase().includes(searchTerm.toLowerCase()) || 
                car.modelo.toLowerCase().includes(searchTerm.toLowerCase())) &&
                (selectedMarca === '' || car.marca === selectedMarca)
            );

            if (sortOrder === 'asc') {
                filtered.sort((a, b) => a.precio - b.precio);
            } else if (sortOrder === 'desc') {
                filtered.sort((a, b) => b.precio - a.precio);
            }

            setFilteredCars(filtered);
        };

        filterAndSortCars();
    }, [searchTerm, cars, selectedMarca, sortOrder]);

    const uniqueMarcas = [...new Set(cars.map(car => car.marca))];

    const resetFilters = () => {
        setSearchTerm('');
        setSelectedMarca('');
        setSortOrder('');
    };

    return (
        <>
        <Menu />
        <div className="container">
            <h1 className='text-center mt-4 mb-4 fw-bold text-light'>AUTOS</h1>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                </span>
                <input 
                    type="text" 
                    className='form-control'
                    placeholder="Ejm: Corolla" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
            </div>
            
            <div class="input-group mb-3">
                <select 
                    className="form-select"
                    value={selectedMarca} 
                    onChange={(e) => setSelectedMarca(e.target.value)}
                >
                    <option value="" selected>Marcas</option>
                    {uniqueMarcas.map((marca, index) => (
                        <option key={index} value={marca}>{marca}</option>
                    ))}
                </select>

                <select
                    className="form-select"
                    value={sortOrder} 
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="">Ordenar</option>
                    <option value="desc">Precio de Mayor a Menor</option>
                    <option value="asc">Precio de Menor a Mayor</option>
                </select>
            </div>

            <button 
                className='container btn btn-outline-light'
                type='button'
                onClick={resetFilters}
            >
                Restablecer Filtros
            </button>

            <p className='mt-3 text-light'>Resultados encontrados: {filteredCars.length}</p>
            
            <div className="row justify-content-between">
               {filteredCars.map((car, index) => (
                <Card key={index} car={car} />
               ))} 
            </div>
        </div>
        </>
        
    );
}
 
export default Autos;