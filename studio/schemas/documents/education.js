export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'schoolLogo',
      title: 'School logo',
      type: 'image'
    },
    {
      name: 'school',
      title: 'School',
      type: 'string'
    },
    {
      name: 'study',
      title: 'Study name',
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
