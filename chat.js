// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE



var firebaseConfig = {
    apiKey: "AIzaSyDcnhGRJIwqCAPUGeh4mcNE0n0IypYIO_c",
    authDomain: "c-100-85793.firebaseapp.com",
    databaseURL: "https://c-100-85793-default-rtdb.firebaseio.com",
    projectId: "c-100-85793",
    storageBucket: "c-100-85793.appspot.com",
    messagingSenderId: "109717993965",
    appId: "1:109717993965:web:852caca843be37658d8fe4"
  };
  
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



