const {test, expect } = require('@playwright/test');//we write this to import the package without this we cannot execute our test cases


// const { BasePage } = require('../PageObjects/BasePage');
const { POManager } = require('../PageObjects/POManager');

//json file convert into string>>>>> then into js object
const dataset = JSON.parse(JSON.stringify(require('../Utils/PlaceOrderData.json')));//we create a .json file for store the data and import in the main test file. So we can make the code easy to read and understadable 
const {customTest} = require('../Utils/Base-TestData');//we created here a base-Test_data.js file for custom fictures

for(const data of dataset){
test(`clint app login'${data.productName}`, async ({browser})=>{

      const context = await browser.newContext(); //browser.newContext() → Think of it like creating a new user profile or incognito window......  const context → You store the new browser context in a variable named context.
      const page = await context.newPage();//context.newPage() → Opens a new tab or page inside that clean browser context. Like typing a URL in a new Chrome incognito window..... await → Because creating a page also takes time.......  const page → You store that new page/tab in a variable so you can interact with it.
 

   
   
  
   const  pOManager = new POManager(page);
   

   //>>>>> For login page
   const loginPage = pOManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(data.username,data.password);
   

   //>>>>>>>>For dashboard page
   const dashboardPage = pOManager.getDashboardPage();
   await dashboardPage.searchProductAddCart(data.productName);
   await dashboardPage.navigateToCart();
  
   //await page.pause();
   //>>>>>>>>>>>>>>> for cart page
   const cartPage = pOManager.getCartPage(page);
   cartPage.productIsVisible(data.productName);
   cartPage.goToCheckout();

 
   

   //>>>>>>>>>>>> for Place Order Page 
      const placeOrderPage = pOManager.getPlaceOrderPage(page);
      await placeOrderPage.searchCountryAndSelect("ind","India");
      const orderId = await placeOrderPage.placeOrderClick();

   
   console.log(orderId);

  //>>>>>>>>>>>>>Order history page
   await dashboardPage.navigateToOrders();
   const ordersHistoryPage = pOManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   const orderIdDetails = await ordersHistoryPage.getOrderId();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();

   page.get
 
});
}
customTest('clint app login', async ({page,testDataForOrder})=>{

 

   //js file- Login js, DashboardPage
   
   
   
  
   const  pOManager = new POManager(page);

   //>>>>> For login page
   const loginPage = pOManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(testDataForOrder.username,testDataForOrder.password);
   

   //>>>>>>>>For dashboard page
   const dashboardPage = pOManager.getDashboardPage();
   await dashboardPage.searchProductAddCart(testDataForOrder.productName);
   await dashboardPage.navigateToCart();
  
   //>>>>>>>>>>>>>>> for cart page
   const cartPage = pOManager.getCartPage(page);
await cartPage.productIsVisible(testDataForOrder.productName);
   cartPage.goToCheckout();

 
   

   //>>>>>>>>>>>> for Place Order Page 
      const placeOrderPage = pOManager.getPlaceOrderPage(page);
      await placeOrderPage.searchCountryAndSelect("ind","India");
      const orderId = await placeOrderPage.placeOrderClick();

   
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


