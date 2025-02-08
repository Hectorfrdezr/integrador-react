import React from 'react';
import { useState , useEffect, useContext} from 'react';
import styled from 'styled-components';
import Burger from "../menu/Burger";
import {Outlet,Link, useLocation} from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import {FaShoppingCart}  from "react-icons/fa";
import logo  from '../../../public/img/logo.png';
import Modal from '../modal/Modal';


function Navbar() {
  const [ clicked , setClicked] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const location = useLocation();
  const { cartItems, removeFromCart, clearCart,incrementQuantity,decreaseQuantity,totalQuantity,totalPrice } = useContext(CartContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalCallback, setModalCallback] = useState(null);
  
  const handleClearCart = () => {
    setModalMessage('¿Estás seguro de que deseas vaciar el carrito?');
    setModalCallback(() => () => {
      clearCart();
      setIsModalVisible(false);
    });
    setIsModalVisible(true);
  };

const handleCheckout = () => {
  console.log('Artículos del carrito antes de pagar:', cartItems);
      if(cartItems.length === 0){
        setModalMessage('El carrito está vacío. Agregue productos antes de finalizar la compra.');
        setIsModalVisible(true);
      } else {
    setModalMessage('¿Desea finalizar la compra?');
    setModalCallback(() => () => {
      clearCart();
      setIsModalVisible(false);
      alert('Compra realizada con éxito.');
    });
    setIsModalVisible(true);
    }
  };

  const handleClick = () => {
      setClicked(! clicked)
  }

  const toggleCart = () => {
    setCartVisible(!cartVisible);  
  };
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setClicked(false);
        setCartVisible(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setClicked(false);
    setCartVisible(false);
  }, [location]);

  useEffect(() => {
    function handleScroll() {
      setClicked(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
        <>
        <NavContainer>
          <div className="header">
            <img className='nav-logo' src={logo} alt="" />
            <div className={`links ${clicked ? `active` : ``}`}>
                <Link onClick={handleClick} to="/">Home</Link>
                <Link onClick={handleClick} to="ProductList">Productos</Link>
               <Link onClick={handleClick} to="Contacto">Contacto</Link>
                <Link onClick={handleClick} to="About">Sobre Nosotros</Link>
            </div>
              <div className="menu">
              <Burger clicked={clicked} handleClick={handleClick}/>  
            </div> 
            <div className="cart">
              <ShoppingCartIcon size={28} onClick={toggleCart}/>
              {cartItems.length > 0 && <span>{cartItems.length}</span>}
          </div>
         </div>  
          <Bg className={`initial ${clicked ? "active" : ""}`}></Bg>
        </NavContainer>

        {cartVisible && <Overlay onClick={toggleCart} />}

        <div className='compra'>
        <CartDropdown  $visible={cartVisible}>
        <h2>Tu Carrito</h2>
        {cartItems.length === 0 ? (
          <p>No hay artículos en el carrito.</p>
        ) : (
          <>
          <div className='carItem'>
            <ul>
              {cartItems.map(item => (
                <li key={item.idDrink} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div className='cardDiv'>
                  <div className='cardCart'>
                   <img src={item.strDrinkThumb}   
                    style={{ width: '50px', height: '50px', margin: '10px',borderRadius: '5px'}} 
                    />
                    <div className='descrition'>
                    {item.title}  {item.quantity} x {item.price}$
                    </div>
                    </div>
                   <div className='botones'>
                    <button onClick={()=>incrementQuantity(item.idDrink)}>+</button>
                   <button onClick={()=>decreaseQuantity(item.idDrink)}>-</button>
                  </div>
                  <button onClick={() => removeFromCart(item.idDrink)}>Eliminar</button>
                </div>
                </li>
              ))}
              <span></span>
            </ul>
            </div>
              <div className='totales'>
                <p>Total de productos: {totalQuantity}</p>
                <p>Total a pagar: ${totalPrice.toFixed(2)}</p>
             </div>
          <div className='accionDiv'>
            <div className='acciones'>    
              <button onClick={handleClearCart}>Vaciar Carrito</button>
              <button onClick={handleCheckout}>comprar</button>
            </div>
          </div>
          </>
        )};
           <Modal
          message={modalMessage}
          isVisible={isModalVisible}
          onConfirm={modalCallback}
          onClose={() => setIsModalVisible(false)}
            />

          </CartDropdown>
        </div>
      <Outlet/>
        </>
  )
};

const NavContainer = styled.nav`
  
  .nav-logo{
    width: 4%;
    border-radius: 50px;
    padding: 3px;
    cursor: pointer;
    @media (max-width: 768px){
      width: 8%;
      border-radius: 50px;
      padding: 5px;
    }
    @media (max-width: 525px){
      width : 8%;
      padding: 2px;
    }
    }
  .header{
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: linear-gradient(90deg, #1e1e1e, #292929);
    position:fixed;
    box-shadow: 0 2px 10px rgba(0,0,0,7);
    width: 100%;
    z-index: 999;
    @media (max-width:768px){
      display: flex;
      justify-content: space-evenly;
      gap: 50px;
      align-items:center;
    }
  }
  a{
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: #f5f5f5;
    text-decoration: none;    
    font-weight:bold;
    margin-right: 25px;
    transition: color 0.3s ease;
  }
  a:hover{
    color: #f4a950;
   
  }
  .menu{
    width: 12%;
    
    @media(min-width: 778px){
        display: none;
    } 
    }
  .cart {
      position: relative;
      
      
      a {
        color: white;
        text-decoration: none;
        position: relative;
      }
      span {
        position: absolute;
        top: -8px;
        right: -10px;
        background-color: #f4a950;
        color: #000000;
        border-radius: 50%;
        padding: 2px 6px;
        font-size: 12px;
      }
      @media(max-width:788px){
          width: 95px;
      }
    }

    @media (max-width: 768px) {
      .links {
        display: none;}
      }
    .links{
      position: fixed;
      top: -700px;
      left: -2000px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      transition: all .5s ease;
      right: 0;
      z-index: -1;
      
      a{
        font-size: 2rem;
        margin-top: 1rem;
        display: block;
      }
      @media(min-width:788px){
        position: initial;
        margin: 0;
        a{
          font-size: 1rem;
          display: inline;
        }
      }  
    }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 250%;
    left: 0;
    right:0;
    text-align: center;
   
    
  }
`;
const CartDropdown = styled.div.attrs(props => ({
  style: {
    transform: props.$visible ? 'translateX(0)' : 'translateX(100%)',
  },
}))`
  position: fixed;
  right: 0;
  margin-top:55px;
  width: 450px;
  height: 100%;
  background: linear-gradient(90deg, #1e1e1e, #292929);
  border: 0 1px 1px 1px solid #ccc;
  border-radius: 0 0 8px 8px ;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0,0, 0.1);
  transition: transform 0.5s ease-in-out;
  z-index: 999;
  justify-content: center;
  
  p{
    color: #ccc;
    text-align: center;
  }
  h2 {
    margin-bottom: 1rem;
    color: #fbfafa;
    text-align: center;
  }
  ul {
    list-style: none;
    padding: 0;
    font-weight: 100;
    color: #ccc;
    li {
      margin-bottom: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      
        };
      button {
        background: none;
        width: auto;
        gap: 12px;
        border: none;
        padding: 0.2rem 0.5rem;
        color: #f5f5f5;
        cursor: pointer;
        &:hover {
          background-color:#f4a950;
          border-radius: 5px;
          color: #0b0b0b;
            }
          }
        }
  
  button {
    width: 100%;
    padding: 0.5rem;
    background: linear-gradient(90deg, #1e1e1e, #0f0f0f);
    color: #f5f5f5;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
    border: none;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background: #f4a950;
      color :#0b0b0b ;
    }
  }
 
.botones{
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.cardCart{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.cardDiv{
  margin-top: 15px;
  width: 280px ;
  display: flex;
  justify-content: center;
  gap:13px;
  align-items: center;

}
.descrition{
  font-weight: bold;
  
}
.carItem {
    flex-grow: 1;
    max-height: 350px ;
    overflow-y: auto; 
    margin-bottom: 10px;
  }
.totales{
  
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
}
.accionDiv{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.acciones{
  
  width: 300px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
 
}

`;
const Bg = styled.div`
position: fixed ;
background-color: #1f1c1cdf;
top: -1000px;
left: -1000px;
width: 100%;
z-index: 1;
transition: all .3s ease;
  &.active{
    top:0;
    left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0 0 40% 0;
  }
`
const ShoppingCartIcon = styled(FaShoppingCart)`
  color: #f7f6f6; 
  width: 100%;
  cursor: pointer;
  &:hover {
    color: #ccc; 
  }
  `
  const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  backdrop-filter: blur(5px); 
  z-index: 792; 
  cursor: pointer;
`
;


export default Navbar