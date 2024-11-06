window.addEventListener('DOMContentLoaded', function () {
  // Activate Bootstrap scrollspy on the main nav element
  var sideNav = document.body.querySelector('#sideNav');
  if (sideNav)
    new this.window.bootstrap.ScrollSpy(document.body, {
      target: '#sideNav',
      rootMargin: '0px 0px -40%'
    });

  // Collapse responsive navbar when toggler is visible
  var navbarToggler = document.body.querySelector('.navbar-toggler');
  var responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', function () {
      if (window.getComputedStyle(navbarToggler).display !== 'none')
        navbarToggler.click();
    });
  });
});

window.particlesJS.load(
  'particles-js',
  'assets/particlesjs-config.json',
  function () {
    console.log('callback - particles.js config loaded');
  }
);
