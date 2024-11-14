import React from "react";
import "../assets/styles/joinnow.css"; // Ensure you create and link this CSS file

const JoinNow = () => {
	return (
		<div className="joinnow-wrapper">
			{/* Top content outside the card */}
			<div className="intro-content">
				<h2>Create an account</h2>
				<h3>Starbucks® Rewards</h3>
				<p className="rewards-intro">
					Join Starbucks Rewards to earn Stars for free food and drinks, any way
					you pay. Get access to mobile ordering, a birthday Reward, and more.
				</p>
			</div>

			{/* Card containing the form */}
			<div className="joinnow-container">
				<p className="required-note">* indicates required field</p>

				<div className="section">
					<h4>Personal Information</h4>
					<div className="input-group">
						<label htmlFor="username" className="input-label">
							This will be your username *
						</label>
						<input
							type="text"
							id="username"
							className="input-box"
							placeholder="Enter your username"
						/>
					</div>
				</div>

				<div className="section">
					<h4>Account Security</h4>
					<div className="input-group">
						<label htmlFor="password" className="input-label">
							Create a password *
						</label>
						<p className="password-note">
							8 to 25 characters long that includes at least 1 uppercase and 1
							lowercase letter, 1 number and 1 special character like an
							exclamation point or asterisk.
						</p>
						<input
							type="password"
							id="password"
							className="input-box"
							placeholder="Create your password"
						/>
					</div>
				</div>

				<div className="gift-card-note">
					<p>Already have a Starbucks gift card?</p>
				</div>

				<div className="email-preference">
					<h4>Collect more Stars & Earn Rewards</h4>
					<p>
						Email is a great way to know about offers and what’s new from
						Starbucks.
					</p>
					<div className="checkbox-group">
						<input type="checkbox" id="email-consent" />
						<label htmlFor="email-consent">
							Yes, I’d like email from Starbucks. Know about initiatives,
							announcements, and product offers.
						</label>
					</div>
				</div>

				<div className="terms-section">
					<input type="checkbox" id="agree-terms" required />
					<label htmlFor="agree-terms">
						* I agree to the <a href="#">Starbucks® Rewards Terms</a>, the{" "}
						<a href="#">Starbucks Card Terms</a> and have read the{" "}
						<a href="#">Starbucks Privacy Statement</a>.
					</label>
				</div>

				<div className="action-button">
					<button className="create-account-btn">Create account</button>
				</div>
			</div>
		</div>
	);
};

export default JoinNow;
