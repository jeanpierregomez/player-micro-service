const router = require("express").Router();
const jugadorController = require("../controllers/jugador.controller");

router.route("/guardar").post(jugadorController.guardar);
router.route("/listar_por_equipo/:id_equipo").get(jugadorController.listarPorEquipo);

module.exports = router;
