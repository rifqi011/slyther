import { useEffect } from "react"
import type { Direction, GameState } from "../types/game"
import { getOppositeDirection } from "../lib/gameUtils"

interface UseKeyboardControlsProps {
	gameState: GameState
	setDirection: React.Dispatch<React.SetStateAction<Direction>>
}

export const useKeyboardControls = ({ gameState, setDirection }: UseKeyboardControlsProps) => {
	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			if (gameState !== "PLAYING") return

			const key = e.key.toLowerCase()
			let newDirection: Direction | null = null

			switch (key) {
				case "arrowup":
				case "w":
					newDirection = "UP"
					break
				case "arrowdown":
				case "s":
					newDirection = "DOWN"
					break
				case "arrowleft":
				case "a":
					newDirection = "LEFT"
					break
				case "arrowright":
				case "d":
					newDirection = "RIGHT"
					break
			}

			if (newDirection) {
				e.preventDefault()
				setDirection((prev) => {
					// Prevent going in opposite direction
					return getOppositeDirection(prev) !== newDirection ? newDirection : prev
				})
			}
		}

		window.addEventListener("keydown", handleKeyPress)
		return () => window.removeEventListener("keydown", handleKeyPress)
	}, [gameState, setDirection])
}
