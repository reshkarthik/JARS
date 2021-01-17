const { event } = require('react-native-reanimated');
const db = require('../config.js');
var eventRef = db.ref().child("events");
var userRef = db.ref().child("users");


function createEvent(userId, eventId, title, startTime, endTime, scheduled, reoccurring) {
    if (eventId == 0){
        eventId = eventRef.push().key
    }

    db.ref('events/' + eventId).set({
        title: title,
        startTime: startTime,
        endTime: endTime,
        scheduled: scheduled,
        reoccurring: reoccurring
      }, function(error) {
        if (error) {
          console.log(error);
        }
      });
    userRef.child(userId).child("events").push(eventId);
    return;
  }

function updateEvent(taskId, newTask){
    var updates = {};
    updates['/'+taskId] = newTask;
    return taskRef.update(updates)
}

function viewEvent(eventId){
  let event;
  eventRef.child(eventId).on("value", function(snapshot) {
    event = snapshot.val();
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  return event;
}

function deleteEvent(userId, eventId){
    var query = userRef.child(userId).child("events").orderByKey();
    console.log(query)
    query.once("value").then(function(snapshot) {
      snapshot.forEach(function(childshot){
        var pkey = childshot.key; 
        var chval = childshot.val();
        if(chval == eventId){
            userRef.child(userId).child("events").child(pkey).remove();
            return;
        } 
      });
    });
    return eventRef.child(eventId).remove();
}

module.exports = {createEvent, updateEvent, viewEvent, deleteEvent};