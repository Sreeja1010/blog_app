const Blog = require("../models/blogsModel")

exports.createBlog = async (req, res) => {
    try{
        const { author, body, category, cover, likes, title, views } = req.body;
        const newBlog = await Blog.create({
            author,
            body,
            category,
            cover,
            likes,
            title,
            views
        })
        newBlog.save();
        return res.status(201).json({
            msg : 'Blog created successfully.',
            newBlog
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            msg : "Internal server error."
        })
    }
}

exports.getBlog = async (req, res) => {
    try{
        const getBlog = await Blog.find()
        return res.status(200).json({
            msg : 'Successful.',
            getBlog
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            msg : "Internal server error."
        })
    }
}

exports.updateBlog = async (req, res) => {
    try{
        const { id } = req.params;
        const { author, body, category, cover, likes, title, views } = req.body;
        await Blog.findByIdAndUpdate(id, {author, body, category, cover, likes, title, views}, { new : true });
        return res.status(200).json({
            msg : 'Updated Successfully.',
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            msg : "Internal server error."
        })
    }
}

exports.deleteBlog = async (req, res) => {
    try{
        const { id } = req.params;
        await Blog.findByIdAndDelete(id);
        return res.status(200).json({
            msg : "Deleted Successfully.",
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            msg : "Internal server error."
        })
    }
}

exports.likeBlog = async (req, res) => {
    try{
        const { id } = req.params;
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ msg: 'Blog not found.' });
        }

        blog.likes += 1;

        await blog.save();
        return res.status(200).json({
            msg : 'Updated Successfully.'
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            msg : "Internal server error."
        })
    }
}

module.exports = exports;