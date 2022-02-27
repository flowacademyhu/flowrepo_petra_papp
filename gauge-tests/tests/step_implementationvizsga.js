/* globals gauge*/
"use strict";
const path = require("path");
const {
    hover,
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
    screenshot,
    above,
    click,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    textBox,
    evaluate,
    resizeWindow,
    goBack,
    toRightOf,
    currentURL,
    waitFor,
    $,
} = require('taiko');
const assert = require('assert');
const {console}  = require('console');
const expect = require('chai').expect;
const headless = process.env.headless_chrome.toLowerCase() === 'true';


beforeSuite(async () => {
//   await openBrowser({headless: headless})
}); 
/*
afterSuite(async () => {
    await closeBrowser();
}); */

step("Open <page> with headless mode <isheadless>.", async function (page, isheadless) {
	var headlessParam = isheadless.toLowerCase() === 'true';
    await openBrowser({headless: headlessParam});
    await goto(page);
    
});

step("I click on Bejelentkezés icon.", async function() {
    await click('Bejelentkezés');
});

step("Click on Felhasználónév input.", async function() {
	await click($('#_username'));
});

step("Write <usernameParam> in the Felhasználónév feild.", async function(usernameParam) {
    await write('PPetra8', $('#_username'));
});


step("Click on login button.", async function() {
	await press('Enter');
});

step("Click on Jelszó input.", async function() {
	await click($('#_password'));
});

step("Write <passwordParam> in the Jelszó feild.", async function(passwordParam) {
	await write('621a45843cc11',$('#_password'));
});

step("I click on Elfelejtett jelszó icon.", async function() {
    await click($(`a[href='/elfelejtett-jelszo']`));
});

step("Write <forgottenpassword> in the Elfelejtett jelszó feild.", async function(forgottenpassword) {
	await write('pappp@',$('a.reset_password_email'));
});

step("Click on Jelszó megjelenítés icon.", async function() {
	await click($(`[@id="default-login-form"]`/div[2]/div[2]/a/i))
});

step("Write <errorpasswordParam> in the error Jelszó feild.", async function(errorpasswordParam) {
	await write('11223344',$('#_password'));
});


step("Click on Facebook social media icon.", async function() {
	await click($(`a[href="/social/facebook"]`));
    await goBack();
});

step("Click on Apple social media icon.", async function() {
	await click($('a[button button--apple button--lg button--fluid form__button js-profile__apple-button]'));
    await goBack();
});
