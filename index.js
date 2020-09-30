const axios = require("axios");

async () =>  {
  const url = "http://localhost:7396";
  
  const result = axios.put(url + '/api/session?_=' + Math.random());

}()

console.log({axios});



