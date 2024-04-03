const express = require('express');
const fs = require('fs');


const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const provinsiData = JSON.parse(fs.readFileSync('./public/provinsi.json'));


app.get('/provinsi', (req, res) => {
  res.json(provinsiData);
});


app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});


app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message
    }
  });
});


app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
