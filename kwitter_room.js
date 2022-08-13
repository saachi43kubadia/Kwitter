var firebaseConfig = {
      apiKey: "AIzaSyBVuk8ipXtwTUkvK78zxrOBi_RkouVXCBE",
      authDomain: "kwitter-e6e5b.firebaseapp.com",
      databaseURL: "https://kwitter-e6e5b-default-rtdb.firebaseio.com",
      projectId: "kwitter-e6e5b",
      storageBucket: "kwitter-e6e5b.appspot.com",
      messagingSenderId: "256123368993",
      appId: "1:256123368993:web:34be619296d6efd9675560",
      measurementId: "G-G8DJG91SK0"
    };
    
    firebase.initializeApp(firebaseConfig);
    
    var username=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+username+" !";

    function addroom(){
     var roomname=document.getElementById("input").value;   
     localStorage.setItem("roomname", roomname);
     firebase.database().ref("/").child(roomname).update({
      purpose:"adding room name"
     });
}
  
function getData()
 {firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) 
      {childKey  = childSnapshot.key;
      Room_names = childKey;
      row="<div class='room_name' id=" + Room_names+" onclick='redirect(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+=row;

      });});}

getData();

function redirect(name){
    localStorage.setItem("roomname", name);
    window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("roomname");
      localStorage.removeItem("user_name");
      window.location="index.html";
}

