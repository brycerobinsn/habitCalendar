const mongoose = require('mongoose');
const calendars = require('../controllers/calendars');
const Schema = mongoose.Schema;

const weekdays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday']
const dt = new Date()
const month = dt.getMonth()
const year = dt.getFullYear()
const firstDayofMonth = new Date(year, month, 1)
const dateString = firstDayofMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
})

const calendarSchema = new Schema (
    {
        title: {
            type: String,
            default: 'Calendar'
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        currentMonth: {
            type: String,
            default: function(){
                const month = ['January','February','March','April','May','June','July','August','September','October','November','December']
                date = new Date()
                return month[date.getMonth()]
            }
        },
        currentDay: {
            type: Number,
            default: function(){
                date = new Date().getDate()
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
        paddingDays: {
            type: Number,
            default: function(){
                const padding = weekdays.indexOf(dateString.split(', ')[0])
                return padding
            }
        },

        habits: {
            type: Schema.Types.ObjectId,
            ref: 'Habit'
        }
        

    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Calendar', calendarSchema)