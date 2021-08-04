export default {
  name: 'accomplishment',
  title: 'Engagements and accomplishments',
  type: 'document',
  fields: [
    {
      name: 'icon',
      title: 'Icon',
      type: 'image'
    },
    {
      name: 'institution',
      title: 'Institution',
      type: 'string'
    },
    {
      name: 'engagement',
      title: 'Engagement',
      type: 'multiLanguageString'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'multiLanguageString'
    },
    {
      name: 'startDate',
      title: 'Start date',
      type: 'date'
    },
    {
      name: 'endDate',
      title: 'End date',
      type: 'date'
    }
  ]
}
