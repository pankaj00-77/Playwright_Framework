const {test , expect , request}=  require('@playwright/test');.
const {APIUtils} = require('../tests/APIUtils/APIUtils');

const loginPayLoad={userEmail: "rajpal1996kumar@gmail.com", userPassword: "POPpopcon22"}
let orderPayload = {orders: [{country: "India", productOrderedId: "67a8dde5c0d3e6622a297cc8"}]}
let orderId;
let token;
test.beforeAll( async ()=>{
         const apiContext = await request.newContext();//request.newContext() This creates a new API context.....const apiContext = You're saving this context in a variable called apiContext.
          const APIUtils= new APIUtils(apiContext,loginPayLoad);//because we pass apicontext as a parameter in the APIUtils class
         const orderId = createOrder(orderPayload);


         





});




test('place the order', async ({page})=>{

  



   page.addInitScript(value =>{
      window.localStorage.setItem('token',value);
   },token);

//       const context = await browser.newContext();
//   const page = await context.newPage();
 
   
   
   await page.goto("https://rahulshettyacademy.com/client");
   const email = "rajpal1996kumar@gmail.com";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   // await page.locator("#userEmail").fill(email);
   // await page.locator("#userPassword").fill("POPpopcon22");
   // await page.locator("[value='Login']").click();
   // await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
   const count = await products.count();
   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }
 
   // await page.locator("[routerlink*='cart']").click();
   // //await page.pause();
 
   // await page.locator("div li").first().waitFor();
   // const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   // expect(bool).toBeTruthy();
   // await page.locator("text=Checkout").click();
 
   // await page.locator("[placeholder*='Country']").pressSequentially("ind");
   // const dropdown = page.locator(".ta-results");
   // await dropdown.waitFor();
   // const optionsCount = await dropdown.locator("button").count();
   // for (let i = 0; i < optionsCount; ++i) {
   //    const text = await dropdown.locator("button").nth(i).textContent();
   //    if (text === " India") {
   //       await dropdown.locator("button").nth(i).click();
   //       break;
   //    }
   // }
 
   // await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   // await page.locator(".action__submit").click();
   // await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   // const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").first().textContent();
   // console.log(orderId);
 
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