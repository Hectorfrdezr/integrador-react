import React from 'react'
import styled from 'styled-components'

function About() {
  return (
    <Sobre>
        <div className="about">
        <div className="sobre-info">
            <h2>Sobre Nosotros</h2>
            <p>En Elixir Nocturno, nos apasiona el arte de disfrutar de un buen licor. Somos una tienda especializada en ofrecer una cuidada selección de vinos, destilados y cervezas artesanas de alta calidad. Nuestro objetivo es llevar a tu mesa los mejores sabores del mundo.</p> 

            <p>Trabajamos directamente con bodegas, destilerías y cervecerías para asegurarnos de que cada botella que encuentres en nuestra tienda sea única. Ya sea que busques un clásico Rioja, un gin premium para cócteles o una cerveza artesanal para un momento especial, aquí encontrarás lo que necesitas.</p>

            <p>Nuestro equipo está comprometido a ofrecerte una experiencia personalizada. Estamos siempre disponibles para asesorarte y ayudarte a encontrar la bebida perfecta para cualquier ocasión, ya sea una cena entre amigos, un regalo especial o simplemente darte un capricho.</p>

            <p>En Elixir Nocturno, creemos que cada botella cuenta una historia. Te invitamos a visitarnos, explorar nuestras opciones y formar parte de nuestra comunidad de amantes de los licores.</p>
            </div>
        </div>
    </Sobre>
  )
}

const Sobre= styled.div`
.sobre-info{
    display: flex;
    flex-direction: column;
    max-width: 700px;
    text-align:center;
    justify-content: center;
    align-items: center;
    color: aliceblue; 
    gap: 18px;
}
.about{
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
}
h2{
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
    margin-bottom: 10px;
}


`

export default About