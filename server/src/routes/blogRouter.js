const express = require('express')
const { createBlog, getBlog, updateBlog, deleteBlog } = require('../controllers/blogControllers')
const blogRouter = express.Router()

blogRouter.post('/', createBlog);
blogRouter.get('/', getBlog);
blogRouter.put('/:id', updateBlog);
blogRouter.delete('/:id', deleteBlog);

module.exports = {blogRouter};