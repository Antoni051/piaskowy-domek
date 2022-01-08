class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `

        <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3">
            <div class="container-fluid">
                <!-- NAME OR LOGO links to home screen -->
                <a href="index.html" class="navbar-brand">Piaskowy Domek Łeba</a>

                <!-- Hamburger button for toggling the menu on smaller screens-->
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navmenu"
                    >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Sections / headings also the headings when collapsed-->
                <div class="collapse navbar-collapse bg-dark text-light" id="navmenu">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle"
                               href="#" id="navbarDropdownMenuLink"
                                        role="button" data-bs-toggle="dropdown"
                                                      aria-expanded="false" data-localize="header.language">
                                Language
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a id="language_english" class="dropdown-item" data-localize="english" href="#">English</a></li>
                                <li><a id="language_polish" class="dropdown-item" data-localize="polish" href="#">Polski</a></li>
                                <li><a id="language_german" class="dropdown-item" data-localize="german" href="#">Deutsch</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="location.html" data-localize="header.location" class="nav-link">Location</a>
                        </li>
                        <li class="nav-item">
                            <a href="rooms.html" data-localize="header.rooms" class="nav-link">Rooms</a>
                        </li>
                        <li class="nav-item">
                            <a href="rooms.html" data-localize="header.pricing"class="nav-link">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a href="faq.html" data-localize="header.faq" class="nav-link">FAQs</a>
                        </li>
                        <li class="nav-item">
                        <a href="about.html" data-localize="header.about" class="nav-link">About</a>
                        </li>
                        <li class="nav-item">
                            <a href="contact.html" data-bs-toggle="header.contact" class="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


        `;

        $("[data-localize]").localize("langs/lang", {language: getCookie("preferred_language"),});

        function setCookie(cname, cvalue, exdays) {
            const d = new Date();
            d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
            let expires = "expires=" + d.toDateString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/ ; SameSite=Lax;"
            return true
        }

        function getCookie(name) {
            var dc = document.cookie;
            var prefix = name + "=";
            var begin = dc.indexOf("; " + prefix);
            if (begin == -1) {
                begin = dc.indexOf(prefix);
                if (begin != 0) return null;
            } else {
                begin += 2;
                var end = document.cookie.indexOf(";", begin);
                if (end == -1) {
                    end = dc.length;
                }
            }
            // because unescape has been deprecated, replaced with decodeURI
            //return unescape(dc.substring(begin + prefix.length, end));
            return decodeURI(dc.substring(begin + prefix.length, end));
        }

        function update_language(language) {
            let cookie = getCookie("preferred_language");

            if (cookie == null) {
                // create a cookie
                setCookie("preferred_language", language, 300);
            } else {
                // delete the cookie if there is one
                document.cookie =
                    "preferred_language=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
                setCookie("preferred_language", language, 300);
            }
        }

        if (navigator.language.includes("en")) {
            document.cookie = setCookie("preferred_language", "en", 300)
        } else {
            document.cookie = setCookie(
                "preferred_language",
                navigator.language,
                300
            )
        }

        $("[data-localize]").localize("langs/lang", {
            language: getCookie("preferred_language"),
        });

        const english_btn = document.getElementById("language_english");
        const polish_btn = document.getElementById("language_polish");
        const german_btn = document.getElementById("language_german");

        english_btn.addEventListener("click", function () {
            update_language("en");
            location.reload();
        });
        german_btn.addEventListener("click", function () {
            update_language("de");
            location.reload();
        });
        polish_btn.addEventListener("click", function () {
            update_language("pl");
            location.reload();
        });
    }
}

customElements.define("header-component", Header);
