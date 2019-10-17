import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	const removeItem = index => {
		// removde the item at the given index from the cart
		// note that a given product may appear multiple times in the cart
		const newCart = cart.slice(0, index).concat(cart.slice(index + 1));
		setCart(newCart);
	};

	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{cart, removeItem }}>
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
