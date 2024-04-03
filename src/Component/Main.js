const express = require('express');
const fs = require('fs');

// Inisialisasi aplikasi Express
const app = express();
const port = process.env.PORT || 3000;

// Middleware untuk mengizinkan parsing body dari request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Baca file provinsi.json saat aplikasi dimulai
const provinsiData = JSON.parse(fs.readFileSync('./public/provinsi.json'));

// Contoh route untuk menampilkan data provinsi
app.get('/provinsi', (req, res) => {
  res.json(provinsiData);
});

// Middleware untuk menangani kesalahan jika rute tidak ditemukan
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// Middleware untuk menangani kesalahan server
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message
    }
  });
});

// Mulai server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
