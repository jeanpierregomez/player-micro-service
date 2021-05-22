const router = require("express").Router();
const jugadorRouter = require("./jugador.routes");

router.use("/jugador", jugadorRouter);
router.use("/*", (req, res) => res.status(404).json({ error: "Not found" }));

module.exports = router;
