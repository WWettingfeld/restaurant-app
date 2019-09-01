import React from 'react';
import './Detail.css';
import GoogleMapReact from 'google-map-react';
import GoogleMapMarker from '../../GoogleMapMarker/GoogleMapMarker';

const RestaurantDetail = ({ restaurant }) => {
	if (!restaurant) {
		return null;
	} else {
		return (
			<div className="restaurant-detail">
				<div className="map">
					<GoogleMapReact
						bootstrapURLKeys={{
							key: 'AIzaSyAdwaf-BmTv96dn2pnAOK9WhunLGY-PkRI'
						}}
						defaultCenter={{
							lat: restaurant.latitude,
							lng: restaurant.longitude
						}}
						defaultZoom={14}
					>
						<GoogleMapMarker
							lat={restaurant.latitude}
							lng={restaurant.longitude}
						/>
					</GoogleMapReact>
				</div>
				<div className="header">
					<div className="name">{restaurant.name}</div>
					<div className="category">{restaurant.category}</div>
				</div>
				<div className="details">
					<div className="address">
						{restaurant.address1} <br />
						{restaurant.address2}
					</div>
					<div className="phone">{restaurant.phone}</div>
					<div className="twitter">
						{restaurant.twitter ? `@${restaurant.twitter}` : ``}
					</div>
				</div>
			</div>
		);
	}
};

export default RestaurantDetail;
