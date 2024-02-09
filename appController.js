// appController.js
let tareas = [];

const agregarTarea = (descripcion) => {
  tareas.push({ descripcion, completada: false });
};

const marcarTareaComoCompletada = (index) => {
  if (tareas[index]) {
    tareas[index].completada = true;
  }
};

const obtenerTareas = () => {
  return tareas;
};

module.exports = {
  agregarTarea,
  marcarTareaComoCompletada,
  obtenerTareas,
};
