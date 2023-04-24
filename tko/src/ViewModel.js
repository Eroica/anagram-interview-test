const ko = require("tko");

const checkIsAnagram = require("./anagram.js");

function ViewModel (word1, word2, isCaseInsensitive) {
	const self = this;
	this.word1 = ko.observable(word1);
	this.word2 = ko.observable(word2);
	this.isCaseInsensitive = ko.observable(isCaseInsensitive);
	this.isAnagram = ko.computed(() => {
		return checkIsAnagram(this.word1(), this.word2(), this.isCaseInsensitive());
	});
}

module.exports = ViewModel;
