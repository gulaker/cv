const groq = require("groq");
const client = require("../utils/sanityClient");

module.exports = async function getContactInfo() {
  const res = await client.fetch(groq`
    *[_id == "contactInfo"]{
      picture, description,
      "pictureUrl": picture.asset -> url,
      social[]{
        ...,
        "iconUrl": icon.asset -> url
      },
      contact[]{
        ...,
        "iconUrl": icon.asset -> url
      }
    }[0]
  `);
  return res;
};
