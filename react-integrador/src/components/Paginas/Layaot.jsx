
import Navbar from '../Navbar/Navbar';
import styled from 'styled-components';
function Layaot() {
  return (
    <LayoutStyled>
    <Navbar/>
    </LayoutStyled>
  )
}
const LayoutStyled = styled.div`
  width: 100%;
  min-height: 100vh; /* Que ocupe toda la altura */
  display: flex;
  flex-direction: column;
`;
export default Layaot