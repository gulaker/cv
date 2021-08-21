const groq = require("groq");
const client = require("../utils/sanityClient");

async function getWorkExperiences() {
  const filter = groq`*[_type == "referenceContact"] {
    name, relation, company, phone
  }`;
  const docs = await client.fetch(filter).catch((err) => console.error(err));
  return docs;
}

module.exports = getWorkExperiences;
