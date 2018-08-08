import { isCookieEnable, setCookie, getCookie, eraseCookie } from "./cookie";

describe("test cookie", () => {
  it("test isCookieEnable", () => {
    expect(isCookieEnable()).toBe(true);
  });
  it("test setCookie", () => {
    setCookie("test", "1");
    expect(document.cookie).toBe("test=1");
  });
  it("test getCookie", () => {
    setCookie("test", "1", 30);
    expect(getCookie("test")).toBe("1");
  });
  it("test eraseCookie", () => {
    setCookie("test", "1");
    eraseCookie("test");
    expect(getCookie("test")).toBe(false);
  });
});
