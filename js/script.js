/* =========================================================
   TINDIG-CEMDS — script.js
   Vanilla JavaScript only. No dependencies beyond Bootstrap's
   own JS bundle (loaded via CDN in each page).
   ========================================================= */

/* ---------------------------------------------------------
   1. Shared navigation + footer markup
   Injected into #site-navbar / #site-footer placeholders so
   every page stays in sync from a single source of truth.
   --------------------------------------------------------- */

const NAV_LINKS = [
    { label: "Home", href: "index.html" },
    { label: "Candidates", href: "candidates.html" },
    { label: "Credentials", href: "credentials.html" },
    { label: "GPOA", href: "gpoa.html" },
    { label: "Pinaglalaban", href: "pinaglalaban.html" }
];

function renderNavbar() {
    const mount = document.getElementById("site-navbar");
    if (!mount) return;

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    const linksHtml = NAV_LINKS.map((link) => {
        const isActive = link.href === currentPage;
        return `
            <li class="nav-item">
                <a class="nav-link${isActive ? " active" : ""}" href="${link.href}"${isActive ? ' aria-current="page"' : ""}>${link.label}</a>
            </li>`;
    }).join("");

    mount.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-campaign fixed-top">
            <div class="container">
                <a class="navbar-brand navbar-brand-campaign" href="index.html">
                   <img src="assets/logo/KasamaKa.png" alt="TINDIG-CEMDS Logo" width="200" height="70">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="mainNav">
                    <ul class="navbar-nav ms-auto align-items-lg-center">
                        ${linksHtml}
                        <li class="nav-item">
                            <a class="btn-campaign btn-campaign-red nav-cta" href="candidates.html">Kilalanin ang TINDIG-CEMDS</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`;
}

function renderFooter() {
    const mount = document.getElementById("site-footer");
    if (!mount) return;

    const linksHtml = NAV_LINKS.map(
        (link) => `<li><a href="${link.href}">${link.label}</a></li>`
    ).join("");

    mount.innerHTML = `
        <footer class="footer-campaign">
            <div class="container">
                <div class="row gy-4">
                    <div class="col-lg-4">
                        <div class="footer-brand">TINDIG-CEMDS</div>
                        <div class="footer-tagline">Kasama ka! KABALYEROS</div>
                        <p class="small mb-4" style="max-width: 320px;">Isang konsehong nakikinig, kumikilos, at naninindigan para sa bawat Kabalyeros.</p>
                        <div class="footer-social">
                            <a href="#" aria-label="Facebook">FB</a>
                            <a href="#" aria-label="Instagram">IG</a>
                            <a href="#" aria-label="X / Twitter">X</a>
                        </div>
                    </div>
                    <div class="col-6 col-lg-2">
                        <h6>Navigate</h6>
                        <ul>${linksHtml}</ul>
                    </div>
                    <div class="col-6 col-lg-3">
                        <h6>Platform</h6>
                        <ul>
                            <li><a href="pinaglalaban.html">Ano ang Ipinaglalaban Namin</a></li>
                            <li><a href="gpoa.html">General Plan of Action</a></li>
                            <li><a href="credentials.html">Mga Kredensyal</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3">
                        <h6>Kasama Ka</h6>
                        <p class="small mb-0">Para sa estudyante. Kasama ang estudyante.</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    &copy; 2026 TINDIG-CEMDS. Kasama ka! KABALYEROS.
                </div>
            </div>
        </footer>`;
}

/* ---------------------------------------------------------
   2. Candidate data
   --------------------------------------------------------- */

const candidates = [
    {
        id: "anne",
        name: "Anne Jasmine Biaton",
        position: "Senator",
        category: "senators",
        image: "assets/images/ANNE.png",
        intro: "Handang makinig, magsulong, at manindigan para sa bawat Kabalyeros.",
        highlights: [
            "Research Leader and One-Act Play Production Director / Scriptwriter.",
            "Officer of the Language Enthusiasts and Advocates Club and Circle of Young Science Enthusiasts.",
            "Recognized for leadership and club service in senior high school.",
            "Led and joined outreach, community service, and student leadership activities."
        ]
    },
    {
        id: "caleb",
        name: "Caleb Cuyom",
        position: "Senator",
        category: "senators",
        image: "assets/images/CALEB.png",
        intro: "Kakampi ng estudyante sa malinaw na programa at makabuluhang aksyon.",
        highlights: [
            "Vice Chairperson of Akbayan Youth - Cavite Chapter.",
            "Co-Founder and Executive Adviser of LAYAG Kabataan NGO - Province of Cavite.",
            "Student leader, organizer, speaker, and advocacy awardee.",
            "Headed gender equality and education access initiatives."
        ]
    },
    {
        id: "emilio",
        name: "Emilio III Sumilong",
        position: "Senator",
        category: "senators",
        image: "assets/images/EMILIO.png",
        intro: "Naninindigan para sa transparency, accountability, at tunay na serbisyo.",
        highlights: [
            "Secretary General roles in finance, audit, and constitutional amendment committees.",
            "University First Year Student Council representative and committee vice chairperson.",
            "Advocacy Head of Akbayan Youth - Cavite and partnerships lead for LoveYourself.",
            "Recognized for honors, volunteer work, project pitching, and youth parliament work."
        ]
    },
    {
        id: "julie",
        name: "Julie Ann Creus",
        position: "Senator",
        category: "senators",
        image: "assets/images/JULIE.png",
        intro: "Boses ng estudyanteng handang kumilos kasama ang komunidad.",
        highlights: [
            "Classroom Vice President, SSLG representative, and student government secretariat member.",
            "With Honors achiever from Grades 9 to 12.",
            "Awarded for organization contribution and business and finance work immersion.",
            "Student journalist, leadership training participant, and decorated swimming athlete."
        ]
    }
];

/* ---------------------------------------------------------
   3. Candidate card + modal rendering
   --------------------------------------------------------- */

function candidateCardHtml(candidate) {
    return `
        <div class="col-sm-6 col-lg-4 col-xl-3 candidate-col" data-category="${candidate.category}">
            <div class="candidate-card reveal">
                <div class="candidate-photo-wrap">
                    <span class="candidate-position-tag">${candidate.position}</span>
                    <img src="${candidate.image}" alt="${candidate.name}" loading="lazy"
                         onerror="this.src='https://placehold.co/400x500/C1121F/FFFFFF?text=TINDIG-CEMDS'">
                </div>
                <div class="candidate-body">
                    <h3 class="candidate-name">${candidate.name}</h3>
                    <div class="candidate-position">${candidate.position}</div>
                    <p class="candidate-intro">${candidate.intro}</p>
                    <button type="button" class="btn-profile" data-candidate-id="${candidate.id}">View Profile</button>
                </div>
            </div>
        </div>`;
}

function renderCandidates(filter = "all") {
    const grid = document.getElementById("candidates-grid");
    if (!grid) return;

    const filtered = filter === "all"
        ? candidates
        : candidates.filter((c) => c.category === filter);

    grid.innerHTML = filtered.map(candidateCardHtml).join("");

    grid.querySelectorAll(".btn-profile").forEach((btn) => {
        btn.addEventListener("click", () => openCandidateModal(btn.dataset.candidateId));
    });

    initScrollReveal();
}

function credentialListHtml(items) {
    if (!items || !items.length) return "";

    return `<ul class="modal-credential-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function credentialSectionHtml(title, items) {
    if (!items || !items.length) return "";

    return `
            <dt>${title}</dt>
            <dd>${credentialListHtml(items)}</dd>`;
}

function openCandidateModal(candidateId) {
    const candidate = candidates.find((c) => c.id === candidateId);
    if (!candidate) return;

    const modalBody = document.getElementById("candidateModalBody");
    const modalPhoto = document.getElementById("candidateModalPhoto");
    const modalName = document.getElementById("candidateModalName");
    const modalPosition = document.getElementById("candidateModalPosition");

    modalPhoto.src = candidate.image;
    modalPhoto.onerror = function () {
        this.src = "https://placehold.co/200x200/C1121F/FFFFFF?text=TC";
    };
    modalPhoto.alt = candidate.name;
    modalName.textContent = candidate.name;
    modalPosition.textContent = candidate.position;

    modalBody.innerHTML = `
        <dl>
            ${credentialSectionHtml("Credential Highlights", candidate.highlights)}
        </dl>`;

    const modalEl = document.getElementById("candidateModal");
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
}

function initCandidateFilters() {
    const filterBar = document.getElementById("candidate-filters");
    if (!filterBar) return;

    filterBar.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-btn");
        if (!btn) return;

        filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        renderCandidates(btn.dataset.filter);
    });
}

/* ---------------------------------------------------------
   4. Scroll reveal animations
   --------------------------------------------------------- */

function initScrollReveal() {
    const items = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
        items.forEach((el) => el.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    items.forEach((el) => observer.observe(el));
}

/* ---------------------------------------------------------
   5. Back to top button
   --------------------------------------------------------- */

function initBackToTop() {
    const btn = document.getElementById("backToTop");
    if (!btn) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 420) {
            btn.classList.add("show");
        } else {
            btn.classList.remove("show");
        }
    });

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

/* ---------------------------------------------------------
   6. Mobile nav auto-close on link click
   --------------------------------------------------------- */

function initMobileNavClose() {
    const navCollapseEl = document.getElementById("mainNav");
    if (!navCollapseEl) return;

    navCollapseEl.addEventListener("click", (e) => {
        const link = e.target.closest("a.nav-link, a.btn-campaign");
        if (!link) return;

        if (window.getComputedStyle(document.querySelector(".navbar-toggler")).display !== "none") {
            const collapse = bootstrap.Collapse.getOrCreateInstance(navCollapseEl);
            collapse.hide();
        }
    });
}

/* ---------------------------------------------------------
   7. Smooth scrolling for in-page anchor links
   --------------------------------------------------------- */

function initSmoothScroll() {
    document.addEventListener("click", (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        const targetId = link.getAttribute("href");
        if (targetId.length <= 1) return;

        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}

/* ---------------------------------------------------------
   8. Init
   --------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    renderNavbar();
    renderFooter();

    if (document.getElementById("candidates-grid")) {
        renderCandidates("all");
        initCandidateFilters();
    }

    initScrollReveal();
    initBackToTop();
    initMobileNavClose();
    initSmoothScroll();
});
