const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/admin', require('./routes/admin.routes'))
app.use('/api/booksearch', require('./routes/google.book.routes'))



const PORT = 5000

app.listen(PORT, ()=> console.log(`App is running on port ${PORT}`))

