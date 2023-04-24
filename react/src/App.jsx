import React, { useState } from "react";

import checkIsAnagram from "./anagram";

const App = () => {
	const [word1, setWord1] = useState("Word 1");
	const [word2, setWord2] = useState("Word 2");
	const [isCaseInsensitive, setIsCaseInsensitive] = useState(true);
	const [isAnagram, setIsAnagram] = useState(false);

	const changeWord1 = (e) => {
		setWord1(e.target.value);
		setIsAnagram(checkIsAnagram(e.target.value, word2, isCaseInsensitive));
	}

	const changeWord2 = (e) => {
		setWord2(e.target.value);
		setIsAnagram(checkIsAnagram(word1, e.target.value, isCaseInsensitive));
	}

	const changeCaseInsensitive = () => {
		setIsCaseInsensitive(!isCaseInsensitive)
		setIsAnagram(checkIsAnagram(word1, word2, !isCaseInsensitive));
	}

	return (
		<article>
			<h1>Anagram tester</h1>

			<p>This form checks whether for 2 given words, one of them is an anagram of the other.</p>

			<p>For this test, an anagram is only valid if and only if it was created by permutation, i.e. both words must have the same amount of letters.</p>

			<form className="form">
				<label><input type="checkbox" checked={isCaseInsensitive} onChange={changeCaseInsensitive} /> Check words case-insensitively</label>
				<input onChange={changeWord1} value={word1} />
				<input onChange={changeWord2} value={word2} />
			</form>

			<aside>
			{isAnagram ? (
				<p>These 2 words are anagrams of one another!</p>
			) : (
				<p>These 2 words AREN’T anagrams of one another!</p>
			)}
			</aside>
		</article>
	);
};

export default App;
