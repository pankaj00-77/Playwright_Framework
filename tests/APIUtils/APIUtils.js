class APIUtils
{

    constructor(apiContext,loginPayLoad){
        this.apiContext = apiContext;// Its job here is to receive the apiContext and store it for later use inside the class. like.....
        this.loginPayLoad = loginPayLoad;
    
    }



    async gettoken( )//method
    {
        //login web using API
         const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", //here we use this....
            
         {
            data:this.loginPayLoad
         })
         expect(loginResponse.ok()).toBeTruthy();
         const loginResponseJson = await loginResponse.json();
          token = loginResponseJson.token;
         console.log(token);
         return token;
    }

    async creatOrder(orderPayload)
    {
        //validate the order id from API #retry learning
                 const orderResponse =  await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{
                    data:orderPayload,
                    headers:{
                       'authorization' :this.gettoken(),//that token() we call by using this
                       'Content-Type': 'application/json',
                    }
                 })
                 const orderResponsejson =  await orderResponse.json();
                 console.log(orderResponsejson);
                 orderId = orderResponsejson.orders[0];
                 return orderId;


    }
}


module.exports={ APIUtils };// by doing this it will visible to all files in the framework