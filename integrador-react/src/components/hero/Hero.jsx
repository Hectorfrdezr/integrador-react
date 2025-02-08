import React from 'react'
import styled from "styled-components"
import hero from "/img/fondo 8.png"
// import logohero from '/img/fondo 8.png'
function Hero() {
  return (
    <Heroinfo>
    <div className="portada">
        <div className="hero-info">
         <h1>"Brindemos juntos, el mejor licor a un clic."</h1>
        </div>
        {/* <img src ={logohero}  alt="" className='logoHero'/>   */}
    </div>
    </Heroinfo>
  )
}

const Heroinfo = styled.div`
   .portada{
    width: 100%;
    height: 300px;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${hero});
    text-align: center;
    background-position: center;
    @media(max-width:980px){
      height: 400px;
      background-size: contain;
    }
    @media(max-width:525px){
      height: 250px;
      background-size:cover;
    }
  }
  .hero-info{
        
        max-width: 800px;
        height: auto;
        text-align: center;
        justify-content: center;
        align-items: center;
        padding: 80px;
        border-radius: 8px;
       
    }
.logoHero{
  width: 300px;
  height: auto;
  border-radius: 50px;
  padding: 18px;
   @media(max-width:525px){
    display: none;
   }
  
}
  h1{
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 50px;
    color: #f6f2f2;
    text-shadow:  3px 3px 8px #1c1b1b;
    margin-bottom: 8px;
   
        @media (max-width: 1024px){
          font-size: 38px;
        @media (max-width: 980px){
        font-size: 38px;
        max-width: 250px;
        }
        @media(max-width:625px){
        font-size: 2rem;
       
        }
        @media(max-width:376px){
          font-size: 1.8rem;
        }
        @media(max-width:326px){
          font-size: 1.4rem;
        }
        }
    }
    h3{
        font-size: 3rem;
        color: #fcfdfe;
        backdrop-filter: blur(2px);
        text-shadow:  3px 3px 4px #1c1b1b;
        margin-bottom: 8px;
        @media(max-width:1024px){
          font-size: 4rem;
        }
        @media(max-width:980px){
          font-size: 2rem;
        }
        @media(max-width:625px){
          font-size:  1rem ;
        }
        @media(max-width:325px){
          font-size:  14px ;
        }
    }  
    p{
        color: #fcfdfe;
        backdrop-filter: blur(2px);
        text-shadow:  3px 3px 4px #1c1b1b;
        font-size: 2rem;
        @media(max-width:1024px){
          font-size: 2rem;
        }
        @media(max-width:980px){
          font-size: 1.5rem;
        }
        @media(max-width:625px){
          font-size:  1rem ;
        }
        @media(max-width:325px){
          font-size:  12px;
        }
        

    }
`

export default Hero