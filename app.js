const express = require("express");
const app = express();
const hbs = require("hbs"); // Requerimos HBS
const path = require("path");


const PORT = 3000;

// Middleware para archivos estáticos
app.use(express.static("public"));
app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
// Configurar motor de plantillas
app.set("view engine", "hbs");
app.set('views', path.join(__dirname, 'views'));

hbs.registerPartials(path.join(__dirname, '/views/partials'));
// Registrar parciales 


// Helper para la clase de prioridad
hbs.registerHelper("priorityClass", function (priority) {
  if (priority === "alta") {
    return "priority-high";
  } else if (priority === "media") {
    return "priority-medium";
  } else {
    return "priority-low";
  }
});

// Ruta dinámica
app.get("/perfil", (req, res) => {
  res.render("perfil", {
    nombre: "Ana",
    profesion: "Desarrolladora Web",
  });
});

// Ruta dashboard (para usar el helper después)
app.get("/dashboard", (req, res) => {
  const data = {
    user: {
      name: "Carlos",
      isAdmin: true,
    },
    projects: [
      {
        name: "API Gateway",
        isCompleted: false,
        tasks: [
          { description: "Diseñar endpoints", priority: "alta" },
          { description: "Implementar JWT", priority: "alta" },
          { description: "Crear documentación", priority: "media" },
        ],
      },
      {
        name: "Refactor del Frontend",
        isCompleted: true,
        tasks: [
          { description: "Migrar a React 18", priority: "baja" },
          { description: "Actualizar dependencias", priority: "baja" },
        ],
      },
      {
        name: "Base de Datos",
        isCompleted: false,
        tasks: [], // Proyecto sin tareas para probar el condicional 'else'
      },
    ],
  };
  res.render("dashboard", data);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
