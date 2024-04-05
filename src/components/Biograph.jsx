import React from 'react'
import { useParams } from 'react-router-dom'
import { guestBiographies } from '../consts/biographies';

const Biograph = () => {
  const { id } = useParams();
  const biograph = guestBiographies.find(item => String(item.id) === id);
//   console.log(biograph);
  const { guest, imgLocation, alt, bio } = biograph;
  return (
    <div className='bio-container'>
        <main className="bio">
            <div className="bio-image">
                <img src={imgLocation} alt={alt} />
            </div>
            <div className="bio-details">
                <h1 className="dosis-bold">{guest}</h1>
                <p className="dosis-regular">{bio}</p>
            </div>
        </main>
    </div>
  )
}

export default Biograph