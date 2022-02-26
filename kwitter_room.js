
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDOkIzJ7a5bzB9pxBOM1BB8TEhbpXu0u-4",
      authDomain: "kwitter-5e6a8.firebaseapp.com",
      databaseURL: "https://kwitter-5e6a8-default-rtdb.firebaseio.com",
      projectId: "kwitter-5e6a8",
      storageBucket: "kwitter-5e6a8.appspot.com",
      messagingSenderId: "291933260676",
      appId: "1:291933260676:web:dd8535f71f56889bb3abd1"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

     function addRoom(){
           room_name = document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({purpose : "adding a room name"});
           localStorage.setItem("room_name", room_name);
           window.location = "kwitter_page.html";           
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room name -"+ Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+ Room_names+"</div> <hr><hr>";
       document.getElementById("output").innerHTML+=row;

      
      });});}
getData();

function redirectToRoomName(name){

      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout(){

      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "kwitter.html";
}
