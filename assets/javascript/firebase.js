  // Initialize Firebase


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


  //reference database in firefox and collection 

  //EVENT TO READ DATA FROM USER 
  document.addEventListener("DOMContentLoaded", event => {

    //FIREBASE   
    const app = firebase.app();
    const db = firebase.firestore();

    //TESTING APP COMMUNCATION 
    if (console.log(app) !== "undefined") {
      console.log("SUCCESS FIREBASE LOADED!!!!!!!!!!!!")
    }

    //GLOBAL VARIABLES 
    const email = document.querySelector("#email");
    const pass = document.querySelector("#pass");
    const submitBtn = document.querySelector('#submitBtn');
    const loadButton = document.querySelector('#userLoadBtn');
    const submitBtnNewUser = document.querySelector("#submitBtn2");


    // CLICK EVENT WHERE USER INPUT CAN BE PUSHED TO FIREBASE
    submitBtn.addEventListener("click", function () {
      //Reference DOM Input Values -> Push FireBase
      const textToSave = email.value;
      const textToSavePass = pass.value
      //Enter Collection Name, and DOC Name to Reference. Can Insert New to Create New on BackEnd
      const userRef = db.collection('ReturningUser').doc(textToSave);
      console.log(textToSave);
      userRef.set({
        email: textToSave,
        password: textToSavePass
      }).then(function () {
        console.log("status Saved")
      }).catch(function () {
        console.log("hello")
      });
    })


    //FUNCTION TO RETRIEVE USER SPECIFIC DATA FROM FireBase -> USER INPUT
    loadButton.addEventListener("click", function () {

      const tableName = document.querySelector("#loadUser").value;
      const userRef = db.collection('ReturningUser').doc(tableName);
      userRef.get().then(function (doc) {

        console.log(userRef);

        if (doc && doc.exists) {
          const myData = doc.data();
          console.log(myData);
        }
      })
    })

    // ---------------------- Create New User FIREBASE Function
    submitBtnNewUser.addEventListener("click", event => {
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


  $(document).ready(function () {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });