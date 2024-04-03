const fs = require('fs');

const provinsiData = JSON.parse(fs.readFileSync('./public/provinsi.json'));


const idProvinsi = '1'; 
const kabupatenData = JSON.parse(fs.readFileSync(`kabupaten/${idProvinsi}.json`));


const idKabupaten = '1'; 
const kecamatanData = JSON.parse(fs.readFileSync(`kecamatan/${idKabupaten}.json`));


const idKecamatan = '1'; 
const kelurahanData = JSON.parse(fs.readFileSync(`kelurahan/${idKecamatan}.json`));


console.log(provinsiData);

