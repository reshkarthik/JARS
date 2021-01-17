const db = require('../config.js');
const {getEvents, getUserTasks} = require('./EventRoutes');
const {createSTask, updateSTask, viewSTask, deleteSTask} = require('../models/ScheduledTask');
const {createTask, updateTask, viewTask, deleteTask} = require('../models/Task');
const {createRestrictions, updateRestriction, viewRestrictions} = require('../models/Restriction');

function greedyEvents(userId, currentDate){
    const userTasks = getUserTasks(userId);
    const userEvents = getEvents(userId);
    userTasks.sort((a, b) => a["deadline"]-b["deadline"]);
    let eventPtr = 0;
    let sTaskId = 0;
    let i = 0;
    const restriction = viewRestriction(userId);
    let currentDay = currentDate.getDay();
    let start = restriction[currentDay]["startTime"];

    for (i = 0; i < userTasks.length; i++){
        while (userTasks[i]["timeLeft"] > 0){
            currentDay = currentDate.getDay();
            let end = userEvents[eventPtr]["startTime"] - 15;
            if (end >= restriction[currentDay]["Lunch"][0] || end <= restriction[currentDay]["Lunch"][1]){
                end = restriction[currentDay]["Lunch"][1] + 15;
            }
            if (end >= restriction[currentDay]["Dinner"][0] || end <= restriction[currentDay]["Dinner"][1]){
                end = restriction[currentDay]["Dinner"][1] + 15;
            }
            if (end >= restriction[currentDay]["endTime"] || userEvents[eventPtr]["startTime"] > currentDate){
                end = restriction[currentDay]["endTime"];
                currentDate += 1;
            }
            eventPtr += 1;
            userTasks[i]["timeLeft"] -= (end-start);
            sTaskId = createSTask(userId, userTasks[i]["id"], userTasks[i]["deadline"], 
                                        userTasks[i]["title"], start, end);
            start = userEvents[eventPtr]["endTime"] + 15;
            if (start >= restriction[currentDay]["Lunch"][0] || start <= restriction[currentDay]["Lunch"][1]){
                start = restriction[currentDay]["Lunch"][1] + 15;
            }
            if (start >= restriction[currentDay]["Dinner"][0] || start <= restriction[currentDay]["Dinner"][1]){
                start = restriction[currentDay]["Dinner"][1] + 15;
            }
            if (start >= restriction[currentDay]["endTime"] || userEvents[eventPtr]["endTime"] + 15 > currentDate){
                currentDate += 1;
                currentDay = currentDate.getDay();
                start = restriction[currentDay]["startTime"];
            }
        }
        let newTask = {};
        newTask["title"] = userTasks[i]["title"];
        newTask["deadline"] = userTasks[i]["deadline"];
        newTask["timeLeft"] = 0;
        newTask["scheduled"] = userTasks[i]["scheduled"];
        updateTask(userTasks[i]["id"], newTask);
    }

}