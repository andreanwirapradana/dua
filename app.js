require('dotenv').config();
const express =  require('express');
const app = express()
const routes =  require('./routes')
const cors = require('cors');
const port = process.env.port || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(routes)

app.listen(port, () => {
    console.log(`This app is listening on port: ${port}`)
})