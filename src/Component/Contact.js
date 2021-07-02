import React from "react";
import "./CSS/Contact.css";
import { useForm } from "react-hook-form";
import Fade from "react-reveal/Fade";
import {Row,Col} from "react-bootstrap";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div id="contact" className="contact">
       <div className="skill-title">
          <Fade top>
            <h2 className="t-color">Contact</h2>
          </Fade>
          <Fade left>
            <span className="bottom-line"></span>
          </Fade>
        </div>
      <div className="form-group">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div>
            <label htmlFor="name" className="contact-input">Name</label>
            <br />
            <input {...register("firstName", { maxLength: 20 })} className="input-field"/>
          </div>
          <div>
            <label htmlFor="email" className="contact-input">Email</label>
            <br />
            <input {...register("email", { pattern: /^[A-Za-z]+$/i })}  className="input-field" />
          </div>
          <div>
            <label htmlFor="message" className="contact-input">Message</label>
              <br />
            <textarea {...register("message")}  className="input-field message"/>
          </div>
          <br />
          <input type="submit" className="contact-button"/>
        </form>
      </div>
    </div>
  );
};

export default Contact;
