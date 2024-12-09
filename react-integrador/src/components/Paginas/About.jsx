import React from 'react'
import styled from 'styled-components'

function About() {
  return (
    <Sobre>
        <div className="about">
        <div className="sobre-info">
            <h2>Sobre Nosotros</h2>
            <h3>Bienvenidos a El Buen Sabor</h3>
            <p>En El Buen Sabor, nos apasiona la comida rápida de calidad. Desde el primer día, nuestro objetivo ha sido ofrecer platos deliciosos, preparados con ingredientes frescos y de alta calidad. Queremos que cada bocado sea una experiencia memorable para nuestros clientes.</p>
        </div>
        <div className="sobre-info">
            <h3>Nuestra Historia</h3>
            <p>El Buen Sabor abrió sus puertas en 2020 en chile. Fundado por random 313, nuestro restaurante nació con la visión de combinar la rapidez de la comida rápida con el sabor y la calidad de un restaurante gourmet. A lo largo de los años, hemos crecido y nos hemos expandido, pero nuestros valores fundamentales han permanecido los mismos.</p>
        </div>
        <div className="sobre-info">
            <h3>Nuestra Misión</h3>
            <p>En El Buen Sabor, nos apasiona la comida rápida de calidad. Desde el primer día, nuestro objetivo ha sido ofrecer platos deliciosos, preparados con ingredientes frescos y de alta calidad. Queremos que cada bocado sea una experiencia memorable para nuestros clientes.Nuestra misión es simple: proporcionar comida rápida y deliciosa que puedas disfrutar en cualquier momento. Creemos que todos merecen disfrutar de una comida sabrosa y nutritiva, sin importar cuán ocupada sea su vida diaria. Es por eso que trabajamos incansablemente para asegurarnos de que cada platillo en nuestro menú cumpla con los más altos estándares de sabor y calidad.</p>
        </div>
        <div className="sobre-info">
            <h3>Nuestros Valores</h3>
            <ul>
                <li>Calidad:<p>Utilizamos solo los mejores ingredientes para preparar nuestros platos.</p></li>
                <li>Rapidez:<p>Sabemos que tu tiempo es valioso, por eso nos esforzamos en servirte rápidamente sin sacrificar la calidad.</p></li>
                <li>Innovación:<p>Siempre estamos buscando nuevas maneras de sorprenderte con nuestros platillos.</p></li>
                <li>Satisfacción del Cliente:<p>Tu felicidad es nuestra prioridad. Nos encanta escuchar tus opiniones y mejorar constantemente.</p></li>
            </ul>
        </div>
        <div className="sobre-info">
            <h3>Nuestro Equipo</h3>
            <p>En El Buen Sabor, contamos con un equipo dedicado y apasionado por la gastronomía. Desde nuestros chefs hasta nuestro personal de atención al cliente, todos trabajamos juntos para brindarte una experiencia única. Creemos en el poder del trabajo en equipo y en la importancia de un ambiente de trabajo positivo y motivador.</p>
        </div>
        <div className="sobre-info">
            <h3>¡Únete a Nosotros!</h3>
            <p>Si compartes nuestra pasión por la comida rápida de calidad y quieres formar parte de nuestro equipo, siempre estamos buscando personas talentosas y motivadas. Visita nuestra sección de [Empleos](enlace a la página de empleos) para conocer las oportunidades disponibles.</p>
        </div>
        <div className="sobre-info">
            <h3>Contáctanos</h3>
            <p>Nos encantaría saber de ti. Si tienes alguna pregunta, comentario o simplemente quieres decir hola, no dudes en ponerte en contacto con nosotros a través de [correo electrónico], [teléfono] o visitando nuestra página de [Contacto](enlace a la página de contacto).</p>
        </div>
        </div>
    </Sobre>
  )
}

const Sobre= styled.div`
.sobre-info{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 30px 30px;
    color: aliceblue; 
}
.about{
    padding: 70px;
}
h2{
    text-align: center;
    margin-bottom: 30px;
}
h3{
    margin-bottom: 20px;
}
`

export default About