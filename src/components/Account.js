import React from 'react'
import Navbar from './Navbar'

function Account() {
  return (
    <>
    <Navbar/>
    <div className='Men'>
    <div className="MenMain">
          <div className="Men-Navbar">
            <ul className="Men-Nav-ul">
              <li>Profile</li>
              <li>Inbox</li>
              <li>Orders</li>
              <li>Favourites</li>
              <li>setting</li>
            </ul>
          </div>
        </div>
        </div>
    </>
  )
}

export default Account
