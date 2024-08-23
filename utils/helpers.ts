/**
 * Creates an object from arrays of keys and values.
 * @param keys Array of keys for the object.
 * @param values Array of values for the object.
 * @returns An object constructed from the provided keys and values.
 */
export const buildObjectFromArrays = (keys: string[], values: any[]): Record<string, any> => {
  const resultObject: Record<string, any> = {}
  keys.forEach((key, index) => {
    resultObject[key] = values[index]
  })

  return resultObject
}

/**
 * Converts a string with underscores to a space-separated string with each word capitalized.
 * @param attribute The string to be converted.
 * @returns A capitalized, space-separated string.
 */
export const formatLabel = (attribute: string): string => {
  return attribute
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Converts a string with timeslot to a dashboard readable format.
 * @param originalText The string to be converted.
 * @returns A formatted, line-separated string.
 */
export function reformatTimeslot(originalText: string) {
  // Extract the date, start time, and end time using a regular expression
  const regex = /(\d{2} .{3}) \((\d{2}:\d{2} [AP]M) - (\d{2}:\d{2} [AP]M)\)/
  const matches = originalText.match(regex)

  // Check if the text matches the expected format
  if (matches) {
    // Extracted components
    const date = matches[1]
    const startTime = matches[2]
    const endTime = matches[3]

    // Remove leading zeros from hours
    const formattedStartTime = startTime.replace(/^0/, '')
    const formattedEndTime = endTime.replace(/^0/, '')

    // Construct the new format
    const newFormat = `${date}\n${formattedStartTime} : ${formattedEndTime}`

    return newFormat
  } else {
    // Return the original text if it doesn't match the expected format
    return originalText
  }
}
