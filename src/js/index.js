document.addEventListener("DOMContentLoaded", onDocumentLoaded);

function onDocumentLoaded() {
   handleMobileNavbar();
   const path = window.location.pathname.substr(1);
   const pos = path.lastIndexOf('.');
   if(pos !== -1) {
      const name = path.substr(0, pos);
      document.getElementById('nav-' + name).classList.add('active');
   }
}

function handleMobileNavbar() {
   const mobileMenu = document.getElementById('mobile-menu');
   const hamburgerButton = document.getElementById('hamburger-button');
   const iconOpened = document.getElementById('icon-path-opened');
   const iconClosed = document.getElementById('icon-path-closed');

   hamburgerButton.addEventListener('click', function() { 
      if (mobileMenu.classList.contains('hidden') || !mobileMenu.classList.contains('active')) {
         mobileMenu.classList.remove('hidden');
         mobileMenu.classList.add('active');
         iconClosed.classList.add('hidden');
         iconOpened.classList.remove('hidden');
      } else {
         // mobileMenu.classList.add('hidden');
         mobileMenu.classList.remove('active');
         iconOpened.classList.add('hidden');
         iconClosed.classList.remove('hidden');
      }
   })
}