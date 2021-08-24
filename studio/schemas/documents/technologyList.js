export default {
  name: 'technologyList',
  title: 'Technologies',
  type: 'document',
  fields: [
    {
      name: 'menuname',
      title: 'Menu name',
      type: 'string'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'multiLanguageString'
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
}
