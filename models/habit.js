const mongoose = require('mongoose');
const habits = require('../controllers/habits');
const Schema = mongoose.Schema;

const habitSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    details: String,
    done:{
        type: Boolean,
        default: false
    }, 
    streak: {
        type: Number,
        default: 0
    },
})

module.exports = mongoose.model('Habit', habitSchema)