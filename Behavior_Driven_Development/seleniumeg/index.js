const {Builder, By, Key, util} = require("selenium-webdriver");

(async function classDemo(){
    let driver = await new Builder().forBrowser('opera').build();
    try{
        await driver.get('https://www.cisco.com');
        await driver.findElement(By.name('q').sendkeys('devnet', KEY.RETURN));
    } finally{}
})();