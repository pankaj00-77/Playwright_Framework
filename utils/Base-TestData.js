const base = require('@playwright/test');

exports.customTest = base.test.extend( 
{
    testDataForOrder:{
        
    username:"panaraju@gmail.com",
    password:"PANApana2@",
    productName:"ZARA COAT 3"
    
    }
});
// by creating fictures files we can creat our own custom made fictures 
//we do same as the PlaceOrderData.json file it is a alternate way to store data at on place but this time not in json format but in js object we don't need to use stringify this time