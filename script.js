/* ==========================================
   Gen-Z Studio
   Phase 1C
   Basic JavaScript
========================================== */

// =============================
// Loading Screen
// =============================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1000);

});

// =============================
// Mobile Menu
// =============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// =============================
// Scroll Progress Bar
// =============================

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

});

// =============================
// Sticky Navbar Shadow
// =============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.35)";

    } else {

        navbar.style.boxShadow = "none";

    }

});

// =============================
// Smooth Button Click Animation
// =============================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function () {

        this.style.transform = "scale(0.96)";

        setTimeout(() => {

            this.style.transform = "";

        }, 150);

    });

});
/* ==========================================
   Phase 4C
   FAQ + Local Storage Reviews
========================================== */

// =============================
// FAQ Accordion
// =============================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        // Close other FAQs
        faqItems.forEach(other => {
            if (other !== item) {
                other.classList.remove("active");
            }
        });

        // Toggle current FAQ
        item.classList.toggle("active");

    });

});

// =============================
// Reviews
// =============================

const reviewForm = document.getElementById("reviewForm");
const reviewList = document.getElementById("reviewList");

function loadReviews() {

    if (!reviewList) return;

    reviewList.innerHTML = "";

    const reviews =
        JSON.parse(localStorage.getItem("genzReviews")) || [];

    reviews.forEach(review => {

        const card = document.createElement("div");

        card.className = "review-card";

        card.innerHTML = `
            <h3>${review.name}</h3>

            <div class="review-role">
                ${review.role}
            </div>

            <div class="review-stars">
                ${review.rating}
            </div>

            <p>${review.text}</p>
        `;

        reviewList.appendChild(card);

    });

}

if (reviewForm) {

    reviewForm.addEventListener("submit", function(e){

        e.preventDefault();

        const name =
            document.getElementById("reviewName").value.trim();

        const role =
            document.getElementById("reviewRole").value;

        const rating =
            document.getElementById("reviewRating").value;

        const text =
            document.getElementById("reviewText").value.trim();

        if(!name || !role || !rating || !text){

            alert("Please complete all fields.");

            return;

        }

        const reviews =
            JSON.parse(localStorage.getItem("genzReviews")) || [];

        reviews.unshift({
            name,
            role,
            rating,
            text
        });

        localStorage.setItem(
            "genzReviews",
            JSON.stringify(reviews)
        );

        reviewForm.reset();

        loadReviews();

        alert("Thank you! Your review has been saved on this device.");

    });

}

// Load reviews when page opens

loadReviews();
/* ==========================================
   Phase 5C
   Contact Form Validation
========================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document
            .getElementById("contactName")
            .value
            .trim();

        const email = document
            .getElementById("contactEmail")
            .value
            .trim();

        const message = document
            .getElementById("contactMessage")
            .value
            .trim();

        // Basic validation
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Email validation
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Success message
        alert(
            "Thank you for contacting Gen-Z Studio!\n\nYour message has been validated successfully.\n\nWhen a backend or email service is added in the future, this form will send messages directly."
        );

        contactForm.reset();

    });

}
/* ==========================================
   Phase 6B
   Final Polish
========================================== */

// =============================
// Scroll Reveal
// =============================

const revealElements = document.querySelectorAll(
    ".section, .card, .timeline-item"
);

function revealOnScroll() {

    const trigger = window.innerHeight * 0.9;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {

            el.classList.add("reveal");
            el.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// =============================
// Back To Top Button
// =============================

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// =============================
// Keyboard Support
// =============================

menuBtn.addEventListener("keydown", function(e){

    if(e.key==="Enter" || e.key===" "){

        e.preventDefault();

        navLinks.classList.toggle("active");

    }

});

// =============================
// Lazy Loading (Future Images)
// =============================

document.querySelectorAll("img").forEach(img=>{

    img.loading="lazy";

});