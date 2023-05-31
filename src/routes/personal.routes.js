const express = require("express");
const router = express.Router();

// Controllers
const { renderPersonal, renderActividades} = require("../controllers/personal.controller");

router.get("/personal", renderPersonal);

router.get("/actividades", renderActividades);
module.exports = router;
