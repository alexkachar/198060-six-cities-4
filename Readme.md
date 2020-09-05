"Six Cities" React/Redux portfolio project

Main technologies:
React,
Redux,
TypeScript,
Axios,
ReactRouter,
Leaflet,
Jest,
Enzyme

Projects npm scripts:

start: "webpack-dev-server"
build: "webpack --mode production",
test: "npm run eslint && npm run test.jest",

eslint: "npm run eslint.js && npm run eslint.ts",
eslint.js: "eslint --ext .jsx --ext .js src/",
eslint.ts: "eslint --config .eslintrc-ts.yml --ext .tsx src/",
test.jest: "jest",

_Do not remove and change folders:_
_`.editorconfig`, `.gitattributes`, `.gitignore`, `.travis.yml`, `package.json`._
