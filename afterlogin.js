// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

var fname = document.getElementById("fname");
var lname= document.getElementById("lname");
var email = document.getElementById("email");
var pwd = document.getElementById("password");
var age = document.getElementById("age");
var gender = document.getElementById("gender");
var mobno = document.getElementById("mobno");
var acno = document.getElementById("acno");
var pin = document.getElementById("pin");

function RegisterUser() {
 /* var firebaseRef = firebase.database().ref("Users");
   
   var fnames=fname.value;
   var lnames=lname.value;
   var emails=email.value;
   var pwds=pwd.value;
   var ages=age.value;
   var genders=gender.value;
   var mobnos=mobno.value;
   var acnos=acno.value;
   var pins=pin.value;

   firebaseRef.push().set(fnames);
   firebaseRef.push().set(lnames);
  firebaseRef.push().set(emails);
  firebaseRef.push().set(pwds);
  firebaseRef.push().set(ages);
   firebaseRef.push().set(genders);
    firebaseRef.push().set(mobnos);
     firebaseRef.push().set(acnos);
      firebaseRef.push().set(pins);




  //firebaseRef.push().set(names);*/
  window.alert("Suceed...")
}

