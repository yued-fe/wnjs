/**
 * 是否为合法的 email
 * @param email
 */
export function isEmail(email: string) {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i;
  return regex.test(email);
}
