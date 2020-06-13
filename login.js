// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Supriya" && password == "Dattani"){
window.location = "Home.html"; // Redirecting to other page.
return false;
}
else{
swal("The username is something which belongs to you, but other people use it more than you do... but what is the password?",'','warning');
}
}