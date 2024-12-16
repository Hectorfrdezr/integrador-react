
import bgvideo  from "../../video/bgvino.mp4"
import styled from "styled-components"

function Home() {
  return (
    <Portada>
       <div className="bg"> 
          <video autoPlay loop muted >
            <source src={bgvideo} type="video/mp4"/>
          </video>
      </div>

    </Portada>
  )
}
const Portada = styled.div `
  width: 100%;
  display: flex;
  z-index: -1;
 `
 const Iniciar = styled.div`
  


`;

export default Home