/* ==========================================
   YOLANDA SERVICES
   main.js
   Main Application Entry
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("================================");
    console.log("YOLANDA SERVICES");
    console.log("Website Initializing...");
    console.log("================================");

    initializeWebsite();

});

/* ==========================================
   WEBSITE INITIALIZER
========================================== */

function initializeWebsite(){

    initializeNavigation();

    initializeButtons();

    initializeForms();

    initializeLazyImages();

    initializeScrollEffects();

    initializeCurrentYear();

}

/* ==========================================
   NAVIGATION
========================================== */

function initializeNavigation(){

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link=>{

        link.addEventListener("click",()=>{

            navLinks.forEach(item=>{

                item.classList.remove("active");

            });

            link.classList.add("active");

        });

    });

}

/* ==========================================
   BUTTON EFFECTS
========================================== */

function initializeButtons(){

    const buttons = document.querySelectorAll(".primary,.secondary");

    buttons.forEach(button=>{

        button.addEventListener("mouseenter",()=>{

            button.style.transition=".3s";

        });

    });

}

/* ==========================================
   FORM HANDLING
========================================== */

function initializeForms(){

    const forms = document.querySelectorAll("form");

    forms.forEach(form=>{

        form.addEventListener("submit",(event)=>{

            event.preventDefault();

            console.log("Form Submitted");

        });

    });

}

/* ==========================================
   LAZY IMAGE LOADING
========================================== */

function initializeLazyImages(){

    const images=document.querySelectorAll("img");

    images.forEach(image=>{

        image.loading="lazy";

    });

}

/* ==========================================
   SCROLL EFFECTS
========================================== */

function initializeScrollEffects(){

    window.addEventListener("scroll",()=>{

        const scrollY=window.scrollY;

        document.documentElement.style.setProperty(

        "--scroll-position",

        scrollY

        );

    });

}

/* ==========================================
   FOOTER YEAR
========================================== */

function initializeCurrentYear(){

    const year=document.getElementById("year");

    if(year){

        year.textContent=new Date().getFullYear();

    }

}

/* ==========================================
   PAGE READY
========================================== */

window.addEventListener("load",()=>{

    console.log("Website Fully Loaded");

    document.body.classList.add("ready");

});

/* ==========================================
   ERROR HANDLER
========================================== */

window.addEventListener("error",(event)=>{

    console.error(

    "Website Error:",

    event.message

    );

});

/* ==========================================
   END
========================================== */

console.log("Main.js Loaded Successfully");
