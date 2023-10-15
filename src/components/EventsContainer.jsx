import React from "react"
import EventsGroup from "./EventsGroup"
import styled from "styled-components"
import { convertEventIntoInterval, groupIntervals } from "../utils/intervals"

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
