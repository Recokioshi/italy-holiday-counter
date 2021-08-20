export default (departureDate) => (now) => {
  const daysLeft = departureDate.diff(now, "days");
  const hoursLeft = departureDate.diff(now, "hours");
  const minutesLeft = departureDate.diff(now, "minutes");
  const secondsLeft = departureDate.diff(now, "seconds");
  return {
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
