import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.js';

function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div>
      <h2>Tu Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No tienes artículos en el carrito.</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
             <li key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <img src={item.imgSrc} alt={item.title} style={{ width: '50px', height: '50px', marginRight: '10px' }}/>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Vaciar Carrito</button>
        </>
        
      )}
    </div>
  );
}

export default CartPage;