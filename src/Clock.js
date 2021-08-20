import "./clock.css";
import React, { useEffect, useMemo, useState } from "react";
import moment from "moment";

import { bariDepartureDate, cracowDepartureDate } from "./const";
import getTimeDifference from "./getTimeDifference";

const getTimeLeftBari = getTimeDifference(bariDepartureDate);
const getTimeLeftCracow = getTimeDifference(cracowDepartureDate);

export default () => {
  const [now, setNow] = useState(moment());
  const timeLeftBari = useMemo(() => getTimeLeftBari(now), [now]);
  const timeLeftCracow = useMemo(() => getTimeLeftCracow(now), [now]);
  const timeToDisplay = useMemo(
    () =>
      timeLeftCracow.secondsLeft > 0
        ? {
            header: "Wyjazd do Krakowa za...",
            ...timeLeftCracow
          }
        : {
            header: "Wylot do Italii za...",
            ...timeLeftBari
          },
    [timeLeftCracow, timeLeftBari]
  );

  useEffect(() => {
    setTimeout(() => {
      setNow(moment());
    }, 1000);
  }, [now]);

  return (
    <div className="clock">
      <div className="title">{timeToDisplay.header}</div>
      <div className="timer">
        <div className="timecard">{timeToDisplay.fullDateLeft.days}d</div>
        <div className="timecard">{timeToDisplay.fullDateLeft.hours}h</div>
        <div className="timecard">{timeToDisplay.fullDateLeft.minutes}m</div>
        <div className="timecard">{timeToDisplay.fullDateLeft.seconds}s</div>
      </div>
    </div>
  );
};
