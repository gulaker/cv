import S from '@sanity/desk-tool/structure-builder'
import { MdSettings } from 'react-icons/md'
import { MdPerson } from 'react-icons/md'

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings', 'contactInfo'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Contact Info')
        .icon(MdPerson)
        .child(
          S.editor()
            .id('contactInfo')
            .schemaType('contactInfo')
            .documentId('contactInfo')
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
