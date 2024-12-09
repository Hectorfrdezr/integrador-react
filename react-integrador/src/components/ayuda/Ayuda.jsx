import React from 'react'
import styled from "styled-components"
import mapa from "../../../public/img/mapa.png"
import { Link } from 'react-router-dom'

function Ayuda() {
  return (
    <Ayud>
            <h2>CONÓCENOS:</h2>
        <div className="container">
            <div className="a-contain">
                <Link to="About">Acerca de El Buen Sabor</Link>
                <Link to="About">Historia</Link>
                <Link to="Registro">Contáctanos</Link>
            </div>
            <img src={mapa} alt="" />
        </div>
    </Ayud>
  )
}
const Ayud = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
.container{
    display: flex;
    justify-content: space-around;
    @media(max-width:325px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
.a-contain{
    flex-direction: column;
    display: flex;
    margin-top:8rem;
    gap: 3rem;

    @media(max-width:625px){
        margin: 2rem 0 0;
    }
    @media(max-width:325px){
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
    }
}
img{
    width: 25%;
    border-radius: 12px;
    margin-top: 20px;
    cursor: pointer;
    &:hover{
      box-shadow: 0 5px 15px rgba(247, 247, 245, 0.932);;
    }
    @media(max-width:625px){
        width: auto;
        height: 200px;
    }
    @media(max-width:325px){
        width: 50%;
    }
}
h2{
    font-size: 2rem;
    text-align: center;
    margin: 20px 0;
    font-weight: 700;
    color: aliceblue;
    &:hover{
        color:#fcda30 ;
    }
}
a{
    text-decoration: none;
    color: aliceblue;
    text-align: left;
    font-size: 20px;
    &:hover{
        color:#fcda30 ;
    }
    @media(max-width:625px){
        font-size: 14px;
    }
}
` 

export default Ayuda