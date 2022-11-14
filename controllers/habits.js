const Habit = require('../models/calendar')

module.exports = {
    index,
    show,
    new: newHabit,
    create,
    delete: deleteHabit
}
function deleteHabit(req, res) {
    Habit.findByIdAndDelete(req.params.id, (err, habit) => {
        if(!err){
            console.log(habit)
            res.redirect('/habits')
        }
    })
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
    Habit.findById(req.params.id)
        .exec(function(err, habit) {
            console.log(habit)
            res.render('habits/show', {title: 'Habit', habit
        })
        
    })
    // res.render('/habits/show', {
    //     habit: Habit.getOne(req.params.id),
    //     habitNum: Habit.getAll().findIndex(habit => habit.id === parseInt(req.params.id)) + 1
}