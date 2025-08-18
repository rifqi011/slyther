import type React from "react"
import type { Direction, MobileControlsProps } from "../../types/game"
import { BUTTON_CLASSES } from "../../constants/gameConstants"

const MobileControls: React.FC<MobileControlsProps> = ({ gameState, onDirectionChange }) => {
	const isDisabled = gameState !== "PLAYING"

	const handleDirectionPress = (direction: Direction) => {
		if (!isDisabled) {
			onDirectionChange(direction)
		}
	}

	return (
		<div className="flex gap-2 items-center">
			<button onClick={() => handleDirectionPress("LEFT")} disabled={isDisabled} className={BUTTON_CLASSES.secondary} aria-label="Move Left">
				←
			</button>
			<button onClick={() => handleDirectionPress("UP")} disabled={isDisabled} className={BUTTON_CLASSES.secondary} aria-label="Move Up">
				↑
			</button>
			<button onClick={() => handleDirectionPress("DOWN")} disabled={isDisabled} className={BUTTON_CLASSES.secondary} aria-label="Move Down">
				↓
			</button>

			<button onClick={() => handleDirectionPress("RIGHT")} disabled={isDisabled} className={BUTTON_CLASSES.secondary} aria-label="Move Right">
				→
			</button>
		</div>
	)
}

export default MobileControls
