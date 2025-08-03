export default function Background() {
	return (
		<>
			<div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
				<div className="absolute inset-0 opacity-10">
					<div
						className="absolute top-0 left-0 right-0 bottom-0"
						style={{
							backgroundImage: `repeating-linear-gradient(0deg, rgb(0, 0, 0), rgb(0, 0, 0) 1px, transparent 1px, transparent 80px), 
                        repeating-linear-gradient(90deg, rgb(0, 0, 0), rgb(0, 0, 0) 1px, transparent 1px, transparent 80px)`,
							backgroundSize: "80px 80px",
						}}
					></div>
				</div>
				<div
					className="absolute inset-0 opacity-5"
					style={{
						backgroundImage: "repeating-linear-gradient(45deg, rgb(0, 0, 0) 0px, rgb(0, 0, 0) 1px, transparent 0px, transparent 20px)",
						backgroundSize: "30px 30px",
					}}
				></div>
			</div>

			{/* Floating Background Shapes */}
			<div className="floating-shapes">
				<div className="shape shape-1"></div>
				<div className="shape shape-2"></div>
				<div className="shape shape-3"></div>
				<div className="shape shape-4"></div>
			</div>
		</>
	)
}
