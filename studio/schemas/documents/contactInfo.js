export default {
  name: 'contactInfo',
  type: 'document',
  title: 'Contact information',
  __experimental_actions: ['update', /*'create',  'delete', */ 'publish'],
  fields: [
    {
      name: 'picture',
      type: 'image',
      title: 'Picture'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'multiLanguageString'
    },
    {
      name: 'contact',
      title: 'Contact informations',
      type: 'array',
      of: [{ type: 'contact' }]
    },
    {
      name: 'social',
      title: 'Social Media',
      type: 'array',
      of: [{ type: 'socialContact' }]
    }
  ]
}
