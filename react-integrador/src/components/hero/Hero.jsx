import React from 'react'
import styled from 'styled-components'

function Hero() {
  return (
    <Heroinfo>
      <div className="portada">
        <video autoPlay loop muted className="video-background">
          <source src="ruta-del-video.mp4" type="video/mp4" />
          Tu navegador no soporta el vídeo.
        </video>
        <div className="hero-info">
          <h1>El Buen Sabor</h1>
          <h3>Sabor en cada bocado.</h3>
          <p>“Comida rápida, pero sin atajos en el sabor.”</p>
        </div>
      </div>
    </Heroinfo>
  );
}

const Heroinfo = styled.div`
  .portada {
    position: relative; 
    width: 100%;
    height: 100vh; 
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden; 
  }

  .video-background {
    position: absolute; 
    top: 0;
    left: 0;
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
    z-index: -1;
  }

  .hero-info {
    z-index: 1; 
    color: #fff;
    text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.7);
    padding: 80px;
    border-radius: 8px;
  }

  h1 {
    font-family: cursive;
    font-size: 8rem;
    margin-bottom: 8px;
    @media (max-width: 1024px) {
      font-size: 7rem;
    }
    @media (max-width: 980px) {
      font-size: 4rem;
    }
    @media (max-width: 625px) {
      font-size: 2rem;
    }
    @media (max-width: 376px) {
      font-size: 1.8rem;
    }
  }

  h3 {
    font-size: 3rem;
    margin-bottom: 8px;
    @media (max-width: 1024px) {
      font-size: 4rem;
    }
    @media (max-width: 980px) {
      font-size: 2rem;
    }
    @media (max-width: 625px) {
      font-size: 1rem;
    }
    @media (max-width: 325px) {
      font-size: 14px;
    }
  }

  p {
    font-size: 2rem;
    @media (max-width: 1024px) {
      font-size: 2rem;
    }
    @media (max-width: 980px) {
      font-size: 1.5rem;
    }
    @media (max-width: 625px) {
      font-size: 1rem;
    }
    @media (max-width: 325px) {
      font-size: 12px;
    }
  }
`;

export default Hero