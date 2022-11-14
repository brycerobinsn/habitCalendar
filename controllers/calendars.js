const Calendar = require('../models/calendar')

module.exports = {
    index,
    create,
    new: newCalendar,
    show
}

function index(req, res){
    Calendar.find({}, function(err, calendars){
        console.log(`This is calendars title: ${calendars.title}`)
        res.render('calendars/index', { title: 'Calendar', calendars})
    })
}
function show(req, res){
    Calendar.findById(req.params.id)
        .populate('user')
        .exec(function(err, calendars){
            res.render('calendars/show', {title: 'Calendar', calendars})
        })
}
function newCalendar(req, res) {
    res.render('calendars/new')
}
function create(req, res){
    const calendar = new Calendar(req.body)

    console.log(calendar)
    calendar.save(function(err){
        if (err) return res.redirect('/');
        res.redirect(`/calendars/${calendar._id}`)
    })
}