import React from 'react'
import { guestLists } from '../consts/guestsList'
import Guest from './utils/Guest'

const GuestsList = () => {
  return (
    <div className="container guests-list">
        {guestLists.map((item, index) => <Guest key={index} item={item} />)}
    </div>
  )
}

export default GuestsList