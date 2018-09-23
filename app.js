//const axios = require('axios');

const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {

        let coordenadas = await lugar.getLugarLatLngPais(direccion);
        let temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);

        return `El clima en ${ coordenadas.direccion } es de ${ temperatura }`;

    } catch (e) {
        return `No se pudo determinar el clima en ${ direccion }, favor especifique búsqueda`;
    }
}

// lugar.getLugarLatLngPais(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));

// clima.getClima(12, -12.34545)
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e));

//key google maps AIzaSyCUGtVaTaHxg7Zh0kd5dKEGy8SjkcO4cbs

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

//console.log('Direccion a enviar :', argv.direccion);