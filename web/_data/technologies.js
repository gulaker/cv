const groq = require("groq");
const client = require("../utils/sanityClient");

async function getTechnologies() {
  const filter = groq`*[_type == "technologyList"] {
    title, technologies
  }`;
  const technologies = await client.fetch(filter).catch((err) => console.error(err));
  return technologies;
}

module.exports = getTechnologies;
