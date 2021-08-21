export default {
  name: 'referenceContact',
  title: 'Reference',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'relation',
      title: 'Relation',
      type: 'multiLanguageString'
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string'
    },
    {
      name: 'phone',
      title: 'Phone number',
      type: 'string'
    }
  ]
}
