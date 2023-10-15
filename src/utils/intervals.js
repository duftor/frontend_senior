import { decimalToTime, timeStringToDecimal } from "./time"

// Convert {start, duration} to {start, end}
export const convertEventIntoInterval = (event) => {
	const start = timeStringToDecimal(event.start)
	return {
		id: event.id,
		start,
		end: start + event.duration / 60,
	}
}

// Sorts by start ascending
export const sortIntervalsByStart = (intervals) => {
	return intervals.slice().sort(({ start: s1 }, { start: s2 }) => s1 - s2)
}

// Split intervals into groups, which are independent of each other
export const groupIntervals = (intervals) => {
	const groups = []
	let latestIntervalEnd = -Infinity
	for (const interval of sortIntervalsByStart(intervals)) {
		const { start, end } = interval
		// There is no overlap to previous intervals so create a new group
		if (start >= latestIntervalEnd) {
			groups.push([])
		}
		groups[groups.length - 1].push(interval)
		latestIntervalEnd = Math.max(latestIntervalEnd, end)
	}
	return groups
}

// Check if interval1 and interval2 overlaps
export const isOverlapping = (interval1, interval2) => {
	const start = Math.max(interval1.start, interval2.start)
	const end = Math.min(interval1.end, interval2.end)
	return start < end
}

// Fill columns with equal width from left to right
export const putIntervalsIntoColumns = (intervals) => {
	const columns = []
	for (const interval of intervals) {
		let columnIndex = findFreeColumn(interval)
		columns[columnIndex] = (columns[columnIndex] || []).concat([interval])
	}
	return columns

	function findFreeColumn(interval) {
		let columnIndex = 0
		while (
			columns?.[columnIndex]?.some((otherInterval) =>
				isOverlapping(interval, otherInterval)
			)
		) {
			columnIndex++
		}
		return columnIndex
	}
}

// Expand columns maximally.
export const makeBoxes = (columns, containingInterval) => {
	const boxes = []
	for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
		for (const interval of columns[columnIndex]) {
			const columnSpan = findColumnSpan(columnIndex, interval)
			const box = {
				...interval,
				top:
					((interval.start - containingInterval.start) /
						(containingInterval.end - containingInterval.start)) *
					100,
				height:
					((interval.end - interval.start) /
						(containingInterval.end - containingInterval.start)) *
					100,
				left: (columnIndex / columns.length) * 100,
				width: (columnSpan / columns.length) * 100,
			}
			boxes.push(box)
		}
	}
	return boxes

	function findColumnSpan(columnIndex, interval) {
		let columnSpan = 1
		while (
			columns?.[columnIndex + columnSpan]?.every(
				(otherInterval) => !isOverlapping(interval, otherInterval)
			)
		) {
			columnSpan++
		}
		return columnSpan
	}
}

// Generate events for testing
export const generateEvents = ({
	count,
	maxStart,
	maxEnd,
	minLength,
	maxLength,
	segments,
}) => {
	const events = []

	for (let i = 1; i <= count; i++) events.push({ id: i, ...randomEvent() })

	return events

	function randomEvent() {
		const start = randomInt(maxStart * segments, maxEnd * segments) / segments
		let duration = randomInt(minLength, maxLength, 15)

		if (start + duration / 60 > maxEnd) duration = (maxEnd - start) * 60

		return {
			start: decimalToTime(start, ":"),
			duration,
		}
	}

	function randomInt(min, max, step = 1) {
		const range = (max - min) / step
		return Math.floor(Math.random() * range) * step + min
	}
}
