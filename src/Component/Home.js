
const express = require('express');


const router = express.Router();


router.get('/', (req, res) => {

  const pageTitle = 'Halaman Rumah';
  const welcomeMessage = 'Selamat datang di halaman rumah!';


  res.render('home', { pageTitle, welcomeMessage });
});


module.exports = router;
