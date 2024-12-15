// JavaScript code
document.addEventListener('DOMContentLoaded', () => {
  const navbarLinks = document.querySelectorAll('.navbar a');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY;

      // Highlight the active link
      sections.forEach((section, index) => {
          if (
              scrollPos >= section.offsetTop - 80 &&
              scrollPos < section.offsetTop + section.offsetHeight
          ) {
              navbarLinks.forEach((link) => link.classList.remove('active'));
              navbarLinks[index].classList.add('active');
          }
      });
  });
});








// const form= document.querySelector("form");
// const firstname= document.getElementById("firstname");
// const lastname= document.getElementById("lastname");
// const phone= document.getElementById("phone");
// const subject= document.getElementById("subject");
// const message= document.getElementById("message");


// function sendEmail(){
//     const bodyMessage=`First Name :${firstname.value}<br>  Last Name:${lastname.value} <br>  Phone Number :${phone.value} <br>  Email: ${subject.value} <br>  Message: ${message.value} `;
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "sumeramushtaque993@gmail.com",
//         Password : "A4DA6ED8D002C1A7105C1DF22A09B65D619E",
//         To : 'sumeramushtaque993@gmail.com',
//         From : "sumeramushtaque993@gmail.com",
//         Subject : message.value,
//         Body : bodyMessage
//     }).then(
//       message => {

//         if (message == "OK"){
//           Swal.fire({
//             title: "Good job!",
//             text: "email sent!",
//             icon: "success"
//           });
//         } else{
//           alert("yup error occured")
//         }
        
//     });
  
//   }





    
// form.addEventListener("submit",(e)=>{
//         e.preventDefault();
//         sendEmail();
//     });



const form = document.querySelector("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `
        first name: ${firstname.value}<br>
        last name: ${lastname.value}<br>
        phone number: ${phone.value}<br>
        subject: ${subject.value}<br>
        message: ${message.value}
    `;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "sumeramushtaque993@gmail.com",
        Password: "A4DA6ED8D002C1A7105C1DF22A09B65D619E",
        To: "sumeramushtaque993@gmail.com",
        From: "sumeramushtaque993@gmail.com",
        Subject: message.value,
        Body: bodyMessage
    }).then((response) => {
        if (response === "OK") {
            Swal.fire({
                title: "Good job!",
                text: "Email sent successfully!",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Error",
                text: "An error occurred while sending the email.",
                icon: "error"
            });
        }
    }).catch((error) => {
        Swal.fire({
            title: "Error",
            text: `Failed to send email: ${error.message}`,
            icon: "error"
        });
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Basic Validation
    if (
        !firstname.value.trim() ||
        !lastname.value.trim() ||
        !phone.value.trim() ||
        !subject.value.trim() ||
        !message.value.trim()
    ) {
        Swal.fire({
            title: "Validation Error",
            text: "Please fill out all fields before submitting.",
            icon: "warning"
        });
        return;
    }

    sendEmail();
});
