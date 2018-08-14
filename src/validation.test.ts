import { isEmail } from "./validation";

describe('test validation', () => {
  it('test email', () => {
    expect(isEmail('test@test.com')).toBe(true);
    expect(isEmail('test.a@test.com')).toBe(true);
    expect(isEmail('test.a@test.london')).toBe(true);

    expect(isEmail('123456')).toBe(false);
    expect(isEmail('justsometext')).toBe(false);
    expect(isEmail('test@test')).toBe(false);
  })
})
