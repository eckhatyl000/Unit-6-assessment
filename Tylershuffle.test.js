const { shuffle } = require('../src/shuffle')

describe('shuffle should...', () => {
    describe("shuffleArray function", () => {
        test("returns an array", () => {
            const result = shuffleArray([1, 2, 3]);
            expect(Array.isArray(result)).toBe(true);
        });

        test("returns an array of the same length as the argument sent in", () => {
            const input = ["", "", ""];
            const result = shuffleArray(input);
            expect(result.length).toBe(input.length);
        });

        test("contains all the same items as the original array", () => {
            const input = ["", "", ""];
            const result = shuffleArray(input);
            input.forEach((item) => {
                expect(result).toContain(item);
            });
        });

        test("shuffles the items in the array", () => {
            const input = [1, 2, 3, 4, 5];
            const result = shuffleArray(input);
            expect(result).not.toEqual(input);
        });
    });

})