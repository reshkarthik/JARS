const {createEvent} = require('./Event');

const db = require('../config.js');
var taskRef = db.ref().child("tasks");
var eventRef = db.ref().child("events");
var scheduledRef = db.ref().child("scheduled");
var userRef = db.ref().child("users");


function createSTask(userId, taskId, deadline, title, startTime, endTime) {
    const sTaskId = scheduledRef.push().key;
    console.log("task id "+taskId)
    console.log("STask Id "+sTaskId);
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
    return sTaskId;
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

async function deleteSTask(userId, sTaskId){
  try {
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
  const allattribs = scheduledRef.child(sTaskId).orderByKey();
  allattribs.once("value", function(snapshot) {
    snapshot.forEach(function(child) {
      if (child.key == "taskId"){
        console.log(child.key+": "+child.val());
        const taskId = child.val();
        query = taskRef.child(taskId).orderByKey();
        query.once("value").then(function(snapshot) {
          snapshot.forEach(function(childshot){
            var pkey = childshot.key; 
            if (pkey == "scheduled"){
              const scheduled = childshot.val();
              Object.keys(scheduled).forEach(id => {
                if (scheduled[id] == sTaskId){
                  taskRef.child(taskId).child("scheduled").child(id).remove();
                }
              });
            }
          });
      });}
    });
  });
  scheduledRef.child(sTaskId).remove();
  
  return;
  } catch (error) {
    console.log(error);
    return;
  }
  
}

module.exports = {createSTask, updateSTask, viewSTask, deleteSTask};