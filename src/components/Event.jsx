import React from "react"
import styled from "styled-components"
import Typo from "./reusable-ui/Typo"
import { timeStringToDecimal } from "../utils/time"

export default function Event({ id, start, duration }) {
	const startTime = 9
	const endTime = 21
	const timeScale = endTime - startTime

	const percentPerHour = 100 / timeScale
	const percentageHeight = percentPerHour * (duration / 60)

	const percentageTop =
		((timeStringToDecimal(start) - startTime) / (endTime - startTime)) * 100

	console.log(percentageTop)

	return (
		<EventStyled height={percentageHeight} top={percentageTop}>
			<Typo variant="body1">Id : {id}</Typo>
		</EventStyled>
	)
}

const EventStyled = styled.div`
	box-sizing: border-box;
	position: relative;
	top: ${({ top }) => top + "%"};
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
