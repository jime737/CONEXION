const express = require('express');
const app = express();
const routes = require('./routes/routes');
const bacterias = require('./routes/bacterias');


// Ajustes
app.set('port',3001);

// Middlewares
app.use(express.json());

// Routes//
app.use('/api',routes);
app.use('/api',bacterias);


// Ajustes del servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});