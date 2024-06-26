import Number from '../app';

test('a string with brackets and 8 at the beginning, a number of 11 digits', () => {
  const numb = Number.maskNumber('8 (927) 000-00-00');
  expect(numb).toBe('+79270000000');
});

test('a string of +7 at the beginning and spaces between the digits, a number of 11 digits', () => {
  const numb = Number.maskNumber('+7 960 000 00 00');
  expect(numb).toBe('+79600000000');
});

test('string +86 at the beginning and spaces between the digits, a number of 12 digits', () => {
  const numb = Number.maskNumber('+86 000 000 0000');
  expect(numb).toBe('+860000000000');
});
