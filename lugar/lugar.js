const axios = require('axios');

const getLugarLatLngPais = async(direccion) => {

    let encodedURL = encodeURI(direccion);

    //console.log('la url como achetemele :', encodedURL);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedURL }&key=AIzaSyCUGtVaTaHxg7Zh0kd5dKEGy8SjkcO4cbs`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados pa la direccion ${ direccion }`);
    }

    let location = resp.data.results[0];

    const pais = location.address_components
        .find(arrDir => arrDir.types.includes('country'));

    // console.log('Direccion:', location.formatted_address);
    // console.log('Latitud:', location.geometry.location.lat);
    // console.log('Longitud:', location.geometry.location.lng);
    // console.log('Pais :', pais.long_name);
    // console.log('Código Pais :', pais.short_name);

    //console.log('LA PURA DATA');
    //console.log(JSON.stringify(resp.data, undefined, 2));
    //console.log(resp.data);

    return {
        direccion: location.formatted_address,
        lat: location.geometry.location.lat,
        lng: location.geometry.location.lng,
        pais: pais.long_name,
        codpais: pais.short_name
    }
}

module.exports = {
    getLugarLatLngPais
}