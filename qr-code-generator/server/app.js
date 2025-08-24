const express=require('express')
const app=express()
const bodyParser = require('body-parser');
const cors = require('cors');
const router= require('./routes')

app.use(bodyParser.json())
app.use(cors())
app.use(router);
app.listen(3000)