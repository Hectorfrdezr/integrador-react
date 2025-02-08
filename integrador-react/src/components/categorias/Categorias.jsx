import React from 'react'
import styled from 'styled-components'
import hero1 from '/img/fondo 3.png'
import hero2 from '/img/fondo 4.png'
import hero3 from '/img/fondo 2.png'
import {Link} from 'react-router-dom'



function Categorias() {
  return (
    <Categ>
       <div className="container">
              <h2>Promociones y Ofertas</h2>
              <div className="catego-container">
                  <div className='catego-card'>
                    <Link to="Contacto"><button className='card1'><h3>Contáctanos</h3></button></Link>
                    <Link to="ProductList"><button className='card2'><h3>Productos</h3></button></Link>
                    <Link to="About"><button className='card3'><h3>Conocenos</h3></button></Link>
                  </div>
              </div>
            </div>
    </Categ>
  )
}

const Categ = styled.div`
  .container{
    padding: 3rem 1rem 2rem;
    display: flex;
    align-items: center;
    margin-top: 20px;
    flex-direction: column;
    justify-content: center;
    @media(max-width:325px){
      padding: 2rem 0 0 0;
      text-align: center;
      justify-content: center;
      align-items: center;
    }
  }
  .catego-container{
    padding: 3rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
     @media(max-width:625px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
    }
  h2{
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: #e9ebec;
    font-size: 3rem;
    text-align: center;
    cursor: pointer;
  @media(max-width:980px){
    text-align: center;
    margin-right: 60px;
  }
  @media(max-width:780px){
    font-size: 2.5rem;
  }
  @media(max-width:625px){
    font-size: 2rem;
  }
    @media(max-width:525px){
     font-size: 1.5rem;
    padding: 0 4px 0 0;
    margin: 0;
    }
    @media(max-width:325px){
     font-size: 20px;
     margin: 0;
    }
  }
  h2:hover{
    color: #f4a95a;
  }
.catego-card{
  gap: 22px;
  display: flex;
  flex-wrap:wrap;

}
.card1,
.card2,
.card3{
  width: 350px;
  height: 350px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(26, 25, 25, 0.863);
  background: url(${hero1});
  background-size: cover;
  border-radius: 20px;
  background-position: center;
  &:hover{
    transform: translateY(-10px);
    cursor: pointer;
    filter: brightness(70%);
  }
  @media(max-width:1024px){
    width: 210px;
    height: 220px;
  }
  @media(max-width:768px){
    width: 220px;
    height: 274px;
    background-size: cover;
    background-position: center;
  }
  @media (max-width:525px){
    width: 350px;
  }
}
.card2{
  background: url(${hero2});
  background-size: cover;
}
.card3{
  background: url(${hero3});
  background-size: cover;
}
h3{
  color: #e9ebec;
  font-size: 48px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  text-shadow: 0 5px 15px rgba(26, 25, 25, 0.938);
  &:hover{
    color: #f4a95a;
  }
  @media(max-width:1024px) {
    font-size: 36px;
  }
  @media(max-width:768px){
    font-size: 34px;
  }
}
`

export default Categorias