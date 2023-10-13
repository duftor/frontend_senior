import React from "react"
import styled from "styled-components"
import Typo from "./reusable-ui/Typo"
import { decimalToTime, generateHours } from "../utils/time"
import { useEffect } from "react"
import { useState } from "react"
import { useRef } from "react"
import data from "../data/input.json"

// function debounce(fn, ms) {
// 	let timer
// 	return (_) => {
// 		clearTimeout(timer)
// 		timer = setTimeout((_) => {
// 			timer = null
// 			fn.apply(this, arguments)
// 		}, ms)
// 	}
// }

export default function Calendar() {
	// const [dimensions, setDimensions] = useState({
	// 	height: window.innerHeight,
	// 	width: window.innerWidth,
	// })

	const hours = generateHours(9, 21)

	// useEffect(() => {
	// 	const debouncedHandleResize = debounce(function handleResize() {
	// 		setDimensions({
	// 			height: window.innerHeight,
	// 			width: window.innerWidth,
	// 		})
	// 	}, 1000)

	// 	window.addEventListener("resize", debouncedHandleResize)

	// 	return (_) => {
	// 		window.removeEventListener("resize", debouncedHandleResize)
	// 	}
	// }, [])

	const dayRef = useRef(null)
	const [dimensions, setDimensions] = useState({ height: 0, width: 0 })

	useEffect(() => {
		setDimensions({
			height: dayRef.current.offsetHeight,
			width: dayRef.current.offsetWidth,
		})
	}, [])

	return (
		<CalendarStyled>
			<Typo className="title" variant="h3">
				Test recrutement : Calendar
			</Typo>
			<div className="container">
				<div className="time-scale">
					{hours.map((hour) => (
						<div key={hour} className="hour">
							{decimalToTime(hour % 12)} {hour < 12 ? "am" : "pm"}
						</div>
					))}
				</div>
				<div className="calendar">
					<div className="day" ref={dayRef}>
						<Typo variant="body1">
							Lundi <br />{" "}
							<div>
								{dimensions.width} x {dimensions.height}
							</div>
							{/* <div>
								Rendered at {dimensions.width} x {dimensions.height}
							</div> */}
						</Typo>
					</div>
					<div className="day">
						<Typo variant="body1">Mardi</Typo>
					</div>
					<div className="day">
						<Typo variant="body1">Mercredi</Typo>
					</div>
					<div className="day">
						<Typo variant="body1">Jeudi</Typo>
					</div>
					<div className="day">
						<Typo variant="body1">Vendredi</Typo>
					</div>
					<div className="day">
						<Typo variant="body1">Samedi</Typo>
					</div>
					<div className="day">
						<Typo variant="body1">Dimanche</Typo>
					</div>
				</div>
			</div>
		</CalendarStyled>
	)
}

const CalendarStyled = styled.div`
	display: flex;
	flex-flow: column;

	background-color: white;
	width: 100%;
	height: 100%;

	border-radius: 4px;
	box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.05);

	.title {
		padding-top: 12px;
		display: flex;
		justify-content: center;
	}

	.container {
		display: flex;
		padding: 24px 24px 24px 0;

		flex: 1 1 auto;
	}

	.time-scale {
		display: flex;
		flex-direction: column;

		/* background: blue; */
		flex: 0 1 auto;
		text-align: right;
		justify-content: space-between;
		padding: 12px;

		.hour {
			flex: 1;
			display: flex;
			/* align-items: center; */
			justify-content: right;
			padding-top: 12px;
		}
	}

	.calendar {
		display: flex;
		flex: 1 1 auto;

		justify-content: space-between;
		gap: 12px;

		.day {
			/* background: red; */
			border: 1px solid black;
			flex: 1;
			display: flex;
			text-align: center;
			justify-content: center;
		}
	}
`
