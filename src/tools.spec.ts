import { describe, expect, it } from "vitest";
import { parseHelsinkiDate } from "./tools";

describe("parseHelsinkiDate", () => {
    it("parses local date correctly", () => {
        const date = parseHelsinkiDate("2027-05-15 09:10");
        expect(date.toISO()).toBe("2027-05-15T09:10:00.000+03:00");
    });

    it("parses local date in winter time correctly", () => {
        const date = parseHelsinkiDate("2027-12-15 09:10");
        expect(date.toISO()).toBe("2027-12-15T09:10:00.000+02:00");
    });
});
