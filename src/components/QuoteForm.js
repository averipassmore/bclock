import React from "react";

const QuoteForm = () => {
  return (
    <div>
      <div className="Wrapper-div"></div>
      <div className="Quote-form-wrapper">
        <form name="contact" netlify>
          <label for='name'>Name</label>
          <input type={'text'} name='name'></input>

          <label for='email'>Email</label>
          <input type={'text'} name='email'></input>

          <label for='phone'>Phone</label>
          <input type={'text'} name='phone'></input>

          <label for='summary'>How can we help?</label>
          <input type={'text'} name='summary'></input>
        </form>
      </div>
    </div>
  )
}

export default QuoteForm;