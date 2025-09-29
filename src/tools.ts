import { DateTime } from "luxon";

/**
 * Converts a date string in Helsinki local time to a Date object.
 * Handles daylight saving time automatically.
 *
 * @param dateString Date string in "YYYY-MM-DD HH:mm" format, in Helsinki local time
 * @returns Date object with correct timezone information
 */
export function parseHelsinkiTime(dateString: string): Date {
    const parsedTime = DateTime.fromFormat(
        dateString,
        "yyyy-MM-dd HH:mm",
        { zone: "Europe/Helsinki" }
    );
    return parsedTime.toJSDate();
}
