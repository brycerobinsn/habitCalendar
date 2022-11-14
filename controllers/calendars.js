const Calendar = require('../models/calendar')

module.exports = {
    index
}

function index(req, res){
    Calendar.find({}, function(err, calendars){
        res.render('calendars/index', { title: 'Calendar', calendars})
    })
}
function create(req, res){
    const calendar = new Calendar(req.body)
    calendar.save(function(err){
        if (err) return res.redirect('/');
        res.redirect('/calendars')
    })
}