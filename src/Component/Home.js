// Import modul yang diperlukan
const express = require('express');

// Inisialisasi router Express
const router = express.Router();

// Definisikan handler untuk rute /home
router.get('/', (req, res) => {
  // Logika untuk menampilkan halaman rumah
  const pageTitle = 'Halaman Rumah';
  const welcomeMessage = 'Selamat datang di halaman rumah!';

  // Render halaman home.ejs dan kirim ke klien
  res.render('home', { pageTitle, welcomeMessage });
});

// Export router agar bisa digunakan di file lain
module.exports = router;
