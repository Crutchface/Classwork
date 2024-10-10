const express = require('express');
const app = express();
const axios = require('axios');
const port = 8000;

const API_KEY= '8a71d1ab911f8b6dbb72bc4192e68518';

app.use(express.static('public'));

app.get('/weather', async (req, res)=>{
    const city = req.query.city;
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // use axios .get to call api endpoint
    const response = await axios.get(url);
    console.log(response.data);
    // storing the api response into a data variable
    const data= response.data;

    //  converting the needed data to jason and sending it to frontend
    res.json({
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,

    });
}); 

app.listen(port,()=>{
    console.log("Running on 8000")
});