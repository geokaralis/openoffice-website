
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




    //Editable details for the client side OS appropriate download detection.
    // var PLATFORMS = {"windows":{"name":"Windows","size":"38&nbsp;MB","latestVersion":"3.0.4","location":"\/\/get.videolan.org\/vlc\/3.0.4\/win32\/vlc-3.0.4-win32.exe"},"windows64":{"name":"Windows 64bit","size":"40&nbsp;MB","latestVersion":"3.0.4","location":"\/\/get.videolan.org\/vlc\/3.0.4\/win64\/vlc-3.0.4-win64.exe"},"windowsphone":{"name":"Windows Phone","latestVersion":"3.1.0","location":"\/vlc\/download-windowsphone.html"},"osx":{"name":"macOS","size":"48&nbsp;MB","latestVersion":"3.0.4","location":"\/\/get.videolan.org\/vlc\/3.0.4\/macosx\/vlc-3.0.4.dmg"},"linux":{"name":"Linux","latestVersion":"3.0.4","location":"\/vlc\/#download"},"android":{"name":"Android","latestVersion":"3.0.13","location":"\/\/play.google.com\/store\/apps\/details?id=org.videolan.vlc"},"ios":{"name":"iOS","size":"56.5&nbsp;MB","latestVersion":"3.1.2","location":"\/\/itunes.apple.com\/app\/apple-store\/id650377962?pt=454758&amp;ct=vodownloadpage&amp;mt=8"},"tvos":{"name":"Apple TV - tvOS","size":"21.7&nbsp;MB","latestVersion":"3.0.2","location":"\/vlc\/download-appletv.html"},"osx32":{"name":"Mac OS X (32bit)","size":"26&nbsp;MB","location":"\/\/get.videolan.org\/vlc\/2.0.10\/macosx\/vlc-2.0.10-intel.dmg"},"osxPPC":{"name":"Mac OS X (PPC)","size":"25&nbsp;MB","location":"\/\/get.videolan.org\/vlc\/2.0.10\/macosx\/vlc-2.0.10-powerpc.dmg"},"debian":{"name":"Debian GNU\/Linux","location":"\/vlc\/download-debian.html"},"ubuntu":{"name":"Ubuntu","location":"snap:\/\/vlc"},"fedora":{"name":"Fedora Linux","location":"\/vlc\/download-fedora.html"},"redhat":{"name":"RedHat Linux","location":"\/vlc\/download-redhat.html"},"gentoo":{"name":"Gentoo Linux","location":"\/vlc\/download-gentoo.html"},"suse":{"name":"Suse Linux","location":"\/vlc\/download-suse.html"},"mandriva":{"name":"Mandriva Linux","location":"\/vlc\/download-mandriva.html"},"beos":{"name":"BeOS","location":"\/vlc\/download-beos.html"},"freebs":{"name":"FreeBSD","location":"\/vlc\/download-freebsd.html"},"winrt":{"name":"Windows Store","latestVersion":"3.1.0","location":"\/vlc\/download-winrt.html"},"chromeos":{"name":"Chrome OS","location":"\/vlc\/download-chromeos.html"}};
    //Attempt to load the bright button gradient into cache for faster switching on mouse over (may not work on all browsers.)
    // var cache = new Image();
    // cache.src = '/style/images/downloadButtonGradientOrangeBright.png';

    // function getOS() {
    //     var OS="windows"; //Default

    //    if (navigator.appVersion.indexOf("Win")!=-1) {
    //        if (navigator.userAgent.indexOf('Windows NT 5.0') == -1 &&
    //            navigator.userAgent.indexOf('Windows NT 5.1') == -1 &&
    //              (navigator.userAgent.indexOf('Win64')>-1 ||
    //                navigator.platform=='Win64' ||
    //                navigator.userAgent.indexOf('x86_64')>-1 ||
    //                navigator.userAgent.indexOf('x86_64')>-1 ||
    //                navigator.userAgent.indexOf('amd64')>-1 ||
    //                navigator.userAgent.indexOf('AMD64')>-1 ||
    //                navigator.userAgent.indexOf('WOW64')>-1
    //        ))
    //        OS="windows64";
    //      else
    //        OS="windows";
    //    }
    //    if (navigator.appVersion.indexOf("Mac")!=-1) {
    //       if (navigator.platform.indexOf("MacPPC")!= -1 || navigator.platform.indexOf("PowerPC") != -1 ) OS="osxPPC";
    //       else if (navigator.userAgent.indexOf("OS X 10.5")!=-1) OS="osx32";
    //       else OS="osx";
    //    }
    //    if (navigator.platform.indexOf("BeOS") !=-1) OS="beos";
    //    if (navigator.platform.indexOf("Linux")!=-1) {
    //         if((navigator.userAgent.indexOf("Ubuntu") != -1) ||
    //             (navigator.userAgent.indexOf("ubuntu") != -1)) OS="ubuntu";
    //         else if(navigator.userAgent.indexOf("Debian") != -1) OS="debian";
    //         else if(navigator.userAgent.indexOf("Android") != -1) OS="android";
    //         else if(navigator.userAgent.indexOf("Mandriva") != -1) OS="mandriva";
    //         else if(navigator.userAgent.indexOf("Red Hat") != -1) OS="redhat";
    //         else if(navigator.userAgent.indexOf("Fedora") != -1) OS="fedora";
    //         else if(navigator.userAgent.indexOf("SUSE") != -1) OS="suse";
    //         else if(navigator.userAgent.indexOf("Gentoo") != -1) OS="gentoo";
    //         else OS="linux";
    //    }
    //    if (navigator.platform.indexOf("freebsd") != -1) OS="freebsd";
    //    if (navigator.platform.indexOf("FreeBSD") != -1) OS="freebsd";
    //    if (navigator.userAgent.indexOf("iPad") != -1 || navigator.userAgent.indexOf("iPhone") != -1 || navigator.userAgent.indexOf("iPod") != -1) {
    //         OS="ios";
    //    }
    //    return OS;
    // }

    // $(document).ready(function () {
    //     var OS = getOS() || {};
    //     var details = '';
    //     var separator = " &nbsp;&#8226;&nbsp; ";
    //     details += PLATFORMS[OS].latestVersion ? "Version " + PLATFORMS[OS].latestVersion : '';
    //     details += PLATFORMS[OS].name ? separator + PLATFORMS[OS].name : '';
    //     details += PLATFORMS[OS].size ? separator + PLATFORMS[OS].size : '';
    //     if (details) $('#downloadDetails').html(details);
    //     $('#downloadButton2').attr('href', PLATFORMS[OS].location || '/vlc/#download');
    // });






/* This file is to maintain text information that can be used on the download webpage via JavaScript when
 * including this file.
 *
 * Instead of hard coded text in the green box please use these variables and translate it to your favorite language.
 *
 * Wrong:   "Download Apache OpenOffice"
 * Correct: l10n.index_redirect_text
 */



// Object that contains all following properties (variables).
var l10n = new Object();

// The following variables are used in the "index.html" file:

// Graphic, text and links to show inside the event box.
									// "true" = Show the box, "false" = Do not show.
l10n.index_event_box_show			= true;
									// Logo graphic.
l10n.index_event_box_graphic_src		= "/images/apachecon_na_2018.png";
									// Alternative text for the graphic.
l10n.index_event_box_graphic_alt		= "ApacheCon North America 2018";
									// Make the graphic clickable with a link.
l10n.index_event_box_graphic_href		= "https://apachecon.com/";
									// The height in pixel of the graphic. Leave empty to use the height of the original graphic.
l10n.index_event_box_graphic_height		= "118";
									// The width in pixel of the graphic. Leave empty to use the width of the original graphic.
l10n.index_event_box_graphic_width		= "284";
									// Mouse over text for the graphic.
l10n.index_event_box_graphic_title		= "";
									// Make the whole box clickable with a link.
l10n.index_event_box_text_href			= "https://apachecon.com/";
									// Maximum 630 characters.
l10n.index_event_box_text_text			= "<b>ApacheCon North America<br />MontrÃ©al, Canada - September 24-27, 2018</b><br /><br />@TheASF is 350+ projects strong and growing.<br /> Come learn about all of them at @ApacheCon.<br /><b><i> Click here for details and registration ...</i></b>";
									// Mouse over text for the text.
l10n.index_event_box_text_title			= "ApacheCon North America - MontrÃ©al, Canada - September 24-27, 2018";

// Text and link to show inside the alert box.
									// "true" = Show the box, "false" = Do not show.
l10n.index_alert_box_show			= false;
									// Make the whole box clickable with a link.
l10n.index_alert_box_href			= "https://www.google.com";
									// Maximum 49 characters.
l10n.index_alert_box_headline_text		= "Headline text with max. 49 characters";
									// Mover over text for the headline.
l10n.index_alert_box_headline_title		= "Mover over title text for the headline.";
									// Maximum 630 characters.
l10n.index_alert_box_text_text			= "Text with max. 630 characters. <br /><br /> Use this alert box to announce any important messages or problems. <br /><br /> This whole alert box can be linked with an URL to point the user to more information or to a solution. But the link can also be left out. Then the box is not clickable.";
									// Mouse over text for the text.
l10n.index_alert_box_text_title			= "Mouse over title text for the text.";

// Flag how to redirect and if text should be displayed.
// "none" = no redirect, no text shown - "soft" = redirect, text shown - "hard" = redirect, no text shown.
l10n.index_redirect_text			= [ /* ast */	"none", "This site is also available in <b>Asturianu (ast)</b>. Just click this text to get redirected.",
						    /* eu */	"none", "This site is also available in <b>Euskara (eu)</b>. Just click this text to get redirected.",
						    /* bg */	"none", "This site is also available in <b>Ð±ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸ ÐµÐ·Ð¸Ðº (bg)</b>. Just click this text to get redirected.",
						    /* ca */	"none", "This site is also available in <b>CatalÃ  (ca)</b>. Just click this text to get redirected.",
						    /* ca-XV */	"none", "This site is also available in <b>CatalÃ  (ValenciÃ  RACV) (ca-XV)</b>. Just click this text to get redirected.",
						    /* ca-XR */	"none", "This site is also available in <b>CatalÃ  (ValenciÃ  AVL) (ca-XR)</b>. Just click this text to get redirected.",
						    /* zh-CN */	"none", "This site is also available in <b>ç®€ä½“ä¸­æ–‡ (zh-CN)</b>. Just click this text to get redirected.",
						    /* zh-TW */	"none", "This site is also available in <b>æ­£é«”ä¸­æ–‡ (zh-TW)</b>. Just click this text to get redirected.",
						    /* cs */	"none", "This site is also available in <b>ÄŒeÅ¡tina (cs)</b>. Just click this text to get redirected.",
						    /* da */	"soft", "Denne side er ogsÃ¥ tilgÃ¦ngelig pÃ¥ <b>Dansk (da)</b>. Bare klik pÃ¥ teksten for at blive omdirigeret.",
						    /* nl */	"none", "This site is also available in <b>Nederlands (nl)</b>. Just click this text to get redirected.",
						    /* en-GB */	"none", "This site is also available in <b>English (en-GB)</b>. Just click this text to get redirected.",
						    /* en-US */	"none", "This site is also available in <b>English (en-US)</b>. Just click this text to get redirected.",
						    /* fi */	"none", "This site is also available in <b>Suomi (fi)</b>. Just click this text to get redirected.",
						    /* fr */	"none", "This site is also available in <b>FranÃ§ais (fr)</b>. Just click this text to get redirected.",
						    /* gl */	"none", "This site is also available in <b>Galego (gl)</b>. Just click this text to get redirected.",
						    /* de */	"soft", "Diese Webseite gibt es auch in <b>Deutsch (de)</b>. Einfach auf diesen Text klicken, um weitergeleitet zu werden.",
						    /* el */	"none", "This site is also available in <b>ÎµÎ»Î»Î·Î½Î¹ÎºÎ¬ (el)</b>. Just click this text to get redirected.",
						    /* he */	"soft", "This site is also available in <b>×¢×‘×¨×™×ª (he)</b>. Just click this text to get redirected.",
						    /* hi */	"none", "This site is also available in <b>à¤¹à¤¿à¤¨à¥à¤¦à¥€ (hi)</b>. Just click this text to get redirected.",
						    /* hu */	"none", "This site is also available in <b>Magyar (hu)</b>. Just click this text to get redirected.",
						    /* it */	"soft", "Questo sito Ã¨ disponibile anche in <b>Italiano (it)</b>. Fare clic qui per visualizzare la versione italiana.",
						    /* ja */	"none", "This site is also available in <b>æ—¥æœ¬èªž (ja)</b>. Just click this text to get redirected.",
						    /* km */	"none", "This site is also available in <b>áž—áž¶ážŸáž¶ážáŸ’áž˜áŸ‚ážš (km)</b>. Just click this text to get redirected.",
						    /* ko */	"soft", "ì´ ì›¹ì‚¬ì´íŠ¸ëŠ” <b>í•œêµ­ì–´(ko)</b>ë¡œë„ ì´ìš©í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤. ì—¬ê¸°ë¥¼ í´ë¦­í•˜ë©´ í•œêµ­ì–´ ì›¹ì‚¬ì´íŠ¸ë¡œ ì´ë™í•©ë‹ˆë‹¤.",
						    /* lt */	"hard", "SpustelÄ—jus laukelÄ¯, tinklalapÄ¯ bus galima skaityti <b>lietuviÅ¡kai</b>.",
						    /* no */	"soft", "Dette nettstedet er ogsÃ¥ tilgjengelig pÃ¥ <b>norsk (no)</b>. Klikk denne teksten for Ã¥ bli videresendt.",
						    /* pl */	"soft", "Ta strona jest dostÄ™pna po <b>Polsku (pl)</b>. Po prostu kliknij ten tekst aby tam przejÅ›Ä‡.",
						    /* pt-BR */	"none", "Este site tambÃ©m estÃ¡ disponÃ­vel em <b>PortuguÃªs [do Brasil] (pt-BR)</b>. Clique neste texto para ser redirecionado.",
						    /* pt */	"soft", "Este site tambÃ©m estÃ¡ disponÃ­vel em <b>PortuguÃªs [Europeu] (pt)</b>. Clique neste texto para ser redirecionado.",
						    /* ru */	"none", "This site is also available in <b>Ð ÑƒÑÑÐºÐ¸Ð¹ (ru)</b>. Just click this text to get redirected.",
						    /* gd */	"none", "This site is also available in <b>GÃ idhlig (gd)</b>. Just click this text to get redirected.",
						    /* sr */	"none", "This site is also available in <b>CÑ€Ð¿ÑÐºÐ¸ [Ñ›Ð¸Ñ€Ð¸Ð»Ð¸Ñ†Ð¾Ð¼] (sr)</b>. Just click this text to get redirected.",
						    /* sk */	"none", "This site is also available in <b>SlovenskÃ½ jazyk [slovenÄina] (sk)</b>. Just click this text to get redirected.",
						    /* sl */	"none", "This site is also available in <b>Slovenski jezik [slovenÅ¡Äina] (sl)</b>. Just click this text to get redirected.",
						    /* es */	"none", "This site is also available in <b>EspaÃ±ol (es)</b>. Just click this text to get redirected.",
						    /* sv */	"soft", "Denna webbplats finns ocksÃ¥ pÃ¥ <b>Svenska (sv)</b>. Klicka bara pÃ¥ den hÃ¤r texten fÃ¶r att bli omdirigerad.",
						    /* ta */	"none", "This site is also available in <b>à®¤à®®à®¿à®´à¯ (ta)</b>. Just click this text to get redirected.",
						    /* th */	"none", "This site is also available in <b>à¸ à¸²à¸©à¸²à¹„à¸—à¸¢ (th)</b>. Just click this text to get redirected.",
						    /* tr */	"soft", "Bu site ayrÄ±ca <b>TÃ¼rkÃ§e (tr)</b> olarak mevcuttur. Yeniden yÃ¶nlendirilmek iÃ§in sadece bu metine tÄ±klayÄ±n.",
						    /* vi */	"none", "This site is also available in <b>Tiáº¿ng Viá»‡t (vi)</b>. Just click this text to get redirected." ];


                            var language = navigator.languages && navigator.languages[0] || // Chrome / Firefox
                            navigator.language ||   // All browsers
                            navigator.userLanguage; // IE <= 10
             
             console.log(language);
















































// start dl

/* This file is to maintain version information that can be used on all websites via JavaScript when including this file.
 *
 * Instead of hard coded version data please use these variables. Example:
 *
 * Wrong:   "We are proud to announce the availability of the new Apache OpenOffice 4.1.0 release."
 * Correct: "We are proud to announce the availability of the new Apache OpenOffice " + VERSION + " release."
 *
 * VERSION: Set the release version (e.g., "4.1.0") that is currently on the mirrors.
 */

// Stable release: Object that contains all following properties.
var DL = new Object();

// Stable release: General properties.
DL.VERSION			= "4.1.6";		// Release version in full format "x.y.z".
DL.VERSION_SHORT		= DL.VERSION;		// Release version in short format "x.y".
DL.MILESTONE			= "AOO416m1";		// Milestone ID (from AOO build system).
DL.BUILD			= "9790";		// Build ID (from AOO build system).
DL.SVN_REV			= "r1844436";		// SVN revision.
DL.REL_DATE			= "2018-Nov-18";	// Date of the public announced release.
DL.PREV_VERSION			= "4.1.5";		// Release of the previous version.
DL.OLDVERSION			= "3.4.1";		// Old version (last stable release of 3.x series).
DL.LEGACYVERSION		= "3.3.0";		// Old legacy version (last stable none-Apache release).

// Version can be written as "x.y" instead of "x.y.z" if z is 0.
// Example: If DL.VERSION is "4.1.0", then DL.VERSION_SHORT is "4.1".
// If last char ( 4 to 5 ) of DL.VERSION === 0 then assign only the first 3 chars ( 0 to 3 ) to DL.VERSION_SHORT.
if ( DL.VERSION.slice( 4, 5 ) === "0" )
	DL.VERSION_SHORT = DL.VERSION.substring( 0, 3 );

// Data for the <select> element "os".
				    // Value  Visible text				Not used for the options
DL.SEL_OS			= [ "win32",  "Windows (EXE)",			    	".exe",
				    "lnx64d", "Linux 64-bit (x86-64) (DEB)",	    	".tar.gz",
				    "lnx64r", "Linux 64-bit (x86-64) (RPM)",	    	".tar.gz",
				    "lnx32d", "Linux 32-bit (x86) (DEB)",	    	".tar.gz",
				    "lnx32r", "Linux 32-bit (x86) (RPM)",	    	".tar.gz",
				    "mac64",  "OS X (version >= 10.7) (DMG)",	    	".dmg",
				    "mac32",  "OS X (version <= 10.6) (DMG)",	    	".dmg",
				    "other",  "More platforms / operating systems",	"" ];

// Data for the <select> element "lang".
				    // Value  Visible text				Tool tip
DL.SEL_LANG			= [ "ast",    "Asturian",				"Asturianu",
				    "eu",     "Basque",					"Euskara",
				    "bg",     "Bulgarian",				"Ð±ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸ ÐµÐ·Ð¸Ðº",
				    "ca",     "Catalan",				"CatalÃ ",
				    "ca-XV",  "Catalan [Valencia AVL]",			"ValÃ¨ncia (AVL)",
				    "ca-XR",  "Catalan [Valencia RACV]",		"ValÃ¨ncia (RACV)",
				    "zh-CN",  "Chinese [simplified]",			"ç®€ä½“ä¸­æ–‡",
				    "zh-TW",  "Chinese [traditional]",			"æ­£é«”ä¸­æ–‡",
				    "cs",     "Czech",					"ÄŒeÅ¡tina",
				    "da",     "Danish",					"Dansk",
				    "nl",     "Dutch",					"Nederlands",
				    "en-GB",  "English [British]",			"English [British]",
				    "en-US",  "English [US]",				"English [US]",
				    "fi",     "Finnish",				"Suomi",
				    "fr",     "French",					"FranÃ§ais",
				    "gl",     "Galician",				"Galego",
				    "de",     "German",					"Deutsch",
				    "el",     "Greek",					"ÎµÎ»Î»Î·Î½Î¹ÎºÎ¬",
				    "he",     "Hebrew",					"×¢×‘×¨×™×ª",
				    "hi",     "Hindi",					"à¤¹à¤¿à¤¨à¥à¤¦à¥€",
				    "hu",     "Hungarian",				"Magyar",
				    "it",     "Italian",				"Italiano",
				    "ja",     "Japanese",				"æ—¥æœ¬èªž",
				    "km",     "Khmer",					"áž—áž¶ážŸáž¶ážáŸ’áž˜áŸ‚ážš",
				    "ko",     "Korean",					"í•œêµ­ì–´",
				    "lt",     "Lithuanian",				"LietuviÅ³",
				    "nb",     "Norwegian [Bokmal]",			"Norsk [BokmÃ¥l]",
				    "pl",     "Polish",					"Polski",
				    "pt-BR",  "Portuguese [Brazilian]",			"PortuguÃªs [do Brasil]",
				    "pt",     "Portuguese [European]",			"PortuguÃªs [Europeu]",
				    "ru",     "Russian",				"Ð ÑƒÑÑÐºÐ¸Ð¹",
				    "gd",     "Scottish [Gaelic]",			"GÃ idhlig",
				    "sr",     "Serbian [Cyrillic]",			"CÑ€Ð¿ÑÐºÐ¸ [Ñ›Ð¸Ñ€Ð¸Ð»Ð¸Ñ†Ð¾Ð¼]",
				    "sk",     "Slovak",					"SlovenskÃ½ jazyk [slovenÄina]",
				    "sl",     "Slovenian",				"Slovenski jezik [slovenÅ¡Äina]",
				    "es",     "Spanish",				"EspaÃ±ol",
				    "sv",     "Swedish",				"Svenska",
				    "ta",     "Tamil",					"à®¤à®®à®¿à®´à¯",
				    "th",     "Thai",					"à¸ à¸²à¸©à¸²à¹„à¸—à¸¢",
				    "tr",     "Turkish",				"TÃ¼rkÃ§e",
				    "vi",     "Vietnamese",				"Tiáº¿ng Viá»‡t" ];

// Data for the <select> element "ver".
				    // Value  Visible text
DL.SEL_VER			= [ "4.1.6",  "4.1.6",
				    "4.1.5",  "4.1.5",
				    "4.1.4",  "4.1.4",
				    "4.1.3",  "4.1.3",
				    "4.1.2",  "4.1.2",
				    "4.1.1",  "4.1.1",
				    "4.1.0",  "4.1.0",
				    "4.0.1",  "4.0.1",
				    "4.0.0",  "4.0.0",
				    "3.4.1",  "3.4.1",
				    "older",  "Older releases" ];

// Base URLs to the Sourceforge and Apache mirror server.
DL.SF				= "https://sourceforge.net/projects/openofficeorg.mirror/files/";
DL.ASF				= "https://www.apache.org/dyn/aoo-closer.cgi/openoffice/";
DL.ASF_DIST			= "https://www.apache.org/dist/openoffice/";
DL.ASF_ARC			= "https://archive.apache.org/dist/openoffice/";

// Only used in "download_other.js".
DL.REL_PLATFORM			= [ "Win_x86", "Linux_x86_rpm", "Linux_x86_deb", "Linux_x86-64_rpm", "Linux_x86-64_deb",
				    "MacOS_x86-64" ];
DL.REL_FULL_LANG		= [ "ast", "bg", "ca", "ca-XV", "ca-XR", "cs", "da", "de", "el", "en-GB", "en-US", "es",
				    "eu", "fi", "fr", "gd", "gl", "he", "hi", "hu", "it", "ja", "km", "ko", "lt", "nb",
				    "nl", "pl", "pt", "pt-BR", "ru", "sk", "sl", "sr", "sv", "ta", "th", "tr", "vi",
				    "zh-CN", "zh-TW" ];
DL.REL_LP_LANG			= [ "ast", "bg", "ca", "ca-XV", "ca-XR", "cs", "da", "de", "el", "en-GB", "en-US", "es",
				    "eu", "fi", "fr", "gd", "gl", "he", "hi", "hu", "it", "ja", "km", "ko", "lt", "nb",
				    "nl", "pl", "pt", "pt-BR", "ru", "sk", "sl", "sr", "sv", "ta", "th", "tr", "vi",
				    "zh-CN", "zh-TW" ];
DL.REL_SDK_LANG			= [ "en-US" ]

// The maximal number of available languages in "download_other.js".
DL.LANG_MAX			= 133;

// Beta release: Object that contains all general properties.
var DL_BETA = new Object();

// Beta Release: General properties.
DL_BETA.VERSION			= "4.1.0-beta";
DL_BETA.NAME			= "4.1.0 Beta";
DL_BETA.MILESTONE		= "AOO410m14";
DL_BETA.BUILD			= "9760";
DL_BETA.SVN_REV			= "r1573601";
DL_BETA.REL_DATE		= "2014-Mar-10";
DL_BETA.ACTIVE			= -1;		// 1 = activate download, 0 = display "coming soon", -1 = display nothing

// Only used in "all_beta.html".
DL_BETA.PLATFORM		= [ "Win_x86", "Linux_x86_rpm", "Linux_x86_deb", "Linux_x86-64_rpm", "Linux_x86-64_deb",
				    "MacOS_x86-64" ];
DL_BETA.FULL_LANG		= [ "ast", "bg", "ca", "ca-XV", "ca-XR", "cs", "da", "de", "el", "en-GB", "en-US", "es",
				    "eu", "fi", "fr", "gd", "gl", "he", "hi", "hu", "it", "ja", "km", "ko", "lt", "nb",
				    "nl", "pl", "pt", "pt-BR", "ru", "sk", "sl", "sr", "sv", "ta", "th", "tr", "vi",
				    "zh-CN", "zh-TW" ];
DL_BETA.LP_LANG			= [ "ast", "bg", "ca", "ca-XV", "ca-XR", "cs", "da", "de", "el", "en-GB", "en-US", "es",
				    "eu", "fi", "fr", "gd", "gl", "he", "hi", "hu", "it", "ja", "km", "ko", "lt", "nb",
				    "nl", "pl", "pt", "pt-BR", "ru", "sk", "sl", "sr", "sv", "ta", "th", "tr", "vi",
				    "zh-CN", "zh-TW" ];
DL_BETA.SDK_LANG		= [ "en-US" ];

// Base URLs to the Sourceforge and Apache mirror server.
DL_BETA.SOURCEFORGE		= "https://sourceforge.net/projects/openofficeorg.mirror/files/milestones/" + DL_BETA.VERSION;
DL_BETA.SOURCEFORGE		= DL_BETA.SOURCEFORGE + "/binaries/";
DL_BETA.ASF			= "https://www.apache.org/dyn/aoo-closer.cgi/openoffice/"		   + DL_BETA.VERSION;
DL_BETA.ASF_DIST		= "https://www.apache.org/dist/openoffice/"				   + DL_BETA.VERSION;
DL_BETA.ASF_ARC			= "https://archive.apache.org/dist/openoffice/"				   + DL_BETA.VERSION;

// Debug: Uncomment to use different base URLs.
// var DL.PEOPLE_BASE_URL	= "http://people.apache.org/~marcus/aoo/"				   + DL.VERSION;

DL.RELEASE_MODE			= 1;

DL.LANG_ISO, DL.LANG_SEL, DL.UI_PLATFORM_NO_SUP, DL.PLATFORM_SEL, DL.VERSION_SEL, DL.UI_PLATFORM, DL.PLATFORM,
DL.PLATFORM_FULL, DL.PLATFORM_LP, DL.RELEASE_PLATFORM, DL.RELEASE_LANG, DL.REL_TEXT, DL.REL_NOTES, DL.FILENAME_FULL,
DL.FILENAME_LP, DL.EXTENSION, DL.SOURCEFORGE_BASE_URL, DL.SOURCEFORGE_PREV_URL, DL.ASF_ARC_BASE_URL, DL.ASF_ARC_PREV_URL,
DL.ASF_WIKI_URL, DL.LINK_FULL, DL.LINK_LP, DL.LINK_CHK_KEYS, DL.LINK_CHK_ASC_FULL, DL.LINK_CHK_MD5_FULL,
DL.LINK_CHK_SHA256_FULL, DL.LINK_CHK_ASC_LP, DL.LINK_CHK_MD5_LP,
DL.LINK_CHK_SHA256_LP		= "";

DL.RELEASE_PLATFORM_POS_FULL, DL.RELEASE_PLATFORM_POS_LP, DL.FILESIZE_FULL,
DL.FILESIZE_LP			= -1;

DL.SHOW_SUB_BOX			= true;
DL.ERROR			= false;
DL.ID_SUB_BOX			= "";
DL.ID_LINKS			= "";



             /*
 * Overview of all methods (functions) of the global object "DL"
 * -------------------------------------------------------------
 * function DL.init			( release_mode )
 * function DL.initVariables		( init_all )
 * function DL.getLanguage		()
 * function DL.fillOSSelection		()
 * function DL.fillLanguageSelection	()
 * function DL.fillVersionSelection	()
 * function DL.getOSSelection		()
 * function DL.getLanguageSelection	()
 * function DL.getVersionSelection	()
 * function DL.setOSSelection		()
 * function DL.setLanguageSelection	()
 * function DL.setVersionSelection	()
 * function DL.hideElements		()
 * function DL.showWindow		( target_link )
 * function DL.showErrorMessage		( error_text )
 * function DL.isLanguageSupported	()
 * function DL.checkForLinkExceptions	()
 * function DL.getLinkSelection		()
 * function DL.getPlatform		()
 * function DL.getReleaseMatrixPosition	()
 * function DL.getFileData		()
 * function DL.debug			( location )
 *
 * Overview of global functions
 * ----------------------------------------------------
 * function openItem			( itemid, uri )
 */

/*
 * Init function
 * @param:  release_mode - The release mode (stable, beta, etc.) that the scriping should work with
 * @return: None
 */
DL.init = function( release_mode ) {
	// Set global variables.
	DL.initVariables( 1 );

	// Fill the OS, language and version select boxes.
	DL.fillOSSelection();
	DL.fillLanguageSelection();
	DL.fillVersionSelection();

	// Get the language and platform from the browser data.
	DL.getLanguage();
	DL.getPlatform();

	// Set the recognized platform and language as default.
	DL.setOSSelection();
	DL.setLanguageSelection();
	DL.setVersionSelection();
	
	// When release mode = 2, it is a beta release. Otherwise assume "stable release" as default.
	if( release_mode === 2 ) {
		DL.RELEASE_MODE = mode;
	}

	DL.getLinkSelection();

	return;
}

/*
 * Define all global variables with default values
 * @param:  init_all - Should all variables initialized or just a part?
 * @return: None
 */
DL.initVariables = function( init_all ) {
	// Define variables without "var" to make them globally available.
	// The following are used in "download.js". and "index.html".

	// All elements with ID in the sub-box.
	DL.ID_SUB_BOX = [ "dl_rel_info", "dl_f_info", "dl_f_chk_keys", "space1", "dl_f_chk_asc", "space2", "dl_f_chk_sha256", "space3",
	"dl_f_chk_sha512", "space4", "dl_f_chk_md5", "dl_lp_info", "dl_lp_chk_keys", "space5", "dl_lp_chk_asc", "space6", "dl_lp_chk_sha256",
	"space7", "dl_lp_chk_sha512", "space8", "dl_lp_chk_md5", "dl_hlp_img", "dl_hlp", "dl_chk_img", "dl_chk", "dl_rpt_img",
	"dl_rpt" ];

	// All elements with ID in the box and sub-box that have a link.
	DL.ID_LINKS = [ "dl_f_link", "dl_lp_link", "dl_rel_notes", "dl_f_chk_keys", "dl_f_chk_asc", "dl_f_chk_sha256", "dl_f_chk_sha512",
	"dl_f_chk_md5", "dl_lp_chk_keys", "dl_lp_chk_asc", "dl_lp_chk_sha256", "dl_lp_chk_sha512", "dl_lp_chk_md5", "dl_hlp", "dl_chk",
	"dl_rpt" ];

	// The following are used in "download.js" only.

	// All global variables.
	if( init_all === 1 ) {
		DL.RELEASE_MODE		= 1;	 // The release mode (1 = stable release (default), 2 = beta release, etc.).
		DL.LANG_ISO		= "";	 // The language as ISO code.
		DL.LANG_SEL		= "";	 // The selected language as ISO code from select box.
		DL.UI_PLATFORM_NO_SUP	= "";	 // The platform as readable string, if not supported.
		DL.PLATFORM_SEL		= "";	 // The selected platform from select box.
		DL.VERSION_SEL		= "";	 // The selected version from select box.
		DL.VERSION_SEL_RAW	= "";	 // The selected version from select box without dots.
	}

	DL.UI_PLATFORM			= "";	 // The platform as readable string.
	DL.PLATFORM			= "";	 // The platform in short form.
	DL.PLATFORM_FULL		= "";	 // The platform as part of the download URL (full install).
	DL.PLATFORM_LP			= "";	 // The platform as part of the download URL (langpack).
	DL.RELEASE_PLATFORM_POS_FULL	= -1;	 // The position of the platform in the release matrix array (full install).
	DL.RELEASE_PLATFORM_POS_LP	= -1;	 // The position of the platform in the release matrix array (langpack).
	DL.RELEASE_PLATFORM		= "";	 // The platform in the release matrix array.
	DL.RELEASE_LANG			= "";	 // The language specific data depending on LANG_ISO.
	DL.REL_TEXT			= "";	 // The release data (milestone, build ID, svn rev, release date).
	DL.REL_NOTES			= "";	 // The complete URL for the release notes (depends on version).
	DL.FILENAME_FULL		= "";	 // The complete filename of the download URL (full install).
	DL.FILENAME_LP			= "";	 // The complete filename of the download URL (langpack).
	DL.FILESIZE_FULL		= -1;	 // The filesize of the download file (full install).
	DL.FILESIZE_LP			= -1;	 // The filesize of the download file (langpack).
	DL.EXTENSION			= "";	 // The file extension of the download URL.
	DL.INSTALL_EXTENSION		= "";	 // The file extension of the installation.
	DL.SF_BASE_URL			= "";	 // The base URL for all binary files on Sourceforge.
	DL.SF_PREV_URL			= "";	 // The base URL for all binary files (prev. version) on Sourceforge.
	DL.ASF_ARC_BASE_URL		= "";	 // The base URL for all checksum files on Apache Archive server.
	DL.ASF_ARC_PREV_URL		= "";	 // The base URL for all checksum files (prev. version) on Apache Archive server.
	DL.ASF_WIKI_URL			= "";	 // The base URL for all release notes on Apache Wiki.
	DL.LINK_FULL			= "";	 // The complete download URL (full install).
	DL.LINK_LP			= "";	 // The complete download URL (langpack).
	DL.LINK_CHK_KEYS		= "";	 // The KEYS file as download URL.
	DL.LINK_CHK_ASC_FULL		= "";	 // The ASC file as download URL (full install).
	DL.LINK_CHK_SHA256_FULL		= "";	 // The SHA256 file as download URL (full install).
	DL.LINK_CHK_SHA512_FULL		= "";	 // The SHA512 file as download URL (full install).
	DL.LINK_CHK_MD5_FULL		= "";	 // The MD5 file as download URL (full install).
	DL.LINK_CHK_ASC_LP		= "";	 // The ASC file as download URL (langpack).
	DL.LINK_CHK_SHA256_LP		= "";	 // The SHA256 file as download URL (langpack).
	DL.LINK_CHK_SHA512_LP		= "";	 // The SHA512 file as download URL (langpack).
	DL.LINK_CHK_MD5_LP		= "";	 // The MD5 file as download URL (langpack).
	DL.SHOW_SUB_BOX			= true;	 // Is the download URL OK to show the sub-box (true) or not (false)?
	DL.ERROR			= false; // Is the download URL in general OK (false) or not (true)?

	// Check if all option names in the selection box for languages are localized.
	// If the first string in the array element is larger than 0, assume all are localized and should be used.
	// Otherwise use the default names.
	if ( l10n.dl_green_box_select_box_lang_values_custom[ 0 ].length > 0 ) {
		DL.SEL_LANG = l10n.dl_green_box_select_box_lang_values_custom;
	}

	return;
}

/*
 * Get array and ISO code for language
 * @param:  None
 * @return: DL.LANG_ISO - The language as ISO code
 */
DL.getLanguage = function() {
	var language = "";

	// If available, use the manual set ISO code (see "index.html") that overrides $LANG_ISO.
	if( DL.NL_LANG !== "" ) {
		language = DL.NL_LANG;

	// Else if available, use the selected language from select box.
	} else if( DL.LANG_SEL !== "" ) {
		language = DL.LANG_SEL;

	// Else try to recognize the language from browser data.
	} else if( navigator.language ) {
		language = navigator.language;
	} else if( navigator.userLanguage ) {
		language = navigator.userLanguage;
	} else if( navigator.browserLanguage ) {
		language = navigator.browserLanguage;
	} else if( navigator.systemLanguage ) {
		language = navigator.systemLanguage;
	}

	// Assign "en-US" as fall-back language if only "en" is set or nothing at all.
	if( !language || language === "" || language == null || language === "en" ) {
		language = "en-US";
	}
/*
	// Assign "pt-PT" if only "pt" is set.
	if( language === "pt" ) {
		language = "pt-PT";
	}
*/
	// Konqueror uses '_' where other browsers use '-'.
	if( language.indexOf( "_" ) !== -1 ) {
		// Change a contained '_' into a '-'.
		language = language.split( "_" ).join( "-" );
	}

	language		= language.toLowerCase();		// Change the language into lower case.
	var languageCode	= language.split( "-" )[ 0 ];		// Part before "-" is the language code.
	var regionCode		= language.split( "-" )[ 1 ];		// Part behind "-" is the region code.
	var thisLanguageSet	= DL.language_matrix[ languageCode ];	// Assign complete lang data of the lang code.

	if( thisLanguageSet == null ) {
		// Assign "en-US" when the language code was not found inside array.
		language	= "en-US";
		languageCode	= "en";
		regionCode	= "us";
		thisLanguageSet	= DL.language_matrix[ languageCode ];
	}

	if( regionCode != null ) {
/*
		// Fix for Portuguese (European) downloads as they are named only "pt" without region code!
		if( languageCode === "pt" && regionCode === "pt" ) {
			language = languageCode;
		}
*/
		// If an additional region code was found.
		if( thisLanguageSet[ regionCode ] != null ) {
			// Assign langCode-regionCode.
			language     = languageCode + "-" + regionCode.toUpperCase();
			thisLanguage = thisLanguageSet[ regionCode ];
		} else {
			// Choose the default languageCode.
			var thisLanguage = thisLanguageSet[ "-" ];
			if( languageCode === "en" ) {
				// Special case: If language code is "en" then assign "en-US" for all "en-XX" cases.
				language	= "en-US";
				regionCode	= "us";
				thisLanguageSet	= DL.language_matrix[ languageCode ];
				thisLanguage	= thisLanguageSet[ regionCode ];
			} else {
				// Else assign the language code as language.
				language	= languageCode;
			}
		}
	} else {
		// Choose the default for none given region code.
		thisLanguage = thisLanguageSet[ "-" ];
	}

	DL.LANG_ISO = language;
	return DL.LANG_ISO;
}

/*
 * Set values into the <select> element for OS (select box)
 * @param:  None
 * @return: None
 */
DL.fillOSSelection = function() {
	var selection = document.getElementById( "os" );
	var option    = "";

	// Fill the <select> element until all OS's are used.
	for( var i = 0, j = DL.SEL_OS.length; i < j; i = i + 3 ) {
		option	     = document.createElement( "option" );
		// Assign the platform abbreviation as index value.
		option.value = DL.SEL_OS[ i ];
		// Assign the UI platform name.
		option.text  = DL.SEL_OS[ i + 1 ];
		// Add the new option to the already existing ones.
		selection.appendChild( option );
	}

	// Check if the option names are localized. 
	// If the first string in the array element is larger than 0, assume all are localized and should be used.
	if ( l10n.dl_green_box_select_box_os_values[ 0 ].length > 0 ) {
		// Search through the localized names.
		for( i = 0, j = l10n.dl_green_box_select_box_os_values.length; i < j; i++ ) {
			// Exchange the English UI platform name with the localized one.
			selection.options[ i ].text = l10n.dl_green_box_select_box_os_values[ i ];
		}
	}

	return;
}

/*
 * Set values into the <select> element for language (select box)
 * @param:  None
 * @return: None
 */
DL.fillLanguageSelection = function() {
	var selection = document.getElementById( "language" );
	var option    = "";

	// Fill the <select> element until all languages are used.
	for( var i = 0, j = DL.SEL_LANG.length; i < j; i = i + 3 ) {
		option       = document.createElement( "option" );
		// Assign the language ISO code as index value.
		option.value = DL.SEL_LANG[ i ];
/*
		// Assign the language ISO code as title.
		option.title = DL.SEL_LANG[ i ];
		// Assign the language name as "English name (Native name)".
		option.text  = DL.SEL_LANG[ i + 1 ];
*/
		// Assign the language name as "English name".
		option.text  = DL.SEL_LANG[ i + 1 ];
		// Assign the language name as "Native name (ISO code)" to show as mouse over title.
		option.title = DL.SEL_LANG[ i + 2 ] + " (" + DL.SEL_LANG[ i ] + ")";
		// Add the new option to the already existing ones.
		selection.appendChild( option );
	}

	// Check if only the option names are localized.
	// If the first string in the array element is larger than 0, assume all are localized and should be used.
	if ( l10n.dl_green_box_select_box_language_values[ 0 ].length > 0 ) {
		// Search through the localized names.
		for( i = 0, j = l10n.dl_green_box_select_box_language_values.length; i < j; i++ ) {
			// Exchange the English language name with the localized one.
			selection.options[ i ].text = l10n.dl_green_box_select_box_language_values[ i ];
/*
			alert( "i:              \t\t"	+ i + "\n"
				+ "Localized:	\t"     + l10n.dl_green_box_select_box_language_values[ i ]	+ "\n"
				+ "Text:	\t\t"   + selection.options[ i ].text				+ "\n"
				+ "Title:	\t\t"   + selection.options[ i ].title );
*/
		}
	}

	return;
}

/*
 * Set values into the <select> element for version (select box)
 * @param:  None
 * @return: None
 */
DL.fillVersionSelection = function() {
	var selection = document.getElementById( "version" );
	var option    = "";

	// Fill the <select> element until all versions are used.
	for( var i = 0, j = DL.SEL_VER.length; i < j; i = i + 2 ) {
		option       = document.createElement( "option" );
		// Assign the version as index value.
		option.value = DL.SEL_VER[ i ];
		// Assign the UI version.
		option.text  = DL.SEL_VER[ i + 1 ];
		// Add the new option to the already existing ones.
		selection.appendChild( option );
	}

	// Check if the option names are localized. 
	// If the first string in the array element is larger than 0, assume all are localized and should be used.
	if ( l10n.dl_green_box_select_box_version_values[ 0 ].length > 0 ) {
		// Search through the localized names.
		for( i = 0, j = l10n.dl_green_box_select_box_version_values.length; i < j; i++ ) {
			// Exchange the version name with the localized one.
			selection.options[ i ].text = l10n.dl_green_box_select_box_version_values[ i ];
		}
	}

	return;
}

/*
 * Set value in the <select> element for OS (select box)
 * @param:  None
 * @return: DL.PLATFORM_SEL - The platform as short code that was set as selected in the drop-down box
 */
DL.setOSSelection = function() {
	// Depending on $DL.PLATFORM assign the platform string of the release matrix.

	var selection = document.getElementById( "os" );

	// Set the recognized browser platform as default for the select box.
	for( var i = 0, j = DL.SEL_OS.length; i < j; i = i + 3 ) {
		// If the platform was found, set it as pre-selected.
		if( DL.SEL_OS[ i ] === DL.PLATFORM ) {
			selection.selectedIndex = i / 3;
			break;
		}
	}

	// If no selected platform for was set in the select box because it was not recognized from browser data,
	// assign "Windows" as default.
	if( selection.selectedIndex === 0 ) {
		// Default: Assign "Windows".
		for( var i = 0, j = DL.SEL_OS.length; i < j; i = i + 3 ) {
			// If the platform was found, set it as pre-selected.
			if( DL.SEL_OS[ i ] === "win32" ) {
				selection.selectedIndex = i / 3;
				break;
			}
		}
	}

	DL.PLATFORM_SEL = selection.value;
	return DL.PLATFORM_SEL;
}

/*
 * Set value in the <select> element for language (select box)
 * @param:  None
 * @return: DL.LANG_SEL - The language as ISO code that was set as selected in the drop-down box
 */
DL.setLanguageSelection = function() {
	// Depending on $DL.LANG_ISO assign the language position of the release matrix.

	var selection = document.getElementById( "language" );

	// Set the recognized browser language as default for the select box.
	for( var i = 0, j = DL.SEL_LANG.length; i < j; i = i + 3 ) {
		// If the language was found, set it as pre-selected.
		if( DL.SEL_LANG[ i ] === DL.LANG_ISO ) {
			selection.selectedIndex = i / 3;
			break;
		}
	}

	// If the selected language is already the first in the select box and LANG_ISO === "ast" is also true,
	// use "ast" as language.
	if( selection.selectedIndex === 0 && DL.LANG_ISO === "ast" ) {
		// Leave "ast" as selected language and don't change this.
		// Empty by intention.

	} else if( selection.selectedIndex === 0 ) {
	// If no selected language was set in the select box because it was not recognized from browser data,
	// assign "en-US" as default.
		// Default: Assign "en-US".
		for( var i = 0, j = DL.SEL_LANG.length; i < j; i = i + 2 ) {
			// If the language was found, set it as pre-selected.
			if( DL.SEL_LANG[ i ] === "en-US" ) {
				selection.selectedIndex = i / 2;
				break;
			}
		}
	}

	DL.LANG_SEL = selection.value;
	return DL.LANG_SEL;
}

/*
 * Set value in the <select> element for version (select box)
 * @param:  None
 * @return: DL.VERSION_SEL - The version that was set as selected in the drop-down box
 */
DL.setVersionSelection = function() {
	// Depending on $DL.VERSION assign the version.

	var selection = document.getElementById( "version" );

	// Set the value of $DL.VERSION as default for the select box.
	for( var i = 0, j = DL.SEL_VER.length; i < j; i = i + 2 ) {
		// If the version was found, set it as pre-selected.
		if( DL.SEL_VER[ i ] === DL.VERSION ) {
			selection.selectedIndex = i/2;
			break;
		}
	}

	// No need to assign a default version because the propery "DL.VERSION" must always exist.

	DL.VERSION_SEL = selection.value;
	return DL.VERSION_SEL;
}

/*
 * Get values from the <select> element for OS (select box)
 * @param:  None
 * @return: DL.PLATFORM_SEL - The platform as short code that was selected from the drop-down box
 */
DL.getOSSelection = function() {
	var os_value = document[ "download" ]["os" ].options[ document[ "download" ][ "os" ].selectedIndex ].value;

	// Search through the <select> element until the chosen OS is found.
	for( var i = 0, j = DL.SEL_OS.length; i < j; i = i + 3 ) {
		if( DL.SEL_OS[ i ] === os_value ) {
			DL.PLATFORM_SEL = DL.SEL_OS[ i ];
			DL.UI_PLATFORM  = DL.SEL_OS[ i + 1 ];
			DL.EXTENSION    = DL.SEL_OS[ i + 2 ];

			if( DL.UI_PLATFORM.indexOf( "EXE" ) !== -1 ) DL.INSTALL_EXTENSION = "EXE";
			if( DL.UI_PLATFORM.indexOf( "RPM" ) !== -1 ) DL.INSTALL_EXTENSION = "RPM";
			if( DL.UI_PLATFORM.indexOf( "DEB" ) !== -1 ) DL.INSTALL_EXTENSION = "DEB";
			if( DL.UI_PLATFORM.indexOf( "DMG" ) !== -1 ) DL.INSTALL_EXTENSION = "DMG";

			break;
		}
	}

	DL.PLATFORM = DL.PLATFORM_SEL;
	return DL.PLATFORM_SEL;
}

/*
 * Get values from the <select> element for language (select box)
 * @param:  None
 * @return: DL.LANG_SEL - The language as ISO code that was selected from the drop-down box
 */
DL.getLanguageSelection = function() {
	var language_value = document[ "download" ][ "language" ].options[ document[ "download" ][ "language" ].selectedIndex ].value;

	// Search through the <select> element until the chosen language is found.
	for( var i = 0, j = DL.SEL_LANG.length; i < j; i = i + 3 ) {
		if( DL.SEL_LANG[ i ] === language_value ) {
			DL.SEL_LANG = language_value;
			break;
		}
	}

	DL.LANG_ISO = DL.SEL_LANG;
	DL.LANG_SEL = DL.SEL_LANG;
	return DL.SEL_LANG;
}

/*
 * Get values from the <select> element for version (select box)
 * @param:  None
 * @return: DL.VERSION_SEL - The version that was selected from the drop-down box
 */
DL.getVersionSelection = function() {
	var version_value = document[ "download" ][ "version" ].options[ document[ "download" ][ "version" ].selectedIndex ].value;

	// Search through the <select> element until the chosen version is found.
	for( var i = 0, j = DL.SEL_VER.length; i < j; i = i + 2 ) {
		if( DL.SEL_VER[ i ] === version_value ) {
			DL.VERSION_SEL = version_value;
			break;
		}
	}

	// Get the version number without dots (e.g., "413" instead of "4.1.3").
	DL.VERSION_SEL_RAW = DL.VERSION_SEL.replace( /\./g,'' );

	return DL.VERSION_SEL;
}

/*
 * Hide CSS style for all elements with ID to make them invisible
 * @param:  None
 * @return: None
 */
DL.hideElements = function() {
	// Change CSS styles for all elements with ID in the green and sub-green colored boxes.
	// Emtpy the values for all elements, make them invisible.

	for( var i = 0, j = DL.ID_SUB_BOX.length; i < j; i++ ) {
		document.getElementById( DL.ID_SUB_BOX[ i ] ).style.display = "none";
	}

	for( var i = 0, j = DL.ID_LINKS.length; i < j; i++ ) {
		document.getElementById( DL.ID_LINKS[ i ] ).style.display   = "none";
	}

	return;
}

/*
 * Show a popup window
 * @param:  target_link - The URL that should be opened as popup window
 * @return: None
 */
DL.showWindow = function( target_link ) {
	// Open a popup window with specific parameters to show the file from "target_link".

 	var popup_window = "";

	popup_window = window.open( target_link, "_blank", "location=no, menubar=no, resizable=yes, scrollbars=yes, status=no, titlebar=no, toolbar=no, left=100, top=250, width=800, height=550" );
	if (window.focus) {
	    popup_window.focus;
	}

	return;
}

/*
 * Show error message
 * @param:  error_text   - The text should should be shown as error message
 * @return: DL.ERROR - Set the general error flag to "true"
 */
DL.showErrorMessage = function( error_text ) {
	// The chosen items from select boxes lead to no download link, show an error message about reason + alternative.

	// In general, hide the data for link, text and title of all elements.
	DL.hideElements();

	// Now set again the values for all elements that should be shown with changed data.
	//document.getElementById( "dl_f_link"	).style.display	 = "inline";
	document.getElementById( "dl_f_link"	).style.cursor	 = "not-allowed";
	document.getElementById( "dl_f_link"	).href		 = "javascript:void( 0 )";
	document.getElementById( "dl_f_link"	).innerHTML	 = l10n.dl_full_link_error_text;
	document.getElementById( "dl_f_link"	).title		 = l10n.dl_full_link_error_title;
	document.getElementById( "dl_lp_link"	).style.display	 = "inline";
	document.getElementById( "dl_lp_link"	).style.cursor	 = "not-allowed";
	document.getElementById( "dl_lp_link"	).href		 = "javascript:void( 0 )";
	document.getElementById( "dl_lp_link"	).innerHTML	 = l10n.dl_langpack_link_error_text;
	document.getElementById( "dl_lp_link"	).title		 = l10n.dl_langpack_link_error_title;

	document.getElementById( "dl_err_img"   ).src		 = l10n.dl_error_problem_img_src;
	document.getElementById( "dl_err_img"   ).title		 = l10n.dl_error_problem_img_title;
	document.getElementById( "dl_err_img"   ).alt		 = l10n.dl_error_problem_img_alt;
	document.getElementById( "dl_err_img"	).style.display	 = "inline-block";
	document.getElementById( "dl_err"	).innerHTML	 = "<br />" + error_text;
	document.getElementById( "dl_err"	).style.fontSize = "1.2em";
	document.getElementById( "dl_err"	).style.cursor	 = "default";
	document.getElementById( "dl_err"	).style.display	 = "inline-block";

	document.getElementById( "sub_box"	).className	 = "sub-green-sel_error";
	document.getElementById( "sub_box"	).style.display	 = "block";

	// Delete previously set strings to avoid to show them.
	document.getElementById( "dl_rpm_vs_deb" ).style.cursor	= "default";
	document.getElementById( "dl_rpm_vs_deb" ).title	= "";
	document.getElementById( "dl_rpm_vs_deb" ).text		= "";
	
	// Delete previously set strings to get the possibility back to choose a different platform
	// and then to assemble a new download link.
	DL.UI_PLATFORM_NO_SUP	= "";
	DL.SHOW_SUB_BOX		= true;
	DL.ERROR		= true;
	return DL.ERROR;
}

/*
 * Is support flag set for chosen language and version (y/n)?
 * @param:  None
 * @return: DL.ERROR - Depending on if the language is supported set the general error flag to "true" or "false"
 */
DL.isLanguageSupported = function() {
	// Check if the language in "release_matrix.js" is a release language depending on the version.

	// If no VERSION was selected, assume the default version.
	if( DL.VERSION_SEL === undefined || DL.VERSION_SEL === "" ) {
		DL.VERSION_SEL = DL.VERSION;
	}

	// If VERSION != "4.x.y" then exit.
	if( DL.VERSION_SEL === "3.4.1" || DL.VERSION_SEL === "older" || DL.VERSION_SEL === "other" ) {
		DL.ERROR = false;
		return false;
	}

	// Assign the language data of the selected version depending on the ISO code.
	// Generate variable name: release_matrix_ + version number without dots (e.g., "413" instead of "4.1.3").
	DL.RELEASE_LANG = DL[ "release_matrix_" + DL.VERSION_SEL_RAW ][ DL.LANG_ISO ][ 0 ];

	// If the flag = 'y' then the language is supported, otherwise not.
	if( DL.RELEASE_LANG[ 3 ] === 'y' ) {
		DL.ERROR = false;
		return true;
	} else {
		DL.ERROR = true;
		return false;
	}
}

/*
 * Check links that should be assembled in getLinkSelection() for expections that do not lead to real download links
 * @param:  None
 * @return: None
 */
DL.checkForLinkExceptions = function() {
	// If recognized resp. selected platform, language or version does not lead to a normal download link,
	// show the none-availability to the user.

	DL.SHOW_SUB_BOX	= true;
	DL.ERROR	= false;

	// If language is not supported, show the none-availability to the user.
	if( ! DL.isLanguageSupported() ) {
		// Show an error message that the chosen items do not lead to a download.

		// If a customized string is not available in the "msg_prop_l10n_XX.js" file.
		if( l10n.dl_error_custom_4_text === "" ) {
			// Show the default error text.
			var error_text = "<b>" + l10n.dl_error_problem_text + "</b>"
					+ l10n.dl_error_aoo_text + DL.VERSION_SEL
					+ l10n.dl_error_not_available_for_text
					+ "<b>" + DL.RELEASE_LANG[ 1 ]
					+ " (" + DL.RELEASE_LANG[ 2 ] + ") (" + DL.LANG_SEL + ")</b>."
					+ "<br />"
					+ "<b>" + l10n.dl_error_solution_text + "</b>"
					+ l10n.dl_error_please_select_4_text;
		} else {
			// Show the customized error text.
			var error_text = l10n.dl_error_custom_4_text;
		}

		DL.showErrorMessage( error_text );
	}

	// If the browser-guessed platform is not supported, show the none-availability to the user.
	if( DL.UI_PLATFORM_NO_SUP !== "" ) {
		// Show an error message that the chosen items do not lead to a download.

		// If a customized string is not available in the "msg_prop_l10n_XX.js" file.
		if( l10n.dl_error_custom_3_text === "" ) {
			// Show the default error text.
			var error_text = "<b>" + l10n.dl_error_problem_text + "</b>"
					+ l10n.dl_error_aoo_text + DL.VERSION_SEL
					+ l10n.dl_error_not_available_for_text
					+ "<b>" + DL.UI_PLATFORM_NO_SUP + "</b>."
					+ "<br />"
					+ "<b>" + l10n.dl_error_solution_text + "</b>"
					+ l10n.dl_error_please_select_3_text;
		} else {
			// Show the customized error text.
			var error_text = l10n.dl_error_custom_3_text;
		}

		DL.showErrorMessage( error_text );
	}

	// If version is '4.1.0' (or newer) and platform is 'Mac OS X <= 10.6', show the none-availability to the user.
	if( ( DL.VERSION_SEL === "4.1.6" || DL.VERSION_SEL === "4.1.5" || DL.VERSION_SEL === "4.1.4" || DL.VERSION_SEL === "4.1.3" || DL.VERSION_SEL === "4.1.2" || DL.VERSION_SEL === "4.1.1" || DL.VERSION_SEL === "4.1.0" ) && DL.PLATFORM === "mac32" ) {
		// Show an error message that the chosen items do not lead to a download.

		// If a customized string is not available in the "msg_prop_l10n_XX.js" file.
		if( l10n.dl_error_custom_1_text === "" ) {
			// Show the default error text.
			var error_text = "<b>" + l10n.dl_error_problem_text + "</b>"
					+ l10n.dl_error_aoo_text + DL.VERSION_SEL
					+ l10n.dl_error_not_available_for_text
					+ "<b>" + DL.UI_PLATFORM + "</b>."
					+ "<br />"
					+ "<b>" + l10n.dl_error_solution_text + "</b>"
					+ l10n.dl_error_please_select_1_text;
		} else {
			// Show the customized error text.
			var error_text = l10n.dl_error_custom_1_text;
		}

		DL.showErrorMessage( error_text );
	}

	// If version is '4.0.1' (or older) and platform is 'Mac OS X >= 10.7', show the none-availability to the user.
	if( ( DL.VERSION_SEL === "4.0.1" || DL.VERSION_SEL === "4.0.0" ) && DL.PLATFORM === "mac64" ) {
		// Show an error message that the chosen items do not lead to a download.

		// If a customized string is not available in the "msg_prop_l10n_XX.js" file.
		if( l10n.dl_error_custom_2_text === "" ) {
			// Show the default error text.
			var error_text = "<b>" + l10n.dl_error_problem_text + "</b>"
					+ l10n.dl_error_aoo_text + DL.VERSION_SEL
					+ l10n.dl_error_not_available_for_text
					+ "<b>" + DL.UI_PLATFORM + "</b>."
					+ "<br />"
					+ "<b>" + l10n.dl_error_solution_text + "</b>"
					+ l10n.dl_error_please_select_2_text;
		} else {
			// Show the customized error text.
			var error_text = l10n.dl_error_custom_2_text;
		}

		DL.showErrorMessage( error_text );
	}

	// If version is '3.4.1', create a download link that leads to the "other-3.4.1.html" webpage.
	if( DL.VERSION_SEL === "3.4.1" ) {
		// In general, hide the data for link, text and title of all elements.
		DL.hideElements();

		// Set the values for the single download text button.
		document.getElementById( "dl_f_link"	).href		= l10n.dl_aoo341_link;
		document.getElementById( "dl_f_link"	).innerHTML	= l10n.dl_full_link_archive_text;
		document.getElementById( "dl_f_link"	).title		= l10n.dl_full_link_archive_title;
		document.getElementById( "dl_f_link"	).style.cursor	= "pointer";
		//document.getElementById( "dl_f_link"	).style.display = "inline";
		document.getElementById( "dl_lp_link"	).style.display = "none";
		document.getElementById( "sub_box"	).style.display = "none";

		DL.SHOW_SUB_BOX = false;
	}

	// If platform is 'other', create a download link that leads to the Porting webpage.
	if( DL.PLATFORM_SEL === "other" ) {
		// In general, hide the data for link, text and title of all elements.
		DL.hideElements();

		// Set the values for the single download text button.
		document.getElementById( "dl_f_link"	).href		= l10n.dl_porting_link;
		document.getElementById( "dl_f_link"	).innerHTML	= l10n.dl_full_link_porting_text;
		document.getElementById( "dl_f_link"	).title		= l10n.dl_full_link_porting_title;
		document.getElementById( "dl_f_link"	).style.cursor	= "pointer";
		//document.getElementById( "dl_f_link"	).style.display = "inline";
		document.getElementById( "dl_lp_link"	).style.display = "none";
		document.getElementById( "sub_box"	).style.display = "none";

		DL.SHOW_SUB_BOX = false;
	}

	// If version is 'older', create a download link that leads to the archive webpage.
	if( DL.VERSION_SEL === "older" ) {
		// In general, hide the data for link, text and title of all elements.
		DL.hideElements();

		// Set the values for the single download text button.
		document.getElementById( "dl_f_link"	).href		= l10n.dl_archive_link;
		document.getElementById( "dl_f_link"	).innerHTML	= l10n.dl_full_link_archive_text;
		document.getElementById( "dl_f_link"	).title		= l10n.dl_full_link_archive_title;
		document.getElementById( "dl_f_link"	).style.cursor	= "pointer";
		//document.getElementById( "dl_f_link"	).style.display = "inline";
		document.getElementById( "dl_lp_link"	).style.display = "none";
		document.getElementById( "sub_box"	).style.display = "none";

		DL.SHOW_SUB_BOX = false;
	}

	return;
}

/*
 * Get link to mirror system for download file and checksum file
 * @param:  None
 * @return: None
 */
DL.getLinkSelection = function() {
	// Reset all variables that could have been set until now.
	DL.initVariables( 0 );

	// Get the selected data from the select boxes.
	DL.getOSSelection();
	DL.getLanguageSelection();
	DL.getVersionSelection();

	// First check for expections that do not lead to real download links.
	DL.checkForLinkExceptions();

	// If the selected options lead to no download URL, should the sub-box shown anyway?
	// Yes when SHOW_SUB_BOX = "true" and ERROR = "false".
	if( DL.SHOW_SUB_BOX && ! DL.ERROR ) {
		// Assemble the filenames and text for download and checksums.

		DL.getReleaseMatrixPosition();
		DL.getFileData();

		DL.SF_BASE_URL		= DL.SF      + DL.VERSION_SEL + "/binaries/";
		DL.ASF_ARC_BASE_URL     = DL.ASF_ARC + DL.VERSION_SEL;

		// Assign the download links: Base link + language + file name.
		DL.LINK_FULL		= DL.SF_BASE_URL		     + DL.LANG_SEL + "/" + DL.FILENAME_FULL + "/download";
		DL.LINK_LP		= DL.SF_BASE_URL		     + DL.LANG_SEL + "/" + DL.FILENAME_LP   + "/download";

		// Assign the checksum links: Base link + language + file name.
		DL.LINK_CHK_KEYS	= DL.ASF_DIST + "KEYS";
		DL.LINK_CHK_ASC_FULL    = DL.ASF_ARC_BASE_URL + "/binaries/" + DL.LANG_SEL + "/" + DL.FILENAME_FULL + ".asc";
		DL.LINK_CHK_SHA256_FULL = DL.ASF_ARC_BASE_URL + "/binaries/" + DL.LANG_SEL + "/" + DL.FILENAME_FULL + ".sha256";
		DL.LINK_CHK_SHA512_FULL = DL.ASF_ARC_BASE_URL + "/binaries/" + DL.LANG_SEL + "/" + DL.FILENAME_FULL + ".sha512";

		DL.LINK_CHK_ASC_LP	= DL.ASF_ARC_BASE_URL + "/binaries/" + DL.LANG_SEL + "/" + DL.FILENAME_LP   + ".asc";
		DL.LINK_CHK_SHA256_LP	= DL.ASF_ARC_BASE_URL + "/binaries/" + DL.LANG_SEL + "/" + DL.FILENAME_LP   + ".sha256";
		DL.LINK_CHK_SHA512_LP	= DL.ASF_ARC_BASE_URL + "/binaries/" + DL.LANG_SEL + "/" + DL.FILENAME_LP   + ".sha512";

		// Indicate that a download will successfull.
		DL.SHOW_SUB_BOX		= true;
		DL.ERROR		= false;

		// If a Linux file is selected, then set the values for the RPM vs. DEB text link. Otherwise no text.
		if( DL.INSTALL_EXTENSION === "RPM" || DL.INSTALL_EXTENSION === "DEB" ) {
			document.getElementById( "dl_rpm_vs_deb" ).style.cursor	= "help";
			document.getElementById( "dl_rpm_vs_deb" ).title	= l10n.dl_rpm_vs_deb_title;
			document.getElementById( "dl_rpm_vs_deb" ).text		= l10n.dl_rpm_vs_deb_text;
		} else {
			document.getElementById( "dl_rpm_vs_deb" ).style.cursor	= "default";
			document.getElementById( "dl_rpm_vs_deb" ).title	= "";
			document.getElementById( "dl_rpm_vs_deb" ).text		= "";
		}

		// Set the values for both download text buttons and set the focus to the "full install".
		document.getElementById( "dl_f_link"	    ).href	= DL.LINK_FULL;
		document.getElementById( "dl_f_link"	    ).innerHTML	= l10n.dl_full_link_text;
		document.getElementById( "dl_f_link"	    ).title	= l10n.dl_full_link_title + DL.FILENAME_FULL;
		document.getElementById( "dl_f_link"	    ).focus()
		document.getElementById( "dl_lp_link"	    ).href	= DL.LINK_LP;
		document.getElementById( "dl_lp_link"	    ).innerHTML	= l10n.dl_langpack_link_text;
		document.getElementById( "dl_lp_link"	    ).title	= l10n.dl_langpack_link_title + DL.FILENAME_LP;

		// Set the values in the sub-box for the 4 text lines.
		// #1 Release data and link to release notes.
		document.getElementById( "dl_rel_info"      ).innerHTML	= "<b>" + l10n.dl_rel_info_headline_text
									+ "</b> " + DL.REL_TEXT + " | ";
		document.getElementById( "dl_rel_notes"	    ).href	= DL.REL_NOTES;
		document.getElementById( "dl_rel_notes"	    ).innerHTML	= l10n.dl_rel_notes_text;
		document.getElementById( "dl_rel_notes"	    ).title	= l10n.dl_rel_notes_title + DL.VERSION_SEL;

		// #2 Full install: Data and links
		document.getElementById( "dl_f_info"	    ).innerHTML = "<b>" + l10n.dl_headline_full_text + "</b>"
									+ l10n.dl_filesize_text + DL.FILESIZE_FULL
									+ l10n.dl_megabyte_text + " | "
									+ l10n.dl_checksum_headline_text;
		document.getElementById( "dl_f_chk_keys"    ).href	= DL.LINK_CHK_KEYS;
		document.getElementById( "dl_f_chk_keys"    ).innerHTML	= l10n.dl_checksum_keys_text;
		document.getElementById( "dl_f_chk_keys"    ).title	= l10n.dl_checksum_keys_title;
		document.getElementById( "space1"	    ).innerHTML	= " , ";
		document.getElementById( "dl_f_chk_asc"	    ).href	= DL.LINK_CHK_ASC_FULL;
		document.getElementById( "dl_f_chk_asc"	    ).innerHTML	= l10n.dl_checksum_asc_text;
		document.getElementById( "dl_f_chk_asc"	    ).title	= l10n.dl_checksum_asc_title + DL.FILENAME_FULL;
		document.getElementById( "space2"	    ).innerHTML	= " , ";
		document.getElementById( "dl_f_chk_sha256"  ).href	= DL.LINK_CHK_SHA256_FULL;
		document.getElementById( "dl_f_chk_sha256"  ).innerHTML	= l10n.dl_checksum_sha256_text;
		document.getElementById( "dl_f_chk_sha256"  ).title	= l10n.dl_checksum_sha256_title + DL.FILENAME_FULL;
		document.getElementById( "space3"	    ).innerHTML	= " , ";
		document.getElementById( "dl_f_chk_sha512"  ).href	= DL.LINK_CHK_SHA512_FULL;
		document.getElementById( "dl_f_chk_sha512"  ).innerHTML	= l10n.dl_checksum_sha512_text;
		document.getElementById( "dl_f_chk_sha512"  ).title	= l10n.dl_checksum_sha512_title + DL.FILENAME_FULL;

		// #3 Langpack: Data and links
		document.getElementById( "dl_lp_info"	    ).innerHTML	= "<b>" + l10n.dl_headline_langpack_text
									+ "</b>" + l10n.dl_filesize_text
									+ DL.FILESIZE_LP + l10n.dl_megabyte_text
									+ " | " + l10n.dl_checksum_headline_text;
		document.getElementById( "dl_lp_chk_keys"   ).href	= DL.LINK_CHK_KEYS;
		document.getElementById( "dl_lp_chk_keys"   ).innerHTML	= l10n.dl_checksum_keys_text;
		document.getElementById( "dl_lp_chk_keys"   ).title	= l10n.dl_checksum_keys_title;
		document.getElementById( "space5"	    ).innerHTML	= " , ";
		document.getElementById( "dl_lp_chk_asc"    ).href	= DL.LINK_CHK_ASC_LP;
		document.getElementById( "dl_lp_chk_asc"    ).innerHTML	= l10n.dl_checksum_asc_text;
		document.getElementById( "dl_lp_chk_asc"    ).title	= l10n.dl_checksum_asc_title + DL.FILENAME_LP;
		document.getElementById( "space6"	    ).innerHTML	= " , ";
		document.getElementById( "dl_lp_chk_sha256" ).href	= DL.LINK_CHK_SHA256_LP;
		document.getElementById( "dl_lp_chk_sha256" ).innerHTML	= l10n.dl_checksum_sha256_text;
		document.getElementById( "dl_lp_chk_sha256" ).title	= l10n.dl_checksum_sha256_title + DL.FILENAME_LP;
		document.getElementById( "space7"	    ).innerHTML	= " , ";
		document.getElementById( "dl_lp_chk_sha512" ).href	= DL.LINK_CHK_SHA512_LP;
		document.getElementById( "dl_lp_chk_sha512" ).innerHTML	= l10n.dl_checksum_sha512_text;
		document.getElementById( "dl_lp_chk_sha512" ).title	= l10n.dl_checksum_sha512_title + DL.FILENAME_LP;

		// #4 Links: Full vs. lp + verify checksums + report broken link.
		document.getElementById( "dl_hlp_img"	    ).src	= l10n.dl_help_img_src;
		document.getElementById( "dl_hlp_img"	    ).title	= l10n.dl_help_img_title;
		document.getElementById( "dl_hlp_img"	    ).alt	= l10n.dl_help_img_alt;
		document.getElementById( "dl_hlp"	    ).href	= l10n.dl_help_link;
		document.getElementById( "dl_hlp"	    ).innerHTML	= l10n.dl_help_text;
		document.getElementById( "dl_hlp"	    ).title	= l10n.dl_help_title;
		document.getElementById( "dl_chk_img"	    ).src	= l10n.dl_checksum_img_src;
		document.getElementById( "dl_chk_img"	    ).title	= l10n.dl_checksum_img_title;
		document.getElementById( "dl_chk_img"	    ).alt	= l10n.dl_checksum_img_alt;
		document.getElementById( "dl_chk"	    ).href	= l10n.dl_checksum_link;
		document.getElementById( "dl_chk"	    ).innerHTML	= l10n.dl_checksum_text;
		document.getElementById( "dl_chk"	    ).title	= l10n.dl_checksum_title;
		document.getElementById( "dl_rpt_img"	    ).src	= l10n.dl_report_img_src;
		document.getElementById( "dl_rpt_img"	    ).title	= l10n.dl_report_img_title;
		document.getElementById( "dl_rpt_img"	    ).alt	= l10n.dl_report_img_alt;
		document.getElementById( "dl_rpt"	    ).href	= l10n.dl_report_link;
		document.getElementById( "dl_rpt"	    ).innerHTML	= l10n.dl_report_text;
		document.getElementById( "dl_rpt"	    ).title	= l10n.dl_report_title;

		// New Apache release policy since March 2018: Do not provide any MD5 checksums anymore as it is understood as too insecure.
		if( ( DL.VERSION_SEL === "4.1.6" || DL.VERSION_SEL === "4.2.0" ) ) {
			// If version is '4.1.6' (or newer), do not show any MD5 checksum file links.
			document.getElementById( "space4"	    ).innerHTML	= "";
			document.getElementById( "dl_f_chk_md5"	    ).href	= "";
			document.getElementById( "dl_f_chk_md5"	    ).innerHTML	= "";
			document.getElementById( "dl_f_chk_md5"	    ).title	= "";

			document.getElementById( "space8"	    ).innerHTML	= "";
			document.getElementById( "dl_lp_chk_md5"    ).href	= "";
			document.getElementById( "dl_lp_chk_md5"    ).innerHTML	= "";
			document.getElementById( "dl_lp_chk_md5"    ).title	= "";
		} else {
			// If version is '4.1.5' (or older), it's OK to show the MD5 checksum file links.
			DL.LINK_CHK_MD5_FULL = DL.ASF_ARC_BASE_URL + "/binaries/" + DL.LANG_SEL + "/" + DL.FILENAME_FULL + ".md5";
			DL.LINK_CHK_MD5_LP   = DL.ASF_ARC_BASE_URL + "/binaries/" + DL.LANG_SEL + "/" + DL.FILENAME_LP   + ".md5";

			document.getElementById( "space3"	    ).innerHTML	= "";
			document.getElementById( "dl_f_chk_sha512"  ).href	= "";
			document.getElementById( "dl_f_chk_sha512"  ).innerHTML	= "";
			document.getElementById( "dl_f_chk_sha512"  ).title	= "";

			document.getElementById( "space7"	    ).innerHTML	= "";
			document.getElementById( "dl_lp_chk_sha512" ).href	= "";
			document.getElementById( "dl_lp_chk_sha512" ).innerHTML	= "";
			document.getElementById( "dl_lp_chk_sha512" ).title	= "";

			document.getElementById( "space4"	    ).innerHTML	= " , ";
			document.getElementById( "dl_f_chk_md5"	    ).href	= DL.LINK_CHK_MD5_FULL;
			document.getElementById( "dl_f_chk_md5"	    ).innerHTML	= l10n.dl_checksum_md5_text;
			document.getElementById( "dl_f_chk_md5"	    ).title	= l10n.dl_checksum_md5_title + DL.FILENAME_FULL;

			document.getElementById( "space8"	    ).innerHTML	= " , ";
			document.getElementById( "dl_lp_chk_md5"    ).href	= DL.LINK_CHK_MD5_LP;
			document.getElementById( "dl_lp_chk_md5"    ).innerHTML	= l10n.dl_checksum_md5_text;
			document.getElementById( "dl_lp_chk_md5"    ).title	= l10n.dl_checksum_md5_title + DL.FILENAME_LP;
		}

		// Show the CSS style for the normal sub-box and hide all elements for error text.
		document.getElementById( "sub_box"	    ).className	    = "sub-green-sel";
		document.getElementById( "dl_err_img"	    ).style.display = "none";
		document.getElementById( "dl_err"	    ).style.display = "none";

		// Show all elements with ID in the box and sub-box.
		// Set the cursor style for elements to default and make the elements visible.
		for( var i = 0, j = DL.ID_SUB_BOX.length; i < j; i++ ) {
			//document.getElementById( DL.ID_SUB_BOX[ i ] ).style.display = "inline";
			document.getElementById( DL.ID_SUB_BOX[ i ] ).style.cursor  = "default";
		}

		// Show all elements with link in the box and sub-box.
		// Set the cursor style for elements with links to pointer and make the elements visible.
		for( var i = 0, j = DL.ID_LINKS.length; i < j; i++ ) {
			//document.getElementById( DL.ID_LINKS[ i ] ).style.display   = "inline";
			document.getElementById( DL.ID_LINKS[ i ] ).style.cursor    = "pointer";
		}

		// Set the cursor style for the 3 links with icon to a help sign.
		document.getElementById( "dl_hlp_img"	    ).style.cursor  = "help";
		document.getElementById( "dl_hlp"	    ).style.cursor  = "help";
		document.getElementById( "dl_chk_img"	    ).style.cursor  = "help";
		document.getElementById( "dl_chk"	    ).style.cursor  = "help";
		document.getElementById( "dl_rpt_img"	    ).style.cursor  = "help";
		document.getElementById( "dl_rpt"	    ).style.cursor  = "help";

		// Make the sub-box and therefore all elements visible.
		document.getElementById( "sub_box"	    ).style.display = "block";
	}

	return;
}

/*
 * Get platform of browser
 * @param:  None
 * @return: None
 */
DL.getPlatform = function() {
	// For more help or data see: "http://www.useragentstring.com".

	var av, os, ua, ve = "";

	if( navigator.appVersion ) {
		av		= navigator.appVersion.toLowerCase();	// Get the application version in lower case.
	}
	if( navigator.platform ) {
		os		= navigator.platform.toLowerCase();	// Get the platform string in lower case.
	}
	if( navigator.userAgent ) {
		ua		= navigator.userAgent.toLowerCase();	// Get the user agent string in lower case.
	}
	if( navigator.vendor ) {
		ve		= navigator.vendor.toLowerCase();	// Get the vendor string in lower case.
	}

	DL.UI_PLATFORM		= "";					// Delete previously set string.
	DL.UI_PLATFORM_NO_SUP	= "";					// Delete previously set string.
	DL.PLATFORM		= "";					// Delete previously set string.
	DL.EXTENSION		= "";					// Delete previously set string.

	// Add ECMA262-5 Array methods if not supported natively.
	// To workaround that MSIE 8 and older do not support this function.
	if( !( 'indexOf' in Array.prototype ) ) {
		Array.prototype.indexOf= function( find, i ) {		// 'i' is an optional parameter.
			if( i === undefined ) {
				i = 0;
			}
			if( i < 0 ) {
				i+= this.length;
			}
			if( i < 0 ) {
				i = 0;
			}
			for( var n = this.length; i < n; i++ ) {
				if( i in this && this[ i ] === find ) {
					return i;
				}
			}
			return -1;
		};
	}

	// If the browser's user agent string is set with something, try to recognize its content.
	if( ua !== "" ) {
		// Recognized but *not supported* platforms/OS, set $DL.UI_PLATFORM_NO_SUP to show it to the user.

		// Mobile devices.
		if( ve ) {
		    if( ua.indexOf( "android"		) !== -1 )
			if( ua.indexOf( "nexus"		) !== -1 &&
			    ve.indexOf( "google"	) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Google Nexus";
		}

		if( ua.indexOf( "android"		) !== -1 ) {
		    if( ua.indexOf( "mobile"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Devices (Android)";
		}

		if( os.indexOf( "arm"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Devices (ARM processor)";
		if( ua.indexOf( "blackberry"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Blackberry Smartphones";
		if( ua.indexOf( "brew"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Smartphones (BREW)";
		if( ua.indexOf( "ce.net"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (Windows CE)";
		if( ua.indexOf( "galaxy"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Samsung Galaxy";
		if( ua.indexOf( "hiptop"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Smartphones (Hiptop)";
		if( ua.indexOf( "htc"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "HTC Mobile Devices";
		if( ua.indexOf( "ipad"			) !== -1 ||
		    ua.indexOf( "iphone"		) !== -1 ||
		    ua.indexOf( "ipod"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Apple iPhone/iPad/iPod";
		if( ua.indexOf( "kindle"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Amazon Kindle";
		if( ua.indexOf( "lg"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "LG Mobile Devices";
		if( ua.indexOf( "nokia"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (Nokia)";
		if( ua.indexOf( "palm"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (Palm OS)";
		if( ua.indexOf( "pike"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (Pike)";
		if( ua.indexOf( "s60"	        	) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (S60)";
		if( ua.indexOf( "sonyericsson"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Sony/Ericsson Mobile Devices";
		if( ua.indexOf( "symbian"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (Symbian OS)";
		if( ua.indexOf( "symbos"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (Symbian OS)";
		if( ua.indexOf( "webos"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (Palm webOS)";
		if( ua.indexOf( "widerweb"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (WiderWeb)";
		if( os.indexOf( "win"			) !== -1 ||
		    os.indexOf( "windows"		) !== -1 ) {
			if( ua.indexOf( "mobile"	) !== -1 ||
			    ua.indexOf( "phone"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Smartphones (Windows Phone)";
		}

		// Other platforms.
		if( os.indexOf( "aix"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "IBM AIX";
		if( os.indexOf( "alphaserver"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "AlphaServer";
		if( os.indexOf( "amiga"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "AmigaOS";
		if( os.indexOf( "darwin"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Darwin";
		if( os.indexOf( "dragonfly"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "DragonFly BSD";
		if( os.indexOf( "freebsd"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "FreeBSD (PKG)";
		if( os.indexOf( "irix"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "IRIX";
		if( os.indexOf( "netbsd"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "NetBSD";
		if( ua.indexOf( "nintendo"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Nintendo Game Console";
		if( os.indexOf( "openbsd"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "OpenBSD";
		if( os.indexOf( "os/2"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "OS/2";
		if( os.indexOf( "pcbsd"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "PC-BSD";
		if( ua.indexOf( "playstation"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Sony Playstation";
		if( ua.indexOf( "psp"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Sony Playstation Portable";
		if( os.indexOf( "qnx"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "QNX";
		if( os.indexOf( "vms"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "OpenVMS";
		if( ua.indexOf( "wii"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Nintendo Wii Game Console";
		if( os.indexOf( "x11"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "unknown OS (X11 support)";

		// Legacy, no longer supported platforms.
		if( ua.indexOf( "power_pc"		) !== -1 ||
		    ua.indexOf( "ppc"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mac OS PPC (DMG)";
		if( ua.indexOf( "sun4u"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Solaris SPARC (PKG)";
		if( os.indexOf( "sunos"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Solaris x86 (PKG)";

		// If $DL.UI_PLATFORM_NO_SUP is already filled, something was recognized and no more work is needed.
		if( DL.UI_PLATFORM_NO_SUP !== "" ) {
			ERROR = true;
			return DL.UI_PLATFORM_NO_SUP;
		}

		// Recognized and *supported* platforms/OS, set $DL.UI_PLATFORM to show it to the user.

		// Windows?
		if( os.indexOf( "win"			) !== -1 ||
		    os.indexOf( "windows"		) !== -1 ) {	DL.UI_PLATFORM		= "Windows (EXE)";
									DL.PLATFORM		= "win32";
									DL.EXTENSION		= ".exe";
		}

		// Linux: x86 or x86-64, DEB or RPM?
		if( os.indexOf( "linux"			) !== -1 ) {
			// 32-bit: DEB or RPM?
			if( os.indexOf( "x86"		) !== -1 ||
			    os.indexOf( "i686"		) !== -1 ||
			    os.indexOf( "i586"		) !== -1 ||
			    os.indexOf( "i486"		) !== -1 ||
			    os.indexOf( "i386"		) !== -1 ||
			    av.indexOf( "x86"		) !== -1 ||
			    av.indexOf( "i686"		) !== -1 ||
			    av.indexOf( "i586"		) !== -1 ||
			    av.indexOf( "i486"		) !== -1 ||
			    av.indexOf( "i386"		) !== -1 ) {	DL.UI_PLATFORM		= "Linux 32-bit (x86) (RPM)";
									DL.PLATFORM		= "lnx32r";
									DL.EXTENSION		= ".tar.gz";
			     if( ua.indexOf( "debian"	 ) !== -1 ||
				 ua.indexOf( "iceweasel" ) !== -1 ||
				 ua.indexOf( "ubuntu"	 ) !== -1 ) {	DL.UI_PLATFORM		= "Linux Debian 32-bit (x86) (DEB)";
									DL.PLATFORM		= "lnx32d";
									DL.EXTENSION		= ".tar.gz";
			     }
			}

			// 64-bit: DEB or RPM?
			if( os.indexOf( "_64"		) !== -1 ||
			    os.indexOf( "-64"		) !== -1 ||
			    os.indexOf( "x64"		) !== -1 ||
			    os.indexOf( "amd64"		) !== -1 ||
			    av.indexOf( "_64"		) !== -1 ||
			    av.indexOf( "-64"		) !== -1 ||
			    av.indexOf( "x64"		) !== -1 ||
			    av.indexOf( "amd64"		) !== -1 ) {	DL.UI_PLATFORM		= "Linux 64-bit (x86-64) (RPM)";
									DL.PLATFORM		= "lnx64r";
									DL.EXTENSION		= ".tar.gz";
			     if( ua.indexOf( "debian"	 ) !== -1 ||
				 ua.indexOf( "iceweasel" ) !== -1 ||
				 ua.indexOf( "ubuntu"	 ) !== -1 ) {	DL.UI_PLATFORM		= "Linux Debian 64-bit (x86-64) (DEB)";
									DL.PLATFORM		= "lnx64d";
									DL.EXTENSION		= ".tar.gz";
			     }
			}
		}

		// Mac OS X?
		if( os.indexOf( "mac"			) !== -1 ) {	DL.UI_PLATFORM		= "OS X (version >= 10.7) (DMG)";
									DL.PLATFORM		= "mac64";
									DL.EXTENSION		= ".dmg";

			// OS X: 10.6 or older?
			if( ua.indexOf( " 10.6"		) !== -1 ||
			    ua.indexOf( " 10_6"		) !== -1 ||
			    ua.indexOf( " 10.5"		) !== -1 ||
			    ua.indexOf( " 10_5"		) !== -1 ||
			    ua.indexOf( " 10.4"		) !== -1 ||
			    ua.indexOf( " 10_4"		) !== -1 ||
			    ua.indexOf( " 10.3"		) !== -1 ||
			    ua.indexOf( " 10_3"		) !== -1 ) {	DL.UI_PLATFORM		= "OS X (version <= 10.6) (DMG)";
									DL.PLATFORM		= "mac32";
			}

			// OS X: 10.7 or newer?
			if( ua.indexOf( " 10.12"	) !== -1 ||
			    ua.indexOf( " 10_12"	) !== -1 ||
			    ua.indexOf( " 10.11"	) !== -1 ||
			    ua.indexOf( " 10_11"	) !== -1 ||
			    ua.indexOf( " 10.10"	) !== -1 ||
			    ua.indexOf( " 10_10"	) !== -1 ||
			    ua.indexOf( " 10.9"		) !== -1 ||
			    ua.indexOf( " 10_9"		) !== -1 ||
			    ua.indexOf( " 10.8"		) !== -1 ||
			    ua.indexOf( " 10_8"		) !== -1 ||
			    ua.indexOf( " 10.7"		) !== -1 ||
			    ua.indexOf( " 10_7"		) !== -1 ) {	DL.UI_PLATFORM		= "OS X (version >= 10.7) (DMG)";
									DL.PLATFORM		= "mac64";
			}
		} 
	} 

	// If nothing was recognized until now, set $DL.UI_PLATFORM_NO_SUP to show it to the user.
	if( DL.UI_PLATFORM === "" ) {
		DL.UI_PLATFORM_NO_SUP = l10n.dl_unknown_platform_text;
		DL.ERROR	      = true;
	}

	return;
}

/*
 * Get positions of platform in release matrix
 * @param:  None
 * @return: None
 */
DL.getReleaseMatrixPosition = function() {
	// Depending on $PLATFORM, assign the platform position from the release matrix.

	switch( DL.PLATFORM ) {
		case "lnx64d":
			DL.RELEASE_PLATFORM_POS_FULL	= 1;
			DL.RELEASE_PLATFORM_POS_LP	= 2;
			DL.PLATFORM_FULL		= "Linux_x86-64_install-deb";
			DL.PLATFORM_LP			= "Linux_x86-64_langpack-deb";
			break;
		case "lnx64r":
			DL.RELEASE_PLATFORM_POS_FULL	= 3;
			DL.RELEASE_PLATFORM_POS_LP	= 4;
			DL.PLATFORM_FULL		= "Linux_x86-64_install-rpm";
			DL.PLATFORM_LP			= "Linux_x86-64_langpack-rpm";
			break;
		case "lnx32d":
			DL.RELEASE_PLATFORM_POS_FULL	= 5;
			DL.RELEASE_PLATFORM_POS_LP	= 6;
			DL.PLATFORM_FULL		= "Linux_x86_install-deb";
			DL.PLATFORM_LP			= "Linux_x86_langpack-deb";
			break;
		case "lnx32r":
			DL.RELEASE_PLATFORM_POS_FULL	= 7;
			DL.RELEASE_PLATFORM_POS_LP	= 8;
			DL.PLATFORM_FULL		= "Linux_x86_install-rpm";
			DL.PLATFORM_LP			= "Linux_x86_langpack-rpm";
			break;
		case "mac64":
			DL.RELEASE_PLATFORM_POS_FULL	= 9;
			DL.RELEASE_PLATFORM_POS_LP	= 10;
			DL.PLATFORM_FULL		= "MacOS_x86-64_install";
			DL.PLATFORM_LP			= "MacOS_x86-64_langpack";
			break;
		case "mac32":
			DL.RELEASE_PLATFORM_POS_FULL	= 9;
			DL.RELEASE_PLATFORM_POS_LP	= 10;
			DL.PLATFORM_FULL		= "MacOS_x86_install";
			DL.PLATFORM_LP			= "MacOS_x86_langpack";
			break;
		case "win32":
			DL.RELEASE_PLATFORM_POS_FULL	= 11;
			DL.RELEASE_PLATFORM_POS_LP	= 12;
			DL.PLATFORM_FULL		= "Win_x86_install";
			DL.PLATFORM_LP			= "Win_x86_langpack";
			break;
		default:
			DL.RELEASE_PLATFORM_POS_FULL	= -1;
			DL.RELEASE_PLATFORM_POS_LP	= -1;
			DL.ERROR			= true;
	}

	return;
}

/*
 * Get file name for download file
 * @param:  version - The version to use to get the file data
 * @return: None
 */
DL.getFileData = function() {
	// Depending on $ver, a different release matrix has to be used to assemble the download filenames.

	// Generate variable name: string + version number without dots (e.g., "413" instead of "4.1.3").
	var release_matrix_version = "release_matrix_" + DL.VERSION_SEL_RAW;

	// Assign all values from the release matrix of language and platform.
	DL.RELEASE_PLATFORM	= DL[ release_matrix_version ][ DL.LANG_ISO ][ DL.RELEASE_PLATFORM_POS_FULL ];

	// Assemble filename: Product name + version + platform as URL part + language ISO + file extension.
	DL.FILENAME_FULL	= "Apache_OpenOffice_" + DL.VERSION_SEL + "_" + DL.PLATFORM_FULL + "_" + DL.LANG_ISO + DL.EXTENSION;
	DL.FILENAME_LP		= "Apache_OpenOffice_" + DL.VERSION_SEL + "_" + DL.PLATFORM_LP   + "_" + DL.LANG_ISO + DL.EXTENSION;

	// Assign the file size (column 2) from the release matrix of language and platform.
	DL.FILESIZE_FULL	= DL[ release_matrix_version ][ DL.LANG_ISO ][ DL.RELEASE_PLATFORM_POS_FULL ][ 1 ];
	DL.FILESIZE_LP		= DL[ release_matrix_version ][ DL.LANG_ISO ][ DL.RELEASE_PLATFORM_POS_LP   ][ 1 ];

	// Assign all values from the release data.
	DL.REL_TEXT		= l10n.dl_rel_info_milestone_text	 + DL[ release_matrix_version ][ "src" ][ 1 ][ 0 ]
				+ " | " + l10n.dl_rel_info_buildid_text	 + DL[ release_matrix_version ][ "src" ][ 1 ][ 1 ]
				+ " | " + l10n.dl_rel_info_svn_text	 + DL[ release_matrix_version ][ "src" ][ 1 ][ 2 ]
				+ " | " + l10n.dl_rel_info_rel_date_text + DL[ release_matrix_version ][ "src" ][ 1 ][ 3 ];

	// Assign the link for release notes, depending on the version.
	// Generate variable name: string + version number without dots (e.g., "413" instead of "4.1.3").
	DL.REL_NOTES = l10n[ "dl_rel_notes_aoo" + DL.VERSION_SEL_RAW + "_link" ];

	return;
}

/*
 * Set document.location to start the download
 * @param:  itemid, uri - The ID of the colored box and the URI that should be opened
 * @return: None
 */
function openItem( itemid, uri ) {
//	var thisDocument  = document.getElementById( "downloadextendedtext" );
//	var thisDocument  = document.getElementById( itemid );
	document.location = uri;
}

/*
 * Output values of variables for debugging
 * @param:  location - The location where the debug utput should take place
 * @return: None
 */
DL.debug = function( location ) {
	// Depending on the current position in the code, show the values for the variables as alert box.
	// If the alert box is too large, just comment out the lines that are not needed at the moment.
	// Usage:
	// Call the function in the code position you want to debug.
	// Example:
	// DL.debug( "name the exact code position");

	if( location === "" ) {
		location = "No location named!";
	}

	alert( location											+ "\n"
	+ "RELEASE_MODE: "			+ "\t\t\t\t\t\t"	+ DL.RELEASE_MODE		+ "\n"
	+ "NL_LANG: "				+ "\t\t\t\t\t\t\t"	+ DL.NL_LANG			+ "\n"
	+ "LANG_ISO: "				+ "\t\t\t\t\t\t"	+ DL.LANG_ISO			+ "\n"
	+ "LANG_SEL: "				+ "\t\t\t\t\t\t"	+ DL.LANG_SEL			+ "\n"
	+ "UI_PLATFORM: "			+ "\t\t\t\t\t\t"	+ DL.UI_PLATFORM		+ "\n"
	+ "UI_PLATFORM_NO_SUP: "		+ "\t\t\t\t"		+ DL.UI_PLATFORM_NO_SUP		+ "\n"
	+ "PLATFORM: "				+ "\t\t\t\t\t\t"	+ DL.PLATFORM			+ "\n"
	+ "PLATFORM_FULL: "			+ "\t\t\t\t\t"		+ DL.PLATFORM_FULL		+ "\n"
	+ "PLATFORM_LP: "			+ "\t\t\t\t\t\t"	+ DL.PLATFORM_LP		+ "\n"
	+ "PLATFORM_SEL: "			+ "\t\t\t\t\t\t"	+ DL.PLATFORM_SEL		+ "\n"
	+ "RELEASE_PLATFORM_POS_FULL: "		+ "\t\t\t"		+ DL.RELEASE_PLATFORM_POS_FULL	+ "\n"
	+ "RELEASE_PLATFORM_POS_LP: "		+ "\t\t\t"		+ DL.RELEASE_PLATFORM_POS_LP	+ "\n"
	+ "RELEASE_PLATFORM: "			+ "\t\t\t\t\t"		+ DL.RELEASE_PLATFORM		+ "\n"
	+ "RELEASE_LANG: "			+ "\t\t\t\t\t\t"	+ DL.RELEASE_LANG		+ "\n"
	+ "REL_TEXT: "				+ "\t\t\t\t\t\t\t"	+ DL.REL_TEXT			+ "\n"
	+ "REL_NOTES: "				+ "\t\t\t\t\t\t"	+ DL.REL_NOTES			+ "\n"
	+ "VERSION_SEL: "			+ "\t\t\t\t\t\t"	+ DL.VERSION_SEL		+ "\n"
	+ "VERSION_SEL_RAW: "			+ "\t\t\t\t\t"		+ DL.VERSION_SEL_RAW		+ "\n"
	+ "FILENAME_FULL: "			+ "\t\t\t\t\t"		+ DL.FILENAME_FULL		+ "\n"
	+ "FILENAME_LP: "			+ "\t\t\t\t\t\t"	+ DL.FILENAME_LP		+ "\n"
	+ "FILESIZE_FULL: "			+ "\t\t\t\t\t\t"	+ DL.FILESIZE_FULL		+ "\n"
	+ "FILESIZE_LP: "			+ "\t\t\t\t\t\t"	+ DL.FILESIZE_LP		+ "\n"
	+ "EXTENSION: "				+ "\t\t\t\t\t\t"	+ DL.EXTENSION			+ "\n"
	+ "INSTALL_EXTENSION: "			+ "\t\t\t\t\t\t"	+ DL.INSTALL_EXTENSION		+ "\n"
	+ "LINK_FULL: "				+ "\t\t\t\t\t\t"	+ DL.LINK_FULL			+ "\n"
	+ "LINK_LP: "				+ "\t\t\t\t\t\t\t"	+ DL.LINK_LP			+ "\n"
	+ "LINK_CHK_ASC_FULL: "			+ "\t\t\t\t\t"		+ DL.LINK_CHK_ASC_FULL		+ "\n"
	+ "LINK_CHK_SHA256_FULL: "		+ "\t\t\t\t"		+ DL.LINK_CHK_SHA256_FULL	+ "\n"
	+ "LINK_CHK_SHA512_FULL: "		+ "\t\t\t\t"		+ DL.LINK_CHK_SHA512_FULL	+ "\n"
	+ "LINK_CHK_MD5_FULL: "			+ "\t\t\t\t\t"		+ DL.LINK_CHK_MD5_FULL		+ "\n"
	+ "LINK_CHK_ASC_LP: "			+ "\t\t\t\t\t"		+ DL.LINK_CHK_ASC_LP		+ "\n"
	+ "LINK_CHK_SHA256_LP: "		+ "\t\t\t\t"		+ DL.LINK_CHK_SHA256_LP		+ "\n"
	+ "LINK_CHK_SHA512_LP: "		+ "\t\t\t\t"		+ DL.LINK_CHK_SHA512_LP		+ "\n"
	+ "LINK_CHK_MD5_LP: "			+ "\t\t\t\t\t"		+ DL.LINK_CHK_MD5_LP		+ "\n"
	+ "SHOW_SUB_BOX: "			+ "\t\t\t\t\t"		+ DL.SHOW_SUB_BOX		+ "\n"
	+ "ERROR: "				+ "\t\t\t\t\t\t\t"	+ DL.ERROR			+ "\n" );

	return;
}








/* Description of the array elements

  a: Language code - splitted ISO code for identification (used in "download.js --> getLanguage() )
  b: Region code   - splitted ISO code for identification (used in "download.js --> getLanguage() )
  0: Language as complete ISO code
  1: Language name in English
  2: Language name in native language (with UTF-8 character set)
  3: Flag for mirrorsystem usage ('y' to use SourceForge and 'n' to use the alternative webpage) (currently not used)
  4: Alternative link to download, e.g., to the Native Language community webpage (currently not used)

a	 b	 0	  1				2
*/

DL.language_matrix = {
    // All listed languages below *are* supported and *are* available as full installation and language pack.
    
    "ast": { "-" : [ 'ast',   'Asturian',			'Asturianu' ] },
    "bg":  { "-" : [ 'bg',    'Bulgarian',			'Ð±ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸ ÐµÐ·Ð¸Ðº' ] },
    "ca":  { "-" : [ 'ca',    'Catalan',			'CatalÃ ' ],
             "xr": [ 'ca-XR', 'Catalan',			'CatalÃ  (ValenciÃ  RACV)' ],
             "xv": [ 'ca-XV', 'Catalan (Valencian)',	'CatalÃ  (ValenciÃ  AVL)' ] },
    "cs":  { "-" : [ 'cs',    'Czech',			'ÄŒeÅ¡tina' ] },
    "da":  { "-" : [ 'da',    'Danish',			'Dansk' ] },
    "de":  { "-" : [ 'de',    'German',			'Deutsch' ] },
    "el":  { "-" : [ 'el',    'Greek',			'&Epsilon;&lambda;&lambda;&eta;&nu;&iota;&kappa;Î¬' ] },
    "en":  { "-" : [ 'en',    'English',			'English' ],
             "en": [ 'en-EN', 'English',			'English' ],
             "gb": [ 'en-GB', 'English (British)',		'English (British)' ],
             "us": [ 'en-US', 'English (US)',		'English (US)' ] },
    "es":  { "-" : [ 'es',    'Spanish',			'Espa&ntilde;ol' ] },
    "eu":  { "-" : [ 'eu',    'Basque',			'Euskara' ] },
    "fi":  { "-" : [ 'fi',    'Finnish',			'Suomi' ] },
    "fr":  { "-" : [ 'fr',    'French',			'Fran&ccedil;ais' ] },
    "gd":  { "-" : [ 'gd',    'Scottish (Gaelic)',		'GÃ idhlig' ] },
    "gl":  { "-" : [ 'gl',    'Galician',			'Galego' ] },
    "he":  { "-" : [ 'he',    'Hebrew',			'×¢×‘×¨×™×ª' ] },
    "hi":  { "-" : [ 'hi',    'Hindi',			'à¤¹à¤¿à¤¨à¥à¤¦à¥€' ] },
    "hu":  { "-" : [ 'hu',    'Hungarian',			'Magyar' ] },
    "it":  { "-" : [ 'it',    'Italian',			'Italiano' ] },
    "ja":  { "-" : [ 'ja',    'Japanese',			'æ—¥æœ¬èªž' ] },
    "km":  { "-" : [ 'km',    'Khmer',			'áž—áž¶ážŸáž¶ážáŸ’áž˜áŸ‚ážš' ] },
    "ko":  { "-" : [ 'ko',    'Korean',			'í•œêµ­ì–´' ] },
    "lt":  { "-" : [ 'lt',    'Lithuanian',			'LietuviÅ³' ] },
    "nb":  { "-" : [ 'nb',    'Norwegian (Bokmal)',		'Norsk (BokmÃ¥l)' ] },
    "nl":  { "-" : [ 'nl',    'Dutch',			'Nederlands' ] },
    "pl":  { "-" : [ 'pl',    'Polish',			'Polski' ] },
    "pt":  { "-" : [ 'pt',    'Portuguese (European)',	'Portugu&ecirc;s (Europeu)' ],
             "br": [ 'pt-BR', 'Portuguese (Brazilian)',	'Portugu&ecirc;s (do Brasil)' ],
             "pt": [ 'pt',    'Portuguese (European)',	'Portugu&ecirc;s (Europeu)' ] },
    "ru":  { "-" : [ 'ru',    'Russian',			'Ð ÑƒÑÑÐºÐ¸Ð¹' ] },
    "sk":  { "-" : [ 'sk',    'Slovak',			'SlovenskÃ½ jazyk (slovenÄina)' ] },
    "sr":  { "-" : [ 'sr',    'Serbian (Cyrillic)',		'CÑ€Ð¿ÑÐºÐ¸ (Ñ›Ð¸Ñ€Ð¸Ð»Ð¸Ñ†Ð¾Ð¼)' ] },
    "sl":  { "-" : [ 'sl',    'Slovenian',			'Slovenski jezik (slovenÅ¡Äina)' ] },
    "sv":  { "-" : [ 'sv',    'Swedish',			'Svenska' ] },
    "ta":  { "-" : [ 'ta',    'Tamil',			'à®¤à®®à®¿à®´à¯' ] },
    "th":  { "-" : [ 'th',    'Thai',			'à¸ à¸²à¸©à¸²à¹„à¸—à¸¢' ] },
    "tr":  { "-" : [ 'tr',    'Turkish',			'T&uuml;rk&ccedil;e' ] },
    "vi":  { "-" : [ 'vi',    'Vietnamese',			'Tiáº¿ng Viá»‡t' ] },
    "zh":  { "-" : [ 'zh',    'Chinese',			'Chinese' ],
             "cn": [ 'zh-CN', 'Chinese (simplified)',	'ç®€ä½“ä¸­æ–‡' ],
             "tw": [ 'zh-TW', 'Chinese (traditional)',	'æ­£é«”ä¸­æ–‡' ] },
    
    // All listed languages below *are not supported* and *not* available as full installation and language pack.
    "ar":  { "-" : [ 'ar',    'Arabic',			'Ø¹Ø±Ø¨ÙŠ' ] },
    "as":  { "-" : [ 'as',    'Assamese',			'à¦…à¦¸à¦®à§€à¦¯à¦¼à¦¾' ] },
    "be":  { "-" : [ 'be',    'Belarusian',			'Ð‘ÐµÐ»Ð°Ñ€ÑƒÑÐºÐ°Ñ Ð¼Ð¾Ð²Ð°' ],
             "be": [ 'be-BE', 'Belarusian',			'Ð‘ÐµÐ»Ð°Ñ€ÑƒÑÐºÐ°Ñ Ð¼Ð¾Ð²Ð°' ],
             "by": [ 'be-BY', 'Belarusian',			'Ð‘ÐµÐ»Ð°Ñ€ÑƒÑÐºÐ°Ñ Ð¼Ð¾Ð²Ð°' ] },
    "bn":  { "-" : [ 'bn',    'Bengali',			'à¦¬à¦¾à¦‚à¦²à¦¾' ] },
    "my":  { "-" : [ 'my',    'Burmese',			'á€™á€¼á€”á€ºá€™á€¬á€˜á€¬á€žá€¬' ] },
    "hr":  { "-" : [ 'hr',    'Croatian',			'hrvatski' ] },
    "dz":  { "-" : [ 'dz',    'Dzongkha',			'à½¢à¾«à½¼à½„à¼‹à½' ] },
    "eo":  { "-" : [ 'eo',    'Esperanto',			'Esperanto' ] },
    "et":  { "-" : [ 'et',    'Estonian',			'Eesti keel' ] },
    "ka":  { "-" : [ 'ka',    'Georgian',			'áƒ¥áƒáƒ áƒ—áƒ£áƒšáƒ˜ áƒ”áƒœáƒ' ] },
    "gu":  { "-" : [ 'gu',    'Gujarati',			'àª—à«àªœàª°àª¾àª¤à«€' ] },
    "is":  { "-" : [ 'is',    'Icelandic',			'Ãslenska' ] },
    "id":  { "-" : [ 'id',    'Indonesian',			'Bahasa Indonesia' ] },
    "ga":  { "-" : [ 'ga',    'Irish',			'Gaeilge' ] },
    "kn":  { "-" : [ 'kn',    'Kannada',			'à²•à²¨à³à²¨à²¡' ] },
    "ku":  { "-" : [ 'ku',    'Kurdish',			'KurdÃ®' ] },
    "lv":  { "-" : [ 'lv',    'Latvian',			'LatvieÅ¡u valoda' ] },
    "lo":  { "-" : [ 'lo',    'Laotian',			'àºžàº²àºªàº²àº¥àº²àº§' ] },
    "mk":  { "-" : [ 'mk',    'Macedonian',			'ÐœÐ°ÐºÐµÐ´Ð¾Ð½ÑÐºÐ¸' ] },
    "ml":  { "-" : [ 'ml',    'Malayalam',			'à´®à´²à´¯à´¾à´³à´‚' ] },
    "ms":  { "-" : [ 'ms',    'Malaysian',			'Ø¨Ù‡Ø§Ø³ Ù…Ù„Ø§ÙŠÙˆ' ] },
    "mr":  { "-" : [ 'mr',    'Marathi',			'à¤®à¤°à¤¾à¤ à¥€' ] },
    "mn":  { "-" : [ 'mn',    'Mongolian',			'ÐœÐ¾Ð½Ð³Ð¾Ð» Ñ…ÑÐ»' ] },
    "nn":  { "-" : [ 'nn',    'Norwegian (Nynorsk)',	'Norsk (Nynorsk)' ] },
    "no":  { "-" : [ 'no',    'Norwegian',			'Norsk' ] },
    "oc":  { "-" : [ 'oc',    'Occitan',			'Occitan' ] },
    "or":  { "-" : [ 'or',    'Oriya',			'à¬“à¬¡à¬¼à¬¿à¬†' ] },
    "om":  { "-" : [ 'om',    'Oromo',			'áŠ¦áˆ®áˆšáŠ›' ] },
    "pa":  { "-" : [ 'pa',    'Punjabi',			'à¨ªà©°à¨œà¨¾à¨¬à©€' ],
             "pa": [ 'pa-PA', 'Punjabi',			'à¨ªà©°à¨œà¨¾à¨¬à©€' ],
             "in": [ 'pa-IN', 'Punjabi',			'à¨ªà©°à¨œà¨¾à¨¬à©€' ] },
    "ro":  { "-" : [ 'ro',    'Romanian',			'RomÃ¢nÄƒ' ] },
    "sh":  { "-" : [ 'sh',    'Serbian (Latin)',		'Srpski (latinicom)' ] },
    "si":  { "-" : [ 'si',    'Sinhala',			'à·ƒà·’à¶‚à·„à¶½' ] },
    "te":  { "-" : [ 'te',    'Telugu',			'à°¤à±†à°²à±à°—à±' ] },
    "uk":  { "-" : [ 'uk',    'Ukrainian',			'YÐºÑ€Ð°Ñ—ÌÐ½ÑÑŒÐºÐ° Ð¼Ð¾ÌÐ²Ð°' ] },
    "ug":  { "-" : [ 'ug',    'Uyghur',			'Ø¦Û‡ÙŠØºÛ‡Ø±Ú†Û•â€Ž' ] },
    "uz":  { "-" : [ 'uz',    'Uzbek',			'ÐŽÐ·Ð±ÐµÐº' ] },
    "cy":  { "-" : [ 'cy',    'Welsh',			'Cymraeg' ] }
    };
    



































/* Description of the array elements with release data for the specific version, language and platform (release matrix).
 *
 * First row (matrix):
 * A: Language as ISO code
 *
 * Second row (language):
 *
 * a: Position in array
 * b: Language as ISO code
 * c: English language name
 * d: Native language name
 * e: Released language (y/n)?
 * f: sub-dir part of the native language webpage
 *
 * Further rows (release per platform):
 * 0: Position in array
 * 1: Single build available (y/n)?
 * 2: File size (in MB)
 *
 */

/* Description for AOO 4.1.6.
 *
 * For the matrix position and their meanings see the descriptions on top of file.
 */
DL.release_matrix_416 = {
    "src": {
         "0": [ 'src', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ 'AOO416m1', '9790', 'r1844436', '2018-11-18' ],
         "2": [ 'tar_bz2', 'y', '209' ],
         "3": [ 'tar_gz',  'y', '276' ],
         "4": [ 'zip',	   'y', '323' ] },
    
    "sdk": {
         "0": [ 'sdk', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ /* lnx_64_f_d  */ 'y', '  9' ],
         "2": [ /* lnx_64_lp_d */ 'n', '  0' ],
         "3": [ /* lnx_64_f_r  */ 'y', '  8' ],
         "4": [ /* lnx_64_lp_r */ 'n', '  0' ],
         "5": [ /* lnx_32_f_d  */ 'y', '  9' ],
         "6": [ /* lnx_32_lp_d */ 'n', '  0' ],
         "7": [ /* lnx_32_f_r  */ 'y', '  8' ],
         "8": [ /* lnx_32_lp_r */ 'n', '  0' ],
         "9": [ /* mac_64_f    */ 'y', ' 12' ],
        "10": [ /* mac_64_lp   */ 'n', '  0' ],
        "11": [ /* win_32_f    */ 'y', '  7' ],
        "12": [ /* win_32_lp   */ 'n', '  0' ] },
    
    "ar": {
         "0": [ 'ar', 'Arabic', 'Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©', 'n', 'ar/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },		
    
    "ast": {
         "0": [ 'ast', 'Asturian', 'Asturianu', 'y', 'ast/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '145' ], "12": [ 'y', ' 34' ] },
    
    "bg": {
         "0": [ 'bg', 'Bulgarian', 'Ð±ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸ ÐµÐ·Ð¸Ðº', 'y', 'bg/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "ca": {
         "0": [ 'ca', 'Catalan', 'CatalÃ ', 'y', 'ca/' ],
         "1": [ 'y', '153' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '154' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '146' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '151' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '164' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '135' ], "12": [ 'y', ' 19' ] },
    
    "ca-XV": {
         "0": [ 'ca-XV', 'ValenciÃ ', 'CatalÃ  (ValenciÃ  AVL)', 'y', 'ca-xv/' ],
         "1": [ 'y', '153' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '154' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '146' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '151' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '164' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '151' ], "12": [ 'y', ' 35' ] },	
    
    "ca-XR": {
         "0": [ 'ca-XR', 'ValenciÃ ', 'CatalÃ  (ValenciÃ  RACV)', 'y', 'ca-xr/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '145' ], "12": [ 'y', ' 34' ] },	
    
    "cs": {
         "0": [ 'cs', 'Czech', 'ÄŒeÅ¡tina', 'y', 'cs/' ],
         "1": [ 'y', '141' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '142' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '134' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "da": {
         "0": [ 'da', 'Danish', 'Dansk', 'y', 'da/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '144' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 11' ] },
    
    "de": {
         "0": [ 'de', 'German', 'Deutsch', 'y', 'de/downloads/index.html' ],
         "1": [ 'y', '176' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '177' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '169' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '173' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '187' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '157' ], "12": [ 'y', ' 19' ] },
    
    "el": {
         "0": [ 'el', 'Greek', '&Epsilon;&lambda;&lambda;&eta;&nu;&iota;&kappa;Î¬', 'y', 'el/' ],
         "1": [ 'y', '150' ],  "2": [ 'y', ' 21' ],  "3": [ 'y', '151' ],  "4": [ 'y', ' 21' ],  "5": [ 'y', '143' ],
         "6": [ 'y', ' 21' ],  "7": [ 'y', '147' ],  "8": [ 'y', ' 21' ],  "9": [ 'y', '161' ], "10": [ 'y', ' 20' ],
        "11": [ 'y', '131' ], "12": [ 'y', ' 20' ] },
    
    "en-GB": {
         "0": [ 'en-GB', 'English (British)', 'English (British)', 'y', 'download/index.html' ],
         "1": [ 'y', '146' ],  "2": [ 'y', ' 11' ],  "3": [ 'y', '147' ],  "4": [ 'y', ' 11' ],  "5": [ 'y', '139' ],
         "6": [ 'y', ' 11' ],  "7": [ 'y', '143' ],  "8": [ 'y', ' 11' ],  "9": [ 'y', '156' ], "10": [ 'y', ' 10' ],
        "11": [ 'y', '127' ], "12": [ 'y', ' 11' ] },
    
    "en-US": {
         "0": [ 'en-US', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ 'y', '153' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '154' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '146' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '150' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '163' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '134' ], "12": [ 'y', ' 18' ] },
    
    "es": {
         "0": [ 'es', 'Spanish', 'Espa&ntilde;ol', 'y', 'es/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '154' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "eu": {
         "0": [ 'eu', 'Basque', 'Euskara', 'y', 'eu/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "fi": {
         "0": [ 'fi', 'Finnish', 'Suomi', 'y', 'fi/lataa.html' ],
         "1": [ 'y', '149' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '150' ],  "4": [ 'y', ' 20' ],  "5": [ 'y', '142' ],
         "6": [ 'y', ' 20' ],  "7": [ 'y', '146' ],  "8": [ 'y', ' 20' ],  "9": [ 'y', '160' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 19' ] },
    
    "fr": {
         "0": [ 'fr', 'French', 'Fran&ccedil;ais', 'y', 'fr/' ],
         "1": [ 'y', '145' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '146' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '138' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '142' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '156' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '126' ], "12": [ 'y', ' 12' ] },
    
    "gd": {
         "0": [ 'gd', 'Scottish (Gaelic)', 'GÃ idhlig', 'y', 'gd/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '146' ], "12": [ 'y', ' 34' ] },
    
    "gl": {
         "0": [ 'gl', 'Galician', 'Galego', 'y', 'gl/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 18' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 18' ] },
    
    "he": {
         "0": [ 'he', 'Hebrew', '×¢×‘×¨×™×ª',  'y', 'he/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "hi": {
         "0": [ 'hi', 'Hindi', 'à¤¹à¤¿à¤¨à¥à¤¦à¥€', 'y', 'hi/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 18' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 18' ] },
    
    "hu": {
         "0": [ 'hu', 'Hungarian', 'Magyar', 'y', 'hu/' ],
         "1": [ 'y', '144' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '137' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '141' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '155' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '125' ], "12": [ 'y', ' 12' ] },
    
    "it": {
         "0": [ 'it', 'Italian', 'Italiano', 'y', 'it/download/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '146' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 12' ] },
    
    "ja": {
         "0": [ 'ja', 'Japanese', 'æ—¥æœ¬èªž', 'y', 'ja/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '128' ], "12": [ 'y', ' 17' ] },
    
    "km": {
         "0": [ 'km', 'Khmer', 'áž—áž¶ážŸáž¶ážáŸ’áž˜áŸ‚ážš', 'y', 'km/' ],
         "1": [ 'y', '145' ],  "2": [ 'y', ' 15' ],  "3": [ 'y', '146' ],  "4": [ 'y', ' 15' ],  "5": [ 'y', '138' ],
         "6": [ 'y', ' 15' ],  "7": [ 'y', '142' ],  "8": [ 'y', ' 15' ],  "9": [ 'y', '157' ], "10": [ 'y', ' 15' ],
        "11": [ 'y', '143' ], "12": [ 'y', ' 31' ] },
    
    "ko": {
         "0": [ 'ko', 'Korean', 'í•œêµ­ì–´', 'y', 'ko/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "lt": {
         "0": [ 'lt', 'Lithuanian', 'LietuviÅ³', 'y', 'lt/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 17' ] },
    
    "nb": {
         "0": [ 'nb', 'Norwegian (Bokmal)', 'Norsk (BokmÃ¥l)', 'y', 'no/' ],
         "1": [ 'y', '151' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '152' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '144' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '148' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '162' ], "10": [ 'y', ' 18' ],
        "11": [ 'y', '132' ], "12": [ 'y', ' 19' ] },
    
    "nl": {
         "0": [ 'nl', 'Dutch', 'Nederlands', 'y', 'nl/' ],
         "1": [ 'y', '151' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '152' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '144' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '148' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '162' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '132' ], "12": [ 'y', ' 12' ] },
    
    "pl": {
         "0": [ 'pl', 'Polish', 'Polski', 'y', 'pl/product.download.html' ],
         "1": [ 'y', '144' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '137' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '141' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '155' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '125' ], "12": [ 'y', ' 12' ] }, 
    
    "pt": {
         "0": [ 'pt', 'Portuguese (European)', 'Portugu&ecirc;s (Europeu)', 'y', 'pt/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },	
    
    "pt-BR": {
         "0": [ 'pt-BR', 'Portuguese (Brazilian)', 'Portugu&ecirc;s (do Brasil)', 'y', 'pt-br/' ],
         "1": [ 'y', '141' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '142' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '134' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "ru": {	
         "0": [ 'ru', 'Russian', 'Ð ÑƒÑÑÐºÐ¸Ð¹', 'y', 'ru/' ],
         "1": [ 'y', '149' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '150' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '142' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '146' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '160' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 13' ] },
    
    "sk": {
         "0": [ 'sk', 'Slovak', 'SlovenskÃ½ jazyk (slovenÄina)', 'y', 'sk/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 11' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 11' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 11' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 11' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 10' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 11' ] },
    
    "sl": {
         "0": [ 'sl', 'Slovenian', 'Slovenski jezik (slovenÅ¡Äina)', 'y', 'sl/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '144' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "sr": {
         "0": [ 'sr', 'Serbian (Cyrillic)', 'CÑ€Ð¿ÑÐºÐ¸ (Ñ›Ð¸Ñ€Ð¸Ð»Ð¸Ñ†Ð¾Ð¼)', 'y', 'sr/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "sv": {
         "0": [ 'sv', 'Swedish', 'Svenska', 'y', 'sv/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 11' ] },
    
    "ta": {	
         "0": [ 'ta', 'Tamil', 'à®¤à®®à®¿à®´à¯', 'y', 'ta/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "th": {
         "0": [ 'th', 'Thai', 'à¸ à¸²à¸©à¸²à¹„à¸—à¸¢', 'y', 'th/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '144' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "tr": {
         "0": [ 'tr', 'Turkish', 'T&uuml;rk&ccedil;e', 'y', 'tr/' ],
         "1": [ 'y', '141' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '142' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '134' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '138' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '122' ], "12": [ 'y', ' 11' ] },
    
    "vi": {
         "0": [ 'vi', 'Vietnamese', 'Tiáº¿ng Viá»‡t', 'y', 'vi/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "zh-CN": {
         "0": [ 'zh-CN', 'Chinese (simplified)', 'ç®€ä½“ä¸­æ–‡', 'y',	 'zh-cn/download/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 13' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 13' ] },
    
    "zh-TW": {
         "0": [ 'zh-TW', 'Chinese (traditional)', 'æ­£é«”ä¸­æ–‡', 'y', 'zh-tw/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '144' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 13' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 13' ] }
    };
    
    /* Description for AOO 4.1.5.
     *
     * For the matrix position and their meanings see the descriptions on top of file.
     */
    DL.release_matrix_415 = {
    "src": {
         "0": [ 'src', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ 'AOO415m1', '9789', 'r1817496', '2017-12-30' ],
         "2": [ 'tar_bz2', 'y', '209' ],
         "3": [ 'tar_gz',  'y', '276' ],
         "4": [ 'zip',	   'y', '323' ] },
    
    "sdk": {
         "0": [ 'sdk', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ /* lnx_64_f_d  */ 'y', '  9' ],
         "2": [ /* lnx_64_lp_d */ 'n', '  0' ],
         "3": [ /* lnx_64_f_r  */ 'y', '  8' ],
         "4": [ /* lnx_64_lp_r */ 'n', '  0' ],
         "5": [ /* lnx_32_f_d  */ 'y', '  9' ],
         "6": [ /* lnx_32_lp_d */ 'n', '  0' ],
         "7": [ /* lnx_32_f_r  */ 'y', '  8' ],
         "8": [ /* lnx_32_lp_r */ 'n', '  0' ],
         "9": [ /* mac_64_f    */ 'y', ' 12' ],
        "10": [ /* mac_64_lp   */ 'n', '  0' ],
        "11": [ /* win_32_f    */ 'y', '  7' ],
        "12": [ /* win_32_lp   */ 'n', '  0' ] },
    
    "ar": {
         "0": [ 'ar', 'Arabic', 'Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©', 'n', 'ar/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },		
    
    "ast": {
         "0": [ 'ast', 'Asturian', 'Asturianu', 'y', 'ast/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '145' ], "12": [ 'y', ' 34' ] },
    
    "bg": {
         "0": [ 'bg', 'Bulgarian', 'Ð±ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸ ÐµÐ·Ð¸Ðº', 'y', 'bg/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "ca": {
         "0": [ 'ca', 'Catalan', 'CatalÃ ', 'y', 'ca/' ],
         "1": [ 'y', '153' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '154' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '146' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '151' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '164' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '135' ], "12": [ 'y', ' 19' ] },
    
    "ca-XV": {
         "0": [ 'ca-XV', 'ValenciÃ ', 'CatalÃ  (ValenciÃ  AVL)', 'y', 'ca-xv/' ],
         "1": [ 'y', '153' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '154' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '146' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '151' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '164' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '151' ], "12": [ 'y', ' 35' ] },	
    
    "ca-XR": {
         "0": [ 'ca-XR', 'ValenciÃ ', 'CatalÃ  (ValenciÃ  RACV)', 'y', 'ca-xr/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '145' ], "12": [ 'y', ' 34' ] },	
    
    "cs": {
         "0": [ 'cs', 'Czech', 'ÄŒeÅ¡tina', 'y', 'cs/' ],
         "1": [ 'y', '141' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '142' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '134' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "da": {
         "0": [ 'da', 'Danish', 'Dansk', 'y', 'da/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '144' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 11' ] },
    
    "de": {
         "0": [ 'de', 'German', 'Deutsch', 'y', 'de/downloads/index.html' ],
         "1": [ 'y', '176' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '177' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '169' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '173' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '187' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '157' ], "12": [ 'y', ' 19' ] },
    
    "el": {
         "0": [ 'el', 'Greek', '&Epsilon;&lambda;&lambda;&eta;&nu;&iota;&kappa;Î¬', 'y', 'el/' ],
         "1": [ 'y', '150' ],  "2": [ 'y', ' 21' ],  "3": [ 'y', '151' ],  "4": [ 'y', ' 21' ],  "5": [ 'y', '143' ],
         "6": [ 'y', ' 21' ],  "7": [ 'y', '147' ],  "8": [ 'y', ' 21' ],  "9": [ 'y', '161' ], "10": [ 'y', ' 20' ],
        "11": [ 'y', '131' ], "12": [ 'y', ' 20' ] },
    
    "en-GB": {
         "0": [ 'en-GB', 'English (British)', 'English (British)', 'y', 'download/index.html' ],
         "1": [ 'y', '146' ],  "2": [ 'y', ' 11' ],  "3": [ 'y', '147' ],  "4": [ 'y', ' 11' ],  "5": [ 'y', '139' ],
         "6": [ 'y', ' 11' ],  "7": [ 'y', '143' ],  "8": [ 'y', ' 11' ],  "9": [ 'y', '156' ], "10": [ 'y', ' 10' ],
        "11": [ 'y', '127' ], "12": [ 'y', ' 11' ] },
    
    "en-US": {
         "0": [ 'en-US', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ 'y', '153' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '154' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '146' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '150' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '163' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '134' ], "12": [ 'y', ' 18' ] },
    
    "es": {
         "0": [ 'es', 'Spanish', 'Espa&ntilde;ol', 'y', 'es/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '154' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "eu": {
         "0": [ 'eu', 'Basque', 'Euskara', 'y', 'eu/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "fi": {
         "0": [ 'fi', 'Finnish', 'Suomi', 'y', 'fi/lataa.html' ],
         "1": [ 'y', '149' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '150' ],  "4": [ 'y', ' 20' ],  "5": [ 'y', '142' ],
         "6": [ 'y', ' 20' ],  "7": [ 'y', '146' ],  "8": [ 'y', ' 20' ],  "9": [ 'y', '160' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 19' ] },
    
    "fr": {
         "0": [ 'fr', 'French', 'Fran&ccedil;ais', 'y', 'fr/' ],
         "1": [ 'y', '145' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '146' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '138' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '142' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '156' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '126' ], "12": [ 'y', ' 12' ] },
    
    "gd": {
         "0": [ 'gd', 'Scottish (Gaelic)', 'GÃ idhlig', 'y', 'gd/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '146' ], "12": [ 'y', ' 34' ] },
    
    "gl": {
         "0": [ 'gl', 'Galician', 'Galego', 'y', 'gl/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 18' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 18' ] },
    
    "he": {
         "0": [ 'he', 'Hebrew', '×¢×‘×¨×™×ª',  'y', 'he/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "hi": {
         "0": [ 'hi', 'Hindi', 'à¤¹à¤¿à¤¨à¥à¤¦à¥€', 'y', 'hi/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 18' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 18' ] },
    
    "hu": {
         "0": [ 'hu', 'Hungarian', 'Magyar', 'y', 'hu/' ],
         "1": [ 'y', '144' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '137' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '141' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '155' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '125' ], "12": [ 'y', ' 12' ] },
    
    "it": {
         "0": [ 'it', 'Italian', 'Italiano', 'y', 'it/download/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '146' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 12' ] },
    
    "ja": {
         "0": [ 'ja', 'Japanese', 'æ—¥æœ¬èªž', 'y', 'ja/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '128' ], "12": [ 'y', ' 17' ] },
    
    "km": {
         "0": [ 'km', 'Khmer', 'áž—áž¶ážŸáž¶ážáŸ’áž˜áŸ‚ážš', 'y', 'km/' ],
         "1": [ 'y', '145' ],  "2": [ 'y', ' 15' ],  "3": [ 'y', '146' ],  "4": [ 'y', ' 15' ],  "5": [ 'y', '138' ],
         "6": [ 'y', ' 15' ],  "7": [ 'y', '142' ],  "8": [ 'y', ' 15' ],  "9": [ 'y', '157' ], "10": [ 'y', ' 15' ],
        "11": [ 'y', '143' ], "12": [ 'y', ' 31' ] },
    
    "ko": {
         "0": [ 'ko', 'Korean', 'í•œêµ­ì–´', 'y', 'ko/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "lt": {
         "0": [ 'lt', 'Lithuanian', 'LietuviÅ³', 'y', 'lt/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 17' ] },
    
    "nb": {
         "0": [ 'nb', 'Norwegian (Bokmal)', 'Norsk (BokmÃ¥l)', 'y', 'no/' ],
         "1": [ 'y', '151' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '152' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '144' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '148' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '162' ], "10": [ 'y', ' 18' ],
        "11": [ 'y', '132' ], "12": [ 'y', ' 19' ] },
    
    "nl": {
         "0": [ 'nl', 'Dutch', 'Nederlands', 'y', 'nl/' ],
         "1": [ 'y', '151' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '152' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '144' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '148' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '162' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '132' ], "12": [ 'y', ' 12' ] },
    
    "pl": {
         "0": [ 'pl', 'Polish', 'Polski', 'y', 'pl/product.download.html' ],
         "1": [ 'y', '144' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '137' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '141' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '155' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '125' ], "12": [ 'y', ' 12' ] }, 
    
    "pt": {
         "0": [ 'pt', 'Portuguese (European)', 'Portugu&ecirc;s (Europeu)', 'y', 'pt/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },	
    
    "pt-BR": {
         "0": [ 'pt-BR', 'Portuguese (Brazilian)', 'Portugu&ecirc;s (do Brasil)', 'y', 'pt-br/' ],
         "1": [ 'y', '141' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '142' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '134' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "ru": {	
         "0": [ 'ru', 'Russian', 'Ð ÑƒÑÑÐºÐ¸Ð¹', 'y', 'ru/' ],
         "1": [ 'y', '149' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '150' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '142' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '146' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '160' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 13' ] },
    
    "sk": {
         "0": [ 'sk', 'Slovak', 'SlovenskÃ½ jazyk (slovenÄina)', 'y', 'sk/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 11' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 11' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 11' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 11' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 10' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 11' ] },
    
    "sl": {
         "0": [ 'sl', 'Slovenian', 'Slovenski jezik (slovenÅ¡Äina)', 'y', 'sl/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '144' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "sr": {
         "0": [ 'sr', 'Serbian (Cyrillic)', 'CÑ€Ð¿ÑÐºÐ¸ (Ñ›Ð¸Ñ€Ð¸Ð»Ð¸Ñ†Ð¾Ð¼)', 'y', 'sr/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "sv": {
         "0": [ 'sv', 'Swedish', 'Svenska', 'y', 'sv/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 11' ] },
    
    "ta": {	
         "0": [ 'ta', 'Tamil', 'à®¤à®®à®¿à®´à¯', 'y', 'ta/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "th": {
         "0": [ 'th', 'Thai', 'à¸ à¸²à¸©à¸²à¹„à¸—à¸¢', 'y', 'th/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '144' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "tr": {
         "0": [ 'tr', 'Turkish', 'T&uuml;rk&ccedil;e', 'y', 'tr/' ],
         "1": [ 'y', '141' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '142' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '134' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '138' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '122' ], "12": [ 'y', ' 11' ] },
    
    "vi": {
         "0": [ 'vi', 'Vietnamese', 'Tiáº¿ng Viá»‡t', 'y', 'vi/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "zh-CN": {
         "0": [ 'zh-CN', 'Chinese (simplified)', 'ç®€ä½“ä¸­æ–‡', 'y',	 'zh-cn/download/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 13' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 13' ] },
    
    "zh-TW": {
         "0": [ 'zh-TW', 'Chinese (traditional)', 'æ­£é«”ä¸­æ–‡', 'y', 'zh-tw/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '144' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 13' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 13' ] }
    };
    
    /* Description for AOO 4.1.4.
     *
     * For the matrix position and their meanings see the descriptions on top of file.
     */
    DL.release_matrix_414 = {
    "src": {
         "0": [ 'src', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ 'AOO414m5', '9788', 'r1811857', '2017-10-19' ],
         "2": [ 'tar_bz2', 'y', '209' ],
         "3": [ 'tar_gz',  'y', '276' ],
         "4": [ 'zip',	   'y', '323' ] },
    
    "sdk": {
         "0": [ 'sdk', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ /* lnx_64_f_d  */ 'y', '  9' ],
         "2": [ /* lnx_64_lp_d */ 'n', '  0' ],
         "3": [ /* lnx_64_f_r  */ 'y', '  8' ],
         "4": [ /* lnx_64_lp_r */ 'n', '  0' ],
         "5": [ /* lnx_32_f_d  */ 'y', '  9' ],
         "6": [ /* lnx_32_lp_d */ 'n', '  0' ],
         "7": [ /* lnx_32_f_r  */ 'y', '  8' ],
         "8": [ /* lnx_32_lp_r */ 'n', '  0' ],
         "9": [ /* mac_64_f    */ 'y', ' 12' ],
        "10": [ /* mac_64_lp   */ 'n', '  0' ],
        "11": [ /* win_32_f    */ 'y', '  7' ],
        "12": [ /* win_32_lp   */ 'n', '  0' ] },
    
    "ar": {
         "0": [ 'ar', 'Arabic', 'Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©', 'n', 'ar/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },		
    
    "ast": {
         "0": [ 'ast', 'Asturian', 'Asturianu', 'y', 'ast/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '145' ], "12": [ 'y', ' 34' ] },
    
    "bg": {
         "0": [ 'bg', 'Bulgarian', 'Ð±ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸ ÐµÐ·Ð¸Ðº', 'y', 'bg/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "ca": {
         "0": [ 'ca', 'Catalan', 'CatalÃ ', 'y', 'ca/' ],
         "1": [ 'y', '153' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '154' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '146' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '151' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '164' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '135' ], "12": [ 'y', ' 19' ] },
    
    "ca-XV": {
         "0": [ 'ca-XV', 'ValenciÃ ', 'CatalÃ  (ValenciÃ  AVL)', 'y', 'ca-xv/' ],
         "1": [ 'y', '153' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '154' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '146' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '151' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '164' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '151' ], "12": [ 'y', ' 35' ] },	
    
    "ca-XR": {
         "0": [ 'ca-XR', 'ValenciÃ ', 'CatalÃ  (ValenciÃ  RACV)', 'y', 'ca-xr/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '145' ], "12": [ 'y', ' 34' ] },	
    
    "cs": {
         "0": [ 'cs', 'Czech', 'ÄŒeÅ¡tina', 'y', 'cs/' ],
         "1": [ 'y', '141' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '142' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '134' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "da": {
         "0": [ 'da', 'Danish', 'Dansk', 'y', 'da/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '144' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 11' ] },
    
    "de": {
         "0": [ 'de', 'German', 'Deutsch', 'y', 'de/downloads/index.html' ],
         "1": [ 'y', '176' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '177' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '169' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '173' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '187' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '157' ], "12": [ 'y', ' 19' ] },
    
    "el": {
         "0": [ 'el', 'Greek', '&Epsilon;&lambda;&lambda;&eta;&nu;&iota;&kappa;Î¬', 'y', 'el/' ],
         "1": [ 'y', '150' ],  "2": [ 'y', ' 21' ],  "3": [ 'y', '151' ],  "4": [ 'y', ' 21' ],  "5": [ 'y', '143' ],
         "6": [ 'y', ' 21' ],  "7": [ 'y', '147' ],  "8": [ 'y', ' 21' ],  "9": [ 'y', '161' ], "10": [ 'y', ' 20' ],
        "11": [ 'y', '131' ], "12": [ 'y', ' 20' ] },
    
    "en-GB": {
         "0": [ 'en-GB', 'English (British)', 'English (British)', 'y', 'download/index.html' ],
         "1": [ 'y', '146' ],  "2": [ 'y', ' 11' ],  "3": [ 'y', '147' ],  "4": [ 'y', ' 11' ],  "5": [ 'y', '139' ],
         "6": [ 'y', ' 11' ],  "7": [ 'y', '143' ],  "8": [ 'y', ' 11' ],  "9": [ 'y', '156' ], "10": [ 'y', ' 10' ],
        "11": [ 'y', '127' ], "12": [ 'y', ' 11' ] },
    
    "en-US": {
         "0": [ 'en-US', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ 'y', '153' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '154' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '146' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '150' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '163' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '134' ], "12": [ 'y', ' 18' ] },
    
    "es": {
         "0": [ 'es', 'Spanish', 'Espa&ntilde;ol', 'y', 'es/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '154' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "eu": {
         "0": [ 'eu', 'Basque', 'Euskara', 'y', 'eu/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "fi": {
         "0": [ 'fi', 'Finnish', 'Suomi', 'y', 'fi/lataa.html' ],
         "1": [ 'y', '149' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '150' ],  "4": [ 'y', ' 20' ],  "5": [ 'y', '142' ],
         "6": [ 'y', ' 20' ],  "7": [ 'y', '146' ],  "8": [ 'y', ' 20' ],  "9": [ 'y', '160' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 19' ] },
    
    "fr": {
         "0": [ 'fr', 'French', 'Fran&ccedil;ais', 'y', 'fr/' ],
         "1": [ 'y', '145' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '146' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '138' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '142' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '156' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '126' ], "12": [ 'y', ' 12' ] },
    
    "gd": {
         "0": [ 'gd', 'Scottish (Gaelic)', 'GÃ idhlig', 'y', 'gd/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '146' ], "12": [ 'y', ' 34' ] },
    
    "gl": {
         "0": [ 'gl', 'Galician', 'Galego', 'y', 'gl/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 18' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 18' ] },
    
    "he": {
         "0": [ 'he', 'Hebrew', '×¢×‘×¨×™×ª',  'y', 'he/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "hi": {
         "0": [ 'hi', 'Hindi', 'à¤¹à¤¿à¤¨à¥à¤¦à¥€', 'y', 'hi/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 18' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 18' ] },
    
    "hu": {
         "0": [ 'hu', 'Hungarian', 'Magyar', 'y', 'hu/' ],
         "1": [ 'y', '144' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '137' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '141' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '155' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '125' ], "12": [ 'y', ' 12' ] },
    
    "it": {
         "0": [ 'it', 'Italian', 'Italiano', 'y', 'it/download/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '146' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 12' ] },
    
    "ja": {
         "0": [ 'ja', 'Japanese', 'æ—¥æœ¬èªž', 'y', 'ja/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '128' ], "12": [ 'y', ' 17' ] },
    
    "km": {
         "0": [ 'km', 'Khmer', 'áž—áž¶ážŸáž¶ážáŸ’áž˜áŸ‚ážš', 'y', 'km/' ],
         "1": [ 'y', '145' ],  "2": [ 'y', ' 15' ],  "3": [ 'y', '146' ],  "4": [ 'y', ' 15' ],  "5": [ 'y', '138' ],
         "6": [ 'y', ' 15' ],  "7": [ 'y', '142' ],  "8": [ 'y', ' 15' ],  "9": [ 'y', '157' ], "10": [ 'y', ' 15' ],
        "11": [ 'y', '143' ], "12": [ 'y', ' 31' ] },
    
    "ko": {
         "0": [ 'ko', 'Korean', 'í•œêµ­ì–´', 'y', 'ko/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "lt": {
         "0": [ 'lt', 'Lithuanian', 'LietuviÅ³', 'y', 'lt/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 17' ] },
    
    "nb": {
         "0": [ 'nb', 'Norwegian (Bokmal)', 'Norsk (BokmÃ¥l)', 'y', 'no/' ],
         "1": [ 'y', '151' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '152' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '144' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '148' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '162' ], "10": [ 'y', ' 18' ],
        "11": [ 'y', '132' ], "12": [ 'y', ' 19' ] },
    
    "nl": {
         "0": [ 'nl', 'Dutch', 'Nederlands', 'y', 'nl/' ],
         "1": [ 'y', '151' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '152' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '144' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '148' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '162' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '132' ], "12": [ 'y', ' 12' ] },
    
    "pl": {
         "0": [ 'pl', 'Polish', 'Polski', 'y', 'pl/product.download.html' ],
         "1": [ 'y', '144' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '137' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '141' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '155' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '125' ], "12": [ 'y', ' 12' ] }, 
    
    "pt": {
         "0": [ 'pt', 'Portuguese (European)', 'Portugu&ecirc;s (Europeu)', 'y', 'pt/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },	
    
    "pt-BR": {
         "0": [ 'pt-BR', 'Portuguese (Brazilian)', 'Portugu&ecirc;s (do Brasil)', 'y', 'pt-br/' ],
         "1": [ 'y', '141' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '142' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '134' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "ru": {	
         "0": [ 'ru', 'Russian', 'Ð ÑƒÑÑÐºÐ¸Ð¹', 'y', 'ru/' ],
         "1": [ 'y', '149' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '150' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '142' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '146' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '160' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 13' ] },
    
    "sk": {
         "0": [ 'sk', 'Slovak', 'SlovenskÃ½ jazyk (slovenÄina)', 'y', 'sk/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 11' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 11' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 11' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 11' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 10' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 11' ] },
    
    "sl": {
         "0": [ 'sl', 'Slovenian', 'Slovenski jezik (slovenÅ¡Äina)', 'y', 'sl/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '144' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "sr": {
         "0": [ 'sr', 'Serbian (Cyrillic)', 'CÑ€Ð¿ÑÐºÐ¸ (Ñ›Ð¸Ñ€Ð¸Ð»Ð¸Ñ†Ð¾Ð¼)', 'y', 'sr/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "sv": {
         "0": [ 'sv', 'Swedish', 'Svenska', 'y', 'sv/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 11' ] },
    
    "ta": {	
         "0": [ 'ta', 'Tamil', 'à®¤à®®à®¿à®´à¯', 'y', 'ta/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "th": {
         "0": [ 'th', 'Thai', 'à¸ à¸²à¸©à¸²à¹„à¸—à¸¢', 'y', 'th/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '144' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "tr": {
         "0": [ 'tr', 'Turkish', 'T&uuml;rk&ccedil;e', 'y', 'tr/' ],
         "1": [ 'y', '141' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '142' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '134' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '138' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '122' ], "12": [ 'y', ' 11' ] },
    
    "vi": {
         "0": [ 'vi', 'Vietnamese', 'Tiáº¿ng Viá»‡t', 'y', 'vi/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "zh-CN": {
         "0": [ 'zh-CN', 'Chinese (simplified)', 'ç®€ä½“ä¸­æ–‡', 'y',	 'zh-cn/download/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 13' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 13' ] },
    
    "zh-TW": {
         "0": [ 'zh-TW', 'Chinese (traditional)', 'æ­£é«”ä¸­æ–‡', 'y', 'zh-tw/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '144' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 13' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 13' ] }
    };
    
    /* Description for AOO 4.1.3.
     *
     * For the matrix position and their meanings see the descriptions on top of file.
     */
    DL.release_matrix_413 = {
    "src": {
         "0": [ 'src', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ 'AOO413m1', '9783', 'r1761381', '2016-10-12' ],
         "2": [ 'tar_bz2', 'y', '209' ],
         "3": [ 'tar_gz',  'y', '276' ],
         "4": [ 'zip',	   'y', '323' ] },
    
    "sdk": {
         "0": [ 'sdk', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ /* lnx_64_f_d  */ 'y', '  9' ],
         "2": [ /* lnx_64_lp_d */ 'n', '  0' ],
         "3": [ /* lnx_64_f_r  */ 'y', '  8' ],
         "4": [ /* lnx_64_lp_r */ 'n', '  0' ],
         "5": [ /* lnx_32_f_d  */ 'y', '  9' ],
         "6": [ /* lnx_32_lp_d */ 'n', '  0' ],
         "7": [ /* lnx_32_f_r  */ 'y', '  8' ],
         "8": [ /* lnx_32_lp_r */ 'n', '  0' ],
         "9": [ /* mac_64_f    */ 'y', ' 12' ],
        "10": [ /* mac_64_lp   */ 'n', '  0' ],
        "11": [ /* win_32_f    */ 'y', '  7' ],
        "12": [ /* win_32_lp   */ 'n', '  0' ] },
    
    "ar": {
         "0": [ 'ar', 'Arabic', 'Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©', 'n', 'ar/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },		
    
    "ast": {
         "0": [ 'ast', 'Asturian', 'Asturianu', 'y', 'ast/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '145' ], "12": [ 'y', ' 34' ] },
    
    "bg": {
         "0": [ 'bg', 'Bulgarian', 'Ð±ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸ ÐµÐ·Ð¸Ðº', 'y', 'bg/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "ca": {
         "0": [ 'ca', 'Catalan', 'CatalÃ ', 'y', 'ca/' ],
         "1": [ 'y', '153' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '154' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '146' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '151' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '164' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '135' ], "12": [ 'y', ' 19' ] },
    
    "ca-XV": {
         "0": [ 'ca-XV', 'ValenciÃ ', 'CatalÃ  (ValenciÃ  AVL)', 'y', 'ca-xv/' ],
         "1": [ 'y', '153' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '154' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '146' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '151' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '164' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '151' ], "12": [ 'y', ' 35' ] },	
    
    "ca-XR": {
         "0": [ 'ca-XR', 'ValenciÃ ', 'CatalÃ  (ValenciÃ  RACV)', 'y', 'ca-xr/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '145' ], "12": [ 'y', ' 34' ] },	
    
    "cs": {
         "0": [ 'cs', 'Czech', 'ÄŒeÅ¡tina', 'y', 'cs/' ],
         "1": [ 'y', '141' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '142' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '134' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "da": {
         "0": [ 'da', 'Danish', 'Dansk', 'y', 'da/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '144' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 11' ] },
    
    "de": {
         "0": [ 'de', 'German', 'Deutsch', 'y', 'de/downloads/index.html' ],
         "1": [ 'y', '176' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '177' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '169' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '173' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '187' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '157' ], "12": [ 'y', ' 19' ] },
    
    "el": {
         "0": [ 'el', 'Greek', '&Epsilon;&lambda;&lambda;&eta;&nu;&iota;&kappa;Î¬', 'y', 'el/' ],
         "1": [ 'y', '150' ],  "2": [ 'y', ' 21' ],  "3": [ 'y', '151' ],  "4": [ 'y', ' 21' ],  "5": [ 'y', '143' ],
         "6": [ 'y', ' 21' ],  "7": [ 'y', '147' ],  "8": [ 'y', ' 21' ],  "9": [ 'y', '161' ], "10": [ 'y', ' 20' ],
        "11": [ 'y', '131' ], "12": [ 'y', ' 20' ] },
    
    "en-GB": {
         "0": [ 'en-GB', 'English (British)', 'English (British)', 'y', 'download/index.html' ],
         "1": [ 'y', '146' ],  "2": [ 'y', ' 11' ],  "3": [ 'y', '147' ],  "4": [ 'y', ' 11' ],  "5": [ 'y', '139' ],
         "6": [ 'y', ' 11' ],  "7": [ 'y', '143' ],  "8": [ 'y', ' 11' ],  "9": [ 'y', '156' ], "10": [ 'y', ' 10' ],
        "11": [ 'y', '127' ], "12": [ 'y', ' 11' ] },
    
    "en-US": {
         "0": [ 'en-US', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ 'y', '153' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '154' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '146' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '150' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '163' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '134' ], "12": [ 'y', ' 18' ] },
    
    "es": {
         "0": [ 'es', 'Spanish', 'Espa&ntilde;ol', 'y', 'es/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '154' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "eu": {
         "0": [ 'eu', 'Basque', 'Euskara', 'y', 'eu/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "fi": {
         "0": [ 'fi', 'Finnish', 'Suomi', 'y', 'fi/lataa.html' ],
         "1": [ 'y', '149' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '150' ],  "4": [ 'y', ' 20' ],  "5": [ 'y', '142' ],
         "6": [ 'y', ' 20' ],  "7": [ 'y', '146' ],  "8": [ 'y', ' 20' ],  "9": [ 'y', '160' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 19' ] },
    
    "fr": {
         "0": [ 'fr', 'French', 'Fran&ccedil;ais', 'y', 'fr/' ],
         "1": [ 'y', '145' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '146' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '138' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '142' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '156' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '126' ], "12": [ 'y', ' 12' ] },
    
    "gd": {
         "0": [ 'gd', 'Scottish (Gaelic)', 'GÃ idhlig', 'y', 'gd/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '146' ], "12": [ 'y', ' 34' ] },
    
    "gl": {
         "0": [ 'gl', 'Galician', 'Galego', 'y', 'gl/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 18' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 18' ] },
    
    "he": {
         "0": [ 'he', 'Hebrew', '×¢×‘×¨×™×ª',  'y', 'he/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "hi": {
         "0": [ 'hi', 'Hindi', 'à¤¹à¤¿à¤¨à¥à¤¦à¥€', 'y', 'hi/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 18' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 18' ] },
    
    "hu": {
         "0": [ 'hu', 'Hungarian', 'Magyar', 'y', 'hu/' ],
         "1": [ 'y', '144' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '137' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '141' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '155' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '125' ], "12": [ 'y', ' 12' ] },
    
    "it": {
         "0": [ 'it', 'Italian', 'Italiano', 'y', 'it/download/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '146' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 12' ] },
    
    "ja": {
         "0": [ 'ja', 'Japanese', 'æ—¥æœ¬èªž', 'y', 'ja/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '128' ], "12": [ 'y', ' 17' ] },
    
    "km": {
         "0": [ 'km', 'Khmer', 'áž—áž¶ážŸáž¶ážáŸ’áž˜áŸ‚ážš', 'y', 'km/' ],
         "1": [ 'y', '145' ],  "2": [ 'y', ' 15' ],  "3": [ 'y', '146' ],  "4": [ 'y', ' 15' ],  "5": [ 'y', '138' ],
         "6": [ 'y', ' 15' ],  "7": [ 'y', '142' ],  "8": [ 'y', ' 15' ],  "9": [ 'y', '157' ], "10": [ 'y', ' 15' ],
        "11": [ 'y', '143' ], "12": [ 'y', ' 31' ] },
    
    "ko": {
         "0": [ 'ko', 'Korean', 'í•œêµ­ì–´', 'y', 'ko/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "lt": {
         "0": [ 'lt', 'Lithuanian', 'LietuviÅ³', 'y', 'lt/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 17' ] },
    
    "nb": {
         "0": [ 'nb', 'Norwegian (Bokmal)', 'Norsk (BokmÃ¥l)', 'y', 'no/' ],
         "1": [ 'y', '151' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '152' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '144' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '148' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '162' ], "10": [ 'y', ' 18' ],
        "11": [ 'y', '132' ], "12": [ 'y', ' 19' ] },
    
    "nl": {
         "0": [ 'nl', 'Dutch', 'Nederlands', 'y', 'nl/' ],
         "1": [ 'y', '151' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '152' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '144' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '148' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '162' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '132' ], "12": [ 'y', ' 12' ] },
    
    "pl": {
         "0": [ 'pl', 'Polish', 'Polski', 'y', 'pl/product.download.html' ],
         "1": [ 'y', '144' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '137' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '141' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '155' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '125' ], "12": [ 'y', ' 12' ] }, 
    
    "pt": {
         "0": [ 'pt', 'Portuguese (European)', 'Portugu&ecirc;s (Europeu)', 'y', 'pt/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },	
    
    "pt-BR": {
         "0": [ 'pt-BR', 'Portuguese (Brazilian)', 'Portugu&ecirc;s (do Brasil)', 'y', 'pt-br/' ],
         "1": [ 'y', '141' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '142' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '134' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "ru": {	
         "0": [ 'ru', 'Russian', 'Ð ÑƒÑÑÐºÐ¸Ð¹', 'y', 'ru/' ],
         "1": [ 'y', '149' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '150' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '142' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '146' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '160' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 13' ] },
    
    "sk": {
         "0": [ 'sk', 'Slovak', 'SlovenskÃ½ jazyk (slovenÄina)', 'y', 'sk/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 11' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 11' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 11' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 11' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 10' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 11' ] },
    
    "sl": {
         "0": [ 'sl', 'Slovenian', 'Slovenski jezik (slovenÅ¡Äina)', 'y', 'sl/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '144' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "sr": {
         "0": [ 'sr', 'Serbian (Cyrillic)', 'CÑ€Ð¿ÑÐºÐ¸ (Ñ›Ð¸Ñ€Ð¸Ð»Ð¸Ñ†Ð¾Ð¼)', 'y', 'sr/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "sv": {
         "0": [ 'sv', 'Swedish', 'Svenska', 'y', 'sv/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 11' ] },
    
    "ta": {	
         "0": [ 'ta', 'Tamil', 'à®¤à®®à®¿à®´à¯', 'y', 'ta/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "th": {
         "0": [ 'th', 'Thai', 'à¸ à¸²à¸©à¸²à¹„à¸—à¸¢', 'y', 'th/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '144' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "tr": {
         "0": [ 'tr', 'Turkish', 'T&uuml;rk&ccedil;e', 'y', 'tr/' ],
         "1": [ 'y', '141' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '142' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '134' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '138' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '122' ], "12": [ 'y', ' 11' ] },
    
    "vi": {
         "0": [ 'vi', 'Vietnamese', 'Tiáº¿ng Viá»‡t', 'y', 'vi/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "zh-CN": {
         "0": [ 'zh-CN', 'Chinese (simplified)', 'ç®€ä½“ä¸­æ–‡', 'y',	 'zh-cn/download/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 13' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 13' ] },
    
    "zh-TW": {
         "0": [ 'zh-TW', 'Chinese (traditional)', 'æ­£é«”ä¸­æ–‡', 'y', 'zh-tw/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '144' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 13' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 13' ] }
    };
    
    /* Description for AOO 4.1.2.
     *
     * For the matrix position and their meanings see the descriptions on top of file.
     */
    DL.release_matrix_412 = {
    "src": {
         "0": [ 'src', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ 'AOO412m3', '9782', 'r1709699', '2015-10-28' ],
         "2": [ 'tar_bz2', 'y', '209' ],
         "3": [ 'tar_gz',  'y', '276' ],
         "4": [ 'zip',	   'y', '323' ] },
    
    "sdk": {
         "0": [ 'sdk', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ /* lnx_64_f_d  */ 'y', '  9' ],
         "2": [ /* lnx_64_lp_d */ 'n', '  0' ],
         "3": [ /* lnx_64_f_r  */ 'y', '  8' ],
         "4": [ /* lnx_64_lp_r */ 'n', '  0' ],
         "5": [ /* lnx_32_f_d  */ 'y', '  9' ],
         "6": [ /* lnx_32_lp_d */ 'n', '  0' ],
         "7": [ /* lnx_32_f_r  */ 'y', '  8' ],
         "8": [ /* lnx_32_lp_r */ 'n', '  0' ],
         "9": [ /* mac_64_f    */ 'y', ' 12' ],
        "10": [ /* mac_64_lp   */ 'n', '  0' ],
        "11": [ /* win_32_f    */ 'y', '  7' ],
        "12": [ /* win_32_lp   */ 'n', '  0' ] },
    
    "ar": {
         "0": [ 'ar', 'Arabic', 'Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©', 'n', 'ar/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },		
    
    "ast": {
         "0": [ 'ast', 'Asturian', 'Asturianu', 'y', 'ast/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '145' ], "12": [ 'y', ' 34' ] },
    
    "bg": {
         "0": [ 'bg', 'Bulgarian', 'Ð±ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸ ÐµÐ·Ð¸Ðº', 'y', 'bg/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "ca": {
         "0": [ 'ca', 'Catalan', 'CatalÃ ', 'y', 'ca/' ],
         "1": [ 'y', '153' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '154' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '146' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '151' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '164' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '135' ], "12": [ 'y', ' 19' ] },
    
    "ca-XV": {
         "0": [ 'ca-XV', 'ValenciÃ ', 'CatalÃ  (ValenciÃ  AVL)', 'y', 'ca-xv/' ],
         "1": [ 'y', '153' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '154' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '146' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '151' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '164' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '151' ], "12": [ 'y', ' 35' ] },	
    
    "ca-XR": {
         "0": [ 'ca-XR', 'ValenciÃ ', 'CatalÃ  (ValenciÃ  RACV)', 'y', 'ca-xr/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '145' ], "12": [ 'y', ' 34' ] },	
    
    "cs": {
         "0": [ 'cs', 'Czech', 'ÄŒeÅ¡tina', 'y', 'cs/' ],
         "1": [ 'y', '141' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '142' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '134' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "da": {
         "0": [ 'da', 'Danish', 'Dansk', 'y', 'da/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '144' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 11' ] },
    
    "de": {
         "0": [ 'de', 'German', 'Deutsch', 'y', 'de/downloads/index.html' ],
         "1": [ 'y', '176' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '177' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '169' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '173' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '187' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '157' ], "12": [ 'y', ' 19' ] },
    
    "el": {
         "0": [ 'el', 'Greek', '&Epsilon;&lambda;&lambda;&eta;&nu;&iota;&kappa;Î¬', 'y', 'el/' ],
         "1": [ 'y', '150' ],  "2": [ 'y', ' 21' ],  "3": [ 'y', '151' ],  "4": [ 'y', ' 21' ],  "5": [ 'y', '143' ],
         "6": [ 'y', ' 21' ],  "7": [ 'y', '147' ],  "8": [ 'y', ' 21' ],  "9": [ 'y', '161' ], "10": [ 'y', ' 20' ],
        "11": [ 'y', '131' ], "12": [ 'y', ' 20' ] },
    
    "en-GB": {
         "0": [ 'en-GB', 'English (British)', 'English (British)', 'y', 'download/index.html' ],
         "1": [ 'y', '146' ],  "2": [ 'y', ' 11' ],  "3": [ 'y', '147' ],  "4": [ 'y', ' 11' ],  "5": [ 'y', '139' ],
         "6": [ 'y', ' 11' ],  "7": [ 'y', '143' ],  "8": [ 'y', ' 11' ],  "9": [ 'y', '156' ], "10": [ 'y', ' 10' ],
        "11": [ 'y', '127' ], "12": [ 'y', ' 11' ] },
    
    "en-US": {
         "0": [ 'en-US', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ 'y', '153' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '154' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '146' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '150' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '163' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '134' ], "12": [ 'y', ' 18' ] },
    
    "es": {
         "0": [ 'es', 'Spanish', 'Espa&ntilde;ol', 'y', 'es/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '154' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "eu": {
         "0": [ 'eu', 'Basque', 'Euskara', 'y', 'eu/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "fi": {
         "0": [ 'fi', 'Finnish', 'Suomi', 'y', 'fi/lataa.html' ],
         "1": [ 'y', '149' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '150' ],  "4": [ 'y', ' 20' ],  "5": [ 'y', '142' ],
         "6": [ 'y', ' 20' ],  "7": [ 'y', '146' ],  "8": [ 'y', ' 20' ],  "9": [ 'y', '160' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 19' ] },
    
    "fr": {
         "0": [ 'fr', 'French', 'Fran&ccedil;ais', 'y', 'fr/' ],
         "1": [ 'y', '145' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '146' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '138' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '142' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '156' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '126' ], "12": [ 'y', ' 12' ] },
    
    "gd": {
         "0": [ 'gd', 'Scottish (Gaelic)', 'GÃ idhlig', 'y', 'gd/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '146' ], "12": [ 'y', ' 34' ] },
    
    "gl": {
         "0": [ 'gl', 'Galician', 'Galego', 'y', 'gl/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 18' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 18' ] },
    
    "he": {
         "0": [ 'he', 'Hebrew', '×¢×‘×¨×™×ª',  'y', 'he/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "hi": {
         "0": [ 'hi', 'Hindi', 'à¤¹à¤¿à¤¨à¥à¤¦à¥€', 'y', 'hi/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 18' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 18' ] },
    
    "hu": {
         "0": [ 'hu', 'Hungarian', 'Magyar', 'y', 'hu/' ],
         "1": [ 'y', '144' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '137' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '141' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '155' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '125' ], "12": [ 'y', ' 12' ] },
    
    "it": {
         "0": [ 'it', 'Italian', 'Italiano', 'y', 'it/download/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '146' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 12' ] },
    
    "ja": {
         "0": [ 'ja', 'Japanese', 'æ—¥æœ¬èªž', 'y', 'ja/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '128' ], "12": [ 'y', ' 17' ] },
    
    "km": {
         "0": [ 'km', 'Khmer', 'áž—áž¶ážŸáž¶ážáŸ’áž˜áŸ‚ážš', 'y', 'km/' ],
         "1": [ 'y', '145' ],  "2": [ 'y', ' 15' ],  "3": [ 'y', '146' ],  "4": [ 'y', ' 15' ],  "5": [ 'y', '138' ],
         "6": [ 'y', ' 15' ],  "7": [ 'y', '142' ],  "8": [ 'y', ' 15' ],  "9": [ 'y', '157' ], "10": [ 'y', ' 15' ],
        "11": [ 'y', '143' ], "12": [ 'y', ' 31' ] },
    
    "ko": {
         "0": [ 'ko', 'Korean', 'í•œêµ­ì–´', 'y', 'ko/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "lt": {
         "0": [ 'lt', 'Lithuanian', 'LietuviÅ³', 'y', 'lt/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 17' ] },
    
    "nb": {
         "0": [ 'nb', 'Norwegian (Bokmal)', 'Norsk (BokmÃ¥l)', 'y', 'no/' ],
         "1": [ 'y', '151' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '152' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '144' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '148' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '162' ], "10": [ 'y', ' 18' ],
        "11": [ 'y', '132' ], "12": [ 'y', ' 19' ] },
    
    "nl": {
         "0": [ 'nl', 'Dutch', 'Nederlands', 'y', 'nl/' ],
         "1": [ 'y', '151' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '152' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '144' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '148' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '162' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '132' ], "12": [ 'y', ' 12' ] },
    
    "pl": {
         "0": [ 'pl', 'Polish', 'Polski', 'y', 'pl/product.download.html' ],
         "1": [ 'y', '144' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '137' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '141' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '155' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '125' ], "12": [ 'y', ' 12' ] }, 
    
    "pt": {
         "0": [ 'pt', 'Portuguese (European)', 'Portugu&ecirc;s (Europeu)', 'y', 'pt/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },	
    
    "pt-BR": {
         "0": [ 'pt-BR', 'Portuguese (Brazilian)', 'Portugu&ecirc;s (do Brasil)', 'y', 'pt-br/' ],
         "1": [ 'y', '141' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '142' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '134' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "ru": {	
         "0": [ 'ru', 'Russian', 'Ð ÑƒÑÑÐºÐ¸Ð¹', 'y', 'ru/' ],
         "1": [ 'y', '149' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '150' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '142' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '146' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '160' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 13' ] },
    
    "sk": {
         "0": [ 'sk', 'Slovak', 'SlovenskÃ½ jazyk (slovenÄina)', 'y', 'sk/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 11' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 11' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 11' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 11' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 10' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 11' ] },
    
    "sl": {
         "0": [ 'sl', 'Slovenian', 'Slovenski jezik (slovenÅ¡Äina)', 'y', 'sl/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '144' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "sr": {
         "0": [ 'sr', 'Serbian (Cyrillic)', 'CÑ€Ð¿ÑÐºÐ¸ (Ñ›Ð¸Ñ€Ð¸Ð»Ð¸Ñ†Ð¾Ð¼)', 'y', 'sr/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "sv": {
         "0": [ 'sv', 'Swedish', 'Svenska', 'y', 'sv/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 11' ] },
    
    "ta": {	
         "0": [ 'ta', 'Tamil', 'à®¤à®®à®¿à®´à¯', 'y', 'ta/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "th": {
         "0": [ 'th', 'Thai', 'à¸ à¸²à¸©à¸²à¹„à¸—à¸¢', 'y', 'th/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '144' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "tr": {
         "0": [ 'tr', 'Turkish', 'T&uuml;rk&ccedil;e', 'y', 'tr/' ],
         "1": [ 'y', '141' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '142' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '134' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '138' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '122' ], "12": [ 'y', ' 11' ] },
    
    "vi": {
         "0": [ 'vi', 'Vietnamese', 'Tiáº¿ng Viá»‡t', 'y', 'vi/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "zh-CN": {
         "0": [ 'zh-CN', 'Chinese (simplified)', 'ç®€ä½“ä¸­æ–‡', 'y',	 'zh-cn/download/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 13' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 13' ] },
    
    "zh-TW": {
         "0": [ 'zh-TW', 'Chinese (traditional)', 'æ­£é«”ä¸­æ–‡', 'y', 'zh-tw/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '144' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 13' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 13' ] }
    };
    
    /* Description for AOO 4.1.1.
     *
     * For the matrix position and their meanings see the descriptions on top of file.
     */
    DL.release_matrix_411 = {
    "src": {
         "0": [ 'src', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ 'AOO411m6', '9775', 'r1617669', '2014-08-21' ],
         "2": [ 'tar_bz2', 'y', '209' ],
         "3": [ 'tar_gz',  'y', '276' ],
         "4": [ 'zip',	   'y', '323' ] },
    
    "sdk": {
         "0": [ 'sdk', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ /* lnx_64_f_d  */ 'y', '  9' ],
         "2": [ /* lnx_64_lp_d */ 'n', '  0' ],
         "3": [ /* lnx_64_f_r  */ 'y', '  8' ],
         "4": [ /* lnx_64_lp_r */ 'n', '  0' ],
         "5": [ /* lnx_32_f_d  */ 'y', '  9' ],
         "6": [ /* lnx_32_lp_d */ 'n', '  0' ],
         "7": [ /* lnx_32_f_r  */ 'y', '  8' ],
         "8": [ /* lnx_32_lp_r */ 'n', '  0' ],
         "9": [ /* mac_64_f    */ 'y', ' 12' ],
        "10": [ /* mac_64_lp   */ 'n', '  0' ],
        "11": [ /* win_32_f    */ 'y', '  7' ],
        "12": [ /* win_32_lp   */ 'n', '  0' ] },
    
    "ar": {
         "0": [ 'ar', 'Arabic', 'Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©', 'n', 'ar/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },		
    
    "ast": {
         "0": [ 'ast', 'Asturian', 'Asturianu', 'y', 'ast/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '145' ], "12": [ 'y', ' 34' ] },
    
    "bg": {
         "0": [ 'bg', 'Bulgarian', 'Ð±ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸ ÐµÐ·Ð¸Ðº', 'y', 'bg/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "ca": {
         "0": [ 'ca', 'Catalan', 'CatalÃ ', 'y', 'ca/' ],
         "1": [ 'y', '153' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '154' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '146' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '151' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '164' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '135' ], "12": [ 'y', ' 19' ] },
    
    "ca-XV": {
         "0": [ 'ca-XV', 'ValenciÃ ', 'CatalÃ  (ValenciÃ  AVL)', 'y', 'ca-xv/' ],
         "1": [ 'y', '153' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '154' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '146' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '151' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '164' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '151' ], "12": [ 'y', ' 35' ] },	
    
    "ca-XR": {
         "0": [ 'ca-XR', 'ValenciÃ ', 'CatalÃ  (ValenciÃ  RACV)', 'y', 'ca-xr/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '145' ], "12": [ 'y', ' 34' ] },	
    
    "cs": {
         "0": [ 'cs', 'Czech', 'ÄŒeÅ¡tina', 'y', 'cs/' ],
         "1": [ 'y', '141' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '142' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '134' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "da": {
         "0": [ 'da', 'Danish', 'Dansk', 'y', 'da/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '144' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 11' ] },
    
    "de": {
         "0": [ 'de', 'German', 'Deutsch', 'y', 'de/downloads/index.html' ],
         "1": [ 'y', '176' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '177' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '169' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '173' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '187' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '157' ], "12": [ 'y', ' 19' ] },
    
    "el": {
         "0": [ 'el', 'Greek', '&Epsilon;&lambda;&lambda;&eta;&nu;&iota;&kappa;Î¬', 'y', 'el/' ],
         "1": [ 'y', '150' ],  "2": [ 'y', ' 21' ],  "3": [ 'y', '151' ],  "4": [ 'y', ' 21' ],  "5": [ 'y', '143' ],
         "6": [ 'y', ' 21' ],  "7": [ 'y', '147' ],  "8": [ 'y', ' 21' ],  "9": [ 'y', '161' ], "10": [ 'y', ' 20' ],
        "11": [ 'y', '131' ], "12": [ 'y', ' 20' ] },
    
    "en-GB": {
         "0": [ 'en-GB', 'English (British)', 'English (British)', 'y', 'download/index.html' ],
         "1": [ 'y', '146' ],  "2": [ 'y', ' 11' ],  "3": [ 'y', '147' ],  "4": [ 'y', ' 11' ],  "5": [ 'y', '139' ],
         "6": [ 'y', ' 11' ],  "7": [ 'y', '143' ],  "8": [ 'y', ' 11' ],  "9": [ 'y', '156' ], "10": [ 'y', ' 10' ],
        "11": [ 'y', '127' ], "12": [ 'y', ' 11' ] },
    
    "en-US": {
         "0": [ 'en-US', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ 'y', '153' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '154' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '146' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '150' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '163' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '134' ], "12": [ 'y', ' 18' ] },
    
    "es": {
         "0": [ 'es', 'Spanish', 'Espa&ntilde;ol', 'y', 'es/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '154' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "eu": {
         "0": [ 'eu', 'Basque', 'Euskara', 'y', 'eu/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "fi": {
         "0": [ 'fi', 'Finnish', 'Suomi', 'y', 'fi/lataa.html' ],
         "1": [ 'y', '149' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '150' ],  "4": [ 'y', ' 20' ],  "5": [ 'y', '142' ],
         "6": [ 'y', ' 20' ],  "7": [ 'y', '146' ],  "8": [ 'y', ' 20' ],  "9": [ 'y', '160' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 19' ] },
    
    "fr": {
         "0": [ 'fr', 'French', 'Fran&ccedil;ais', 'y', 'fr/' ],
         "1": [ 'y', '145' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '146' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '138' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '142' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '156' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '126' ], "12": [ 'y', ' 12' ] },
    
    "gd": {
         "0": [ 'gd', 'Scottish (Gaelic)', 'GÃ idhlig', 'y', 'gd/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '146' ], "12": [ 'y', ' 34' ] },
    
    "gl": {
         "0": [ 'gl', 'Galician', 'Galego', 'y', 'gl/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 18' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 18' ] },
    
    "he": {
         "0": [ 'he', 'Hebrew', '×¢×‘×¨×™×ª',  'y', 'he/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "hi": {
         "0": [ 'hi', 'Hindi', 'à¤¹à¤¿à¤¨à¥à¤¦à¥€', 'y', 'hi/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 18' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 18' ] },
    
    "hu": {
         "0": [ 'hu', 'Hungarian', 'Magyar', 'y', 'hu/' ],
         "1": [ 'y', '144' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '137' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '141' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '155' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '125' ], "12": [ 'y', ' 12' ] },
    
    "it": {
         "0": [ 'it', 'Italian', 'Italiano', 'y', 'it/download/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '146' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 12' ] },
    
    "ja": {
         "0": [ 'ja', 'Japanese', 'æ—¥æœ¬èªž', 'y', 'ja/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '128' ], "12": [ 'y', ' 17' ] },
    
    "km": {
         "0": [ 'km', 'Khmer', 'áž—áž¶ážŸáž¶ážáŸ’áž˜áŸ‚ážš', 'y', 'km/' ],
         "1": [ 'y', '145' ],  "2": [ 'y', ' 15' ],  "3": [ 'y', '146' ],  "4": [ 'y', ' 15' ],  "5": [ 'y', '138' ],
         "6": [ 'y', ' 15' ],  "7": [ 'y', '142' ],  "8": [ 'y', ' 15' ],  "9": [ 'y', '157' ], "10": [ 'y', ' 15' ],
        "11": [ 'y', '143' ], "12": [ 'y', ' 31' ] },
    
    "ko": {
         "0": [ 'ko', 'Korean', 'í•œêµ­ì–´', 'y', 'ko/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "lt": {
         "0": [ 'lt', 'Lithuanian', 'LietuviÅ³', 'y', 'lt/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 17' ] },
    
    "nb": {
         "0": [ 'nb', 'Norwegian (Bokmal)', 'Norsk (BokmÃ¥l)', 'y', 'no/' ],
         "1": [ 'y', '151' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '152' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '144' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '148' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '162' ], "10": [ 'y', ' 18' ],
        "11": [ 'y', '132' ], "12": [ 'y', ' 19' ] },
    
    "nl": {
         "0": [ 'nl', 'Dutch', 'Nederlands', 'y', 'nl/' ],
         "1": [ 'y', '151' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '152' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '144' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '148' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '162' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '132' ], "12": [ 'y', ' 12' ] },
    
    "pl": {
         "0": [ 'pl', 'Polish', 'Polski', 'y', 'pl/product.download.html' ],
         "1": [ 'y', '144' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '137' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '141' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '155' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '125' ], "12": [ 'y', ' 12' ] }, 
    
    "pt": {
         "0": [ 'pt', 'Portuguese (European)', 'Portugu&ecirc;s (Europeu)', 'y', 'pt/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },	
    
    "pt-BR": {
         "0": [ 'pt-BR', 'Portuguese (Brazilian)', 'Portugu&ecirc;s (do Brasil)', 'y', 'pt-br/' ],
         "1": [ 'y', '141' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '142' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '134' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "ru": {	
         "0": [ 'ru', 'Russian', 'Ð ÑƒÑÑÐºÐ¸Ð¹', 'y', 'ru/' ],
         "1": [ 'y', '149' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '150' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '142' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '146' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '160' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 13' ] },
    
    "sk": {
         "0": [ 'sk', 'Slovak', 'SlovenskÃ½ jazyk (slovenÄina)', 'y', 'sk/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 11' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 11' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 11' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 11' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 10' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 11' ] },
    
    "sl": {
         "0": [ 'sl', 'Slovenian', 'Slovenski jezik (slovenÅ¡Äina)', 'y', 'sl/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '144' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "sr": {
         "0": [ 'sr', 'Serbian (Cyrillic)', 'CÑ€Ð¿ÑÐºÐ¸ (Ñ›Ð¸Ñ€Ð¸Ð»Ð¸Ñ†Ð¾Ð¼)', 'y', 'sr/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "sv": {
         "0": [ 'sv', 'Swedish', 'Svenska', 'y', 'sv/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 11' ] },
    
    "ta": {	
         "0": [ 'ta', 'Tamil', 'à®¤à®®à®¿à®´à¯', 'y', 'ta/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "th": {
         "0": [ 'th', 'Thai', 'à¸ à¸²à¸©à¸²à¹„à¸—à¸¢', 'y', 'th/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '144' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "tr": {
         "0": [ 'tr', 'Turkish', 'T&uuml;rk&ccedil;e', 'y', 'tr/' ],
         "1": [ 'y', '141' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '142' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '134' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '138' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '122' ], "12": [ 'y', ' 11' ] },
    
    "vi": {
         "0": [ 'vi', 'Vietnamese', 'Tiáº¿ng Viá»‡t', 'y', 'vi/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "zh-CN": {
         "0": [ 'zh-CN', 'Chinese (simplified)', 'ç®€ä½“ä¸­æ–‡', 'y',	 'zh-cn/download/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 13' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 13' ] },
    
    "zh-TW": {
         "0": [ 'zh-TW', 'Chinese (traditional)', 'æ­£é«”ä¸­æ–‡', 'y', 'zh-tw/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '144' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 13' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 13' ] }
    };
    
    /* Description for AOO 4.1.0.
     *
     * For the matrix position and their meanings see the descriptions on top of file.
     */
    
    DL.release_matrix_410 = {
    "src": {
         "0": [ 'src', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ 'AOO410m18', '9764', 'r1589052', '2014-04-29' ],
         "2": [ 'tar_bz2', 'y', '208' ],
         "3": [ 'tar_gz',  'y', '274' ],
         "4": [ 'zip',	   'y', '320' ] },
    
    "sdk": {
         "0": [ 'sdk', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ /* lnx_64_f_d  */ 'y', '  9' ],
         "2": [ /* lnx_64_lp_d */ 'n', '  0' ],
         "3": [ /* lnx_64_f_r  */ 'y', '  8' ],
         "4": [ /* lnx_64_lp_r */ 'n', '  0' ],
         "5": [ /* lnx_32_f_d  */ 'y', '  9' ],
         "6": [ /* lnx_32_lp_d */ 'n', '  0' ],
         "7": [ /* lnx_32_f_r  */ 'y', '  8' ],
         "8": [ /* lnx_32_lp_r */ 'n', '  0' ],
         "9": [ /* mac_64_f    */ 'y', ' 12' ],
        "10": [ /* mac_64_lp   */ 'n', '  0' ],
        "11": [ /* win_32_f    */ 'y', '  7' ],
        "12": [ /* win_32_lp   */ 'n', '  0' ] },
        
    "ar": {
         "0": [ 'ar', 'Arabic', 'Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©', 'n', 'ar/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },		
    
    "ast": {
         "0": [ 'ast', 'Asturian', 'Asturianu', 'y', 'ast/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '141' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '161' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '145' ], "12": [ 'y', ' 34' ] },
    
    "bg": {
         "0": [ 'bg', 'Bulgarian', 'Ð±ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸ ÐµÐ·Ð¸Ðº', 'y', 'bg/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '136' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '156' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "ca": {
         "0": [ 'ca', 'Catalan', 'CatalÃ ', 'n', 'ca/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },		
    
    "ca-XV": {
         "0": [ 'ca-XV', 'ValenciÃ ', 'CatalÃ  (ValenciÃ  AVL)', 'n', 'ca-xv/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },		
        
    "ca-XR": {
         "0": [ 'ca-XR', 'ValenciÃ ', 'CatalÃ  (ValenciÃ  RACV)', 'n', 'ca-xr/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },		
    
    "cs": {
         "0": [ 'cs', 'Czech', 'ÄŒeÅ¡tina', 'y', 'cs/' ],
         "1": [ 'y', '141' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '142' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '134' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '135' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '155' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "da": {
         "0": [ 'da', 'Danish', 'Dansk', 'y', 'da/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '144' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '137' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '156' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 11' ] },
    
    "de": {
         "0": [ 'de', 'German', 'Deutsch', 'y', 'de/downloads/index.html' ],
         "1": [ 'y', '176' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '177' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '169' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '170' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '190' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '157' ], "12": [ 'y', ' 19' ] },
    
    "el": {
         "0": [ 'el', 'Greek', '&Epsilon;&lambda;&lambda;&eta;&nu;&iota;&kappa;Î¬', 'y', 'el/' ],
         "1": [ 'y', '150' ],  "2": [ 'y', ' 21' ],  "3": [ 'y', '151' ],  "4": [ 'y', ' 21' ],  "5": [ 'y', '143' ],
         "6": [ 'y', ' 21' ],  "7": [ 'y', '144' ],  "8": [ 'y', ' 21' ],  "9": [ 'y', '164' ], "10": [ 'y', ' 20' ],
        "11": [ 'y', '131' ], "12": [ 'y', ' 20' ] },
    
    "en-GB": {
         "0": [ 'en-GB', 'English (British)', 'English (British)', 'y', 'download/index.html' ],
         "1": [ 'y', '146' ],  "2": [ 'y', ' 11' ],  "3": [ 'y', '147' ],  "4": [ 'y', ' 11' ],  "5": [ 'y', '139' ],
         "6": [ 'y', ' 11' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 11' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 10' ],
        "11": [ 'y', '127' ], "12": [ 'y', ' 11' ] },
    
    "en-US": {
         "0": [ 'en-US', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ 'y', '153' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '154' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '146' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '147' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '166' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '134' ], "12": [ 'y', ' 17' ] },
    
    "es": {
         "0": [ 'es', 'Spanish', 'Espa&ntilde;ol', 'y', 'es/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '144' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '137' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '157' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "eu": {
         "0": [ 'eu', 'Basque', 'Euskara', 'y', 'eu/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '136' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '156' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "fi": {
         "0": [ 'fi', 'Finnish', 'Suomi', 'y', 'fi/lataa.html' ],
         "1": [ 'y', '149' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '150' ],  "4": [ 'y', ' 20' ],  "5": [ 'y', '142' ],
         "6": [ 'y', ' 20' ],  "7": [ 'y', '143' ],  "8": [ 'y', ' 20' ],  "9": [ 'y', '163' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 19' ] },
    
    "fr": {
         "0": [ 'fr', 'French', 'Fran&ccedil;ais', 'y', 'fr/' ],
         "1": [ 'y', '145' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '146' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '138' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '126' ], "12": [ 'y', ' 12' ] },
    
    "gd": {
         "0": [ 'gd', 'Scottish (Gaelic)', 'GÃ idhlig', 'y', 'gd/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '142' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '161' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '146' ], "12": [ 'y', ' 34' ] },
    
    "gl": {
         "0": [ 'gl', 'Galician', 'Galego', 'y', 'gl/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '142' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '162' ], "10": [ 'y', ' 18' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 18' ] },
    
    "he": {
         "0": [ 'he', 'Hebrew', '×¢×‘×¨×™×ª',  'y', 'he/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '141' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '161' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 17' ] },
    
    "hi": {
         "0": [ 'hi', 'Hindi', 'à¤¹à¤¿à¤¨à¥à¤¦à¥€', 'y', 'hi/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '142' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '162' ], "10": [ 'y', ' 18' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 18' ] },
    
    "hu": {
         "0": [ 'hu', 'Hungarian', 'Magyar', 'y', 'hu/' ],
         "1": [ 'y', '144' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '137' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '138' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '157' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '125' ], "12": [ 'y', ' 12' ] },
    
    "it": {
         "0": [ 'it', 'Italian', 'Italiano', 'y', 'it/download/' ],
         "1": [ 'y', '148' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '149' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '142' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '162' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 12' ] },
    
    "ja": {
         "0": [ 'ja', 'Japanese', 'æ—¥æœ¬èªž', 'y', 'ja/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '141' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '161' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '128' ], "12": [ 'y', ' 17' ] },
    
    "km": {
         "0": [ 'km', 'Khmer', 'áž—áž¶ážŸáž¶ážáŸ’áž˜áŸ‚ážš', 'y', 'km/' ],
         "1": [ 'y', '145' ],  "2": [ 'y', ' 15' ],  "3": [ 'y', '146' ],  "4": [ 'y', ' 15' ],  "5": [ 'y', '138' ],
         "6": [ 'y', ' 15' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 15' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 15' ],
        "11": [ 'y', '143' ], "12": [ 'y', ' 31' ] },
    
    "ko": {
         "0": [ 'ko', 'Korean', 'í•œêµ­ì–´', 'y', 'ko/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '136' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '156' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "lt": {
         "0": [ 'lt', 'Lithuanian', 'LietuviÅ³', 'y', 'lt/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '141' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '161' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 17' ] },
    
    "nb": {
         "0": [ 'nb', 'Norwegian (Bokmal)', 'Norsk (BokmÃ¥l)', 'y', 'no/' ],
         "1": [ 'y', '151' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '152' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '144' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '165' ], "10": [ 'y', ' 18' ],
        "11": [ 'y', '132' ], "12": [ 'y', ' 19' ] },
    
    "nl": {
         "0": [ 'nl', 'Dutch', 'Nederlands', 'y', 'nl/' ],
         "1": [ 'y', '151' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '152' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '144' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '165' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '133' ], "12": [ 'y', ' 12' ] },
    
    "pl": {
         "0": [ 'pl', 'Polish', 'Polski', 'y', 'pl/product.download.html' ],
         "1": [ 'y', '144' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '137' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '138' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '125' ], "12": [ 'y', ' 12' ] },  
    
    "pt-BR": {
         "0": [ 'pt-BR', 'Portuguese (Brazilian)', 'Portugu&ecirc;s (do Brasil)', 'y', 'pt-br/' ],
         "1": [ 'y', '141' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '142' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '134' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '135' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '155' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "pt": {
         "0": [ 'pt', 'Portuguese (European)', 'Portugu&ecirc;s (Europeu)', 'y', 'pt/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '136' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '156' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "ru": {	
         "0": [ 'ru', 'Russian', 'Ð ÑƒÑÑÐºÐ¸Ð¹', 'y', 'ru/' ],
         "1": [ 'y', '149' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '150' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '142' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '143' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '163' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 13' ] },
    
    "sk": {
         "0": [ 'sk', 'Slovak', 'SlovenskÃ½ jazyk (slovenÄina)', 'y', 'sk/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 11' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 11' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 11' ],  "7": [ 'y', '136' ],  "8": [ 'y', ' 11' ],  "9": [ 'y', '155' ], "10": [ 'y', ' 10' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 11' ] },
    
    "sl": {
         "0": [ 'sl', 'Slovenian', 'Slovenski jezik (slovenÅ¡Äina)', 'y', 'sl/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '144' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '137' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '156' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 12' ] },
    
    "sr": {
         "0": [ 'sr', 'Serbian (Cyrillic)', 'CÑ€Ð¿ÑÐºÐ¸ (Ñ›Ð¸Ñ€Ð¸Ð»Ð¸Ñ†Ð¾Ð¼)', 'y', 'sr/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '141' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '161' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "sv": {
         "0": [ 'sv', 'Swedish', 'Svenska', 'y', 'sv/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '136' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '155' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 11' ] },
    
    "ta": {	
         "0": [ 'ta', 'Tamil', 'à®¤à®®à®¿à®´à¯', 'y', 'ta/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '141' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '161' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "th": {
         "0": [ 'th', 'Thai', 'à¸ à¸²à¸©à¸²à¹„à¸—à¸¢', 'y', 'th/' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '141' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '161' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '129' ], "12": [ 'y', ' 18' ] },
    
    "tr": {
         "0": [ 'tr', 'Turkish', 'T&uuml;rk&ccedil;e', 'y', 'tr/' ],
         "1": [ 'y', '141' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '142' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '134' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '135' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '154' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '122' ], "12": [ 'y', ' 11' ] },
    
    "vi": {
         "0": [ 'vi', 'Vietnamese', 'Tiáº¿ng Viá»‡t', 'y', 'vi/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '136' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '156' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '123' ], "12": [ 'y', ' 12' ] },
    
    "zh-CN": {
         "0": [ 'zh-CN', 'Chinese (simplified)', 'ç®€ä½“ä¸­æ–‡', 'y',	 'zh-cn/download/' ],
         "1": [ 'y', '142' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '143' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '135' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '136' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '156' ], "10": [ 'y', ' 13' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 13' ] },
    
    "zh-TW": {
         "0": [ 'zh-TW', 'Chinese (traditional)', 'æ­£é«”ä¸­æ–‡', 'y', 'zh-tw/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '144' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '137' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '156' ], "10": [ 'y', ' 13' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 13' ] }
    };
    
    /* Description for AOO 4.0.1.
     *
     * For the matrix position and their meanings see the descriptions on top of file.
     */
    DL.release_matrix_401 = {
    "src": {
         "0": [ 'src', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ 'AOO401m5', '9714', 'r1524958', '2013-10-01' ],
         "2": [ 'tar_bz2', 'y', '205' ],
         "3": [ 'tar_gz',  'y', '271' ],
         "4": [ 'zip',	   'y', '317' ] },
    
    "sdk": {
         "0": [ 'sdk', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ /* lnx_64_f_d  */ 'y', '  9' ],
         "2": [ /* lnx_64_lp_d */ 'n', '  0' ],
         "3": [ /* lnx_64_f_r  */ 'y', '  8' ],
         "4": [ /* lnx_64_lp_r */ 'n', '  0' ],
         "5": [ /* lnx_32_f_d  */ 'y', '  9' ],
         "6": [ /* lnx_32_lp_d */ 'n', '  0' ],
         "7": [ /* lnx_32_f_r  */ 'y', '  8' ],
         "8": [ /* lnx_32_lp_r */ 'n', '  0' ],
         "9": [ /* mac_32_f    */ 'y', ' 12' ],
        "10": [ /* mac_32_lp   */ 'n', '  0' ],
        "11": [ /* win_32_f    */ 'y', '  7' ],
        "12": [ /* win_32_lp   */ 'n', '  0' ] },
    
    "ar": {
         "0": [ 'ar', 'Arabic', 'Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©', 'n', 'ar/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },		
    
    "ast": {
         "0": [ 'ast', 'Asturian', 'Asturianu', 'y', 'ast/' ],
         "1": [ 'y', '150' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '151' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '142' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '143' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '157' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '147' ], "12": [ 'y', ' 34' ] },
    
    "bg": {
         "0": [ 'bg', 'Bulgarian', 'Ð±ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸ ÐµÐ·Ð¸Ðº', 'n', 'bg/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },
    "ca": {
         "0": [ 'ca', 'Catalan', 'CatalÃ ', 'n', 'ca/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },		
    
    "ca-XV": {
         "0": [ 'ca-XV', 'ValenciÃ ', 'CatalÃ  (ValenciÃ  AVL)', 'n', 'ca-xv/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },		
        
    "ca-XR": {
         "0": [ 'ca-XR', 'ValenciÃ ', 'CatalÃ  (ValenciÃ  RACV)', 'n', 'ca-xr/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },		
    
    "cs": {
         "0": [ 'cs', 'Czech', 'ÄŒeÅ¡tina', 'y', 'cs/' ],
         "1": [ 'y', '144' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '137' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '151' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '125' ], "12": [ 'y', ' 12' ] },
    
    "da": {
         "0": [ 'da', 'Danish', 'Dansk', 'n', 'da/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },
    
    "de": {
         "0": [ 'de', 'German', 'Deutsch', 'y', 'de/downloads/index.html' ],
         "1": [ 'y', '174' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '175' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '167' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '167' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '182' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '155' ], "12": [ 'y', ' 19' ] },
    
    "el": {
         "0": [ 'el', 'Greek', '&Epsilon;&lambda;&lambda;&eta;&nu;&iota;&kappa;Î¬', 'y', 'el/' ],
         "1": [ 'y', '152' ],  "2": [ 'y', ' 21' ],  "3": [ 'y', '153' ],  "4": [ 'y', ' 21' ],  "5": [ 'y', '145' ],
         "6": [ 'y', ' 21' ],  "7": [ 'y', '146' ],  "8": [ 'y', ' 21' ],  "9": [ 'y', '161' ], "10": [ 'y', ' 20' ],
        "11": [ 'y', '133' ], "12": [ 'y', ' 20' ] },
    
    "en-GB": {
         "0": [ 'en-GB', 'English (British)', 'English (British)', 'y', 'download/index.html' ],
         "1": [ 'y', '149' ],  "2": [ 'y', ' 11' ],  "3": [ 'y', '150' ],  "4": [ 'y', ' 11' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 11' ],  "7": [ 'y', '142' ],  "8": [ 'y', ' 11' ],  "9": [ 'y', '156' ], "10": [ 'y', ' 10' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 11' ] },
    
    "en-US": {
         "0": [ 'en-US', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ 'y', '156' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '156' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '148' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '149' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '163' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '137' ], "12": [ 'y', ' 17' ] },
    
    "es": {
         "0": [ 'es', 'Spanish', 'Espa&ntilde;ol', 'y', 'es/' ],
         "1": [ 'y', '145' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '146' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '138' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '126' ], "12": [ 'y', ' 12' ] },
    
    "eu": {
         "0": [ 'eu', 'Basque', 'Euskara', 'y', 'eu/' ],
         "1": [ 'y', '144' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '137' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '138' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '125' ], "12": [ 'y', ' 12' ] },
    
    "fi": {
         "0": [ 'fi', 'Finnish', 'Suomi', 'y', 'fi/lataa.html' ],
         "1": [ 'y', '151' ],  "2": [ 'y', ' 20' ],  "3": [ 'y', '152' ],  "4": [ 'y', ' 20' ],  "5": [ 'y', '144' ],
         "6": [ 'y', ' 20' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 20' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '132' ], "12": [ 'y', ' 19' ] },
    
    "fr": {
         "0": [ 'fr', 'French', 'Fran&ccedil;ais', 'y', 'fr/' ],
         "1": [ 'y', '146' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '147' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '139' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '154' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '127' ], "12": [ 'y', ' 12' ] },
    
    "gd": {
         "0": [ 'gd', 'Scottish (Gaelic)', 'GÃ idhlig', 'y', 'gd/' ],
         "1": [ 'y', '150' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '151' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '143' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '143' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '147' ], "12": [ 'y', ' 34' ] },
    
    "gl": {
         "0": [ 'gl', 'Galician', 'Galego', 'y', 'gl/' ],
         "1": [ 'y', '150' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '151' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '143' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '144' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 18' ],
        "11": [ 'y', '132' ], "12": [ 'y', ' 18' ] },
    
    "he": {
         "0": [ 'he', 'Hebrew', '×¢×‘×¨×™×ª',  'n', 'he/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },
    
    "hi": {
         "0": [ 'hi', 'Hindi', 'à¤¹à¤¿à¤¨à¥à¤¦à¥€', 'n', 'hi/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },
    
    "hu": {
         "0": [ 'hu', 'Hungarian', 'Magyar', 'y', 'hu/about-downloads.html' ],
         "1": [ 'y', '146' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '147' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '139' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '154' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '127' ], "12": [ 'y', ' 12' ] },
    
    "it": {
         "0": [ 'it', 'Italian', 'Italiano', 'y', 'it/download/' ],
         "1": [ 'y', '151' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '152' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '144' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '132' ], "12": [ 'y', ' 12' ] },
    
    "ja": {
         "0": [ 'ja', 'Japanese', 'æ—¥æœ¬èªž', 'y', 'ja/' ],
         "1": [ 'y', '150' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '151' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '143' ],
         "6": [ 'y', ' 18' ],  "6": [ 'y', '143' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 17' ] },
    
    "km": {
         "0": [ 'km', 'Khmer', 'áž—áž¶ážŸáž¶ážáŸ’áž˜áŸ‚ážš', 'y', 'download/index.html' ],
         "1": [ 'y', '147' ],  "2": [ 'y', ' 15' ],  "3": [ 'y', '148' ],  "4": [ 'y', ' 15' ],  "5": [ 'y', '140' ],
         "6": [ 'y', ' 15' ],  "6": [ 'y', '141' ],  "8": [ 'y', ' 15' ],  "9": [ 'y', '156' ], "10": [ 'y', ' 15' ],
        "11": [ 'y', '145' ], "12": [ 'y', ' 31' ] },
    
    "ko": {
         "0": [ 'ko', 'Korean', 'í•œêµ­ì–´', 'y', 'ko/' ],
         "1": [ 'y', '145' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '137' ],
         "6": [ 'y', ' 12' ],  "6": [ 'y', '138' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '126' ], "12": [ 'y', ' 12' ] },
    
    "lt": {
         "0": [ 'lt', 'Lithuanian', 'LietuviÅ³', 'y', 'lt/' ],
         "1": [ 'y', '149' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '150' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '142' ],
         "6": [ 'y', ' 18' ],  "6": [ 'y', '143' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '157' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '131' ], "12": [ 'y', ' 17' ] },
    
    "nb": {
         "0": [ 'nb', 'Norwegian (Bokmal)', 'Norsk (BokmÃ¥l)', 'n', 'no/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },
    
    "nl": {
         "0": [ 'nl', 'Dutch', 'Nederlands', 'y', 'nl/downloaden.html' ],
         "1": [ 'y', '151' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '152' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '144' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '132' ], "12": [ 'y', ' 12' ] },
    
    "pl": {
         "0": [ 'pl', 'Polish', 'Polski', 'y', 'pl/product.download.html' ],
         "1": [ 'y', '154' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '155' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '146' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '147' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '162' ], "10": [ 'y', ' 13' ],
        "11": [ 'y', '134' ], "12": [ 'y', ' 13' ] },  
    
    "pt-BR": {
         "0": [ 'pt-BR', 'Portuguese (Brazilian)', 'Portugu&ecirc;s (do Brasil)', 'y', 'pt-br/' ],
         "1": [ 'y', '144' ],  "2": [ 'y', ' 12' ],  "2": [ 'y', '145' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '137' ],
         "6": [ 'y', ' 12' ],  "6": [ 'y', '137' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '125' ], "12": [ 'y', ' 12' ] },
    
    "pt": {
         "0": [ 'pt', 'Portuguese (European)', 'Portugu&ecirc;s (Europeu)', 'y', 'pt/download/' ],
         "1": [ 'y', '144' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '137' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '151' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '125' ], "12": [ 'y', ' 12' ] },
    
    "ru": {
         "0": [ 'ru', 'Russian', 'Ð ÑƒÑÑÐºÐ¸Ð¹', 'y', 'ru/about-downloads.html' ],
         "1": [ 'y', '150' ],  "2": [ 'y', ' 13' ],  "2": [ 'y', '151' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '143' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '144' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '131' ], "12": [ 'y', ' 13' ] },
    
    "sk": {
         "0": [ 'sk', 'Slovak', 'SlovenskÃ½ jazyk (slovenÄina)', 'y', 'sk/' ],
         "1": [ 'y', '144' ],  "2": [ 'y', ' 11' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 11' ],  "5": [ 'y', '137' ],
         "6": [ 'y', ' 11' ],  "7": [ 'y', '138' ],  "8": [ 'y', ' 11' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 10' ],
        "11": [ 'y', '125' ], "12": [ 'y', ' 11' ] },
    
    "sl": {
         "0": [ 'sl', 'Slovenian', 'Slovenski jezik (slovenÅ¡Äina)', 'y', 'sl/' ],
         "1": [ 'y', '145' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '146' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '138' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '126' ], "12": [ 'y', ' 12' ] },
    
    "sr": {
         "0": [ 'sr', 'Serbian (Cyrillic)', 'CÑ€Ð¿ÑÐºÐ¸ (Ñ›Ð¸Ñ€Ð¸Ð»Ð¸Ñ†Ð¾Ð¼)', 'y', 'sr/preuzmi.html' ],
         "1": [ 'y', '150' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '150' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '142' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '143' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '157' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '131' ], "12": [ 'y', ' 18' ] },
    
    "sv": {
         "0": [ 'sv', 'Swedish', 'Svenska', 'y', 'sv/get/' ],
         "0": [ 'y', '144' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '137' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '138' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '125' ], "12": [ 'y', ' 11' ] },
    
    "ta": {
         "0": [ 'ta', 'Tamil', 'à®¤à®®à®¿à®´à¯', 'y', 'ta/' ],
         "1": [ 'y', '149' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '150' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '142' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '143' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '157' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '131' ], "12": [ 'y', ' 18' ] },
    
    "th": {
         "0": [ 'th', 'Thai', 'à¸ à¸²à¸©à¸²à¹„à¸—à¸¢', 'n', 'download/index.html' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },
    
    "tr": {
         "0": [ 'tr', 'Turkish', 'T&uuml;rk&ccedil;e', 'y', 'tr/' ],
         "1": [ 'y', '143' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '144' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '137' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '151' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '124' ], "12": [ 'y', ' 11' ] },
    
    "vi": {
         "0": [ 'vi', 'Vietnamese', 'Tiáº¿ng Viá»‡t', 'y', 'vi/' ],
         "1": [ 'y', '145' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '137' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '138' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '125' ], "12": [ 'y', ' 12' ] },
    
    "zh-CN": {
         "0": [ 'zh-CN', 'Chinese (simplified)', 'ç®€ä½“ä¸­æ–‡', 'y',	 'download/index.html' ],
         "1": [ 'y', '145' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '146' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '138' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '138' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 13' ],
        "11": [ 'y', '126' ], "12": [ 'y', ' 13' ] },
    
    "zh-TW": {
         "0": [ 'zh-TW', 'Chinese (traditional)', 'æ­£é«”ä¸­æ–‡', 'y', 'download/index.html' ],
         "1": [ 'y', '145' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '146' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '138' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 13' ],
        "11": [ 'y', '126' ], "12": [ 'y', ' 13' ] }
    };
    
    /* Description for AOO 4.0.0.
     *
     * For the matrix position and their meanings see the descriptions on top of file.
     */
    DL.release_matrix_400 = {
    "src": {
         "0": [ 'src', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ 'AOO400m3', '9702', 'r1503704', '2013-07-23' ],
         "2": [ 'tar_bz2', 'y', '202' ],
         "3": [ 'tar_gz',  'y', '267' ],
         "4": [ 'zip',	   'y', '314' ] },
    
    "sdk": {
         "0": [ 'sdk', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ /* lnx_64_f_d  */ 'y', '  9' ],
         "2": [ /* lnx_64_lp_d */ 'n', '  0' ],
         "3": [ /* lnx_64_f_r  */ 'y', '  8' ],
         "4": [ /* lnx_64_lp_r */ 'n', '  0' ],
         "5": [ /* lnx_32_f_d  */ 'y', '  8' ],
         "6": [ /* lnx_32_lp_d */ 'n', '  0' ],
         "7": [ /* lnx_32_f_r  */ 'y', '  8' ],
         "8": [ /* lnx_32_lp_r */ 'n', '  0' ],
         "9": [ /* mac_32_f    */ 'y', ' 12' ],
        "10": [ /* mac_32_lp   */ 'n', '  0' ],
        "11": [ /* win_32_f    */ 'y', '  7' ],
        "12": [ /* win_32_lp   */ 'n', '  0' ] },
    
    "ar": {
         "0": [ 'ar', 'Arabic', 'Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©', 'n', 'ar/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },		
    
    "ast": {
         "0": [ 'ast', 'Asturian', 'Asturianu', 'y', 'ast/' ],
         "1": [ 'y', '150' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '151' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '142' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '143' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '157' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '147' ], "12": [ 'y', ' 34' ] },
    
    "bg": {
         "0": [ 'bg', 'Bulgarian', 'Ð±ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸ ÐµÐ·Ð¸Ðº', 'n', 'bg/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },
    
    "ca": {
         "0": [ 'ca', 'Catalan', 'CatalÃ ', 'n', 'ca/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },		
    
    "ca-XV": {
         "0": [ 'ca-XV', 'ValenciÃ ', 'CatalÃ  (ValenciÃ  AVL)', 'n', 'ca-xv/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },		
        
    "ca-XR": {
         "0": [ 'ca-XR', 'ValenciÃ ', 'CatalÃ  (ValenciÃ  RACV)', 'n', 'ca-xr/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },		
    
    "cs": {
         "0": [ 'cs', 'Czech', 'ÄŒeÅ¡tina', 'y', 'cs/' ],
         "1": [ 'y', '144' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '137' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '151' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '125' ], "12": [ 'y', ' 12' ] },
    
    "da": {
         "0": [ 'da', 'Danish', 'Dansk', 'n', 'da/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },
    
    "de": {
         "0": [ 'de', 'German', 'Deutsch', 'y', 'de/downloads/index.html' ],
         "1": [ 'y', '174' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '175' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '167' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '167' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '182' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '155' ], "12": [ 'y', ' 19' ] },
    
    "el": {
         "0": [ 'el', 'Greek', '&Epsilon;&lambda;&lambda;&eta;&nu;&iota;&kappa;Î¬', 'y', 'el/' ],
         "1": [ 'y', '152' ],  "2": [ 'y', ' 21' ],  "3": [ 'y', '153' ],  "4": [ 'y', ' 21' ],  "5": [ 'y', '145' ],
         "6": [ 'y', ' 21' ],  "7": [ 'y', '146' ],  "8": [ 'y', ' 21' ],  "9": [ 'y', '161' ], "10": [ 'y', ' 20' ],
        "11": [ 'y', '133' ], "12": [ 'y', ' 20' ] },
    
    "en-GB": {
         "0": [ 'en-GB', 'English (British)', 'English (British)', 'y', 'download/index.html' ],
         "1": [ 'y', '149' ],  "2": [ 'y', ' 11' ],  "3": [ 'y', '150' ],  "4": [ 'y', ' 11' ],  "5": [ 'y', '141' ],
         "6": [ 'y', ' 11' ],  "7": [ 'y', '142' ],  "8": [ 'y', ' 11' ],  "9": [ 'y', '156' ], "10": [ 'y', ' 10' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 11' ] },
    
    "en-US": {
         "0": [ 'en-US', 'English (US)', 'English (US)', 'y', 'download/index.html' ],
         "1": [ 'y', '156' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '156' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '148' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '149' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '163' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '137' ], "12": [ 'y', ' 17' ] },
    
    "es": {
         "0": [ 'es', 'Spanish', 'Espa&ntilde;ol', 'y', 'es/' ],
         "1": [ 'y', '145' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '146' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '138' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '139' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '153' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '126' ], "12": [ 'y', ' 12' ] },
    
    "eu": {
         "0": [ 'eu', 'Basque', 'Euskara', 'n', 'eu/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },
    
    "fi": {
         "0": [ 'fi', 'Finnish', 'Suomi', 'y', 'fi/lataa.html' ],
         "1": [ 'y', '151' ],  "2": [ 'y', ' 20' ],  "3": [ 'y', '152' ],  "4": [ 'y', ' 20' ],  "5": [ 'y', '144' ],
         "6": [ 'y', ' 20' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 20' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 19' ],
        "11": [ 'y', '132' ], "12": [ 'y', ' 19' ] },
    
    "fr": {
         "0": [ 'fr', 'French', 'Fran&ccedil;ais', 'y', 'fr/' ],
         "1": [ 'y', '146' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '147' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '139' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '154' ],
        "10": [ 'y', ' 12' ], "11": [ 'y', '127' ],
        "12": [ 'y', ' 12' ] },
    
    "gd": {
         "0": [ 'gd', 'Scottish (Gaelic)', 'GÃ idhlig', 'y', 'gd/' ],
         "1": [ 'y', '150' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '151' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '143' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '143' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '147' ], "12": [ 'y', ' 34' ] },
    
    "gl": {
         "0": [ 'gl', 'Galician', 'Galego', 'y', 'gl/' ],
         "1": [ 'y', '150' ],  "2": [ 'y', ' 19' ],  "3": [ 'y', '151' ],  "4": [ 'y', ' 19' ],  "5": [ 'y', '143' ],
         "6": [ 'y', ' 19' ],  "7": [ 'y', '144' ],  "8": [ 'y', ' 19' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 18' ],
        "11": [ 'y', '132' ], "12": [ 'y', ' 18' ] },
    
    "he": {
         "0": [ 'he', 'Hebrew', '×¢×‘×¨×™×ª',  'n', 'he/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },
    
    "hi": {
         "0": [ 'hi', 'Hindi', 'à¤¹à¤¿à¤¨à¥à¤¦à¥€', 'n', 'hi/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },
    
    "hu": {
         "0": [ 'hu', 'Hungarian', 'Magyar', 'y', 'hu/about-downloads.html' ],
         "1": [ 'y', '146' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '147' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '139' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '140' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '154' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '127' ], "12": [ 'y', ' 12' ] },
    
    "it": {
         "0": [ 'it', 'Italian', 'Italiano', 'y', 'it/download/' ],
         "1": [ 'y', '151' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '152' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '144' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '132' ], "12": [ 'y', ' 12' ] },
    
    "ja": {
         "0": [ 'ja', 'Japanese', 'æ—¥æœ¬èªž', 'y', 'ja/' ],
         "1": [ 'y', '150' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '151' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '143' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '143' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '130' ], "12": [ 'y', ' 17' ] },
    
    "km": {
         "0": [ 'km', 'Khmer', 'áž—áž¶ážŸáž¶ážáŸ’áž˜áŸ‚ážš', 'n', 'download/index.html' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },
    
    "ko": {
         "0": [ 'ko', 'Korean', 'í•œêµ­ì–´', 'y', 'ko/' ],
         "1": [ 'y', '145' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '137' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '138' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '126' ], "12": [ 'y', ' 12' ] },
    
    "lt": {
         "0": [ 'lt', 'Lithuanian', 'LietuviÅ³', 'n', 'lt/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },
    
    "nb": {
         "0": [ 'nb', 'Norwegian (Bokmal)', 'Norsk (BokmÃ¥l)', 'n', 'no/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },
    
    "nl": {
         "0": [ 'nl', 'Dutch', 'Nederlands', 'y', 'nl/downloaden.html' ],
         "1": [ 'y', '151' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '152' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '144' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '145' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '159' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '132' ], "12": [ 'y', ' 12' ] },
    
    "pl": {
         "0": [ 'pl', 'Polish', 'Polski', 'y', 'pl/product.download.html' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },
    
    "pt-BR": {
         "0": [ 'pt-BR', 'Portuguese (Brazilian)', 'Portugu&ecirc;s (do Brasil)', 'y', 'pt-br/' ],
         "1": [ 'y', '144' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '136' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '137' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '151' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '125' ], "12": [ 'y', ' 12' ] },
    
    "pt": {
         "0": [ 'pt', 'Portuguese (European)', 'Portugu&ecirc;s (Europeu)', 'y', 'pt/download/' ],
         "1": [ 'y', '144' ],  "2": [ 'y', ' 12' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 12' ],  "5": [ 'y', '137' ],
         "6": [ 'y', ' 12' ],  "7": [ 'y', '137' ],  "8": [ 'y', ' 12' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 11' ],
        "11": [ 'y', '125' ], "12": [ 'y', ' 12' ] },
    
    "ru": {
         "0": [ 'ru', 'Russian', 'Ð ÑƒÑÑÐºÐ¸Ð¹', 'y', 'ru/about-downloads.html' ],
         "1": [ 'y', '150' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '151' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '143' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '144' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '158' ], "10": [ 'y', ' 12' ],
        "11": [ 'y', '131' ], "12": [ 'y', ' 13' ] },
    
    "sk": {
         "0": [ 'sk', 'Slovak', 'SlovenskÃ½ jazyk (slovenÄina)', 'y', 'sk/' ],
         "1": [ 'y', '144' ],  "2": [ 'y', ' 11' ],  "3": [ 'y', '145' ],  "4": [ 'y', ' 11' ],  "5": [ 'y', '137' ],
         "6": [ 'y', ' 11' ],  "7": [ 'y', '138' ],  "8": [ 'y', ' 11' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 10' ],
        "11": [ 'y', '125' ], "12": [ 'y', ' 11' ] },
    
    "sl": {
         "0": [ 'sl', 'Slovenian', 'Slovenski jezik (slovenÅ¡Äina)', 'n', 'sl/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },
    
    "sr": {
         "0": [ 'sr', 'Serbian (Cyrillic)', 'CÑ€Ð¿ÑÐºÐ¸ (Ñ›Ð¸Ñ€Ð¸Ð»Ð¸Ñ†Ð¾Ð¼)', 'n', 'sr/preuzmi.html' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },
    
    "sv": {
         "0": [ 'sv', 'Swedish', 'Svenska', 'n', 'sv/get/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },
    
    "ta": {
         "0": [ 'ta', 'Tamil', 'à®¤à®®à®¿à®´à¯', 'y', 'ta/' ],
         "1": [ 'y', '149' ],  "2": [ 'y', ' 18' ],  "3": [ 'y', '150' ],  "4": [ 'y', ' 18' ],  "5": [ 'y', '142' ],
         "6": [ 'y', ' 18' ],  "7": [ 'y', '143' ],  "8": [ 'y', ' 18' ],  "9": [ 'y', '157' ], "10": [ 'y', ' 17' ],
        "11": [ 'y', '131' ], "12": [ 'y', ' 18' ] },
    
    "th": {
         "0": [ 'th', 'Thai', 'à¸ à¸²à¸©à¸²à¹„à¸—à¸¢', 'n', 'download/index.html' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },
    
    "tr": {
         "0": [ 'tr', 'Turkish', 'T&uuml;rk&ccedil;e', 'n', 'tr/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },
    
    "vi": {
         "0": [ 'vi', 'Vietnamese', 'Tiáº¿ng Viá»‡t', 'n', 'vi/' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] },
    
    "zh-CN": {
         "0": [ 'zh-CN', 'Chinese (simplified)', 'ç®€ä½“ä¸­æ–‡', 'y',	 'download/index.html' ],
         "1": [ 'y', '145' ],  "2": [ 'y', ' 13' ],  "3": [ 'y', '146' ],  "4": [ 'y', ' 13' ],  "5": [ 'y', '138' ],
         "6": [ 'y', ' 13' ],  "7": [ 'y', '138' ],  "8": [ 'y', ' 13' ],  "9": [ 'y', '152' ], "10": [ 'y', ' 13' ],
        "11": [ 'y', '126' ], "12": [ 'y', ' 13' ] },
    
    "zh-TW": {
         "0": [ 'zh-TW', 'Chinese (traditional)', 'æ­£é«”ä¸­æ–‡', 'n', 'download/index.html' ],
         "1": [ 'n', '  0' ],  "2": [ 'n', '  0' ],  "3": [ 'n', '  0' ],  "4": [ 'n', '  0' ],  "5": [ 'n', '  0' ],
         "6": [ 'n', '  0' ],  "7": [ 'n', '  0' ],  "8": [ 'n', '  0' ],  "9": [ 'n', '  0' ], "10": [ 'n', '  0' ],
        "11": [ 'n', '  0' ], "12": [ 'n', '  0' ] }
    };











/*
 * Overview of all methods (functions) of the global object "DL"
 * -------------------------------------------------------------
 * function DL.init			( release_mode )
 * function DL.initVariables		( init_all )
 * function DL.getLanguage		()
 * function DL.fillOSSelection		()
 * function DL.fillLanguageSelection	()
 * function DL.fillVersionSelection	()
 * function DL.getOSSelection		()
 * function DL.getLanguageSelection	()
 * function DL.getVersionSelection	()
 * function DL.setOSSelection		()
 * function DL.setLanguageSelection	()
 * function DL.setVersionSelection	()
 * function DL.hideElements		()
 * function DL.showWindow		( target_link )
 * function DL.showErrorMessage		( error_text )
 * function DL.isLanguageSupported	()
 * function DL.checkForLinkExceptions	()
 * function DL.getLinkSelection		()
 * function DL.getPlatform		()
 * function DL.getReleaseMatrixPosition	()
 * function DL.getFileData		()
 * function DL.debug			( location )
 *
 * Overview of global functions
 * ----------------------------------------------------
 * function openItem			( itemid, uri )
 */

/*
 * Init function
 * @param:  release_mode - The release mode (stable, beta, etc.) that the scriping should work with
 * @return: None
 */
DL.init = function( release_mode ) {
	// Set global variables.
	DL.initVariables( 1 );

	// Fill the OS, language and version select boxes.
	DL.fillOSSelection();
	DL.fillLanguageSelection();
	DL.fillVersionSelection();

	// Get the language and platform from the browser data.
	DL.getLanguage();
	DL.getPlatform();

	// Set the recognized platform and language as default.
	DL.setOSSelection();
	DL.setLanguageSelection();
	DL.setVersionSelection();
	
	// When release mode = 2, it is a beta release. Otherwise assume "stable release" as default.
	if( release_mode === 2 ) {
		DL.RELEASE_MODE = mode;
	}

	DL.getLinkSelection();

	return;
}

/*
 * Define all global variables with default values
 * @param:  init_all - Should all variables initialized or just a part?
 * @return: None
 */
DL.initVariables = function( init_all ) {
	// Define variables without "var" to make them globally available.
	// The following are used in "download.js". and "index.html".

	// All elements with ID in the sub-box.
	DL.ID_SUB_BOX = [ "dl_rel_info", "dl_f_info", "dl_f_chk_keys", "space1", "dl_f_chk_asc", "space2", "dl_f_chk_sha256", "space3",
	"dl_f_chk_sha512", "space4", "dl_f_chk_md5", "dl_lp_info", "dl_lp_chk_keys", "space5", "dl_lp_chk_asc", "space6", "dl_lp_chk_sha256",
	"space7", "dl_lp_chk_sha512", "space8", "dl_lp_chk_md5", "dl_hlp_img", "dl_hlp", "dl_chk_img", "dl_chk", "dl_rpt_img",
	"dl_rpt" ];

	// All elements with ID in the box and sub-box that have a link.
	DL.ID_LINKS = [ "dl_f_link", "dl_lp_link", "dl_rel_notes", "dl_f_chk_keys", "dl_f_chk_asc", "dl_f_chk_sha256", "dl_f_chk_sha512",
	"dl_f_chk_md5", "dl_lp_chk_keys", "dl_lp_chk_asc", "dl_lp_chk_sha256", "dl_lp_chk_sha512", "dl_lp_chk_md5", "dl_hlp", "dl_chk",
	"dl_rpt" ];

	// The following are used in "download.js" only.

	// All global variables.
	if( init_all === 1 ) {
		DL.RELEASE_MODE		= 1;	 // The release mode (1 = stable release (default), 2 = beta release, etc.).
		DL.LANG_ISO		= "";	 // The language as ISO code.
		DL.LANG_SEL		= "";	 // The selected language as ISO code from select box.
		DL.UI_PLATFORM_NO_SUP	= "";	 // The platform as readable string, if not supported.
		DL.PLATFORM_SEL		= "";	 // The selected platform from select box.
		DL.VERSION_SEL		= "";	 // The selected version from select box.
		DL.VERSION_SEL_RAW	= "";	 // The selected version from select box without dots.
	}

	DL.UI_PLATFORM			= "";	 // The platform as readable string.
	DL.PLATFORM			= "";	 // The platform in short form.
	DL.PLATFORM_FULL		= "";	 // The platform as part of the download URL (full install).
	DL.PLATFORM_LP			= "";	 // The platform as part of the download URL (langpack).
	DL.RELEASE_PLATFORM_POS_FULL	= -1;	 // The position of the platform in the release matrix array (full install).
	DL.RELEASE_PLATFORM_POS_LP	= -1;	 // The position of the platform in the release matrix array (langpack).
	DL.RELEASE_PLATFORM		= "";	 // The platform in the release matrix array.
	DL.RELEASE_LANG			= "";	 // The language specific data depending on LANG_ISO.
	DL.REL_TEXT			= "";	 // The release data (milestone, build ID, svn rev, release date).
	DL.REL_NOTES			= "";	 // The complete URL for the release notes (depends on version).
	DL.FILENAME_FULL		= "";	 // The complete filename of the download URL (full install).
	DL.FILENAME_LP			= "";	 // The complete filename of the download URL (langpack).
	DL.FILESIZE_FULL		= -1;	 // The filesize of the download file (full install).
	DL.FILESIZE_LP			= -1;	 // The filesize of the download file (langpack).
	DL.EXTENSION			= "";	 // The file extension of the download URL.
	DL.INSTALL_EXTENSION		= "";	 // The file extension of the installation.
	DL.SF_BASE_URL			= "";	 // The base URL for all binary files on Sourceforge.
	DL.SF_PREV_URL			= "";	 // The base URL for all binary files (prev. version) on Sourceforge.
	DL.ASF_ARC_BASE_URL		= "";	 // The base URL for all checksum files on Apache Archive server.
	DL.ASF_ARC_PREV_URL		= "";	 // The base URL for all checksum files (prev. version) on Apache Archive server.
	DL.ASF_WIKI_URL			= "";	 // The base URL for all release notes on Apache Wiki.
	DL.LINK_FULL			= "";	 // The complete download URL (full install).
	DL.LINK_LP			= "";	 // The complete download URL (langpack).
	DL.LINK_CHK_KEYS		= "";	 // The KEYS file as download URL.
	DL.LINK_CHK_ASC_FULL		= "";	 // The ASC file as download URL (full install).
	DL.LINK_CHK_SHA256_FULL		= "";	 // The SHA256 file as download URL (full install).
	DL.LINK_CHK_SHA512_FULL		= "";	 // The SHA512 file as download URL (full install).
	DL.LINK_CHK_MD5_FULL		= "";	 // The MD5 file as download URL (full install).
	DL.LINK_CHK_ASC_LP		= "";	 // The ASC file as download URL (langpack).
	DL.LINK_CHK_SHA256_LP		= "";	 // The SHA256 file as download URL (langpack).
	DL.LINK_CHK_SHA512_LP		= "";	 // The SHA512 file as download URL (langpack).
	DL.LINK_CHK_MD5_LP		= "";	 // The MD5 file as download URL (langpack).
	DL.SHOW_SUB_BOX			= true;	 // Is the download URL OK to show the sub-box (true) or not (false)?
	DL.ERROR			= false; // Is the download URL in general OK (false) or not (true)?

	// Check if all option names in the selection box for languages are localized.
	// If the first string in the array element is larger than 0, assume all are localized and should be used.
	// Otherwise use the default names.
	if ( l10n.dl_green_box_select_box_lang_values_custom[ 0 ].length > 0 ) {
		DL.SEL_LANG = l10n.dl_green_box_select_box_lang_values_custom;
	}

	return;
}

/*
 * Get array and ISO code for language
 * @param:  None
 * @return: DL.LANG_ISO - The language as ISO code
 */
DL.getLanguage = function() {
	var language = "";

	// If available, use the manual set ISO code (see "index.html") that overrides $LANG_ISO.
	if( DL.NL_LANG !== "" ) {
		language = DL.NL_LANG;

	// Else if available, use the selected language from select box.
	} else if( DL.LANG_SEL !== "" ) {
		language = DL.LANG_SEL;

	// Else try to recognize the language from browser data.
	} else if( navigator.language ) {
		language = navigator.language;
	} else if( navigator.userLanguage ) {
		language = navigator.userLanguage;
	} else if( navigator.browserLanguage ) {
		language = navigator.browserLanguage;
	} else if( navigator.systemLanguage ) {
		language = navigator.systemLanguage;
	}

	// Assign "en-US" as fall-back language if only "en" is set or nothing at all.
	if( !language || language === "" || language == null || language === "en" ) {
		language = "en-US";
	}
/*
	// Assign "pt-PT" if only "pt" is set.
	if( language === "pt" ) {
		language = "pt-PT";
	}
*/
	// Konqueror uses '_' where other browsers use '-'.
	if( language.indexOf( "_" ) !== -1 ) {
		// Change a contained '_' into a '-'.
		language = language.split( "_" ).join( "-" );
	}

	language		= language.toLowerCase();		// Change the language into lower case.
	var languageCode	= language.split( "-" )[ 0 ];		// Part before "-" is the language code.
	var regionCode		= language.split( "-" )[ 1 ];		// Part behind "-" is the region code.
	var thisLanguageSet	= DL.language_matrix[ languageCode ];	// Assign complete lang data of the lang code.

	if( thisLanguageSet == null ) {
		// Assign "en-US" when the language code was not found inside array.
		language	= "en-US";
		languageCode	= "en";
		regionCode	= "us";
		thisLanguageSet	= DL.language_matrix[ languageCode ];
	}

	if( regionCode != null ) {
/*
		// Fix for Portuguese (European) downloads as they are named only "pt" without region code!
		if( languageCode === "pt" && regionCode === "pt" ) {
			language = languageCode;
		}
*/
		// If an additional region code was found.
		if( thisLanguageSet[ regionCode ] != null ) {
			// Assign langCode-regionCode.
			language     = languageCode + "-" + regionCode.toUpperCase();
			thisLanguage = thisLanguageSet[ regionCode ];
		} else {
			// Choose the default languageCode.
			var thisLanguage = thisLanguageSet[ "-" ];
			if( languageCode === "en" ) {
				// Special case: If language code is "en" then assign "en-US" for all "en-XX" cases.
				language	= "en-US";
				regionCode	= "us";
				thisLanguageSet	= DL.language_matrix[ languageCode ];
				thisLanguage	= thisLanguageSet[ regionCode ];
			} else {
				// Else assign the language code as language.
				language	= languageCode;
			}
		}
	} else {
		// Choose the default for none given region code.
		thisLanguage = thisLanguageSet[ "-" ];
	}

	DL.LANG_ISO = language;
	return DL.LANG_ISO;
}

/*
 * Set values into the <select> element for OS (select box)
 * @param:  None
 * @return: None
 */
DL.fillOSSelection = function() {
	var selection = document.getElementById( "os" );
	var option    = "";

	// Fill the <select> element until all OS's are used.
	for( var i = 0, j = DL.SEL_OS.length; i < j; i = i + 3 ) {
		option	     = document.createElement( "option" );
		// Assign the platform abbreviation as index value.
		option.value = DL.SEL_OS[ i ];
		// Assign the UI platform name.
		option.text  = DL.SEL_OS[ i + 1 ];
		// Add the new option to the already existing ones.
		selection.appendChild( option );
	}

	// Check if the option names are localized. 
	// If the first string in the array element is larger than 0, assume all are localized and should be used.
	if ( l10n.dl_green_box_select_box_os_values[ 0 ].length > 0 ) {
		// Search through the localized names.
		for( i = 0, j = l10n.dl_green_box_select_box_os_values.length; i < j; i++ ) {
			// Exchange the English UI platform name with the localized one.
			selection.options[ i ].text = l10n.dl_green_box_select_box_os_values[ i ];
		}
	}

	return;
}

/*
 * Set values into the <select> element for language (select box)
 * @param:  None
 * @return: None
 */
DL.fillLanguageSelection = function() {
	var selection = document.getElementById( "language" );
	var option    = "";

	// Fill the <select> element until all languages are used.
	for( var i = 0, j = DL.SEL_LANG.length; i < j; i = i + 3 ) {
		option       = document.createElement( "option" );
		// Assign the language ISO code as index value.
		option.value = DL.SEL_LANG[ i ];
/*
		// Assign the language ISO code as title.
		option.title = DL.SEL_LANG[ i ];
		// Assign the language name as "English name (Native name)".
		option.text  = DL.SEL_LANG[ i + 1 ];
*/
		// Assign the language name as "English name".
		option.text  = DL.SEL_LANG[ i + 1 ];
		// Assign the language name as "Native name (ISO code)" to show as mouse over title.
		option.title = DL.SEL_LANG[ i + 2 ] + " (" + DL.SEL_LANG[ i ] + ")";
		// Add the new option to the already existing ones.
		selection.appendChild( option );
	}

	// Check if only the option names are localized.
	// If the first string in the array element is larger than 0, assume all are localized and should be used.
	if ( l10n.dl_green_box_select_box_language_values[ 0 ].length > 0 ) {
		// Search through the localized names.
		for( i = 0, j = l10n.dl_green_box_select_box_language_values.length; i < j; i++ ) {
			// Exchange the English language name with the localized one.
			selection.options[ i ].text = l10n.dl_green_box_select_box_language_values[ i ];
/*
			alert( "i:              \t\t"	+ i + "\n"
				+ "Localized:	\t"     + l10n.dl_green_box_select_box_language_values[ i ]	+ "\n"
				+ "Text:	\t\t"   + selection.options[ i ].text				+ "\n"
				+ "Title:	\t\t"   + selection.options[ i ].title );
*/
		}
	}

	return;
}

/*
 * Set values into the <select> element for version (select box)
 * @param:  None
 * @return: None
 */
DL.fillVersionSelection = function() {
	var selection = document.getElementById( "version" );
	var option    = "";

	// Fill the <select> element until all versions are used.
	for( var i = 0, j = DL.SEL_VER.length; i < j; i = i + 2 ) {
		option       = document.createElement( "option" );
		// Assign the version as index value.
		option.value = DL.SEL_VER[ i ];
		// Assign the UI version.
		option.text  = DL.SEL_VER[ i + 1 ];
		// Add the new option to the already existing ones.
		selection.appendChild( option );
	}

	// Check if the option names are localized. 
	// If the first string in the array element is larger than 0, assume all are localized and should be used.
	if ( l10n.dl_green_box_select_box_version_values[ 0 ].length > 0 ) {
		// Search through the localized names.
		for( i = 0, j = l10n.dl_green_box_select_box_version_values.length; i < j; i++ ) {
			// Exchange the version name with the localized one.
			selection.options[ i ].text = l10n.dl_green_box_select_box_version_values[ i ];
		}
	}

	return;
}

/*
 * Set value in the <select> element for OS (select box)
 * @param:  None
 * @return: DL.PLATFORM_SEL - The platform as short code that was set as selected in the drop-down box
 */
DL.setOSSelection = function() {
	// Depending on $DL.PLATFORM assign the platform string of the release matrix.

	var selection = document.getElementById( "os" );

	// Set the recognized browser platform as default for the select box.
	for( var i = 0, j = DL.SEL_OS.length; i < j; i = i + 3 ) {
		// If the platform was found, set it as pre-selected.
		if( DL.SEL_OS[ i ] === DL.PLATFORM ) {
			selection.selectedIndex = i / 3;
			break;
		}
	}

	// If no selected platform for was set in the select box because it was not recognized from browser data,
	// assign "Windows" as default.
	if( selection.selectedIndex === 0 ) {
		// Default: Assign "Windows".
		for( var i = 0, j = DL.SEL_OS.length; i < j; i = i + 3 ) {
			// If the platform was found, set it as pre-selected.
			if( DL.SEL_OS[ i ] === "win32" ) {
				selection.selectedIndex = i / 3;
				break;
			}
		}
	}

	DL.PLATFORM_SEL = selection.value;
	return DL.PLATFORM_SEL;
}

/*
 * Set value in the <select> element for language (select box)
 * @param:  None
 * @return: DL.LANG_SEL - The language as ISO code that was set as selected in the drop-down box
 */
DL.setLanguageSelection = function() {
	// Depending on $DL.LANG_ISO assign the language position of the release matrix.

	var selection = document.getElementById( "language" );

	// Set the recognized browser language as default for the select box.
	for( var i = 0, j = DL.SEL_LANG.length; i < j; i = i + 3 ) {
		// If the language was found, set it as pre-selected.
		if( DL.SEL_LANG[ i ] === DL.LANG_ISO ) {
			selection.selectedIndex = i / 3;
			break;
		}
	}

	// If the selected language is already the first in the select box and LANG_ISO === "ast" is also true,
	// use "ast" as language.
	if( selection.selectedIndex === 0 && DL.LANG_ISO === "ast" ) {
		// Leave "ast" as selected language and don't change this.
		// Empty by intention.

	} else if( selection.selectedIndex === 0 ) {
	// If no selected language was set in the select box because it was not recognized from browser data,
	// assign "en-US" as default.
		// Default: Assign "en-US".
		for( var i = 0, j = DL.SEL_LANG.length; i < j; i = i + 2 ) {
			// If the language was found, set it as pre-selected.
			if( DL.SEL_LANG[ i ] === "en-US" ) {
				selection.selectedIndex = i / 2;
				break;
			}
		}
	}

	DL.LANG_SEL = selection.value;
	return DL.LANG_SEL;
}

/*
 * Set value in the <select> element for version (select box)
 * @param:  None
 * @return: DL.VERSION_SEL - The version that was set as selected in the drop-down box
 */
DL.setVersionSelection = function() {
	// Depending on $DL.VERSION assign the version.

	var selection = document.getElementById( "version" );

	// Set the value of $DL.VERSION as default for the select box.
	for( var i = 0, j = DL.SEL_VER.length; i < j; i = i + 2 ) {
		// If the version was found, set it as pre-selected.
		if( DL.SEL_VER[ i ] === DL.VERSION ) {
			selection.selectedIndex = i/2;
			break;
		}
	}

	// No need to assign a default version because the propery "DL.VERSION" must always exist.

	DL.VERSION_SEL = selection.value;
	return DL.VERSION_SEL;
}

/*
 * Get values from the <select> element for OS (select box)
 * @param:  None
 * @return: DL.PLATFORM_SEL - The platform as short code that was selected from the drop-down box
 */
DL.getOSSelection = function() {
	var os_value = document[ "download" ]["os" ].options[ document[ "download" ][ "os" ].selectedIndex ].value;

	// Search through the <select> element until the chosen OS is found.
	for( var i = 0, j = DL.SEL_OS.length; i < j; i = i + 3 ) {
		if( DL.SEL_OS[ i ] === os_value ) {
			DL.PLATFORM_SEL = DL.SEL_OS[ i ];
			DL.UI_PLATFORM  = DL.SEL_OS[ i + 1 ];
			DL.EXTENSION    = DL.SEL_OS[ i + 2 ];

			if( DL.UI_PLATFORM.indexOf( "EXE" ) !== -1 ) DL.INSTALL_EXTENSION = "EXE";
			if( DL.UI_PLATFORM.indexOf( "RPM" ) !== -1 ) DL.INSTALL_EXTENSION = "RPM";
			if( DL.UI_PLATFORM.indexOf( "DEB" ) !== -1 ) DL.INSTALL_EXTENSION = "DEB";
			if( DL.UI_PLATFORM.indexOf( "DMG" ) !== -1 ) DL.INSTALL_EXTENSION = "DMG";

			break;
		}
	}

	DL.PLATFORM = DL.PLATFORM_SEL;
	return DL.PLATFORM_SEL;
}

/*
 * Get values from the <select> element for language (select box)
 * @param:  None
 * @return: DL.LANG_SEL - The language as ISO code that was selected from the drop-down box
 */
DL.getLanguageSelection = function() {
	var language_value = document[ "download" ][ "language" ].options[ document[ "download" ][ "language" ].selectedIndex ].value;

	// Search through the <select> element until the chosen language is found.
	for( var i = 0, j = DL.SEL_LANG.length; i < j; i = i + 3 ) {
		if( DL.SEL_LANG[ i ] === language_value ) {
			DL.SEL_LANG = language_value;
			break;
		}
	}

	DL.LANG_ISO = DL.SEL_LANG;
	DL.LANG_SEL = DL.SEL_LANG;
	return DL.SEL_LANG;
}

/*
 * Get values from the <select> element for version (select box)
 * @param:  None
 * @return: DL.VERSION_SEL - The version that was selected from the drop-down box
 */
DL.getVersionSelection = function() {
	var version_value = document[ "download" ][ "version" ].options[ document[ "download" ][ "version" ].selectedIndex ].value;

	// Search through the <select> element until the chosen version is found.
	for( var i = 0, j = DL.SEL_VER.length; i < j; i = i + 2 ) {
		if( DL.SEL_VER[ i ] === version_value ) {
			DL.VERSION_SEL = version_value;
			break;
		}
	}

	// Get the version number without dots (e.g., "413" instead of "4.1.3").
	DL.VERSION_SEL_RAW = DL.VERSION_SEL.replace( /\./g,'' );

	return DL.VERSION_SEL;
}

/*
 * Hide CSS style for all elements with ID to make them invisible
 * @param:  None
 * @return: None
 */
DL.hideElements = function() {
	// Change CSS styles for all elements with ID in the green and sub-green colored boxes.
	// Emtpy the values for all elements, make them invisible.

	for( var i = 0, j = DL.ID_SUB_BOX.length; i < j; i++ ) {
		document.getElementById( DL.ID_SUB_BOX[ i ] ).style.display = "none";
	}

	for( var i = 0, j = DL.ID_LINKS.length; i < j; i++ ) {
		document.getElementById( DL.ID_LINKS[ i ] ).style.display   = "none";
	}

	return;
}

/*
 * Show a popup window
 * @param:  target_link - The URL that should be opened as popup window
 * @return: None
 */
DL.showWindow = function( target_link ) {
	// Open a popup window with specific parameters to show the file from "target_link".

 	var popup_window = "";

	popup_window = window.open( target_link, "_blank", "location=no, menubar=no, resizable=yes, scrollbars=yes, status=no, titlebar=no, toolbar=no, left=100, top=250, width=800, height=550" );
	if (window.focus) {
	    popup_window.focus;
	}

	return;
}

/*
 * Show error message
 * @param:  error_text   - The text should should be shown as error message
 * @return: DL.ERROR - Set the general error flag to "true"
 */
DL.showErrorMessage = function( error_text ) {
	// The chosen items from select boxes lead to no download link, show an error message about reason + alternative.

	// In general, hide the data for link, text and title of all elements.
	DL.hideElements();

	// Now set again the values for all elements that should be shown with changed data.
	//document.getElementById( "dl_f_link"	).style.display	 = "inline";
	document.getElementById( "dl_f_link"	).style.cursor	 = "not-allowed";
	document.getElementById( "dl_f_link"	).href		 = "javascript:void( 0 )";
	document.getElementById( "dl_f_link"	).innerHTML	 = l10n.dl_full_link_error_text;
	document.getElementById( "dl_f_link"	).title		 = l10n.dl_full_link_error_title;
	document.getElementById( "dl_lp_link"	).style.display	 = "inline";
	document.getElementById( "dl_lp_link"	).style.cursor	 = "not-allowed";
	document.getElementById( "dl_lp_link"	).href		 = "javascript:void( 0 )";
	document.getElementById( "dl_lp_link"	).innerHTML	 = l10n.dl_langpack_link_error_text;
	document.getElementById( "dl_lp_link"	).title		 = l10n.dl_langpack_link_error_title;

	document.getElementById( "dl_err_img"   ).src		 = l10n.dl_error_problem_img_src;
	document.getElementById( "dl_err_img"   ).title		 = l10n.dl_error_problem_img_title;
	document.getElementById( "dl_err_img"   ).alt		 = l10n.dl_error_problem_img_alt;
	document.getElementById( "dl_err_img"	).style.display	 = "inline-block";
	document.getElementById( "dl_err"	).innerHTML	 = "<br />" + error_text;
	document.getElementById( "dl_err"	).style.fontSize = "1.2em";
	document.getElementById( "dl_err"	).style.cursor	 = "default";
	document.getElementById( "dl_err"	).style.display	 = "inline-block";

	document.getElementById( "sub_box"	).className	 = "sub-green-sel_error";
	document.getElementById( "sub_box"	).style.display	 = "block";

	// Delete previously set strings to avoid to show them.
	document.getElementById( "dl_rpm_vs_deb" ).style.cursor	= "default";
	document.getElementById( "dl_rpm_vs_deb" ).title	= "";
	document.getElementById( "dl_rpm_vs_deb" ).text		= "";
	
	// Delete previously set strings to get the possibility back to choose a different platform
	// and then to assemble a new download link.
	DL.UI_PLATFORM_NO_SUP	= "";
	DL.SHOW_SUB_BOX		= true;
	DL.ERROR		= true;
	return DL.ERROR;
}

/*
 * Is support flag set for chosen language and version (y/n)?
 * @param:  None
 * @return: DL.ERROR - Depending on if the language is supported set the general error flag to "true" or "false"
 */
DL.isLanguageSupported = function() {
	// Check if the language in "release_matrix.js" is a release language depending on the version.

	// If no VERSION was selected, assume the default version.
	if( DL.VERSION_SEL === undefined || DL.VERSION_SEL === "" ) {
		DL.VERSION_SEL = DL.VERSION;
	}

	// If VERSION != "4.x.y" then exit.
	if( DL.VERSION_SEL === "3.4.1" || DL.VERSION_SEL === "older" || DL.VERSION_SEL === "other" ) {
		DL.ERROR = false;
		return false;
	}

	// Assign the language data of the selected version depending on the ISO code.
	// Generate variable name: release_matrix_ + version number without dots (e.g., "413" instead of "4.1.3").
	DL.RELEASE_LANG = DL[ "release_matrix_" + DL.VERSION_SEL_RAW ][ DL.LANG_ISO ][ 0 ];

	// If the flag = 'y' then the language is supported, otherwise not.
	if( DL.RELEASE_LANG[ 3 ] === 'y' ) {
		DL.ERROR = false;
		return true;
	} else {
		DL.ERROR = true;
		return false;
	}
}

/*
 * Check links that should be assembled in getLinkSelection() for expections that do not lead to real download links
 * @param:  None
 * @return: None
 */
DL.checkForLinkExceptions = function() {
	// If recognized resp. selected platform, language or version does not lead to a normal download link,
	// show the none-availability to the user.

	DL.SHOW_SUB_BOX	= true;
	DL.ERROR	= false;

	// If language is not supported, show the none-availability to the user.
	if( ! DL.isLanguageSupported() ) {
		// Show an error message that the chosen items do not lead to a download.

		// If a customized string is not available in the "msg_prop_l10n_XX.js" file.
		if( l10n.dl_error_custom_4_text === "" ) {
			// Show the default error text.
			var error_text = "<b>" + l10n.dl_error_problem_text + "</b>"
					+ l10n.dl_error_aoo_text + DL.VERSION_SEL
					+ l10n.dl_error_not_available_for_text
					+ "<b>" + DL.RELEASE_LANG[ 1 ]
					+ " (" + DL.RELEASE_LANG[ 2 ] + ") (" + DL.LANG_SEL + ")</b>."
					+ "<br />"
					+ "<b>" + l10n.dl_error_solution_text + "</b>"
					+ l10n.dl_error_please_select_4_text;
		} else {
			// Show the customized error text.
			var error_text = l10n.dl_error_custom_4_text;
		}

		DL.showErrorMessage( error_text );
	}

	// If the browser-guessed platform is not supported, show the none-availability to the user.
	if( DL.UI_PLATFORM_NO_SUP !== "" ) {
		// Show an error message that the chosen items do not lead to a download.

		// If a customized string is not available in the "msg_prop_l10n_XX.js" file.
		if( l10n.dl_error_custom_3_text === "" ) {
			// Show the default error text.
			var error_text = "<b>" + l10n.dl_error_problem_text + "</b>"
					+ l10n.dl_error_aoo_text + DL.VERSION_SEL
					+ l10n.dl_error_not_available_for_text
					+ "<b>" + DL.UI_PLATFORM_NO_SUP + "</b>."
					+ "<br />"
					+ "<b>" + l10n.dl_error_solution_text + "</b>"
					+ l10n.dl_error_please_select_3_text;
		} else {
			// Show the customized error text.
			var error_text = l10n.dl_error_custom_3_text;
		}

		DL.showErrorMessage( error_text );
	}

	// If version is '4.1.0' (or newer) and platform is 'Mac OS X <= 10.6', show the none-availability to the user.
	if( ( DL.VERSION_SEL === "4.1.6" || DL.VERSION_SEL === "4.1.5" || DL.VERSION_SEL === "4.1.4" || DL.VERSION_SEL === "4.1.3" || DL.VERSION_SEL === "4.1.2" || DL.VERSION_SEL === "4.1.1" || DL.VERSION_SEL === "4.1.0" ) && DL.PLATFORM === "mac32" ) {
		// Show an error message that the chosen items do not lead to a download.

		// If a customized string is not available in the "msg_prop_l10n_XX.js" file.
		if( l10n.dl_error_custom_1_text === "" ) {
			// Show the default error text.
			var error_text = "<b>" + l10n.dl_error_problem_text + "</b>"
					+ l10n.dl_error_aoo_text + DL.VERSION_SEL
					+ l10n.dl_error_not_available_for_text
					+ "<b>" + DL.UI_PLATFORM + "</b>."
					+ "<br />"
					+ "<b>" + l10n.dl_error_solution_text + "</b>"
					+ l10n.dl_error_please_select_1_text;
		} else {
			// Show the customized error text.
			var error_text = l10n.dl_error_custom_1_text;
		}

		DL.showErrorMessage( error_text );
	}

	// If version is '4.0.1' (or older) and platform is 'Mac OS X >= 10.7', show the none-availability to the user.
	if( ( DL.VERSION_SEL === "4.0.1" || DL.VERSION_SEL === "4.0.0" ) && DL.PLATFORM === "mac64" ) {
		// Show an error message that the chosen items do not lead to a download.

		// If a customized string is not available in the "msg_prop_l10n_XX.js" file.
		if( l10n.dl_error_custom_2_text === "" ) {
			// Show the default error text.
			var error_text = "<b>" + l10n.dl_error_problem_text + "</b>"
					+ l10n.dl_error_aoo_text + DL.VERSION_SEL
					+ l10n.dl_error_not_available_for_text
					+ "<b>" + DL.UI_PLATFORM + "</b>."
					+ "<br />"
					+ "<b>" + l10n.dl_error_solution_text + "</b>"
					+ l10n.dl_error_please_select_2_text;
		} else {
			// Show the customized error text.
			var error_text = l10n.dl_error_custom_2_text;
		}

		DL.showErrorMessage( error_text );
	}

	// If version is '3.4.1', create a download link that leads to the "other-3.4.1.html" webpage.
	if( DL.VERSION_SEL === "3.4.1" ) {
		// In general, hide the data for link, text and title of all elements.
		DL.hideElements();

		// Set the values for the single download text button.
		document.getElementById( "dl_f_link"	).href		= l10n.dl_aoo341_link;
		document.getElementById( "dl_f_link"	).innerHTML	= l10n.dl_full_link_archive_text;
		document.getElementById( "dl_f_link"	).title		= l10n.dl_full_link_archive_title;
		document.getElementById( "dl_f_link"	).style.cursor	= "pointer";
		//document.getElementById( "dl_f_link"	).style.display = "inline";
		document.getElementById( "dl_lp_link"	).style.display = "none";
		document.getElementById( "sub_box"	).style.display = "none";

		DL.SHOW_SUB_BOX = false;
	}

	// If platform is 'other', create a download link that leads to the Porting webpage.
	if( DL.PLATFORM_SEL === "other" ) {
		// In general, hide the data for link, text and title of all elements.
		DL.hideElements();

		// Set the values for the single download text button.
		document.getElementById( "dl_f_link"	).href		= l10n.dl_porting_link;
		document.getElementById( "dl_f_link"	).innerHTML	= l10n.dl_full_link_porting_text;
		document.getElementById( "dl_f_link"	).title		= l10n.dl_full_link_porting_title;
		document.getElementById( "dl_f_link"	).style.cursor	= "pointer";
		//document.getElementById( "dl_f_link"	).style.display = "inline";
		document.getElementById( "dl_lp_link"	).style.display = "none";
		document.getElementById( "sub_box"	).style.display = "none";

		DL.SHOW_SUB_BOX = false;
	}

	// If version is 'older', create a download link that leads to the archive webpage.
	if( DL.VERSION_SEL === "older" ) {
		// In general, hide the data for link, text and title of all elements.
		DL.hideElements();

		// Set the values for the single download text button.
		document.getElementById( "dl_f_link"	).href		= l10n.dl_archive_link;
		document.getElementById( "dl_f_link"	).innerHTML	= l10n.dl_full_link_archive_text;
		document.getElementById( "dl_f_link"	).title		= l10n.dl_full_link_archive_title;
		document.getElementById( "dl_f_link"	).style.cursor	= "pointer";
		//document.getElementById( "dl_f_link"	).style.display = "inline";
		document.getElementById( "dl_lp_link"	).style.display = "none";
		document.getElementById( "sub_box"	).style.display = "none";

		DL.SHOW_SUB_BOX = false;
	}

	return;
}

/*
 * Get link to mirror system for download file and checksum file
 * @param:  None
 * @return: None
 */
DL.getLinkSelection = function() {
	// Reset all variables that could have been set until now.
	DL.initVariables( 0 );

	// Get the selected data from the select boxes.
	DL.getOSSelection();
	DL.getLanguageSelection();
	DL.getVersionSelection();

	// First check for expections that do not lead to real download links.
	DL.checkForLinkExceptions();

	// If the selected options lead to no download URL, should the sub-box shown anyway?
	// Yes when SHOW_SUB_BOX = "true" and ERROR = "false".
	if( DL.SHOW_SUB_BOX && ! DL.ERROR ) {
		// Assemble the filenames and text for download and checksums.

		DL.getReleaseMatrixPosition();
		DL.getFileData();

		DL.SF_BASE_URL		= DL.SF      + DL.VERSION_SEL + "/binaries/";
		DL.ASF_ARC_BASE_URL     = DL.ASF_ARC + DL.VERSION_SEL;

		// Assign the download links: Base link + language + file name.
		DL.LINK_FULL		= DL.SF_BASE_URL		     + DL.LANG_SEL + "/" + DL.FILENAME_FULL + "/download";
		DL.LINK_LP		= DL.SF_BASE_URL		     + DL.LANG_SEL + "/" + DL.FILENAME_LP   + "/download";

		// Assign the checksum links: Base link + language + file name.
		DL.LINK_CHK_KEYS	= DL.ASF_DIST + "KEYS";
		DL.LINK_CHK_ASC_FULL    = DL.ASF_ARC_BASE_URL + "/binaries/" + DL.LANG_SEL + "/" + DL.FILENAME_FULL + ".asc";
		DL.LINK_CHK_SHA256_FULL = DL.ASF_ARC_BASE_URL + "/binaries/" + DL.LANG_SEL + "/" + DL.FILENAME_FULL + ".sha256";
		DL.LINK_CHK_SHA512_FULL = DL.ASF_ARC_BASE_URL + "/binaries/" + DL.LANG_SEL + "/" + DL.FILENAME_FULL + ".sha512";

		DL.LINK_CHK_ASC_LP	= DL.ASF_ARC_BASE_URL + "/binaries/" + DL.LANG_SEL + "/" + DL.FILENAME_LP   + ".asc";
		DL.LINK_CHK_SHA256_LP	= DL.ASF_ARC_BASE_URL + "/binaries/" + DL.LANG_SEL + "/" + DL.FILENAME_LP   + ".sha256";
		DL.LINK_CHK_SHA512_LP	= DL.ASF_ARC_BASE_URL + "/binaries/" + DL.LANG_SEL + "/" + DL.FILENAME_LP   + ".sha512";

		// Indicate that a download will successfull.
		DL.SHOW_SUB_BOX		= true;
		DL.ERROR		= false;

		// If a Linux file is selected, then set the values for the RPM vs. DEB text link. Otherwise no text.
		if( DL.INSTALL_EXTENSION === "RPM" || DL.INSTALL_EXTENSION === "DEB" ) {
			document.getElementById( "dl_rpm_vs_deb" ).style.cursor	= "help";
			document.getElementById( "dl_rpm_vs_deb" ).title	= l10n.dl_rpm_vs_deb_title;
			document.getElementById( "dl_rpm_vs_deb" ).text		= l10n.dl_rpm_vs_deb_text;
		} else {
			document.getElementById( "dl_rpm_vs_deb" ).style.cursor	= "default";
			document.getElementById( "dl_rpm_vs_deb" ).title	= "";
			document.getElementById( "dl_rpm_vs_deb" ).text		= "";
		}

		// Set the values for both download text buttons and set the focus to the "full install".
		document.getElementById( "dl_f_link"	    ).href	= DL.LINK_FULL;
		document.getElementById( "dl_f_link"	    ).innerHTML	= l10n.dl_full_link_text;
		document.getElementById( "dl_f_link"	    ).title	= l10n.dl_full_link_title + DL.FILENAME_FULL;
		document.getElementById( "dl_f_link"	    ).focus()
		document.getElementById( "dl_lp_link"	    ).href	= DL.LINK_LP;
		document.getElementById( "dl_lp_link"	    ).innerHTML	= l10n.dl_langpack_link_text;
		document.getElementById( "dl_lp_link"	    ).title	= l10n.dl_langpack_link_title + DL.FILENAME_LP;

		// Set the values in the sub-box for the 4 text lines.
		// #1 Release data and link to release notes.
		document.getElementById( "dl_rel_info"      ).innerHTML	= "<b>" + l10n.dl_rel_info_headline_text
									+ "</b> " + DL.REL_TEXT + " | ";
		document.getElementById( "dl_rel_notes"	    ).href	= DL.REL_NOTES;
		document.getElementById( "dl_rel_notes"	    ).innerHTML	= l10n.dl_rel_notes_text;
		document.getElementById( "dl_rel_notes"	    ).title	= l10n.dl_rel_notes_title + DL.VERSION_SEL;

		// #2 Full install: Data and links
		document.getElementById( "dl_f_info"	    ).innerHTML = "<b>" + l10n.dl_headline_full_text + "</b>"
									+ l10n.dl_filesize_text + DL.FILESIZE_FULL
									+ l10n.dl_megabyte_text + " | "
									+ l10n.dl_checksum_headline_text;
		document.getElementById( "dl_f_chk_keys"    ).href	= DL.LINK_CHK_KEYS;
		document.getElementById( "dl_f_chk_keys"    ).innerHTML	= l10n.dl_checksum_keys_text;
		document.getElementById( "dl_f_chk_keys"    ).title	= l10n.dl_checksum_keys_title;
		document.getElementById( "space1"	    ).innerHTML	= " , ";
		document.getElementById( "dl_f_chk_asc"	    ).href	= DL.LINK_CHK_ASC_FULL;
		document.getElementById( "dl_f_chk_asc"	    ).innerHTML	= l10n.dl_checksum_asc_text;
		document.getElementById( "dl_f_chk_asc"	    ).title	= l10n.dl_checksum_asc_title + DL.FILENAME_FULL;
		document.getElementById( "space2"	    ).innerHTML	= " , ";
		document.getElementById( "dl_f_chk_sha256"  ).href	= DL.LINK_CHK_SHA256_FULL;
		document.getElementById( "dl_f_chk_sha256"  ).innerHTML	= l10n.dl_checksum_sha256_text;
		document.getElementById( "dl_f_chk_sha256"  ).title	= l10n.dl_checksum_sha256_title + DL.FILENAME_FULL;
		document.getElementById( "space3"	    ).innerHTML	= " , ";
		document.getElementById( "dl_f_chk_sha512"  ).href	= DL.LINK_CHK_SHA512_FULL;
		document.getElementById( "dl_f_chk_sha512"  ).innerHTML	= l10n.dl_checksum_sha512_text;
		document.getElementById( "dl_f_chk_sha512"  ).title	= l10n.dl_checksum_sha512_title + DL.FILENAME_FULL;

		// #3 Langpack: Data and links
		document.getElementById( "dl_lp_info"	    ).innerHTML	= "<b>" + l10n.dl_headline_langpack_text
									+ "</b>" + l10n.dl_filesize_text
									+ DL.FILESIZE_LP + l10n.dl_megabyte_text
									+ " | " + l10n.dl_checksum_headline_text;
		document.getElementById( "dl_lp_chk_keys"   ).href	= DL.LINK_CHK_KEYS;
		document.getElementById( "dl_lp_chk_keys"   ).innerHTML	= l10n.dl_checksum_keys_text;
		document.getElementById( "dl_lp_chk_keys"   ).title	= l10n.dl_checksum_keys_title;
		document.getElementById( "space5"	    ).innerHTML	= " , ";
		document.getElementById( "dl_lp_chk_asc"    ).href	= DL.LINK_CHK_ASC_LP;
		document.getElementById( "dl_lp_chk_asc"    ).innerHTML	= l10n.dl_checksum_asc_text;
		document.getElementById( "dl_lp_chk_asc"    ).title	= l10n.dl_checksum_asc_title + DL.FILENAME_LP;
		document.getElementById( "space6"	    ).innerHTML	= " , ";
		document.getElementById( "dl_lp_chk_sha256" ).href	= DL.LINK_CHK_SHA256_LP;
		document.getElementById( "dl_lp_chk_sha256" ).innerHTML	= l10n.dl_checksum_sha256_text;
		document.getElementById( "dl_lp_chk_sha256" ).title	= l10n.dl_checksum_sha256_title + DL.FILENAME_LP;
		document.getElementById( "space7"	    ).innerHTML	= " , ";
		document.getElementById( "dl_lp_chk_sha512" ).href	= DL.LINK_CHK_SHA512_LP;
		document.getElementById( "dl_lp_chk_sha512" ).innerHTML	= l10n.dl_checksum_sha512_text;
		document.getElementById( "dl_lp_chk_sha512" ).title	= l10n.dl_checksum_sha512_title + DL.FILENAME_LP;

		// #4 Links: Full vs. lp + verify checksums + report broken link.
		document.getElementById( "dl_hlp_img"	    ).src	= l10n.dl_help_img_src;
		document.getElementById( "dl_hlp_img"	    ).title	= l10n.dl_help_img_title;
		document.getElementById( "dl_hlp_img"	    ).alt	= l10n.dl_help_img_alt;
		document.getElementById( "dl_hlp"	    ).href	= l10n.dl_help_link;
		document.getElementById( "dl_hlp"	    ).innerHTML	= l10n.dl_help_text;
		document.getElementById( "dl_hlp"	    ).title	= l10n.dl_help_title;
		document.getElementById( "dl_chk_img"	    ).src	= l10n.dl_checksum_img_src;
		document.getElementById( "dl_chk_img"	    ).title	= l10n.dl_checksum_img_title;
		document.getElementById( "dl_chk_img"	    ).alt	= l10n.dl_checksum_img_alt;
		document.getElementById( "dl_chk"	    ).href	= l10n.dl_checksum_link;
		document.getElementById( "dl_chk"	    ).innerHTML	= l10n.dl_checksum_text;
		document.getElementById( "dl_chk"	    ).title	= l10n.dl_checksum_title;
		document.getElementById( "dl_rpt_img"	    ).src	= l10n.dl_report_img_src;
		document.getElementById( "dl_rpt_img"	    ).title	= l10n.dl_report_img_title;
		document.getElementById( "dl_rpt_img"	    ).alt	= l10n.dl_report_img_alt;
		document.getElementById( "dl_rpt"	    ).href	= l10n.dl_report_link;
		document.getElementById( "dl_rpt"	    ).innerHTML	= l10n.dl_report_text;
		document.getElementById( "dl_rpt"	    ).title	= l10n.dl_report_title;

		// New Apache release policy since March 2018: Do not provide any MD5 checksums anymore as it is understood as too insecure.
		if( ( DL.VERSION_SEL === "4.1.6" || DL.VERSION_SEL === "4.2.0" ) ) {
			// If version is '4.1.6' (or newer), do not show any MD5 checksum file links.
			document.getElementById( "space4"	    ).innerHTML	= "";
			document.getElementById( "dl_f_chk_md5"	    ).href	= "";
			document.getElementById( "dl_f_chk_md5"	    ).innerHTML	= "";
			document.getElementById( "dl_f_chk_md5"	    ).title	= "";

			document.getElementById( "space8"	    ).innerHTML	= "";
			document.getElementById( "dl_lp_chk_md5"    ).href	= "";
			document.getElementById( "dl_lp_chk_md5"    ).innerHTML	= "";
			document.getElementById( "dl_lp_chk_md5"    ).title	= "";
		} else {
			// If version is '4.1.5' (or older), it's OK to show the MD5 checksum file links.
			DL.LINK_CHK_MD5_FULL = DL.ASF_ARC_BASE_URL + "/binaries/" + DL.LANG_SEL + "/" + DL.FILENAME_FULL + ".md5";
			DL.LINK_CHK_MD5_LP   = DL.ASF_ARC_BASE_URL + "/binaries/" + DL.LANG_SEL + "/" + DL.FILENAME_LP   + ".md5";

			document.getElementById( "space3"	    ).innerHTML	= "";
			document.getElementById( "dl_f_chk_sha512"  ).href	= "";
			document.getElementById( "dl_f_chk_sha512"  ).innerHTML	= "";
			document.getElementById( "dl_f_chk_sha512"  ).title	= "";

			document.getElementById( "space7"	    ).innerHTML	= "";
			document.getElementById( "dl_lp_chk_sha512" ).href	= "";
			document.getElementById( "dl_lp_chk_sha512" ).innerHTML	= "";
			document.getElementById( "dl_lp_chk_sha512" ).title	= "";

			document.getElementById( "space4"	    ).innerHTML	= " , ";
			document.getElementById( "dl_f_chk_md5"	    ).href	= DL.LINK_CHK_MD5_FULL;
			document.getElementById( "dl_f_chk_md5"	    ).innerHTML	= l10n.dl_checksum_md5_text;
			document.getElementById( "dl_f_chk_md5"	    ).title	= l10n.dl_checksum_md5_title + DL.FILENAME_FULL;

			document.getElementById( "space8"	    ).innerHTML	= " , ";
			document.getElementById( "dl_lp_chk_md5"    ).href	= DL.LINK_CHK_MD5_LP;
			document.getElementById( "dl_lp_chk_md5"    ).innerHTML	= l10n.dl_checksum_md5_text;
			document.getElementById( "dl_lp_chk_md5"    ).title	= l10n.dl_checksum_md5_title + DL.FILENAME_LP;
		}

		// Show the CSS style for the normal sub-box and hide all elements for error text.
		document.getElementById( "sub_box"	    ).className	    = "sub-green-sel";
		document.getElementById( "dl_err_img"	    ).style.display = "none";
		document.getElementById( "dl_err"	    ).style.display = "none";

		// Show all elements with ID in the box and sub-box.
		// Set the cursor style for elements to default and make the elements visible.
		for( var i = 0, j = DL.ID_SUB_BOX.length; i < j; i++ ) {
			//document.getElementById( DL.ID_SUB_BOX[ i ] ).style.display = "inline";
			document.getElementById( DL.ID_SUB_BOX[ i ] ).style.cursor  = "default";
		}

		// Show all elements with link in the box and sub-box.
		// Set the cursor style for elements with links to pointer and make the elements visible.
		for( var i = 0, j = DL.ID_LINKS.length; i < j; i++ ) {
			//document.getElementById( DL.ID_LINKS[ i ] ).style.display   = "inline";
			document.getElementById( DL.ID_LINKS[ i ] ).style.cursor    = "pointer";
		}

		// Set the cursor style for the 3 links with icon to a help sign.
		document.getElementById( "dl_hlp_img"	    ).style.cursor  = "help";
		document.getElementById( "dl_hlp"	    ).style.cursor  = "help";
		document.getElementById( "dl_chk_img"	    ).style.cursor  = "help";
		document.getElementById( "dl_chk"	    ).style.cursor  = "help";
		document.getElementById( "dl_rpt_img"	    ).style.cursor  = "help";
		document.getElementById( "dl_rpt"	    ).style.cursor  = "help";

		// Make the sub-box and therefore all elements visible.
		document.getElementById( "sub_box"	    ).style.display = "block";
	}

	return;
}

/*
 * Get platform of browser
 * @param:  None
 * @return: None
 */
DL.getPlatform = function() {
	// For more help or data see: "http://www.useragentstring.com".

	var av, os, ua, ve = "";

	if( navigator.appVersion ) {
		av		= navigator.appVersion.toLowerCase();	// Get the application version in lower case.
	}
	if( navigator.platform ) {
		os		= navigator.platform.toLowerCase();	// Get the platform string in lower case.
	}
	if( navigator.userAgent ) {
		ua		= navigator.userAgent.toLowerCase();	// Get the user agent string in lower case.
	}
	if( navigator.vendor ) {
		ve		= navigator.vendor.toLowerCase();	// Get the vendor string in lower case.
	}

	DL.UI_PLATFORM		= "";					// Delete previously set string.
	DL.UI_PLATFORM_NO_SUP	= "";					// Delete previously set string.
	DL.PLATFORM		= "";					// Delete previously set string.
	DL.EXTENSION		= "";					// Delete previously set string.

	// Add ECMA262-5 Array methods if not supported natively.
	// To workaround that MSIE 8 and older do not support this function.
	if( !( 'indexOf' in Array.prototype ) ) {
		Array.prototype.indexOf= function( find, i ) {		// 'i' is an optional parameter.
			if( i === undefined ) {
				i = 0;
			}
			if( i < 0 ) {
				i+= this.length;
			}
			if( i < 0 ) {
				i = 0;
			}
			for( var n = this.length; i < n; i++ ) {
				if( i in this && this[ i ] === find ) {
					return i;
				}
			}
			return -1;
		};
	}

	// If the browser's user agent string is set with something, try to recognize its content.
	if( ua !== "" ) {
		// Recognized but *not supported* platforms/OS, set $DL.UI_PLATFORM_NO_SUP to show it to the user.

		// Mobile devices.
		if( ve ) {
		    if( ua.indexOf( "android"		) !== -1 )
			if( ua.indexOf( "nexus"		) !== -1 &&
			    ve.indexOf( "google"	) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Google Nexus";
		}

		if( ua.indexOf( "android"		) !== -1 ) {
		    if( ua.indexOf( "mobile"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Devices (Android)";
		}

		if( os.indexOf( "arm"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Devices (ARM processor)";
		if( ua.indexOf( "blackberry"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Blackberry Smartphones";
		if( ua.indexOf( "brew"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Smartphones (BREW)";
		if( ua.indexOf( "ce.net"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (Windows CE)";
		if( ua.indexOf( "galaxy"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Samsung Galaxy";
		if( ua.indexOf( "hiptop"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Smartphones (Hiptop)";
		if( ua.indexOf( "htc"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "HTC Mobile Devices";
		if( ua.indexOf( "ipad"			) !== -1 ||
		    ua.indexOf( "iphone"		) !== -1 ||
		    ua.indexOf( "ipod"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Apple iPhone/iPad/iPod";
		if( ua.indexOf( "kindle"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Amazon Kindle";
		if( ua.indexOf( "lg"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "LG Mobile Devices";
		if( ua.indexOf( "nokia"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (Nokia)";
		if( ua.indexOf( "palm"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (Palm OS)";
		if( ua.indexOf( "pike"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (Pike)";
		if( ua.indexOf( "s60"	        	) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (S60)";
		if( ua.indexOf( "sonyericsson"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Sony/Ericsson Mobile Devices";
		if( ua.indexOf( "symbian"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (Symbian OS)";
		if( ua.indexOf( "symbos"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (Symbian OS)";
		if( ua.indexOf( "webos"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (Palm webOS)";
		if( ua.indexOf( "widerweb"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mobile Phones (WiderWeb)";
		if( os.indexOf( "win"			) !== -1 ||
		    os.indexOf( "windows"		) !== -1 ) {
			if( ua.indexOf( "mobile"	) !== -1 ||
			    ua.indexOf( "phone"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Smartphones (Windows Phone)";
		}

		// Other platforms.
		if( os.indexOf( "aix"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "IBM AIX";
		if( os.indexOf( "alphaserver"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "AlphaServer";
		if( os.indexOf( "amiga"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "AmigaOS";
		if( os.indexOf( "darwin"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Darwin";
		if( os.indexOf( "dragonfly"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "DragonFly BSD";
		if( os.indexOf( "freebsd"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "FreeBSD (PKG)";
		if( os.indexOf( "irix"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "IRIX";
		if( os.indexOf( "netbsd"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "NetBSD";
		if( ua.indexOf( "nintendo"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Nintendo Game Console";
		if( os.indexOf( "openbsd"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "OpenBSD";
		if( os.indexOf( "os/2"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "OS/2";
		if( os.indexOf( "pcbsd"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "PC-BSD";
		if( ua.indexOf( "playstation"		) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Sony Playstation";
		if( ua.indexOf( "psp"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Sony Playstation Portable";
		if( os.indexOf( "qnx"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "QNX";
		if( os.indexOf( "vms"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "OpenVMS";
		if( ua.indexOf( "wii"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Nintendo Wii Game Console";
		if( os.indexOf( "x11"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "unknown OS (X11 support)";

		// Legacy, no longer supported platforms.
		if( ua.indexOf( "power_pc"		) !== -1 ||
		    ua.indexOf( "ppc"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Mac OS PPC (DMG)";
		if( ua.indexOf( "sun4u"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Solaris SPARC (PKG)";
		if( os.indexOf( "sunos"			) !== -1 )	DL.UI_PLATFORM_NO_SUP	= "Solaris x86 (PKG)";

		// If $DL.UI_PLATFORM_NO_SUP is already filled, something was recognized and no more work is needed.
		if( DL.UI_PLATFORM_NO_SUP !== "" ) {
			ERROR = true;
			return DL.UI_PLATFORM_NO_SUP;
		}

		// Recognized and *supported* platforms/OS, set $DL.UI_PLATFORM to show it to the user.

		// Windows?
		if( os.indexOf( "win"			) !== -1 ||
		    os.indexOf( "windows"		) !== -1 ) {	DL.UI_PLATFORM		= "Windows (EXE)";
									DL.PLATFORM		= "win32";
									DL.EXTENSION		= ".exe";
		}

		// Linux: x86 or x86-64, DEB or RPM?
		if( os.indexOf( "linux"			) !== -1 ) {
			// 32-bit: DEB or RPM?
			if( os.indexOf( "x86"		) !== -1 ||
			    os.indexOf( "i686"		) !== -1 ||
			    os.indexOf( "i586"		) !== -1 ||
			    os.indexOf( "i486"		) !== -1 ||
			    os.indexOf( "i386"		) !== -1 ||
			    av.indexOf( "x86"		) !== -1 ||
			    av.indexOf( "i686"		) !== -1 ||
			    av.indexOf( "i586"		) !== -1 ||
			    av.indexOf( "i486"		) !== -1 ||
			    av.indexOf( "i386"		) !== -1 ) {	DL.UI_PLATFORM		= "Linux 32-bit (x86) (RPM)";
									DL.PLATFORM		= "lnx32r";
									DL.EXTENSION		= ".tar.gz";
			     if( ua.indexOf( "debian"	 ) !== -1 ||
				 ua.indexOf( "iceweasel" ) !== -1 ||
				 ua.indexOf( "ubuntu"	 ) !== -1 ) {	DL.UI_PLATFORM		= "Linux Debian 32-bit (x86) (DEB)";
									DL.PLATFORM		= "lnx32d";
									DL.EXTENSION		= ".tar.gz";
			     }
			}

			// 64-bit: DEB or RPM?
			if( os.indexOf( "_64"		) !== -1 ||
			    os.indexOf( "-64"		) !== -1 ||
			    os.indexOf( "x64"		) !== -1 ||
			    os.indexOf( "amd64"		) !== -1 ||
			    av.indexOf( "_64"		) !== -1 ||
			    av.indexOf( "-64"		) !== -1 ||
			    av.indexOf( "x64"		) !== -1 ||
			    av.indexOf( "amd64"		) !== -1 ) {	DL.UI_PLATFORM		= "Linux 64-bit (x86-64) (RPM)";
									DL.PLATFORM		= "lnx64r";
									DL.EXTENSION		= ".tar.gz";
			     if( ua.indexOf( "debian"	 ) !== -1 ||
				 ua.indexOf( "iceweasel" ) !== -1 ||
				 ua.indexOf( "ubuntu"	 ) !== -1 ) {	DL.UI_PLATFORM		= "Linux Debian 64-bit (x86-64) (DEB)";
									DL.PLATFORM		= "lnx64d";
									DL.EXTENSION		= ".tar.gz";
			     }
			}
		}

		// Mac OS X?
		if( os.indexOf( "mac"			) !== -1 ) {	DL.UI_PLATFORM		= "OS X (version >= 10.7) (DMG)";
									DL.PLATFORM		= "mac64";
									DL.EXTENSION		= ".dmg";

			// OS X: 10.6 or older?
			if( ua.indexOf( " 10.6"		) !== -1 ||
			    ua.indexOf( " 10_6"		) !== -1 ||
			    ua.indexOf( " 10.5"		) !== -1 ||
			    ua.indexOf( " 10_5"		) !== -1 ||
			    ua.indexOf( " 10.4"		) !== -1 ||
			    ua.indexOf( " 10_4"		) !== -1 ||
			    ua.indexOf( " 10.3"		) !== -1 ||
			    ua.indexOf( " 10_3"		) !== -1 ) {	DL.UI_PLATFORM		= "OS X (version <= 10.6) (DMG)";
									DL.PLATFORM		= "mac32";
			}

			// OS X: 10.7 or newer?
			if( ua.indexOf( " 10.12"	) !== -1 ||
			    ua.indexOf( " 10_12"	) !== -1 ||
			    ua.indexOf( " 10.11"	) !== -1 ||
			    ua.indexOf( " 10_11"	) !== -1 ||
			    ua.indexOf( " 10.10"	) !== -1 ||
			    ua.indexOf( " 10_10"	) !== -1 ||
			    ua.indexOf( " 10.9"		) !== -1 ||
			    ua.indexOf( " 10_9"		) !== -1 ||
			    ua.indexOf( " 10.8"		) !== -1 ||
			    ua.indexOf( " 10_8"		) !== -1 ||
			    ua.indexOf( " 10.7"		) !== -1 ||
			    ua.indexOf( " 10_7"		) !== -1 ) {	DL.UI_PLATFORM		= "OS X (version >= 10.7) (DMG)";
									DL.PLATFORM		= "mac64";
			}
		} 
	} 

	// If nothing was recognized until now, set $DL.UI_PLATFORM_NO_SUP to show it to the user.
	if( DL.UI_PLATFORM === "" ) {
		DL.UI_PLATFORM_NO_SUP = l10n.dl_unknown_platform_text;
		DL.ERROR	      = true;
	}

	return;
}

/*
 * Get positions of platform in release matrix
 * @param:  None
 * @return: None
 */
DL.getReleaseMatrixPosition = function() {
	// Depending on $PLATFORM, assign the platform position from the release matrix.

	switch( DL.PLATFORM ) {
		case "lnx64d":
			DL.RELEASE_PLATFORM_POS_FULL	= 1;
			DL.RELEASE_PLATFORM_POS_LP	= 2;
			DL.PLATFORM_FULL		= "Linux_x86-64_install-deb";
			DL.PLATFORM_LP			= "Linux_x86-64_langpack-deb";
			break;
		case "lnx64r":
			DL.RELEASE_PLATFORM_POS_FULL	= 3;
			DL.RELEASE_PLATFORM_POS_LP	= 4;
			DL.PLATFORM_FULL		= "Linux_x86-64_install-rpm";
			DL.PLATFORM_LP			= "Linux_x86-64_langpack-rpm";
			break;
		case "lnx32d":
			DL.RELEASE_PLATFORM_POS_FULL	= 5;
			DL.RELEASE_PLATFORM_POS_LP	= 6;
			DL.PLATFORM_FULL		= "Linux_x86_install-deb";
			DL.PLATFORM_LP			= "Linux_x86_langpack-deb";
			break;
		case "lnx32r":
			DL.RELEASE_PLATFORM_POS_FULL	= 7;
			DL.RELEASE_PLATFORM_POS_LP	= 8;
			DL.PLATFORM_FULL		= "Linux_x86_install-rpm";
			DL.PLATFORM_LP			= "Linux_x86_langpack-rpm";
			break;
		case "mac64":
			DL.RELEASE_PLATFORM_POS_FULL	= 9;
			DL.RELEASE_PLATFORM_POS_LP	= 10;
			DL.PLATFORM_FULL		= "MacOS_x86-64_install";
			DL.PLATFORM_LP			= "MacOS_x86-64_langpack";
			break;
		case "mac32":
			DL.RELEASE_PLATFORM_POS_FULL	= 9;
			DL.RELEASE_PLATFORM_POS_LP	= 10;
			DL.PLATFORM_FULL		= "MacOS_x86_install";
			DL.PLATFORM_LP			= "MacOS_x86_langpack";
			break;
		case "win32":
			DL.RELEASE_PLATFORM_POS_FULL	= 11;
			DL.RELEASE_PLATFORM_POS_LP	= 12;
			DL.PLATFORM_FULL		= "Win_x86_install";
			DL.PLATFORM_LP			= "Win_x86_langpack";
			break;
		default:
			DL.RELEASE_PLATFORM_POS_FULL	= -1;
			DL.RELEASE_PLATFORM_POS_LP	= -1;
			DL.ERROR			= true;
	}

	return;
}

/*
 * Get file name for download file
 * @param:  version - The version to use to get the file data
 * @return: None
 */
DL.getFileData = function() {
	// Depending on $ver, a different release matrix has to be used to assemble the download filenames.

	// Generate variable name: string + version number without dots (e.g., "413" instead of "4.1.3").
	var release_matrix_version = "release_matrix_" + DL.VERSION_SEL_RAW;

	// Assign all values from the release matrix of language and platform.
	DL.RELEASE_PLATFORM	= DL[ release_matrix_version ][ DL.LANG_ISO ][ DL.RELEASE_PLATFORM_POS_FULL ];

	// Assemble filename: Product name + version + platform as URL part + language ISO + file extension.
	DL.FILENAME_FULL	= "Apache_OpenOffice_" + DL.VERSION_SEL + "_" + DL.PLATFORM_FULL + "_" + DL.LANG_ISO + DL.EXTENSION;
	DL.FILENAME_LP		= "Apache_OpenOffice_" + DL.VERSION_SEL + "_" + DL.PLATFORM_LP   + "_" + DL.LANG_ISO + DL.EXTENSION;

	// Assign the file size (column 2) from the release matrix of language and platform.
	DL.FILESIZE_FULL	= DL[ release_matrix_version ][ DL.LANG_ISO ][ DL.RELEASE_PLATFORM_POS_FULL ][ 1 ];
	DL.FILESIZE_LP		= DL[ release_matrix_version ][ DL.LANG_ISO ][ DL.RELEASE_PLATFORM_POS_LP   ][ 1 ];

	// Assign all values from the release data.
	DL.REL_TEXT		= l10n.dl_rel_info_milestone_text	 + DL[ release_matrix_version ][ "src" ][ 1 ][ 0 ]
				+ " | " + l10n.dl_rel_info_buildid_text	 + DL[ release_matrix_version ][ "src" ][ 1 ][ 1 ]
				+ " | " + l10n.dl_rel_info_svn_text	 + DL[ release_matrix_version ][ "src" ][ 1 ][ 2 ]
				+ " | " + l10n.dl_rel_info_rel_date_text + DL[ release_matrix_version ][ "src" ][ 1 ][ 3 ];

	// Assign the link for release notes, depending on the version.
	// Generate variable name: string + version number without dots (e.g., "413" instead of "4.1.3").
	DL.REL_NOTES = l10n[ "dl_rel_notes_aoo" + DL.VERSION_SEL_RAW + "_link" ];

	return;
}

/*
 * Set document.location to start the download
 * @param:  itemid, uri - The ID of the colored box and the URI that should be opened
 * @return: None
 */
function openItem( itemid, uri ) {
//	var thisDocument  = document.getElementById( "downloadextendedtext" );
//	var thisDocument  = document.getElementById( itemid );
	document.location = uri;
}

/*
 * Output values of variables for debugging
 * @param:  location - The location where the debug utput should take place
 * @return: None
 */
DL.debug = function( location ) {
	// Depending on the current position in the code, show the values for the variables as alert box.
	// If the alert box is too large, just comment out the lines that are not needed at the moment.
	// Usage:
	// Call the function in the code position you want to debug.
	// Example:
	// DL.debug( "name the exact code position");

	if( location === "" ) {
		location = "No location named!";
	}

	alert( location											+ "\n"
	+ "RELEASE_MODE: "			+ "\t\t\t\t\t\t"	+ DL.RELEASE_MODE		+ "\n"
	+ "NL_LANG: "				+ "\t\t\t\t\t\t\t"	+ DL.NL_LANG			+ "\n"
	+ "LANG_ISO: "				+ "\t\t\t\t\t\t"	+ DL.LANG_ISO			+ "\n"
	+ "LANG_SEL: "				+ "\t\t\t\t\t\t"	+ DL.LANG_SEL			+ "\n"
	+ "UI_PLATFORM: "			+ "\t\t\t\t\t\t"	+ DL.UI_PLATFORM		+ "\n"
	+ "UI_PLATFORM_NO_SUP: "		+ "\t\t\t\t"		+ DL.UI_PLATFORM_NO_SUP		+ "\n"
	+ "PLATFORM: "				+ "\t\t\t\t\t\t"	+ DL.PLATFORM			+ "\n"
	+ "PLATFORM_FULL: "			+ "\t\t\t\t\t"		+ DL.PLATFORM_FULL		+ "\n"
	+ "PLATFORM_LP: "			+ "\t\t\t\t\t\t"	+ DL.PLATFORM_LP		+ "\n"
	+ "PLATFORM_SEL: "			+ "\t\t\t\t\t\t"	+ DL.PLATFORM_SEL		+ "\n"
	+ "RELEASE_PLATFORM_POS_FULL: "		+ "\t\t\t"		+ DL.RELEASE_PLATFORM_POS_FULL	+ "\n"
	+ "RELEASE_PLATFORM_POS_LP: "		+ "\t\t\t"		+ DL.RELEASE_PLATFORM_POS_LP	+ "\n"
	+ "RELEASE_PLATFORM: "			+ "\t\t\t\t\t"		+ DL.RELEASE_PLATFORM		+ "\n"
	+ "RELEASE_LANG: "			+ "\t\t\t\t\t\t"	+ DL.RELEASE_LANG		+ "\n"
	+ "REL_TEXT: "				+ "\t\t\t\t\t\t\t"	+ DL.REL_TEXT			+ "\n"
	+ "REL_NOTES: "				+ "\t\t\t\t\t\t"	+ DL.REL_NOTES			+ "\n"
	+ "VERSION_SEL: "			+ "\t\t\t\t\t\t"	+ DL.VERSION_SEL		+ "\n"
	+ "VERSION_SEL_RAW: "			+ "\t\t\t\t\t"		+ DL.VERSION_SEL_RAW		+ "\n"
	+ "FILENAME_FULL: "			+ "\t\t\t\t\t"		+ DL.FILENAME_FULL		+ "\n"
	+ "FILENAME_LP: "			+ "\t\t\t\t\t\t"	+ DL.FILENAME_LP		+ "\n"
	+ "FILESIZE_FULL: "			+ "\t\t\t\t\t\t"	+ DL.FILESIZE_FULL		+ "\n"
	+ "FILESIZE_LP: "			+ "\t\t\t\t\t\t"	+ DL.FILESIZE_LP		+ "\n"
	+ "EXTENSION: "				+ "\t\t\t\t\t\t"	+ DL.EXTENSION			+ "\n"
	+ "INSTALL_EXTENSION: "			+ "\t\t\t\t\t\t"	+ DL.INSTALL_EXTENSION		+ "\n"
	+ "LINK_FULL: "				+ "\t\t\t\t\t\t"	+ DL.LINK_FULL			+ "\n"
	+ "LINK_LP: "				+ "\t\t\t\t\t\t\t"	+ DL.LINK_LP			+ "\n"
	+ "LINK_CHK_ASC_FULL: "			+ "\t\t\t\t\t"		+ DL.LINK_CHK_ASC_FULL		+ "\n"
	+ "LINK_CHK_SHA256_FULL: "		+ "\t\t\t\t"		+ DL.LINK_CHK_SHA256_FULL	+ "\n"
	+ "LINK_CHK_SHA512_FULL: "		+ "\t\t\t\t"		+ DL.LINK_CHK_SHA512_FULL	+ "\n"
	+ "LINK_CHK_MD5_FULL: "			+ "\t\t\t\t\t"		+ DL.LINK_CHK_MD5_FULL		+ "\n"
	+ "LINK_CHK_ASC_LP: "			+ "\t\t\t\t\t"		+ DL.LINK_CHK_ASC_LP		+ "\n"
	+ "LINK_CHK_SHA256_LP: "		+ "\t\t\t\t"		+ DL.LINK_CHK_SHA256_LP		+ "\n"
	+ "LINK_CHK_SHA512_LP: "		+ "\t\t\t\t"		+ DL.LINK_CHK_SHA512_LP		+ "\n"
	+ "LINK_CHK_MD5_LP: "			+ "\t\t\t\t\t"		+ DL.LINK_CHK_MD5_LP		+ "\n"
	+ "SHOW_SUB_BOX: "			+ "\t\t\t\t\t"		+ DL.SHOW_SUB_BOX		+ "\n"
	+ "ERROR: "				+ "\t\t\t\t\t\t\t"	+ DL.ERROR			+ "\n" );

	return;
}




/* This file is to maintain text information that can be used on the download webpage via JavaScript when
 * including this file.
 *
 * Instead of hard coded text in the green box please use these variables and translate it to your favorite language.
 *
 * Wrong:   "Download Apache OpenOffice"
 * Correct: l10n.dl_green_box_headline_text
 */



// Object that contains all following variables.
var l10n = new Object();

// The following variables are used in the "index.html" file:

// Set a specific language ISO code to force to assemble a download link with a certain language.
DL.NL_LANG					= "";

// General:
l10n.dl_headline_text				= "Apache OpenOffice Download";

// Download: Strings in the green box (used in "index.html").
l10n.dl_green_box_headline_text			= "Download Apache OpenOffice";
l10n.dl_green_box_headline_title		= "Download Apache OpenOffice for your favorite operating system, language and version";
l10n.dl_green_box_subtext1_text			= "Hosted by SourceForge.net - A trusted website";
l10n.dl_green_box_subtext1_title		= "Apache OpenOffice binary files are hosted by SourceForge.net - A trusted website";
l10n.dl_green_box_subtext2_text			= "Select your favorite operating system, language and version";
l10n.dl_green_box_subtext2_title		= "Select your favorite operating system, language and version";
l10n.dl_green_box_selectbox_os_title		= "Select your favorite operating system";
l10n.dl_green_box_selectbox_lang_title		= "Select your favorite language";
l10n.dl_green_box_selectbox_ver_title		= "Select your favorite release version";

// The strings that will be shown in the OS, language and version drop-down select boxes.
// You must leave at least one single empty string (see the comment lines below the 3 following variables)!
/* l10n.dl_green_box_select_box_os_values	= [ "" ]; */
l10n.dl_green_box_select_box_os_values		= [ "" ];

/* l10n.dl_green_box_select_box_language_values	= [ "" ]; */
l10n.dl_green_box_select_box_language_values	= [ "" ];

/* l10n.dl_green_box_select_box_lang_values_custom = [ "" ]; */
						    // Value	Visible text				Tool tip
l10n.dl_green_box_select_box_lang_values_custom = [ "ast",	"Asturian",				"Asturianu",
						    "eu",	"Basque",				"Euskara",
						    "bg",	"Bulgarian",				"Ð±ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸ ÐµÐ·Ð¸Ðº",
						    "ca",	"Catalan",				"CatalÃ ",
						    "ca-XV",	"Catalan [Valencia AVL]",		"ValÃ¨ncia (AVL)",
						    "ca-XR",	"Catalan [Valencia RACV]",		"ValÃ¨ncia (RACV)",
						    "zh-CN",	"Chinese [simplified]",			"ç®€ä½“ä¸­æ–‡",
						    "zh-TW",	"Chinese [traditional]",		"æ­£é«”ä¸­æ–‡",
						    "cs",	"Czech",				"ÄŒeÅ¡tina",
						    "da",	"Danish",				"Dansk",
						    "nl",	"Dutch",				"Nederlands",
						    "en-GB",	"English [British]",			"English [British]",
						    "en-US",	"English [US]",				"English [US]",
						    "fi",	"Finnish",				"Suomi",
						    "fr",	"French",				"FranÃ§ais",
						    "gl",	"Galician",				"Galego",
						    "de",	"German",				"Deutsch",
						    "el",	"Greek",				"ÎµÎ»Î»Î·Î½Î¹ÎºÎ¬",
						    "he",	"Hebrew",				"×¢×‘×¨×™×ª",
						    "hi",	"Hindi",				"à¤¹à¤¿à¤¨à¥à¤¦à¥€",
						    "hu",	"Hungarian",				"Magyar",
						    "it",	"Italian",				"Italiano",
						    "ja",	"Japanese",				"æ—¥æœ¬èªž",
						    "km",	"Khmer",				"áž—áž¶ážŸáž¶ážáŸ’áž˜áŸ‚ážš",
						    "ko",	"Korean",				"í•œêµ­ì–´",
						    "lt",	"Lithuanian",				"LietuviÅ³",
						    "nb",	"Norwegian [Bokmal]",			"Norsk [BokmÃ¥l]",
						    "pl",	"Polish",				"Polski",
						    "pt-BR",	"Portuguese [Brazilian]",		"PortuguÃªs [do Brasil]",
						    "pt",	"Portuguese [European]",		"PortuguÃªs [Europeu]",
						    "ru",	"Russian",				"Ð ÑƒÑÑÐºÐ¸Ð¹",
						    "gd",	"Scottish [Gaelic]",			"GÃ idhlig",
						    "sr",	"Serbian [Cyrillic]",			"CÑ€Ð¿ÑÐºÐ¸ [Ñ›Ð¸Ñ€Ð¸Ð»Ð¸Ñ†Ð¾Ð¼]",
						    "sk",	"Slovak",				"SlovenskÃ½ jazyk [slovenÄina]",
						    "sl",	"Slovenian",				"Slovenski jezik [slovenÅ¡Äina]",
						    "es",	"Spanish",				"EspaÃ±ol",
						    "sv",	"Swedish",				"Svenska",
						    "ta",	"Tamil",				"à®¤à®®à®¿à®´à¯",
						    "th",	"Thai",					"à¸ à¸²à¸©à¸²à¹„à¸—à¸¢",
						    "tr",	"Turkish",				"TÃ¼rkÃ§e",
						    "vi",	"Vietnamese",				"Tiáº¿ng Viá»‡t" ];

/* l10n.dl_green_box_select_box_version_values	= [ "" ]; */
l10n.dl_green_box_select_box_version_values	= [ "" ];

// Download: Strings in the sub-green box (used in "index.html").
// Not defined for now.

// Download: Strings in the yellow box (used in "index.html").
// Not defined for now.

// Download: Strings in the sub-yellow box (used in "index.html").
// Not defined for now.

// Get developers: Strings in the orange box (used in "index.html").
l10n.dl_getdev_orange_box_headline_text		= "Help Needed";
l10n.dl_getdev_orange_box_headline_title	= "The Apache OpenOffice project seeks developers to take part in expanding its activities";
l10n.dl_getdev_orange_box_text_text		= "Are you a software developer with C++ skills? Do you have expertise in building software? Are you an experienced lead technical writer? Are you proficient in English? Do you like contributing to open source projects? Come and join us in helping Apache OpenOffice to thrive.";
l10n.dl_getdev_orange_box_text_title		= "The Apache OpenOffice project seeks developers to take part in expanding its activities";
l10n.dl_getdev_orange_box_text_href		= "https://openoffice.apache.org/get-involved.html";

// Share: Strings in the light-blue box (used in "index.html").
l10n.dl_share_light_blue_box_headline_text	= "Help Spread the Word";
l10n.dl_share_light_blue_box_headline_title	= "Help spread the word and tell your friends about Apache OpenOffice";
l10n.dl_share_light_blue_box_text_text		= "Please tell your friends about Apache OpenOffice:";
l10n.dl_share_light_blue_box_text_title		= "Help spread the word and tell your friends about Apache OpenOffice";
l10n.dl_share_light_blue_box_blog_text		= "Official Blog";
l10n.dl_share_light_blue_box_blog_title		= "Weblog of OpenOffice";
l10n.dl_share_light_blue_box_blog_src		= "/images/logo-rss-32.png";
l10n.dl_share_light_blue_box_blog_alt		= "Weblog of OpenOffice";
l10n.dl_share_light_blue_box_facebook_text	= "Facebook";
l10n.dl_share_light_blue_box_facebook_title	= "Please tell your friends about Apache OpenOffice via Facebook";
l10n.dl_share_light_blue_box_facebook_src	= "/images/logo-facebook-32.png";
l10n.dl_share_light_blue_box_facebook_alt	= "Share on Facebook";
l10n.dl_share_light_blue_box_twitter_text	= "Twitter";
l10n.dl_share_light_blue_box_twitter_title	= "Please tell your friends about Apache OpenOffice via Twitter";
l10n.dl_share_light_blue_box_twitter_src	= "/images/logo-twitter-32.png";
l10n.dl_share_light_blue_box_twitter_alt	= "Share on Twitter";
l10n.dl_share_light_blue_box_googleplus_text	= "Google+";
l10n.dl_share_light_blue_box_googleplus_title	= "Please tell your friends about Apache OpenOffice via Google+";
l10n.dl_share_light_blue_box_googleplus_src	= "/images/logo-googleplus-32.png";
l10n.dl_share_light_blue_box_googleplus_alt	= "Share on Google+";

// Extensions: Strings in the blue box (top) (used in "index.html").
l10n.dl_ext_blue_box_headline_text		= "Get Apache OpenOffice Extensions and Dictionaries";
l10n.dl_ext_blue_box_headline_title		= "Choose from a wide range of additional and individual functionality";
l10n.dl_ext_blue_box_text_text			= "Extend your Apache OpenOffice functionality with a large and growing library of extensions and dictionaries from other users.";
l10n.dl_ext_blue_box_text_title			= "Choose from a wide range of additional and individual functionality";
l10n.dl_ext_blue_box_text_href			= "https://extensions.openoffice.org/";

// Templates: Strings in the blue box (bottom) (used in "index.html").
l10n.dl_tlp_blue_box_headline_text		= "Get Apache OpenOffice Templates";
l10n.dl_tlp_blue_box_headline_title		= "Choose from a wide range of additional and individual documents";
l10n.dl_tlp_blue_box_text_text			= "Extend your Apache OpenOffice creativity with a large and growing library of templates from other users.";
l10n.dl_tlp_blue_box_text_title			= "Choose from a wide range of additional and individual documents";
l10n.dl_tlp_blue_box_text_href			= "https://templates.openoffice.org/";

// Strings in the navigation bar (used in "index.html").
// Release Information
l10n.dl_nav_headline_1_text			= "Release Information";
l10n.dl_nav_sysreq_text				= "System Requirements";
l10n.dl_nav_sysreq_title			= "HDD: ~300MB free - Memory: &gt;128MB - Processor: &gt;500MHz - OS: Windows, macOS (OS&nbsp;X), Linux, Solaris, FreeBSD...";
l10n.dl_nav_sysreq_href				= "https://www.openoffice.org/dev_docs/source/sys_reqs_aoo41.html";
l10n.dl_nav_license_text			= "License";
l10n.dl_nav_license_title			= "Apache OpenOffice License";
l10n.dl_nav_license_href			= "https://www.openoffice.org/license.html";
l10n.dl_nav_source_text				= "Source";
l10n.dl_nav_source_title			= "For developers and power users: Get the source to build Apache OpenOffice from scratch";
l10n.dl_nav_source_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_build_text				= "Building Guide";
l10n.dl_nav_build_title				= "For developers and power users: HowTo guide to build Apache OpenOffice from scratch";
l10n.dl_nav_build_href				= "https://wiki.openoffice.org/wiki/Documentation/Building_Guide_AOO";
l10n.dl_nav_sdk_text				= "Software Development Kit (SDK)";
l10n.dl_nav_sdk_title				= "For developers: Software Development Kit";
l10n.dl_nav_sdk_href				= "https://openoffice.apache.org/downloads.html";
l10n.dl_nav_devbuilds_text			= "Development Builds";
l10n.dl_nav_devbuilds_title			= "For QA volunteers: Development Builds";
l10n.dl_nav_devbuilds_href			= "https://www.openoffice.org/download/devbuilds.html";

// Documentation
l10n.dl_nav_headline_2_text			= "Documentation";
l10n.dl_nav_schedule_text			= "Release Schedules";
l10n.dl_nav_schedule_title			= "When are new releases planned?";
l10n.dl_nav_schedule_href			= "https://cwiki.apache.org/confluence/display/OOOUSERS/Releases";
l10n.dl_nav_hist_schedule_text			= "Historic Release Schedule";
l10n.dl_nav_hist_schedule_title			= "When were old releases planned?";
l10n.dl_nav_hist_schedule_href			= "https://wiki.openoffice.org/wiki/Product_Release";
l10n.dl_nav_inst_guide_text			= "Installation Guides";
l10n.dl_nav_inst_guide_title			= "Instructions for installing Apache OpenOffice on Windows, macOS (OS&nbsp;X) and Linux";
l10n.dl_nav_inst_guide_href			= "https://www.openoffice.org/download/common/instructions.html";
l10n.dl_nav_user_guide_text			= "User Guides";
l10n.dl_nav_user_guide_title			= "Extensive user manuals for every day use";
l10n.dl_nav_user_guide_href			= "https://www.openoffice.org/documentation/index.html";
l10n.dl_nav_why_java_text			= "Java and Apache OpenOffice";
l10n.dl_nav_why_java_title			= "Explains why to use Java and what it is";
l10n.dl_nav_why_java_href			= "https://www.openoffice.org/download/common/java.html";
l10n.dl_nav_eol_text				= "End-Of-Life Information";
l10n.dl_nav_eol_title				= "Information about releases that have reached End-Of-Life status";
l10n.dl_nav_eol_href				= "https://www.openoffice.org/development/releases/eol.html";

// Additional Resources
l10n.dl_nav_headline_3_text			= "Additional Resources";
l10n.dl_nav_support_text			= "Support";
l10n.dl_nav_support_title			= "If the information above did not answer your question: Free and paid support!";
l10n.dl_nav_support_href			= "https://www.openoffice.org/support/index.html";
l10n.dl_nav_local_text				= "Localizations";
l10n.dl_nav_local_title				= "Information and support in your favorite language";
l10n.dl_nav_local_href				= "https://openoffice.apache.org/native-lang.html";
l10n.dl_nav_stat_text				= "Download Statistics";
l10n.dl_nav_stat_title				= "Download and other statistics";
l10n.dl_nav_stat_href				= "https://www.openoffice.org/stats/index.html";
l10n.dl_nav_mirrors1_text			= "Alternative download link #1";
l10n.dl_nav_mirrors1_title			= "Use SourceForge mirrors to download Apache OpenOffice";
l10n.dl_nav_mirrors1_href			= "https://sourceforge.net/projects/openofficeorg.mirror/files/";
l10n.dl_nav_mirrors2_text			= "Alternative download link #2";
l10n.dl_nav_mirrors2_title			= "Use Apache mirrors to download Apache OpenOffice";
l10n.dl_nav_mirrors2_href			= "https://www.apache.org/dyn/closer.lua/openoffice/";
l10n.dl_nav_porting_text			= "3rd party ports and distributions";
l10n.dl_nav_porting_title			= "Ports and distributions from 3rd party vendors";
l10n.dl_nav_porting_href			= "https://www.openoffice.org/porting/index.html";
l10n.dl_nav_archive_text			= "Archived and legacy releases";
l10n.dl_nav_archive_title			= "Download legacy and archived releases";
l10n.dl_nav_archive_href			= "https://www.openoffice.org/download/archive.html";

// List items in the navigation bar that are not used for now.
l10n.dl_nav_release_notes_text			= "Release Notes";
l10n.dl_nav_release_notes_title			= "What is new, what has been improved in Apache OpenOffice?";
l10n.dl_nav_release_notes_href			= "https://www.openoffice.org/development/releases/index.html";
l10n.dl_nav_checksum_text			= "Verify the downloaded file";
l10n.dl_nav_checksum_title			= "How to verify the downloaded file with signatures and hashes?";
l10n.dl_nav_checksum_href			= "https://www.openoffice.org/download/checksums.html";

// Strings for the logo graphics.
l10n.dl_img_sourceforge_title			= "SourceForge - Download, Develop and Publish Free Open Source Software";
l10n.dl_img_sourceforge_href			= "https://www.sourceforge.net/";
l10n.dl_img_sourceforge_src			= "/images/sourceforge.png";
l10n.dl_img_sourceforge_alt			= "SourceForge";
l10n.dl_img_w3c_title				= "W3C Markup Validation Service - Check the markup (HTML, XHTML, ...) of Web documents";
l10n.dl_img_w3c_href				= "https://validator.w3.org/check?uri=referer";
l10n.dl_img_w3c_src				= "/images/valid-xhtml10-blue.png";
l10n.dl_img_w3c_alt				= "W3C Validator";



// The following variables are used in the "download.js" file:

// Download: Strings in the green box (used in "download.js").
l10n.dl_full_link_text				= "Download for " + window.ui.os;
l10n.dl_full_link_title				= "Click to download: ";
l10n.dl_langpack_link_text			= "Download language pack";
l10n.dl_langpack_link_title			= "Click to download: ";
l10n.dl_rpm_vs_deb_title			= "RPM is used in:\nCentOS, Fedora, Mageia, Mandriva, MeeGo, openSUSE, Oracle Linux, PCLinuxOS, Red Hat Enterprise Linux, Sailfish OS, Scientific Linux, SUSE Linux Enterprise Server\n\nDEB is used in:\nDebian, Kanotix, Knoppix, Kubuntu, Linux Mint, Lubuntu, Ubuntu, Xubuntu";
l10n.dl_rpm_vs_deb_text				= "RPM vs. DEB = What to choose?";


l10n.dl_full_link_porting_text			= "Porting: Click to choose from 3rd party vendors";
l10n.dl_full_link_porting_title			= "Click to browse to the porting webpage and download from 3rd party vendors";
l10n.dl_full_link_archive_text			= "Archive: Click to choose from legacy releases";
l10n.dl_full_link_archive_title			= "Click to browse to the archive and download legacy releases";

// Download: Strings in the sub-green box (used in "download.js").
l10n.dl_rel_info_headline_text			= "Release: ";
l10n.dl_rel_info_milestone_text			= "Milestone ";
l10n.dl_rel_info_buildid_text			= "Build ID ";
l10n.dl_rel_info_svn_text			= "SVN "
l10n.dl_rel_info_rel_date_text			= "Released ";
l10n.dl_rel_notes_text				= "Release Notes";
l10n.dl_rel_notes_title				= "Release Notes for Apache OpenOffice ";

l10n.dl_headline_full_text			= "Full installation: ";
l10n.dl_headline_langpack_text			= "Language pack: ";
l10n.dl_filesize_text				= "File size ~ ";
l10n.dl_megabyte_text				= " MByte";
l10n.dl_checksum_headline_text			= "Signatures and hashes: ";
l10n.dl_checksum_keys_text			= "KEYS";
l10n.dl_checksum_keys_title			= "KEYS signature file";
l10n.dl_checksum_asc_text			= "ASC";
l10n.dl_checksum_asc_title			= "ASC signature for: ";
l10n.dl_checksum_md5_text			= "MD5";
l10n.dl_checksum_md5_title			= "MD5 hash for: ";
l10n.dl_checksum_sha256_text			= "SHA256";
l10n.dl_checksum_sha256_title			= "SHA256 hash for: ";
l10n.dl_checksum_sha512_text			= "SHA512";
l10n.dl_checksum_sha512_title			= "SHA512 hash for: ";

l10n.dl_help_img_title				= "What is the difference between full installation and language pack?";
l10n.dl_help_img_src				= "/download/cachedimages/help-information-icon.png";
l10n.dl_help_img_alt				= "Install info";
l10n.dl_help_text				= "What is a language pack?";
l10n.dl_help_title				= "What is the difference between full installation and language pack?";
l10n.dl_checksum_img_title			= "How to verify the downloaded file with checksums?";
l10n.dl_checksum_img_src			= "/download/cachedimages/help-information-icon.png";
l10n.dl_checksum_img_alt			= "Checksum verify";
l10n.dl_checksum_text				= "How to verify the download?";
l10n.dl_checksum_title				= "How to verify the downloaded file with checksums?";
l10n.dl_report_img_title			= "Broken download link? Click here to report.";
l10n.dl_report_img_src				= "/download/cachedimages/help-report-broken-link-icon.png";
l10n.dl_report_img_alt				= "Broken link";
l10n.dl_report_text				= "Report broken link";
l10n.dl_report_title				= "Broken download link? Click here to report.";

// Download: Strings for error text in the sub-red box (used in "download.js").
l10n.dl_full_link_error_text			= "No full installation available";
l10n.dl_full_link_error_title			= "Please select another language, platform or version.";
l10n.dl_langpack_link_error_text		= "No language pack available";
l10n.dl_langpack_link_error_title		= "Please select another language, platform or version.";

l10n.dl_error_problem_img_title			= "The selected download file is not available";
l10n.dl_error_problem_img_src			= "/download/cachedimages/exclamation-icon.png";
l10n.dl_error_problem_img_alt			= "Error text";
l10n.dl_error_problem_text			= "Problem: ";
l10n.dl_error_solution_text			= "Solution: ";
l10n.dl_error_aoo_text				= "Apache OpenOffice ";
l10n.dl_error_not_available_for_text		= " is not available for ";
l10n.dl_error_please_select_1_text		= "Please select version 4.0.1.";
l10n.dl_error_please_select_2_text		= "Please select version 4.1.0 or newer.";
l10n.dl_error_please_select_3_text		= "Please select a download for Windows, macOS (OS&nbsp;X) or Linux.";
l10n.dl_error_please_select_4_text		= "Please select another language or version.";

l10n.dl_unknown_platform_text			= "unknown operating system / platform";

// Download: Strings with customized error text in the sub-red box (used in "download.js").
// Can be used when the default text in the variables above cannot be translated correctly.
l10n.dl_error_custom_1_text			= "";
l10n.dl_error_custom_2_text			= "";
l10n.dl_error_custom_3_text			= "";
l10n.dl_error_custom_4_text			= "";



// The following variables are used in the "analyze.html" file:

// Analyze: Strings for the instruction text (used in "analyze.html").
l10n.dl_analyze_headline_text			= "How to report a broken download link?";
l10n.dl_analyze_instruction_select_text		= "<b>Select your favorites</b>: Operating system, language and version in the green box below.";
l10n.dl_analyze_instruction_verify_text		= "Verify that these options <b>still do not</b> lead to valid download links.";
l10n.dl_analyze_instruction_click_text		= "Click on the button below the green box: ";
l10n.dl_analyze_instruction_copy_text		= "Copy the selected table data into the clipboard: ";
l10n.dl_analyze_instruction_new_mail_text	= "Create a new mail.";
l10n.dl_analyze_instruction_problem_text	= "<b>Write a problem description</b> (what does not work and what do you expect).";
l10n.dl_analyze_instruction_details_text	= "Please also add <b>details about the used operating system</b>.";
l10n.dl_analyze_instruction_paste_text		= "Paste the copied data at the end of the mail.";
l10n.dl_analyze_instruction_only_download_text	= "Please <b>send the mail only in case of download problems</b> and not if you cannot install.";
l10n.dl_analyze_instruction_no_install_text	= "This webpage cannot help at all with installation problems.";
l10n.dl_analyze_instruction_send_mail_text	= "Finally, <b>send the mail</b> to the: ";
l10n.dl_analyze_instruction_mailing_list_text	= "Apache OpenOffice Development Mailing List";
l10n.dl_analyze_instruction_mailing_list_title	= "Send the report to the Apache OpenOffice developers mailing list";
l10n.dl_analyze_instruction_learn_more_text	= "Click here to learn more about what a mailing list is";
l10n.dl_analyze_instruction_learn_more_title	= "Learn more about what a mailing list is";
l10n.dl_analyze_instruction_answer_text		= "We will try to answer as soon as we get the mail and the problem analyzed.";
l10n.dl_analyze_instruction_thanks_text		= "Thank you for your report.";

// Analyze: Strings for the 3 buttons (used in "analyze.html").
l10n.dl_analyze_update_button_text		= "Click to update the table";
l10n.dl_analyze_update_button_title		= "Put the selected options as values into the table below";
l10n.dl_analyze_select_button_text		= "Click to select the table";
l10n.dl_analyze_select_button_title		= "Select all data in the table below";
l10n.dl_analyze_copy_button_text		= "Copy with [Ctrl]+[C] / [&#8984;]+[C]";
l10n.dl_analyze_copy_button_title		= "Copy the selected table data via [ Ctrl ] + [ C ] or [ &#8984; ] + [ C ] into the clipboard";

// Analyze: Strings for the table (used in "analyze.html").
l10n.dl_analyze_table_problem_text1		= "Problem description";
l10n.dl_analyze_table_problem_text2		= "Exchange this text to describe the problem <br /><br />(What does not work? What do you expect?)";
l10n.dl_analyze_table_browser_text		= "Browser variables";
l10n.dl_analyze_table_values_text		= "Values";
l10n.dl_analyze_table_yes_text			= "Yes";
l10n.dl_analyze_table_no_text			= "No";
l10n.dl_analyze_table_stable_release_text	= "Stable Release";
l10n.dl_analyze_table_javascript_text		= "JavaScript&nbsp;functions/variables";

// General: Links to webpage files that could be localized.
l10n.dl_rel_notes_aoo416_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.6+Release+Notes";
l10n.dl_rel_notes_aoo415_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.5+Release+Notes";
l10n.dl_rel_notes_aoo414_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.4+Release+Notes";
l10n.dl_rel_notes_aoo413_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.3+Release+Notes";
l10n.dl_rel_notes_aoo412_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.2+Release+Notes";
l10n.dl_rel_notes_aoo411_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1.1+Release+Notes";
l10n.dl_rel_notes_aoo410_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.1+Release+Notes";
l10n.dl_rel_notes_aoo401_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.0.1+Release+Notes";
l10n.dl_rel_notes_aoo400_link			= "https://cwiki.apache.org/confluence/display/OOOUSERS/AOO+4.0+Release+Notes";
l10n.dl_help_link				= "https://www.openoffice.org/download/full_vs_lp.html";
l10n.dl_checksum_link				= "https://www.openoffice.org/download/checksums.html";
l10n.dl_report_link				= "https://www.openoffice.org/download/analyze.html";
l10n.dl_porting_link				= "https://www.openoffice.org/porting/index.html";
l10n.dl_archive_link				= "https://www.openoffice.org/download/archive.html";
l10n.dl_aoo341_link				= "https://www.openoffice.org/download/archive.html";





/*
 * Functions to draw every single colored box as well as the navigation bar and logo section
 */

/*
 * Download box
 * Show the select boxes, both download text buttons, the sub-box and help icons and links
 * @param:  None
 * @return: None
 */
DL.createDownloadBox = function() {
    document.write( "<div class='first button green-sel' id='optionitem2'>"
      + "<div class='green-sel-icon'></div>"
  
      // Headline.
      + "<h2 title='" + l10n.dl_green_box_headline_title + "'>"
        + l10n.dl_green_box_headline_text
      + "</h2>"
  
      // Box text.
      + "<p title='" + l10n.dl_green_box_subtext1_title + "'>"
        + "(" + l10n.dl_green_box_subtext1_text + ")"
      + "</p>"
      + "<p title='" + l10n.dl_green_box_subtext2_title + "'>"
        + "<b>" + l10n.dl_green_box_subtext2_text + ":</b>"
      + "</p>"
  
      // Select drop-down boxes.
      + "<form name='download'>"
        + "<select class='sel-os' id='os' name='os' onchange='DL.getLinkSelection()'"
          + "title='" + l10n.dl_green_box_selectbox_os_title   + "'>"
        + "</select>"
        + "<select class='sel-language' id='language' name='language' onchange='DL.getLinkSelection()'"
          + "title='" + l10n.dl_green_box_selectbox_lang_title + "'>"
        + "</select>"
        + "<select class='sel-version' id='version' name='version' onchange='DL.getLinkSelection()'"
          + "title='" + l10n.dl_green_box_selectbox_ver_title  + "'>"
        + "</select>"
  
        // Linux packages text.
        + "<a id='dl_rpm_vs_deb' title='" + l10n.dl_rpm_vs_deb_title + "'>"
          + l10n.dl_rpm_vs_deb_text
        + "</a>"
  
        + "</form>"
  
      // Both download text buttons: First (left) for "full install", then (right) for "langpack".
      + "<div style='margin: 0px 0px -15px 3%;'>"
        + "<div class='btn_dl'>"
          + "<h3>"
            + "<a id='dl_f_link' target='_blank'></a>"
          + "</h3>"
        + "</div>"
  
        + "<a style='margin: 0px 0px 0px -1%; cursor: default;'></a>"
  
        + "<div class='btn_dl'>"
          + "<h3>"
            + "<a id='dl_lp_link' target='_blank'></a>"
          + "</h3>"
        + "</div>"
      + "</div>"
    + "<br /><br />"
    + "</div>"
  
     // Sub-box
     // Show release info, filesizes, checksum links and help links
    + "<div id='sub_box' class='button sub-green-sel'>"
      + "<div>" // The 3 lines of release info
  
        // Error text with hint.
        + "<img id='dl_err_img'	    style='margin: 5px 5px 18px 3%;' height='16' width='16' />"
        + "<p id='dl_err'		    style='text-decoration: none;'></p>"
        + "<p>"
  
          // Release info and notes.
          + "<a id='dl_rel_info'	    style='text-decoration: none;'></a>"
          + "<a id='dl_rel_notes'	    style='text-decoration: underline;' target='_blank'></a>"
          + "<br />"
  
          // Full installation: Filesize and checksums.
          + "<a id='dl_f_info'	    style='text-decoration: none;'></a>"
          + "<a id='dl_f_chk_keys'    style='text-decoration: underline;' target='_blank'></a>"
          + "<a id='space1'	    style='text-decoration: none;'></a>"
          + "<a id='dl_f_chk_asc'	    style='text-decoration: underline;' target='_blank'></a>"
          + "<a id='space2'	    style='text-decoration: none;'></a>"
          + "<a id='dl_f_chk_sha256'  style='text-decoration: underline;' target='_blank'></a>"
          + "<a id='space3'	    style='text-decoration: none;'></a>"
          + "<a id='dl_f_chk_sha512'  style='text-decoration: underline;' target='_blank'></a>"
          + "<a id='space4'	    style='text-decoration: none;'></a>"
          + "<a id='dl_f_chk_md5'	    style='text-decoration: underline;' target='_blank'></a>"
          + "<br />"
  
          // Langpack: Filesize and checksums.
          + "<a id='dl_lp_info'	    style='text-decoration: none;'></a>"
          + "<a id='dl_lp_chk_keys'   style='text-decoration: underline;' target='_blank'></a>"
          + "<a id='space5'	    style='text-decoration: none;'></a>"
          + "<a id='dl_lp_chk_asc'    style='text-decoration: underline;' target='_blank'></a>"
          + "<a id='space6'	    style='text-decoration: none;'></a>"
          + "<a id='dl_lp_chk_sha256' style='text-decoration: underline;' target='_blank'></a>"
          + "<a id='space7'	    style='text-decoration: none;'></a>"
          + "<a id='dl_lp_chk_sha512' style='text-decoration: underline;' target='_blank'></a>"
          + "<a id='space8'	    style='text-decoration: none;'></a>"
          + "<a id='dl_lp_chk_md5'    style='text-decoration: underline;' target='_blank'></a>"
          + "<br />"
        + "</p>"
      + "</div>"
  
      // Help items
      // Show the help icons and links
      + "<div>"
        + "<p>"
  
          // Help: What is a language pack?
          + "<img id='dl_hlp_img'	  style='padding: 5px 5px 0px 0px;' height='16' width='16' />"
          + "<a id='dl_hlp' target='_blank' onclick='DL.showWindow( this.href ); return false;'></a>"
  
          // Help: How to verify the download?
          + "<img id='dl_chk_img'	  style='padding: 5px 5px 0px 30px;' height='16' width='16' />"
          + "<a id='dl_chk' target='_blank'></a>"
  
          // Help: Report broken link.
          + "<img id='dl_rpt_img'	  style='padding: 5px 5px 0px 30px;' height='16' width='16' />"
          + "<a id='dl_rpt' target='_blank'></a>"
        + "</p>"
      + "</div>"
    + "</div>" );
    return;
  }
  
  /*
   * Get more developers box
   * Show the clickable text for the "Get Involved" webpage
   * @param:  None
   * @return: None
   */
  DL.createGetDevBox = function() {
    document.write( "<div class='orange button' id='optionitem5' "
      + "onclick='openItem(\"optionitem5\",\"" + l10n.dl_getdev_orange_box_text_href + "\"); return false;'>"
      // No icon in the right corner of the box.
      // + "<div class='<color>-icon'></div>"
  
      // Headline.
      + "<h2 title='" + l10n.dl_getdev_orange_box_headline_title + "'>"
        + l10n.dl_getdev_orange_box_headline_text
      + "</h2>"
  
      // Box text.
      + "<p style='margin-left: 5px; padding-bottom: 3%;'>"
        + "<a href='" + l10n.dl_getdev_orange_box_text_href + "' title='" + l10n.dl_getdev_orange_box_text_title + "'>"
          + l10n.dl_getdev_orange_box_text_text
        + "</a>"
      + "</p>"
    + "</div>" );
    return;
  }
  
  /*
   * Social network box
   * Show the clickable icons for the social networks
   * @param:  None
   * @return: None
   */
  DL.createShareBox = function() {
    document.write( "<div class='button lightblue' id='optionitem4'>"
      + "<div class='lightblue-icon'></div>"
  
      // Headline.
      + "<h2 title='" + l10n.dl_share_light_blue_box_headline_title + "'>"
        + l10n.dl_share_light_blue_box_headline_text
      + "</h2>"
  
      // Box text.
      + "<p id='ShareDownloadLinks'"
        + "title='" + l10n.dl_share_light_blue_box_text_title + "'>"
        + l10n.dl_share_light_blue_box_text_text
      + "</p>"
      + "<div class='icon_box'>"
  
        // Apache OpenOffice blog.
        + "<span onclick='javascript:share( \"apacheblog\" )'"
          + "title='" + l10n.dl_share_light_blue_box_blog_title + "'>"
          + "<img src='" + l10n.dl_share_light_blue_box_blog_src + "'"
          + "alt='" + l10n.dl_share_light_blue_box_blog_alt + "'/>"
          + "<a>" + l10n.dl_share_light_blue_box_blog_text + "</a>"
        + "</span>"
  
        // Facebook.
        + "<span onclick='javascript:share( \"facebook\" )'"
          + "title='" + l10n.dl_share_light_blue_box_facebook_title + "'>"
          + "<img src='" + l10n.dl_share_light_blue_box_facebook_src + "'"
          + "alt='" + l10n.dl_share_light_blue_box_facebook_alt + "' />"
          + "<a>" + l10n.dl_share_light_blue_box_facebook_text + "</a>"
        + "</span>"
  
        // Twitter.
        + "<span onclick='javascript:share( \"twitter\" )'"
          + "title='" + l10n.dl_share_light_blue_box_twitter_title + "'>"
          + "<img src='" + l10n.dl_share_light_blue_box_twitter_src + "'"
          + "alt='" + l10n.dl_share_light_blue_box_twitter_alt + "' />"
          + "<a>" + l10n.dl_share_light_blue_box_twitter_text + "</a>"
        + "</span>"
  
        // Google+.
        + "<span onclick='javascript:share( \"google+\" )'"
          + "title='" + l10n.dl_share_light_blue_box_googleplus_title + "'>"
          + "<img src='" + l10n.dl_share_light_blue_box_googleplus_src + "'"
          + "alt='" + l10n.dl_share_light_blue_box_googleplus_alt + "' />"
          + "<a>" + l10n.dl_share_light_blue_box_googleplus_text + "</a>"
        + "</span>"
      + "</div>"
    + "</div>" );
    return;
  }
  
  /*
   * Extensions and dictionaries
   * Show the clickable text to get extensions and dictionaries
   * @param:  None
   * @return: None
   */
  DL.createExtensionsBox = function() {
    document.write( "<div class='blue button' id='optionitem5' "
      + "onclick='openItem(\"optionitem5\",\"" + l10n.dl_ext_blue_box_text_href + "\"); return false;'>"
      + "<div class='blue-icon'></div>"
  
      // Headline.
      + "<h2 title='" + l10n.dl_ext_blue_box_headline_title + "'>"
        + l10n.dl_ext_blue_box_headline_text
      + "</h2>"
  
      // Box text.
      + "<p style='margin-left: 5px; padding-bottom: 3%;'>"
        + "<a href='" + l10n.dl_ext_blue_box_text_href + "' title='" + l10n.dl_ext_blue_box_text_title + "'>"
          + l10n.dl_ext_blue_box_text_text
        + "</a>"
      + "</p>"
    + "</div>" );
    return;
  }
  
  /*
   * Templates
   * Show the clickable text to get templates
   * @param:  None
   * @return: None
   */
  DL.createTemplatesBox = function() {
    document.write( "<div class='button blue' id='optionitem6' "
      + "onclick='openItem(\"optionitem6\",\"" + l10n.dl_tlp_blue_box_text_href + "\"); return false;'>"
      + "<div class='blue-icon'></div>"
  
      // Headline.
      + "<h2 title='" + l10n.dl_tlp_blue_box_headline_title + "'>"
        + l10n.dl_tlp_blue_box_headline_text
      + "</h2>"
  
      // Box text.
      + "<p style='margin-left: 5px; padding-bottom: 3%;'>"
        + "<a href='" + l10n.dl_tlp_blue_box_text_href + "' title='" + l10n.dl_tlp_blue_box_text_title + "'>"
          + l10n.dl_tlp_blue_box_text_text
        + "</a>"
      + "</p>"
    + "</div>" );
    return;
  }
  
  /*
   * Navigation bar
   * Show the navigation bar with 3 areas and their items
   * @param:  None
   * @return: None
   */
  DL.createNavigationBar = function() {
    document.write( "<div>"
  
      // Headline 1.
      + "<h3>" + l10n.dl_nav_headline_1_text + "</h3>"
  
      // List items.
      + "<ul>"
        + "<li>"
          + "<a href='" + l10n.dl_nav_sysreq_href + "'"
            + "title='" + l10n.dl_nav_sysreq_title + "'>" + l10n.dl_nav_sysreq_text
          + "</a>"
        + "</li>"
        + "<li>"
          + "<a href='" + l10n.dl_nav_license_href + "'"
            + "title='" + l10n.dl_nav_license_title + "'>" + l10n.dl_nav_license_text
          + "</a>"
        + "</li>"
        + "<li>"
          + "<a href='" + l10n.dl_nav_source_href + "'"
            + "title='" + l10n.dl_nav_source_title + "'>" + l10n.dl_nav_source_text
          + "</a>"
        + "</li>"
        + "<li>"
          + "<a href='" + l10n.dl_nav_build_href + "'"
            + "title='" + l10n.dl_nav_build_title + "'>" + l10n.dl_nav_build_text
          + "</a>"
        + "</li>"
        + "<li>"
          + "<a href='" + l10n.dl_nav_sdk_href + "'"
            + "title='" + l10n.dl_nav_sdk_title + "'>" + l10n.dl_nav_sdk_text
          + "</a>"
        + "</li>"
        + "<li>"
          + "<a href='" + l10n.dl_nav_devbuilds_href + "'"
            + "title='" + l10n.dl_nav_devbuilds_title + "'>" + l10n.dl_nav_devbuilds_text
          + "</a>"
        + "</li>"
      + "</ul>"
  
      // Headline 2.
      + "<h3>" + l10n.dl_nav_headline_2_text + "</h3>"
  
      // List items.
      + "<ul>"
        + "<li>"
          + "<a href='" + l10n.dl_nav_schedule_href + "'"
            + "title='" + l10n.dl_nav_schedule_title + "'>" + l10n.dl_nav_schedule_text
          + "</a>"
        + "</li>"
        + "<li>"
          + "<a href='" + l10n.dl_nav_hist_schedule_href + "'"
            + "title='" + l10n.dl_nav_hist_schedule_title + "'>" + l10n.dl_nav_hist_schedule_text
          + "</a>"
        + "</li>"
        + "<li>"
          + "<a href='" + l10n.dl_nav_inst_guide_href + "'"
            + "title='" + l10n.dl_nav_inst_guide_title + "'>" + l10n.dl_nav_inst_guide_text
          + "</a>"
        + "</li>"
        + "<li>"
          + "<a href='" + l10n.dl_nav_user_guide_href + "'"
            + "title='" + l10n.dl_nav_user_guide_title + "'>" + l10n.dl_nav_user_guide_text
          + "</a>"
        + "</li>"
        + "<li>"
          + "<a href='" + l10n.dl_nav_why_java_href + "'"
            + "title='" + l10n.dl_nav_why_java_title + "'>" + l10n.dl_nav_why_java_text
          + "</a>"
        + "</li>"
        + "<li>"
          + "<a href='" + l10n.dl_nav_eol_href + "'"
            + "title='" + l10n.dl_nav_eol_title + "'>" + l10n.dl_nav_eol_text
          + "</a>"
        + "</li>"
      + "</ul>"
  
      // Headline 3.
      + "<h3>" + l10n.dl_nav_headline_3_text + "</h3>"
  
      // List items.
      + "<ul>"
        + "<li>"
          + "<a href='" + l10n.dl_nav_support_href + "'"
            + "title='" + l10n.dl_nav_support_title + "'>" + l10n.dl_nav_support_text
          + "</a>"
        + "</li>"
        + "<li>"
          + "<a href='" + l10n.dl_nav_local_href + "'"
            + "title='" + l10n.dl_nav_local_title + "'>" + l10n.dl_nav_local_text
          + "</a>"
        + "</li>"
        + "<li>"
          + "<a href='" + l10n.dl_nav_stat_href + "'"
            + "title='" + l10n.dl_nav_stat_title + "'>" + l10n.dl_nav_stat_text
          + "</a>"
        + "</li>"
        + "<li>"
          + "<a href='" + l10n.dl_nav_mirrors1_href + "'"
            + "title='" + l10n.dl_nav_mirrors1_title + "'>" + l10n.dl_nav_mirrors1_text
          + "</a>"
          + "<br />"
        + "</li>"
        + "<li>"
          + "<a href='" + l10n.dl_nav_mirrors2_href + "'"
            + "title='" + l10n.dl_nav_mirrors2_title + "'>" + l10n.dl_nav_mirrors2_text
          + "</a>"
          + "<br />"
        + "</li>"
        + "<li>"
          + "<a href='" + l10n.dl_nav_porting_href + "'"
            + "title='" + l10n.dl_nav_porting_title + "'>" + l10n.dl_nav_porting_text
          + "</a>"
          + "<br />"
        + "</li>"
        + "<li>"
          + "<a href='" + l10n.dl_nav_archive_href + "'"
            + "title='" + l10n.dl_nav_archive_title + "'>" + l10n.dl_nav_archive_text
          + "</a>"
          + "<br />"
        + "</li>"
      + "</ul>"
    + "</div>" );
    return;
  }
  
  /*
   * Logos
   * Show the clickable logos
   * @param:  None
   * @return: None
   */
  DL.createLogoSection = function() {
    document.write( "<div id='SupportedAndSupporters'>"
  
      // Sourceforge logo.
      + "<a href='" + l10n.dl_img_sourceforge_href + "' target='_blank' title='" + l10n.dl_img_sourceforge_title + "'>"
        + "<img class='sf_logo' src='" + l10n.dl_img_sourceforge_src + "' width='160' height='34' alt='" + l10n.dl_img_sourceforge_alt + "' />"
      + "</a>"
      + "<br /><br />"
  
      // W3C Validator logo.
      + "<a href='" + l10n.dl_img_w3c_href + "' target='_blank' title='" + l10n.dl_img_w3c_title + "'>"
        + "<img class='w3c_logo' src='" + l10n.dl_img_w3c_src + "' alt='" + l10n.dl_img_w3c_alt + "' />"
      + "</a>"
    + "</div>" );
    return;
  }
  










// [2] Custom code starts from here


