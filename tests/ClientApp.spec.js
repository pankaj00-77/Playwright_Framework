const {test, expect } = require('@playwright/test');//we write this to import the package without this we cannot execute our test cases
test.only('browser context playwright test', async ({browser})=>{

    const context = await browser.newContext();// to open the new fresh browser
    const page =await context.newPage();// to create the page on that browser


    const username=page.locator('#userEmail');
    const password=page.locator('#userPassword');
    const login=page.locator('#login');


   await page.goto("https://rahulshettyacademy.com/client")//to open that url on that page
    console.log(await page.title());// to get the title of that page
    await username.fill("rajpal1996kumar@gmail.com");
    await password.fill("POPpopcon22");
    await login.click();

    await page.waitForLoadState('networkidle');//but if in case this line not works then doo this....
    // await page.locator(".card-body b").first().waitFor(); // we can use to alter that line also

    const productList = await page.locator(".card-body b").allTextContents();
    console.log(productList);

    

    
        

});
//we can also use the page object model to write the test cases


