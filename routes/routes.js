const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../db/db');

router.get('/usuarios', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM usuarios ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

router.post('/nuevo-actor',(req,res)=>{

const {nombres,apellidos,correo,contraseña} = req.body;
let usuario = [nombres,apellidos,correo,contraseña ];

let nuevoUsuario = `INSERT INTO usuarios(nombres,apellidos,correo,contraseña)
                  VALUES(?,?,?,?,?,?,?)`;
mysqlConnection.query(nuevoUsuario, usuario, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Alumno matriculado`, })
  });
});  

router.put('/usuario/:id', (req, res) => {
  const {nombres,apellidos,correo,contraseña,
   } = req.body;
  const { id } = req.params;
  mysqlConnection.query(`UPDATE actores SET nombres = ?,apellidos = ?,
  correo = ?,documento = ?,telefono_celular = ?,fecha_nacimiento = ?,
  institucion_id = ? WHERE id = ?`, 
  [nombres,apellidos,correo,contraseña
   ,id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Usuario actualizado'});
    } else {
      console.log(err);
    }
  });
});

router.delete('/usuario/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM usuarios WHERE id = ?',
   [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Usuario eliminado!'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;