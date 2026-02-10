const express = require('express');
const app = express();
const path = require('path')

const PORT = 3000;

// Middleware para archivos estáticos
app.use(express.static('public'));

// Configurar motor de plantillas
app.set('view engine', 'hbs');

// Ruta dinámica
app.get('/perfil', (req, res) => {
  res.render('perfil', {
    nombre: 'Ana',
    profesion: 'Desarrolladora Web'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
