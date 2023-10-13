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
			<Typo variant="body1">Id : {id}</Typo>
		</EventStyled>
	)
}

const EventStyled = styled.div`
	background: #d5f8ef;
	border: 1px solid #13b789;

	color: #13b789;

	width: 100%;
	height: ${({ height }) => height + "%"};
	border-radius: 4px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
