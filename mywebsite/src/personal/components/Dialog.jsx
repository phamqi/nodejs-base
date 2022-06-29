import React, { useState, forwardRef, useImperativeHandle } from "react";

const Dialog = forwardRef(({ message }, ref) => {
  const [show, setShow] = useState(false);
  console.log(message);
  useImperativeHandle(ref, () => ({
    onShow() {
      setShow(true);
    },
  }));
  return (
    <div
      className={show ? "dialog--show dialog" : "dialog"}
      onClick={() => setShow(false)}
    >
      <div className="message_box">
        <div className="message_box_top">
          <div className="message_box_control">
            <button
              className="message_box_control_btn_close_dialog"
              onClick={() => setShow(false)}
            >
              x
            </button>
          </div>
          <div className="message_box_content">{message}</div>
        </div>
        <button
          className="message_box_control_btn_ok"
          onClick={() => setShow(false)}
        >
          OK
        </button>
      </div>
    </div>
  );
});

export default Dialog;
