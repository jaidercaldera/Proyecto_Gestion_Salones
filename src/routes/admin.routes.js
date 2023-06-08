const express = require("express");
const router = express.Router();

// Controllers
const { renderHorarios, renderEventos, renderExtra, renderSalones, renderSelectUser , renderHorarioUser} = require("../controllers/admin.controller");

//Metodos get para lectura
router.get("/admin/horariosAdmin", renderHorarios);
router.get("/admin/eventosAdmin", renderEventos);
router.get("/admin/extraAdmin", renderExtra);
router.get("/admin/salonesAdmin", renderSalones);
router.get("/admin/selectUser", renderSelectUser)
//Metodos POST para enviar informacion
router.post("/admin/selectUser", renderHorarioUser)
module.exports = router;