class DashboardPage{
    constructor(page) { //here we store all the locators
        this.page = this.page; //by declearing this we can access page from any where in the class
        this.products = page.locator(".card-body");
        this.productText =  page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");
         this.orders = page.locator("button[routerlink*='myorders']");


    }
    async searchProductAddCart(productName){ // and here we create methods and use our locators 
        
   
   const titles = await this.productText.allTextContents();
   console.log(titles); 
   const count = await this.products.count();
   for (let i = 0; i < count; ++i) {
      if (await this.products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await this.products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }
    }

    async navigateToCart(){ // and here we create methods and use our locators 
        await this.cart.click();
    }
    async navigateToOrders()
{
    await this.orders.click();
}
}
module.exports = {DashboardPage}