const puppeteer = require("puppeteer");

let page;

console.log("Before");
let browserOpenPromise = puppeteer.launch({headless : false});


browserOpenPromise.then(function(browser){
    console.log("Browser Opened");
    const pagesArrPromise = browser.pages();
    return pagesArrPromise;
}).then(function(browserPages){
    page = browserPages[0];
    let gotoPromise = page.goto("https://www.google.com/");
    return gotoPromise;
}).then(function(){
    // Waiting for the element to appear on the page
    return page.waitForSelector("input[type ='text']",{visible:true});
}).then(function(){
    console.log("Reached Google Home Page");
    let keyBoardWillBeSendPromise = page.type("input[type ='text']", "Pepcoding");
    return keyBoardWillBeSendPromise;
}).then(function(){
    let enterWillBePressed = page.keyboard.press("Enter");
    return enterWillBePressed;
}).then(function(){
    // Waiting for the element to appear on the page
    return page.waitForSelector("h3.LC20lb.DKV0Md",{visible:true});
}).then(function(){
    console.log("Reached Google Home Page");
    
    let keyBoardWillBeSendPromise = page.click("h3.LC20lb.DKV0Md");
    // return keyBoardWillBeSendPromise;
}).catch(function(err){
    console.log(err);
});

console.log("After");