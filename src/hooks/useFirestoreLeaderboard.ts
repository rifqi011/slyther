import { useState, useEffect, useCallback } from "react"
import { collection, addDoc, query, orderBy, limit, onSnapshot, getDocs, deleteDoc, doc } from "firebase/firestore"
import { db, COLLECTIONS } from "../lib/firebase"
import type { LeaderboardEntry } from "../types/game"
import { MAX_LEADERBOARD_ENTRIES } from "../constants/gameConstants"

export const useFirestoreLeaderboard = () => {
	const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	// Real-time listener for leaderboard
	useEffect(() => {
		const q = query(collection(db, COLLECTIONS.LEADERBOARD), orderBy("score", "desc"), limit(MAX_LEADERBOARD_ENTRIES))

		const unsubscribe = onSnapshot(
			q,
			(querySnapshot) => {
				const entries: LeaderboardEntry[] = []
				querySnapshot.forEach((doc) => {
					entries.push({
						id: doc.id,
						...doc.data(),
					} as LeaderboardEntry)
				})
				setLeaderboard(entries)
				setLoading(false)
				setError(null)
			},
			(error) => {
				console.error("Error fetching leaderboard:", error)
				setError("Failed to load leaderboard")
				setLoading(false)
			}
		)

		return () => unsubscribe()
	}, [])

	const addScore = useCallback(async (name: string, score: number) => {
		try {
			const newEntry: Omit<LeaderboardEntry, "id"> = {
				name: name.toUpperCase(),
				score,
				date: new Date().toISOString().split("T")[0],
			}

			// Add new score
			await addDoc(collection(db, COLLECTIONS.LEADERBOARD), newEntry)

			// Clean up excess entries (keep only top entries)
			const q = query(collection(db, COLLECTIONS.LEADERBOARD), orderBy("score", "desc"))
			const querySnapshot = await getDocs(q)
			const docs = querySnapshot.docs

			// Delete entries beyond the maximum allowed
			if (docs.length > MAX_LEADERBOARD_ENTRIES) {
				const docsToDelete = docs.slice(MAX_LEADERBOARD_ENTRIES)
				await Promise.all(docsToDelete.map((docToDelete) => deleteDoc(doc(db, COLLECTIONS.LEADERBOARD, docToDelete.id))))
			}
		} catch (error) {
			console.error("Error adding score:", error)
			setError("Failed to save score")
			throw error
		}
	}, [])

	const isHighScore = useCallback(
		(score: number): boolean => {
			if (loading) return false
			return leaderboard.length < MAX_LEADERBOARD_ENTRIES || score > (leaderboard[leaderboard.length - 1]?.score || 0)
		},
		[leaderboard, loading]
	)

	return {
		leaderboard,
		addScore,
		isHighScore,
		loading,
		error,
	}
}
