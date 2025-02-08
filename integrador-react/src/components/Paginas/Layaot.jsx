
import Navbar from '../Navbar/Navbar';
import styled from 'styled-components';
import Footer from '../footer/Footer';
function Layaot() {
  return (
    <LayoutStyled>
    <Navbar/>
    <Footer/>
    </LayoutStyled>
  )
}
const LayoutStyled = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
`;
export default Layaot