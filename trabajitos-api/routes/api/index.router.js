const express = require('express');
const router = express.Router();


//importar los enrutadores

 const postRouter = require("./post.router");

//definir las rutas
router.use("/post", postRouter);


module.exports = router;