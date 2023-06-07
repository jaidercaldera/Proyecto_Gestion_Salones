const express = require("express");
const router = express.Router();

// Controllers
const { renderHorarios, renderEventos, renderExtra, renderSalones } = require("../controllers/admin.controller");

router.get("/horariosAdmin", renderHorarios);
router.get("/eventosAdmin", renderEventos);
router.get("/extraAdmin", renderExtra);
router.get("/salonesAdmin", renderSalones);

module.exports = router;