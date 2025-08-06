import type { Position, Direction, GameState } from "../types/game"
import { useState, useCallback } from "react"
import { INITIAL_SNAKE, INITIAL_FOOD, SCORE_PER_FOOD } from "../constants/gameConstants"
import { generateFood, checkCollision, getNextHeadPosition, positionsEqual } from "../lib/gameUtils"

export const useGameState = () => {
	const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE)
	const [food, setFood] = useState<Position>(INITIAL_FOOD)
	const [direction, setDirection] = useState<Direction>("RIGHT")
	const [gameState, setGameState] = useState<GameState>("MENU")
	const [score, setScore] = useState(0)
	// const gameLoopRef = useRef<NodeJS.Timeout>()

	const moveSnake = useCallback(() => {
		if (gameState !== "PLAYING") return

		setSnake((currentSnake) => {
			const newSnake = [...currentSnake]
			const head = getNextHeadPosition(newSnake[0], direction)

			newSnake.unshift(head)

			// Check food collision
			if (positionsEqual(head, food)) {
				setScore((prev) => prev + SCORE_PER_FOOD)
				setFood(generateFood(newSnake))
			} else {
				newSnake.pop()
			}

			// Check game over
			if (checkCollision(head, newSnake.slice(1))) {
				setGameState("GAME_OVER")
				return currentSnake
			}

			return newSnake
		})
	}, [direction, food, gameState])

	const resetGame = useCallback(() => {
		setSnake(INITIAL_SNAKE)
		setFood(INITIAL_FOOD)
		setDirection("RIGHT")
		setScore(0)
		setGameState("MENU")
	}, [])

	const startGame = useCallback(() => {
		setSnake(INITIAL_SNAKE)
		setFood(INITIAL_FOOD)
		setDirection("RIGHT")
		setScore(0)
		setGameState("PLAYING")
	}, [])

	return {
		snake,
		food,
		direction,
		setDirection,
		gameState,
		setGameState,
		score,
		moveSnake,
		resetGame,
		startGame,
	}
}
