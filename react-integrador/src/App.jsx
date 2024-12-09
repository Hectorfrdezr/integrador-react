import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Paginas/Home';
import ProductList from './components/Paginas/ProductList';
import Registro from './components/Paginas/Registro';
import Layaot from './components/Paginas/Layaot';
import About from './components/Paginas/About';

function App() {
  
  return (
   <BrowserRouter>
   <Routes>
  //        <Route path='/' element={<Layaot/>}>
              <Route index element={<Home/>}/>
  //          <Route path='ProductList' element={<ProductList/>}/>
  //          <Route path='Registro' element={<Registro/>}/>
  //          <Route path='About' element={<About/>}/>
  //       </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App