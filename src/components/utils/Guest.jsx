import React from 'react'
import { Link } from 'react-router-dom';

const Guest = ({ item }) => {
    const { id, imgLocation, alt, name } = item;
  return (
    <div className='guest' key={id}>
        <Link to={`guest/${id}`}>
            <section className="guest-image">
                <img src={imgLocation} alt={alt} />
            </section>
        </Link>
        <h3 className="dosis-regular">{name}</h3>
    </div>
  )
}

export default Guest