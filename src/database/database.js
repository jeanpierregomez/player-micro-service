const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("player-db", "root", "", {
	host: "localhost",
	dialect: "mysql",
	logging: false,
});

exports.sequelize = sequelize;

(async () => {
	await sequelize.sync();
	console.log("database connected");
})();

exports.models = {};
