// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import education from './documents/education'
import siteSettings from './documents/siteSettings'
import workExperience from './documents/workExperience'
import contactInfo from './documents/contactInfo'
import otherExperience from './documents/otherExperience'
import accomplishment from './documents/accomplishment'
import referenceContact from './documents/referenceContact'
import technologyList from './documents/technologyList'

// Object types
import multiLanguageString from './objects/multiLanguageString'
import socialContact from './objects/socialContact'
import contact from './objects/contact'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    education,
    siteSettings,
    workExperience,
    contactInfo,
    otherExperience,
    accomplishment,
    referenceContact,
    technologyList,
    multiLanguageString,
    socialContact,
    contact

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
