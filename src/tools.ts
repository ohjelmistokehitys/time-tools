import { DateTime } from "luxon";

export function parseHelsinkiDate(dateString: string): DateTime {
    return DateTime.fromFormat(
        dateString,
        "yyyy-MM-dd HH:mm",
        { zone: "Europe/Helsinki" }
    );
}
