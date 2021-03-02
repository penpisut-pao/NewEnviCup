var firebaseConfig = {
    apiKey: "AIzaSyCrw-RMd_2hF6jWJKhPxoeIyF6s23eJirI",
    authDomain: "webapp-593ae.firebaseapp.com",
    databaseURL: "https://webapp-593ae.firebaseio.com",
    projectId: "webapp-593ae",
    storageBucket: "webapp-593ae.appspot.com",
    messagingSenderId: "231677279718",
    appId: "1:231677279718:web:f91485a21b44d2b14e6a27",
    measurementId: "G-S16BSF9CC9"
};

firebase.initializeApp(firebaseConfig);

function saveOnClick(){
    var firebaseRef = firebase.database().ref("User");
    var email = document.getElementById("email");
    var name = document.getElementById("name");
    var pass = document.getElementById("password");
    var search = new URLSearchParams(window.location.search);
    
    firebaseRef.child(name.value).child("name").set(name.value);
    firebaseRef.child(name.value).child("email").set(email.value);
    firebaseRef.child(name.value).child("pass").set(pass.value);
    firebaseRef.child(name.value).child("glass").set(0);

    insertData(name.value,email.value,pass.value);
}

window.onload = function(){
    showData();
}

function showData(){
    var firebaseRef = firebase.database().ref("User");
    var storeRef = firebaseRef.child("dd111").child("glass");
    
    firebaseRef.once("value").then(function(dataSnapshot){
        console.log(dataSnapshot.val());

    });  
   
    storeRef.once("value").then(function(dataSnapshot){
        console.log(dataSnapshot.val());

    });
}

function insertData(name,email,pass){
    var firebaseRef = firebase.database().ref("User");
    firebaseRef.push({
        name:name,
        email:email,
        password:password
        
    });
    console.log("success")
}