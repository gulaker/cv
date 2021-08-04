export default {
  name: 'otherExperience',
  title: 'Other experience',
  type: 'document',
  fields: [
    {
      name: 'companyLogo',
      title: 'Company logo',
      type: 'image'
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string'
    },
    {
      name: 'jobTitle',
      title: 'Job title',
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
