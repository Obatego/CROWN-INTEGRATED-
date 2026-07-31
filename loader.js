/* ==========================================
   YOLANDA SERVICES
   loader.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loader");
    const progress = document.querySelector(".loading-progress");
    const loadingText = document.getElementById("loadingText");

    const messages = [
        "Loading...",
        "Preparing Experience...",
        "Initializing Services...",
        "Almost Ready...",
        "Welcome to Yolanda Services"
    ];

    let index = 0;

    const messageInterval = setInterval(() => {

        if (loadingText && index < messages.length) {
            loadingText.textContent = messages[index];
            index++;
        }

    }, 600);

    if (progress) {

        progress.style.width = "0%";

        setTimeout(() => {
            progress.style.transition = "width 3s linear";
            progress.style.width = "100%";
        }, 100);

    }

    window.addEventListener("load", () => {

        setTimeout(() => {

            clearInterval(messageInterval);

            if (loader) {

                loader.style.opacity = "0";
                loader.style.visibility = "hidden";

                setTimeout(() => {

                    loader.style.display = "none";
                    document.body.classList.add("loaded");

                }, 1000);

            }

        }, 3000);

    });

});

/* ==========================================
   PREVENT SCROLL DURING LOADING
========================================== */

document.documentElement.style.overflow = "hidden";

window.addEventListener("load", () => {

    setTimeout(() => {

        document.documentElement.style.overflow = "auto";

    }, 3000);

});

/* ==========================================
   LOADER LOGO ANIMATION
========================================== */

const logo = document.querySelector(".loader-logo");

if (logo) {

    let scale = 1;

    setInterval(() => {

        scale = scale === 1 ? 1.05 : 1;

        logo.style.transform = `scale(${scale})`;

    }, 900);

}

/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log("Yolanda Loader Initialized");
