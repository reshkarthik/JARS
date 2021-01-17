const db = require('../config.js');
var taskRef = db.ref().child("tasks");
var userRef = db.ref().child("users");


function createTask(userId, title, deadline, timeLeft) {
    const taskId = taskRef.push().key;

    db.ref('tasks/' + taskId).set({
        title: title,
        deadline: deadline,
        timeLeft: timeLeft,
        scheduled: {}
      }, function(error) {
        if (error) {
          console.log(error);
        }
      });
    userRef.child(userId).child("tasks").push(taskId);
    return;
  }

function updateTask(taskId, newTask){
    var updates = {};
    updates['/'+taskId] = newTask;
    return taskRef.update(updates)
}

function viewTask(taskId){
    return taskRef.child(taskId).on("value", function(snapshot) {
        console.log(snapshot.val());
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
}

function deleteTask(userId, taskId){
  var query = userRef.child(userId).child("tasks").orderByKey();
  console.log(query)
  query.once("value").then(function(snapshot) {
    snapshot.forEach(function(childshot){
      var pkey = childshot.key; 
      var chval = childshot.val();
      if(chval == taskId){
          userRef.child(userId).child("tasks").child(pkey).remove();
          return;
      } 
    });
  });
  return taskRef.child(taskId).remove();
}

module.exports = {createTask, updateTask, viewTask, deleteTask};