import React from "react";
import "../../assets/styles/menu/featurebottom.css";
import img1 from "../../assets/images/gift/137-95248.webp";
import img2 from "../../assets/images/gift/137-95249.webp";
import img3 from "../../assets/images/gift/137-95371.jpg";
import img4 from "../../assets/images/gift/137-95372.jpg";
import img5 from "../../assets/images/gift/137-95405.jpg";
import img6 from "../../assets/images/gift/137-95406.jpg";
import img7 from "../../assets/images/gift/137-95389.jpg";
import img8 from "../../assets/images/gift/137-95390.webp";
const FeatureBottom = () => {
	const featureRows = [
		{
			leftImage: img1,
			leftTitle: "Elphaba’s Cold Brew",
			leftDescription:
				"A thrillifying creation inspired by the film WICKED. Starbucks® signature Cold Brew sweetened with peppermint-flavored syrup, topped with nondairy matcha cold foam and a dusting of magical candy sprinkles.",
			rightImage: img2,
			rightTitle: "Glinda’s Pink Potion",
			rightDescription:
				"A fantabulous Starbucks Refreshers® Beverage inspired by the film WICKED. Crafted with sweet mango and dragonfruit flavors, creamy coconutmilk and real dragonfruit. Topped with nondairy strawberry cold foam and sprinkles.",
			bgColor: "#1e3932",
		},
		// // Add more rows here as needed, with different content and images
		{
			leftImage: img3,
			leftTitle: "Caramel Brulée Latte",
			leftDescription:
				"Espresso, steamed milk and caramel brulée sauce are finished with whipped cream and a crunchy caramel brulée topping.",
			rightImage: img4,
			rightTitle: "Iced Gingerbread Oatmilk Chai",
			rightDescription:
				"Warm notes of gingerbread are combined with cozy chai spices and creamy oatmilk for a festive tea latte on ice",
			bgColor: "#d40434", // Replace with desired color
		},
		// // Repeat for additional rows as needed
		{
			leftImage: img5,
			leftTitle: "Iced Sugar Cookie Almondmilk Latte",
			leftDescription:
				"Starbucks® Blonde Espresso is combined with sugar cookie flavors and almondmilk on ice. Red and green sprinkles are added for a finishing touch.",
			rightImage: img6,
			rightTitle: "Chestnut Praline Latte",
			rightDescription:
				"Espresso and steamed milk join caramelized chestnut flavors with a topping of whipped cream and spiced praline crumbs.",
			bgColor: "#06ce8d",
			color: "black",
		},
		{
			leftImage: img7,
			leftTitle: "New Turkey Sage Danish",
			leftDescription:
				"A crisp and flaky pastry with turkey and stuffing spices, enrobed in a creamy béchamel sauce.",
			rightImage: img8,
			rightTitle: "New Snowman Cake Pop",
			rightDescription:
				"Vanilla cake mixed with buttercream, dipped in white-chocolaty icing with a snowman face and earmuffs.",
			bgColor: "#06ce8d",
			color: "black", // Replace with desired color
		},
	];

	return (
		<div className="feature-bottom-container">
			{featureRows.map((row, index) => (
				<div key={index} className="feature-bottom-row">
					{/* Left Side */}
					<div className="feature-bottom-block">
						<img
							src={row.leftImage}
							alt={row.leftTitle}
							className="feature-bottom-image"
						/>
						<div
							className="feature-bottom-content"
							style={{ backgroundColor: row.bgColor }}
						>
							<h1>{row.leftTitle}</h1>
							<p>{row.leftDescription}</p>
							<button className="order-button">Order now</button>
						</div>
					</div>

					{/* Right Side */}
					<div className="feature-bottom-block">
						<img
							src={row.rightImage}
							alt={row.rightTitle}
							className="feature-bottom-image"
						/>
						<div
							className="feature-bottom-content"
							style={{ backgroundColor: row.bgColor }}
						>
							<h1>{row.rightTitle}</h1>
							<p>{row.rightDescription}</p>
							<button className="order-button">Order now</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default FeatureBottom;
