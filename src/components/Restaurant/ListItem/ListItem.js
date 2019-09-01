import React from 'react';
import './ListItem.css';

const RestaurantListItem = ({ restaurant, onClick }) => {
	return (
		<div
			className="restaurant-list-item"
			style={restaurant.style}
			onClick={onClick}
			onKeyPress={onClick}
			role="button"
			tabIndex={0}
		>
			<div className="details">
				<div className="name">{restaurant.name}</div>
				<div className="category">{restaurant.category}</div>
			</div>

			<div className="gradient-bg"></div>
		</div>
	);
};

export default RestaurantListItem;
