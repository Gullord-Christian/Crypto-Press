import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ToggleMode from "../components/ToggleMode";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const { user, logout } = UserAuth();
	const navigate = useNavigate();

	const handleNav = () => {
		setNav(!nav);
	};

	const handleSignout = async () => {
		try {
			await logout();
			navigate("/");
		} catch (e) {
			console.log(e.message);
		}
	};

	return (
		<div className="rounded-div flex items-center justify-between h-20 font-bold">
			<Link to="/">
				<h1 className="text-2xl hover:text-accent">CryptoPress</h1>
				<img src="" alt="" />
			</Link>
			<div className="hidden md:block">
				<ToggleMode />
			</div>
			{user?.email ? (
				<div>
					<Link to="/account" className="p-4 text-accent">
						Account
					</Link>
					<button onClick={handleSignout}>Sign out</button>
				</div>
			) : (
				<div className="hidden md:block">
					<Link to="/register" className="p-4 hover:text-accent">
						Register
					</Link>
					<Link
						to="/login"
						className="bg-button text-btnText px-5 py-2 ml-2 rounded-2xl ">
						Login
					</Link>
				</div>
			)}
			{/* Menu  */}
			<div onClick={handleNav} className="block md:hidden cursor-pointer z-10">
				{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>
			{/* Mobile Menu */}
			<div
				className={
					nav
						? "md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-200 z-10"
						: "fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between"
				}>
				<ul className="w-full p-4">
					<li onClick={handleNav} className="border-b py-6">
						<Link to="/">Home </Link>
					</li>
					<li onClick={handleNav} className="border-b py-6">
						<Link to="/account">Account </Link>
					</li>
					<li className=" py-6">
						<ToggleMode />
					</li>
				</ul>
				<div className="flex flex-col w-full p-4">
					<Link to="/register">
						<button
							onClick={handleNav}
							className="w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl ">
							Register
						</button>
					</Link>
					<Link to="/login">
						<button
							onClick={handleNav}
							className="w-full my-2 p-3 bg-button text-btnText border border-secondary rounded-2xl shadow-xl ">
							Login
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
