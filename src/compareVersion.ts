/**
 * 比较版本号
 *
 * @example
 * compareVersion('1.1', '1.2') => -1
 * compareVersion('1', '1.0') =>  0
 * compareVersion('2.23.3', '2.22.3') => 1
 *
 * @param version1
 * @param version2
 */
export default function compareVersion(version1: string, version2: string) {
  const version1Array = version1.split(".");
  const version2Array = version2.split(".");
  const length = Math.max(version1Array.length, version2Array.length);

  for (let index = 0; index < length; index++) {
    if (
      (version1Array[index] &&
        !version2Array[index] &&
        parseInt(version1Array[index], 10) > 0) ||
      parseInt(version1Array[index], 10) > parseInt(version2Array[index], 10)
    ) {
      return 1;
    } else if (
      (version2Array[index] &&
        !version1Array[index] &&
        parseInt(version2Array[index], 10) > 0) ||
      parseInt(version1Array[index], 10) < parseInt(version2Array[index], 10)
    ) {
      return -1;
    }
  }

  return 0;
}
