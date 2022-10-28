// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE



var firebaseConfig = {
    apiKey: "AIzaSyBaky19YO5sErAWxJYu9CPq0pvqsUNqx-c",
    authDomain: "lets-chat-web-app-2c438.firebaseapp.com",
    projectId: "lets-chat-web-app-2c438",
    storageBucket: "lets-chat-web-app-2c438.appspot.com",
    messagingSenderId: "1036750220809",
    appId: "1:1036750220809:web:269ab31044cd9a52a052d8",
    measurementId: "G-3XRSTRR2R2"
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */

    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}



