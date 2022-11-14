const mongoose = require('mongoose');
const calendars = require('../controllers/calendars');
const Schema = mongoose.Schema;

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
const calendarSchema = new Schema (
    {
        title: String,
        month: Date,
        day: Date,
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Calendar', calendarSchema)