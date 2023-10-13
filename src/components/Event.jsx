import React from "react"
import styled from "styled-components"
import Typo from "./reusable-ui/Typo"

export default function Event({ id, start, duration }) {
	const timeScale = 12
	const percentPerHour = 100 / timeScale

	const percentageHeight = percentPerHour * (duration / 60)
	console.log(percentageHeight)
	return (
		<EventStyled height={percentageHeight}>
			<Typo>Id : {id}</Typo>
			<Typo>Start at {start}</Typo>
			<Typo>Last for {duration} minutes</Typo>
		</EventStyled>
	)
}

const EventStyled = styled.div`
	background: #f7f7f7;

	width: 100%;
	height: ${({ height }) => height + "%"};
	border-radius: 4px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
