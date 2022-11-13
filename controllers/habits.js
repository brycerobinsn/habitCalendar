const Habit = require('../models/calendar')

module.exports = {
    index,
    show,
    new: newHabit,
    create,
    delete: deleteHabit
}
function deleteHabit(req, res) {
    Habit.deleteOne(req.params.id)
    res.redirect('/habits')
}
function create(req, res){
    const habit = new Habit(req.body)
    habit.save(function(err){
        if (err) return res.redirect('/habits/new');
        res.redirect(`/habits`)
    })
    
}
function newHabit(req, res) {
    res.render('habits/new')
}
function index(req, res){
    Habit.find({}, function(err, habits){
        res.render('habits/index', { title: 'All Habits', habits})
    })
}

function show (req, res) {
    res.render('/habits/show', {
        habit: Habit.getOne(req.params.id),
        habitNum: Habit.getAll().findIndex(habit => habit.id === parseInt(req.params.id)) + 1
    })
}