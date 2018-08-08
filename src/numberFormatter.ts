export interface WithUnitsOptions {
  digits?: number;
  textCase?: "upper" | "lower";
}

/**
 * 将数字格式化成 1K, 2.5M 的形式
 * @param value
 * @param digits - 保留的位数
 * @param textCase - 单位的大小写
 */
export function withUnit(
  value: number | string,
  { digits = 0, textCase = "upper" }: WithUnitsOptions = {}
): string {
  const input = Number(value);
  const units = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  let i;
  for (i = units.length - 1; i > 0; i--) {
    if (input >= units[i].value) {
      break;
    }
  }
  const finalValue = (input / units[i].value).toFixed(digits);
  let unit = units[i].symbol;
  if (textCase === "lower") {
    unit = unit.toLowerCase();
  }
  return `${finalValue}${unit}`;
}
