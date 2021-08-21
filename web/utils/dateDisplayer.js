const languages = ["norwegian", "english"];

const monthText = {
  english: {
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
  },
  norwegian: {
    1: "Januar",
    2: "Februar",
    3: "Mars",
    4: "April",
    5: "Mai",
    6: "Juni",
    7: "Juli",
    8: "August",
    9: "September",
    10: "Oktober",
    11: "November",
    12: "Desember",
  },
};

function displayMonthYear(dateString) {
  if (!dateString) return "";
  const splitted = dateString.split("-");
  const year = splitted[0];
  const dateText = {};
  languages.forEach((lang) => {
    const month = monthText[lang][parseInt(splitted[1], 10)];
    dateText[lang] = `${month} ${year}`;
  });
  return dateText;
}

const composeDateText = (startText, endText) => {
  const dateText = {};
  languages.forEach((lang) => {
    const startDate = startText[lang];
    const endDate = endText[lang];
    if (!startDate) dateText[lang] = "";
    else if (!endDate) {
      if (lang === "english") dateText[lang] = `${startDate}-`;
      else if (lang === "norwegian") dateText[lang] = `${startDate}-d.d.`;
      else dateText[lang] = startDate;
    } else dateText[lang] = `${startDate}-${endDate}`;
  });
  return dateText;
};

module.exports = { displayMonthYear, composeDateText };
