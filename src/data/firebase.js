const deploy = [
  {
    category: 'Deployment',
    heading: 'ReactJS Website Deployment using Firebase',
    date: '02 Sep 2021',
    description:
      'Firebase Hosting is production-grade web content hosting for developers. With a single command, you can quickly deploy web apps and serve both static and dynamic content to a global CDN (content delivery network).',
    step: [
      {
        title: 'Firebase-Tools Install',
        count: 1,
        desc: [
          {
            details:
              'Install firebase-tools on terminal using following command:',
            command: 'npm i -g firebase-tools',
          },
        ],
      },
      {
        title: 'Firebase Login',
        count: 2,
        desc: [
          {
            details:
              'Login to firebase using following command. It will take you to browser and asks for login credentials. (Answer yes to the asked question)',
            command: 'firebase login',
          },
        ],
      },
      {
        title: 'Firebase Initialization',
        count: 3,
        desc: [
          {
            details: 'Now, next step is to initialize firebase in our project.',
            code: 'firebase init',
          },
          {
            details: (
              <>
                Select{' '}
                <b>
                  Hosting: Configure files for Firebase Hosting and (optionally)
                  set up Github Action deploys
                </b>{' '}
                from the following options.
              </>
            ),
            image: 'assets/firebase-init-hosting.png',
          },
          {
            details: (
              <>
                Select <b>Use and existing project</b>. After that choose your
                project name from list
              </>
            ),
            image: 'assets/firebase-init-project.png',
          },
          {
            details: <>Answer to questions asked in following way:</>,
            image: 'assets/firebase-init-setup.png',
          },
        ],
      },
      {
        title: 'Build Project',
        count: 4,
        desc: [
          {
            details:
              'Building your project means creating a static copy of your website. Use following command to build your project',
            command: 'npm run build',
          },
        ],
      },
      {
        title: 'Firebase Deployment',
        count: 5,
        desc: [
          {
            details: 'Deploy your build project to firebase using:',
            command: 'firebase deploy',
          },
        ],
      },
    ],
  },
]

export { deploy }
