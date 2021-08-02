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
      name: 'phone',
      type: 'string',
      title: 'Phone'
    },
    {
      name: 'birthDate',
      title: 'Birth date',
      type: 'date'
    },
    {
      name: 'address',
      title: 'address',
      type: 'string'
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
