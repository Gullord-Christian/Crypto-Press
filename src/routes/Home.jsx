import React from "react";
import CoinSearch from "../components/CoinSearch";
import Trending from "../components/Trending";

const Home = ({ coins }) => {
	return (
		<div>
			<CoinSearch coins={coins} />
			<Trending coins={coins} />
		</div>
	);
};

export default Home;
