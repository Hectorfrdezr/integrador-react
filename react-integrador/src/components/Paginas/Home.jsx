import bgvideo from "../../video/bgvino.mp4";
import styled from "styled-components";

function Home() {
  return (
    <Portada>
      <video autoPlay loop muted className="video-background">
        <source src={bgvideo} type="video/mp4" />
      </video>
    </Portada>
  );
}

const Portada = styled.div`
  position: absolute; 
  width: 100%;
  height: 100vh; 
 

  .video-background {
    position:relative;
    top: 0;
    left: 0;
    width: 100%; 
    height: 100%; 
    object-fit: cover;
    z-index: -1;
    
    @media (max-width: 525px){
      width:100%;
      
      }
    }

  .content {
    position: relative; 
    width: 100%;
    height: 100%; 
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    z-index: 1; 
  }

  
`;

export default Home;