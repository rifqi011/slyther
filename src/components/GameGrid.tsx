type Position = { x: number; y: number }
import { GRID_SIZE } from "../constants/gameConstants"

export const GameGrid: React.FC<{
	snake: Position[]
	food: Position
}> = ({ snake, food }) => {
	const cells = []

	for (let y = 0; y < GRID_SIZE; y++) {
		for (let x = 0; x < GRID_SIZE; x++) {
			const isSnakeHead = snake[0]?.x === x && snake[0]?.y === y
			const isSnakeBody = snake.slice(1).some((segment) => segment.x === x && segment.y === y)
			const isFood = food.x === x && food.y === y

			let cellClass = "w-4 h-4 border border-black"

			if (isSnakeHead) {
				cellClass += " bg-red-500 shadow-[2px_2px_0px_black]"
			} else if (isSnakeBody) {
				cellClass += " bg-green-500 shadow-[1px_1px_0px_black]"
			} else if (isFood) {
				cellClass += " bg-yellow-400 shadow-[2px_2px_0px_black] rounded-full"
			} else {
				cellClass += " bg-white"
			}

			cells.push(<div key={`${x}-${y}`} className={cellClass} />)
		}
	}

	return (
		<div className="grid gap-0 border-4 border-black bg-purple-200 shadow-[8px_8px_0px_black]" style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}>
			{cells}
		</div>
	)
}
