import checkIsAnagram from "./anagram.js";

test("same word is an anagram", () => {
	expect(checkIsAnagram("word", "word", true)).toBe(true);
});

test("permutation is an anagram", () => {
	expect(checkIsAnagram("word", "dwor", true)).toBe(true);
});

test("letter case can be ignored", () => {
	expect(checkIsAnagram("word", "DwoR", true)).toBe(true);
});

test("case-sensitive permutations are not an anagram", () => {
	expect(checkIsAnagram("Word", "Dorw", false)).toBe(false);
});

test("works with numbers", () => {
	expect(checkIsAnagram("12345", "12534", true)).toBe(true);
});

test("works with multi-byte characters", () => {
	expect(checkIsAnagram("你好", "好你", true)).toBe(true);
});

test("works with Turkish i/I special cases #1", () => {
	expect(checkIsAnagram("İabi", "abİİ", true)).toBe(true);
});

test("works with Turkish i/I special cases #2", () => {
	expect(checkIsAnagram("İabi", "abII", false)).toBe(false);
});
