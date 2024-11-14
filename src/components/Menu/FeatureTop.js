import React from "react";
import "../../assets/styles/menu/feature.css";
import img from "../../assets/images/gift/137-95369.webp";
import img2 from "../../assets/images/gift/137-95400.jpg";
import img3 from "../../assets/images/gift/137-95248.webp";
import img4 from "../../assets/images/gift/137-95249.webp";

const FeatureSection = () => {
	return (
		<div className="feature-container">
			{/* First Feature Block */}
			<div className="feature-block">
				<img src={img} alt="Holiday drink" className="feature-image" />
				<div className="feature-content">
					<h1>Let’s celebrate the season, together</h1>
					<p>
						Let’s celebrate the season, together. Your festive faves, like the
						Peppermint Mocha, are back. Perfect for a little holiday magic
						that’s delicious hot, iced or blended.
					</p>
					<button className="feature-order-button">Order now</button>
				</div>
			</div>

			{/* Second Feature Block */}
			<div className="feature-block reverse">
				<div className="feature-content">
					<h1>New Cran-Merry Orange Refreshers</h1>
					<p>
						Festive flavors of sweet orange, tart cranberry and warm spice are
						shaken with real pieces of cranberry—enjoyed alone or with lemonade
						or coconutmilk.
					</p>
					<button className="feature-order-button">Order now</button>
				</div>
				<img
					src={img2}
					alt="Cran-Merry Orange Refreshers"
					className="feature-image"
				/>
			</div>

			{/* New Feature Section */}
		</div>
	);
};

export default FeatureSection;
