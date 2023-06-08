const express = require("express");
const router = express.Router();

// Controllers
const { renderHorarios, renderEventos, renderExtra, renderSalones, renderSelectUser , renderHorarioUser} = require("../controllers/admin.controller");

//Metodos get para lectura
router.get("/horariosAdmin", renderHorarios);
router.get("/eventosAdmin", renderEventos);
router.get("/extraAdmin", renderExtra);
router.get("/salonesAdmin", renderSalones);
router.get("/admin/selectUser", renderSelectUser)
//Metodos POST para enviar informacion
router.post("/admin/selectUser", renderHorarioUser)
module.exports = router;