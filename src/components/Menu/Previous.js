import React from "react";
import "../../assets/styles/menu/previous.css"; // Make sure you link this CSS file
import img from "../../assets/images/gift/moon-phases.webp"; // Make sure you link this image file
const PreviousComponent = () => {
	return (
		<div className="previous-component-wrapper">
			{/* Animated Moon Phases */}
			<div className="moon-phase-section">
				<h2>Previous</h2>
				<div className="moon-illustration">
					{/* Replace with your animated illustration */}
					<img src={img} alt="Moon Phases" />
				</div>
			</div>

			{/* "When history repeats itself" */}
			<div className="history-repeat">
				<p>When history repeats itself</p>
			</div>

			{/* Previous Orders Section */}
			<div className="previous-orders-section">
				<h3>Previous orders will appear here to quickly order again.</h3>
			</div>

			{/* Authentication Options: Sign in and Join Now */}
			<div className="auth-buttons">
				<button className="sign-in-btn">Sign in</button>
				<button className="join-now-btn">Join now</button>
			</div>
		</div>
	);
};

export default PreviousComponent;
