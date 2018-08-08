import { withUnit } from "./numberFormatter";

describe("test withUnits", () => {
  test("test number", () => {
    expect(withUnit(1000)).toBe("1K");
    expect(withUnit(1000000)).toBe("1M");
    expect(withUnit(1000002)).toBe("1M");
    expect(withUnit(1000002, { digits: 1 })).toBe("1.0M");
    expect(withUnit(1000002, { textCase: "lower" })).toBe("1m");
    expect(withUnit(1000002, { digits: 1, textCase: "lower" })).toBe("1.0m");
    expect(withUnit(1000002, { digits: 1, textCase: "upper" })).toBe("1.0M");
  });

  test("test string", () => {
    expect(withUnit("1000", { digits: 2 })).toBe("1.00K");
    expect(withUnit("1000", { digits: 2, textCase: "lower" })).toBe("1.00k");
    expect(withUnit("abcd", { digits: 2 })).toBe("NaN");
  });
});
