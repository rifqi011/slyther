import React from "react"
import type { ControlsProps } from "../../types/game"
import { BUTTON_CLASSES } from "../../constants/gameConstants"

const Controls: React.FC<ControlsProps> = ({ gameState, onRestart, onStart }) => {
	return (
		<div className="space-y-4">
			{gameState === "MENU" ? (
				<button onClick={onStart} className={`w-full ${BUTTON_CLASSES.primary}`}>
					PLAY GAME
				</button>
			) : (
				<button onClick={onRestart} className={`w-full ${BUTTON_CLASSES.secondary}`}>
					NEW GAME
				</button>
			)}

			<div className="bg-lime-400 border-4 border-black p-4 shadow-[4px_4px_0px_black] transform rotate-1">
				<h3 className="text-lg font-black text-black mb-2">CONTROLS</h3>
				<div className="text-sm font-bold text-black space-y-1">
					<div>↑ ↓ ← → ARROW KEYS</div>
					<div>WASD KEYS</div>
				</div>
			</div>
		</div>
	)
}

export default Controls
