require("./database/database");
const express = require("express");
const app = express();
const router = require("./routes/index.routes");

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.set("port", process.env.PORT || 4001);

app.use(router);

app.listen(app.get("port"), () => {
	console.log(`listen on port ${app.get("port")}`);
});
