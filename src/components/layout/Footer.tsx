import React from "react"

const Footer: React.FC = () => {
	return (
		<footer className="relative py-8 bg-black border-t-8 border-yellow-400">
			<div className="container mx-auto px-4 flex flex-col items-center gap-2">
				<img src="./logo-rifqi.png" alt="Logo Rifqi" className="w-12" />
				<p className="text-2xl font-black text-yellow-400 uppercase tracking-wide">
					&copy; 2025&nbsp;
					<a href="https://rifqibanusafingi.vercel.app" className="underline" target="_blank">
						Rifqi Banu Safingi
					</a>
				</p>
				<p className="text-lg font-bold text-white">Made with ❤️ and lots of ☕</p>
			</div>
		</footer>
	)
}

export default Footer
