import Hero from "../hero/Hero"
import Categorias from './../categorias/Categorias';
import styled from "styled-components";



function Home() {
  return (
    <Homefull> 
        <Hero/>
        <Categorias/>
    </Homefull>
  )
}

const Homefull = styled.div`
width: 100% auto;


`


export default Home