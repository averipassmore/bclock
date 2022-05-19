import React from "react";

const QuoteForm = () => {
  // function encode(data) {
  //   return Object.keys(data)
  //     .map(
  //       (key) =>
  //         encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //     )
  //     .join("&");
  // }
  
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({
  //       "form-name": event.target.getAttribute("name"),
  //       // ...name,
  //     }),
  //   })
  //     // .then(() => navigate("/thank-you/"))
  //     .catch((error) => alert(error));
  // };
  return (
    <div>
      {/* <div className="Wrapper-div"></div>
      <div className="Quote-form-wrapper">
        <form data-netlify="true" name="contactInfo" method="post" onSubmit={handleSubmit}>
          <input type={'hidden'} name='quote-form' value={'contactInfo'} />
          <label for='name'>Name</label>
          <input type={'text'} name='name'></input>

          <label for='email'>Email</label>
          <input type={'email'} name='email'></input>

          <label for='phone'>Phone</label>
          <input type={'tel'} name='phone' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"></input>

          <label for='summary'>How can we help?</label>
          <input type={'text'} name='summary'></input>

          <button type="submit">Send</button>
        </form>
      </div> */}
      <div className="Wrapper-div"></div>
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>
      <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
    </div>
  )
}

export default QuoteForm;