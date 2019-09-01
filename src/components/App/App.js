import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import './App.css';

import AppHeader from './Header/Header';
import RestaurantList from '../Restaurant/List/List';
import RestaurantDetail from '../Restaurant/Detail/Detail';
import EventBus from '../../scripts/eventBus';

const App = () => {
	const [restaurant, setRestaurant] = useState(null);

	const attachListeners = () => {
		EventBus.subscribe('set-restaurant-detail', setRestaurantDetail);
	};

	const setRestaurantDetail = restaurant => {
		setRestaurant(restaurant);
	};

	useEffect(attachListeners, []);

	return (
		<div className={`app ${restaurant ? 'no-scroll' : ''}`}>
			<AppHeader restaurant={restaurant} />
			<RestaurantList />
			<CSSTransitionGroup
				transitionName="drawer"
				transitionEnterTimeout={300}
				transitionLeaveTimeout={300}
			>
				<RestaurantDetail restaurant={restaurant} key={restaurant} />
			</CSSTransitionGroup>
		</div>
	);
};

render(<App />, document.getElementById('root'));
