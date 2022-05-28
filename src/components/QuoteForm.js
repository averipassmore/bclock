import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com';
import Footer from "./Footer";
import TopBar from "./TopBar";

const QuoteForm = () => {
  const [label, setLabel] = useState('Please describe in detail your request');

  const form = useRef();
  let navigate = useNavigate();


  const sendEmail = async (e) => {
    e.preventDefault();
    let isComplete = true;
    for (let i = 0; i < form.current.length - 1; i++) {
      if (form.current[i].value === "") {
        document.getElementsByName(`${form.current[i].name}`)[0].style.border = "1px red solid";
        isComplete=false;
      } else {
        document.getElementsByName(`${form.current[i].name}`)[0].style.border = "none";
      }
    }

    if(!isComplete) {
      alert("Please fill out all fields")
      .then( () => navigate('/'))
      return;
    }

    if(!window.confirm("Please confirm request")) return;

    // works just dont want to use all of the emails
    emailjs.sendForm('service_vxo5ko4', 'template_bnbzl4f', form.current, 'Um-6jVm3sb72fybJ3')
      .then((result) => {
          console.log(result.text);
          alert('Your request was successfully submitted');
      }, (error) => {
          console.log(error.text);
          alert("Your request failed... Please try again", error)
          return;
      });
    navigate('/');
  };

  const input = (e) => {
    console.log(e.target.value);
    if (e.target.value === "guns") {
      setLabel("Please include the brand, model, year (if available), and a description of your request")
    } else if (e.target.value === "automotive") {
      setLabel("Please include the make, model, year, and a description of your request")
    } else {
      setLabel('Please leave a description of your request')
    }

  }
  return (
    <div>
      <TopBar />
      <div className="Quote-form-page">
      <div className="Wrapper-div"></div>
      <div className="Quote-form-background">
        <h1 className="Quote-form-title">How can we help?</h1>
        <form ref={form} onSubmit={sendEmail} className="Quote-form">
          <label htmlFor="user_name" >Name</label>
          <input type="text" name="user_name" placeholder="First Last"/>
          <label>Email</label>
          <input type="text" name="user_email" placeholder="example@email.com"/>
          <label>Phone</label>
          <input type="text" name="user_phone" placeholder="123-456-7890"/>
          <label htmlFor="typeOfService">Type of Service</label>
          <select id="typeOfService" name="type_of_service" onChange={input}>
            <option value={'automotive'}>automotive</option>
            <option value={'residential'}>residential</option>
            <option value={'commercial'}>commercial</option>
            <option value={'guns'}>arms</option>
          </select>
          <label>{label}</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
      <div className="Quote-footer">
         <Footer />
      </div>
    </div>
    </div>
    
  );
}

export default QuoteForm;