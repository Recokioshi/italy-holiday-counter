const positiveOrZero = (number) => number >=0 ? number : 0;

export default (departureDate, header) => (now) => {
  const daysLeft = positiveOrZero(departureDate.diff(now, "days"));
  const hoursLeft = positiveOrZero(departureDate.diff(now, "hours"));
  const minutesLeft = positiveOrZero(departureDate.diff(now, "minutes"));
  const secondsLeft = positiveOrZero(departureDate.diff(now, "seconds"));
  return {
    header,
    daysLeft,
    hoursLeft,
    minutesLeft,
    secondsLeft,
    fullDateLeft: {
      days: daysLeft,
      hours: hoursLeft - daysLeft * 24,
      minutes: minutesLeft - hoursLeft * 60,
      seconds: secondsLeft - minutesLeft * 60
    }
  };
};
