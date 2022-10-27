// Your web app's Firebase configuration
var  firebaseConfig = {
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

    
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start
          console.log("Room Name - " + Room_names);
          row = "<div class= 'room_name' id="+Room_names+ " onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
          document.getElementById("output").innerHTML += row;
          console.log("First Errror");

    //End code
    });});}
getData();


function addRoom()
{
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "chat_page.html";
}

function redirectToRoomName(name)
{
    console.log("Second Error");
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "chat_page.html";
}


function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}



