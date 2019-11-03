import axios from 'axios';

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

axios.defaults.headers.common = {
    ...axios.defaults.headers.common,
    "Content-Type": 'application/json',
 };
 axios.defaults.preflightContinue = true;
 //axios.defaults.crossDomain = true;

 
const http =  axios.create({
    baseURL: "http://localhost:9091",
    //timeout: 18000,
  
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': '*',
      

    },
});



export default http;