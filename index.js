//import
const express = require("express");
const path = require("path");
const mainRoutes = require("./routes/main-routes");
//setup
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

//midlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use(mainRoutes);

//server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
