// Function that generates an array of hours within a specified time range with a given interval.
// Parameters:
//   - startHour (Number): The starting hour of the time range.
//   - endHour (Number): The ending hour of the time range.
//   - step (Number, optional): The interval between generated hours (default is 1 hour).
// Returns (Array): An array of hours within the specified time range with the given interval.
export const generateHours = (startHour, endHour, step = 1) => {
	const hours = []

	// Loop through the time range with the specified interval
	for (let hour = startHour; hour <= endHour; hour += step) {
		hours.push(hour)
	}

	return hours
}

// Function that converts a decimal time into hour and minutes in the format "8h30".
// Parameters:
//   - decimalTime (Number): The decimal time to convert into hour and minutes.
// Returns (String): A string representing the time in the "8h30" format.
export const decimalToTime = (decimalTime) => {
	let hours = Math.floor(decimalTime)
	let minutes = Math.round((decimalTime - hours) * 60)

	// If minutes reach 60, adjust the hours and reset the minutes
	if (minutes === 60) {
		minutes = 0
		hours += 1
	}

	// Format the time in the "8h30" format (add a leading zero for minutes < 10)
	return `${hours === 0 ? 12 : hours}h${minutes < 10 ? "0" : ""}${minutes}`
}
