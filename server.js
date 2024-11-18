const express = require('express')
const mongoose = require('mongoose')
const validUrl = require('valid-url')


const app = express()

app.use(express.json())

app.post('/', (req, res) => {
    const { longUrl } = req.body;

    if (!valid)
})

app.listen( process.env.PORT || 3000)