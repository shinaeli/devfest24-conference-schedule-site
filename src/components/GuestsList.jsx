import React from 'react'
import { guestLists } from '../consts/guestsList'
import Guest from './utils/Guest'

const GuestsList = () => {
  return (
    <div className="container guests-list">
        {guestLists.map(item => <Guest item={item} />)}
    </div>
  )
}

export default GuestsList