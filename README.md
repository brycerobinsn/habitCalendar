# Habit Tracker Calendar
- The goal of this app is to create a simple calendar with a habit tracker
- The habits should auto populate every day and be clickable to complete
- Completing a habit multiple days in a row should result in a streak
- Clicking a habit in the Habit List menu should provide more details
- Calendar should be able to add one off events as well
- clicking on the event in the calendar should provide more details
## Trello Board
[TrelloBoard](https://trello.com/b/0XVRL4xe/habit-calendar)
## ERD
![habitCalendarERD](/public/images/habitCalendarERD.png)
## Wireframe
![HabitWireFrame](/public/images/fullWireframe.png)
![newHabitFrame](/public/images/newHabit.png)
![newEventFrame](/public/images/newEvent.png)
## Pseudocode 
```js
const day = new Date()
const habitList = []

function addHabit(){
    // pop up , fill in habit details, appear on calendar for current day
}
function addEvent(){
    // pop up fill in event details, appear on calendar for date of event
}
function populateCalendar(){
    // add day of week and day to each square of calendar
    // add habits and events to correct square
}

```