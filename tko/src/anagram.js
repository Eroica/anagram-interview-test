/**
 * Checks whether 2 given words are anagrams of one another.
 *
 * NOTE: This check relies on a character's numeric value; as such, numbers and
 * punctuation marks are also "letters" that can be compared.
 *
 * @param {string} word1 - First word
 * @param {string} word2 - Second word
 * @param {boolean} isCaseInsensitive - Flag to check words in case-insensitive manner or not
 * @returns {boolean} `true` if the two given words are anagrams
 */
function checkIsAnagram (word1, word2, isCaseInsensitive) {
	/* Early return if the words' letter count is different from one another */
	if (word1.length !== word2.length) {
		return false;
	}

	/* Using a Collator here allows us to be more lenient when comparing
	 * letters. For example, (German) users might enter "Lager" and "Regal",
	 * and in everyday speech these are considered anagrams even though the
	 * case of r/R and l/L doesn't match.
	 * In a more strict version, the case of a letter could be taken into
	 * account; this might be necessary for languages such as Turkish where
	 * lower-casing `I` has locale-dependent results. */
	const collator = new Intl.Collator(
		"de",
		{ sensitivity: isCaseInsensitive ? "base" : "variant" }
	);

	return collator.compare(
		word1.split("").sort(collator.compare).join(""),
		word2.split("").sort(collator.compare).join("")
	) === 0;
}

module.exports = checkIsAnagram;
