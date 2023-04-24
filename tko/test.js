const assert = require("assert");

const ViewModel = require("./src/ViewModel.js");
const checkIsAnagram = require("./src/anagram.js");

describe("ViewModel", () => {
	it("should set isAnagram", () => {
		const vm = new ViewModel("Word 1", "Word 2", true);
		vm.word1("Lager");
		vm.word2("Regal");
		assert.equal(vm.isAnagram(), true);
	});
});

describe("checkIsAnagram", () => {
	it("same word is an anagram", () => {
		assert.equal(checkIsAnagram("word", "word", true), true);
	});

	it("permutation is an anagram", () => {
		assert.equal(checkIsAnagram("word", "dwor", true), true);
	});

	it("letter case can be ignored", () => {
		assert.equal(checkIsAnagram("word", "DwoR", true), true);
	});

	it("case-sensitive permutations are not an anagram", () => {
		assert.equal(checkIsAnagram("Word", "Dorw", false), false);
	});

	it("works with numbers", () => {
		assert.equal(checkIsAnagram("12345", "12534", true), true);
	});

	it("works with multi-byte characters", () => {
		assert.equal(checkIsAnagram("你好", "好你", true), true);
	});

	it("works with Turkish i/I special cases #1", () => {
		assert.equal(checkIsAnagram("İabi", "abİİ", true), true);
	});

	it("works with Turkish i/I special cases #2", () => {
		assert.equal(checkIsAnagram("İabi", "abII", false), false);
	});
});
