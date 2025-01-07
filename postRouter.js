const express = require('express');
const router = express.Router(); 
const postController = require('/controllers/postController.js');

router.get("/posts", postController.index);

router.get("/posts/:id", postController.show);

router.delete("/posts/:id", postController.destroy);

module.exports = router;