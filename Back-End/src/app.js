const express = require("express")
const cors = require("cors")
const routes = require("./routes/routes")

require("dotenv").config()

const app = express()

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self'; manifest-src 'self'");
  next();
});

// Middleware para tratar a requisição do favicon
app.get('/favicon.ico', (req, res) => res.status(204));

// Rotas da sua aplicação
app.get('/', (req, res) => {
  res.send('foi');
});

app.use(express.json())
app.use(cors())
app.use(routes)

module.exports = app
