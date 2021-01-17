const db = require('../config.js');
const userRef = db.ref().child("users");
const eventRef = db.ref().child("events");
const {viewEvent} = require('../models/Event');

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

async function getEventsForDay(userId, date){
    var userEvents = await getUserEvents(userId);
    const allEvents = [];
    let i;
    for (i = 0; i < userEvents.length; i++){
        const eventObj = viewEvent(userEvents[i]);
        if (eventObj["startTime"] > date){
            allEvents.push(eventObj);
        }
    }
    return allEvents;
}


module.exports = {getEventsForDay};