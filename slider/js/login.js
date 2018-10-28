var user = firebase.auth().currentUser;

function login(){
	var email=document.getElementById('email_field').value;
	var password=document.getElementById('password_field').value;
	
		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("Errors: "+errorMessage)
});
		
if (user) {
  		window.open("/welcome.html");
			} else {
  			// No user is signed in.
		}
	
}