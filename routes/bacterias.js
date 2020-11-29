const express = require('express');
const router = express.Router();

const mysqlConnection   = require('../db/db');

router.get('/bacterias',(req,res)=>{
  mysqlConnection.query('SELECT  FROM bacterias' ,(err, rows, fields) => {
    if(!err){
      res.json(rows);
      console.long(fields);
     }
     else{
     console.long(err);
     }
 });
 });

 

 router.delete('/bacterias/:nombre',(req,res)=>{
   const {clasificacion}=req.params;
  mysqlConnection.query(`DELETE FROM bacterias  WHERE bacterias.clasificacion = ${clasificacion}` ,(err, rows, fields) => {
    if(!err){
      res.json({status: "Bacteria eliminada"});
      console.long(fields);
     }
     else{
     console.long(err);
     }
 });
 });

module.exports = router