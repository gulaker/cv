const groq = require('groq')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')

const hasToken = !!client.config().token

async function getWorkExperiences () {
  const filter = groq`*[_type == "workExperience"]`
  const docs = await client.fetch(filter).catch(err => console.error(err))
  //const authors = docs.map(generateAuthor)
  // const reducedWorkExperiences = overlayDrafts(hasToken, authors)
  return docs
}

module.exports = getWorkExperiences
