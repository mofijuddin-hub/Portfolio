/* =========================================================
   MOFIJUDDIN PORTFOLIO
   MOBILE UI JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const closeMenu =
        document.getElementById("closeMenu");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const menuOverlay =
        document.getElementById("menuOverlay");

    const themeToggle =
        document.getElementById("themeToggle");

    const themeIcon =
        document.getElementById("themeIcon");

    const sideLinks =
        document.querySelectorAll(".side-link");

    const bottomLinks =
        document.querySelectorAll(".bottom-link");

    const sections =
        document.querySelectorAll("main section[id]");

    const contactForm =
        document.getElementById("contactForm");

    const formMessage =
        document.getElementById("formMessage");

    const year =
        document.getElementById("year");


    /* =====================================================
       YEAR
    ===================================================== */

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    function openMenu() {

        mobileMenu.classList.add("open");

        menuOverlay.classList.add("show");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        document.body.style.overflow =
            "hidden";

    }


    function closeMobileMenu() {

        mobileMenu.classList.remove("open");

        menuOverlay.classList.remove("show");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.style.overflow =
            "";

    }


    if (menuToggle) {

        menuToggle.addEventListener(
            "click",
            openMenu
        );

    }


    if (closeMenu) {

        closeMenu.addEventListener(
            "click",
            closeMobileMenu
        );

    }


    if (menuOverlay) {

        menuOverlay.addEventListener(
            "click",
            closeMobileMenu
        );

    }


    /* =====================================================
       CLOSE MENU AFTER CLICK
    ===================================================== */

    sideLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                closeMobileMenu();

            }
        );

    });


    /* =====================================================
       THEME
    ===================================================== */

    const savedTheme =
        localStorage.getItem(
            "portfolio-theme"
        );


    if (savedTheme === "light") {

        document.body.classList.add(
            "light"
        );

        themeIcon.textContent =
            "☀";

    }


    function updateThemeIcon() {

        if (
            document.body.classList.contains(
                "light"
            )
        ) {

            themeIcon.textContent =
                "☀";

        } else {

            themeIcon.textContent =
                "☾";

        }

    }


    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            () => {

                document.body.classList.toggle(
                    "light"
                );

                const isLight =
                    document.body.classList.contains(
                        "light"
                    );


                localStorage.setItem(
                    "portfolio-theme",
                    isLight
                        ? "light"
                        : "dark"
                );


                updateThemeIcon();

            }
        );

    }


    updateThemeIcon();


    /* =====================================================
       ALL NAV LINKS
    ===================================================== */

    const allNavigationLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    allNavigationLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetID =
                    link.getAttribute("href");


                if (
                    !targetID ||
                    targetID === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetID
                    );


                if (!target) {

                    return;

                }


                event.preventDefault();


                const topbar =
                    document.querySelector(
                        ".topbar"
                    );


                const offset =
                    topbar
                        ? topbar.offsetHeight + 10
                        : 10;


                const targetPosition =
                    target.getBoundingClientRect()
                        .top
                    +
                    window.scrollY
                    -
                    offset;


                window.scrollTo({

                    top:
                        targetPosition,

                    behavior:
                        "smooth"

                });

            }
        );

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    function setActiveNavigation(id) {


        sideLinks.forEach(link => {

            const href =
                link.getAttribute("href");

            link.classList.toggle(
                "active",
                href === `#${id}`
            );

        });


        bottomLinks.forEach(link => {

            const href =
                link.getAttribute("href");

            link.classList.toggle(
                "active",
                href === `#${id}`
            );

        });

    }


    /* =====================================================
       INTERSECTION OBSERVER
    ===================================================== */

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        setActiveNavigation(
                            entry.target.id
                        );

                    }

                });

            },
            {
                root: null,

                threshold: 0.35

            }
        );


    sections.forEach(section => {

        observer.observe(section);

    });


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const name =
                    document.getElementById(
                        "name"
                    ).value.trim();


                const email =
                    document.getElementById(
                        "email"
                    ).value.trim();


                const message =
                    document.getElementById(
                        "message"
                    ).value.trim();


                if (
                    !name ||
                    !email ||
                    !message
                ) {

                    formMessage.textContent =
                        "Please complete all fields.";

                    return;

                }


                formMessage.textContent =
                    `Thanks ${name}! Your message is ready to send.`;


                contactForm.reset();


                setTimeout(() => {

                    formMessage.textContent =
                        "";

                }, 5000);

            }
        );

    }


    /* =====================================================
       PROJECT CARD TOUCH EFFECT
    ===================================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach(card => {

        card.addEventListener(
            "touchstart",
            () => {

                card.style.transform =
                    "scale(.985)";

            },
            {
                passive: true
            }
        );


        card.addEventListener(
            "touchend",
            () => {

                card.style.transform =
                    "";

            },
            {
                passive: true
            }
        );

    });


    /* =====================================================
       3D CHARACTER PARALLAX
    ===================================================== */

    const heroVisual =
        document.querySelector(
            ".hero-visual"
        );


    const character =
        document.querySelector(
            ".character"
        );


    if (
        heroVisual &&
        character &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        heroVisual.addEventListener(
            "mousemove",
            event => {

                const rect =
                    heroVisual.getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    )
                    /
                    rect.width
                    -
                    .5;


                const y =
                    (
                        event.clientY -
                        rect.top
                    )
                    /
                    rect.height
                    -
                    .5;


                character.style.transform =
                    `
                    translateY(${-y * 8}px)
                    rotateY(${x * 7}deg)
                    rotateX(${-y * 3}deg)
                    `;

            }
        );


        heroVisual.addEventListener(
            "mouseleave",
            () => {

                character.style.transform =
                    "";

            }
        );

    }


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeMobileMenu();

            }

        }
    );


});
