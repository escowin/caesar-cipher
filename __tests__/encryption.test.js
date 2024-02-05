const { encryptString } = require("../src/js/encryption")

describe('encryptString function', () => {
    it('should encrypt a string correctly', () => {
      // Test cases
      expect(encryptString(1, 'ABC')).toBe('BCD');
      expect(encryptString(2, 'xyz')).toBe('zab');
      expect(encryptString(3, 'Hello, World!')).toBe('Khoor/#Zruog$');
      expect(encryptString(-1, 'bcd')).toBe('abc');
      expect(encryptString(0, '123')).toBe('123');
    });
  
    it('should handle edge cases correctly', () => {
      // Test edge cases
      expect(encryptString(26, 'abc')).toBe('abc'); // Rotating 26 times should return the original string
      expect(encryptString(27, 'abc')).toBe('bcd'); // Rotating 27 times is equivalent to rotating once
      expect(encryptString(25, 'xyz')).toBe('wxy'); // Wrapping around from 'z' to 'a'
      expect(encryptString(1, '')).toBe(''); // Empty string
    });
  });