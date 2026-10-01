/**
 * KAHATAH STUDIOS - Interactive Engine & Modern Web Experience
 * Located in Karatina Town, Nyeri County | The Home of Quality Assurance
 * CEO: Kahatah Finnest | Phone & WhatsApp: 0115824621 (+254115824621)
 */

// Portfolio Data with Curation & Camera EXIF Details
const PORTFOLIO_DATA = [
  {
    id: 2,
    title: "Editorial Haute Silhouette",
    category: "editorial",
    categoryLabel: "Editorial & Fashion",
    location: "Kahatah Studios, Karatina Town",
    date: "2026 Studio Series",
    camera: "Hasselblad X2D 100C",
    lens: "XCD 80mm f/1.9",
    settings: "1/400s \u2022 f/2.0 \u2022 ISO 100",
    client: "Vogue Africa Editorial",
    image: "images/photo2.jpg",
    fallback: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85",
    description: "Sculptural lighting and flawless skin tones crafted inside Kahatah Studios.",
    featured: false
  },
  {
    id: 3,
    title: "The Visionary Solo Portrait",
    category: "portraits",
    categoryLabel: "Portraits & Studio",
    location: "Kahatah Studios, Karatina",
    date: "Executive Series 2026",
    camera: "Sony Alpha 1",
    lens: "FE 85mm f/1.2 GM",
    settings: "1/250s \u2022 f/1.4 \u2022 ISO 200",
    client: "Dr. Kariuki (CEO)",
    image: "images/photo3.jpg",
    fallback: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
    description: "High-end chiaroscuro studio portrait celebrating poise, ambition, and authentic character.",
    featured: false
  },
  {
    id: 4,
    title: "Whispering Waters Engagement",
    category: "couples",
    categoryLabel: "Couples & Engagements",
    location: "Sagana Falls & River Valley",
    date: "Spring 2026",
    camera: "Leica SL2-S",
    lens: "APO-Summicron 50mm f/2",
    settings: "1/2000s \u2022 f/2.8 \u2022 ISO 50",
    client: "Faith & Brian",
    image: "images/42.jpg",
    fallback: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85",
    description: "Raw cinematic movement amidst flowing rivers and sunset rocks in the Mt. Kenya region.",
    featured: true
  },
    { id: 5, title: "Nyeri Gala Celebration", category: "events", categoryLabel: "Events & Galas", location: "Nyeri County", date: "2026", camera: "Sony A7R V", lens: "FE 24-70mm f/2.8", settings: "1/160s \u2022 f/2.8 \u2022 ISO 1600", client: "Kahatah Studios", image: "images/45.jpg", description: "Vibrant high-energy gala moments.", featured: true },
  { id: 51, title: "Corporate Summit", category: "events", categoryLabel: "Events & Galas", location: "Karatina", date: "2026", camera: "Sony A7R V", lens: "FE 70-200mm f/2.8", settings: "1/200s \u2022 f/2.8 \u2022 ISO 800", client: "Kahatah Studios", image: "images/46.jpg", description: "Professional corporate event coverage.", featured: false },
  { id: 52, title: "Cultural Festival", category: "events", categoryLabel: "Events & Galas", location: "Nyeri", date: "2026", camera: "Sony A7R V", lens: "FE 35mm f/1.4", settings: "1/250s \u2022 f/1.4 \u2022 ISO 400", client: "Kahatah Studios", image: "images/47.jpg", description: "Capturing the vibrant culture and traditions of our region.", featured: false },
  { id: 53, title: "The Executive Banquet", category: "events", categoryLabel: "Events & Galas", location: "Kahatah Studios", date: "2026", camera: "Sony A7R V", lens: "FE 24-70mm f/2.8", settings: "1/125s \u2022 f/2.8 \u2022 ISO 3200", client: "Kahatah Studios", image: "images/48.jpg", description: "Elegant moments at the executive banquet.", featured: false },
  { id: 54, title: "Award Ceremony", category: "events", categoryLabel: "Events & Galas", location: "Nyeri County Prestige Ballroom", date: "2026", camera: "Sony A7R V", lens: "FE 85mm f/1.4", settings: "1/200s \u2022 f/1.8 \u2022 ISO 1600", client: "Kahatah Studios", image: "images/49.jpg", description: "Emotional award presentations captured with crystal clarity.", featured: false },
  {
    id: 7,
    title: "Afro-Contemporary Fashion Study",
    category: "editorial",
    categoryLabel: "Editorial & Fashion",
    location: "Kahatah Studios, Karatina",
    date: "Fashion Lookbook 2026",
    camera: "Hasselblad X2D 100C",
    lens: "XCD 120mm f/3.5 Macro",
    settings: "1/125s \u2022 f/8.0 \u2022 ISO 64",
    client: "Bespoke Couture Kenya",
    image: "images/photo7.jpg",
    fallback: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85",
    description: "African heritage silhouettes and modern editorial styling directed by Kahatah Finnest.",
    featured: false
  },
  {
    id: 8,
    title: "The Creative Entrepreneur",
    category: "portraits",
    categoryLabel: "Portraits & Studio",
    location: "Kahatah Studios Loft, Karatina",
    date: "2026",
    camera: "Sony A7R V",
    lens: "FE 50mm f/1.2 GM",
    settings: "1/500s \u2022 f/1.4 \u2022 ISO 100",
    client: "Anthony Mwangi",
    image: "images/photo8.jpg",
    fallback: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85",
    description: "Clean, confident headshot reflecting leadership, innovation, and supreme professionalism.",
    featured: false
  },
  {
    id: 9,
    title: "Aberdare Sunset Twilight",
    category: "couples",
    categoryLabel: "Couples & Engagements",
    location: "Aberdare Ranges, Nyeri",
    date: "Summer 2026",
    camera: "Leica SL2-S",
    lens: "Vario-Elmarit 24-90mm",
    settings: "1/640s \u2022 f/3.5 \u2022 ISO 200",
    client: "Mercy & James",
    image: "images/52.jpg",
    fallback: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1600&q=85",
    description: "Dramatic mountain mist and sun rays illuminating a couple walking hand-in-hand in the high moorlands.",
    featured: true
  },
    // Weddings & Love -- Real Studio Photos (30.jpg to 43.jpg)
  { id: 10, title: "Love in Full Bloom", category: "weddings", categoryLabel: "Weddings & Love", location: "Karatina Town", date: "2026", camera: "Canon EOS R5", lens: "RF 85mm f/1.2L", settings: "1/800s \u2022 f/1.4 \u2022 ISO 100", client: "Kahatah Studios", image: "images/30.jpg", description: "Tender love moments bathed in natural light, captured with precision.", featured: true },
  { id: 11, title: "Forever Begins Here", category: "weddings", categoryLabel: "Weddings & Love", location: "Nyeri County", date: "2026", camera: "Canon EOS R5", lens: "RF 50mm f/1.2L", settings: "1/500s \u2022 f/1.6 \u2022 ISO 200", client: "Kahatah Studios", image: "images/31.jpg", description: "A stunning bridal moment caught in timeless elegance.", featured: false },
  { id: 12, title: "Vows Under Open Skies", category: "weddings", categoryLabel: "Weddings & Love", location: "Karatina", date: "2026", camera: "Canon EOS R5", lens: "RF 35mm f/1.8", settings: "1/1000s \u2022 f/2.0 \u2022 ISO 64", client: "Kahatah Studios", image: "images/32.jpg", description: "Emotional vow exchanges framed by the sweeping Central Kenya landscape.", featured: false },
  { id: 13, title: "The Bridal Glow", category: "weddings", categoryLabel: "Weddings & Love", location: "Kahatah Studios", date: "2026", camera: "Canon EOS R5", lens: "RF 85mm f/1.2L", settings: "1/400s \u2022 f/1.4 \u2022 ISO 100", client: "Kahatah Studios", image: "images/33.jpg", description: "Radiant bride, soft window light, and the magic of a moment preserved forever.", featured: false },
  { id: 14, title: "A Union to Remember", category: "weddings", categoryLabel: "Weddings & Love", location: "Nyeri County", date: "2026", camera: "Canon EOS R5", lens: "RF 24-70mm f/2.8L", settings: "1/640s \u2022 f/2.8 \u2022 ISO 200", client: "Kahatah Studios", image: "images/34.jpg", description: "Two hearts united -- a beautiful wedding ceremony captured.", featured: false },
  { id: 15, title: "Romance at Dusk", category: "weddings", categoryLabel: "Weddings & Love", location: "Karatina Region", date: "2026", camera: "Canon EOS R5", lens: "RF 70-200mm f/2.8L", settings: "1/320s \u2022 f/2.8 \u2022 ISO 400", client: "Kahatah Studios", image: "images/35.jpg", description: "Dusk light wraps around the couple in a golden embrace.", featured: false },
  { id: 16, title: "The First Dance", category: "weddings", categoryLabel: "Weddings & Love", location: "Nyeri County", date: "2026", camera: "Canon EOS R5", lens: "RF 85mm f/1.2L", settings: "1/200s \u2022 f/1.6 \u2022 ISO 800", client: "Kahatah Studios", image: "images/36.jpg", description: "The emotion of the first dance -- every glance, every smile immortalised.", featured: false },
  { id: 17, title: "Royal Bridal Portraits", category: "weddings", categoryLabel: "Weddings & Love", location: "Kahatah Studios", date: "2026", camera: "Canon EOS R5", lens: "RF 50mm f/1.2L", settings: "1/500s \u2022 f/1.4 \u2022 ISO 100", client: "Kahatah Studios", image: "images/37.jpg", description: "Majestic bridal portraiture -- grace, elegance, and hallmark quality.", featured: true },
  { id: 18, title: "Our Story Continues", category: "weddings", categoryLabel: "Weddings & Love", location: "Nyeri County", date: "2026", camera: "Canon EOS R5", lens: "RF 35mm f/1.8", settings: "1/800s \u2022 f/2.0 \u2022 ISO 200", client: "Kahatah Studios", image: "images/38.jpg", description: "A couple's love story written in light -- intimate and genuine.", featured: false },
  { id: 19, title: "Eternal Promises", category: "weddings", categoryLabel: "Weddings & Love", location: "Karatina Town", date: "2026", camera: "Canon EOS R5", lens: "RF 85mm f/1.2L", settings: "1/1000s \u2022 f/1.4 \u2022 ISO 64", client: "Kahatah Studios", image: "images/39.jpg", description: "Timeless wedding elegance -- a vow of forever.", featured: false },
  { id: 20, title: "The Grand Wedding Finale", category: "weddings", categoryLabel: "Weddings & Love", location: "Karatina", date: "2026", camera: "Canon EOS R5", lens: "RF 24-70mm f/2.8L", settings: "1/400s \u2022 f/2.8 \u2022 ISO 320", client: "Kahatah Studios", image: "images/40.jpg", description: "The perfect grand finale -- a couple's biggest day preserved.", featured: false },
  { id: 21, title: "Joyful Celebration", category: "weddings", categoryLabel: "Weddings & Love", location: "Nyeri County", date: "2026", camera: "Canon EOS R5", lens: "RF 50mm f/1.2L", settings: "1/500s \u2022 f/1.4 \u2022 ISO 100", client: "Kahatah Studios", image: "images/41.jpg", description: "Joyful moments and shared laughter.", featured: false },
  { id: 22, title: "The Wedding Party", category: "weddings", categoryLabel: "Weddings & Love", location: "Karatina", date: "2026", camera: "Canon EOS R5", lens: "RF 24-70mm f/2.8L", settings: "1/800s \u2022 f/2.8 \u2022 ISO 200", client: "Kahatah Studios", image: "images/42.jpg", description: "The vibrant energy of the wedding party celebrating love.", featured: false },
  { id: 23, title: "A New Chapter", category: "weddings", categoryLabel: "Weddings & Love", location: "Kahatah Studios", date: "2026", camera: "Canon EOS R5", lens: "RF 85mm f/1.2L", settings: "1/1000s \u2022 f/1.4 \u2022 ISO 100", client: "Kahatah Studios", image: "images/43.jpg", description: "Stepping into a new beautiful chapter of life together.", featured: true }
];
// Package Pricing Master (Baseline in KES - Kenyan Shillings)
const PACKAGE_DATA = {
  portrait: {
    id: "portrait",
    name: "The Executive Portrait",
    tier: "Individual Collection",
    priceKES: 2400,
    duration: "60â€“90 Minutes Session",
    inclusions: "12 Master Retouched high-res images â€¢ 2 Outfits â€¢ In-Studio (Karatina) or outdoor location â€¢ Quality Assured"
  },
  signature: {
    id: "signature",
    name: "The Signature Love",
    tier: "Couples & Engagements",
    priceKES: 12000,
    duration: "2.5 Hours (Sunset Magic)",
    inclusions: "40 Master-Retouched Images â€¢ 2 Outfits & Locations â€¢ Drone Aerial Shots â€¢ 1 Framed Archival Print (A3)"
  },
  wedding: {
    id: "wedding",
    name: "The Grand Royal Wedding",
    tier: "Full Wedding & Luxury",
    priceKES: 45000,
    duration: "Full Day (Up to 10 Hours)",
    inclusions: "350+ High-Res Deliverables â€¢ Two Master Shooters â€¢ Luxury Mounted Photo Album â€¢ Same-Week Sneak Peeks"
  },
  commercial: {
    id: "commercial",
    name: "Commercial & Corporate Gala",
    tier: "Brands, Galas & Events",
    priceKES: 25000,
    duration: "Half-Day (Up to 5 Hours)",
    inclusions: "100+ Commercial High-Res Deliverables â€¢ Full Advertising License â€¢ 48h Turnaround â€¢ 4K Video Reel"
  }
};

// Addons in KES
const ADDONS_DATA = {
  drone: 5000,
  album: 8000,
  extra_hour: 3000,
  rush: 4000
};

// Currency conversion rates (KES base)
const CURRENCY_CONFIG = {
  KES: { symbol: "KSh ", rate: 1.0 },
  USD: { symbol: "$", rate: 0.0077 },
  EUR: { symbol: "â‚¬", rate: 0.0071 },
  GBP: { symbol: "Â£", rate: 0.0061 }
};

let currentCurrency = "KES";
let activeLightboxIndex = 0;
let isZoomed = false;

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderPortfolioGrid("all");
  initPortfolioFilters();
  initLightbox();
  initCurrencySelector();
  initAddonsCalculator();
  initBookingEngine();
  initFaqAccordion();
  initHeaderScroll();
  initPortalManager();
  initMobileNav();
  setupSmoothScroll();
  updateAllPricingDisplays();
});

/* ==========================================================================
   Theme Management (Obsidian / Light Luxury)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("kahatah_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("kahatah_theme", next);
      showToast(`Switched to ${next === "dark" ? "Obsidian Dark" : "Alabaster Light"} mode`);
    });
  }
}

/* ==========================================================================
   Header Scroll Behaviour
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });
}

/* ==========================================================================
   Mobile Navigation Toggle
   ========================================================================== */
function initMobileNav() {
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });
  }
}

/* ==========================================================================
   Portfolio Rendering & Filtering
   ========================================================================== */
function renderPortfolioGrid(filter) {
  const grid = document.getElementById("portfolioGrid");
  if (!grid) return;

  grid.innerHTML = "";
  const filtered = filter === "all"
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(item => item.category === filter);

  filtered.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = `portfolio-card ${item.featured ? "featured" : ""}`;
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View photo: ${item.title}`);

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title} - ${item.categoryLabel} by Kahatah Studios" class="portfolio-img" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='${item.fallback}';">
      <div class="portfolio-overlay">
        <span class="portfolio-category">${item.categoryLabel}</span>
        <h3 class="portfolio-card-title">${item.title}</h3>
        <div class="portfolio-meta">
          <span><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>${item.location}</span>
          <span>â€¢</span>
          <span>${item.camera}</span>
        </div>
        <div class="portfolio-actions">
          <button class="btn btn-sm btn-primary view-lightbox-btn" data-id="${item.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            Inspect Art
          </button>
          <button class="btn btn-sm btn-outline quick-book-style" data-category="${item.category}">
            Book Style
          </button>
        </div>
      </div>
    `;

    card.addEventListener("click", (e) => {
      if (e.target.closest(".quick-book-style")) {
        const cat = e.target.closest(".quick-book-style").getAttribute("data-category");
        preselectBookingByCategory(cat);
        return;
      }
      openLightbox(PORTFOLIO_DATA.findIndex(p => p.id === item.id));
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(PORTFOLIO_DATA.findIndex(p => p.id === item.id));
      }
    });

    grid.appendChild(card);
  });
}

function initPortfolioFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderPortfolioGrid(category);
    });
  });
}

/* ==========================================================================
   Lightbox System
   ========================================================================== */
function initLightbox() {
  const dialog = document.getElementById("lightboxDialog");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");
  const zoomBtn = document.getElementById("lightboxZoom");
  const bookStyleBtn = document.getElementById("lightboxBookBtn");
  const lightImg = document.getElementById("lightboxImg");

  if (!dialog) return;

  closeBtn?.addEventListener("click", () => closeLightbox());
  prevBtn?.addEventListener("click", () => navigateLightbox(-1));
  nextBtn?.addEventListener("click", () => navigateLightbox(1));

  zoomBtn?.addEventListener("click", () => {
    isZoomed = !isZoomed;
    lightImg.classList.toggle("zoomed", isZoomed);
    zoomBtn.textContent = isZoomed ? "Zoom Out 1x" : "Zoom 1.6x";
  });

  bookStyleBtn?.addEventListener("click", () => {
    const item = PORTFOLIO_DATA[activeLightboxIndex];
    closeLightbox();
    preselectBookingByCategory(item.category);
  });

  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!dialog.open) return;
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
    if (e.key === "Escape") closeLightbox();
  });
}

function openLightbox(index) {
  const dialog = document.getElementById("lightboxDialog");
  if (!dialog) return;
  activeLightboxIndex = (index + PORTFOLIO_DATA.length) % PORTFOLIO_DATA.length;
  updateLightboxContent();
  dialog.showModal();
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const dialog = document.getElementById("lightboxDialog");
  const lightImg = document.getElementById("lightboxImg");
  const zoomBtn = document.getElementById("lightboxZoom");
  if (dialog) dialog.close();
  isZoomed = false;
  if (lightImg) lightImg.classList.remove("zoomed");
  if (zoomBtn) zoomBtn.textContent = "Zoom 1.6x";
  document.body.style.overflow = "";
}

function navigateLightbox(step) {
  activeLightboxIndex = (activeLightboxIndex + step + PORTFOLIO_DATA.length) % PORTFOLIO_DATA.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = PORTFOLIO_DATA[activeLightboxIndex];
  if (!item) return;

  const lightImg = document.getElementById("lightboxImg");
  const title = document.getElementById("lightboxTitle");
  const cat = document.getElementById("lightboxCat");
  const desc = document.getElementById("lightboxDesc");
  const client = document.getElementById("lightboxClient");
  const loc = document.getElementById("lightboxLocation");
  const camera = document.getElementById("lightboxCamera");
  const lens = document.getElementById("lightboxLens");
  const settings = document.getElementById("lightboxSettings");

  if (lightImg) {
    lightImg.src = item.image;
    lightImg.onerror = function() { this.src = item.fallback; };
    lightImg.alt = item.title;
    lightImg.classList.remove("zoomed");
    isZoomed = false;
    const zoomBtn = document.getElementById("lightboxZoom");
    if (zoomBtn) zoomBtn.textContent = "Zoom 1.6x";
  }

  if (title) title.textContent = item.title;
  if (cat) cat.textContent = item.categoryLabel;
  if (desc) desc.textContent = item.description;
  if (client) client.textContent = item.client;
  if (loc) loc.textContent = item.location;
  if (camera) camera.textContent = item.camera;
  if (lens) lens.textContent = item.lens;
  if (settings) settings.textContent = item.settings;
}

/* ==========================================================================
   Pricing, Currency & Add-ons Calculator
   ========================================================================== */
function initCurrencySelector() {
  const buttons = document.querySelectorAll(".currency-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCurrency = btn.getAttribute("data-currency");
      updateAllPricingDisplays();
      updateBookingSummary();
      showToast(`Pricing updated to ${currentCurrency}`);
    });
  });
}

function formatPrice(amountKES) {
  const cfg = CURRENCY_CONFIG[currentCurrency];
  const converted = Math.round(amountKES * cfg.rate);
  return `${cfg.symbol}${converted.toLocaleString()}`;
}

function updateAllPricingDisplays() {
  // Update Package Cards based on KES baseline
  document.querySelectorAll("[data-base-price-kes]").forEach(el => {
    const base = parseFloat(el.getAttribute("data-base-price-kes"));
    const cfg = CURRENCY_CONFIG[currentCurrency];
    const converted = Math.round(base * cfg.rate);
    el.textContent = converted.toLocaleString();
  });

  document.querySelectorAll(".price-currency").forEach(el => {
    el.textContent = CURRENCY_CONFIG[currentCurrency].symbol;
  });

  // Update Addon labels
  document.querySelectorAll("[data-addon-price-kes]").forEach(el => {
    const base = parseFloat(el.getAttribute("data-addon-price-kes"));
    el.textContent = `+${formatPrice(base)}`;
  });
}

function initAddonsCalculator() {
  const checkboxes = document.querySelectorAll(".addon-checkbox");
  checkboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      calculateAddonsTotal();
      updateBookingSummary();
    });
  });
}

function calculateAddonsTotal() {
  let addonsSumKES = 0;
  document.querySelectorAll(".addon-checkbox:checked").forEach(cb => {
    addonsSumKES += parseFloat(cb.getAttribute("data-price-kes") || 0);
  });
  const totalEl = document.getElementById("addonsCalculatedTotal");
  if (totalEl) {
    totalEl.textContent = formatPrice(addonsSumKES);
  }
  return addonsSumKES;
}

/* ==========================================================================
   Booking Engine & Dynamic Summary
   ========================================================================== */
function initBookingEngine() {
  const packageSelect = document.getElementById("bookingPackageSelect");
  const form = document.getElementById("bookingForm");
  const dateInput = document.getElementById("bookingDate");

  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split("T")[0];
  }

  document.querySelectorAll(".select-package-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const pkgKey = btn.getAttribute("data-package");
      selectPackageAndScroll(pkgKey);
    });
  });

  if (packageSelect) {
    packageSelect.addEventListener("change", () => {
      updateBookingSummary();
    });
  }

  document.querySelectorAll("input[name='timeSlot']").forEach(radio => {
    radio.addEventListener("change", () => {
      updateBookingSummary();
    });
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      handleBookingSubmission();
    });
  }

  updateBookingSummary();
}

function selectPackageAndScroll(pkgKey) {
  const packageSelect = document.getElementById("bookingPackageSelect");
  if (packageSelect) {
    packageSelect.value = pkgKey;
    updateBookingSummary();
  }
  const bookingSec = document.getElementById("booking");
  if (bookingSec) {
    bookingSec.scrollIntoView({ behavior: "smooth" });
  }
  showToast(`Selected "${PACKAGE_DATA[pkgKey]?.name}". Customize your Karatina session below.`);
}

function preselectBookingByCategory(category) {
  const map = {
    weddings: "wedding",
    couples: "signature",
    portraits: "portrait",
    editorial: "portrait",
    events: "commercial"
  };
  const pkg = map[category] || "signature";
  selectPackageAndScroll(pkg);
}

function updateBookingSummary() {
  const packageSelect = document.getElementById("bookingPackageSelect");
  const selectedPkgKey = packageSelect ? packageSelect.value : "signature";
  const pkg = PACKAGE_DATA[selectedPkgKey] || PACKAGE_DATA.signature;

  const sumPkgName = document.getElementById("summaryPackageName");
  const sumPkgPrice = document.getElementById("summaryPackagePrice");
  const sumDuration = document.getElementById("summaryDuration");
  const sumInclusions = document.getElementById("summaryInclusions");
  const sumAddons = document.getElementById("summaryAddons");
  const sumGrandTotal = document.getElementById("summaryGrandTotal");

  const addonsTotalKES = calculateAddonsTotal();
  const grandTotalKES = pkg.priceKES + addonsTotalKES;

  if (sumPkgName) sumPkgName.textContent = pkg.name;
  if (sumPkgPrice) sumPkgPrice.textContent = formatPrice(pkg.priceKES);
  if (sumDuration) sumDuration.textContent = pkg.duration;
  if (sumInclusions) sumInclusions.textContent = pkg.inclusions;
  if (sumAddons) sumAddons.textContent = addonsTotalKES > 0 ? `+${formatPrice(addonsTotalKES)}` : "None";
  if (sumGrandTotal) sumGrandTotal.textContent = formatPrice(grandTotalKES);
}

function handleBookingSubmission() {
  const form = document.getElementById("bookingForm");
  const fullName = document.getElementById("clientName")?.value.trim();
  const email = document.getElementById("clientEmail")?.value.trim();
  const phone = document.getElementById("clientPhone")?.value.trim();
  const date = document.getElementById("bookingDate")?.value;
  const timeSlot = document.querySelector("input[name='timeSlot']:checked")?.value || "Golden Hour";
  const locationPref = document.getElementById("locationPref")?.value || "Kahatah Studios (Karatina Town)";
  const notes = document.getElementById("clientNotes")?.value.trim() || "No special notes provided";
  const packageKey = document.getElementById("bookingPackageSelect")?.value;
  const pkg = PACKAGE_DATA[packageKey] || PACKAGE_DATA.signature;

  const selectedAddons = [];
  document.querySelectorAll(".addon-checkbox:checked").forEach(cb => {
    selectedAddons.push(cb.getAttribute("data-name"));
  });

  const grandTotalKES = pkg.priceKES + calculateAddonsTotal();
  const grandTotalFormatted = formatPrice(grandTotalKES);

  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const bookingRef = `KHT-2026-${randomSuffix}`;

  const bookingRecord = {
    ref: bookingRef,
    timestamp: new Date().toISOString(),
    clientName: fullName,
    email: email,
    phone: phone,
    date: date,
    timeSlot: timeSlot,
    location: locationPref,
    package: pkg.name,
    addons: selectedAddons,
    total: grandTotalFormatted,
    notes: notes,
    status: "Confirmed (Logged at Karatina Studio)"
  };

  saveBookingToStorage(bookingRecord);
  showBookingConfirmationModal(bookingRecord);
  form.reset();
  updateBookingSummary();
}

function showBookingConfirmationModal(record) {
  const dialog = document.getElementById("confirmationDialog");
  if (!dialog) return;

  document.getElementById("modalRefCode").textContent = record.ref;
  document.getElementById("modalClientName").textContent = record.clientName;
  document.getElementById("modalPackage").textContent = record.package;
  document.getElementById("modalDateTime").textContent = `${record.date} â€¢ ${record.timeSlot}`;
  document.getElementById("modalTotal").textContent = record.total;

  const icsBtn = document.getElementById("downloadIcsBtn");
  if (icsBtn) {
    icsBtn.onclick = () => generateCalendarInvite(record);
  }

  // Set up WhatsApp Direct Chat with CEO Kahatah Finnest at 0115824621 (+254115824621)
  const waBtn = document.getElementById("whatsappConfirmBtn");
  if (waBtn) {
    const waText = encodeURIComponent(
      `Hello Kahatah Studios (CEO Kahatah Finnest)! I have just submitted a reservation ${record.ref} for "${record.package}" on ${record.date} (${record.timeSlot}) at ${record.location}. My name is ${record.clientName}, Phone: ${record.phone}. Looking forward to quality assurance photography!`
    );
    waBtn.href = `https://wa.me/254115824621?text=${waText}`;
  }

  dialog.showModal();
}

/* ==========================================================================
   Calendar Invite Generator (.ics)
   ========================================================================== */
function generateCalendarInvite(record) {
  const dateParts = record.date ? record.date.replace(/-/g, "") : "20261015";
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Kahatah Studios//The Home of Quality Assurance//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `UID:${record.ref}@kahatahstudios.co.ke`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:.]/g, "").slice(0, 15)}Z`,
    `DTSTART:${dateParts}T140000Z`,
    `DTEND:${dateParts}T170000Z`,
    `SUMMARY:Kahatah Studios: ${record.package}`,
    `DESCRIPTION:Session Ref: ${record.ref}\\nPackage: ${record.package}\\nClient: ${record.clientName}\\nLocation: ${record.location}\\nContact: 0115824621\\nKahatah Studios â€” The Home of Quality Assurance`,
    `LOCATION:${record.location}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", `${record.ref}-Kahatah-Studios.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("Calendar event downloaded (.ics)");
}

/* ==========================================================================
   Studio Portal / Client Inquiries Storage Manager
   ========================================================================== */
function saveBookingToStorage(record) {
  const bookings = getStoredBookings();
  bookings.unshift(record);
  localStorage.setItem("kahatah_bookings", JSON.stringify(bookings));
}

function getStoredBookings() {
  try {
    const raw = localStorage.getItem("kahatah_bookings");
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    return [];
  }
}

function initPortalManager() {
  const portalBtn = document.getElementById("openPortalBtn");
  const portalDialog = document.getElementById("portalDialog");
  const portalClose = document.getElementById("portalClose");
  const clearBtn = document.getElementById("clearBookingsBtn");

  if (!portalBtn || !portalDialog) return;

  portalBtn.addEventListener("click", () => {
    renderPortalBookings();
    portalDialog.showModal();
  });

  portalClose?.addEventListener("click", () => portalDialog.close());

  clearBtn?.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear logged bookings on this device?")) {
      localStorage.removeItem("kahatah_bookings");
      renderPortalBookings();
      showToast("Bookings registry cleared");
    }
  });
}

function renderPortalBookings() {
  const container = document.getElementById("portalBookingsList");
  if (!container) return;

  const bookings = getStoredBookings();
  if (bookings.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-muted);">
        <p style="font-size: 1.1rem; margin-bottom: 8px;">No active bookings found.</p>
        <p style="font-size: 0.85rem;">Submit a reservation through the booking studio to see it registered here.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = bookings.map(b => `
    <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 18px; margin-bottom: 12px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <span style="color: var(--text-gold); font-weight: 700; font-family: var(--font-display);">${b.ref}</span>
        <span style="font-size: 0.75rem; background: rgba(212,175,55,0.1); color: var(--text-gold); padding: 3px 10px; border-radius: 999px;">${b.status}</span>
      </div>
      <h4 style="font-size: 1.1rem; margin-bottom: 4px; color: var(--text-main);">${b.clientName} â€” <span style="font-weight: 400; color: var(--text-muted);">${b.package}</span></h4>
      <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 6px;">ðŸ“… Date: <strong>${b.date}</strong> (${b.timeSlot}) â€¢ ðŸ“ ${b.location} â€¢ ðŸ’° ${b.total}</p>
      <p style="font-size: 0.8rem; color: var(--text-dim);">âœ‰ï¸ ${b.email} | ðŸ“ž ${b.phone}</p>
    </div>
  `).join("");
}

/* ==========================================================================
   FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    questionBtn?.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      items.forEach(i => i.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

/* ==========================================================================
   Smooth Scrolling for Anchors
   ========================================================================== */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector(".newsletter-input");
      if (input && input.value) {
        showToast("Thank you for subscribing to Kahatah Studios announcements.");
        input.value = "";
      }
    });
  }
}

/* ==========================================================================
   Toast Notification Utility
   ========================================================================== */
function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#d4af37"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}


/* ==========================================================================
   Social Media Links
   ========================================================================== */
const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/search/top?q=kahatah+finest+photography",
  tiktok: "https://www.tiktok.com/@kahatah_thee_finest",
  instagram: "https://www.instagram.com/kahatahphotography",
  whatsapp: "https://wa.me/254115824621",
  googlemaps: "https://www.google.com/maps/search/?api=1&query=Kahatah+Studios+Karatina+Town+Nyeri+County+Kenya"
};

/* ==========================================================================
   WhatsApp Inquiry from Contact Page
   ========================================================================== */
function sendWhatsAppInquiry() {
  var name = (document.getElementById("contactSenderName") ? document.getElementById("contactSenderName").value : "").trim();
  var shootType = document.getElementById("contactShootType") ? document.getElementById("contactShootType").value : "General Inquiry";
  var message = (document.getElementById("contactSenderMsg") ? document.getElementById("contactSenderMsg").value : "").trim();

  if (!name || !message) {
    showToast("Please fill in your name and message before sending.");
    return;
  }

  var text = encodeURIComponent(
    "Hello Kahatah Studios! My name is " + name + ".\n\nShoot Type: " + shootType + "\n\nMessage: " + message + "\n\n-- Sent via Kahatah Studios Website"
  );
  window.open("https://wa.me/254115824621?text=" + text, "_blank");
  showToast("Opening WhatsApp with your message...");
}






