class LoginPage{
    constructor(page){ //here we store all the locators
        this.page = page;//by declearing this we can access page from any where in the class
        this.signInButton = page.locator("[value='Login']");
        this.userName = page.locator("#userEmail");
        this.password = page.locator("#userPassword");

    }
    async goTo(){
       await this.page.goto("https://rahulshettyacademy.com/client");
    }
    async validLogin(username,password){ // and here we create methods and use our locators 
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signInButton.click();
        await this.page.waitForLoadState('networkidle');//Wait until all network requests are finished, and no new ones happen for a short time. >>>>>>>>>Why we don’t write it in the Dashboard Page??? DashboardPage model is initialized:ou already want to work with the dashboard, assuming it's ready.
    }
}
module.exports = {LoginPage}