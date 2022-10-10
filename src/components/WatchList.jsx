import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";

const WatchList = () => {
	const [coins, setCoins] = useState([]);
	const { user } = UserAuth();

	useEffect(() => {
		onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
			setCoins(doc.data()?.watchList);
		});
	}, [user?.email]);

	const coinPath = doc(db, "users", `${user?.email}`);

	const deleteCoin = async (passedid) => {
		try {
			const result = coins.filter((item) => item.id !== passedid);

			await updateDoc(coinPath, {
				watchList: result,
			});
		} catch (e) {
			console.log(e.message);
		}
	};

	return (
		<div>
			{coins?.length === 0 ? (
				<p>
					You don't have any coins saved. Please save a coin to add it to
					your watch list.{" "}
					<Link to="/">
						Click <span className="text-accent font-bold">here</span> to
						search coins.
					</Link>
				</p>
			) : (
				<table className="w-full border-collapse text-center">
					<thead>
						<tr className="border-b">
							<th className="px-4">Rank #</th>
							<th className="text-left">Coin</th>
							<th>24h</th>
							<th>Price</th>
							<th>ATH</th>
							<th className="text-left">Remove</th>
						</tr>
					</thead>
					<tbody>
						{coins?.map((coin) => (
							<tr key={coin.id} className="h-[60px] overflow-hidden">
								<td>{coin?.rank}</td>
								<td>
									<Link to={`/coin/${coin.id}`}>
										<div className="flex items-center">
											<img
												src={coin?.image}
												className="w-8 mr-4"
												alt="/"
											/>
											<div>
												<p className="hidden sm:table-cell sm:mr-2">
													{coin?.name}
												</p>
												<p className="text-gray-500 text-left text-sm hidden md:table-cell">
													({coin?.symbol.toUpperCase()})
												</p>
											</div>
										</div>
									</Link>
								</td>
								<td>
									{coin.change > 0 ? (
										<p className="text-green-600 mr-2">
											{coin.change.toFixed(2)}%
										</p>
									) : (
										<p className="text-red-600 mr-2">
											{coin.change.toFixed(2)}%
										</p>
									)}
								</td>

								<td>${coin?.current_price.toLocaleString()}</td>
								<td>${coin?.ath.toLocaleString()}</td>
								<td className="pl-8">
									<AiOutlineClose
										onClick={() => deleteCoin(coin.id)}
										className="cursor-pointer hover:scale-105 ease-in-out duration-300 hover:text-red-600"
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default WatchList;
