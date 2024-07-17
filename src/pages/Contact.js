import React, { useState } from "react";
import "./Contact.css";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function changeHandler(event) {
    setformdata((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (
      formdata.name !== "" &&
      formdata.email !== "" &&
      formdata.subject !== "" &&
      formdata.message !== ""
    ) {
      toast.success("Thanks for Contacting");

      console.log(formdata);
      // Reset the form data to empty values
      setformdata({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      toast.error("Field Empty");
    }
  }

  return (
    <div className="flex justify-center items-center mt-28">
      <div className="form-card1">
        <div className="form-card2">
          <form className="form" onSubmit={submitHandler}>
            <p className="form-heading">Get In Touch</p>

            <div className="form-field">
              <input
                required=""
                placeholder="Name"
                className="input-field"
                type="text"
                name="name"
                onChange={changeHandler}
                value={formdata.name}
              />
            </div>

            <div className="form-field">
              <input
                required=""
                placeholder="Email"
                className="input-field"
                type="email"
                name="email"
                value={formdata.email}
                onChange={changeHandler}
              />
            </div>

            <div className="form-field">
              <input
                required=""
                placeholder="Subject"
                className="input-field"
                type="text"
                name="subject"
                value={formdata.subject}
                onChange={changeHandler}
              />
            </div>

            <div className="form-field">
              <textarea
                required=""
                placeholder="Message"
                cols="30"
                rows="3"
                className="input-field"
                name="message"
                value={formdata.message}
                onChange={changeHandler}
              ></textarea>
            </div>

            <button className="sendMessage-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
