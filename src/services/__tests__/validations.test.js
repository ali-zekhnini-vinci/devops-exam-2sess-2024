const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true for years divisible by 400', () => {
        expect(isValid(2000)).toBe(true);
        expect(isValid(1600)).toBe(true);
    });

    test('should return false for years divisible by 100 but not by 400', () => {
        expect(isValid(1700)).toBe(false);
        expect(isValid(1800)).toBe(false);
        expect(isValid(1900)).toBe(false);
        expect(isValid(2100)).toBe(false);
    });

    test('should return true for years divisible by 4 but not by 100', () => {
        expect(isValid(2008)).toBe(true);
        expect(isValid(2012)).toBe(true);
        expect(isValid(2016)).toBe(true);
    });

    test('should return false for years not divisible by 4', () => {
        expect(isValid(2017)).toBe(false);
        expect(isValid(2018)).toBe(false);
        expect(isValid(2019)).toBe(false);
    });
});
