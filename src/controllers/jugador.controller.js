const { Jugador } = require("../database/database").models;

module.exports = {
    async guardar(req, res) {
        const data = req.body;
        data.fecha_nacimiento = new Date(data.fecha_nacimiento);
        try {
            const jugadorVO = await Jugador.create(data);
            if (jugadorVO) return res.status(200).json(jugadorVO);
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({ error: "Ha ocurrido un error interno" });
        }
    },
};
