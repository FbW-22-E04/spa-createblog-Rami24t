import React from "react";
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
        <ul style={{display: 'flex', gap: '20px'}}>
           <NavLink to={'/home'}><li>Home</li></NavLink>
           <NavLink to={'/create'}> <li>Create a Post</li></NavLink>
           <NavLink to={'/show'}> <li>Show current Posts</li></NavLink>
        </ul>
        </nav>
    </header>
  )
}

export default Header