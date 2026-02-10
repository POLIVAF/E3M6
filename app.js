const express = require('express');
const app = express();
const path = require('path')

const PORT = 3000;

// Middleware para archivos estáticos
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
