import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interveId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interveId);
    };
  }, []);

  return (
    <div>
      <h1>Bharat Clock</h1>
      <h4> This is the clock that shows the time in Bharat at times</h4>
      <p>
        The current time : {time.toLocaleDateString()} -{" "}
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default CurrentTime;
