
const { getConnection } = require('../connection'); 
const e = require('express');
const axios = require('axios');









exports.prueba = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query('select * from capa.ATRIBUTOS_NIDUX');
    res.json(result.recordset);
    pool.close();
  } catch (error) {
    console.error('Error al obtener las razas:', error);
    res.status(500).json({ message: 'Error al obtener las razas' });
  }
};

/*
---------------------------------------------------------------------------------------------------
Esta función se encarga de recibir la información de ha enviar al API Global(conexion con WhatsApp)
---------------------------------------------------------------------------------------------------
E: req(el body contiene idGlobal y ordenes(lista) ), res 
S: Llamada al API Global
*/

exports.AnswerFormat = async (req, res) => {


  const idGlobal = req.body.idGlobal;
  const ordenes = req.body.ordenes;

  for (let i = 0; i < ordenes.length; i++) {
    const orden = ordenes[i];
    let resultado = `La Orden ${orden.ORDEN_COMPRA} que se encuentra la bodega ${orden.BODEGA} y el proveedor es ${orden.PROVEEDOR}
     con una condición de pago de ${orden.CONDICION_PAGO} y un total a comprar de ${orden.TOTAL_A_COMPRAR}, esto 
     para el país ${orden.PAIS} y con fecha de ${orden.FECHA} `;
    console.log(resultado);
  }
  res.json({ message: 'Respuesta desde el servidor', msj: req.body });
};
