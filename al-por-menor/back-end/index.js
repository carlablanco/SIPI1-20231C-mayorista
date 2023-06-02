require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.HTTP_PORT
const { sequelize } = require('./models/index');
const cors = require('cors')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

var corsOptions = {
  origin: process.env.FRONT_URL,
  optionsSuccessStatus: 200 
}

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

// Rutas
app.use('/api/', require('./routes'));

app.listen(port, function () {
  console.log(`Listening on http://localhost:${port}!`);

  sequelize.authenticate().then(() => {
      console.log('Conectado a la base de datos.');
  })
});