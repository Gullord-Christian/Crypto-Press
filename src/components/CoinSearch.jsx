import React, { useState } from "react";
import CoinItem from "./CoinItem";
import Pagination from "./../components/Pagination";

const CoinSearch = ({ coins }) => {
	const [searchText, setSearchText] = useState("");
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [coinsPerPage] = useState(20);

	// pagination, using some logic to get coins per page to pass to Pagination component
	const indexOfLastCoin = currentPage * coinsPerPage;
	const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
	const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	if (loading) {
		return <h2>We are gathering the coins, please hang tight!</h2>;
	}

	return (
		<div className="rounded-div my-4">
			<div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
				<h1 className="text-2xl font-bold my-2">Find a Coin</h1>

				<form>
					<input
						className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl"
						type="text"
						placeholder="Search..."
						onChange={(e) => setSearchText(e.target.value)}
					/>
				</form>
			</div>
			<div className="my-2">
				<Pagination
					coinsPerPage={coinsPerPage}
					totalCoins={coins.length}
					paginate={paginate}
				/>
			</div>
			<table className="w-full border-collapse text-center">
				<thead>
					<tr className="border-b">
						<th></th>
						<th className="px-4">#</th>
						<th className="text-left">Coin</th>
						<th></th>
						<th>Price</th>
						<th>24h</th>
						<th className="hidden md:table-cell">24h-Volume</th>
						<th className="hidden sm:table-cell">Market Val</th>
						<th className="hidden md:table-cell">Last 7</th>
						<th>ATH</th>
					</tr>
				</thead>
				<tbody>
					{currentCoins
						.filter((value) => {
							if (searchText === "") {
								return value;
							} else if (
								value.name
									.toLowerCase()
									.includes(searchText.toLowerCase())
							) {
								return value;
							}
						})
						.map((coin) => (
							<CoinItem key={coin.id} coin={coin} />
						))}
				</tbody>
			</table>
		</div>
	);
};

export default CoinSearch;
