# anagram

A common Frontend Developer interview question, implemented in 3 different frameworks (Riot.js, TKO, React).

Use `npm run serve` to serve the web app (when inside the corresponding directory).

## Versions

I did the first version in Riot.JS on April 11, 2023, and later wanted to compare it to other frameworks.

* `riot`: Implemented in Riot.JS, full ES6 module, using Jest as a test suite; only tests "business logic" part
* `tko`: Using TKO (successor of Knockout.JS), "model" part is a CommonJS module using Mocha as a test suite; tests also includes testing the ViewModel
* `react`: Using React, source files are ES6 modules (but building still requires CommonJS), no test suite (didn't look into it further)

Size comparison of the compiled app (just looking at the size of the _tersed_ output file):

| Framework | Size |
|:----------|:-----|
| Riot.JS | 18.1 KB
| TKO | 125 KB (when using latest version)
| React | 138 KB (when building `production`)

### Riot.js

* ✓ Compiled size is small
* ✓ Doesn't require any CommonJS build setup
* ✓ Supports scoped CSS
* ? _View_ part is reasonably close to HTML
* ? Testing the component requires additional plugin

### TKO

* ✓ _ViewModel_ part is a plain JavaScript object, can be easily instantiated and tested
* ✓ No wiring logic required for input handlers thanks to two-way binding (less code)
* ✓ _View_ part is plain HTML; can easily be integrated in backends returning static pages
* ✓ Theoretically, no compilation required (if you don't need minimized output)
* ? Output file is large
* ? You need your own setup to scope CSS rules
* ? Build environment is still a mix of ES/CommonJS modules

### React

* ✓ Built-in scoped CSS support
* ? _View_ part (JSX) is its own language
* ? Build setup (at least with Rollup) requires weird "magic" code (`replace({"process.env.NODE_ENV": JSON.stringify("development") })?`)
* ? Output file is the largest
* ? Code can be modules, but building still requires CommonJS plugin
* ? Testing the component requires additional setup
