const {Builder} = require("selenium-webdriver");

const opera = require("selenium-webdriver/opera")

const options = new opera.Options();

const driver = new Builder().forBrowser('opera').build();

driver.get("https://twitter.com")