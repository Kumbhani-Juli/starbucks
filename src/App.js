import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Reward from "./components/Reward";
import GiftCard from "./components/GiftCard";
import SignIn from "./components/Signin";
import MenuInnerHeader from "./components/Menu/MenuInnerHeader";
import FindStore from "./components/FindStore";
import JoinNow from "./components/JoinNow";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Header />
							<Home />
							<Footer />
						</>
					}
				/>{" "}
				<Route
					path="/menu-inner"
					element={
						<>
							<Header />
							<MenuInnerHeader />
							<Footer />
						</>
					}
				/>
				<Route
					path="/reward"
					element={
						<>
							<Header />
							<Reward />
							<Footer />
						</>
					}
				/>
				<Route
					path="/gift"
					element={
						<>
							<Header />
							<GiftCard />
							<Footer />
						</>
					}
				/>
				<Route
					path="/find-store"
					element={
						<>
							<Header />
							<FindStore />
							<Footer />
						</>
					}
				/>{" "}
				<Route
					path="/signin"
					element={
						<>
							<Header />
							<SignIn />
							<Footer />
						</>
					}
				/>{" "}
				<Route
					path="/join"
					element={
						<>
							<Header />
							<JoinNow />
							<Footer />
						</>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
