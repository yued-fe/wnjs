import { canUseDOM } from "./environment";

/**
 * 检查是否启用 cookie
 */
export function isCookieEnable(): boolean {
  if (!canUseDOM) {
    return false;
  }

  const TEST_COOKIE_KEY = "testcookie";
  let { cookieEnabled } = navigator;
  if (!cookieEnabled) {
    document.cookie = TEST_COOKIE_KEY;
    cookieEnabled = document.cookie.indexOf(TEST_COOKIE_KEY) !== -1;
  }
  return cookieEnabled;
}

/**
 * 设置 cookie
 * @param name
 * @param value
 * @param days
 */
export function setCookie(name: string, value: string, days?: number) {
  if (!isCookieEnable()) {
    return false;
  }
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ""}${expires}; path=/`;
}

/**
 * 获取 cookie
 * @param name
 */
export function getCookie(name: string) {
  const nameEQ = `${name}=`;
  const cookieArray = document.cookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let tempCookie = cookieArray[i];
    while (tempCookie.charAt(0) === " ") {
      tempCookie = tempCookie.substring(1, tempCookie.length);
    }
    if (tempCookie.indexOf(nameEQ) === 0) {
      return tempCookie.substring(nameEQ.length, tempCookie.length);
    }
  }
  return false;
}

/**
 * 删除 cookie
 * @param name
 */
export function eraseCookie(name: string) {
  document.cookie = name + "=; Max-Age=-99999999;";
}
