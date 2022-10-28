// Your web app's Firebase configuration
 var  firebaseConfig = {
  apiKey: "AIzaSyBaky19YO5sErAWxJYu9CPq0pvqsUNqx-c",
  authDomain: "lets-chat-web-app-2c438.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-2c438-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-2c438",
  storageBucket: "lets-chat-web-app-2c438.appspot.com",
  messagingSenderId: "1036750220809",
  appId: "1:1036750220809:web:269ab31044cd9a52a052d8",
  measurementId: "G-3XRSTRR2R2"
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



