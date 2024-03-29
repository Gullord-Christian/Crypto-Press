import React from "react";
import ToggleMode from "./ToggleMode";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaGithub, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="rounded-div mt-8 pt-8 text-primary">
			<div className="grid md:grid-cols-2">
				<div className="flex justify-evenly w-full md:max-w-[300px] ">
					<div>
						<h2 className="font-bold text-accent uppercase">Support</h2>
						<ul>
							<li className="text-sm py-2">Help Center</li>
							<li className="text-sm py-2">Contact Us</li>
							<li className="text-sm py-2">API Status</li>
							<li className="text-sm py-2">Documentation</li>
						</ul>
					</div>
					<div>
						<h2 className="font-bold text-accent uppercase">Info</h2>
						<ul>
							<li className="text-sm py-2">About Us</li>
							<li className="text-sm py-2">Careers</li>
							<li className="text-sm py-2">Invest</li>
							<li className="text-sm py-2">Legal</li>
						</ul>
					</div>
				</div>

				<div className="text-right">
					<div className="w-full flex justify-end">
						<div className="w-full md:w-[300px] py-4 relative">
							<div className="flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]">
								<ToggleMode />
							</div>
							<p className="text-center md:text-right ">
								Sign up for crypto news
							</p>
							<div className="py-4">
								<form>
									<input
										className="bg-primary border border-input p-2  w-full shadow-xl rounded-2xl md:w-auto"
										type="email"
										placeholder="Enter your email"
									/>
									<button className="bg-button text-btnText px-4 p-2 w-full md:mr-2 rounded-2xl shadow-xl hover:shadow-2xl md:w-[200px] my-2">
										Sign Up
									</button>
								</form>
							</div>
							<div className="flex py-4 justify-between text-accent">
								<AiOutlineInstagram size={22} />
								<FaFacebookF size={22} />
								<FaTwitter size={22} />
								<FaTiktok size={22} />
								<FaGithub size={22} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<p className="text-center py-4">
				Powered By <span className="text-accent font-bold"> CoinGecko </span>
			</p>
		</div>
	);
};

export default Footer;
