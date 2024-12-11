import React from 'react'
import CardHome from '../card/CardHome'
import styled from 'styled-components'

function Categorias() {
  return (
    <Categ>
       <div className="container">
              <h2>Promociones y Ofertas</h2>
              <div className="catego-container">
                    <CardHome title="TU COMIDA FAVORITOS" btn="Ordenar" description="Siempre a tiempo ." imgSrc="/img/comida.png" />
                    <CardHome title="TU BEBIDA FAVORITA" btn="Ordenar" description="Siempre para acompañar tu combo" imgSrc="/img/bebidas.png"  />
                    <CardHome title="UN POSTRE" btn="Ordenar"  description="Nunca puede faltar para completar el dia." imgSrc="/img/helado.png" />                    
                </div>
            </div>
    </Categ>
  )
}

const Categ = styled.div`
  .container{
    padding: 3rem 1rem 2rem;
    display: flex;
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
      a{
        width: 100%;
        text-align: center;
        padding: 12px;
      }
      @media(max-width:325px){
        a{
          text-align: center;
          padding: 2px;
        }
      }
    }
  h2{
    color: aliceblue;
    font-size: 3rem;
    text-align: left;
    padding: 0 0 0 85px ;
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
    color: #fcda30;
  }
  img{
    width: 85%;
    border-radius: 12px;
  }
  h3{
    font-size: 1.2rem;
  }
  .catego.container:nth-child(2){
    h3{
      font-size: 3rem;
    }
  }
   
`

export default Categorias