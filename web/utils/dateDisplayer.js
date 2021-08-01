const monthText = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

function displayMonthYear(dateString) {
  const splitted = dateString.split("-");
  const year = splitted[0];
  const month = monthText[parseInt(splitted[1], 10)];
  return `${month} ${year}`;
}

module.exports = { displayMonthYear };
