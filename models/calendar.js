const mongoose = require('mongoose');
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
// const eventSchema = new Schema (
//     {
//         title:{
//             type: String,
//             required: true
//         },
//         details: String,
//         Location: String,
//         startTime:{
//             type: Date,
//             required: true
//         },
//         endTime:{
//             type: Date,
            
//         }         
//     }
// )
// const calendarSchema = new Schema (
//     {
//         title: String,
//         month: Date,
//         day: Date,
//         today: function(){
//             return new Date()
//         }
//     },
//     {
//         timestamps: true
//     }
// )

module.exports = mongoose.model('Habit', habitSchema)