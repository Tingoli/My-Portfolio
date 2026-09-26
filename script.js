/* ==================================================
   MOBILE MENU
================================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


/* ==================================================
   PROJECT FILTER
================================================== */

const filterButtons = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        /* Active button */

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        /* Filter projects */

        projectCards.forEach(card => {

            const category = card.dataset.category;

            if (filter === "all" || category === filter) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


/* ==================================================
   PROJECT MODAL
================================================== */

const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");

const modalImage = document.getElementById("modalImage");
// const modalTitle = document.getElementById("modalTitle");

const projectButtons = document.querySelectorAll(".view-project");


/* Open modal */

projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        const title = button.dataset.title;
        const image = button.dataset.image;

        // modalTitle.textContent = title;

        modalImage.src = image;
        modalImage.alt = title;

        modal.classList.add("active");

        document.body.style.overflow = "hidden";
    });

});


/* Close modal */

function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";
}


/* Close button */

modalClose.addEventListener("click", closeModal);


/* Close when clicking outside */

modal.addEventListener("click", event => {

    if (event.target === modal) {
        closeModal();
    }

});


/* Close with ESC */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModal();
    }

});

/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements = document.querySelectorAll(
    ".project-card, .service-card, .timeline-item, .about-content, .skills-list"
);

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* ==================================================
   IMAGE FALLBACK
================================================== */

const images = document.querySelectorAll("img");

images.forEach(image => {

    image.addEventListener("error", () => {

        /*
         * If an image doesn't exist, the browser will
         * show a neutral background instead of breaking
         * the layout.
         */

        image.style.display = "none";

    });

});