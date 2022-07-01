import emailjs from "emailjs-com";
import { useRef, useState } from "react";

import Dialog from "./Dialog";

function FormContact() {
  const childRef = useRef();
  const [message, setMessage] = useState();
  const [inputs, setInputs] = useState({});

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  function sendEmail(e) {
    e.preventDefault();
    if (
      inputs.name === "" ||
      Boolean(inputs) ||
      inputs.email === "" ||
      inputs.message === ""
    ) {
      childRef.current.onShow();
      setMessage("You must fill out all the fields");
      // alert("You must fill out all the fields");
    } else {
      emailjs
        .sendForm(
          "service_yynun1x",
          "template_k4yciiq",
          e.target,
          "5H-CVrNKeEwcvgtF3"
        )
        .then(
          (result) => {
            childRef.current.onShow();
            setMessage("Thank you for contacting me");
          },
          (error) => {}
        );
      e.target.reset();
    }
  }

  return (
    <>
      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          onChange={onChange}
          value={inputs.name || ""}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          onChange={onChange}
          value={inputs.email || ""}
        />
        <textarea
          className="textarea_message"
          name="message"
          placeholder="Your message"
          onChange={onChange}
          value={inputs.message || ""}
        />
        <div className="div_control">
          <button type="submit" value="Send" className="btn_close_form">
            Send
          </button>
        </div>
      </form>
      <Dialog message={message} ref={childRef} />
    </>
  );
}
export default FormContact;
