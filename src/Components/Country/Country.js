import React from 'react';

const Country = (props) => {

    console.log(props)
    return (
        <div className='country'>
            <h1>This is: {props.country.name}</h1>
            <h3>Population: {props.country.population}</h3>
            <img src={props.country.flags} alt="" />
        </div>
    );
};

export default Country;