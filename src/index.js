const express = require('express')
const path = require('path')
const commentRoute = require('../db/routes/comments')

const app = express()
const publicPath= path.join(__dirname, '../public')


app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(commentRoute)
app.use(express.static(publicPath))

const port = process.env.PORT || 3000

app.listen(port, ()=> {
    console.log(`The server is up on port ${port}`)
})