export const GetMonthDistanceFromStart = (
  startYear,
  currentYear,
  currentMonth
) => {
//   console.log("print -->" ,startYear, currentYear, currentMonth);
  return (
    (parseInt(currentYear) - parseInt(startYear)) * 12 + parseInt(currentMonth)
  );
};
