// const { BasePage } = require('./BasePage');
const { expect } = require('@playwright/test');
class CartPage{
    constructor(page){ 
        this.page = page;
        this.productCard = page.locator("div li");
        this.checkout = page.locator("text=Checkout");

        //productIsVisible Locators

    }

    async productIsVisible(productName){
        await this.productCard.first().waitFor();
           const bool = await this.page.locator("h3:has-text('"+productName+"')").isVisible();
           expect(bool).toBeTruthy();
           
    }
    async goToCheckout(){
        await this.checkout.click();
    }
}
module.exports = {CartPage}