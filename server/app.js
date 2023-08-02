const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { PORT = 4000 } = process.env;
const cors = require('cors');
const { creatUser, login } = require('./controllers/user');
const app = express();

const allowedCors = ['http://localhost:3000'];

const corsOptions = {
  origin: allowedCors,
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.post('/signin', login);
  
app.post('/signup', creatUser);


mongoose.connect('mongodb://localhost:27017/volt', {useNewUrlParser: true})
 .then(()=> app.listen(PORT, () => {console.log(`App listening on port ${PORT}`)}))
 .catch(e => console.log(e))

