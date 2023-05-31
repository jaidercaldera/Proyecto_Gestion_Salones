const express = require("express");
const router = express.Router();

// Controllers
const { renderSalones,renderEventos, renderExtracurriculares, renderPersonalizar } = require("../controllers/publico.controller");

router.get("/salones", renderSalones);

router.get("/eventos", renderEventos);

router.get("/extracurriculares", renderExtracurriculares);

router.get("/personalizar", renderPersonalizar);

module.exports = router;