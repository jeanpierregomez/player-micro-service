const router = require("express").Router();
const jugadorController = require("../controllers/jugador.controller");

router.route("/guardar").post(jugadorController.guardar);

module.exports = router;
