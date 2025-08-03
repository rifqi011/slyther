import React from "react"
import type { GameGridProps } from "../../types/game"
import { GRID_SIZE } from "../../constants/gameConstants"

const GameGrid: React.FC<GameGridProps> = ({ snake, food, gameState }) => {
	const cells = []

	for (let y = 0; y < GRID_SIZE; y++) {
		for (let x = 0; x < GRID_SIZE; x++) {
			const isSnakeHead = snake[0]?.x === x && snake[0]?.y === y
			const isSnakeBody = snake.slice(1).some((segment) => segment.x === x && segment.y === y)
			const isFood = food.x === x && food.y === y

			let cellClass = "w-6 h-6 border border-gray-600"

			if (isSnakeHead) {
				cellClass += " bg-red-500 shadow-[2px_2px_0px_black]"
			} else if (isSnakeBody) {
				cellClass += " bg-green-500 shadow-[1px_1px_0px_black]"
			} else if (isFood) {
				cellClass += " bg-yellow-400 shadow-[2px_2px_0px_black]"
			} else {
				cellClass += " bg-white"
			}

			cells.push(<div key={`${x}-${y}`} className={cellClass} />)
		}
	}

	return (
		<div className="relative">
			<div className="grid gap-0 border-4 border-black bg-white shadow-[8px_8px_0px_black]" style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}>
				{cells}
			</div>

			{gameState === "MENU" && (
				<div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
					<div className="bg-yellow-400 border-4 border-black px-8 py-6 shadow-[8px_8px_0px_black] transform rotate-2 text-center">
						<div className="text-2xl font-black text-black mb-2">READY TO PLAY?</div>
						<div className="text-lg font-bold text-black">Click PLAY GAME to start!</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default GameGrid
