import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>

        <p className="contact-text">
          Feel free to reach out for collaborations, internships, or projects.
        </p>

       <a
  href="mailto:chetnasulaniya07@gmail.com?subject=Portfolio Contact&body=Hello Chetna,"
  className="email-button"
>
  Send Me an Email
</a>

      </div>
    </section>
  );
}

export default Contact;
