const {LoginPage} = require('../PageObjects/LoginPage');
const { DashboardPage } = require('../PageObjects/DashboardPage');


class POManager{// we create this class to store our all page object at one place 
    constructor(page){
        this.page = page;
         this.loginPage = new LoginPage(this.page); // why se write this.page in bracket...Interact with the same browser tab and Stay in sync with the current test flow
            this.dashboardPage = new DashboardPage(this.page);

    }
    async getLoginPage(){
        return this.loginPage;

    }
    getDashboardPage(){
        return this.dashboardPage;
    }
}

module.exports = {POManager}