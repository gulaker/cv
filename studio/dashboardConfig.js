export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60eb225e5500d303b76c51bc',
                  title: 'Sanity Studio',
                  name: 'cv-studio-jrbadayy',
                  apiId: '0b052ea3-4a4e-4109-90e8-97bbc7510adf'
                },
                {
                  buildHookId: '60eb225f455b47cf7b08b716',
                  title: 'Blog Website',
                  name: 'cv-web-9g7931yk',
                  apiId: '0b9235a5-4d0b-4dbc-8c9a-24b11551343a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gulaker/cv',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://cv-web-9g7931yk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
