const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=51344a5fae8059f91f2a00b306823e4e`)

    // console.log('pais del clima', resp.data.sys.country);
    // console.log('comuna del clima', resp.data.name);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}