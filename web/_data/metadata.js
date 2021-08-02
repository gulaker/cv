const groq = require("groq");
const client = require("../utils/sanityClient");

module.exports = async function getMetaData() {
  const res = await client.fetch(groq`
    *[_id == "siteSettings"]{
      ...,
      "favIconUrl": favIcon.asset -> url,
      author->
    }[0]
  `);
  return res;
};
