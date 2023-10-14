import React from "react"
import styled from "styled-components"
import Typo from "./reusable-ui/Typo"
import { timeStringToDecimal } from "../utils/time"

export default function Event({
	id,
	top = 0,
	left = 0,
	width = 100,
	height = 100,
	colors = { light: "#d5f8ef", dark: "#13b789" },
}) {
	return (
		<EventStyled
			top={top}
			left={left}
			height={height}
			width={width}
			colors={colors}
		>
			<Typo variant="body1">Id : {id}</Typo>
		</EventStyled>
	)
}

const EventStyled = styled.div`
	box-sizing: border-box;
	position: absolute;
	top: ${({ top }) => top + "%"};
	left: ${({ left }) => left + "%"};
	background: ${({ colors }) => colors.light};
	border: 1px solid ${({ colors }) => colors.dark};

	color: ${({ colors }) => colors.dark};

	height: ${({ height }) => height + "%"};
	width: ${({ width }) => width + "%"};
	border-radius: 4px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
