import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

function Contact() {
  const [contactDetails, setcontactDetails] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Validation rules
  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  // Validate form data
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    //name validate
    if (!contactDetails.name) {
      newErrors.name = "Name is Required";
      isValid = false;
    } else if (!nameRegex.test(contactDetails.name)) {
      newErrors.name =
        "Please enter a valid name (only characters are allowed).";
      isValid = false;
    }

    //email validate
    if (!contactDetails.email) {
      newErrors.email = "Email is Required";
      isValid = false;
    } else if (!emailRegex.test(contactDetails.email)) {
      newErrors.email =
        "Please enter a valid email address.";
      isValid = false;
    }

    //phone validate
    if (!contactDetails.phone) {
      newErrors.phone = "Phone Number is Required";
      isValid = false;
    } else if (!phoneRegex.test(contactDetails.phone)) {
      newErrors.phone =
        "Please enter a valid 10-digit phone number (starting with 6, 7, 8, or 9).";
      isValid = false;
    }

    //message validate
    if (!contactDetails.message) {
      newErrors.message = "Please enter your message.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setcontactDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear specific errors when the user types
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", contactDetails);
      // Reset form after submission
      setcontactDetails({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      alert("Message sent successfully!");
    }
  };

  return (
    <>
      {/* contact us  */}
      <section className="cont">
        <contact className="contact_mode">
          <section className="contact_us">
            <form action="">
              <h3>Contact us</h3>
              <p>
                <span>Address:</span> Vaishnavi Tech Park, 3rd & 4th Floor
                <br />
                Sarjapur Main Road, Bellandur
                <br />
                Bengaluru – 560103
              </p>
              <p>
                <span>Phone:</span>{" "}
                <a href="tel://9159552150">+91 9159552150 </a>
              </p>
              <p>
                <span>Email:</span>{" "}
                <a href="mailto:sarathi9155@gmail.com">sararhi9155@gmail.com</a>
              </p>
              <p>
                <span>Website:</span> <a href="#">virtualfinance.com</a>
              </p>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/Vaishnavi+Tech+Park/@12.9184646,77.6684366,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae130df4c8df87:0x687150d80297fb8f!8m2!3d12.9184594!4d77.6710115!16s%2Fg%2F11h7kv_9n4?entry=ttu"
              >
                <i
                  className="fa fa-map-marker"
                  id="location"
                  style={{ fs: "46px" }}
                  ></i>
                  {/* <img src={require("../../assets/location icon.png")}/> */}
                Location
              </a>
            </form>
          </section>

          {/* contact send us a message */}
          <section className="contact_msg">
            <div>
              <h3>Send us a message</h3>
              <div className="container mt-3">
                <form id="contactForm" onSubmit={handleSubmit}>
                  <div>
                    <label>Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Enter name"
                      onChange={handleChange}
                      value={contactDetails.name}
                    />
                    <div className="text-danger">{errors.name}</div>
                  </div>
                  <div className="mb-3 mt-3">
                    <label>Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter email"
                      onChange={handleChange}
                      value={contactDetails.email}
                    />
                    <div className="text-danger">{errors.email}</div>
                  </div>
                  <div className="mb-3">
                    <label>Phone:</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      placeholder="Enter phone"
                      onChange={handleChange}
                      value={contactDetails.phone}
                    />
                    <div className="text-danger">{errors.phone}</div>
                  </div>
                  <div className="mb-3">
                    <label>Message:</label>
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Message"
                      onChange={handleChange}
                      value={contactDetails.message}
                    ></textarea>
                    <div className="text-danger">{errors.message}</div>
                  </div>
                  <button type="submit" className="btn btn-outline-dark">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </contact>
      </section>
    </>
  );
}
export default Contact;
