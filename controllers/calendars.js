const Calendar = require('../models/calendar')

module.exports = {
    index
}

function index(req, res){
    Calendar.find({}, function(err, calendars){
        res.render('calendars/index', { title: 'Calendar', calendars})
    })
}