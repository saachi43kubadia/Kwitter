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
    
    function send(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(room.name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

name1=message_data['message'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id="+ firebase_message_id+" value="+ like +" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like"+ like +"</span></button><hr>";

row= name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();


function updateLike(message_id) {
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes= Number(likes);

      firebase.database().ref(room_name).child(message_id).update({
            like: update_likes
      });


      function logout(){
            localStorage.removeItem("roomname");
            localStorage.removeItem("user_name");
            window.location="index.html";
      }
      
}