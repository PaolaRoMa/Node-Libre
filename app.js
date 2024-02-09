// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static('public'));

// Almacenamiento temporal de tareas en un array
let tareas = [];

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { tareas });
});

app.post('/agregar', (req, res) => {
  const { tarea } = req.body;
  tareas.push({ descripcion: tarea, completada: false });
  res.redirect('/');
});

app.post('/marcar/:index', (req, res) => {
  const index = req.params.index;
  tareas[index].completada = true;
  res.redirect('/');
});

app.post('/borrar/:index', (req, res) => {
    const index = req.params.index;
    tareas.splice(index, 1);
    res.redirect('/');
});

app.listen(PORT, () => {
console.log(`Servidor iniciado en el puerto ${PORT}`);
});