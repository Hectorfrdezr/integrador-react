import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Paginas/Home';
import Layaot from './components/Paginas/Layaot';
import { CartProvider } from './context/CartContext';
import styled from 'styled-components';

function App() {
  
  return (
    <AppStyled> 
   <CartProvider> 
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Layaot/>}>
               <Route index element={<Home/>}/>
    
         </Route>
     </Routes>
    </BrowserRouter>
   </CartProvider>
   </AppStyled>
  );
}

const AppStyled = styled.div`
  width: 100%;
  min-height: 100vh; 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

export default App