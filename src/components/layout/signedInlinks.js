import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'className="black-text text-darken-2">Create Collection</NavLink></li>
        <li><NavLink to='/'className="black-text text-darken-2">Explore</NavLink></li>
        <li><NavLink to='/' className="black-text text-darken-2">Log Out</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating grey darken-1">NN</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedInLinks