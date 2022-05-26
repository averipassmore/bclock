import React, {useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
// import emailjs from 'emailjs-com';

const QuoteForm = () => {
  const [label, setLabel] = useState('Please describe in detail your request');

  const form = useRef();
  let navigate = useNavigate();

  const sendEmail = async (e) => {
    e.preventDefault();

    // works just dont want to use all of the emails
    // emailjs.sendForm('service_vxo5ko4', 'template_bnbzl4f', form.current, 'Um-6jVm3sb72fybJ3')
    //   .then((result) => {
    //       console.log(result.text);
    //       alert('Your request was successfully submitted');
    //   }, (error) => {
    //       console.log(error.text);
    //       alert("Your request failed...", error)
    //   });
    navigate('/');
  };

  const input = (e) => {
    console.log(e.target.value);
    if (e.target.value === "guns") {
      setLabel("Please include the brand, model, year (if available), and a description of your request")
    } else if (e.target.value === "automotive") {
      setLabel("Please include the make, model, year, and a description of your request")
    } else {
      setLabel('Please describe in detail your request')
    }

  }
  return (
    <div>
      <div className="Wrapper-div"></div>
      <div className="Quote-form-background">
        <h1 className="Quote-form-title">How can we help?</h1>
        <form ref={form} onSubmit={sendEmail} className="Quote-form">
          <label for="user_name">Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          {/* <input type="email" name="user_email" /> */}
          <input type="text" name="user_email" />
          <label>Phone</label>
          {/* <input type="tel" name="user_phone" pattern="[0-9]{10}"/> */}
          <input type="text" name="user_phone"/>
          <label for="typeOfService">Type of Service</label>
          <select id="typeOfService" name="typeOfService" onChange={input}>
            <option value={'automotive'}>automotive</option>
            <option value={'residential'}>residential</option>
            <option value={'commercial'}>commercial</option>
            <option value={'guns'}>guns</option>
          </select>
          <label>{label}</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default QuoteForm;