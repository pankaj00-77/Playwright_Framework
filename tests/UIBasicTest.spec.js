const {test, expect } = require('@playwright/test');//we write this to import the package without this we cannot execute our test cases
test('browser context playwright test', async ({browser})=>{

    const context = await browser.newContext();// to open the new fresh browser
    const page =await context.newPage();// to create the page on that browser


    const username=page.locator('#username');
    const password=page.locator('[type="password"]');
    const login=page.locator("[type='submit']");


   await page.goto("https://rahulshettyacademy.com/loginpagePractise")//to open that url on that page
    console.log(await page.title());// to get the title of that page
    //incorrect id password
    await username.fill("panaraju@gmail.com");// to locate the web element and enter the details
     await password.fill("PANApana2@");// to locate the web element and enter the details
     await login.click();
     console.log(await page.locator("[style*='block']").textContent()); //text Content is used for to get the text from the selected web element
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    // to clean the username and password field
    username.fill("");
    password.fill("");
    // entering the correct id and password
        await username.fill("rahulshettyacademy");
        await password.fill("learning");
        await login.click();

        //get the nth index element
        // console.log(await page.locator(".card-body a").nth(0).textContent());
        //get the text of the all element as array
        const allText = await page.locator(".card-body a").allTextContents();
        console.log(allText);

});
//we can also use the page object model to write the test cases
test('UI Controls', async ({page})=>{
       await page.goto("https://rahulshettyacademy.com/loginpagePractise")//to open that url on that page
       
    const username=page.locator('#username');
    const password=page.locator('[type="password"]');
     const documentLink = page.locator('[href*="documents-request"]');

    await page.locator(".customradio").last().click();
    await page.locator('#okayBtn').click();
    expect(page.locator(".customradio").last()).toBeChecked();


       const dropDown = await page.locator('select.form-control');
        await dropDown.selectOption("Teacher");

        await page.locator('#terms').click();
        await expect(page.locator('#terms')).toBeChecked();
        await page.locator('#terms').uncheck();
        expect(await page.locator('#terms').isChecked()).toBeFalsy();

        await expect(documentLink).toHaveAttribute("class","blinkingText");

        
        
        
        
        
    });
    
    test.only('@child window handles', async ({ browser })=> {
    const context = await browser.newContext(); // to open the new fresh browser
    const page = await context.newPage(); // to create the page on that browser
            const username = page.locator("#username");
            await page.goto("https://rahulshettyacademy.com/loginpagePractise"); //to open that url on that page
            const documentLink = page.locator('[href*="documents-request"]');
            const [newpage] = await Promise.all(
                [
                    context.waitForEvent('page'),
                    documentLink.click()
                ]
            )
            const text = await newpage.locator(".red").textContent();
            const arrayText = text.split("@");
            const domain = arrayText[1].split(" ")[0];
            console.log(domain);

             await username.fill(domain);
             page.pause();
            console.log(await page.locator('#username').textContent());


        }
    );


    
    // await page.pause();
