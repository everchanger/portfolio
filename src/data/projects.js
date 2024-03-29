export default {
    projects: [
      {
        project_name: 'Vue Clicker',
        source_link: {
          href: 'https://github.com/everchanger/vue-clicker',
          text: 'Github source',
        },
        summary: [
          'A really small and silly project I made using Vue and Tailwindcss just to try and make a clicker. A clicker is a game that starts of with having the user click buttons in a UI and after the player earns enough resources the player can chose to have the clicking automated. I wanted to see how fast I could build something that could be useful using Vue in combination with Tailwindcss. The result is a pretty broken clicker. The game functions as excpected but the prices and rewards needs to be fixed.'
        ],
      },
      {
        project_name: 'Placement cards',
        source_link: {
          href: 'https://github.com/everchanger/card/',
          text: 'Github source',
        },
        summary: [
          'A not yet completed project. Trying to build a service to let a user chose a template and print his/her own placement cards for weddings/parties/other occasions! I focused on getting the templates and printing part of the app finished first but after that my interest winded down a bit and I moved on to other projects.'
        ],
      },
      {
        project_name: 'Let me encrypt',
        source_link: {
          href: 'https://github.com/everchanger/letmeencrypt',
          text: 'Github source',
        },
        summary: [
          'This is a hobby project of mine I started working on March 2017. It\'s meant to be a simple and modern way of safetly transfering and storing files securely. The idea is simple and has been done before but now progress in Javascript cryptography functions gives us the tools to encrypt and decrypt directly in the browser without the need of a native client! This means the user doesn\'t have to download any bulky software, he/she can simply create an account, find his/hers friend and send the file encrypted directly from their browser.',
          'I also use this project to try out new web ideas and to practice my MySQL skills. The server uses standard PHP and a MySQL database, nothing out of the ordinary is needed server side.',
        ],
      },
      {
        project_name: 'Granny helper',
        source_link: {
          href: 'https://github.com/everchanger/grannyhelper/tree/multiuser',
          text: 'Github source',
        },
        summary: [
          'This is a tool that I made for my grandmother who suffers from dementia. The basic idea is to be able to show the end user a simple display that shows the current date, time of day (morning, day, night) and an event that an administrator adds via a simple web interface. Via the administrator web interface an administrator can set a recurring event or add special events that appears on a specific date. The event is a text often just a few sentences and a photo.',
          'Since my grandmother does not own a computer and did not have internet, I had to make the project simple and easy to use. I solved the internet access by getting a 3G/4G mobile broadband modem with wifi. Then I configured an Raspberry Pi to boot into chromium fullscreen mode and navigate to the display endpoint. The webpage then pings the server every ten minutes asking for changes, if there are changes (new day or an administrator has changed the event for that day) the page gets reloaded. This was made to make the display use less data as the 3G/4G broadband often comes with a limit of use per month. There is no mouse, no keyboard and no buttons my grandmother has to deal with, it\'s all plug and play.',
          'We were not sure how my grandmother would react to this new technology but it seems to be working out great! She reads the display and my mother (the main administrator of my grandmother\'s display) have come up with some interesting ways to use the display, not just for events that are occurring in the future but also for reminding my grandmother of event that has already happened that day that she might have forgotten had happen.',
          'The version I link is a more advanced version where I wanted to see if this concept could work for care helpers and not just single users. This versions supports organization, multiple displays, multiple users and administrators.'
        ],
      },
    ]
  }
