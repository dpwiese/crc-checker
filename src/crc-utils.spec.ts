import isEqual from 'lodash/isEqual';
import rewire from 'rewire';

const Utils = rewire("../built/crc-utils.js");

test('conditionHexString', () => {
  const conditionHexString = Utils.__get__('conditionHexString');
  expect(isEqual(conditionHexString("abc"), "ABC")).toBe(true);
  expect(isEqual(conditionHexString("ghi"), null)).toBe(true);
  expect(isEqual(conditionHexString("0xABC123"), null)).toBe(true);
  expect(isEqual(conditionHexString("ABC"), "ABC")).toBe(true);
  expect(isEqual(conditionHexString("AbCd123"), "ABCD123")).toBe(true);
});

