import React from 'react'
import styled from "styled-components"

function Card({title , description , imgSrc,precio , onAddToCart,btn}){

  return (
    <CardInfo>
        
        <div className="card-head"></div>

        <div className="card-body">
            <img src={imgSrc} />
        </div>
        <div className="card-footer">
            <h3>{title}</h3>
            <h4>{description}</h4> 
            <p>{precio}</p>
            <button onClick={onAddToCart}>{btn}</button>
        </div>
        
    </CardInfo>
  )
}

const CardInfo = styled.div`
  
    border-radius: 10px;
    padding: 40px;
    position: relative;
    text-align: center;
    background-color: #151515;
    box-shadow: 0 5px 15px rgba(254, 254, 254, 0.1);
    transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
    width: 250px;
    height: 320px;
    cursor: pointer;
  &:hover{
    transform: translateY(-10px);
    background-image: linear-gradient(45deg, #2b292a, #090909);
    cursor: pointer;
  }
  

  .card-body{
    width: 120px;
    height: 100px;
    margin-left: 30px;
    border-radius: 8px;
    object-fit:cover;
  }
  h3{    
    display: block;
    color: #ffffff;
    font-size: 14px;
    max-width: 320px;
    margin: 0 auto 15px;
    @media(max-width:1024px){
          font-size: 20px;
        }
        @media(max-width:980px){
          font-size: 14px;
        }
        @media(max-width:625px){
          font-size:  18px;
        }
  }
  .card-footer{
    text-align: center;
    margin: 30px 0 ;
    
  }
  h4{
    color: #fef6f6;
    line-height: 1.5;
    margin-bottom: 15px;
    @media(max-width:1024px){
          font-size: 14px;
        }
        @media(max-width:980px){
          font-size: 12px;
        }
        @media(max-width:625px){
          font-size:  10px;
        }
  }
  p{
    color: #fef6f6;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 12px;
    @media(max-width:1024px){
          font-size: 18px;
        }
        @media(max-width:980px){
          font-size: 16px;
        }
        @media(max-width:625px){
          font-size:  14px;
        }
  }
  button{
    
    display: inline-block;
                outline: 0;
                margin-top: 20px;
                cursor: pointer;
                border: 2px solid #000;
                border-radius: 3px;
                color: #fff;
                background: #000;
                font-size: 14px;
                font-weight: 600;
                line-height: 28px;
                padding:0 12px;
                text-align:center;
                transition-duration: .15s;
                transition-property: all;
                transition-timing-function: cubic-bezier(.4,0,.2,1);
                &:hover{
                    color: #000;
                    background: #f4a950;
                }            
  }
  
  `
export default Card