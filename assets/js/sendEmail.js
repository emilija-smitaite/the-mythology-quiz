let feedback = document.getElementById("contact-feedback");

//EmailJS email delivery
function sendMail(event) {
  //Prevent page reload to keep modal active
  event.preventDefault();
  let contactForm = event.target;
  emailjs
    .send("service_vqwsw1i", "template_eruz4r8", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress,
      message: contactForm.projectsummary.value,
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
        feedback.innerHTML = `<p class = "text-success">Form submitted succesfully!</p>`;
        contactForm.reset();
      },
      function (error) {
        console.log("FAILED", error);
        feedback.innerHTML = `<p class = "text-danger">Sorry, there was an error trying to send your message.</p>`;
      }
    );
  return false;
}
