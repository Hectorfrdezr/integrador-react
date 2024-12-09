import Hero from "../hero/Hero"
import Productos from "../productos/Productos";
import Categorias from './../categorias/Categorias';
import Ayuda from './../ayuda/Ayuda';
import Footer from './../footer/Footer';


function Home() {
  return (
    <>  
        <Hero/>
        <Categorias/>
        <Productos/>
        <Ayuda/>
        <Footer/>
    </>
  )
}

export default Home