(function (window) {
    var browser,
        version,
        mobile,
        os,
        osversion,
        bit,
        ua = window.navigator.userAgent,
        platform = window.navigator.platform;
    //Internet Explorer
    if (/MSIE/.test(ua)) {

        browser = 'Internet Explorer';

        if (/IEMobile/.test(ua)) {
            mobile = 1;
        }

        version = /MSIE \d+[.]\d+/.exec(ua)[0].split(' ')[1];

        //Google Chrome
    } else if (/Chrome/.test(ua)) {

        //Chromebooks
        if (/CrOS/.test(ua)) {
            platform = 'CrOS';
        }
        browser = 'Chrome';
        version = /Chrome\/[\d\.]+/.exec(ua)[0].split('/')[1];

        // Opera Browser
    } else if (/Opera/.test(ua)) {

        browser = 'Opera';

        if (/mini/.test(ua) || /Mobile/.test(ua)) {
            mobile = 1;
        }

        //Android Browser
    } else if (/Android/.test(ua)) {

        browser = 'Android Webkit Browser';
        mobile = 1;
        os = /Android\s[\.\d]+/.exec(ua)[0];

        //Mozilla firefox
    } else if (/Firefox/.test(ua)) {

        browser = 'Firefox';

        if (/Fennec/.test(ua)) {
            mobile = 1;
        }
        version = /Firefox\/[\.\d]+/.exec(ua)[0].split('/')[1];

        //Safari
    } else if (/Safari/.test(ua)) {

        browser = 'Safari';

        if ((/iPhone/.test(ua)) || (/iPad/.test(ua)) || (/iPod/.test(ua))) {
            os = 'iOS';
            mobile = 1;
        }

    }
    if (!version) {

        version = /Version\/[\.\d]+/.exec(ua);

        if (version) {
            version = version[0].split('/')[1];
        } else {
            version = /Opera\/[\.\d]+/.exec(ua)[0].split('/')[1];
        }

    }

    if (platform === 'MacIntel' || platform === 'MacPPC') {
        os = 'macOS';
        // osversion = /10[\.\_\d]+/.exec(ua)[0];
        if (/[\_]/.test(osversion)) {
            osversion = osversion.split('_').join('.');
        }
    } else if (platform === 'CrOS') {
        os = 'ChromeOS';
    } else if (platform === 'Win32' || platform == 'Win64') {
        os = 'Windows';
        bit = platform.replace(/[^0-9]+/, '');
    } else if (!os && /Android/.test(ua)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    } else if (!os && /Windows/.test(ua)) {
        os = 'Windows';
    }
    window.ui = {
        browser: browser,
        version: version,
        mobile: mobile,
        os: os,
        osversion: osversion,
        bit: bit
    };
}(this));

(function () {
    var downloadButton = document.querySelector('.hero__content .btn.btn-primary');
    var heroImage = document.querySelector('.hero__content img');
    var OSName = "Unknown OS";
    if (navigator.appVersion.indexOf("Win") != -1) {
        OSName = "Windows";
        downloadButton.innerHTML = "Download for " + window.ui.os;
        heroImage.src = "img/writer-windows.png";
    }
    if (navigator.appVersion.indexOf("Mac") != -1) {
        OSName = "MacOS";
        downloadButton.innerHTML = "Download for " + window.ui.os;
        heroImage.src = "img/writer-mac.png";
    }
    if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
    if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

    if ((navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPod') != -1) || (navigator.userAgent.indexOf('iPad') != -1)) {
        OSName = "iOS";
        downloadButton.innerHTML = "Available on desktop only ";
        downloadButton.style.background = '#9a9a9a';
        heroImage.src = "img/writer-mac.png";
    }

    if (navigator.appVersion.indexOf("Android") != -1) {
        OSName = "Android";
        downloadButton.innerHTML = "Available on desktop only ";
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





