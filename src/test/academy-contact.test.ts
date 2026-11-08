import { describe, expect, it } from "vitest";
import { PHONE, PHONE_LABEL } from "@/lib/academy-contact";

describe("Academy contact number", () => {
  it("uses the supplied academy number for calls", () => {
    expect(PHONE).toBe("+94704611214");
    expect(PHONE_LABEL.replaceAll(" ", "")).toBe(PHONE);
  });
});