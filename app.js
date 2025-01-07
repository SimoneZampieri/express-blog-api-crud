const express = require('express');
const router express.Router();
const postController = requuire('./controllers/postController')

router.get('/posts', postController.getAllPosts);

router.get('/posts/:id', postController.getPostById);

router.delete('/posts/:id', postController.deletePostById);

module.exports = router;