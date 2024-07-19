$ mkdir shouty
$ cd shouty
create a package.json that describes the NPM packages 
$ npm init -y
$ npm install -D @cucumber/cucumber
Edit the package.json file 
"scripts": {
	"test": "./node_modules/.bin/cucumber-js" 
Create cucumber.js file & add -- to 
module.exports = { default: '--publish-quiet' }
Run npm test
Install hamjest in order to have more expressive assertions
$ npm install -D hamjest
