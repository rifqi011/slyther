import React, { useState, useEffect } from "react"

// Components
import Background from "./components/common/Background"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import GameGrid from "./components/game/GameGrid"
import GameOverModal from "./components/game/GameOverModal"
import Controls from "./components/game/Controls"
import ScoreDisplay from "./components/ui/ScoreDisplay"
import Leaderboard from "./components/ui/Leaderboard"

// Hooks
import { useGameState } from "./hooks/useGameState"
import { useFirestoreLeaderboard } from "./hooks/useFirestoreLeaderboard"
import { useKeyboardControls } from "./hooks/useKeyboardControls"

// Constants
import { GAME_SPEED } from "./constants/gameConstants"
import MobileControls from "./components/game/MobileControls"

const SnakeGame: React.FC = () => {
	// Game state management
	const { snake, food, /* direction, */ setDirection, gameState, /* setGameState, */ score, countdown, moveSnake, resetGame, startGame, changeDirection } = useGameState()

	// Leaderboard management
	const { leaderboard, addScore, isHighScore, loading, error } = useFirestoreLeaderboard()

	// UI state
	const [showGameOver, setShowGameOver] = useState(false)

	// Keyboard controls
	useKeyboardControls({ gameState, setDirection })

	// Game loop effect
	useEffect(() => {
		const gameLoop = setInterval(moveSnake, GAME_SPEED)
		return () => clearInterval(gameLoop)
	}, [moveSnake])

	// Show game over modal when game ends
	useEffect(() => {
		if (gameState === "GAME_OVER") {
			setShowGameOver(true)
		}
	}, [gameState])

	// Event handlers
	const handleRestart = () => {
		setShowGameOver(false)
		resetGame()
	}

	const handleScoreSubmit = async (name: string) => {
		await addScore(name, score)
		setShowGameOver(false)
	}

	const handleGameOverClose = () => {
		setShowGameOver(false)
	}

	return (
		<>
			<div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-300 to-blue-300 p-6">
				<div className="max-w-7xl mx-auto">
					<Background />

					<Header />

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
						{/* Left Panel - Controls & Score */}
						<div className="space-y-6 relative">
							<ScoreDisplay score={score} />
							<Controls gameState={gameState} onRestart={handleRestart} onStart={startGame} />
						</div>

						{/* Center - Game Grid */}
						<div className="flex justify-center flex-col items-center relative">
							<GameGrid snake={snake} food={food} gameState={gameState} countdown={countdown} />

							<div className="block mt-8 lg:hidden">
								<MobileControls gameState={gameState} onDirectionChange={changeDirection} />
							</div>
						</div>

						{/* Right Panel - Leaderboard */}
						<div>
							<Leaderboard entries={leaderboard} loading={loading} error={error} />
						</div>
					</div>

					{/* Game Over Modal */}
					{showGameOver && <GameOverModal score={score} isHighScore={isHighScore(score)} onSubmit={handleScoreSubmit} onClose={handleGameOverClose} />}
				</div>
			</div>

			<Footer />
		</>
	)
}

export default SnakeGame
