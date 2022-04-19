import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [coutries, setCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            {
                coutries.map(country => <Country
                    country={country}
                    name={country.name.common}
                    population={country.population}>
                </Country>)
            }

            <h1>Hello from Coutries: {coutries.length}</h1>
        </div>
    );
};

export default Countries;