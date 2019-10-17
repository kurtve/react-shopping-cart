import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

// Components
import Item from './ShoppingCartItem';


const ShoppingCart = () => {

	const { cart, removeItem, checkout } = useContext(CartContext);

	const getCartTotal = () => {
		return cart.reduce((acc, item) => {
			return acc + item.price;
		}, 0).toFixed(2);
	};

	const cartTotal = getCartTotal();

	return (
		<div className="shopping-cart">
			{cart.map((item, idx) => (
				<Item key={idx} item={item} removeItem={removeItem} index={idx} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${cartTotal}</p>
				<button onClick={e => checkout(cartTotal)}>
					Checkout
				</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
