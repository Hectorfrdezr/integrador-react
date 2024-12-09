import React, { useState } from 'react';
import Card from '../card/Card';
import styled from 'styled-components';
import products from '../data/products/';  
import Modal from '../modal/Modal';       

function ProductList() {
  const [cart, setCart] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalCallback, setModalCallback] = useState(null);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.title === product.title);
    if (existingItem) {
      setCart(cart.map(item =>
        item.title === product.title
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productTitle) => {
    setCart(cart.filter(item => item.title !== productTitle));
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleCheckout = () => {
    setModalMessage('¿Desea finalizar la compra?');
    setModalCallback(() => () => {
      clearCart();
      setIsModalVisible(false);
    });
    setIsModalVisible(true);
  };

  return (
    <List>
      <div className="Listcontainer">
        {['Comidas', 'Bebidas', 'Helados'].map(category => (
          <div key={category}>
            <h2>{category}</h2>
            <div className="catego-container">
              {products
                .filter(product => product.category === category)
                .map(product => (
                  <Card
                    key={product.id}
                    title={product.title}
                    btn={`${product.price}$`}
                    description={product.description}
                    imgSrc={product.imgSrc}
                    onAddToCart={() => addToCart(product)}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>

     
      <Modal 
        message={modalMessage}
        isVisible={isModalVisible}
        onConfirm={modalCallback}
        onClose={() => setIsModalVisible(false)}
      />
    </List>
  );
}
const List = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .Listcontainer{
    padding: 3rem 1rem 2rem;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    @media(max-width:325px){
      padding: 2rem 0 0 0;
      text-align: center;
      justify-content: center;
      align-items: center;
    }
  }
  .catego-container{
    padding: 3rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
    @media(max-width:625px){
      flex-direction: column;
      justify-content: center;
        align-items: center;
        text-align: center;
      }
      a{
        width: 100%;
        text-align: center;
        padding: 12px;
      }
      @media(max-width:325px){
        a{
          text-align: center;
          padding: 2px;
        }
      }
    }
  h2{
    color: aliceblue;
    font-size: 3rem;
    text-align: left;
    padding: 0 0 0 85px ;
    cursor: pointer;
  @media(max-width:980px){
    text-align: center;
    margin-right: 60px;
  }
  @media(max-width:780px){
    font-size: 2.5rem;
  }
  @media(max-width:625px){
    font-size: 2rem;
  }
    @media(max-width:525px){
     font-size: 1.5rem;
    padding: 0 4px 0 0;
    margin: 0;
    }
    @media(max-width:325px){
     font-size: 20px;
     margin: 0;
    }
  }
  h2:hover{
    color: #fcda30;
  }
  img{
    width: 55%;
    border-radius: 12px;
    margin-bottom: 12px;
  }
  h3{
    font-size: 1.2rem;
  }
  .catego.container:nth-child(2){
    h3{
      font-size: 3rem;
    }
  }
`
export default ProductList