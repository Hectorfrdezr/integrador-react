import React, { useContext, useState, useEffect } from 'react';
import Card from '../card/Card';
import styled from 'styled-components';
import { CartContext } from '../../context/CartContext';   
import { fetchCocktails,  fetchOrdinaryDrinks } from '../../api/ApisService';     


function ProductList() {
  const {addToCart} = useContext(CartContext);
  
  const [cocktails, setCocktails]= useState([]);
  const [ordinaryDrinks,setOrdinaryDrinks]= useState([]);
  

  useEffect(()=> {
    const fetchData = async () =>{
     const fetchedCocktails = await fetchCocktails();
     const fetchedOrdinaryDrinks = await fetchOrdinaryDrinks ();
     setCocktails (fetchedCocktails);
     setOrdinaryDrinks (fetchedOrdinaryDrinks);
    };

   fetchData();
  }, []);
                                                                                      
  
  return (
    <List>
      <div className="Listcontainer">
          <div >
            <h2>Cockteles</h2>
            <div className="catego-container">
               {cocktails.map(drink =>(
                  <Card
                    key={drink.idDrink}
                    title={drink.strDrink}
                    btn={`$${drink.price}`}
                    imgSrc={drink.strDrinkThumb}
                    onAddToCart={() => addToCart(drink)}
                  />
                ))}
            </div>
          </div>
        
          <div>
          <h2>Bebidas sencillas</h2>
          <div className="catego-container">
            {ordinaryDrinks.map(drink => (
              <Card
                key={drink.idDrink}
                title={drink.strDrink}
                btn={`$${drink.price}`}
                imgSrc={drink.strDrinkThumb}
                onAddToCart={() => addToCart(drink)}
              />
            ))}
          </div>
        </div>
      </div>
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
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: aliceblue;
    font-size: 3rem;
    text-align: center;
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
    color: #f4a950;
  }
  img{
    width: 120px;
    height: 100px;
  }
`
export default ProductList