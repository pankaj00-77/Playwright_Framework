const {LoginPage} = require('../PageObjects/LoginPage');
const { DashboardPage } = require('../PageObjects/DashboardPage');
const { CartPage } = require('../PageObjects/CartPage');
const {PlaceOrderPage} = require('../PageObjects/PlaceOrderPage')
const { OrdersHistoryPage } = require('../PageObjects/OrderHistoryPage');

class POManager{// we create this class to store our all page object at one place 
    constructor(page){
        this.page = page;
         this.loginPage = new LoginPage(this.page); // why se write this.page in bracket...Interact with the same browser tab and Stay in sync with the current test flow
        this.dashboardPage = new DashboardPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.placeOrderPage = new PlaceOrderPage(this.page);
    this.ordersHistoryPage = new OrdersHistoryPage(this.page);

    }
     getLoginPage(){
        return this.loginPage;

    }
    getDashboardPage(){
        return this.dashboardPage;
    }
    getCartPage(){
        return this.cartPage;
    }
    getPlaceOrderPage(){
        return this.placeOrderPage;
    }
    getOrdersHistoryPage(){
        return this.ordersHistoryPage;
    }
}

module.exports = {POManager}