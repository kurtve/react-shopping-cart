import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';


function App(props) {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	const removeItem = index => {
		// remove the item at the given index from the cart
		// note that a given product may appear multiple times in the cart
		const newCart = cart.slice(0, index).concat(cart.slice(index + 1));
		setCart(newCart);
	};

	const checkout = (cost) => {
		// remove all items from the cart, and show an alert
		window.alert(`Your card on file will be billed for $${cost}`);
		setCart([]);
		props.history.push('/');
	};


	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{cart, removeItem, checkout }}>
				<div className="App">
					<Navigation />

					{/* Routes */}
					<Route exact path="/" component={Products} />

					<Route path="/cart" component={ShoppingCart} />

				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
