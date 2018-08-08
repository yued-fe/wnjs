import { getParamByName, setParamByName } from "./url";

describe("test url", () => {
  test("test getParamByName", () => {
    expect(getParamByName("test")).toBe(false);
    expect(getParamByName("test", "https://test.com/?test=1")).toBe("1");
    expect(getParamByName("test2", "https://test.com/?test=1&test2=a")).toBe(
      "a"
    );
    expect(getParamByName("test", "https://test.com/?test=&test2=1")).toBe("");
    expect(getParamByName("tes", "https://test.com/?test=&test2=1")).toBe(
      false
    );
  });
  test("test setParamByName", () => {
    expect(setParamByName("test", "1", "https://test.com")).toBe(
      "https://test.com?test=1"
    );
    expect(setParamByName("test2", "2", "https://test.com/?test=1")).toBe(
      "https://test.com/?test=1&test2=2"
    );
    expect(setParamByName("test2", "2")).toBe("http://localhost/?test2=2");
  });
});
