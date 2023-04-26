const tko = require("@tko/build.reference").default;

const ViewModel = require("./ViewModel.js");

tko.applyBindings(new ViewModel("Word 1", "Word 2", true));
