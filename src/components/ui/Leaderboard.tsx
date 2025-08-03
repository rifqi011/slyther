// components/ui/Leaderboard.tsx
import React from "react"
import type { LeaderboardProps } from "../../types/game"

const Leaderboard: React.FC<LeaderboardProps> = ({ entries, loading, error }) => {
	const getRankStyle = (index: number): string => {
		switch (index) {
			case 0:
				return "bg-amber-400" // Gold
			case 1:
				return "bg-slate-400" // Silver
			case 2:
				return "bg-yellow-800" // Bronze
			default:
				return "bg-white"
		}
	}

	return (
		<div className="bg-blue-400 border-4 border-black p-6 shadow-[8px_8px_0px_black] transform rotate-1">
			<h2 className="text-3xl font-black text-black mb-6 text-center">LEADERBOARD</h2>

			{loading ? (
				<div className="bg-white border-3 border-black p-4 text-center">
					<span className="font-bold text-black">LOADING...</span>
				</div>
			) : error ? (
				<div className="bg-red-200 border-3 border-black p-4 text-center">
					<span className="font-bold text-black">ERROR LOADING SCORES</span>
				</div>
			) : (
				<div className="space-y-3">
					{entries.map((entry, index) => (
						<div key={entry.id || `${entry.name}-${entry.date}-${index}`} className={`${getRankStyle(index)} border-3 border-black p-3 shadow-[3px_3px_0px_black] flex justify-between items-center`}>
							<div className="flex items-center gap-3">
								<span className="text-xl font-black text-black w-8">#{index + 1}</span>
								<span className="font-bold text-black">{entry.name}</span>
							</div>
							<span className="text-xl font-black text-black">{entry.score}</span>
						</div>
					))}

					{entries.length === 0 && (
						<div className="bg-gray-200 border-3 border-black p-4 text-center">
							<span className="font-bold text-black">NO SCORES YET!</span>
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default Leaderboard
