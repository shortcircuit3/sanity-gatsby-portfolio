export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5eed02466b4b948babf5bee1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-c7q71h4t',
                  apiId: '9b7eed27-65e3-457e-a33b-fb93fb9e1f51'
                },
                {
                  buildHookId: '5eed0246152a0c3ef6afd2a4',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-44hax2ud',
                  apiId: 'a4024b67-5a8a-48df-a230-d3ff6d1404a3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shortcircuit3/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-44hax2ud.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
