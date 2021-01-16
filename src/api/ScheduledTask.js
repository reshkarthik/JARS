const {createEvent} = require('./Event');

const db = require('../config.js');
var taskRef = db.ref().child("tasks");
var eventRef = db.ref().child("events");
var scheduledRef = db.ref().child("scheduled");

function createSTask(userId, taskId, deadline, title, startTime, endTime) {
    const sTaskId = scheduledRef.push().key;

    db.ref('scheduled/' + sTaskId).set({
        title: title,
        startTime: startTime,
        endTime: endTime,
        deadline: deadline,
        taskId: taskId
      }, function(error) {
        if (error) {
          console.log(error);
        }
      });
    
    taskRef.child(taskId).child("scheduled").push(sTaskId);
    createEvent(userId, sTaskId, title, startTime, endTime, true, "never");
    return;
  }

function updateSTask(sTaskId, newTask){
    var updates = {};
    updates['/'+sTaskId] = newTask;
    return scheduledRef.update(updates)
}

function viewSTask(sTaskId){
    return scheduledRef.child(sTaskId).on("value", function(snapshot) {
        console.log(snapshot.val());
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
}

function deleteTask(userId, sTaskId){
  var query = userRef.child(userId).child("events").orderByKey();
  query.once("value").then(function(snapshot) {
    snapshot.forEach(function(childshot){
      var pkey = childshot.key; 
      var chval = childshot.val();
      if(chval == sTaskId){
          userRef.child(userId).child("events").child(pkey).remove();
          return;
      } 
    });
  });
  eventRef.child(sTaskId).remove();
  const taskId = scheduledRef.child(sTaskId).value("taskId");
  var query = taskRef.child(taskId).orderByKey();
  query.once("value").then(function(snapshot) {
    snapshot.forEach(function(childshot){
      var pkey = childshot.key; 
      var chval = childshot.val();
      if(chval == staskId){
          taskRef.child(taskId).child("scheduled").child(pkey).remove();
          return;
      } 
    });
  });
  return scheduledRef.child(sTaskId).remove();
}

module.exports = {createSTask, updateSTask, viewSTask};