export type Position = {
	x: number
	y: number
}

export type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT"

export type GameState = "MENU" | "PLAYING" | "GAME_OVER" | "COUNTDOWN"

export interface LeaderboardEntry {
	id?: string
	name: string
	score: number
	date: string
}

export interface GameGridProps {
	snake: Position[]
	food: Position
    gameState: GameState
    countdown?: number
}

export interface ScoreDisplayProps {
	score: number
}

export interface ControlsProps {
	gameState: GameState
	onRestart: () => void
	onStart: () => void
}

export interface LeaderboardProps {
	entries: LeaderboardEntry[]
	loading: boolean
	error: string | null
}

export interface GameOverModalProps {
	score: number
	isHighScore: boolean
	onSubmit: (name: string) => void
	onClose: () => void
}
