import styled from "styled-components"
import Calendar from "./components/Calendar"
import Event from "./components/Event"
import data from "./data/input.json"
import { useState } from "react"
import { timeStringToDecimal } from "./utils/time"

// Colors for groups
const colors = [
	{
		light: "#fbf8cc",
		dark: "#b39617",
	},
	{
		light: "#FDE4CF",
		dark: "#BF6114",
	},
	{
		light: "#FFCFD2",
		dark: "#BA1F2A",
	},
	{
		light: "#F1C0E8",
		dark: "#BA1A9C",
	},
	{
		light: "#CFBAF0",
		dark: "#5C19C7",
	},
	{
		light: "#A3C4F3",
		dark: "#1C62C2",
	},
	{
		light: "#90DBF4",
		dark: "#1B9BC6",
	},
	{
		light: "#8EECF5",
		dark: "#16B1BF",
	},
	{
		light: "#98F5E1",
		dark: "#19C19C",
	},
	{
		light: "#B9FBC0",
		dark: "#19C22A",
	},
]

// Convert {start, duration} to {start, end}
const convertEventIntoInterval = (event) => {
	const start = timeStringToDecimal(event.start)
	return {
		id: event.id,
		start,
		end: start + event.duration / 60,
	}
}

// Check if interval1 and interval2 overlaps
const isOverlapping = (interval1, interval2) => {
	const start = Math.max(interval1.start, interval2.start)
	const end = Math.min(interval1.end, interval2.end)
	return start < end
}

// Sorts by start ascending
const sortIntervalsByStart = (intervals) => {
	return intervals.slice().sort(({ start: s1 }, { start: s2 }) => s1 - s2)
}

// Split intervals into groups, which are independent of each other
const groupIntervals = (intervals) => {
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

// Fill columns with equal width from left to right
const putIntervalsIntoColumns = (intervals) => {
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

function App() {
	const [events, setEvents] = useState(data)
	const intervals = []

	// Converts all events into interval
	events.forEach((e) => intervals.push(convertEventIntoInterval(e)))

	const groups = groupIntervals(intervals)
	// console.log(groups)

	const columns = putIntervalsIntoColumns(intervals)

	return (
		<AppStyled>
			{/* <Calendar /> */}
			{groups.map((group, groupIndex) => {
				console.log("Group : " + groupIndex, putIntervalsIntoColumns(group))
				return group.map(({ id, end, start }) => (
					<Event
						key={id}
						id={id}
						end={end}
						start={start}
						colors={colors[groupIndex % 10]}
						// width={eventWidths[id]}
						// left={eventLeftValues[id]}
					/>
				))
			})}
		</AppStyled>
	)
}

export default App

const AppStyled = styled.div`
	position: relative;
	/* background-color: #f7f7f7; */
	background-color: #ffffff;
	width: 100vw;
	height: 100vh;

	box-sizing: border-box;
	/* padding: 40px; */
`
