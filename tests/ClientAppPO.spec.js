const {test, expect } = require('@playwright/test');//we write this to import the package without this we cannot execute our test cases

const { CartPage } = require('../PageObjects/CartPage');
const { BasePage } = require('../PageObjects/BasePage');
const { POManager } = require('../PageObjects/POManager');

test('clint app login', async ({browser})=>{

      const context = await browser.newContext(); //browser.newContext() → Think of it like creating a new user profile or incognito window......  const context → You store the new browser context in a variable named context.
  const page = await context.newPage();//context.newPage() → Opens a new tab or page inside that clean browser context. Like typing a URL in a new Chrome incognito window..... await → Because creating a page also takes time.......  const page → You store that new page/tab in a variable so you can interact with it.
 

   //js file- Login js, DashboardPage
   
   
   // await page.goto("https://rahulshettyacademy.com/client");
  
   const  pOManager = new POManager(page);
   const username = "panaraju@gmail.com";
   const password = "PANApana2@";
   const productName = 'ZARA COAT 3';
   // const products = page.locator(".card-body");
   // const basePage = new BasePage(page);

   //>>>>> For login page
   const loginPage = pOManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username,password);
   // await page.locator("#userEmail").fill(username);
   // await page.locator("#userPassword").fill("PANApana2@");
   // await page.locator("[value='Login']").click();
   // await page.waitForLoadState('networkidle');

   //>>>>>>>>For dashboard page
   const dashboardPage = pOManager.getDashboardPage();
   await dashboardPage.searchProductAddCart(productName);
   await dashboardPage.navigateToCart();
   // await page.locator(".card-body b").first().waitFor();
   // const titles = await page.locator(".card-body b").allTextContents();
   // console.log(titles); 
   // const count = await products.count();
   // for (let i = 0; i < count; ++i) {
   //    if (await products.nth(i).locator("b").textContent() === productName) {
   //       //add to cart
   //       await products.nth(i).locator("text= Add To Cart").click();
   //       break;
   //    }
   // }
 
   // await page.locator("[routerlink*='cart']").click();
   //await page.pause();
   //>>>>>>>>>>>>>>> for cart page
   const cartPage = new CartPage(page);
   cartPage.productIsVisible();
   cartPage.goToCheckout();

 
   // await page.locator("div li").first().waitFor();
   // const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   // expect(bool).toBeTruthy();
   // await page.locator("text=Checkout").click();

   //>>>>>>>>>>>> for Place Order Page 
 
   await page.locator("[placeholder*='Country']").pressSequentially("ind");
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }
 
   await expect(page.locator(".user__name [type='text']").first()).toHaveText(username);
   await page.locator(".action__submit").click();
   // for  Thankyou for the order. Page
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").first().textContent();
   console.log(orderId);
 
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();

   page.get
 
});

//we can also use the page object model to write the test cases


