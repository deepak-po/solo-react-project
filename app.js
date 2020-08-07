
const app = require("express")()
const express = require("express")
// const cors = require('cors')
const morgan = require("morgan")

const {requireAuth} = require("./utils/auth")

// if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

// let url="http://localhost:6777"

// app.use(cors({
//   origin:url,
//   credentials:true
// }))
app.use(morgan("dev"));
app.use(requireAuth)

module.exports = app