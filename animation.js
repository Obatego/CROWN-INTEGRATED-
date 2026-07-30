document.addEventListener("DOMContentLoaded", () => {
    const cursorGlow = document.querySelector(".cursor-glow");
    if (cursorGlow) {
        document.addEventListener("mousemove", (e) => {
            cursorGlow.style.left = `${e.clientX - 15}px`;
            cursorGlow.style.top = `${e.clientY - 15}px`;
        });
    }

    const sections = document.querySelectorAll("section");
    if (sections.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = "running";
                }
            });
        }, { threshold: 0.15 });

        sections.forEach((section) => observer.observe(section));
    }
});
