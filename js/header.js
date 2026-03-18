/**
 * Header and Mobile Menu Injector
 */
document.addEventListener('DOMContentLoaded', () => {
  // Global CSS Injection
  const style = document.createElement('style');
  style.textContent = `
    html, body {
      overflow-x: hidden;
      width: 100%;
      scroll-behavior: smooth;
    }
    
    /* Custom Scrollbar Styles */
    ::-webkit-scrollbar {
      width: 10px;
    }
    
    ::-webkit-scrollbar-track {
      background: #f1f5f9;
    }
    
    ::-webkit-scrollbar-thumb {
      background: #1b70ef;
      border-radius: 10px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .logo_height{
      height: 1.5rem;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #1b70ef;
    }
  `;
  document.head.appendChild(style);


  const headerHTML = `
    <header class="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-brand-200/20 shadow-sm transition-all duration-300">
      <div class="container mx-auto flex items-center justify-between py-3 px-4 md:px-6">
<a href="/" class="flex items-center space-x-3 group">
          <div class="relative">
            <img src="logos/logo.webp" alt="Skyfare Consulting Logo" class="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-brand-300/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div class="flex flex-col">
            <span class="text-lg md:text-xl uppercase  font-bold text-brand-900 leading-none tracking-[0.1em] logo_height">Skyfare</span>
            <span class="text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-900 font-semibold leading-none">Consulting</span>
          </div>
        </a>

        <!-- Desktop nav -->
        <nav class="hidden lg:flex items-center gap-1 text-[15px]" id="desktop-nav">
          <a href="index.html" class="nav-link px-3 py-2 text-neutral-600 hover:text-brand-500 transition-colors font-semibold flex items-center gap-2">
            <i class="fa-solid fa-house text-[13px] opacity-60"></i> Home
          </a>
          <!-- Core Services Dropdown -->
          <div class="relative group/dropdown">
            <button class="flex items-center gap-2 px-3 py-2 text-neutral-600 hover:text-brand-500 transition-colors font-semibold flex items-center">
              <i class="fa-solid fa-layer-group text-[13px] opacity-60"></i>
              Services <i class="fa-solid fa-chevron-down text-[13px] transition-transform group-hover/dropdown:rotate-180"></i>
            </button>
            <div class="absolute top-full left-0 w-64 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-300">
              <div class="bg-white rounded-2xl shadow-xl border border-brand-100 overflow-hidden p-2">
                <a href="services.html" class="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-50 transition-colors group/item">
                  <div class="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600 group-hover/item:scale-110 transition-transform">
                    <i class="fa-solid fa-layer-group"></i>
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-brand-950">Services Overview</div>
                  </div>
                </a>
                <a href="krisflyer.html" class="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-50 transition-colors group/item">
                  <div class="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600 group-hover/item:scale-110 transition-transform">
                    <i class="fa-solid fa-plane-circle-check"></i>
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-brand-950">KrisFlyer Miles</div>
                  </div>
                </a>
                <a href="itinerary.html" class="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-50 transition-colors group/item">
                  <div class="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600 group-hover/item:scale-110 transition-transform">
                    <i class="fa-solid fa-map-location-dot"></i>
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-brand-950">Itinerary Design</div>
                  </div>
                </a>

                <a href="assessment.html" class="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-50 transition-colors group/item">
                  <div class="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600 group-hover/item:scale-110 transition-transform">
                    <i class="fa-solid fa-phone-volume"></i>
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-brand-950">Assessment Call</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <a href="how-it-works.html" class="nav-link px-3 py-2 text-neutral-600 hover:text-brand-500 transition-colors font-semibold flex items-center gap-2">
            <i class="fa-solid fa-wand-magic-sparkles text-[13px] opacity-60"></i> How It Works
          </a>
          <a href="past-flight-deals.html" class="nav-link px-3 py-2 text-neutral-600 hover:text-brand-500 transition-colors font-semibold flex items-center gap-2">
            <i class="fa-solid fa-ticket-simple text-[13px] opacity-60"></i> Past Flight Deals
          </a>
          
          <!-- Extra Services Dropdown -->
          <div class="relative group/dropdown">
            <button class="flex items-center gap-2 px-3 py-2 text-neutral-600 hover:text-brand-500 transition-colors font-semibold flex items-center">
              <i class="fa-solid fa-square-plus text-[13px] opacity-60"></i>
              Extra Services <i class="fa-solid fa-chevron-down text-[13px] transition-transform group-hover/dropdown:rotate-180"></i>
            </button>
            <div class="absolute top-full left-0 w-64 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-300">
              <div class="bg-white rounded-2xl shadow-xl border border-brand-100 overflow-hidden p-2">
                <a href="chauffeur.html" class="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-50 transition-colors group/item">
                  <div class="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600 group-hover/item:scale-110 transition-transform">
                    <i class="fa-solid fa-car"></i>
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-brand-950">Chauffeur (Transfers)</div>
                  </div>
                </a>

                <a href="extra-services.html#fast-track" class="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-50 transition-colors group/item">
                  <div class="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600 group-hover/item:scale-110 transition-transform">
                    <i class="fa-solid fa-bolt"></i>
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-brand-950">Fast Track Immigration</div>
                  </div>
                </a>
                <a href="extra-services.html#visa" class="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-50 transition-colors group/item">
                  <div class="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600 group-hover/item:scale-110 transition-transform">
                    <i class="fa-solid fa-passport"></i>
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-brand-950">Visa Assistance</div>
                  </div>
                </a>
                <a href="extra-services.html#bookings" class="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-50 transition-colors group/item">
                  <div class="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600 group-hover/item:scale-110 transition-transform">
                    <i class="fa-solid fa-plane-up"></i>
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-brand-950">Flight Bookings (Cash)</div>
                  </div>
                </a>
                <a href="extra-services.html#hotels" class="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-50 transition-colors group/item">
                  <div class="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600 group-hover/item:scale-110 transition-transform">
                    <i class="fa-solid fa-hotel"></i>
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-brand-950">Hotel Recommendations</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <a href="faq.html" class="nav-link px-3 py-2 text-neutral-600 hover:text-brand-500 transition-colors font-semibold flex items-center gap-2">
            <i class="fa-solid fa-circle-question text-[13px] opacity-60"></i> FAQ
          </a>
          <a href="contact.html" class="nav-link px-3 py-2 text-neutral-600 hover:text-brand-500 transition-colors font-semibold flex items-center gap-2">
            <i class="fa-solid fa-envelope text-[13px] opacity-60"></i> Contact
          </a>

          <div class="flex items-center gap-3 ml-4">
    

            <a href="book.html"
              class="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 hover:bg-brand-700 hover:-translate-y-0.5 transition-all active:scale-95">
              <i class="fa-solid fa-calendar-check text-lg"></i>
              Book Now
            </a>
          </div>
        </nav>

        <!-- Mobile menu button -->
        <button id="mobileMenuBtn" class="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-brand-50 text-brand-600">
          <i class="fa-solid fa-bars-staggered text-xl"></i>
        </button>
      </div>
    </header>

    <!-- Mobile Menu Drawer -->
    <div id="mobileMenu" class="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      <!-- Backdrop -->
      <div id="mobileMenuBackdrop" class="absolute inset-0 bg-deepblue-950/80 backdrop-blur-sm opacity-0 transition-opacity duration-500"></div>
      
      <!-- Content -->
      <div id="mobileMenuContent" class="absolute top-0 right-0 w-[80%] h-full bg-white shadow-2xl translate-x-full transition-transform duration-500 pointer-events-auto">
        <div class="p-6 flex flex-col h-full">
          <div class="flex items-center justify-between mb-10">
            <span class="text-xl font-semibold text-brand-900">Menu</span>
            <button id="closeMobileMenu" class="w-10 h-10 flex items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <i class="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>
          
          <nav class="flex flex-col gap-7 text-[1.3rem] font-semibold" id="mobile-nav">
            <a href="index.html" class="text-neutral-600 hover:text-brand-600 transition-colors flex items-center gap-3">
              <i class="fa-solid fa-house text-brand-500 w-7"></i> Home
            </a>
            <div class="flex flex-col gap-4">
              <span class="text-xs uppercase tracking-widest text-brand-500 font-bold flex items-center gap-2">
                <i class="fa-solid fa-star text-[10px]"></i> Our Services
              </span>
              <a href="services.html" class="pl-2 border-l-2 border-brand-100 text-neutral-600 hover:text-brand-600 transition-colors text-lg flex items-center gap-3">
                <i class="fa-solid fa-layer-group text-brand-400 w-6 text-base"></i> Overview
              </a>
              <a href="krisflyer.html" class="pl-2 border-l-2 border-brand-100 text-neutral-600 hover:text-brand-600 transition-colors text-lg flex items-center gap-3">
                <i class="fa-solid fa-plane-circle-check text-brand-400 w-6 text-base"></i> KrisFlyer Miles
              </a>
              <a href="itinerary.html" class="pl-2 border-l-2 border-brand-100 text-neutral-600 hover:text-brand-600 transition-colors text-lg flex items-center gap-3">
                <i class="fa-solid fa-map-location-dot text-brand-400 w-6 text-base"></i> Itinerary Design
              </a>

              <a href="assessment.html" class="pl-2 border-l-2 border-brand-100 text-neutral-600 hover:text-brand-600 transition-colors text-lg flex items-center gap-3">
                <i class="fa-solid fa-phone-volume text-brand-400 w-6 text-base"></i> Assessment Call
              </a>
            </div>
            <a href="how-it-works.html" class="text-neutral-600 hover:text-brand-600 transition-colors flex items-center gap-3">
              <i class="fa-solid fa-wand-magic-sparkles text-brand-500 w-7"></i> How It Works
            </a>
            <a href="past-flight-deals.html" class="text-neutral-600 hover:text-brand-600 transition-colors flex items-center gap-3">
              <i class="fa-solid fa-ticket-simple text-brand-500 w-7"></i> Past Flight Deals
            </a>
            <a href="chauffeur.html" class="text-neutral-600 hover:text-brand-600 transition-colors text-lg border-l-2 border-brand-100 pl-2 flex items-center gap-3">
              <i class="fa-solid fa-car text-brand-400 w-6 text-base"></i> Chauffeur (Transfers)
            </a>
            <a href="extra-services.html" class="text-neutral-600 hover:text-brand-600 transition-colors flex items-center gap-3">
              <i class="fa-solid fa-concierge-bell text-brand-500 w-7"></i> Extra Services
            </a>
            <a href="faq.html" class="text-neutral-600 hover:text-brand-600 transition-colors flex items-center gap-3">
              <i class="fa-solid fa-circle-question text-brand-500 w-7"></i> FAQ
            </a>
            <a href="contact.html" class="text-neutral-600 hover:text-brand-600 transition-colors flex items-center gap-3">
              <i class="fa-solid fa-envelope text-brand-500 w-7"></i> Contact
            </a>
          </nav>
          
          <div class="mt-auto pt-10">
            <a href="book.html" class="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-brand-600 text-white font-semibold shadow-lg">
              <i class="fa-solid fa-calendar-check text-xl"></i>
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  // Inject into body at the start
  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  // --- Global Intersection Observer for Animations ---
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-up');
        entry.target.style.opacity = '1';
        entry.target.style.visibility = 'visible';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Target elements that explicitly want animation
  // We look for .slide-up or .animate-on-scroll
  document.querySelectorAll('.slide-up, .animate-on-scroll').forEach(el => {
    // If it's already visible or has a delay, we still want to hide it initially
    el.style.opacity = '0';
    el.style.visibility = 'hidden';
    observer.observe(el);
  });

  // --- Logic for Mobile Menu ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');
  const mobileMenuContent = document.getElementById('mobileMenuContent');
  const closeMobileMenu = document.getElementById('closeMobileMenu');

  function openMenu() {
    mobileMenu.classList.remove('pointer-events-none');
    mobileMenuBackdrop.classList.add('opacity-100');
    mobileMenuContent.classList.remove('translate-x-full');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.add('pointer-events-none');
    mobileMenuBackdrop.classList.remove('opacity-100');
    mobileMenuContent.classList.add('translate-x-full');
    document.body.style.overflow = '';
  }

  mobileMenuBtn.addEventListener('click', openMenu);
  closeMobileMenu.addEventListener('click', closeMenu);
  mobileMenuBackdrop.addEventListener('click', closeMenu);

  // --- Logic for Active Links ---
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  // Desktop links
  const desktopLinks = document.querySelectorAll('#desktop-nav a');
  desktopLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      const linkPath = href.split('#')[0];
      if (linkPath === currentPath) {
        link.classList.add('text-brand-900', 'font-semibold');
        link.classList.remove('text-neutral-600');

        // Check if inside a dropdown
        const parentDropdown = link.closest('.group\\/dropdown');
        if (parentDropdown) {
          const btn = parentDropdown.querySelector('button');
          if (btn) {
            btn.classList.add('text-brand-500');
            btn.classList.remove('text-neutral-600');
          }
        }
      }
    }
  });

  // Mobile links
  const mobileLinks = document.querySelectorAll('#mobile-nav a');
  mobileLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      const linkPath = href.split('#')[0];
      if (linkPath === currentPath) {
        link.classList.add('text-brand-600', 'font-semibold');
        link.classList.remove('text-neutral-600');
      }
    }
  });
});
