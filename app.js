/**
 * WIN WINS IMPEX — OVERHAULED V2 CONTROLLER
 * Enhanced with:
 * 1. 12 Core Export Lines & Technical Dataset
 * 2. High-End Interactive Touch & Drag Garment Carousel with Autoplay & Dots
 * 3. Scroll Reveal Animations (IntersectionObserver)
 * 4. Animated Metric Counter (200K, 50,000, 100%)
 * 5. Dynamic Sticky Header with Glassmorphism & Scroll-Spy
 * 6. Composite Category Pills & Live Keyword Filter
 * 7. In-Page Single-Page Technical Spec Inspector Modal
 * 8. RFQ Inquiry Modal & Smooth Policy Accordions
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. PRODUCT CATALOG DATASET (12 CORE PROGRAMS)
  // =========================================================================
  const productCatalog = {
    'polos': {
      id: 'polos',
      title: 'Signature Combed Piqué Polo',
      badge: 'Flagship Polo',
      category: 'polos',
      categoryLabel: "MEN'S POLOS & MERCERIZED KNITS",
      weightClass: 'mid',
      sku: 'WW-POLO-240P',
      gsm: '240 GSM (± 3% tolerance)',
      yarn: '2/40s Ne Compact Ring-Spun Combed Cotton',
      weave: 'Honeycomb Structured Single Piqué Knit',
      shrinkage: '< 3.0% Length / < 2.0% Width (AATCC 135)',
      fastness: 'Grade 4.5 Commercial Wash & Perspiration',
      dye: 'OEKO-TEX Class 1 Eco-Reactive Dye (ZDHC Level 3)',
      moq: '1,000 Units per colorway / 2,500 per program',
      image: 'assets/images/prod_polo_signature.jpg',
      desc: 'Engineered in our Tirupur facility with anti-curl flat knit jacquard collar, reinforced shoulder tape, and real trocas shell buttons. Developed for premium European and American department retail labels.',
      colors: ['#14233c', '#1a1a1a', '#e8e5dc', '#2a3d31', '#6a1b29']
    },
    'polos-tipped': {
      id: 'polos-tipped',
      title: 'Engineered Tipped Tennis Polo',
      badge: 'Tipped Polo',
      category: 'polos',
      categoryLabel: "MEN'S POLOS & MERCERIZED KNITS",
      weightClass: 'mid',
      sku: 'WW-POLO-240TP',
      gsm: '240 GSM Classic Piqué',
      yarn: '30s/2 Compact Combed Cotton',
      weave: 'Classic Double-Tipped Ribbed Collar & Cuffs',
      shrinkage: '< 2.5% Warp & Weft',
      fastness: 'Grade 4.5 High Color Retention',
      dye: 'Yarn-Dyed Contrast Micro-Jacquard Striations',
      moq: '1,000 Units per colorway',
      image: 'assets/images/prod_polo_tipped.jpg',
      desc: 'Sporting heritage silhouette with precision-engineered contrast yarn-dyed tipping on collar and sleeve ribs. Pre-washed with silicone micro-emulsion for a luxurious hand-feel.',
      colors: ['#ffffff', '#121d33', '#1b4d3e', '#7b1d24']
    },
    'knitshirts': {
      id: 'knitshirts',
      title: 'Textured Camp-Collar Knit Shirt',
      badge: 'Resort Knits',
      category: 'knitshirts',
      categoryLabel: 'RESORT & CASUAL KNITTED SHIRTS',
      weightClass: 'mid',
      sku: 'WW-KSHIRT-230W',
      gsm: '230 GSM Structured Texture',
      yarn: '100% Combed Cotton High-Twist Weft',
      weave: 'Waffle & Honeycomb Cellular Knit Weave',
      shrinkage: '< 3.0% Length & Width (Pre-Relaxed)',
      fastness: 'Grade 4.0+ Dry & Wet Crock Testing',
      dye: 'Low-Liquor Garment Dyed or Piece-Dyed Reactive',
      moq: '800 Units per colorway',
      image: 'assets/images/prod_knit_shirt.jpg',
      desc: 'A breakthrough knitwear category replacing traditional woven resort shirts with cellular honeycomb weave, fluid drape, and natural corozo buttons.',
      colors: ['#d9d3c5', '#1f2937', '#4b5563', '#374151']
    },
    'knitshirts-button': {
      id: 'knitshirts-button',
      title: 'Big Seersucker Button-Down Shirt',
      badge: 'Seersucker',
      category: 'knitshirts',
      categoryLabel: 'RESORT & CASUAL KNITTED SHIRTS',
      weightClass: 'mid',
      sku: 'WW-KSHIRT-230SS',
      gsm: '230 GSM Dimensional Knit',
      yarn: '100% Cotton Transfer Jacquard Yarn',
      weave: '3D Puckered Seersucker Knit Effect',
      shrinkage: '< 2.5% Pre-Stentered Finish',
      fastness: 'Grade 4.5 Light & Washing Fastness',
      dye: 'Eco-Friendly Fiber Reactive Dyeing',
      moq: '1,000 Units per colorway',
      image: 'assets/images/prod_knit_button.jpg',
      desc: 'Raised puckered surface ridges keep fabric elevated off the skin for superior airflow in warm weather resort collections.',
      colors: ['#f5f5f0', '#1e293b', '#334155', '#64748b']
    },
    'roundneck': {
      id: 'roundneck',
      title: 'High Fashion Heavyweight Crewneck',
      badge: 'Heavy Jersey',
      category: 'roundneck',
      categoryLabel: 'HIGH FASHION ROUND NECKS',
      weightClass: 'mid',
      sku: 'WW-TEE-260HJ',
      gsm: '260 GSM Architectural Drape',
      yarn: '2/30s Combed Long-Staple Cotton',
      weave: 'Ultra-Compact 28-Gauge Single Jersey',
      shrinkage: '< 2.0% Length / < 1.5% Width',
      fastness: 'Grade 4.5 Commercial Laundering',
      dye: 'Deep-Saturated ZDHC Reactive Dye',
      moq: '1,200 Units per colorway',
      image: 'assets/images/prod_roundneck_crew.png',
      desc: 'Engineered for international designer streetwear labels demanding clean drop shoulders, non-curling 1x1 heavy cotton neck rib, and zero body torquing.',
      colors: ['#0f172a', '#f8fafc', '#334155', '#475569']
    },
    'roundneck-graphic': {
      id: 'roundneck-graphic',
      title: 'Placement Graphic Streetwear Tee',
      badge: 'Graphic Program',
      category: 'roundneck',
      categoryLabel: 'HIGH FASHION ROUND NECKS',
      weightClass: 'mid',
      sku: 'WW-TEE-240GP',
      gsm: '240 GSM Bio-Polished Cotton',
      yarn: '24s Combed Pure Ring-Spun Cotton',
      weave: 'Super-Combed Smooth Surface Single Jersey',
      shrinkage: '< 2.5% Pre-Washed Finish',
      fastness: 'Grade 4.5 Print & Wash Integrity',
      dye: 'PVC-Free Water-Based Screen Print',
      moq: '1,000 Units per artwork',
      image: 'assets/images/prod_roundneck_graphic.jpg',
      desc: 'Screen printed in our in-house automatic carousel printing facility with PVC-free water-based inks and foil/high-density effects.',
      colors: ['#18181b', '#fafafa', '#71717a', '#27272a']
    },
    'hoodie': {
      id: 'hoodie',
      title: 'Brushed Heavyweight Fleece Hoodie',
      badge: 'Baby Terry',
      category: 'outerwear',
      categoryLabel: 'JACKETS, HOODIES & FLEECE',
      weightClass: 'heavy',
      sku: 'WW-HOOD-320BF',
      gsm: '320 GSM Premium Fleece',
      yarn: '100% Cotton Face / Micro-Brushed Interior',
      weave: '3-End Diagonal French Terry Knit',
      shrinkage: '< 2.5% Calendered & Heat-Set',
      fastness: 'Grade 4.5 Perspiration & Rubbing Fastness',
      dye: 'Low-Impact ZDHC Reactive Dye',
      moq: '800 Units per colorway',
      image: 'assets/images/prod_hoodie_fleece.jpg',
      desc: '320 GSM diagonal loopback baby terry with a velvety peach-brushed interior, double-layer self-fabric ergonomic hood, and heavyweight 2x2 rib cuffs.',
      colors: ['#09090b', '#27272a', '#52525b', '#e4e4e7']
    },
    'jacket': {
      id: 'jacket',
      title: 'Bonded Interlock Full-Zip Track Jacket',
      badge: 'Interlock Jacket',
      category: 'outerwear',
      categoryLabel: 'JACKETS, HOODIES & FLEECE',
      weightClass: 'heavy',
      sku: 'WW-JCKT-300Z',
      gsm: '300 GSM Double Interlock',
      yarn: 'High-Gauge Compact Cotton / Micro-Poly CVC',
      weave: 'Double-Knit Smooth Face & Backing',
      shrinkage: '< 1.8% Dimensional Stability',
      fastness: 'Grade 4.5 Heavy Wear Resistance',
      dye: 'Yarn-Dyed Contrast Tape & Piece-Dyed Body',
      moq: '800 Units per colorway',
      image: 'assets/images/prod_jacket_zip.jpg',
      desc: 'Technical knit track jacket featuring YKK metal-tooth dual zippers, concealed zip pockets, and ergonomic raglan sleeve articulation.',
      colors: ['#111827', '#1f2937', '#374151', '#9ca3af']
    },
    'sweatshirt': {
      id: 'sweatshirt',
      title: 'Classic Raglan Loopback Sweatshirt',
      badge: 'French Terry',
      category: 'outerwear',
      categoryLabel: 'JACKETS, HOODIES & FLEECE',
      weightClass: 'heavy',
      sku: 'WW-SWT-280LT',
      gsm: '280 GSM Unbrushed Loopback',
      yarn: '100% Combed Ring-Spun Cotton',
      weave: 'Traditional French Terry Loopback Weave',
      shrinkage: '< 2.0% Pre-Shrunk Finish',
      fastness: 'Grade 4.5 Color Retention',
      dye: 'Eco-Reactive Dye with Bio-Polish Enzyme Wash',
      moq: '1,000 Units per colorway',
      image: 'assets/images/prod_sweatshirt_crew.jpg',
      desc: 'Archival sporting crewneck featuring triangular ribbed V-insert at neck, coverstitch seam details, and heavyweight rib cuffs.',
      colors: ['#18181b', '#e4e4e7', '#3f3f46', '#71717a']
    },
    'disney': {
      id: 'disney',
      title: 'Disney Licensed Character Graphic Tee',
      badge: 'Disney FAMA',
      category: 'disney',
      categoryLabel: 'DISNEY & LICENSED APPAREL',
      weightClass: 'light',
      sku: 'WW-DISN-180SJ',
      gsm: '180 GSM Bio-Washed Single Jersey',
      yarn: '30s Combed Long-Staple Cotton',
      weave: 'Super-Soft Circular Knit Single Jersey',
      shrinkage: '< 3.0% Length & Width (Disney Audit Standards)',
      fastness: 'Grade 4.5 Saliva & Wash Fastness for Children / Adult Wear',
      dye: 'Disney Restricted Substance List (RSL) Certified Inks',
      moq: '1,500 Units / Official Licensee Orders Only',
      image: 'assets/images/prod_disney_tee.jpg',
      desc: 'Manufactured strictly under authorized Disney FAMA facility compliance with high-definition eco-friendly rotary screen printing and silky bio-polish.',
      colors: ['#ffffff', '#0f172a', '#ef4444', '#3b82f6']
    },
    'boys-tee': {
      id: 'boys-tee',
      title: 'Junior Combed Cotton Everyday Crew',
      badge: 'Kids & Youth',
      category: 'disney',
      categoryLabel: 'DISNEY & LICENSED APPAREL',
      weightClass: 'light',
      sku: 'WW-KIDS-180ET',
      gsm: '180 GSM Hypoallergenic Cotton',
      yarn: '30s Super-Combed Indian Cotton',
      weave: 'Ultra-Soft Single Jersey with Lycra Rib',
      shrinkage: '< 2.8% Pre-Washed Finish',
      fastness: 'Grade 4.5 Heavy Washing Fastness',
      dye: 'OEKO-TEX Standard 100 Class 1 (Baby / Child Safe)',
      moq: '1,500 Units per colorway',
      image: 'assets/images/prod_boys_tee.jpg',
      desc: "Specially softened hypoallergenic children's t-shirt program formulated to withstand 50+ domestic hot wash cycles without twisting or pilling.",
      colors: ['#ffffff', '#38bdf8', '#fbbf24', '#34d399', '#f87171']
    },
    'shorts': {
      id: 'shorts',
      title: 'French Terry Athleisure Shorts',
      badge: 'Bottoms',
      category: 'bottoms',
      categoryLabel: 'ATHLEISURE SHORTS & BOTTOMS',
      weightClass: 'mid',
      sku: 'WW-SHRT-260FT',
      gsm: '260 GSM Flat Back Rib / French Terry',
      yarn: '100% Combed Cotton High-Density Weft',
      weave: 'Structured Knit with Smooth Exterior',
      shrinkage: '< 2.0% Pre-Shrunk Mechanical Stenter',
      fastness: 'Grade 4.5 Dry & Wet Friction Fastness',
      dye: 'Low-Impact ZDHC Reactive Dye',
      moq: '1,000 Units per colorway',
      image: 'assets/images/prod_shorts_athleisure.jpg',
      desc: '4-needle elasticated waistband, dipped cotton drawcords with matte metal aglets, deep side slash pockets, and double-stitched hem.',
      colors: ['#1c1917', '#44403c', '#78716c', '#d6d3d1']
    }
  };

  // =========================================================================
  // 2. SCROLL ENGINE: PROGRESS BAR, PARALLAX, SCROLL-SPY & REVEALS
  // =========================================================================
  const siteHeader = document.getElementById('site-header');
  const scrollProgressBar = document.getElementById('scroll-progress-bar');
  const backToTopBtn = document.getElementById('back-to-top-btn');
  const parallaxElements = document.querySelectorAll('.parallax-media');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const spySections = ['company', 'collection', 'about', 'policies'].map(id => document.getElementById(id)).filter(Boolean);

  let isScrollTicking = false;

  function updateScrollState() {
    const scrollY = window.scrollY;

    // A. Sticky Header Blur
    if (siteHeader) {
      if (scrollY > 40) {
        siteHeader.classList.add('is-scrolled');
      } else {
        siteHeader.classList.remove('is-scrolled');
      }
    }

    // B. Reading / Scroll Progress Bar
    if (scrollProgressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      scrollProgressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }

    // C. Back To Top Button
    if (backToTopBtn) {
      if (scrollY > 450) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    }

    // D. Subtle Parallax Depth on Media
    if (window.innerWidth > 768) {
      const windowH = window.innerHeight;
      parallaxElements.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-parallax-speed') || '0.04');
        const rect = el.getBoundingClientRect();
        if (rect.top < windowH && rect.bottom > 0) {
          const delta = (rect.top - windowH * 0.4) * speed;
          el.style.transform = `translateY(${delta}px)`;
        }
      });
    }

    // E. Active Nav Link Scroll-Spy
    if (spySections.length > 0 && navLinks.length > 0) {
      const scrollCheck = scrollY + 160;
      let currentSectionId = '';

      spySections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollCheck >= top && scrollCheck < top + height) {
          currentSectionId = sec.getAttribute('id');
        }
      });

      if (currentSectionId) {
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${currentSectionId}` || href.endsWith(`#${currentSectionId}`)) {
            link.classList.add('active');
          } else if (href.startsWith('#')) {
            link.classList.remove('active');
          }
        });
      }
    }

    isScrollTicking = false;
  }

  window.addEventListener('scroll', () => {
    if (!isScrollTicking) {
      requestAnimationFrame(updateScrollState);
      isScrollTicking = true;
    }
  }, { passive: true });

  // Back to Top Click Action
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // IntersectionObserver for reveal on scroll (multi-variant)
  const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-scale-up, .reveal-slide-left, .reveal-slide-right');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // =========================================================================
  // 3. ANIMATED METRIC COUNTERS
  // =========================================================================
  const metricValues = document.querySelectorAll('.metric-value[data-counter]');
  let metricsAnimated = false;

  function animateCounters() {
    if (metricsAnimated) return;
    metricsAnimated = true;

    metricValues.forEach(el => {
      const target = parseInt(el.getAttribute('data-counter'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const isComma = el.getAttribute('data-format') === 'comma';
      const duration = 1800; // ms
      const startTime = performance.now();

      function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // EaseOutExpo
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = Math.floor(ease * target);

        if (isComma) {
          el.textContent = current.toLocaleString('en-US') + suffix;
        } else {
          el.textContent = current + suffix;
        }

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        } else {
          if (isComma) {
            el.textContent = target.toLocaleString('en-US') + suffix;
          } else {
            el.textContent = target + suffix;
          }
        }
      }

      requestAnimationFrame(updateNumber);
    });
  }

  const metricsContainer = document.querySelector('.hero-metrics');
  if (metricsContainer && 'IntersectionObserver' in window) {
    const metricObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          metricObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });
    metricObserver.observe(metricsContainer);
  } else {
    animateCounters();
  }

  // =========================================================================
  // 4. HIGH-END TOUCH, DRAG & AUTOPLAY PRODUCT CAROUSEL (SECTION 3)
  // =========================================================================
  const carouselTrack = document.getElementById('product-carousel-track');
  const carouselViewport = document.getElementById('product-carousel-viewport');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  const currentIndexEl = document.getElementById('carousel-current-index');
  const totalCountEl = document.getElementById('carousel-total-count');
  const paginationBar = document.getElementById('carousel-pagination-bar');

  if (carouselTrack && carouselViewport) {
    const allCards = Array.from(carouselTrack.querySelectorAll('.product-card'));
    const archivePortalCard = document.getElementById('archive-portal-card');
    const programPills = document.querySelectorAll('.program-pill-btn');
    const programNameEl = document.getElementById('current-program-name');
    const archiveCountEl = document.getElementById('archive-count-display');
    const archiveHeadingEl = document.getElementById('archive-portal-heading');
    const archiveDescEl = document.getElementById('archive-portal-desc');
    const archiveNumEl = document.getElementById('archive-portal-num');
    const archiveLinkEl = document.getElementById('archive-portal-link');

    const programMetadata = {
      'all': { name: 'All Flagship Programs', count: '1,200+ Active Styles', archiveNum: '1,200+', catParam: 'all', desc: 'Looking for custom yarn counts, specific GSM weights, or branded washes? Our Tirupur sample room develops custom tech packs in 48-72 hours.' },
      'polos': { name: "Men's Polos Program", count: '140+ Production SKUs', archiveNum: '140+', catParam: 'polos', desc: "Explore our archive of 140+ piqué, mercerized, and tipped polo silhouettes across 2/40s, 30s/2, and organic cottons." },
      'knitshirts': { name: 'Resort & Casual Knits', count: '90+ Production SKUs', archiveNum: '90+', catParam: 'knitshirts', desc: "Cellular waffle, 3D seersucker, and transfer jacquards engineered for warm-weather and resort wear collections." },
      'roundneck': { name: 'Heavy Streetwear Crews', count: '200+ Production SKUs', archiveNum: '200+', catParam: 'roundneck', desc: "Heavyweight single jerseys (240–300 GSM) with tight drop-shoulders and automatic screen printing." },
      'outerwear': { name: 'Jackets, Hoodies & Fleece', count: '120+ Production SKUs', archiveNum: '120+', catParam: 'outerwear', desc: "320–420 GSM baby terry, peach-brushed fleece hoodies, and bonded interlock track jackets with YKK hardware." },
      'disney': { name: 'Disney Licensed & Youth', count: '300+ Production SKUs', archiveNum: '300+', catParam: 'disney', desc: "Manufactured strictly under Disney FAMA facility authorization with certified non-toxic inks and zero-twist yarns." },
      'bottoms': { name: 'Athleisure & Bottoms', count: '150+ Production SKUs', archiveNum: '150+', catParam: 'bottoms', desc: "Loopback French terry shorts, joggers, and lounge bottoms with reinforced pocket bagging and custom drawcords." }
    };

    let activeProgram = 'all';
    let visibleItems = [];
    let currentIndex = 0;
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let dragDistance = 0;
    let autoPlayTimer = null;

    function refreshVisibleItems() {
      visibleItems = allCards.filter(card => card.style.display !== 'none');
      if (archivePortalCard) {
        visibleItems.push(archivePortalCard);
      }
      if (totalCountEl) {
        totalCountEl.textContent = String(visibleItems.length).padStart(2, '0');
      }
    }

    function getVisibleCount() {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }

    function getMaxIndex() {
      return Math.max(0, visibleItems.length - getVisibleCount());
    }

    // Build Pagination Dots
    function buildPaginationDots() {
      if (!paginationBar) return;
      paginationBar.innerHTML = '';
      const dotCount = getMaxIndex() + 1;

      for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = `carousel-dot ${i === currentIndex ? 'is-active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => {
          goToSlide(i);
        });
        paginationBar.appendChild(dot);
      }
    }

    function updatePagination() {
      if (!paginationBar) return;
      const dots = paginationBar.querySelectorAll('.carousel-dot');
      dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
          dot.classList.add('is-active');
        } else {
          dot.classList.remove('is-active');
        }
      });
    }

    function updateCarouselPosition(smooth = true) {
      const maxIndex = getMaxIndex();
      currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));

      if (visibleItems.length > 0) {
        const firstEl = visibleItems[0];
        const cardWidth = firstEl.getBoundingClientRect().width;
        const gap = 28;
        currentTranslate = -(currentIndex * (cardWidth + gap));
        prevTranslate = currentTranslate;

        if (smooth) {
          carouselTrack.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
        } else {
          carouselTrack.style.transition = 'none';
        }

        carouselTrack.style.transform = `translateX(${currentTranslate}px)`;
      } else {
        carouselTrack.style.transform = 'translateX(0px)';
      }

      if (currentIndexEl) {
        currentIndexEl.textContent = String(currentIndex + 1).padStart(2, '0');
      }

      updatePagination();
    }

    function goToSlide(index) {
      currentIndex = index;
      updateCarouselPosition(true);
    }

    function nextSlide() {
      const maxIndex = getMaxIndex();
      if (currentIndex >= maxIndex) {
        currentIndex = 0; // Wrap around for fluid browsing
      } else {
        currentIndex++;
      }
      updateCarouselPosition(true);
    }

    function prevSlide() {
      const maxIndex = getMaxIndex();
      if (currentIndex <= 0) {
        currentIndex = maxIndex; // Wrap around
      } else {
        currentIndex--;
      }
      updateCarouselPosition(true);
    }

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Dynamic Program Category Switching
    function setProgramFilter(programId) {
      activeProgram = programId;
      const meta = programMetadata[programId] || programMetadata['all'];

      if (programNameEl) programNameEl.textContent = meta.name;
      if (archiveCountEl) archiveCountEl.textContent = meta.count;
      if (archiveHeadingEl) archiveHeadingEl.textContent = `+ ${meta.archiveNum} More Styles`;
      if (archiveDescEl) archiveDescEl.textContent = meta.desc;
      if (archiveNumEl) archiveNumEl.textContent = meta.archiveNum;
      if (archiveLinkEl) archiveLinkEl.href = `collection.html?category=${meta.catParam}`;

      allCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (programId === 'all' || cat === programId) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });

      refreshVisibleItems();
      currentIndex = 0;
      buildPaginationDots();
      updateCarouselPosition(true);
    }

    programPills.forEach(pill => {
      pill.addEventListener('click', () => {
        programPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const prog = pill.getAttribute('data-program') || 'all';
        setProgramFilter(prog);
      });
    });

    // Mouse Drag Physics
    carouselViewport.addEventListener('mousedown', (e) => {
      if (e.target.closest('button') || e.target.closest('a')) return;
      isDragging = true;
      startX = e.clientX;
      dragDistance = 0;
      carouselViewport.classList.add('is-dragging');
      carouselTrack.style.transition = 'none';
      stopAutoplay();
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const currentX = e.clientX;
      dragDistance = currentX - startX;
      carouselTrack.style.transform = `translateX(${prevTranslate + dragDistance}px)`;
    });

    window.addEventListener('mouseup', () => {
      if (!isDragging) return;
      isDragging = false;
      carouselViewport.classList.remove('is-dragging');

      const threshold = 60; // minimum drag distance
      if (dragDistance < -threshold) {
        nextSlide();
      } else if (dragDistance > threshold) {
        prevSlide();
      } else {
        updateCarouselPosition(true);
      }
      startAutoplay();
    });

    // Touch Swipe Physics
    carouselViewport.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      dragDistance = 0;
      carouselTrack.style.transition = 'none';
      stopAutoplay();
    }, { passive: true });

    carouselViewport.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const currentX = e.touches[0].clientX;
      dragDistance = currentX - startX;
      carouselTrack.style.transform = `translateX(${prevTranslate + dragDistance}px)`;
    }, { passive: true });

    carouselViewport.addEventListener('touchend', () => {
      if (!isDragging) return;
      isDragging = false;
      const threshold = 50;
      if (dragDistance < -threshold) {
        nextSlide();
      } else if (dragDistance > threshold) {
        prevSlide();
      } else {
        updateCarouselPosition(true);
      }
      startAutoplay();
    });

    // Gentle Autoplay
    function startAutoplay() {
      stopAutoplay();
      autoPlayTimer = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    function stopAutoplay() {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }

    carouselViewport.addEventListener('mouseenter', stopAutoplay);
    carouselViewport.addEventListener('mouseleave', startAutoplay);

    window.addEventListener('resize', () => {
      buildPaginationDots();
      updateCarouselPosition(false);
    });

    // Initial setup
    refreshVisibleItems();
    buildPaginationDots();
    updateCarouselPosition(false);
    startAutoplay();
  }

  // =========================================================================
  // 5. COMPOSITE EXPLORER & CATEGORY FILTER (SECTION 2)
  // =========================================================================
  const compSearch = document.getElementById('composite-search-input');
  const compCards = document.querySelectorAll('.composite-item-card');
  const compPills = document.querySelectorAll('.composite-pill-btn');
  const compCountEl = document.getElementById('composite-count');
  let activeFilter = 'all';

  function filterComposites() {
    const q = compSearch ? compSearch.value.toLowerCase().trim() : '';
    let visibleCount = 0;

    compCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category') || 'all';
      const text = card.textContent.toLowerCase();

      const matchesCategory = (activeFilter === 'all') || (cardCategory === activeFilter);
      const matchesSearch = !q || text.includes(q);

      if (matchesCategory && matchesSearch) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (compCountEl) {
      compCountEl.textContent = visibleCount;
    }
  }

  if (compSearch) {
    compSearch.addEventListener('input', filterComposites);
  }

  compPills.forEach(pill => {
    pill.addEventListener('click', () => {
      compPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilter = pill.getAttribute('data-filter') || 'all';
      filterComposites();
    });
  });

  // =========================================================================
  // 6. SINGLE-PAGE IN-PAGE PRODUCT DETAIL MODAL
  // =========================================================================
  const productModal = document.getElementById('product-detail-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-product-title');
  const modalCategory = document.getElementById('modal-product-category');
  const modalBadge = document.getElementById('modal-product-badge');
  const modalDesc = document.getElementById('modal-product-desc');
  const modalImg = document.getElementById('modal-product-image');
  const specGsm = document.getElementById('modal-spec-gsm');
  const specYarn = document.getElementById('modal-spec-yarn');
  const specWeave = document.getElementById('modal-spec-weave');
  const specShrinkage = document.getElementById('modal-spec-shrinkage');
  const specFastness = document.getElementById('modal-spec-fastness');
  const specDye = document.getElementById('modal-spec-dye');
  const specMoq = document.getElementById('modal-spec-moq');
  const colorwaysList = document.getElementById('modal-colorways-list');
  const btnModalInquire = document.getElementById('btn-modal-inquire');

  function openProductDetail(productId) {
    const data = productCatalog[productId];
    if (!data || !productModal) return;

    modalTitle.textContent = data.title;
    modalBadge.textContent = data.badge;
    modalCategory.textContent = data.categoryLabel;
    modalDesc.textContent = data.desc;
    modalImg.src = data.image;
    modalImg.alt = data.title;

    specGsm.textContent = data.gsm;
    specYarn.textContent = data.yarn;
    specWeave.textContent = data.weave;
    specShrinkage.textContent = data.shrinkage;
    specFastness.textContent = data.fastness;
    specDye.textContent = data.dye;
    specMoq.textContent = data.moq;

    if (colorwaysList) {
      colorwaysList.innerHTML = '';
      data.colors.forEach(hex => {
        const s = document.createElement('span');
        s.className = 'chip';
        s.style.backgroundColor = hex;
        colorwaysList.appendChild(s);
      });
      const customTag = document.createElement('span');
      customTag.className = 'chip-pantone';
      customTag.textContent = '+ Pantone TCX';
      colorwaysList.appendChild(customTag);
    }

    productModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeProductModal() {
    if (!productModal) return;
    productModal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // Bind to cards on current page
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const pid = card.getAttribute('data-product-id');
      openProductDetail(pid);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProductModal);
  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) closeProductModal();
    });
  }

  // =========================================================================
  // 7. RFQ INQUIRY MODAL
  // =========================================================================
  const inquiryModal = document.getElementById('inquiry-modal');
  const inquiryCloseBtn = document.getElementById('inquiry-modal-close');
  const btnHeroCta = document.getElementById('btn-hero-cta');
  const btnHeaderInquiry = document.getElementById('btn-header-inquiry');
  const btnFooterQuote = document.getElementById('btn-footer-quote');
  const rfqForm = document.getElementById('rfq-form');
  const rfqSuccess = document.getElementById('rfq-success');
  const btnCloseSuccess = document.getElementById('btn-close-success');

  function openInquiryModal() {
    if (!inquiryModal) return;
    if (rfqForm) rfqForm.style.display = 'block';
    if (rfqSuccess) rfqSuccess.setAttribute('hidden', '');
    inquiryModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeInquiryModal() {
    if (!inquiryModal) return;
    inquiryModal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  const btnBookShowroom = document.getElementById('btn-book-showroom');
  if (btnBookShowroom) btnBookShowroom.addEventListener('click', openInquiryModal);
  if (btnHeroCta) btnHeroCta.addEventListener('click', openInquiryModal);
  if (btnHeaderInquiry) btnHeaderInquiry.addEventListener('click', openInquiryModal);
  if (btnFooterQuote) btnFooterQuote.addEventListener('click', openInquiryModal);
  if (btnModalInquire) {
    btnModalInquire.addEventListener('click', () => {
      closeProductModal();
      openInquiryModal();
    });
  }
  if (inquiryCloseBtn) inquiryCloseBtn.addEventListener('click', closeInquiryModal);
  if (btnCloseSuccess) btnCloseSuccess.addEventListener('click', closeInquiryModal);
  if (inquiryModal) {
    inquiryModal.addEventListener('click', (e) => {
      if (e.target === inquiryModal) closeInquiryModal();
    });
  }

  if (rfqForm) {
    rfqForm.addEventListener('submit', (e) => {
      e.preventDefault();
      rfqForm.style.display = 'none';
      if (rfqSuccess) rfqSuccess.removeAttribute('hidden');
    });
  }

  // =========================================================================
  // 8. POLICIES ACCORDION (SECTION 5)
  // =========================================================================
  const policyTriggers = document.querySelectorAll('.policy-trigger');
  policyTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const parentItem = trigger.closest('.policy-accordion-item');
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        trigger.setAttribute('aria-expanded', 'false');
        if (parentItem) parentItem.classList.remove('is-open');
      } else {
        trigger.setAttribute('aria-expanded', 'true');
        if (parentItem) parentItem.classList.add('is-open');
      }
    });
  });

  // ESC Key Listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeInquiryModal();
    }
  });
});
