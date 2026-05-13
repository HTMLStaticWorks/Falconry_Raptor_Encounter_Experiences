(function () {
  const navItems = [
    { label: "Home", href: "index.html" },
    { label: "Experiences", href: "experiences.html" },
    { label: "About", href: "about.html" },
    { label: "Bird Profiles", href: "bird-profiles.html" },
    { label: "Workshops", href: "workshops.html" },
    { label: "Photography", href: "photography-packages.html" },
    { label: "Contact", href: "contact.html" }
  ];

  const experiences = [
    "Private Falconry Encounter",
    "Raptor Encounter Tour",
    "Sunset Flying Demonstration",
    "Bird Handling Workshop",
    "Wildlife Photography Session",
    "Conservation Education Program"
  ];

  const icon = (name, className = "w-5 h-5") => `<i data-lucide="${name}" class="${className}" aria-hidden="true"></i>`;

  const featherSVG = (size = "w-5 h-5") => `<svg xmlns="http://www.w3.org/2000/svg" class="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>`;

  const currentPage = () => {
    const page = window.location.pathname.split("/").pop();
    return page || "index.html";
  };

  function buildHeader() {
    const active = currentPage();

    const navMarkup = navItems.map(item =>
      `<a class="nav-link ${active === item.href ? "active" : ""}" href="${item.href}">${item.label}</a>`
    ).join("");

    const mobileMarkup = navItems.map(item => 
      `<a class="mobile-nav-link ${active === item.href ? "active" : ""}" href="${item.href}">${item.label}</a>`
    ).join("");

    document.querySelectorAll('[data-component="site-header"]').forEach((mount) => {
      mount.innerHTML = `
        <header class="site-header" data-site-header>
          <div class="site-header-inner rounded-full px-3 py-2 lg:px-4">
            <div class="flex items-center justify-between gap-3">
              <div class="flex-1 flex items-center">
                <a href="index.html" class="flex items-center gap-2 text-ivory" aria-label="Falconry & Raptor Encounters home">
                  <span class="grid h-10 w-10 place-items-center rounded-full border border-bronze/50 bg-bronze/15 text-bronze">${featherSVG("w-5 h-5")}</span>
                  <span class="leading-tight hidden sm:block">
                    <span class="nav-brand-text block font-display text-base font-bold tracking-tight">Aerie Encounters</span>
                    <span class="nav-brand-sub block text-[10px]">Falconry & Raptors</span>
                  </span>
                </a>
              </div>
              <nav class="desktop-nav hidden flex-1 items-center justify-center gap-0.5 text-[13px] font-semibold xl:flex" aria-label="Primary navigation">
                ${navMarkup}
              </nav>
              <div class="flex-1 flex items-center justify-end gap-2">
                <div class="desktop-actions hidden items-center gap-2 xl:flex">
                  <button class="icon-btn !w-10 !h-10" type="button" data-search-open aria-label="Search site">${icon("search", "w-4 h-4")}</button>
                  <button class="icon-btn !w-10 !h-10" type="button" data-rtl-toggle aria-label="Toggle RTL">${icon("languages", "w-4 h-4")}</button>
                  <button class="icon-btn !w-10 !h-10" type="button" data-theme-toggle aria-label="Toggle dark mode">${icon("moon", "w-4 h-4")}</button>
                  <a href="login.html" class="icon-btn !w-10 !h-10 !bg-white/10 !border-white/20" aria-label="User account">${icon("user", "w-4 h-4")}</a>
                  <div class="h-6 w-px bg-white/10 mx-1"></div>
                  <button class="btn-primary !min-h-10 !py-1 !px-4 !text-xs" type="button" data-open-booking>${icon("calendar-check", "w-3 h-3")}<span>Book Experience</span></button>
                </div>
                <div class="flex items-center gap-2 xl:hidden">
                  <button class="icon-btn !w-10 !h-10" type="button" data-search-open aria-label="Search site">${icon("search", "w-4 h-4")}</button>
                  <button class="icon-btn !w-10 !h-10" type="button" data-menu-open aria-label="Open menu">${icon("menu", "w-4 h-4")}</button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="search-overlay" data-search-overlay>
          <div class="search-container site-shell">
            <div class="flex items-center gap-4 border-b border-white/20 pb-4">
              ${icon("search", "w-6 h-6 text-bronze")}
              <input type="text" class="search-input" placeholder="Search experiences, birds, or workshops..." autofocus>
              <button class="icon-btn" type="button" data-search-close>${icon("x")}</button>
            </div>
            <div class="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <p class="text-xs font-bold uppercase tracking-widest text-bronze mb-4">Quick Links</p>
                <div class="grid gap-2">
                  <a href="experiences.html" class="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <span class="w-8 h-8 grid place-items-center rounded-lg bg-bronze/10 text-bronze">${icon("map")}</span>
                    <span>All Experiences</span>
                  </a>
                  <a href="bird-profiles.html" class="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <span class="w-8 h-8 grid place-items-center rounded-lg bg-bronze/10 text-bronze">${icon("bird")}</span>
                    <span>Bird Profiles</span>
                  </a>
                  <a href="photography-packages.html" class="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <span class="w-8 h-8 grid place-items-center rounded-lg bg-bronze/10 text-bronze">${icon("camera")}</span>
                    <span>Photography</span>
                  </a>
                </div>
              </div>
              <div>
                <p class="text-xs font-bold uppercase tracking-widest text-bronze mb-4">Popular Searches</p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1.5 rounded-full border border-white/10 text-sm hover:border-bronze cursor-pointer transition-colors">Private Walk</span>
                  <span class="px-3 py-1.5 rounded-full border border-white/10 text-sm hover:border-bronze cursor-pointer transition-colors">Owl Encounter</span>
                  <span class="px-3 py-1.5 rounded-full border border-white/10 text-sm hover:border-bronze cursor-pointer transition-colors">Falconry Workshop</span>
                  <span class="px-3 py-1.5 rounded-full border border-white/10 text-sm hover:border-bronze cursor-pointer transition-colors">Gift Vouchers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside class="mobile-menu p-5" data-mobile-menu aria-label="Mobile navigation">
          <div class="mb-6 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="grid h-10 w-10 place-items-center rounded-full border border-bronze/50 bg-bronze/15 text-bronze">${featherSVG("w-5 h-5")}</span>
              <span class="mobile-menu-brand font-display text-xl font-bold">Aerie Encounters</span>
            </div>
            <button class="icon-btn" type="button" data-menu-close aria-label="Close menu">${icon("x")}</button>
          </div>
          <nav class="grid gap-1 overflow-y-auto max-h-[55vh]">${mobileMarkup}</nav>
          <div class="mt-auto pt-6 border-t border-white/10">
            <div class="grid gap-3">
              <button class="btn-primary !min-h-12 w-full" type="button" data-open-booking>${icon("calendar-check", "w-4 h-4")}Book Experience</button>
              <div class="flex items-center justify-between gap-2">
                <div class="flex gap-2">
                  <button class="icon-btn !w-11 !h-11" type="button" data-theme-toggle aria-label="Toggle theme">${icon("moon", "w-5 h-5")}</button>
                  <button class="icon-btn !w-11 !h-11" type="button" data-rtl-toggle aria-label="Toggle RTL">${icon("languages", "w-5 h-5")}</button>
                </div>
                <a href="login.html" class="icon-btn !w-11 !h-11 !bg-white/10 !border-white/20" aria-label="User account">${icon("user", "w-5 h-5")}</a>
              </div>
            </div>
          </div>
        </aside>
      `;
    });
  }

  function buildFooter() {
    const navLinksMarkup = navItems.map(item => 
      `<a class="footer-link flex items-center" href="${item.href}">${item.label}</a>`
    ).join("");

    document.querySelectorAll('[data-component="site-footer"]').forEach((mount) => {
      mount.innerHTML = `
        <footer class="footer-main">
          <div class="site-shell py-14">
            <div class="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
              <div>
                <div class="mb-6">
                  <a href="index.html" class="flex items-center gap-3">
                    <span class="grid h-12 w-12 place-items-center rounded-full border border-bronze/50 bg-bronze/15 text-bronze">${featherSVG("w-6 h-6")}</span>
                    <span class="leading-tight">
                      <span class="footer-brand-name block font-display text-2xl font-bold tracking-tight">Aerie Encounters</span>
                      <span class="footer-subtext block text-[11px] opacity-70">Falconry & Raptor Encounters</span>
                    </span>
                  </a>
                </div>
                <p class="footer-subtext max-w-xl">A cinematic eco-tourism experience shaped for curious travelers, photographers, families, and lifelong wildlife learners.</p>
              </div>
              <div>
                <h3 class="footer-heading">Explore</h3>
                <div class="grid grid-cols-2 gap-y-3 gap-x-6">${navLinksMarkup}</div>
              </div>
              <div>
                <h3 class="footer-heading">Plan Your Visit</h3>
                <div class="grid gap-3 text-sm footer-subtext mb-6">
                  <span class="flex items-center gap-2">${icon("map-pin", "w-4 h-4 text-bronze")}Oakridge Forest Reserve</span>
                  <span class="flex items-center gap-2">${icon("phone", "w-4 h-4 text-bronze")}+1 (555) 014-7827</span>
                  <span class="flex items-center gap-2">${icon("mail", "w-4 h-4 text-bronze")}hello@aerieencounters.example</span>
                </div>
                <h3 class="footer-heading !mb-4">Connect With Us</h3>
                <div class="flex gap-3">
                  <a class="icon-btn !w-11 !h-11 !bg-bronze/15 !text-bronze !border-bronze/30 hover:!bg-bronze hover:!text-midnight transition-all" href="https://www.instagram.com/" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a class="icon-btn !w-11 !h-11 !bg-bronze/15 !text-bronze !border-bronze/30 hover:!bg-bronze hover:!text-midnight transition-all" href="https://www.facebook.com/" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a class="icon-btn !w-11 !h-11 !bg-bronze/15 !text-bronze !border-bronze/30 hover:!bg-bronze hover:!text-midnight transition-all" href="https://www.youtube.com/" aria-label="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="mt-12 flex flex-col gap-3 border-t border-[var(--line)] pt-8 text-sm footer-subtext md:flex-row md:items-center md:justify-between">
              <p>© <span data-current-year></span> Aerie Encounters. Crafted for responsible wildlife experiences.</p>
              <div class="flex gap-6">
                <a href="#" class="hover:text-bronze transition-colors">Privacy Policy</a>
                <a href="#" class="hover:text-bronze transition-colors">Terms of Service</a>
              </div>
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
        <div class="border-b border-[var(--line)] p-8 text-center relative">
          <p class="kicker justify-center">Reservation Request</p>
          <h2 class="mt-3 font-display text-3xl font-bold">Book an Experience</h2>
          <p class="mt-2 section-copy mx-auto max-w-md">Tell us what you are dreaming of and our handler team will confirm availability.</p>
          <button class="icon-btn !border-[var(--line)] !text-[var(--ink)] absolute right-6 top-6" type="button" data-close-booking aria-label="Close booking modal">${icon("x")}</button>
        </div>
        <form class="grid gap-5 p-8" data-booking-form>
          <div class="grid gap-5 md:grid-cols-2">
            <label class="grid gap-2 text-sm font-bold">Name<input class="form-field" required placeholder="Your name"></label>
            <label class="grid gap-2 text-sm font-bold">Email<input class="form-field" type="email" required placeholder="you@example.com"></label>
          </div>
          <div class="grid gap-5 md:grid-cols-2">
            <label class="grid gap-2 text-sm font-bold">Experience<select class="form-field" required>${options}</select></label>
            <label class="grid gap-2 text-sm font-bold">Preferred Date<input class="form-field" type="date" required></label>
          </div>
          <label class="grid gap-2 text-sm font-bold">Message<textarea class="form-field min-h-32" placeholder="Guests, accessibility needs, photography goals, or gift notes"></textarea></label>
          <div class="flex justify-center mt-2">
            <button class="btn-primary !min-h-12 !px-10" type="submit">${icon("send", "w-4 h-4")}Send Request</button>
          </div>
          <p class="hidden rounded-xl border border-bronze/30 bg-bronze/10 p-4 text-sm font-semibold text-center" data-booking-success>Your request is staged for this demo. Connect this form to your booking service when you go live.</p>
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
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    
    // Initial icon state
    document.querySelectorAll("[data-theme-toggle]").forEach(btn => {
      btn.innerHTML = icon(isDark ? "sun" : "moon", btn.classList.contains("!w-10") ? "w-4 h-4" : "w-5 h-5");
    });
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
    const searchOverlay = document.querySelector("[data-search-overlay]");

    const closeMenu = () => mobileMenu && mobileMenu.classList.remove("open");
    const openBooking = () => bookingModal && bookingModal.classList.add("open");
    const closeBooking = () => bookingModal && bookingModal.classList.remove("open");
    const openSearch = () => searchOverlay && searchOverlay.classList.add("open");
    const closeSearch = () => searchOverlay && searchOverlay.classList.remove("open");

    document.addEventListener("click", (event) => {
      const target = event.target.closest("button, a, [data-lightbox]");
      if (!target) return;

      if (target.matches("[data-menu-open]")) mobileMenu && mobileMenu.classList.add("open");
      if (target.matches("[data-menu-close]")) closeMenu();
      if (target.matches(".mobile-menu a")) closeMenu();

      if (target.matches("[data-search-open]")) openSearch();
      if (target.matches("[data-search-close]")) closeSearch();

      if (target.matches("[data-theme-toggle]")) {
        const isDark = document.documentElement.classList.toggle("dark");
        localStorage.setItem("aerie-theme", isDark ? "dark" : "light");
        
        // Dynamic icon update
        document.querySelectorAll("[data-theme-toggle]").forEach(btn => {
          btn.innerHTML = icon(isDark ? "sun" : "moon", btn.classList.contains("!w-10") ? "w-4 h-4" : "w-5 h-5");
        });
        if (window.lucide) window.lucide.createIcons();
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

    searchOverlay && searchOverlay.addEventListener("click", (event) => {
      if (event.target === searchOverlay) closeSearch();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeSearch();
        closeBooking();
        closeMenu();
      }
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        openSearch();
      }
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
