/* ==========================================
   YOLANDA SERVICES
   SCRIPT.JS - PART 1
========================================== */

// Wait until page loads
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    document.body.style.overflow = "hidden";

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        document.body.style.overflow = "auto";

    }, 3000);

});

/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    document.getElementById("progressBar")
        .style.width = progress + "%";

});

/* ==========================================
   CURSOR GLOW
========================================== */

const cursor =
document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e)=>{

cursor.style.left =
e.clientX - 14 + "px";

cursor.style.top =
e.clientY - 14 + "px";

});

/* ==========================================
   STICKY NAVIGATION
========================================== */

const header =
document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY > 50){

header.style.background =
"rgba(0,0,0,.92)";

header.style.boxShadow =
"0 10px 30px rgba(0,0,0,.3)";

}else{

header.style.background =
"rgba(0,0,0,.55)";

header.style.boxShadow =
"none";

}

});

/* ==========================================
   DARK / LIGHT MODE
========================================== */

const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

themeToggle.innerHTML = "☀️";

}else{

themeToggle.innerHTML = "🌙";

}

});

/* ==========================================
   HERO FLOAT EFFECT
========================================== */

const heroLogo =
document.querySelector(".hero-image img");

if(heroLogo){

let angle = 0;

setInterval(()=>{

angle += 0.02;

heroLogo.style.transform =

`translateY(${Math.sin(angle)*15}px)
 rotate(${Math.sin(angle)*2}deg)`;

},20);

}

console.log(
"YOLANDA SERVICES WEBSITE LOADED"
);
/* ==========================================
   YOLANDA SERVICES
   SCRIPT.JS - PART 2
========================================== */

/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector("nav ul");

if(menuBtn && navMenu){

    menuBtn.addEventListener("click",()=>{

        navMenu.classList.toggle("show");

    });

}

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.style.display = "flex";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(

".stat-box,.about-preview,.card,.feature,.clients,.testimonials,.newsletter,.contact,.cta"

);

const revealOnScroll = ()=>{

    revealElements.forEach((element)=>{

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 120){

            element.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ==========================================
   ANIMATED STATISTICS COUNTER
========================================== */

const counters = document.querySelectorAll(".stat-box h2");

let counterStarted = false;

function runCounters(){

    if(counterStarted) return;

    const statsSection = document.querySelector(".stats");

    const statsTop = statsSection.getBoundingClientRect().top;

    if(statsTop < window.innerHeight){

        counterStarted = true;

        counters.forEach(counter=>{

            const original = counter.innerText;

            const target = parseInt(original.replace(/\D/g,""));

            const suffix = original.replace(/[0-9]/g,"");

            let count = 0;

            const speed = target / 80;

            const updateCounter = ()=>{

                count += speed;

                if(count < target){

                    counter.innerText = Math.floor(count)+suffix;

                    requestAnimationFrame(updateCounter);

                }else{

                    counter.innerText = original;

                }

            };

            updateCounter();

        });

    }

}

window.addEventListener("scroll", runCounters);

runCounters();

/* ==========================================
   BUTTON HOVER EFFECT
========================================== */

const buttons = document.querySelectorAll(

".primary,.secondary"

);

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform = "translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform = "translateY(0) scale(1)";

    });

});

/* ==========================================
   ACTIVE NAVIGATION LINK
========================================== */

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.forEach(item=>{

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});

console.log("Animations Loaded Successfully");
/* ==========================================
   YOLANDA SERVICES
   SCRIPT.JS - PART 3
========================================== */

/* ==========================================
   3D CARD TILT EFFECT
========================================== */

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

const rotateX = -(y - rect.height/2)/18;

const rotateY = (x - rect.width/2)/18;

card.style.transform =

`perspective(1000px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

});

});

/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",(e)=>{

e.preventDefault();

const target=document.querySelector(anchor.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ==========================================
   NEWSLETTER FORM
========================================== */

const newsletter=document.querySelector(".newsletter form");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

const email=newsletter.querySelector("input");

if(email.value.trim()===""){

alert("Please enter your email address.");

return;

}

alert("Thank you for subscribing!");

newsletter.reset();

});

}

/* ==========================================
   CONTACT FORM
========================================== */

const contactForm=document.querySelector(".contact form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Your message has been received.");

contactForm.reset();

});

}

/* ==========================================
   SIMPLE TESTIMONIAL ROTATOR
========================================== */

const testimonials=[

"Yolanda Services exceeded our expectations with professionalism and excellent support.",

"The team delivered innovative solutions that improved our workflow.",

"Reliable, responsive and committed to quality service."

];

const testimonialText=document.querySelector(".testimonial p");

let testimonialIndex=0;

if(testimonialText){

setInterval(()=>{

testimonialIndex++;

if(testimonialIndex>=testimonials.length){

testimonialIndex=0;

}

testimonialText.style.opacity="0";

setTimeout(()=>{

testimonialText.innerText=testimonials[testimonialIndex];

testimonialText.style.opacity="1";

},300);

},5000);

}

/* ==========================================
   IMAGE FADE-IN
========================================== */

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("load",()=>{

img.style.opacity="1";

});

});

/* ==========================================
   KEYBOARD ACCESSIBILITY
========================================== */

document.addEventListener("keyup",(e)=>{

if(e.key==="Home"){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

});

/* ==========================================
   WINDOW RESIZE
========================================== */

window.addEventListener("resize",()=>{

console.log(

"Screen Width:",window.innerWidth

);

});

/* ==========================================
   PERFORMANCE
========================================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

document.body.classList.add("loaded");

},300);

});

/* ==========================================
   WELCOME MESSAGE
========================================== */

console.log("%cYOLANDA SERVICES","font-size:24px;font-weight:bold;color:#d23c74;");

console.log("%cInnovative Solutions • Reliable Service • Measurable Impact","font-size:14px;color:#ffffff;");

console.log("%cWebsite Developed by Joachim","font-size:13px;color:#bbbbbb;");

/* ==========================================
   END OF SCRIPT
========================================== */
