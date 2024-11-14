import React, { useState } from "react";
import Innermenusidebardata from "../../Data/Innermenusidebardata";
import '../../assets/styles/menu/menuInnerPage.css';
import sectionImg1 from '../../assets/images/menu/drinks/hotCoffeeImages/sectionImg1.avif'

const MenuInnerpage = () => {
	const [selectedItem, setSelectedItem] = useState({
		Maintitle: Innermenusidebardata[0].Maintitle,
		selectedSubmenu: Innermenusidebardata[0].Submenu[0],
	});
	const [showMenu, setShowMenu] = useState(true)

	return (
		<>
			<div className="menu-inner-page-item-section-container">
				{/* Left Sidebar */}
				<div className="menu-inner-page-item-list-section">
					{Innermenusidebardata.map((data, index) => (
						<div key={index} className="menu-inner-page-item-list-inner-section">
							<h2>{data.Maintitle}</h2>
							{data.Submenu.map((item, subIndex) => (
								<li
									key={subIndex}
									onClick={() => { setSelectedItem({ ...data, selectedSubmenu: item }); setShowMenu(false) }}
									className={
										selectedItem.Maintitle === data.Maintitle &&
											selectedItem.selectedSubmenu.title === item.title
											? "active"
											: ""
									}
								>
									{item.title}
								</li>
							))}
						</div>
					))}
				</div>

				{/* Right Content Section */}
				<div className="menu-inner-page-item-list-right-content-section">
					{
						showMenu ? (
							<>
								<div className="menu-inner-page-right-content-item-list-section">
									<h3>Menu</h3>
									{
										Innermenusidebardata?.map((data, index) => (
											<div className="menu-inner-page-right-content-item-list-section-body" key={index}>
												<h2>{data?.Maintitle}</h2>
												<hr />
												<div className="menu-inner-page-right-content-item-list-section-body-content">
													{
														data?.Submenu?.map((item, index) => (
															<div className="menu-inner-page-right-content-item-list-section-inner-body-content" key={index}
																onClick={() => { setSelectedItem({ ...data, selectedSubmenu: item }); setShowMenu(false) }}
															>
																<img src={item?.sectionImg} alt="section-img" />
																<p>{item?.title}</p>
															</div>
														))
													}
												</div>
											</div>
										))
									}
								</div>
							</>
						) : (
							<>
								<p className="menu-inner-page-item-list-right-content-breadcrumb">
									<a href="" style={{ textDecoration: "none", color: "#797b79" }}>Menu</a> / <span>{selectedItem.selectedSubmenu.title}</span>
								</p>
								<h2>{selectedItem.selectedSubmenu.title}</h2>

								{selectedItem.selectedSubmenu.itemData ? (
									selectedItem.selectedSubmenu.itemData.map((section, sectionIndex) => (
										<div key={sectionIndex} className="menu-inner-page-item-list-right-inner-content">
											<h3>{section.title}</h3>
											<hr />
											<div className="menu-inner-page-item-list-right-inner-content-body">
												{section.itemList.map((item, itemIndex) => (
													<div key={itemIndex} className="menu-inner-page-item-list-right-inner-content-body-content">
														<img src={item.sectionImg} alt={item.itemName} />
														<h5>{item.itemName}</h5>
													</div>
												))}
											</div>
										</div>
									))
								) : (
									<p>No items available.</p>
								)}
							</>
						)
					}
				</div>
			</div>
		</>
	);
};

export default MenuInnerpage;
