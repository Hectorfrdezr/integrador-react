import React from 'react'
import styled from "styled-components"
import pedido from "../../../public/img/pedido.png"
import { Link } from 'react-router-dom'

function Productos() {
  return (
        <Product>
          <div className="container">
            <div className="pedido-contain">
            <img src={pedido} alt="" />
            <div className="pedido-info">
                <h3>ORDENAR NUNCA FUE TAN FACIL.</h3>
                <h2>
                  ¡Haz tu pedido con un click!
                </h2>
                <Link to="Productlist">Ordenar</Link>
              </div>  
            </div>
          </div>
        </Product> 
  )
}

const Product = styled.div`
  .container{
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .pedido-contain{
    padding: 2rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1200px;
    text-align: center;
    gap: 2rem;
    @media(max-width:1025px){
      h3{
        font-size: 2rem;
      }
    }
    @media(max-width:980px){
    h3{
      font-size: 1rem;
    }
    h2{
      font-size: 1rem;
      margin-bottom: 30px;
    }
    img{
      width: 32%;
    }
  }
  @media(max-width:703px){
   img{
    width: 35%;
   }
   h3{
    font-size: 1rem;
   }
   h2{
    font-size: .9rem;
    margin-bottom: 12px;
   }
  }
  @media(max-width:625px){
    img{
      width: 35%;
    }
   
  }
    @media(max-width:525px){
      img{
        width: 100%;
      }
      h3{
        font-size: 14px;
      }
  }
}
  img{
    width: 25%;
    box-shadow: 0 5px 15px rgba(231, 233, 148, 0.932);
    border-radius: 8px;
  }
  h3{
    color: aliceblue;
    font-size: 3rem;
    cursor: pointer;
  }
  h3:hover{
    color: #fcda30;
  }
  h2{
    color: aliceblue;
    margin-bottom: 24px;
  }
  a{
    
    display: inline-block;
    text-decoration:none;     
    outline: 0;
    cursor: pointer;
    border: 2px solid #000;
    border-radius: 8px;
    color: #fff;
    background: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    padding: 12px 20px;
    text-align:center;
    transition-duration: .15s;
    transition-property: all;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    &:hover{
      color: #000;
      background: rgb(255, 218, 87);
      }            
  }
    
`
export default Productos