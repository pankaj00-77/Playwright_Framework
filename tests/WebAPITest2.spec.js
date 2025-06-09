const { test, expect } = require('@playwright/test');
 const email = "rajpal1996kumar@gmail.com";
 let webContext;
test.beforeAll(async({browser})=>{
    const context = await browser.newContext();//it opens a new fresh browser and
    const page = await context.newPage();// it will opens a new fresh page in that browser
    await page.goto("https://rahulshettyacademy.com/client");
   await page.getByPlaceholder("email@example.com").fill(email);
   await page.getByPlaceholder("enter your passsword").fill("POPpopcon22");
   await page.getByRole('button',{name:"Login"}).click();
   await page.waitForLoadState('networkidle');
    webContext = await browser.newContext({ storageState: 'State.json' });
//    webContext = await browser.newContext(storageState({path: 'State.json'}));// wrong code


});
 
 
 
test('@Webst Client App login', async () => {
   //js file- Login js, DashboardPage
   const page = await webContext.newPage();// now rest of the test will execute on that page
   const email = "";
   const productName = 'ZARA COAT 3';
   await page.goto("https://rahulshettyacademy.com/client");
   const products = page.locator(".card-body");

   
   await page.locator(".card-body b").first().waitFor();
   
   await page.locator(".card-body").filter({hasText:"ZARA COAT 3"})
   .getByRole("button",{name:"Add to Cart"}).click();
 
   await page.getByRole("listitem").getByRole('button',{name:"Cart"}).click();
 
   //await page.pause();
   await page.locator("div li").first().waitFor();
   await expect(page.getByText("ZARA COAT 3")).toBeVisible();
 
   await page.getByRole("button",{name :"Checkout"}).click();
 
   await page.getByPlaceholder("Select Country").pressSequentially("ind");
 
   await page.getByRole("button",{name :"India"}).nth(1).click();
   await page.getByText("PLACE ORDER").click();
 
   await expect(page.getByText("Thankyou for the order.")).toBeVisible();
})


test('test title', async () => {
   //js file- Login js, DashboardPage
   const page = await webContext.newPage();// now rest of the test will execute on that page
   const email = "";
   const productName = 'ZARA COAT 3';
   await page.goto("https://rahulshettyacademy.com/client");
   const products = page.locator(".card-body");
      await page.locator(".card-body b").first().waitFor();

    const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 

})