const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ["fitness", "tech", "beauty", "food", "tourism"], // predefined categories
    },
    cover: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        default: 0,
    },
    title: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        default: 0,
    }
},{
    timestamps : true
}
);

module.exports = mongoose.model('Blog', BlogSchema);
