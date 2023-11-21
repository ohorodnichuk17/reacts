import React from "react";
import "./styles.css";

const citiesData = [
    { id: 1, name: "Kyiv", population: 2804000 },
    { id: 4, name: "Rivne", population: 53000 },
    { id: 2, name: "Kharkiv", population: 1431000 },
    { id: 3, name: "Lviv", population: 720000 }
];

const CityInfo = ({ city }) => (
    <div key={city.id}>
        <h3>{city.name}</h3>
        <p>Population: {city.population}</p>
    </div>
);

const CitiesProject = () => (
    <div className="App">
        <h1>Information about cities of Ukraine</h1>
        {citiesData.map((city) => (
            <CityInfo key={city.id} city={city} />
        ))}
    </div>
);

export default CitiesProject;
