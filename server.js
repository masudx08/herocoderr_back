const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const App = require('./routes');
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())
app.use('/', App)

mongoose.connect('mongodb://localhost:27017/portfolio', ()=>{
  console.log('Database Connected')
});

app.listen(PORT, ()=>{
  console.log('Server is running  with port: ', PORT)
})
