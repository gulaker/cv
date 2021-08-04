const groq = require("groq");
const client = require("../utils/sanityClient");
const { displayMonthYear } = require("../utils/dateDisplayer");

async function getOtherExperiences() {
  const filter = groq`*[_type == "otherExperience"] | order(endDate){
    company, description, companyLogo, jobTitle, startDate, endDate,
    "logoUrl": companyLogo.asset -> url
  }`;
  const docs = await client.fetch(filter).catch((err) => console.error(err));
  const otherExperiences = docs.map((otherExperience) => ({
    ...otherExperience,
    startText: displayMonthYear(otherExperience.startDate),
    endText: displayMonthYear(otherExperience.endDate),
  }));
  return otherExperiences;
}

module.exports = getOtherExperiences;
