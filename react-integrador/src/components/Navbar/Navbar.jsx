import React from 'react'
import { useState , useEffect } from 'react'
import styled from 'styled-components'
import logo from "/img/logo.png.png"
import Burger from "../menu/Burger"
import {Outlet,Link, useLocation} from "react-router-dom"

function Navbar() {
  const [ clicked , setClicked] =useState(false);
  const location = useLocation();

  const handleClick = () => {
      setClicked(! clicked)
  }
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setClicked(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setClicked(false);
  }, [location]);

  useEffect(() => {
    function handleScroll() {
      setClicked(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
        <>
        <NavContainer>
          <div className="header">
            <img className='nav-logo' src={logo} alt="" />
            <div className={`links ${clicked ? `active` : ``}`}>
                <Link onClick={handleClick} to="/">Home</Link>
                <Link onClick={handleClick} to="ProductList">Productos</Link>
                <Link onClick={handleClick} to="Registro">Registrate</Link>
                <Link onClick={handleClick} to="About">Sobre Nosotros</Link>
            </div>
              <div className="menu">
              <Burger clicked={clicked} handleClick={handleClick}/>  
            </div> 
         </div>  
          <Bg className={`initial ${clicked ? "active" : ""}`}></Bg>
        </NavContainer>
        <Outlet/>
        </>
  )
}

const NavContainer = styled.nav`
  .nav-logo{
    width: 6%;
    cursor: pointer;
    @media (max-width: 768px){
      width: 12%;
    }
    }
  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #141619;
    padding: 0px 45px;
    position: fixed;
    width: 100%;
    z-index: 2;
  }
  a{
    color: #fff;
    text-decoration: none;
    margin-right: 1rem;
  }
  a:hover{
    color: #fcda30;
    text-decoration-line: underline;
  }
  .menu{
    width: 12%;
    @media(min-width: 778px){
        display: none;
    } 
  }
  .links{
      position: fixed;
      top: -700px;
      left: -2000px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      transition: all .5s ease;
      right: 0;
      a{
        font-size: 2rem;
        margin-top: 1rem;
        display: block;
      }
      @media(min-width:788px){
        position: initial;
        margin: 0;
        a{
          font-size: 1rem;
          display: inline;
        }
      }  
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 250%;
    left: 0;
    right:0;
    text-align: center;
    
  }
`
const Bg = styled.div`
position: fixed ;
background-color: #1d1f22;
top: -1000px;
left: -1000px;
width: 100%;
height: 100%;
z-index: 1;
transition: all .6s ease;
  &.active{
    top:0;
    left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0 0 40% 0;
  }
`

export default Navbar