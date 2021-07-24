var firebaseConfig = {
    apiKey: "AIzaSyA5xepbCzcLjDxwAojWyij31gWKgfxZVAs",
    authDomain: "project-94-ebd6c.firebaseapp.com",
    projectId: "project-94-ebd6c",
    storageBucket: "project-94-ebd6c.appspot.com",
    messagingSenderId: "135948924575",
    appId: "1:135948924575:web:7282cd7619d07422b814aa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.removeItem("user_name");
  room_name=localStorage.removeItem("room_name");
  function send(){
      message=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:message,
          like:0,
      });
      document.getElementById("message").value="";
    }
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;
    } });  }); }
    getData();