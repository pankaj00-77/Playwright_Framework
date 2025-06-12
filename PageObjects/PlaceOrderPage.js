const { expect } = require('@playwright/test');

class PlaceOrderPage{
    constructor(page){
//         const username = "panaraju@gmail.com";
//    const password = "PANApana2@";
//    const productName = 'ZARA COAT 3';
        this.page= page;
        this.countryInput = page.locator("[placeholder*='Country']");
        this.dropdown = page.locator(".ta-results");
        this.emailId = page.locator(".user__name [type='text']").first();
        this.submit = page.locator(".action__submit");
        this.orderConfirmationText = page.locator(".hero-primary");
        this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");
    }
    async searchCountryAndSelect(countryCode,countryName){
        console.log(countryCode,countryName);
     await this.countryInput.pressSequentially(countryCode,{ delay: 100 });
   await this.dropdown.waitFor();
    const optionsCount = await this.dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
       const text=  await this.dropdown.locator("button.ta-item").nth(i).textContent();
      if (text.trim().toLowerCase() == countryName.toLowerCase()) {

         await this.dropdown.locator("button").nth(i).click();
         break;
      }
   }
      
    }
    async verifyEmailId(username){
        await expect(this.emailId).toHaveText(username);
    }
    async placeOrderClick(){
           await this.submit.click();
            await expect(this.orderConfirmationText).toContainText(" Thankyou for the order. ");
            return await this.orderId.textContent();



    }
}
module.exports = {PlaceOrderPage}