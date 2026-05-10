(function () {
  const navItems = [
    ["Home", "index.html"],
    ["Home 2", "home2.html"],
    ["Experiences", "experiences.html"],
    ["Bird Profiles", "bird-profiles.html"],
    ["Workshops", "workshops.html"],
    ["Photography Packages", "photography-packages.html"],
    ["Gift Certificates", "gift-certificates.html"],
    ["About", "about.html"],
    ["Contact", "contact.html"]
  ];

  const experiences = [
    "Private Falconry Encounter",
    "Raptor Encounter Tour",
    "Sunset Flying Demonstration",
    "Bird Handling Workshop",
    "Wildlife Photography Session",
    "Conservation Education Program",
    "Gift Certificate"
  ];

  const icon = (name, className = "w-5 h-5") => `<i data-lucide="${name}" class="${className}" aria-hidden="true"></i>`;

  const currentPage = () => {
    const page = window.location.pathname.split("/").pop();
    return page || "index.html";
  };

  function buildHeader() {
    const active = currentPage();
    const navMarkup = navItems
      .map(([label, href]) => `<a class="nav-link ${active === href ? "active" : ""}" href="${href}">${label}</a>`)
      .join("");

    const mobileMarkup = navItems
      .map(([label, href]) => `<a class="block rounded-xl px-4 py-3 text-base font-semibold text-ivory/85 hover:bg-white/10 ${active === href ? "bg-white/10 text-white" : ""}" href="${href}">${label}</a>`)
      .join("");

    document.querySelectorAll('[data-component="site-header"]').forEach((mount) => {
      mount.innerHTML = `
        <header class="site-header" data-site-header>
          <div class="site-header-inner rounded-full px-3 py-3 lg:px-4">
            <div class="flex items-center justify-between gap-3">
              <a href="index.html" class="flex items-center gap-3 text-ivory" aria-label="Falconry & Raptor Encounters home">
                <span class="grid h-11 w-11 place-items-center rounded-full border border-bronze/50 bg-bronze/15 text-bronze">${icon("feather", "w-5 h-5")}</span>
                <span class="leading-tight">
                  <span class="block font-display text-lg font-bold">Aerie Encounters</span>
                  <span class="block text-xs text-ivory/60">Falconry & Raptors</span>
                </span>
              </a>
              <nav class="desktop-nav hidden items-center gap-4 text-sm font-semibold xl:flex" aria-label="Primary navigation">
                ${navMarkup}
              </nav>
              <div class="desktop-actions hidden items-center gap-2 xl:flex">
                <button class="btn-primary !min-h-11 !px-4" type="button" data-open-booking>${icon("calendar-check", "w-4 h-4")}<span>Book an Experience</span></button>
                <a class="btn-secondary !min-h-11 !px-4" href="experiences.html#schedule">${icon("clock", "w-4 h-4")}<span>View Flying Schedule</span></a>
                <button class="icon-btn" type="button" data-theme-toggle aria-label="Toggle dark mode">${icon("moon")}</button>
                <button class="icon-btn" type="button" data-rtl-toggle aria-label="Toggle RTL layout">${icon("languages")}</button>
              </div>
              <div class="flex items-center gap-2 xl:hidden">
                <button class="icon-btn" type="button" data-theme-toggle aria-label="Toggle dark mode">${icon("moon")}</button>
                <button class="icon-btn" type="button" data-rtl-toggle aria-label="Toggle RTL layout">${icon("languages")}</button>
                <button class="icon-btn" type="button" data-menu-open aria-label="Open menu">${icon("menu")}</button>
              </div>
            </div>
          </div>
        </header>
        <aside class="mobile-menu p-5" data-mobile-menu aria-label="Mobile navigation">
          <div class="mb-6 flex items-center justify-between">
            <span class="font-display text-xl font-bold text-ivory">Aerie Encounters</span>
            <button class="icon-btn" type="button" data-menu-close aria-label="Close menu">${icon("x")}</button>
          </div>
          <nav class="grid gap-1">${mobileMarkup}</nav>
          <div class="mt-6 grid gap-3">
            <button class="btn-primary" type="button" data-open-booking>${icon("calendar-check", "w-4 h-4")}Book an Experience</button>
            <a class="btn-secondary" href="experiences.html#schedule">${icon("clock", "w-4 h-4")}View Flying Schedule</a>
          </div>
        </aside>
      `;
    });
  }

  function buildFooter() {
    const navMarkup = navItems
      .map(([label, href]) => `<a class="text-sm text-ivory/68 hover:text-bronze" href="${href}">${label}</a>`)
      .join("");

    document.querySelectorAll('[data-component="site-footer"]').forEach((mount) => {
      mount.innerHTML = `
        <footer class="bg-midnight text-ivory">
          <div class="site-shell py-14">
            <div class="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
              <div>
                <div class="mb-4 flex items-center gap-3">
                  <span class="grid h-12 w-12 place-items-center rounded-full border border-bronze/50 bg-bronze/15 text-bronze">${icon("feather", "w-5 h-5")}</span>
                  <div>
                    <p class="font-display text-2xl font-bold">Aerie Encounters</p>
                    <p class="text-sm text-ivory/62">Premium falconry, raptor tours, and conservation education.</p>
                  </div>
                </div>
                <p class="max-w-xl leading-8 text-ivory/68">A cinematic eco-tourism experience shaped for curious travelers, photographers, families, and lifelong wildlife learners.</p>
              </div>
              <div>
                <h3 class="mb-4 text-lg font-bold text-bronze">Explore</h3>
                <div class="grid grid-cols-2 gap-3">${navMarkup}</div>
              </div>
              <div>
                <h3 class="mb-4 text-lg font-bold text-bronze">Plan Your Visit</h3>
                <div class="grid gap-3 text-sm text-ivory/68">
                  <span class="flex items-center gap-2">${icon("map-pin", "w-4 h-4 text-bronze")}Oakridge Forest Reserve</span>
                  <span class="flex items-center gap-2">${icon("phone", "w-4 h-4 text-bronze")}+1 (555) 014-7827</span>
                  <span class="flex items-center gap-2">${icon("mail", "w-4 h-4 text-bronze")}hello@aerieencounters.example</span>
                </div>
                <div class="mt-5 flex gap-2">
                  <a class="icon-btn" href="https://www.instagram.com/" aria-label="Instagram">${icon("instagram")}</a>
                  <a class="icon-btn" href="https://www.facebook.com/" aria-label="Facebook">${icon("facebook")}</a>
                  <a class="icon-btn" href="https://www.youtube.com/" aria-label="YouTube">${icon("youtube")}</a>
                </div>
              </div>
            </div>
            <div class="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-ivory/54 md:flex-row md:items-center md:justify-between">
              <p>© <span data-current-year></span> Aerie Encounters. Crafted for responsible wildlife experiences.</p>
              <p>No dashboard or admin portal included.</p>
            </div>
          </div>
        </footer>
      `;
    });
  }

  function buildBookingModal() {
    if (document.querySelector("[data-booking-modal]")) return;
    const options = experiences.map((item) => `<option>${item}</option>`).join("");
    const modal = document.createElement("div");
    modal.className = "booking-modal";
    modal.dataset.bookingModal = "";
    modal.innerHTML = `
      <div class="modal-card">
        <div class="flex items-start justify-between gap-4 border-b border-[var(--line)] p-6">
          <div>
            <p class="kicker">Reservation Request</p>
            <h2 class="mt-2 font-display text-3xl font-bold">Book an Experience</h2>
            <p class="mt-2 section-copy">Tell us what you are dreaming of and our handler team will confirm availability.</p>
          </div>
          <button class="icon-btn !border-[var(--line)] !text-[var(--ink)]" type="button" data-close-booking aria-label="Close booking modal">${icon("x")}</button>
        </div>
        <form class="grid gap-4 p-6" data-booking-form>
          <div class="grid gap-4 md:grid-cols-2">
            <label class="grid gap-2 text-sm font-bold">Name<input class="form-field" required placeholder="Your name"></label>
            <label class="grid gap-2 text-sm font-bold">Email<input class="form-field" type="email" required placeholder="you@example.com"></label>
          </div>
          <div class="grid gap-4 md:grid-cols-2">
            <label class="grid gap-2 text-sm font-bold">Experience<select class="form-field" required>${options}</select></label>
            <label class="grid gap-2 text-sm font-bold">Preferred Date<input class="form-field" type="date" required></label>
          </div>
          <label class="grid gap-2 text-sm font-bold">Message<textarea class="form-field min-h-32" placeholder="Guests, accessibility needs, photography goals, or gift notes"></textarea></label>
          <button class="btn-primary justify-self-start" type="submit">${icon("send", "w-4 h-4")}Send Request</button>
          <p class="hidden rounded-xl border border-bronze/30 bg-bronze/10 p-4 text-sm font-semibold" data-booking-success>Your request is staged for this demo. Connect this form to your booking service when you go live.</p>
        </form>
      </div>
    `;
    document.body.appendChild(modal);
  }

  function buildLightbox() {
    if (document.querySelector("[data-lightbox-viewer]")) return;
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.dataset.lightboxViewer = "";
    lightbox.innerHTML = `
      <button class="icon-btn absolute right-5 top-5 z-10" type="button" data-lightbox-close aria-label="Close image">${icon("x")}</button>
      <img alt="">
    `;
    document.body.appendChild(lightbox);
  }

  function applyTheme() {
    const stored = localStorage.getItem("aerie-theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored || (prefersDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }

  function applyDirection() {
    const dir = localStorage.getItem("aerie-dir") || "ltr";
    document.documentElement.setAttribute("dir", dir);
  }

  function setupEvents() {
    const header = document.querySelector("[data-site-header]");
    const mobileMenu = document.querySelector("[data-mobile-menu]");
    const bookingModal = document.querySelector("[data-booking-modal]");
    const lightbox = document.querySelector("[data-lightbox-viewer]");

    const closeMenu = () => mobileMenu && mobileMenu.classList.remove("open");
    const openBooking = () => bookingModal && bookingModal.classList.add("open");
    const closeBooking = () => bookingModal && bookingModal.classList.remove("open");

    document.addEventListener("click", (event) => {
      const target = event.target.closest("button, a, [data-lightbox]");
      if (!target) return;

      if (target.matches("[data-menu-open]")) mobileMenu && mobileMenu.classList.add("open");
      if (target.matches("[data-menu-close]")) closeMenu();
      if (target.matches(".mobile-menu a")) closeMenu();

      if (target.matches("[data-theme-toggle]")) {
        const isDark = document.documentElement.classList.toggle("dark");
        localStorage.setItem("aerie-theme", isDark ? "dark" : "light");
      }

      if (target.matches("[data-rtl-toggle]")) {
        const next = document.documentElement.getAttribute("dir") === "rtl" ? "ltr" : "rtl";
        document.documentElement.setAttribute("dir", next);
        localStorage.setItem("aerie-dir", next);
      }

      if (target.matches("[data-open-booking]")) openBooking();
      if (target.matches("[data-close-booking]")) closeBooking();

      if (target.matches("[data-lightbox]")) {
        const img = target.matches("img") ? target : target.querySelector("img");
        if (img && lightbox) {
          lightbox.querySelector("img").src = img.currentSrc || img.src;
          lightbox.querySelector("img").alt = img.alt || "Wildlife image preview";
          lightbox.classList.add("open");
        }
      }

      if (target.matches("[data-lightbox-close]")) lightbox && lightbox.classList.remove("open");
    });

    bookingModal && bookingModal.addEventListener("click", (event) => {
      if (event.target === bookingModal) closeBooking();
    });

    lightbox && lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) lightbox.classList.remove("open");
    });

    document.querySelectorAll("[data-booking-form]").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        form.querySelector("[data-booking-success]").classList.remove("hidden");
      });
    });

    document.querySelectorAll("[data-accordion] [data-accordion-button]").forEach((button) => {
      button.addEventListener("click", () => {
        const item = button.closest(".accordion-item");
        item.classList.toggle("open");
      });
    });

    document.querySelectorAll("[data-slider]").forEach((slider) => {
      const track = slider.querySelector("[data-slider-track]");
      const prev = slider.querySelector("[data-slider-prev]");
      const next = slider.querySelector("[data-slider-next]");
      let index = 0;
      const update = () => {
        const card = track.querySelector(".slide-card");
        if (!card) return;
        const gap = parseFloat(getComputedStyle(track).gap || 0);
        const step = card.getBoundingClientRect().width + gap;
        const max = Math.max(0, track.children.length - Math.floor(slider.offsetWidth / step));
        index = Math.max(0, Math.min(index, max));
        track.style.transform = `translateX(${document.documentElement.dir === "rtl" ? index * step : -index * step}px)`;
      };
      prev && prev.addEventListener("click", () => {
        index -= 1;
        update();
      });
      next && next.addEventListener("click", () => {
        index += 1;
        update();
      });
      window.addEventListener("resize", update);
      update();
    });

    const onScroll = () => {
      if (header) header.classList.toggle("scrolled", window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function setupRevealAndCounters() {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.counter || "0");
        const suffix = el.dataset.suffix || "";
        const duration = 1400;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const value = Math.floor(target * (1 - Math.pow(1 - progress, 3)));
          el.textContent = `${value}${suffix}`;
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.55 });

    document.querySelectorAll("[data-counter]").forEach((item) => counterObserver.observe(item));
  }

  function setupParallax() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const parallaxItems = [...document.querySelectorAll("[data-parallax]")];
    if (!parallaxItems.length) return;
    let ticking = false;
    const update = () => {
      parallaxItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const offset = rect.top * -0.08;
        item.style.transform = `scale(1.05) translate3d(0, ${offset}px, 0)`;
      });
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
    update();
  }

  function setupParticles() {
    document.querySelectorAll(".ambient-particles").forEach((container) => {
      if (container.children.length) return;
      for (let i = 0; i < 18; i += 1) {
        const particle = document.createElement("span");
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${90 + Math.random() * 30}%`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.animationDuration = `${10 + Math.random() * 10}s`;
        container.appendChild(particle);
      }
    });
  }

  function setupFeathers() {
    document.querySelectorAll(".feather-stream").forEach((container) => {
      if (container.children.length) return;
      for (let i = 0; i < 5; i += 1) {
        const feather = document.createElement("i");
        feather.setAttribute("data-lucide", "feather");
        feather.className = "h-8 w-8";
        feather.style.left = `${12 + i * 18}%`;
        feather.style.top = `${18 + (i % 3) * 14}%`;
        feather.style.animationDelay = `${i * 1.8}s`;
        container.appendChild(feather);
      }
    });
  }

  function finish() {
    document.querySelectorAll("[data-current-year]").forEach((item) => {
      item.textContent = new Date().getFullYear();
    });
    if (window.lucide) window.lucide.createIcons();
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme();
    applyDirection();
    buildHeader();
    buildFooter();
    buildBookingModal();
    buildLightbox();
    setupParticles();
    setupFeathers();
    setupEvents();
    setupRevealAndCounters();
    setupParallax();
    finish();
  });
})();
