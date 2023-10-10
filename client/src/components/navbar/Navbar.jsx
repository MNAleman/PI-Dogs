import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import "./navbar.style.css"
import BlackDog from '../../Image/BlackDog.png'


const Navbar = () => {
  return (
    <div className='navbar-cont'>
      <div className='navbar-img-cont'>
      <Link to ={"/"}><img src={BlackDog} alt="" /></Link>
        </div>
        <div className='navbar-links-cont'><Link to={"/home"}>Home</Link><Link to={"/create"} >Create</Link></div>
      <div className='navbar-search-cont'><SearchBar /> </div>
    </div>
  )
}

export default Navbar