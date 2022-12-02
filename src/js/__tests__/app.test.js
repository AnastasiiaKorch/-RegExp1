import Validator from '../app';

it('Validator true', () => {
  const result = new Validator('lo-_90gin').validateUsername();
  expect(result).toBe(true);
});

it('Validator false (-)', () => {
  const result = new Validator('-login').validateUsername();
  expect(result).toBe(false);
});

it('Validator false (_)', () => {
  const result = new Validator('_login').validateUsername();
  expect(result).toBe(false);
});

it('Validator false (number/center)', () => {
  const result = new Validator('lo6666gin').validateUsername();
  expect(result).toBe(false);
});

it('Validator false (number/end)', () => {
  const result = new Validator('login6').validateUsername();
  expect(result).toBe(false);
});