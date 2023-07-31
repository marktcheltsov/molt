const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { PORT = 3000 } = process.env;
const cors = require('cors');
const app = express();

const allowedCors = [''];

const corsOptions = {
  origin: allowedCors,
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOptions));




mongoose.connect('mongodb://localhost:27017/volt', {useNewUrlParser: true})
 .then(()=> app.listen(PORT, () => {console.log(`App listening on port ${PORT}`)}))
 .catch(e => console.log(e))

