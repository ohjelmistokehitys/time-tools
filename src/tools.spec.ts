import { describe, expect, it } from "vitest";
import { parseHelsinkiTime } from "./tools";

describe("parseHelsinkiTime", () => {
    it("parses local date correctly", () => {
        const date = parseHelsinkiTime("2027-05-15 09:10");

        // the date is in UTC+3 timezone in summer time
        expect(date.toISOString()).toBe("2027-05-15T06:10:00.000Z");
    });

    it("parses local date in winter time correctly", () => {
        const date = parseHelsinkiTime("2027-12-15 09:10");

        // the date is in UTC+2 timezone in winter time
        expect(date.toISOString()).toBe("2027-12-15T07:10:00.000Z");
    });
});
