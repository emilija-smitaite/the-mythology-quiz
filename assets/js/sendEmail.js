function sendMail(event){
 console.log("hi");
    //Prevent page reload to keep modal active
    event.preventDefault();
let contactForm = event.target;
    emailjs.send('service_vqwsw1i', 'template_eruz4r8', {
        'from_name': contactForm.name.value,
        'from_email': contactForm.emailaddress,
        'message': contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            contactForm.reset();
        }, 
        function(error) {
            console.log("FAILED", error);
        });
        return false;
}