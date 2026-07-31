/* ==========================================
   YOLANDA SERVICES
   navbar.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeNavbar();

});

/* ==========================================
   NAVBAR INITIALIZATION
========================================== */

function initializeNavbar(){

    mobileMenu();

    stickyNavbar();

    activeNavigation();

    smoothScrolling();

}

/* ==========================================
   MOBILE MENU
========================================== */

function mobileMenu(){

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.querySelector("nav ul");

    if(!menuBtn || !navMenu) return;

    menuBtn.addEventListener("click",()=>{

        navMenu.classList.toggle("show");

        menuBtn.classList.toggle("active");

    });

}

/* ==========================================
   STICKY NAVBAR
========================================== */

function stickyNavbar(){

    const header = document.querySelector("header");

    if(!header) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 60){

            header.classList.add("sticky");

        }else{

            header.classList.remove("sticky");

        }

    });

}

/* ==========================================
   ACTIVE LINK
========================================== */

function activeNavigation(){

    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll("nav a");

    window.addEventListener("scroll",()=>{

        let current = "";

        sections.forEach(section=>{

            const sectionTop = section.offsetTop - 120;

            if(window.scrollY >= sectionTop){

                current = section.getAttribute("id");

            }

        });

        links.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#" + current){

                link.classList.add("active");

            }

        });

    });

}

/* ==========================================
   SMOOTH SCROLL
========================================== */

function smoothScrolling(){

    const anchors = document.querySelectorAll('nav a[href^="#"]');

    anchors.forEach(anchor=>{

        anchor.addEventListener("click",(e)=>{

            e.preventDefault();

            const target = document.querySelector(

                anchor.getAttribute("href")

            );

            if(target){

                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            }

            const navMenu = document.querySelector("nav ul");

            const menuBtn = document.getElementById("menuBtn");

            if(navMenu){

                navMenu.classList.remove("show");

            }

            if(menuBtn){

                menuBtn.classList.remove("active");

            }

        });

    });

}

/* ==========================================
   HIDE NAVBAR ON SCROLL DOWN
========================================== */

let lastScroll = 0;

window.addEventListener("scroll",()=>{

    const header = document.querySelector("header");

    if(!header) return;

    const currentScroll = window.pageYOffset;

    if(currentScroll > lastScroll && currentScroll > 150){

        header.style.transform = "translateY(-100%)";

    }else{

        header.style.transform = "translateY(0)";

    }

    lastScroll = currentScroll;

});

/* ==========================================
   CONSOLE
========================================== */

console.log("Navbar.js Loaded");
