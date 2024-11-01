import React from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from 'react-router-dom';
import './Navbar.scss';	
import { Cart } from '../Cart/Cart';
import { useState } from 'react';
export const Navbar = () => {
const[open,setOpen]=useState(false)

  return (
    <div className="navbar">
    <div className="wrapper">
        <div className="left">
            <div className="item">
                <img src="/img/en.png" alt="" />
                <KeyboardArrowDownIcon/>
            </div>

            <div className="item">
                <span>USD</span>
                <KeyboardArrowDownIcon/>
            </div>

            <div className="item">
                <span><Link className="link" to="/products/1">Women</Link></span>    
            </div>

            <div className="item">
                <span><Link className="link" to="/products/2">men</Link></span>    
            </div>

            <div className="item">
                <span><Link className="link" to="/products/3">children</Link></span>    
            </div>

         </div>
        
        <div className="center">
            <Link className="link" to="/">NeraStore</Link>
        </div>

        <div className="right">
        <div className="items">
            <Link className="link" to="/">Homepage</Link>
        </div>

        <div className="items">
            <Link className="link" to="/">About</Link>
        </div>

        <div className="items">
            <Link className="link" to="/">Contact</Link>
        </div>

        <div className="items">
            <Link className="link" to="/">Stores</Link>
        </div>

        <div className="icons">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
                <ShoppingCartOutlinedIcon/>
                <span>0</span>
            </div>
        </div>

        </div>  
    </div> 
    {open && <Cart/>}
    </div >   
  )
}
