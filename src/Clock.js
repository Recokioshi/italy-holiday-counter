import "./clock.css";
import React, { useEffect, useMemo, useState } from "react";
import moment from "moment";

import { bariDepartureDate, cracowDepartureDate } from "./const";
import getTimeDifference from "./getTimeDifference";

const getTimeLeftBari = getTimeDifference(bariDepartureDate, "Wylot do Italii za...");
const getTimeLeftCracow = getTimeDifference(cracowDepartureDate, "Wyjazd do Krakowa za...");

export default () => {
  const [now, setNow] = useState(moment());
  const timeLeftBari = useMemo(() => getTimeLeftBari(now), [now]);
  const timeLeftCracow = useMemo(() => getTimeLeftCracow(now), [now]);

  useEffect(() => {
    setTimeout(() => {
      setNow(moment());
    }, 1000);
  }, [now]);

  const Timer = ({ timeObject }) =>
      (
          <div className="clock">
          <div className="title">{timeObject.header}</div>
            <div className="timer">
                <div className="timecard">{timeObject.fullDateLeft.days}d</div>
                <div className="timecard">{timeObject.fullDateLeft.hours}h</div>
                <div className="timecard">{timeObject.fullDateLeft.minutes}m</div>
                <div className="timecard">{timeObject.fullDateLeft.seconds}s</div>
            </div>
          </div>
      )

  return (
    <div className="clock-wrapper">
      <Timer timeObject={timeLeftCracow} />
      <Timer timeObject={timeLeftBari} />
    </div>
  );
};
