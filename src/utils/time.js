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
export const decimalToTime = (decimalTime, separator = "h") => {
	let hours = Math.floor(decimalTime)
	let minutes = Math.round((decimalTime - hours) * 60)

	// If minutes reach 60, adjust the hours and reset the minutes
	if (minutes === 60) {
		minutes = 0
		hours += 1
	}

	// Format the time in the "8h30" format (add a leading zero for minutes < 10)
	return `${hours === 0 ? 12 : hours}${separator}${
		minutes < 10 ? "0" : ""
	}${minutes}`
}

// Function that converts a time string in the format "hh:mm" to a decimal time.
// Parameters:
//   - timeString (String): The time string to convert.
// Returns (Number or null): The decimal time if conversion is successful, or null if the time is invalid.

export const timeStringToDecimal = (timeString, separator = ":") => {
	// Split the time string into hours and minutes, and convert them to numbers.
	const [hours, minutes] = timeString.split(separator).map(Number)

	// Check for invalid time values (hours and minutes).
	if (
		isNaN(hours) ||
		isNaN(minutes || hours < 0 || hours >= 24 || minutes < 0 || minutes >= 60)
	) {
		// If the time is invalid, return null to indicate an error.
		return null
	}

	// Calculate the decimal time by adding hours and dividing minutes by 60.
	return hours + minutes / 60
}
