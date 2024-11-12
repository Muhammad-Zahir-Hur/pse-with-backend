
//Sending the message of the "contact us form"
(function () {
	emailjs.init({
		publicKey: "vYftS1JZlIYrBfAvu",
	});
})();

function sendMessage() {
	var params = {
		from_name: document.getElementById("name").value,
		email_id: document.getElementById("email").value,
		message: document.getElementById("message").value,
	};
	console.log(params);

	emailjs
		.send("service_8vi6s2f", "template_omf0v3c", params)
		.then((response) => {
			alert("Message Sent Successfully");
			document.getElementById("name").value = "";
			document.getElementById("email").value = "";
			document.getElementById("message").value = "";
		})
		.catch((error) => {
			alert("An error occured, while sending the message");
		});
}

contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
	e.preventDefault();
	sendMessage();
});
