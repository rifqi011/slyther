import type { Position, Direction } from "../types/game"
import { GRID_SIZE } from "../constants/gameConstants"

/**
 * Generate random food position avoiding snake body
 */
export const generateFood = (snakeBody: Position[]): Position => {
	// Create array of available positions
	const availablePositions: Position[] = []

	// Find all positions not occupied by snake
	for (let x = 0; x < GRID_SIZE; x++) {
		for (let y = 0; y < GRID_SIZE; y++) {
			const pos = { x, y }
			if (!snakeBody.some((segment) => positionsEqual(segment, pos))) {
				availablePositions.push(pos)
			}
		}
	}

	// Get random position from available ones
	const randomIndex = Math.floor(Math.random() * availablePositions.length)
	return availablePositions[randomIndex]
}

/**
 * Check if snake collides with walls or itself
 */
export const checkCollision = (head: Position, snakeBody: Position[]): boolean => {
	// Wall collision
	if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
		return true
	}

	// Self collision
	return snakeBody.some((segment) => segment.x === head.x && segment.y === head.y)
}

/**
 * Get next head position based on current direction
 */
export const getNextHeadPosition = (currentHead: Position, direction: Direction): Position => {
	const head = { ...currentHead }

	switch (direction) {
		case "UP":
			head.y -= 1
			break
		case "DOWN":
			head.y += 1
			break
		case "LEFT":
			head.x -= 1
			break
		case "RIGHT":
			head.x += 1
			break
	}

	return head
}

/**
 * Check if two positions are equal
 */
export const positionsEqual = (pos1: Position, pos2: Position): boolean => {
	return pos1.x === pos2.x && pos1.y === pos2.y
}

/**
 * Format date to readable string
 */
export const formatDate = (dateString: string): string => {
	return new Date(dateString).toLocaleDateString()
}

/**
 * Validate player name
 */
export const validatePlayerName = (name: string): boolean => {
	return name.trim().length > 0 && name.trim().length <= 10
}

/**
 * Get opposite direction (to prevent snake from going backwards)
 */
export const getOppositeDirection = (direction: Direction): Direction => {
	const opposites: Record<Direction, Direction> = {
		UP: "DOWN",
		DOWN: "UP",
		LEFT: "RIGHT",
		RIGHT: "LEFT",
	}
	return opposites[direction]
}
