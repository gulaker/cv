const groq = require("groq");
const client = require("../utils/sanityClient");
const { displayMonthYear, composeDateText } = require("../utils/dateDisplayer");

async function getAccomplishments() {
  const filter = groq`*[_type == "accomplishment"] | order(endDate){
    institution, description, icon, engagement, startDate, endDate,
    "iconUrl": icon.asset -> url
  }`;
  const docs = await client.fetch(filter).catch((err) => console.error(err));
  const accomplishments = docs.map((accomplishment) => {
    const startText = displayMonthYear(accomplishment.startDate);
    const endText = displayMonthYear(accomplishment.endDate);
    return {
      ...accomplishment,
      dateText: composeDateText(startText, endText),
    };
  });
  return accomplishments;
}

module.exports = getAccomplishments;
