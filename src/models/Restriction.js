const db = require('../config.js');
var restrictionRef = db.ref().child("restrictions");

function createRestrictions(userId) {
    db.ref('restrictions/' + userId).set({
        Monday: {
            Before: new Date().toISOString(),
            After: new Date().toISOString(),
            Lunch: [new Date().toISOString(),new Date().toISOString()], 
            Dinner: [new Date().toISOString(), new Date().toISOString()],
            Break: 0
        },
        Tuesday: {
            Before: new Date().toISOString(),
            After: new Date().toISOString(),
            Lunch: [new Date().toISOString(),new Date().toISOString()], 
            Dinner: [new Date().toISOString(), new Date().toISOString()],
            Break: 0
        },
        Wednesday: {
            Before: new Date().toISOString(),
            After: new Date().toISOString(),
            Lunch: [new Date().toISOString(),new Date().toISOString()], 
            Dinner: [new Date().toISOString(), new Date().toISOString()],
            Break: 0
        },
        Thursday: {
            Before: new Date().toISOString(),
            After: new Date().toISOString(),
            Lunch: [new Date().toISOString(),new Date().toISOString()], 
            Dinner: [new Date().toISOString(), new Date().toISOString()],
            Break: 0
        },
        Friday: {
            Before: new Date().toISOString(),
            After: new Date().toISOString(),
            Lunch: [new Date().toISOString(),new Date().toISOString()], 
            Dinner: [new Date().toISOString(), new Date().toISOString()],
            Break: 0
        },
        Saturday: {
            Before: new Date().toISOString(),
            After: new Date().toISOString(),
            Lunch: [new Date().toISOString(),new Date().toISOString()], 
            Dinner: [new Date().toISOString(), new Date().toISOString()],
            Break: 0
        },
        Sunday: {
            Before: new Date().toISOString(),
            After: new Date().toISOString(),
            Lunch: [new Date().toISOString(),new Date().toISOString()], 
            Dinner: [new Date().toISOString(), new Date().toISOString()],
            Break: 0
        }
      }, function(error) {
        if (error) {
          console.log(error);
          return;
        } else {
          return;
        }
      });
      return;
  }

function updateRestriction(userId, newRestrictions){
    var updates = {};
    updates['/'+userId] = newRestrictions;
    return restrictionRef.update(updates)
}

function viewRestrictions(restrictionId){
    return restrictionRef.child(restrictionId).on("value", function(snapshot) {
        console.log(snapshot.val());
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
}

module.exports = {createRestrictions, updateRestriction, viewRestrictions};