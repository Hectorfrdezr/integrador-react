import axios from 'axios'

export const fetchCocktails = async () => {
    try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
        return (response.data.drinks || []).map(drink => ({...drink,
            price: (Math.random() *10 + 5).toFixed(2),
        }));
    } catch(error){
        console.error ('Error fetching cocktails:', error);
        return[];
    }
};

export const fetchOrdinaryDrinks = async ()=> {
    try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink');
        return (response.data.drinks || []).map(drink =>({...drink,
            price: (Math.random() *10 + 5).toFixed(2),
        }));
    } catch (error){
        console.error('Error fetching ordinary drinks', error);
    }
}