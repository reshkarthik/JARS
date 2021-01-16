const Firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyDl8OLYCdFyKmXmJdp036p7Wkd7-uzre-8",
    authDomain: "jars-df2c7.firebaseapp.com",
    databaseURL: "https://jars-df2c7-default-rtdb.firebaseio.com",
    projectId: "jars-df2c7",
    storageBucket: "jars-df2c7.appspot.com",
    messagingSenderId: "694819000329",
    appId: "1:694819000329:web:d3dc6e51143a3212b468d8",
    measurementId: "G-0G7E0XJ0N7"
  };

const app = Firebase.initializeApp(firebaseConfig);
let db = app.database();
module.exports = db;
