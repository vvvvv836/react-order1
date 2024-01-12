// function sendMail(){
// 	let parms = {
// 		name : document.getElementById("name").value
// 	}
// 	emailjs.send("service_kym0kef","template_n3b83jb",parms),then(alert("email sent"));
// }

$(document).ready(function() {
	$('#myForm').submit(function(e) {
	  e.preventDefault();
	  
	  var name = $('input[name="name"]').val();
	  var email = $('input[name="email"]').val();
	  var message = $('textarea[name="message"]').val();
	  
	  $.ajax({
		type: "GET",
		url: "send_email.php",
		data: {
		  name: name,
		  email: email,
		  message: message
		},
		success: function(response) {
		  $('#response').html(response);
		}
	  });
	});
  });
  