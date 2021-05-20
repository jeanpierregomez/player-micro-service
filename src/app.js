const express = require("express");
const app = express();

app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.set("port", process.env.PORT);

app.listen(app.get("port"), () => {
	console.log(`listen on port ${app.get("port")}`);
});
