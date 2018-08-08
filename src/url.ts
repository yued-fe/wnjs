import { canUseDOM } from "./environment";

/**
 * 获得 URL 中的 query 值
 * @param name
 * @param url
 */
export function getParamByName(
  name: string,
  url: string | undefined = canUseDOM ? window.location.href : undefined
): string | boolean {
  if (!url) {
    return false;
  }
  name = name.replace(/[\[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  const results = regex.exec(url);
  if (!results) {
    return false;
  }
  if (!results[2]) {
    return "";
  }
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

/**
 * 更新当前 URL 的 query 值
 * @param name
 * @param value
 * @param url
 */
export function setParamByName(
  name: string,
  value: string,
  url: string | undefined = canUseDOM ? window.location.href : undefined
): string | boolean {
  if (!url) {
    return false;
  }
  const regex = new RegExp(`([?&])${name}=.*?(&|$)`, "i");
  const separator = url.indexOf("?") !== -1 ? "&" : "?";
  if (url.match(regex)) {
    return url.replace(regex, `$1${name}=${value}$2`);
  } else {
    return `${url}${separator}${name}=${value}`;
  }
}
