const express = require('express');

const {createPost, getPosts } = require('../controllers/post');

const router = express.Router()
const {createPostValidator} = require('../validator/index');

router.get('/', getPosts);
router.post('/post', createPostValidator,createPost);

module.exports = router;