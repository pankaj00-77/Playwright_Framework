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
         
         const loginResponseJson = await loginResponse.json();
          const token = loginResponseJson.token;
         console.log(token);
         return token;
    }

    async createOrder(orderPayload)
    {
        //validate the order id from API #retry learning
        let response = {};
        response.token = await this.gettoken();// we store the value of grttoken in responce.token soo we can call this or we can say connect with WebAPITest1 file and get refferance from that APIUtils file 
                 const orderResponse =  await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{
                    data:orderPayload,
                    headers:{
                       'authorization' :response.token,//that token() we call by using this 
                       'Content-Type': 'application/json',
                    }
                 })
                 const orderResponsejson =  await orderResponse.json();
                 console.log(orderResponsejson);
                 const orderId = orderResponsejson.orders[0];
                 response.orderId= orderId;
                //  return orderId;change this from  to
                return response;//this because it stores 2 values 1st:response.token and 2nd:response.orderId by this we can use in WebAPITest file 


    }
}


module.exports={ APIUtils };// by doing this it will visible to all files in the framework