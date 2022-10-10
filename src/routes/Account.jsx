import React from "react";
import WatchList from "../components/WatchList";
import { UserAuth } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
const Account = () => {
	const { user, logout } = UserAuth();
	const navigate = useNavigate();

	const handleSignout = async () => {
		try {
			await logout();
			navigate("/");
		} catch (e) {
			console.log(e.message);
		}
	};

	if (user) {
		return (
			<div className="max-w-[1140px] mx-auto">
				<div className="flex justify-between items-center my-12 py-8 rounded-div">
					<div>
						<h1 className="text-2xl font-bold">Account</h1>
						<div>
							<p>Welcome, {user?.email}</p>
						</div>
					</div>
					<div>
						<button
							onClick={handleSignout}
							className="border px-6 py-2 rounded-xl shadow-lg hover:shadow-2xl hover:bg-[#81e6d9] hover:text-black hover:border-none">
							Sign Out
						</button>
					</div>
				</div>
				<div className="flex justify-between items-center my-12 py-8 rounded-div">
					<div className="w-full min-h-[300px]">
						<h1 className="text-2xl font-bold py-4">My saved coins</h1>
						<WatchList />
					</div>
				</div>
			</div>
		);
	} else {
		return <Navigate to="/login" />;
	}
};

export default Account;
