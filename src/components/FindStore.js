import React from "react";
import "../assets/styles/findstore.css"; // Import the CSS file for styling

const FindStore = () => {
	return (
		<div className="store-locator-container">
			<div className="store-locator-left">
				<div className="input-container">
					<input
						type="text"
						placeholder="Find a store"
						className="store-search-input"
					/>
					<button className="filter-btn">Filter</button>
				</div>

				<h3>We are unable to access your exact location.</h3>
				<p>
					To find a store, use the search feature, navigate using the map, or
					turn on location services.
				</p>

				<div className="privacy-notice">
					<p>Privacy Notice</p>
					<p>Terms of Use</p>
					<p>Do Not Share My Personal Information</p>
				</div>
			</div>

			<div className="store-locator-right">
				{/* Embed Google Map */}
				<iframe
					width="100%"
					height="800"
					frameBorder="0"
					style={{ border: 0 }}
					src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyC47iPEjT2G7xSurF6OmR35wxUF2c39X-s&center=37.0902,-95.7129&zoom=4`}
					allowFullScreen
				/>
			</div>
		</div>
	);
};

export default FindStore;
