const {test , expect , request}=  require('@playwright/test');
const {APIUtils} = require('../Utils/APIUtils');
const { json } = require('stream/consumers');

const loginPayLoad={userEmail: "rajpal1996kumar@gmail.com", userPassword: "POPpopcon22"}
let orderPayload = {orders: [{country: "India", productOrderedId: "67a8dde5c0d3e6622a297cc8"}]}
let orderId;
let token;
let response;
let fakePayloadResponse = {message:"No Product in Cart"}
test.beforeAll( async ()=>{
         const apiContext = await request.newContext();//request.newContext() This creates a new API context.....const apiContext = You're saving this context in a variable called apiContext.
          const apiUtils= new APIUtils(apiContext,loginPayLoad);//because we pass apicontext as a parameter in the APIUtils class
          response = await apiUtils.createOrder(orderPayload);


         


});




test('place the order', async ({page})=>{



   page.addInitScript(value =>{
      window.localStorage.setItem('token',value);
   },  response.token);//and here we call that response.token from APIUtils file

//       const context = await browser.newContext();
//   const page = await context.newPage();
 
   
   
   await page.goto("https://rahulshettyacademy.com/client");
   await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
   async route=>{
      const response = await page.request.fetch(route.request());
      let body = JSON.stringify(fakePayloadResponse);
      route.fulfill(
         {
            response,
            body,
         });
   });
   
   

   
 
   await page.locator("button[routerlink*='myorders']").click();
   await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
   
 
 
   
 
});