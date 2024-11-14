import React from "react";
import "../assets/styles/signin.css"; // Ensure you create and link this CSS file

const SignUp = () => {
	return (
		<div className="signup-container">
			<h2 className="signup-title">Sign in or create an account</h2>
			<div className="signup-card">
				<p className="required-note">* indicates required field</p>

				<div className="input-group">
					<label htmlFor="username" className="input-label">
						Username or email address *
					</label>
					<input
						type="text"
						id="username"
						className="input-box"
						placeholder="Enter your username or email"
					/>
				</div>

				<div className="input-group">
					<label htmlFor="password" className="input-label">
						Password *
					</label>
					<input
						type="password"
						id="password"
						className="input-box"
						placeholder="Enter your password"
					/>
				</div>

				<div className="keep-signed-in">
					<input type="checkbox" id="keep-signed-in" />
					<label htmlFor="keep-signed-in">Keep me signed in.</label>
				</div>

				<div className="links">
					<a href="#" className="forgot-link">
						Forgot your username?
					</a>
					<a href="#" className="forgot-link">
						Forgot your password?
					</a>
				</div>

				<div className="action-buttons">
					<button className="sign-in-btn">Sign in</button>
				</div>
			</div>

			<div className="rewards-info">
				{" "}
				<a href="#" className="join-rewards-btn">
					Join Starbucks® Rewards
				</a>
				<p>
					Join Starbucks® Rewards to earn free food and drinks, get free
					refills, pay and order with your phone, and more.
				</p>
				<a href="#" className="join-now-link">
					Join now
				</a>
			</div>
		</div>
	);
};

export default SignUp;
