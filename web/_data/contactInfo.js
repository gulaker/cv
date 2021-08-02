const groq = require("groq");
const client = require("../utils/sanityClient");

module.exports = async function getContactInfo() {
  const res = await client.fetch(groq`
    *[_id == "contactInfo"]{
      picture, phone, birthDate, address,
      "pictureUrl": picture.asset -> url,
      social[]{
        ...,
        "iconUrl": icon.asset -> url
      }
    }[0]
  `);
  return res;
};
