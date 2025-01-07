const express = require("express");
const router = express.Router();
const postController = require("./controllers/postController");

router.get("/posts", postController.index);

router.get("/posts/:id", postController.show);

router.delete("/posts/:id", postController.destroy);

//Avvio del server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server avviato sulla porta ${PORT}`);
});

module.exports = router;
