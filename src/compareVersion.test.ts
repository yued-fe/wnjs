import compareVersion from "./compareVersion";

describe('compare version', () => {
  it('compare version', () => {
    expect(compareVersion('2.0', '2.0')).toBe(0);
    expect(compareVersion('2.0', '2')).toBe(0);

    expect(compareVersion('2.22.2', '2.22.3')).toBe(-1);
    expect(compareVersion('2.22', '2.22.3')).toBe(-1);

    expect(compareVersion('1.1.1', '1.1.0')).toBe(1);
    expect(compareVersion('1.1.1', '1.1')).toBe(1);
  })
})
