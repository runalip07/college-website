// ===============================
// Mobile Menu Toggle
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("show");
    });
}


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            if (navbar) {
                navbar.classList.remove("show");
            }
        }

    });

});


// ===============================
// Reveal Animation On Scroll
// ===============================

const revealElements = document.querySelectorAll(
    ".section, .card, .stat-box, .notice-card, .seat-card"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < window.innerHeight - revealPoint) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if (current < target) {

            counter.innerText = Math.min(current + increment, target);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});


// ===============================
// Active Navigation Highlight
// ===============================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// ===============================
// Course Information
// ===============================

function showCourse(course) {

    const info = document.getElementById("courseInfo");

    if (!info) return;

    if (course === "civil") {

        info.innerHTML = `
            <h3>Civil Engineering</h3>
            <p><strong>Duration:</strong> 3 Years</p>
            <p>Civil Engineering deals with planning, designing and construction of roads, bridges, buildings and infrastructure projects.</p>
            <p><strong>Careers:</strong> Site Engineer, Structural Engineer, Surveyor, Project Manager.</p>
        `;

    }

    else if (course === "mechanical") {

        info.innerHTML = `
            <h3>Mechanical Engineering</h3>
            <p><strong>Duration:</strong> 3 Years</p>
            <p>Mechanical Engineering focuses on machines, manufacturing, design and maintenance of mechanical systems.</p>
            <p><strong>Careers:</strong> Design Engineer, Production Engineer, Maintenance Engineer.</p>
        `;

    }

    else if (course === "electrical") {

        info.innerHTML = `
            <h3>Electrical Engineering</h3>
            <p><strong>Duration:</strong> 3 Years</p>
            <p>Electrical Engineering covers power generation, transmission, electrical machines and automation systems.</p>
            <p><strong>Careers:</strong> Electrical Engineer, Power Plant Engineer, Control System Engineer.</p>
        `;

    }

}


// ===============================
// Back To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}