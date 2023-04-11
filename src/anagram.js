/**
 * Checks whether 2 given words are anagrams of one another.
 *
 * NOTE: This check relies on a character's numeric value; as such, numbers and
 * punctuation marks are also "letters" that can be compared.
 *
 * @param {string} word1 - First word
 * @param {string} word2 - Second word
 * @param {boolean} isCaseInsensitive - Flag to check words in case-insensitive manner (default) or not
 * @returns {boolean} `true` if the two given words are anagrams
 */
export default function checkIsAnagram (word1, word2, isCaseInsensitive) {
	/* Early return if the words' letter count is different from one another */
	if (word1.length !== word2.length) {
		return false;
	}

	/* Using locale-aware sorting */
	const collator = new Intl.Collator();

	return word1.split("").sort(collator.compare).join("").localeCompare(
		word2.split("").sort(collator.compare).join(""),
		{},
		/* To allow comparisons like "Lager" and "Regal", act as if all letters were
		 * entered in lower case. In a more strict version, the case of a letter could be
		 * taken into account; this might be necessary for languages such as Turkish where
		 * lower-casing * `I` has locale-dependent results. */
		{ sensitivity: isCaseInsensitive ? "base" : "case" }
	) === 0;
}
