const express = require('express')
const { createBlog, getBlog, updateBlog, deleteBlog, likeBlog } = require('../controllers/blogControllers')
const blogRouter = express.Router()

blogRouter.post('/', createBlog);
blogRouter.get('/', getBlog);
blogRouter.put('/:id', updateBlog);
blogRouter.delete('/:id', deleteBlog);
blogRouter.patch('/:id', likeBlog);

module.exports = {blogRouter};