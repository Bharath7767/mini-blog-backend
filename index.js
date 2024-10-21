const express = require('express')

const app = express()

const PORT = 8000;

const db = require('./src/database')
app.use('/api',require('./src/routes/index'))
app.listen(PORT,()=>{
    console.log(`Listening on port:${PORT}`)
})