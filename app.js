const express = require("express");
const router = express.Router();
const postController = require("./controllers/postController");

router.get("/posts", postController.getAllPosts);

router.get("/posts/:id", postController.getPostById);

router.delete("/posts/:id", postController.deletePostById);

//Avvio del server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server avviato sulla porta ${PORT}`);
});

module.exports = router;
