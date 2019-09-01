import React, { useState, useEffect } from 'react';
import './List.css';
import RestaurantListItem from '../ListItem/ListItem';
import EventBus from '../../../scripts/eventBus';

const RestaurantList = () => {
	const [restaurants, setRestaurants] = useState([]);

	const getRestaurants = () => {
		var url = `http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json`;
		fetch(url)
			.then(response => {
				return response.json();
			})
			.then(json => {
				var restaurants = json.restaurants.map(jsonRestaurant => {
					return createRestaurant(jsonRestaurant);
				});
				setRestaurants(restaurants);
			});
	};

	const createRestaurant = jsonRestaurant => {
		var restaurant = {
			name: jsonRestaurant.name,
			category: jsonRestaurant.category,
			style: {
				background: `url(${jsonRestaurant.backgroundImageURL}) no-repeat center center`,
				backgroundSize: `cover`
			},
			address1: null,
			address2: null,
			phone: null,
			twitter: null,
			latitude: 0,
			longitude: 0
		};

		if (jsonRestaurant.location) {
			restaurant.address1 = jsonRestaurant.location.formattedAddress[0];
			restaurant.address2 = jsonRestaurant.location.formattedAddress[1];
			restaurant.latitude = jsonRestaurant.location.lat || 0;
			restaurant.longitude = jsonRestaurant.location.lng || 0;
		}

		if (jsonRestaurant.contact) {
			restaurant.phone = jsonRestaurant.contact.formattedPhone;
			restaurant.twitter = jsonRestaurant.contact.twitter;
		}

		return restaurant;
	};

	const openDetail = restaurant => {
		EventBus.dispatch('set-restaurant-detail', restaurant);
	};

	useEffect(getRestaurants, []);

	return (
		<div className="restaurant-list">
			{restaurants.map(restaurant => (
				<RestaurantListItem
					key={restaurant.name}
					restaurant={restaurant}
					onClick={() => openDetail(restaurant)}
				/>
			))}
		</div>
	);
};

export default RestaurantList;
