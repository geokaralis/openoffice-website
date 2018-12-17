(function () {
  var downloadButton = document.querySelector('.hero__content .btn.btn-primary');
  var heroImage = document.querySelector('.hero__content img');
  var OSName = "Unknown OS";
  if (navigator.appVersion.indexOf("Win") != -1) {
      OSName = "Windows";
      downloadButton.innerHTML = "Download " + DL.VERSION + " for " + window.ui.os;
      heroImage.src = "img/writer-windows.png";
  }
  if (navigator.appVersion.indexOf("Mac") != -1) {
      OSName = "MacOS";
      downloadButton.innerHTML = "Download " + DL.VERSION + " for " + window.ui.os;
      heroImage.src = "img/writer-mac.png";
  }
  if (navigator.appVersion.indexOf("X11") != -1) {
      OSName = "UNIX";
      downloadButton.innerHTML = "Download " + DL.VERSION + " for " + window.ui.os;
      heroImage.src = "img/writer-linux.png";
  } 
  if (navigator.appVersion.indexOf("Linux") != -1) {
      OSName = "Linux";
      downloadButton.innerHTML = "Download " + DL.VERSION + " for " + window.ui.os;
      heroImage.src = "img/writer-linux.png";
  } 

  if ((navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPod') != -1) || (navigator.userAgent.indexOf('iPad') != -1)) {
      OSName = "iOS";
      downloadButton.style.fontSize = '12px';
      downloadButton.innerHTML = "Available on desktop only ";
      downloadButton.href = "javascript:void(0)";
      downloadButton.style.background = '#9a9a9a';
      heroImage.src = "img/writer-mac.png";
  }

  if (navigator.appVersion.indexOf("Android") != -1) {
      OSName = "Android";
      downloadButton.style.fontSize = '12px';
      downloadButton.innerHTML = "Available on desktop only ";
      downloadButton.href = "javascript:void(0)";
      downloadButton.style.background = '#9a9a9a';
      heroImage.src = "img/writer-windows.png";
  }

  console.log('Your OS: ' + OSName);
  console.log("Browser : " + window.ui.browser);


  var navMenu = document.querySelector('.nav-menu');
  var openMenu = document.querySelector('.header__toggle');

  var body = document.querySelector('body');

  var close = '<svg class="icon icon-close" viewBox="0 0 24 25"><g fill-rule="evenodd"><rect width="30" height="3" x="-3" y="11" transform="rotate(-45 12 12.5)"></rect><rect width="30" height="3" x="-3" y="11" transform="rotate(45 12 12.5)"></rect></g></svg>';

  var currentOpenMenuInnerHTML = openMenu.innerHTML;

  openMenu.addEventListener('click', function () {
      if (navMenu.classList.contains('active')) {
          openMenu.innerHTML = currentOpenMenuInnerHTML;
      } else {
          openMenu.innerHTML = close;
      }
      navMenu.classList.toggle('active');
      body.classList.toggle('is-open');
  });


  var menu = document.querySelector('.site-header');
  var sticky = menu.offsetTop;


  window.onscroll = function () {
      if (window.pageYOffset > sticky) {
          menu.classList.add('fixed');
      } else {
          menu.classList.remove('fixed');
      }
  };

  var footerLang = document.querySelector('.footer__lang');
  var footerLangB = document.querySelector('.footer__lang-btn');

  footerLangB.addEventListener('click', function () {
      if (footerLang.classList.contains('is-open')) {
          footerLang.classList.remove('is-open');
      } else {
          footerLang.classList.add('is-open');
      }
  });

  function toggleDropdown(dropdown) {
      if (dropdown.classList.contains('is-open')) {
          dropdown.classList.remove('is-open');
      } else {
          let activeDropdowns = document.querySelectorAll('.dropdown-link.is-open');
          for (let activeDropdown of activeDropdowns) {
              activeDropdown.classList.remove('is-open');
          }
          dropdown.classList.add('is-open');
      }
  }

  let dropdowns = document.querySelectorAll('.dropdown-link');
  for (let dropdown of dropdowns) {

      // Toggle when dropdown toggle clicked:
      let toggle = dropdown.querySelector('.dropdown-link a');
      toggle.addEventListener('click', function (e) {
          e.preventDefault();
          toggleDropdown(dropdown);
      });

      // Deactivate when focus leaves dropdown:
      dropdown.addEventListener('blur', function (event) {
          if (!this.contains(event.relatedTarget)) {
              this.classList.remove('is-open');
          }
      }, true);
  }

  document.addEventListener("click", (evt) => {
      const flyoutElement = document.querySelector('.footer__lang');
      let targetElement = evt.target; // clicked element

      do {
          if (targetElement == flyoutElement) {
              // This is a click inside. Do nothing, just return.
              return;
          }
          // Go up the DOM
          targetElement = targetElement.parentNode;
      } while (targetElement);

      footerLang.classList.remove('is-open');
  });

  // Fallback blur
  document.addEventListener("click", (evt) => {
      for (let dropdown of dropdowns) {
          let targetElement = evt.target; // clicked element

          do {
              if (targetElement == dropdown) {
                  return;
              }
              // Go up the DOM
              targetElement = targetElement.parentNode;
          } while (targetElement);
          dropdown.classList.remove('is-open');
      }
  });

  var nightMode = document.querySelector('.footer__night-mode');
  var nightModeButton = document.querySelector('.footer__night-mode button');

  nightModeButton.addEventListener('click', function () {
      nightMode.classList.toggle('active');
      body.classList.toggle('dark');
  });
})();



(function () {
  const rootURL = 'https://www.openoffice.org/';

  let languages = {
      Asturianu: 'ast',
      English: 'en'
  }

  const languageSwitcherButtonText = document.querySelector('.footer__lang-btn span');
  const languageButtons = document.querySelectorAll('.footer__lang-link');

  function findCurrentLanguage(items) {
      var currentLanguage; // Local scope var

      items.forEach((item) => {
          if (item.hasAttribute('data-active-lang')) {
              currentLanguage = item.dataset.lang;
              console.log('Element contains an active-lang attribute. Language code: [' + item.dataset.lang + ']');
          } else {
              // Element does not contain an active-lang attribute
          }
      });
      return currentLanguage;
  }

  const currentLanguage = findCurrentLanguage(languageButtons);


  switch (currentLanguage) {
      case languages.English:
          changeText('English');
          break;
      case languages.Asturianu:
          changeText('Asturianu');
          break;
      default:
          changeText('The default');
          break;
  }

  function changeText(text) {
      languageSwitcherButtonText.innerHTML = text;
  }

  function changeLanguage(items) {
      items.forEach(item => {
          item.addEventListener('click', function(e) {
              if (item.dataset.lang === 'en') {
                  window.location = rootURL;
              } else {
                  window.location = rootURL + item.dataset.lang;
              }
          });
      });
  }

  changeLanguage(languageButtons);
})();