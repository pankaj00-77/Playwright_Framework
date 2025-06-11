const {test, expect } = require('@playwright/test');//we write this to import the package without this we cannot execute our test cases


// const { BasePage } = require('../PageObjects/BasePage');
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
   

   //>>>>>>>>For dashboard page
   const dashboardPage = pOManager.getDashboardPage();
   await dashboardPage.searchProductAddCart(productName);
   await dashboardPage.navigateToCart();
  
   //await page.pause();
   //>>>>>>>>>>>>>>> for cart page
   const cartPage = pOManager.getCartPage(page);
   cartPage.productIsVisible();
   cartPage.goToCheckout();

 
   

   //>>>>>>>>>>>> for Place Order Page 
      const placeOrderPage = pOManager.getPlaceOrderPage(page);
      await placeOrderPage.searchCountryAndSelect("India");
      const orderId = await placeOrderPage.placeOrderClick();
      // await placeOrderPage.placeOrderClick();

   
   console.log(orderId);

  //>>>>>>>>>>>>>Order history page
   await dashboardPage.navigateToOrders();
   const ordersHistoryPage = pOManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   const orderIdDetails = await ordersHistoryPage.getOrderId();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();

   page.get
 
});

//we can also use the page object model to write the test cases


