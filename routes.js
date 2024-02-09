// routes.js
const express = require('express');
const router = express.Router();
const appController = require('./appController');

router.get('/', (req, res) => {
  res.render('index', { tareas: appController.obtenerTareas() });
});

router.post('/agregar', (req, res) => {
  const { tarea } = req.body;
  appController.agregarTarea(tarea);
  res.redirect('/');
});

router.post('/marcar/:index', (req, res) => {
  const index = req.params.index;
  appController.marcarTareaComoCompletada(index);
  res.redirect('/');
});

module.exports = router;
