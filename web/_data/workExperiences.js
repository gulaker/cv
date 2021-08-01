const groq = require("groq");
const client = require("../utils/sanityClient.js");
const dateDisplayer = require("../utils/dateDisplayer");

async function getWorkExperiences() {
  const filter = groq`*[_type == "workExperience"] | order(endDate){
    company, description, companyLogo, jobTitle, startDate, endDate,
    "logoUrl": companyLogo.asset -> url
  }`;
  const docs = await client.fetch(filter).catch((err) => console.error(err));
  const workExperiences = docs.map((workExperience) => ({
    ...workExperience,
    startText: dateDisplayer.displayMonthYear(workExperience.startDate),
    endText: dateDisplayer.displayMonthYear(workExperience.endDate),
  }));
  return workExperiences;
}

module.exports = getWorkExperiences;
