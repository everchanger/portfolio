export default {
  resume: [
    {
      company: 'Dahl AB',
      logo: '/assets/logos/dahl.jpg',
      employment_period: 'Juni 2020 - Current employer',
      summary: ['Currently working on Dahl AB\'s new e-commerce site. Built using Nuxt and a microservices architecture.'],
      tools: [
        'JavaScript (ES6) and TypeScript, Nuxt (Vue.js) frontend.',
        'TypeScript microservices on the backend.',
        'Jira/Bitbucket, Atlassian stack',
      ],
    },
    {
      company: 'Perido AB',
      logo: '/assets/logos/perido.jpg',
      employment_period: 'September 2018 - Juni 2020',
      summary: [
        'Working on multiple in-house applications for Perido\'s internal departments. All of the web applications are written with a PHP, Laravel backend. Two of the applications use AngularJS as a frontend and another uses Vue.js. We are currently building a fourth application in Laravel and Vue.js. I work with both the backend and the frontend but I tend to focus on the frontend.',
        'Before building the new application I wanted us to have a styleguide for internal applications to be able to unify the experience for the users when working across multiple applications. We made a styleguide and a component library that is planned to be incorperated into the old web apps as well as the new ones. We are currently using Vue.js with Tailwindcss to create the component library. We use VuePress to make the styleguide and GitHub actions to publish it when changes occur in the library.',
        'I\'m also responsible for maintaining the website of Perido, which is built in Wordpress.',
      ],
      tools: [
        'Visual Studio Code for all kinds of editing.',
        'Git with GitHub integration.',
        'JavaScript (ES6), Vue.js and AngularJS for frontend.',
        'PHP, Laravel and Eloquent on the backend.',
      ],
    },
    {
      company: 'Webhallen AB',
      logo: '/assets/logos/webhallen.jpg',
      employment_period: 'November 2017 - September 2018',
      summary: [
        'Worked as a full stack developer with focus on the new customer page. My day to day work mostly revolved around building new features for the customer page using Vue.js and Laravel.',
        'I also worked on implementing Selenium testing using Zalando\'s Zalenium a Selenium grid implementation using Docker images. I used WebdriverIO as a driver for the tests.'
      ],
      tools: [
        'Visual Studio Code for all kinds of editing.',
        'Git with Gitlab integration.',
        'JavaScript (ES6) and Vue.js for frontend.',
        'PHP, Laravel and Doctrine on the backend.',
      ],
    },
    {
      company: 'Expisoft AB',
      logo: '/assets/logos/expisoft.jpg',
      employment_period: 'September 2011 - November 2017',
      summary: [
        'At Expisoft AB I worked as an developer. I wrote mostly C++ but also code PHP, JavaScript, CSS and HTML for web interfaces. Expisoft creates secure applications using PKI so just by working here I\'ve learned a massive amount of information on working with certificates and CA\'s.',
        'I\'m used to working with Virtual Machines in a VMware environment, both local VMs using VMWare Workstation but also remote VMs using the VMware Sphere Client.',
        'Since Expisoft AB is a small company I did a lot more than just developing. I was the main force to make work easier and more effective for everyone at Expisoft. A couple examples of this is me installing and maintaining a Zulip chat server, a Kanboard web app to make project management easier and also publishing a lot of wiki entries on the internal Wiki. I also worked on modernizing the development environment.',
        'I was responsible for developing, maintaining and testing parts of the Expisoft AB\'s product tree using C++ as my main language. My main responsibility was working on an application firewall written in C++. The product was used to proxy and parse network traffic to be able to provide a solid Single Sign On experience for the end user. The product supported Telnet, HTTP/HTML and IIOP parsing. It could also be configured to fetch user data from multiple different sources such as LDAP databases and Windows AD.',
        'I took it upon myself to learn PHP and web development at Expisoft, I built a modern web interface for one of their products from the ground up. I used PHP for the backend. For the frontend I used HTML5, Bootstrap, JavaScript, jQuery and CSS3. I was also responsible for building MSI installers using the WIX toolset. I used Paraffin and integrated it into the build environment to make building installers for web projects more effective.',
      ],
      tools: [
        'Visual Studio (2008) for native development, C++. And Visual Studio Code for web work, PHP, JavaScript and CSS.',
        'Makefiles and a custom build environment built around nmake.',
        'CruiseControl.NET for automatic build. I remade and simplified the configuration files for our CruiseControl server, making adding other build targets a lot easier.',
        'Tortise SVN and SVN to handle code versioning',
        'Qt for developing native GUI\'s. I have not used QT Creator just coded the UI in C++.',
        'VMWare Workstation and VMWare Sphere for testing and deploying productivity tools.',
        'Trac for managing tickets and hosting the wiki.',
        'Kanboard installed and managed the Kanboard server. Used it to make project handling easier.',
        'Zulip an open-source chat solution, since Expisoft AB handles confidential data we could not use Slack. We needed an solution that we could host in-house. I found and sat up the Zulip server and it has been ticking along quite nicely ever since.',
      ],
    },
    {
      company: 'Dfind',
      logo: '/assets/logos/dfind.jpg',
      employment_period: 'March 2011 - September 2011',
      summary: [ 'Got hired by Dfind to work at Expisoft AB. I worked as an engineer/developer and after six months I got hired at Expisoft AB making secure single sing on solutions for web applications.' ],
      tools: [ 'I used the same tools as listed in the Expisoft section above.', ],
    },
    {
      company: 'Alternate Ending Interactive Studio',
      logo: '/assets/logos/aeis.jpg',
      employment_period: 'March 2010 - August 2010',
      summary: [
        'Worked as an intern for three months, then got hired to work on a PSP Minis game called Metara. We were Using C++ and an in-house engine called Tengine to develop the game. Since we were a small team a lot of the responsibilities were shared between me and the other programmer.',
        'I mainly worked on visual effects, enemy and player behavior. I also did three Flash games using Adobe Flash CS4 that were used in a marketing campaign at "hamsterpaj.net" (community site for young teens) for a chocolate powder called \"O\'boy\".',
        'I was responsible for C++ coding, optimizing code for the PSP. Develop web games using Adobe Flash CS4.',
      ],
      tools: [ 
        'Visual Studio.',
        'SVN.',
        'Adobe Flash CS4',
      ],
    },
    {
      company: 'Education - PlaygroundSquad',
      logo: undefined,
      employment_period: '2008 - 2010',
      summary: [
        'Higher vocational education for game development, I studied game programming. We learnt about the basics of making a 3D game, the math, the rendering and the gameplay. A good school that really boosted my programming skill and thinking.',
      ],
    },
  ]
}