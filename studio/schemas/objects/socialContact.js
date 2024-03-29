export default {
  name: 'socialContact',
  title: 'Social Media contact',
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
      name: 'username',
      title: 'Username',
      type: 'string'
    },
    {
      name: 'hyperlink',
      title: 'Hyperlink',
      type: 'string'
    }
  ]
}
