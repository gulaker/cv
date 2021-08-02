export default {
  name: 'contact',
  title: 'Contact Information',
  type: 'object',
  fields: [
    {
      name: 'icon',
      title: 'icon',
      type: 'image'
    },
    {
      name: 'altText',
      title: 'Alt-text',
      type: 'multiLanguageString'
    },
    {
      name: 'info',
      title: 'Info',
      type: 'multiLanguageString'
    }
  ]
}
