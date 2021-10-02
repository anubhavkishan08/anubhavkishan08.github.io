var fname = document.getElementById("fname");
var pin = document.getElementById("password");
var mobno = document.getElementById("mobno");
var acno = document.getElementById("acno");
var amt = document.getElementById("amt");

function RegisterUser() {
  window.alert("Are you sure want to do the Transcation????")
  var firebaseRef = firebase.database().ref("Transcation Details");
   
   //var fnames=fname.value;
  // var mobnos=mobno.value;
   //var acnos=acno.value;
   //var pins=pin.value;
   //var amts=amt.value;
     
  
   //firebaseRef.push().set(fnames);
   //firebaseRef.push().set(mobnos);
   //firebaseRef.push().set(acnos);
  // firebaseRef.push().set(pins);
  // firebaseRef.push().set(amts);

    var firebaseRef = firebase.database().ref("Student Details");
   var snames=fname.value;
   var sroll=mobno.value;

    firebaseRef.push().set(snames);
   firebaseRef.push().set(sroll);

  
}