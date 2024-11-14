import React from "react";
import "../../assets/styles/menu/favourite.css"; // Make sure you link this CSS file
import img from "../../assets/images/gift/fav-tapes.webp"; // Make sure you link this image file
const PreviousComponent = () => {
	return (
		<div className="fav-previous-component-wrapper">
			{/* Animated Moon Phases */}
			<div className="fav-moon-phase-section">
				<h2>Favorites</h2>
				<div className="fav-moon-illustration">
					{/* Replace with your animated illustration */}
					<img src={img} alt="Moon Phases" />
				</div>
			</div>

			{/* "When history repeats itself" */}
			<div className="fav-history-repeat">
				<p>Save your favorite mixes</p>
			</div>

			{/* Previous Orders Section */}
			<div className="fav-previous-orders-section">
				<h3>
					Use the heart to save customizations. Your favorites will appear here
					to order again.
				</h3>
			</div>

			{/* Authentication Options: Sign in and Join Now */}
			<div className="fav-auth-buttons">
				<button className="fav-sign-in-btn">Sign in</button>
				<button className="fav-join-now-btn">Join now</button>
			</div>
		</div>
	);
};

export default PreviousComponent;
