import Validator from '../Validator';

test('valid password', () => {
  const result = Validator.validatePassword('123Qwerty');
  expect(result).toBe(true);
});

test('password without numbers', () => {
  const result = Validator.validatePassword('Qwerty');
  expect(result).toBe(false);
});

test('password without uppercase letter', () => {
  const result = Validator.validatePassword('12werty');
  expect(result).toBe(false);
});

test('password without lowercase letter', () => {
  const result = Validator.validatePassword('123QWERTY');
  expect(result).toBe(false);
});

test('the password is less than 6 characters long', () => {
  const result = Validator.validatePassword('1Qty');
  expect(result).toBe(false);
});

test('password consisting only of digits', () => {
  const result = Validator.validatePassword('123456');
  expect(result).toBe(false);
});
