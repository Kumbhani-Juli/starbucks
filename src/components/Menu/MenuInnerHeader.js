import React, { useState } from "react";
import "../../assets/styles/menu/menuinnerheader.css"; // Ensure the path is correct
import MenuInnerpage from "./MenuInnerpage";
import PreviousComponent from "./Previous";
import FavouriteComponent from "./Favourite";
import FeatureSection from "./Feature";
const HeaderTabs = () => {
	const [activeTab, setActiveTab] = useState("home");

	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
	};

	return (
		<>
			<div className="inner-menu-header-tabs-container">
				<div className="inner-menu-header-tab-menu">
					<button
						className={`inner-menu-header-tab ${
							activeTab === "home" ? "active" : ""
						}`}
						onClick={() => handleTabClick("home")}
					>
						Menu
					</button>
					<button
						className={`inner-menu-header-tab ${
							activeTab === "about" ? "active" : ""
						}`}
						onClick={() => handleTabClick("about")}
					>
						Featured
					</button>
					<button
						className={`inner-menu-header-tab ${
							activeTab === "services" ? "active" : ""
						}`}
						onClick={() => handleTabClick("services")}
					>
						Previous
					</button>
					<button
						className={`inner-menu-header-tab ${
							activeTab === "contact" ? "active" : ""
						}`}
						onClick={() => handleTabClick("contact")}
					>
						Favorites
					</button>
				</div>
			</div>

			<div className="inner-menu-header-tab-content">
				{activeTab === "home" && <MenuInnerpage />}
				{activeTab === "about" && <FeatureSection />}
				{activeTab === "services" && <PreviousComponent />}
				{activeTab === "contact" && <FavouriteComponent />}
			</div>
		</>
	);
};

export default HeaderTabs;
