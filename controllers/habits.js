const habit = require('../models/habit');
const Habit = require('../models/habit')

module.exports = {
    index,
    show,
    new: newHabit,
    create,
    delete: deleteHabit,
    edit,
    update
}
function update(req, res){
    // req.body.id = req.params.id; 
    req.body.done = req.body.done === 'on'
    console.log(`req.body`)
    Habit.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, habit) => {
        console.log(`updated to ${req.body.title}`)
        if(err) return res.redirect('/habits')
        res.redirect('/habits')
    })
}
function edit(req, res){
    Habit.findById(req.params.id)
        .exec(function(err, habit) {
            console.log(habit)
            res.render('habits/edit', {title: habit.title , habit
        })
        
    })
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
}