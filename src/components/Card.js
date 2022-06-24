import React from 'react';
import './Card.css'

const Card = (props) => {
    const {id, name, image, occupation} = props.data

    return(
        <div className="card" onClick={() => props.handleClick(id)}>
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>{occupation}</p>  
        </div>
    )
}

export default Card