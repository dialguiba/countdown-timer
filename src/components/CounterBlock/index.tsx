import { NumberBlock } from "../NumberBlock/index";
import "./counter-block.scoped.scss";
import moment from "moment";

import { useEffect, useRef, useState } from "react";

export const CounterBlock = () => {
  let duration = useRef(moment.duration(14, "days"));

  const [seconds, setSeconds] = useState(duration.current.seconds());
  const [minutes, setMinutes] = useState(duration.current.minutes());
  const [hours, setHours] = useState(duration.current.hours());
  const [days, setDays] = useState(duration.current.days());

  useEffect(() => {
    const intervalId = setInterval(() => {
      duration.current = moment.duration(((duration.current as unknown) as number) - 1000, "milliseconds");
      console.log(duration.current.days(), duration.current.hours(), duration.current.minutes(), duration.current.seconds());
      setSeconds(duration.current.seconds());
      setMinutes(duration.current.minutes());
      setHours(duration.current.hours());
      setDays(duration.current.days());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [duration]);

  return (
    <div className="counterBlock">
      <NumberBlock currentNumber={days} unit="days" />
      <NumberBlock currentNumber={hours} unit="hours" />
      <NumberBlock currentNumber={minutes} unit="minutes" />
      <NumberBlock currentNumber={seconds} unit="seconds" />
    </div>
  );
};
