import React from "react"
import type { ScoreDisplayProps } from "../../types/game"

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score }) => {
	return (
		<div className="bg-cyan-400 border-4 border-black p-4 shadow-[6px_6px_0px_black] transform -rotate-1">
			<h2 className="text-2xl font-black text-black mb-2">SCORE</h2>
			<div className="text-4xl font-black text-black">{score}</div>
		</div>
	)
}

export default ScoreDisplay
