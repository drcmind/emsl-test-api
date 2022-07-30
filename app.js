const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const enginRouter = require("./routers/enginRouter");
app.use(enginRouter);

app.listen(4000);
console.log("L'application marche au port 4000");
