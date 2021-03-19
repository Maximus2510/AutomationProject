const {Builder, By, Key, until} = require('selenium-webdriver');
const { DriverService } = require('selenium-webdriver/remote');


(async function NormalUserLogIn() {
  let driver = await new Builder().forBrowser('chrome').build();
  driver.get('https://new.my.stage-1.richpush.co/login').
  // Find email field and send email
  then(function(){
    return driver.findElement(By.name('email')).sendKeys('maximus25101998@gmail.com');
  }).
  // Find password field and send pass
  then(function(){
    return driver.findElement(By.name('password')).sendKeys('159753Max');
  }).
  // Find check-box and click on it
  then(function(){
    return driver.findElement(By.css('#mat-checkbox-1 > label')).click();
  }).
  // Find Log-in button and click
  then(function(){
    return driver.wait(until.elementLocated(By.css('body > app-root > app-main-layout > app-unauthorized-layout > div.form-part > div > app-login > app-unauthorized-card > div > div.button-container > button')),30000).click();
  }).
  then(function(){
    return driver.wait(until.titleIs('RichAds - Performance Marketing Platform'), 1000);
  }).
  then(function(){
    return driver.getTitle().then(function(title) {
      console.log(title);
    })
  }).
  then(function(){
    console.log('Normal user login');
    console.log ('Logged in successfully - Test Pass');
  }).
  then(function(){
    return driver.wait(until.elementLocated(By.css('body > app-root > app-main-layout > app-header > div > div > mat-icon')),10000);
  }).
  then(function(){
    return driver.findElement(By.css('body > app-root > app-main-layout > app-header > div > div > mat-icon')).click();
  }).
  then(function(){
    return driver.wait(until.elementLocated(By.css('#mat-menu-panel-0 > div > button')),30000);
  }).
  then(function(){
    console.log('Searching for the Log out button');
    return driver.findElement(By.css('#mat-menu-panel-0 > div > button')).click();
  }).
  then(function(){
    console.log('User logged out');
  }).
  then (function webdriverErrorHandler(err, driver){

    console.error('There was an unhandled exception! ' + err.message);

    //if we had a session, end it and mark failed
    if (driver && sessionId){
        driver.quit();
        setScore('fail').then(function(result){
            console.log('FAILURE! set score to fail')
        })
    }
});
})
();

// const {Builder, By, Key, until} = require('selenium-webdriver');

// let driver = await new Builder().forBrowser('chrome').build();
//     driver.get('https://new.my.stage-1.richpush.co/login');

//     var loginEmail = driver.findElement(By.name('email'));
//     loginEmail.sendKeys('maximus25101998@gmail.com');

//     var loginPass = driver.findElement(By.name('password'));
//     loginPass.sendKeys('159753Max');

//     var loginCheckBox = driver.findElement(By.css('#mat-checkbox-1 > label'));
//     loginCheckBox.click();

//     var loginBtnClick = driver.findElement(By.css('body > app-root > app-main-layout > app-unauthorized-layout > div.form-part > div > app-login > app-unauthorized-card > div > div.button-container > button'));
//     loginBtnClick.click();

  /* then(function(){
    return 
})
    await driver.get('https://new.my.stage-1.richpush.co/login');
        await driver.findElement(By.name('email')).sendKeys('maximus25101998@gmail.com');
            await driver.findElement(By.name('password')).sendKeys('159753Max');
                await driver.findElement(By.css('#mat-checkbox-1 > label')).click();
                    await driver.findElement(By.css('body > app-root > app-main-layout > app-unauthorized-layout > div.form-part > div > app-login > app-unauthorized-card > div > div.button-container > button')).click();
                        await driver.wait(until.titleIs('RichAds - Performance Marketing Platform'), 1000);
    console.log('Normal user login')
    console.log ('Logged in successfully - Test Pass'); */
        /* await driver.sleep(2000);
            await driver.findElement(By.css('body > app-root > app-main-layout > app-header > div > div > mat-icon')).click();
                await driver.findElement(By.css('#mat-menu-panel-0 > div > button')).click();
                console.log('Logged out'); */
            /* })
            (); */
                   /*  Empty user data log in  */

                /* await driver.findElement(By.name('email')).sendKeys('').Key.TAB;
                await driver.findElement(By.css('#mat-error-3 > app-error').getText().then(function(text){
                    console.log(text);
                }));
                    await driver.findElement(By.name('password')).sendKeys('').Key.TAB;
                    await driver.findElement(By.css('#mat-error-4 > app-error').getText().then(function(text){
                        console.log(text);
                    }));
                        await driver.findElement(By.css('#mat-checkbox-1 > label')).click();
                            await driver.findElement(By.css('body > app-root > app-main-layout > app-unauthorized-layout > div.form-part > div > app-login > app-unauthorized-card > div > div.button-container > button')).click().then( await driver.quit(),1000); */ 
 