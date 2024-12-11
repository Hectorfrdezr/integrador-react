import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Paginas/Home';
import Layaot from './components/Paginas/Layaot';
import { CartProvider } from './context/CartContext';
function App() {
  
  return (
   <CartProvider> 
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Layaot/>}>
              <Route index element={<Home/>}/>
          
         </Route>
     </Routes>
    </BrowserRouter>
   </CartProvider>
  );
}

export default App