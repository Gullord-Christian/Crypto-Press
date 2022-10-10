import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Account from "./routes/Account";
import CoinPage from "./routes/CoinPage";
import Footer from "./components/Footer";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";
function App() {
	const [coins, setCoins] = useState([]);
	const url =
		"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true";

	useEffect(() => {
		axios.get(url).then((res) => {
			setCoins(res.data);
		});
	}, [url]);

	return (
		<ThemeProvider>
			<AuthContextProvider>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home coins={coins} />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/account" element={<Account />} />
					<Route path="/coin/:coinId" element={<CoinPage />}>
						<Route path=":coinId" />
					</Route>
				</Routes>
				<Footer />
			</AuthContextProvider>
		</ThemeProvider>
	);
}

export default App;
