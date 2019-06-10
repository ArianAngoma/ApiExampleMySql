const express = require('express');
const router = express.Router();
const mysqlConnnection = require('../database');

router.get('/', (req, res) => {
    mysqlConnnection.query('SELECT * FROM doctores', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
});

router.get('/:id', (req, res) => {
    const {Id} = req.params;
    mysqlConnnection.query('SELECT * FROM doctores WHERE Id = ?', [Id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    })
});

router.post('/', (req, res) => {
    const  {Apellido_paterno, Apellido_materno, Nombre, Dni, Especialidad, Codigo_colegiado} = req.body;
    const newDoctor = {
        Apellido_paterno,
        Apellido_materno,
        Nombre,
        Dni,
        Especialidad,
        Codigo_colegiado,
    };
    mysqlConnnection.query('INSERT INTO doctores SET ?', [newDoctor], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Doctor guardado'});
        } else {
            console.log(err);
        }
    });
});

router.put('/:id', (req, res) => {
    const  {Apellido_paterno, Apellido_materno, Nombre, Dni, Especialidad, Codigo_colegiado} = req.body;
    const {Id} = req.params;
    const editDoctor = {
        Apellido_paterno,
        Apellido_materno,
        Nombre,
        Dni,
        Especialidad,
        Codigo_colegiado,
    };
    mysqlConnnection.query('UPDATE doctores SET ? WHERE Id = ?', [editDoctor, Id], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Doctor editado'});
        } else {
            console.log(err);
        }
    });
});

router.delete('/:id', (req, res) => {
    const {Id} = req.params;
    mysqlConnnection.query('DELETE FROM doctores WHERE Id = ?', [Id], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Doctor eliminado'});
        } else {
            console.log(err);
        }
    });
});

module.exports = router;
