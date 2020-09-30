const axios = require("axios");


(async () => {

    const url = "http://localhost:7396";
  
    const result = await axios.put(`${url}/api/session?_=${Math.random()}`);
    const { data: sid } = result;
    console.log({sid})

    const { data: updatesData} = await axios.post(`${url}/api/updates?sid=${sid}`);
    console.log({updatesData});
    
})()





