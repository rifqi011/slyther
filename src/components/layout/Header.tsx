import React from "react"

const Header: React.FC = () => {
	return (
		<header className="text-center mb-8">
			<div className="text-5xl font-black text-black mb-4 transform -rotate-1 inline-flex gap-2 items-center bg-yellow-400 border-6 border-black px-8 py-4 shadow-[12px_12px_0px_black]">
				<img src="./logo.png" className="w-16" alt="Logo" />
				<h1>SLYTHER</h1>
			</div>
		</header>
	)
}

export default Header
