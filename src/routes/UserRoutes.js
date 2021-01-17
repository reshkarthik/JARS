const db = require('../config.js');
var userRef = db.ref().child("users");

async function login(email, password){
    try {
        let count = 0;
        let foundUser;
        await userRef.on('value', (snapshot) => {
            const data = snapshot.val();
            const allUsers = Object.keys(data).forEach(id => {
                var query = userRef.child(id).orderByKey();
                query.once("value").then(function(snapshot) {
                    snapshot.forEach(function(childshot){
                      var pkey = childshot.key; 
                      if (pkey == "email"){
                        const testEmail = childshot.val();
                        if (testEmail == email){
                            count += 1;
                        }
                      }
                      else if (pkey == "password"){
                        const testPassword = childshot.val();
                        if (testPassword == password + 'calenJARS'){
                            count += 1;
                            foundUser = id;
                        }
                      }
                    });
                });
              });
          });
          if (count == 2){
              console.log(foundUser)
              return foundUser;
        }
          else{
              return -1;
          }
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = {login};