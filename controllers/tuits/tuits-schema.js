import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: { type: String, default: '' },
    username: { type: String, default: 'Blahaj' },
    handle: {
        type: String,
        default: function () {
            return `@${this.username}`;
        },
    },
    image: { type: String, default: 'blahaj-face.jpg' },
    topic: { type: String, default: 'Generic' },
    time: { type: String, default: '0m' },
    liked: { type: Boolean, default: false },
    disliked: { type: Boolean, default: false },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    replies: { type: Number, default: 0 },
    retuits: { type: Number, default: 0 },
}, { collection: 'tuits' });
export default schema;