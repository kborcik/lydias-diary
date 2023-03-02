const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors)

const path= require('path')


app.listen(4000, ()=>{console.log('app running on 4000')})