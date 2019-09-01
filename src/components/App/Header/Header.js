import React from 'react';
import './Header.css';
import MapIcon from '../../../assets/images/ic-map.png';
import BackIcon from '../../../assets/images/ic-back.png';
import EventBus from '../../../scripts/eventBus';

const AppHeader = ({ restaurant }) => {
	const closeDetails = () => {
		EventBus.dispatch('set-restaurant-detail', null);
	};

	return (
		<div className="app-header">
			<button
				className="back-btn"
				style={{ visibility: restaurant ? 'visible' : 'hidden' }}
				onClick={closeDetails}
			>
				<img src={BackIcon} alt="back arrow" />
			</button>
			<div className="title">Lunch Tyme</div>
			<button className="map-btn">
				<img src={MapIcon} alt="map with marker" />
			</button>
		</div>
	);
};

export default AppHeader;
