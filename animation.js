/* ==========================================
   YOLANDA SERVICES
   animation.js
========================================== */

/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealItems = document.querySelectorAll(".reveal");

function revealOnScroll(){

    revealItems.forEach((item)=>{

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ==========================================
   HERO IMAGE FLOAT
========================================== */

const heroImage = document.querySelector(".hero-image img");

if(heroImage){

    let angle = 0;

    setInterval(()=>{

        angle += 0.02;

        heroImage.style.transform =

        `translateY(${Math.sin(angle)*15}px)
        rotate(${Math.sin(angle)*2}deg)`;

    },20);

}

/* ==========================================
   CARD HOVER ANIMATION
========================================== */

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transition=".35s";

        card.style.transform="translateY(-12px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0)";

    });

});

/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

const buttons = document.querySelectorAll(".primary,.secondary");

buttons.forEach(button=>{

    button.addEventListener("click",(e)=>{

        const ripple=document.createElement("span");

        ripple.className="ripple";

        const rect=button.getBoundingClientRect();

        ripple.style.left=(e.clientX-rect.left)+"px";

        ripple.style.top=(e.clientY-rect.top)+"px";

        button.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});

/* ==========================================
   FADE IMAGES
========================================== */

document.querySelectorAll("img").forEach(image=>{

    image.style.opacity="0";

    image.onload=()=>{

        image.style.transition="opacity .8s";

        image.style.opacity="1";

    };

});

console.log("Animation.js Part 1 Loaded");
/* ==========================================
   YOLANDA SERVICES
   animation.js - PART 2
========================================== */

/* ==========================================
   ANIMATED COUNTERS
========================================== */

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = target / 100;

        const updateCounter = () => {

            if(current < target){

                current += increment;

                counter.innerText = Math.floor(current);

                requestAnimationFrame(updateCounter);

            }else{

                counter.innerText = target;

            }

        };

        updateCounter();

    });

};

const statsSection = document.querySelector(".stats");

if(statsSection){

const statsObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounters();

statsObserver.unobserve(entry.target);

}

});

},{threshold:0.4});

statsObserver.observe(statsSection);

}

/* ==========================================
   PARALLAX EFFECT
========================================== */

window.addEventListener("scroll",()=>{

const hero = document.querySelector(".hero-bg");

if(hero){

hero.style.transform =
`translateY(${window.scrollY * 0.25}px)`;

}

});

/* ==========================================
   TYPING EFFECT
========================================== */

const typing = document.querySelector(".typing");

if(typing){

const text = typing.innerText;

typing.innerHTML = "";

let index = 0;

function type(){

if(index < text.length){

typing.innerHTML += text.charAt(index);

index++;

setTimeout(type,60);

}

}

type();

}

/* ==========================================
   PARTICLE MOVEMENT
========================================== */

const particles = document.querySelectorAll("#particles span");

particles.forEach((particle,index)=>{

particle.style.animationDuration =
(12 + index * 2) + "s";

particle.style.animationDelay =
(index * 0.8) + "s";

});

/* ==========================================
   HERO CONTENT FADE
========================================== */

window.addEventListener("load",()=>{

const heroContent = document.querySelector(".hero-text");

if(heroContent){

heroContent.classList.add("fade-up");

}

});

/* ==========================================
   SECTION STAGGER ANIMATION
========================================== */

const sections = document.querySelectorAll("section");

const sectionObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-in");

}

});

},{threshold:0.15});

sections.forEach(section=>{

sectionObserver.observe(section);

});

/* ==========================================
   PERFORMANCE
========================================== */

window.addEventListener("load",()=>{

document.body.classList.add("animations-loaded");

});

/* ==========================================
   END
========================================== */

console.log("Animation.js Part 2 Loaded Successfully");
