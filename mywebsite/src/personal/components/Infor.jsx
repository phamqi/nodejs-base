import { memo, useEffect, useRef, useState } from "react";

import { dataProfile, DEFAULT_TIMER } from "../constant";
function Infor({ handleZoomOut }) {
  const prevData = dataProfile;
  const prevDataLength = prevData.length;
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState("");
  const [timer, setTimer] = useState(DEFAULT_TIMER);
  const timeoutRef = useRef(null);
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      if (counter < prevDataLength) {
        setData(data + prevData.charAt(counter));
        if (
          prevData.charAt(counter) === ">" ||
          prevData.charAt(counter) === ";"
        ) {
          setTimer(DEFAULT_TIMER);
        }
        if (
          prevData.charAt(counter) === "<" ||
          prevData.charAt(counter) === "&"
        ) {
          setTimer(1);
        }
        setCounter(counter + 1);
      }
      if (counter === prevData.length) {
        handleZoomOut();
      }
    }, timer);
    return () => {
      resetTimeout();
    };
  });
  return (
    <>
      <div
        id="div_content"
        className="vscode_content_code_body_my_profile"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
    </>
  );
}

export default memo(Infor);
