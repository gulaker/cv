const groq = require("groq");
const client = require("../utils/sanityClient");
const { displayMonthYear, composeDateText } = require("../utils/dateDisplayer");

async function getEducations() {
  const filter = groq`*[_type == "education"] | order(endDate){
    school, description, schoolLogo, study, startDate, endDate,
    "logoUrl": schoolLogo.asset -> url
  }`;
  const docs = await client.fetch(filter).catch((err) => console.error(err));

  const educations = docs.map((education) => {
    const startText = displayMonthYear(education.startDate);
    const endText = displayMonthYear(education.endDate);
    return {
      ...education,
      dateText: composeDateText(startText, endText),
    };
  });
  return educations;
}

module.exports = getEducations;
