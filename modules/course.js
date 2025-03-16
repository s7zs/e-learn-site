const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 100
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 20
    },
    duration: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
        }
},
{
    timestamps: true
});



module.exports = mongoose.model('Course', courseSchema);