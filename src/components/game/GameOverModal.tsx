import React, { useState, useEffect } from "react"
import type { GameOverModalProps } from "../../types/game"
import { MAX_NAME_LENGTH } from "../../constants/gameConstants"
import { validatePlayerName } from "../../lib/gameUtils"

const GameOverModal: React.FC<GameOverModalProps> = ({ score, isHighScore, onSubmit, onClose }) => {
	const [name, setName] = useState("")
	const [submitting, setSubmitting] = useState(false)
	const [showJumpscare, setShowJumpscare] = useState(true) // default jumpscare dulu

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowJumpscare(false)
		}, 3000)
		return () => clearTimeout(timer)
	}, [])

	const handleSubmit = async (e: React.FormEvent | React.KeyboardEvent) => {
		e.preventDefault()
		if (validatePlayerName(name) && !submitting) {
			setSubmitting(true)
			try {
				await onSubmit(name.trim())
			} finally {
				setSubmitting(false)
			}
		}
	}

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" && validatePlayerName(name) && !submitting) {
			handleSubmit(e)
		}
	}

	if (showJumpscare) {
		return (
			<div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
                <audio src="./jumpscare.mp3" autoPlay className="hidden"></audio>
                <img src="/jumpscare.png" alt="Jumpscare" className="w-full h-full max-w-screen max-h-screen object-cover" />
			</div>
		)
	}

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-red-400 border-6 border-black p-8 shadow-[12px_12px_0px_black] transform -rotate-2 max-w-md w-full mx-4">
				<h2 className="text-4xl font-black text-black mb-6 text-center">GAME OVER!</h2>

				<div className="bg-white border-4 border-black p-4 mb-6 shadow-[4px_4px_0px_black]">
					<div className="text-2xl font-black text-black text-center">FINAL SCORE: {score}</div>
				</div>

				{isHighScore ? (
					<div className="space-y-4">
						<div className="bg-yellow-400 border-4 border-black p-4 shadow-[4px_4px_0px_black]">
							<h3 className="text-xl font-black text-black mb-3 text-center">🎉 NEW HIGH SCORE! 🎉</h3>
							<input type="text" value={name} onChange={(e) => setName(e.target.value.slice(0, MAX_NAME_LENGTH))} placeholder="ENTER NAME" className="w-full border-3 border-black p-3 text-lg font-bold text-black bg-white shadow-[2px_2px_0px_black] focus:outline-none focus:shadow-[4px_4px_0px_black]" maxLength={MAX_NAME_LENGTH} autoFocus disabled={submitting} onKeyDown={handleKeyDown} />
						</div>

						<div className="flex gap-3">
							<button onClick={handleSubmit} disabled={!validatePlayerName(name) || submitting} className="flex-1 bg-green-500 border-4 border-black px-4 py-3 text-lg font-black text-black shadow-[4px_4px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-x-1 hover:translate-y-1 transition-all disabled:opacity-50">
								{submitting ? "SAVING..." : "SAVE"}
							</button>
							<button onClick={onClose} disabled={submitting} className="flex-1 bg-gray-400 border-4 border-black px-4 py-3 text-lg font-black text-black shadow-[4px_4px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-x-1 hover:translate-y-1 transition-all disabled:opacity-50">
								SKIP
							</button>
						</div>
					</div>
				) : (
					<button onClick={onClose} className="w-full bg-gray-500 border-4 border-black px-6 py-3 text-xl font-black text-black shadow-[4px_4px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-x-1 hover:translate-y-1 transition-all">
						CONTINUE
					</button>
				)}
			</div>
		</div>
	)
}

export default GameOverModal
