const {test, expect} =  require('@playwright/test');
const path = require('path');

test('popup valitations', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.goto("https://google.com");
    // await page.goBack();
    // await page.goForward();

    await expect( page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect( page.locator("#displayed-text")).toBeHidden();
    // page.pause();
    await page.locator("#confirmbtn").click();
    await page.on("dialog",dialog=>dialog.accept());
    await page.locator("#mousehover").hover();
    const framespage = page.frameLocator("#courses-iframe");
    await framespage.locator('li a[href="lifetime-access"]:visible').click();
    const textCheck = await framespage.locator(".text h2").textContent();
    console.log(textCheck.split(" ")[1]);

});

test('@ss Screenshot and visual comparison', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    

    await expect( page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await page.screenshot({path:'screenshot.png'});
    await expect( page.locator("#displayed-text")).toBeHidden();


});