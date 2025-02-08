import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function CardHome({title , description , imgSrc,precio , btn}) {

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
        <Link to="ProductList">{btn}</Link>
    </div>
    
</CardInfo>
)
}

const CardInfo = styled.div`

border-radius: 10px;
padding: 30px;
position: relative;
text-align: center;
justify-content: center;
background-color: #161516;
backdrop-filter:blur(10px);
box-shadow: 0 5px 15px rgba(254, 254, 254, 0.1);
transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
width: 250px;
height: 300px;
cursor: pointer;
&:hover{
transform: translateY(-10px);
background-image: linear-gradient(45deg, #2b292a, #090909);
cursor: pointer;
}
@media(max-width:980px){
width: 250px;
height: 300px;
}
@media(max-width:703px){
width: 250px;
height: 405px;
}
@media(max-width:625px){
width: 250px;
height: 380px;
}
@media(max-width:525px){
  width: 250px;
  height: 300px;
}
.card-body{
  display: flex;
  margin-left: 35px;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 100px; 
}
img{
  width: 115px;
  height: 98px;
}
h3{    
display: block;
color: #ffffff;
font-size: 24px;
margin: 0 auto 15px;
@media(max-width:1024px){
      font-size: 20px;
    }
    @media(max-width:980px){
      font-size: 20px;
    }
    @media(max-width:625px){
      font-size:  18px;
    }
}
.card-footer{
text-align: center;
margin: 12px;

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
      font-size:  14px;
    }
}
p{
color: #fef6f6;
font-size: 20px;
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
a{

display: inline-block;
text-decoration: none;
outline: 0;
cursor: pointer;
border: 2px solid #000;
border-radius: 3px;
color: #fff;
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
        background: #f4a950;
        }            
}

`
export default CardHome