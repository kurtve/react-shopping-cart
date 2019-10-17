import React from 'react';

const Item = props => {

	return (
		<div className="shopping-cart_item">
			<img src={props.item.image} alt={`${props.item.title} book`} />

			<div>
				<h1>{props.item.title}</h1>
				<p>$ {props.item.price}</p>
				<button onClick={e => props.removeItem(props.index)}>
					Remove from cart
				</button>
			</div>
		</div>
	);
};

export default Item;
