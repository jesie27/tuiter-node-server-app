import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    username: String,
    handle: String,
    time: String,
    comments: Number,
    likes: Number,
    dislikes: Number,
    retuits: Number,
    liked: Boolean,
    disliked: Boolean,
    image: String,
}, {collection: 'tuits'});
export default schema;

