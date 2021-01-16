const db = require('../config.js');
const {createRestrictions, updateRestriction, viewRestrictions} = require('./Restriction');
const {createEvent, updateEvent, viewEvent, deleteEvent} = require('./Event');
const {createTask, updateTask} = require('./Task');
const {createSTask} = require('./ScheduledTask');

const jwt = require('jsonwebtoken');
var userRef = db.ref().child("users");


function createUser(email, password) {
    const userId = userRef.push().key;
    db.ref('users/' + userId).set({
        email: email,
        password: jwt.sign(password, 'calenJARS'),
        tasks: {},
        events: {},
        restrictions: userId
      }, function(error) {
        if (error) {
          console.log(error);
          return;
        } else {
            createRestrictions(userId);
            return;
        }
      });
      return userId;
  }

function viewUser(userId){
    return userRef.child(userId).on("value", function(snapshot) {
        console.log(snapshot.val());
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
}

function updateUser(userId, newUser){
    var updates = {};
    updates['/'+userId] = newUser;
    return userRef.update(updates)
}

function deleteUser(userId){
    return userRef.child(userId).remove().then(
        console.log("Removed "+userId))
}

module.exports = {createUser, viewUser, updateUser, deleteUser};