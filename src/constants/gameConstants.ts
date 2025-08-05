import type { Position } from "../types/game"
import { generateFood } from "../lib/gameUtils"

export const GRID_SIZE = 16
export const INITIAL_SNAKE: Position[] = [{ x: 5, y: 5 }]
export const INITIAL_FOOD = generateFood(INITIAL_SNAKE)
export const GAME_SPEED = 150
export const MAX_LEADERBOARD_ENTRIES = 5
export const SCORE_PER_FOOD = 10
export const MAX_NAME_LENGTH = 10

// CSS Classes for styling consistency
export const BUTTON_CLASSES = {
	primary: "bg-green-500 border-4 border-black px-6 py-3 text-xl font-black text-black shadow-[4px_4px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-x-1 hover:translate-y-1 transition-all",
	secondary: "bg-orange-500 border-4 border-black px-6 py-3 text-xl font-black text-black shadow-[4px_4px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-x-1 hover:translate-y-1 transition-all",
	danger: "bg-red-500 border-4 border-black px-6 py-3 text-xl font-black text-black shadow-[4px_4px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-x-1 hover:translate-y-1 transition-all",
}

export const PANEL_CLASSES = {
	primary: "border-4 border-black shadow-[8px_8px_0px_black]",
	secondary: "border-3 border-black shadow-[4px_4px_0px_black]",
}
