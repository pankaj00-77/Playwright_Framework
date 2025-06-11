// const { BasePage } = require('./BasePage');
const { expect } = require('@playwright/test');
class CartPage{
    constructor(page){
        this.page = page;
        this.productCard = page.locator("div li");
        this.checkText = page.locator("h3:has-text('ZARA COAT 3')");
        this.checkout = page.locator("text=Checkout");
    }

    async productIsVisible(){
        await this.productCard.first().waitFor();
           const bool = await this.checkText.isVisible();
           expect(bool).toBeTruthy();
           
    }
    async goToCheckout(){
        await this.checkout.click();
    }
}
module.exports = {CartPage}