import React, {useRef} from "react";
// import emailjs from 'emailjs-com';
// import { Link } from "react-router-dom";

const QuoteForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('service_vxo5ko4', 'template_bnbzl4f', form.current, 'Um-6jVm3sb72fybJ3')
    //   .then((result) => {
    //       console.log(result.text);
    //       alert('Success! Redirecting to home...');
    //   }, (error) => {
    //       console.log(error.text);
    //       alert("Failed...", error)
    //   });
  };

  return (
    <div>
      <div className="Wrapper-div"></div>
      <div className="Quote-form-background">
        <form ref={form} onSubmit={sendEmail} className="Quote-form">
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Phone</label>
          <input type="tel" name="user_phone" pattern="[0-9]{10}"/>
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default QuoteForm;