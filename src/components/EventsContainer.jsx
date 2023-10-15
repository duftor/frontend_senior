import React from "react"
import EventsGroup from "./EventsGroup"
import styled from "styled-components"
import { timeStringToDecimal } from "../utils/time"

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

export default function EventsContainer({ events, containingInterval }) {
	const intervals = []

	// Converts all events into interval
	events.forEach((e) => intervals.push(convertEventIntoInterval(e)))
	const groups = groupIntervals(intervals)

	return (
		<EventsContainerStyled>
			{groups.map((events, groupIndex) => {
				return (
					<EventsGroup
						key={groupIndex}
						events={events}
						groupColors={colors[groupIndex % 10]}
						containingInterval={containingInterval}
					/>
				)
			})}
		</EventsContainerStyled>
	)
}

const EventsContainerStyled = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
`
