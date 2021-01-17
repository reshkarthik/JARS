const db = require('../config.js');
const userRef = db.ref().child("users");
const eventRef = db.ref().child("events");
const {viewEvent} = require('../models/Event');
const {viewTask} = require('../models/Task');

async function getUserEvents(userId){
    var allEvents = [];
    const allattribs = userRef.child(userId).orderByKey();
    await allattribs.once("value", async function(snapshot) {
    await snapshot.forEach(function(child) {
      if (child.key == "events"){
        const eventObjs = child.val();
        Object.keys(eventObjs).forEach(id => {
            allEvents.push(eventObjs[id]);
        });
    }});
  });
  return await allEvents;
}

async function getUserTasks(userId){
    var allTasks = [];
    const allattribs = userRef.child(userId).orderByKey();
    await allattribs.once("value", async function(snapshot) {
    await snapshot.forEach(function(child) {
      if (child.key == "tasks"){
        const taskId = child.val();
        Object.keys(taskId).forEach(id => {
            allTasks.push(eventObjs[id]);
        });
    }});
  });
  var userTasks = [];
  let i;
    for (i = 0; i < allTasks.length; i++){
        const taskObj = viewTask(allTasks[i]);
        userTasks.push(taskObj);
    }
  return userTasks;
}

async function getEvents(userId){
    var userEvents = await getUserEvents(userId);
    const allEvents = [];
    let i;
    for (i = 0; i < userEvents.length; i++){
        const eventObj = viewEvent(userEvents[i]);
        allEvents.push(eventObj);
    }
    return allEvents;
}


module.exports = {getEvents, getUserTasks};