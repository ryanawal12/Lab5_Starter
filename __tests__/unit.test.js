// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// Phone Number Tests
test('valid phone number 1', () => {
  expect(isPhoneNumber('555-123-4567')).toBe(true);
});
test('valid phone number 2', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('invalid phone number 1', () => {
  expect(isPhoneNumber('123456789')).toBe(false);
});
test('invalid phone number 2', () => {
  expect(isPhoneNumber('abcd-efgh-ijkl')).toBe(false);
});

// Email Tests
test('valid email 1', () => {
  expect(isEmail('test@example.com')).toBe(true);
});
test('valid email 2', () => {
  expect(isEmail('user123@domain.org')).toBe(true);
});
test('invalid email 1', () => {
  expect(isEmail('invalidemail.com')).toBe(false);
});
test('invalid email 2', () => {
  expect(isEmail('user@domain')).toBe(false);
});

// Strong Password Tests
test('valid password 1', () => {
  expect(isStrongPassword('StrongPass123')).toBe(true);
});
test('valid password 2', () => {
  expect(isStrongPassword('Valid_Pass12')).toBe(true);
});
test('invalid password 1', () => {
  expect(isStrongPassword('123')).toBe(false);
});
test('invalid password 2', () => {
  expect(isStrongPassword('a')).toBe(false);
});

// Date Tests
test('valid date 1', () => {
  expect(isDate('12/31/2023')).toBe(true);
});
test('valid date 2', () => {
  expect(isDate('01/01/2024')).toBe(true);
});
test('invalid date 1', () => {
  expect(isDate('123456')).toBe(false);
});
test('invalid date 2', () => {
  expect(isDate('12/2023')).toBe(false);
});

// Hex Color Tests
test('valid hex color 1', () => {
  expect(isHexColor('#ABC123')).toBe(true);
});
test('valid hex color 2', () => {
  expect(isHexColor('#fff')).toBe(true);
});
test('invalid hex color 1', () => {
  expect(isHexColor('#abcd')).toBe(false);
});
test('invalid hex color 2', () => {
  expect(isHexColor('####')).toBe(false);
});