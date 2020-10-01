const axios = require("axios");


(async () => {

    const url = "http://localhost:7396";
    // Get session id
    const result = await axios.put(`${url}/api/session?_=${Math.random()}`);
    const { data: sid } = result;
    console.log({sid})

    // get configuration
    const configResponse = await axios.get(`${url}/api/configured?sid=${sid}`)
    console.log({configResponse});

    const { data: updatesData} = await axios.post(`${url}/api/updates?sid=${sid}`);
    console.log({updatesData});
    
})()





