import React from "react";

const Pagination = ({ coinsPerPage, totalCoins, paginate }) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<nav className="text-accent">
			<ul className="flex">
				{pageNumbers.map((number) => (
					<li
						key={number}
						className="px-1 border border-solid border-gray-500 hover:font-bold hover:cursor-pointer mr-[1px] rounded-[4px] hover:border-none">
						<p onClick={() => paginate(number)} className="page-link">
							{number}
						</p>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
