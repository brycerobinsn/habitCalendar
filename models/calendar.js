const mongoose = require('mongoose');
const calendars = require('../controllers/calendars');
const Schema = mongoose.Schema;

const weekdays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday']
const dt = new Date()
const day = dt.getDay()
const month = dt.getMonth()
const year = dt.getFullYear()
const firstDayofMonth = new Date(year, month, 1)
const dateString = firstDayofMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
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
const calendarSchema = new Schema (
    {
        title: String,
        currentMonth: {
            type: Date,
            default: function(){
                date = new Date().getMonth()
                return date
            }
        },
        currentDay: {
            type: Date,
            default: function(){
                date = new Date().getDay()
                return date
            }

        },
        daysInMonth: {
            type: Number,
            default: function(){
                const monthDays = new Date(year, month + 1, 0).getDate()
                return monthDays
            }
        },
        dateString: {
            
        }

    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Calendar', calendarSchema)