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
    $("#signOutBtn").html(`
      <a id="logout" class="waves-effect waves-light btn teal darken-3" href="#">Signout</a>
    `);
    $("#signInBtn").html(`

    `)
    $("#slide-out").addClass("sidenav-fixed");
    $("header, main, footer").css("padding-left", "150px");

    $("#user-name").text(user.displayName);
    $("#user-email").text(user.email);
  } else {
    //when user is logged out
    $("#signInBtn").html(`
      <a id="signin" class="pulse waves-effect waves-light btn modal-trigger teal darken-3" href="#modal1" data-value="signin">Signin</a>
    `);
    $("#signOutBtn").html('');
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
          <h4>Registration</h4>
          <div class="input-field col s12">
            <input type="email" id="email1" class="white-text autocomplete" required>
            <label for="autocomplete-input">Email</label>
          </div>
          <div class="input-field col s12">
            <input type="password" id="pass1" class="white-text autocomplete" required>
            <label for="autocomplete-input">Password</label>
          </div>
          <a href="#!" class="left btn waves-effect waves-light" id="submitBtn2">Submit</a>
          <a href="#!" class="modal-close waves-effect waves-green btn-flat white-text">Close</a>
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
        
    var user = firebase.auth().currentUser;
    console.log(user);
    
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

    var instance = M.Modal.getInstance($("#modal1"));
    instance.close();
  });
});

$("")