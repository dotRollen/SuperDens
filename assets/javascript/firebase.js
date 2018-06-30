// Initialize Firebase
var config = {
  apiKey: "AIzaSyDmQoOGiftlP84AHYNuIdRbX-6KMtSiedM",
  authDomain: "superdens-6251f.firebaseapp.com",
  databaseURL: "https://superdens-6251f.firebaseio.com",
  projectId: "superdens-6251f",
  storageBucket: "superdens-6251f.appspot.com",
  messagingSenderId: "601074781877"
};

firebase.initializeApp(config);

//Authentication listener if user is logged in or not
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    //when user is logged in
    $("#signInBtn").html(`
      <a id="logout" class="waves-effect waves-light btn" href="#">Signout</a>
    `);
    $("#slide-out").addClass("sidenav-fixed");
    $("header, main, footer").css("padding-left", "150px");
  } else {
    //when user is logged out
    $("main").empty();
    $("#signInBtn").html(`
      <a id="signin" class="pulse waves-effect waves-light btn modal-trigger" href="#modal1" data-value="signin">Signin</a>
    `);
    $("#slide-out").removeClass("sidenav-fixed");
    $("header, main, footer").css("padding-left", "0px");
  }
});

$(document).on("click", "#registerBtn", function() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
    } else {
      $("#modal1").html(`
        <div class="modal-content ">
          <h5>Email</h5>
          <input type="email" placeholder="email" id="email1">
          <h5>password</h5>
          <input type="password" placeholder="password" id="pass1">
          <h5>Hero Name</h5>
          <input type="text" placeholder="Hero Name" id="hero">
          <h5>World Of Birth</h5>
          <input type="text" placeholder="Birth World" id="world">
        </div>
        <div class="modal-fixed-footer">
          <span class="btn waves-effect waves-light" type="submit" name="action" id="submitBtn2">
              <h5>submit</h5>
          </span>
        </div>
      `);
    }
  });
});


$(document).on("click", "#logout", function() {
  firebase.auth().signOut();
});

const app = firebase.app();
const db = firebase.firestore();

//reference database in firefox and collection 
//EVENT TO READ DATA FROM USER 

document.addEventListener("DOMContentLoaded", event => {
  //FIREBASE   

  //GLOBAL VARIABLES 
  const email = document.querySelector("#email1");
  const pass = document.querySelector("#pass1");
  const submitBtn = document.querySelector('#submitBtn');
  const loadButton = document.querySelector('#userLoadBtn');
  const submitBtnNewUser = document.querySelector("#submitBtn2");
  
  $(document).on("click", "#submitBtn", function(event) {
    //Reference DOM Input Values -> Push FireBase
    var textToSave = $("#email").val();
    var textToSavePass = $("#pass").val();

    firebase.auth().signInWithEmailAndPassword(textToSave, textToSavePass).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

    var instance = M.Modal.getInstance($("#modal1"));
    instance.close();
    //Enter Collection Name, and DOC Name to Reference. Can Insert New to Create New on BackEnd
    // const userRef = db.collection('ReturningUser').doc(textToSave);
    // userRef.set({
    //   email: textToSave,
    //   password: textToSavePass
    // }).then(function () {
    //   console.log("status Saved")
    // }).catch(function () {
    //   console.log("hello")
    // });
    $("#email").val("");
    $("#pass").val("");
  });

  //FUNCTION TO RETRIEVE USER SPECIFIC DATA FROM FireBase -> USER INPUT
  // loadButton.addEventListener("click", function () {
  //   const tableName = document.querySelector("#loadUser").value;
  //   const userRef = db.collection('ReturningUser').doc(tableName);

  //   userRef.get().then(function (doc) {
  //     console.log(userRef);
  //     if (doc && doc.exists) {
  //       const myData = doc.data();
  //       const userInfoElement = document.getElementById("userInfoP");
  //       userInfoElement.innerText = "userName " + myData.email;
  //       console.log(myData);
  //       console.log(userInfoElement);
  //     }
  //   })
  // })

  // ---------------------- Create New User FIREBASE Function
  // document.querySelector("#submitBtn2").addEventListener("click", event => {
  $(document).on("click", "#submitBtn2", function(event) {
    const email = document.querySelector("#email1").value;
    const password = document.querySelector("#pass1").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  });
});