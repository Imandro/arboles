// ============================================================
// TreeForLife - Main Application Script
// ============================================================

// ===== COORDINATES =====
const LOCATIONS = {
    dipilto: { center: [13.7167, -86.5000], zoom: 13, name: 'Dipilto' },
    cusmapa: { center: [13.2880, -86.6544], zoom: 13, name: 'San José de Cusmapa' },
    reforestacion: { center: [13.502, -86.577], zoom: 11, name: 'Zonas Sembradas' }
};

// ===== DATA =====
const DATA = {
    fires: [
        { id: 1, name: 'Incendio Sector Norte - Dipilto', lat: 13.75, lng: -86.48, area: 45.2, status: 'Controlado', severity: 'alto', date: '2 Jun 2026', desc: 'Incendio forestal en bosque de pino. 45.2 ha afectadas.' },
        { id: 2, name: 'Incendio Sector Oeste - Cusmapa', lat: 13.27, lng: -86.68, area: 32.8, status: 'Controlado', severity: 'medio', date: '1 Jun 2026', desc: 'Incendio en zona mixta de bosque tropical.' },
        { id: 3, name: 'Incendio Sector Sur - Dipilto', lat: 13.68, lng: -86.51, area: 18.5, status: 'Vigilancia', severity: 'bajo', date: '31 May 2026', desc: 'Pequeño incendio controlado. Vigilancia activa.' },
        { id: 4, name: 'Incendio Zona Centro - Cusmapa', lat: 13.29, lng: -86.65, area: 28.0, status: 'Controlado', severity: 'medio', date: '30 May 2026', desc: 'Incendio controlado exitosamente.' },
        // Simulated risk fires
        { id: 5, name: 'Riesgo Alto - Zona Este Dipilto', lat: 13.73, lng: -86.45, area: 55.0, status: 'Simulado', severity: 'critico', date: 'Simulación', desc: 'Zona de alto riesgo. Vegetación seca acumulada.' },
        { id: 6, name: 'Riesgo Potencial - Cusmapa Sur', lat: 13.26, lng: -86.64, area: 40.0, status: 'Simulado', severity: 'alto', date: 'Simulación', desc: 'Predicción de riesgo por temporada seca prolongada.' }
    ],
    talas: [
        { id: 10, name: 'Tala Ilegal - Zona Protegida', lat: 13.73, lng: -86.49, area: 12.5, status: 'Investigación', severity: 'critico', date: '2 Jun 2026', trees: 450, desc: 'Tala ilegal en zona protegida. Investigación activa.' },
        { id: 11, name: 'Tala Detectada - Dipilto', lat: 13.71, lng: -86.52, area: 8.3, status: 'Vigilancia', severity: 'alto', date: '1 Jun 2026', trees: 290, desc: 'Actividad de tala detectada. Monitoreo continuo.' },
        { id: 12, name: 'Tala Fronteriza - Cusmapa', lat: 13.28, lng: -86.67, area: 15.2, status: 'Investigación', severity: 'alto', date: '30 May 2026', trees: 520, desc: 'Zona fronteriza. Colaboración con autoridades.' },
        { id: 13, name: 'Extracción Selectiva - Dipilto', lat: 13.72, lng: -86.48, area: 5.8, status: 'Legal', severity: 'bajo', date: '28 May 2026', trees: 180, desc: 'Extracción autorizada por MARENA.' },
        // Simulated
        { id: 14, name: 'Riesgo Tala - Bosque Nuboso', lat: 13.30, lng: -86.66, area: 22.0, status: 'Simulado', severity: 'critico', date: 'Simulación', trees: 800, desc: 'Zona vulnerable a tala ilegal por accesibilidad.' },
        { id: 15, name: 'Amenaza - Corredor Biológico', lat: 13.50, lng: -86.58, area: 18.0, status: 'Simulado', severity: 'medio', date: 'Simulación', trees: 350, desc: 'Corredor biológico en riesgo por presión humana.' }
    ],
    siembras: [
        { id: 20, name: 'Plantación Exitosa - Dipilto Sur', lat: 13.69, lng: -86.50, area: 18.0, trees: 1250, species: 'Guanacaste, Pino, Laurel', rate: 78, date: 'May 2026' },
        { id: 21, name: 'Bosque Restaurado - Cusmapa Centro', lat: 13.29, lng: -86.65, area: 22.5, trees: 1580, species: 'Caoba, Madroño, Chaperno', rate: 72, date: 'May 2026' },
        { id: 22, name: 'Vivero Comunitario - Dipilto', lat: 13.72, lng: -86.50, area: 2.0, trees: 8500, species: 'Múltiples nativas', rate: 85, date: 'Ene 2026' },
        { id: 23, name: 'Restauración Cuenca - Cusmapa', lat: 13.27, lng: -86.66, area: 35.0, trees: 2100, species: 'Especies ribereñas', rate: 70, date: 'Feb 2026' },
        { id: 24, name: 'Reforestación Norte - Dipilto', lat: 13.74, lng: -86.49, area: 12.0, trees: 900, species: 'Pino, Roble', rate: 76, date: 'Abr 2026' },
        { id: 25, name: 'Siembra Comunitaria - Cusmapa', lat: 13.28, lng: -86.64, area: 8.5, trees: 650, species: 'Madroño, Laurel', rate: 74, date: 'Mar 2026' }
    ],
    protegidas: [
        { id: 30, name: 'Reserva Forestal Dipilto', lat: 13.72, lng: -86.49, area: 156, level: 'Alto' },
        { id: 31, name: 'Bosque Nuboso Cusmapa', lat: 13.29, lng: -86.66, area: 248, level: 'Máximo' }
    ]
};

// ===== STORE PRODUCTS =====
const PRODUCTS = [
    { id: 1, name: 'Camiseta TreeForLife', desc: 'Camiseta de algodón orgánico con logo bordado.', price: 12, icon: '👕', color: '#1b4332', tag: 'Nuevo' },
    { id: 2, name: 'Taza TreeForLife', desc: 'Taza de cerámica con diseño de bosque nicaragüense.', price: 8, icon: '☕', color: '#2d6a4f', tag: null },
    { id: 3, name: 'Gorra TreeForLife', desc: 'Gorra ajustable con visera curvada y logo frontal.', price: 10, icon: '🧢', color: '#40916c', tag: null },
    { id: 4, name: 'Bolsa Ecológica', desc: 'Bolsa reutilizable de algodón para tus compras.', price: 6, icon: '🛍️', color: '#52b788', tag: 'Eco' },
    { id: 5, name: 'Calendario 2027', desc: 'Calendario de pared con fotos de nuestros bosques.', price: 5, icon: '📅', color: '#74c69d', tag: null },
    { id: 6, name: 'Pin TreeForLife', desc: 'Pin metálico esmaltado para tu mochila o solapa.', price: 3, icon: '📌', color: '#1b4332', tag: null }
];

// ===== STATE =====
let totalDonated = parseFloat(localStorage.getItem('totalDonated')) || 0;
let treesPlanted = Math.floor(totalDonated);
const GOAL = 10000;
let celebrationTriggered = false;
let currentMapMode = 'real';
let currentMapView = 'dipilto';
let map = null;
let markers = {};
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollProgress();
    initHeroAnimation();
    initHeroCounters();
    initDonations();
    initMap();
    initMapControls();
    initGallery();
    initStore();
    initCart();
    initAOS();
    initGSAPAnimations();
    initThemeToggle();
});

function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 60
        });
    }
}

function initThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const icon = toggle.querySelector('i');
    const saved = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', saved);
    icon.className = saved === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    toggle.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        icon.className = next === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    });
}

function initGSAPAnimations() {
    if (typeof gsap === 'undefined') return;
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray('.progress-fill').forEach(bar => {
            ScrollTrigger.create({
                trigger: bar,
                start: 'top 85%',
                onEnter: () => bar.style.transition = 'width 1.5s cubic-bezier(0.25,0.46,0.45,0.94)'
            });
        });
        gsap.utils.toArray('.fund-fill').forEach(bar => {
            ScrollTrigger.create({
                trigger: bar,
                start: 'top 90%',
                onEnter: () => bar.style.transition = 'width 1.2s cubic-bezier(0.25,0.46,0.45,0.94)'
            });
        });
    }
}

// ===== HERO ANIMATION =====
function initHeroAnimation() {
    setTimeout(() => {
        document.querySelector('.hero-title')?.classList.add('animate');
    }, 200);
    setTimeout(() => {
        document.querySelector('.hero-subtitle')?.classList.add('animate');
    }, 500);
    setTimeout(() => {
        document.querySelector('.hero-cta')?.classList.add('animate');
    }, 800);
    setTimeout(() => {
        document.querySelectorAll('.hero-stat').forEach(s => s.classList.add('animate'));
    }, 1100);
}

// ===== NAVIGATION =====
function initNavigation() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    toggle.addEventListener('click', () => links.classList.toggle('open'));

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => links.classList.remove('open'));
    });

    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// ===== SCROLL PROGRESS =====
function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (scrollTop / docHeight * 100) + '%';
    });
}

// ===== HERO COUNTERS =====
function initHeroCounters() {
    const counters = document.querySelectorAll('.hero-stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}

function animateCounter(el, target) {
    const duration = 2000;
    const start = Date.now();
    const initial = 0;

    function update() {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(initial + (target - initial) * easeOut(progress));
        el.textContent = current.toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
    }
    update();
}

function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

// ===== DONATIONS =====
function initDonations() {
    updateProgress();
    setupDonationListeners();
}

function setupDonationListeners() {
    const btns = document.querySelectorAll('.amount-btn');
    const input = document.getElementById('donationAmount');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const amt = btn.dataset.amount;
            if (amt === 'custom') {
                input.focus();
            } else {
                input.value = amt;
            }
        });
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') donate();
    });
}

function updateProgress() {
    const pct = Math.min((treesPlanted / GOAL) * 100, 100);
    document.getElementById('progressBar').style.width = pct + '%';
    document.getElementById('progressText').textContent = treesPlanted.toLocaleString() + ' árboles plantados';
    document.getElementById('progressPercent').textContent = Math.round(pct) + '%';
    document.getElementById('totalDonated').textContent = totalDonated.toFixed(2);

    if (treesPlanted >= GOAL && !celebrationTriggered) {
        celebrationTriggered = true;
        triggerCelebration();
    }
}

function donate() {
    const input = document.getElementById('donationAmount');
    let amount = parseFloat(input.value);

    if (isNaN(amount) || amount <= 0) {
        showNotification('❌ Ingresa una cantidad válida', 'error');
        return;
    }

    totalDonated += amount;
    localStorage.setItem('totalDonated', totalDonated);
    treesPlanted = Math.floor(totalDonated);
    input.value = '';

    document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));

    updateProgress();
    playSuccessSound();
    showNotification(`✅ ¡Gracias! Donaste $${amount.toFixed(2)} y plantaste ${Math.floor(amount)} árbol(es) en Nicaragua`, 'success');
}

function triggerCelebration() {
    createConfetti(200);
    showNotification('🎉 ¡FELICIDADES! ¡Alcanzamos 100,000 árboles plantados! 🎉', 'success');
}

function createConfetti(count) {
    const colors = ['#2d6a4f', '#40916c', '#52b788', '#74c69d', '#ff6b6b', '#4ecdc4'];
    for (let i = 0; i < count; i++) {
        const c = document.createElement('div');
        c.style.cssText = `position:fixed;width:10px;height:10px;background:${colors[Math.floor(Math.random()*colors.length)]};border-radius:50%;left:${Math.random()*100}%;top:-10px;z-index:9999;pointer-events:none;box-shadow:0 0 6px rgba(0,0,0,0.2);animation:confetti-fall ${2+Math.random()*1.5}s linear ${Math.random()*0.5}s forwards`;
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 4000);
    }
}

function playSuccessSound() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 800;
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.15);
    } catch (e) {}
}

// ============================================================
// MAPS
// ============================================================
function initMap() {
    map = L.map('mainMap', {
        center: LOCATIONS.dipilto.center,
        zoom: LOCATIONS.dipilto.zoom,
        zoomControl: false
    });

    L.control.zoom({ position: 'topright' }).addTo(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap',
        maxZoom: 19
    }).addTo(map);

    const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '© Esri',
        maxZoom: 19
    });

    L.control.layers({
        'Mapa': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap', maxZoom: 19 }),
        'Satélite': satellite
    }).addTo(map);

    initMarkerGroups();
    renderMapData();
}

function initMarkerGroups() {
    markers = {
        incendios: L.featureGroup().addTo(map),
        talas: L.featureGroup().addTo(map),
        siembras: L.featureGroup().addTo(map),
        protegidas: L.featureGroup().addTo(map),
        riesgo: L.featureGroup().addTo(map)
    };
}

function createIcon(color, emoji) {
    return L.divIcon({
        className: '',
        html: `<div style="width:38px;height:38px;background:${color};border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.1em;box-shadow:0 2px 8px rgba(0,0,0,0.3);border:2px solid #fff;">${emoji}</div>`,
        iconSize: [38, 38],
        iconAnchor: [19, 19]
    });
}

function getFireIcon(severity) {
    const colors = { critico: '#ff2222', alto: '#ff4444', medio: '#ff6644', bajo: '#ff9944' };
    return createIcon(colors[severity] || '#ff4444', '🔥');
}

function getTalaIcon(severity) {
    const colors = { critico: '#dd2c2c', alto: '#ff7722', medio: '#ffaa22', bajo: '#cccc44' };
    return createIcon(colors[severity] || '#ff7722', '🪚');
}

function getSiembraIcon() { return createIcon('#52b788', '🌱'); }
function getProtegidaIcon() { return createIcon('#1b4332', '🛡️'); }
function getRiesgoIcon() { return createIcon('#ffaa22', '⚠️'); }

function renderMapData() {
    clearMarkers();
    const isSim = currentMapMode === 'simulado';

    // Filter data by location
    const view = currentMapView;
    let fires = DATA.fires;
    let talas = DATA.talas;
    let siembras = DATA.siembras;

    if (view === 'dipilto') {
        fires = fires.filter(f => f.lat > 13.50);
        talas = talas.filter(t => t.lat > 13.50);
        siembras = siembras.filter(s => s.lat > 13.50);
    } else if (view === 'cusmapa') {
        fires = fires.filter(f => f.lat < 13.50);
        talas = talas.filter(t => t.lat < 13.50);
        siembras = siembras.filter(s => s.lat < 13.50);
    }

    // Filter simulated
    if (!isSim) {
        fires = fires.filter(f => f.status !== 'Simulado');
        talas = talas.filter(t => t.status !== 'Simulado');
    }

    // Add fire markers
    fires.forEach(f => {
        const m = L.marker([f.lat, f.lng], { icon: getFireIcon(f.severity) })
            .bindPopup(`<b>${f.name}</b><br>🔥 Área: ${f.area} ha<br>Estado: ${f.status}<br>${f.desc}`);
        markers.incendios.addLayer(m);
    });

    // Add tala markers
    talas.forEach(t => {
        const m = L.marker([t.lat, t.lng], { icon: getTalaIcon(t.severity) })
            .bindPopup(`<b>${t.name}</b><br>🪚 Área: ${t.area} ha<br>Árboles: ~${t.trees}<br>Estado: ${t.status}`);
        markers.talas.addLayer(m);
    });

    // Add siembra markers
    siembras.forEach(s => {
        const m = L.marker([s.lat, s.lng], { icon: getSiembraIcon() })
            .bindPopup(`<b>${s.name}</b><br>🌱 Árboles: ${s.trees}<br>Área: ${s.area} ha<br>Éxito: ${s.rate}%`);
        markers.siembras.addLayer(m);
    });

    // Protected areas
    DATA.protegidas.forEach(p => {
        if (view === 'dipilto' && p.id === 30 || view === 'cusmapa' && p.id === 31 || view === 'reforestacion') {
            const circle = L.circle([p.lat, p.lng], {
                radius: p.area * 80,
                color: '#1b4332',
                weight: 2,
                opacity: 0.3,
                fillColor: '#1b4332',
                fillOpacity: 0.08
            }).bindPopup(`<b>${p.name}</b><br>🛡️ ${p.area} ha<br>Protección: ${p.level}`);
            markers.protegidas.addLayer(circle);
        }
    });

    // Risk zones (simulated)
    if (isSim) {
        const riskZones = [
            { lat: 13.74, lng: -86.46, area: 60, name: 'Riesgo Incendio - Dipilto Norte' },
            { lat: 13.26, lng: -86.67, area: 45, name: 'Riesgo Tala - Bosque Fronterizo' },
            { lat: 13.50, lng: -86.57, area: 35, name: 'Zona Vulnerable - Corredor Seco' }
        ];
        riskZones.forEach(r => {
            const circle = L.circle([r.lat, r.lng], {
                radius: r.area * 60,
                color: '#ffaa22',
                weight: 2,
                opacity: 0.4,
                fillColor: '#ffaa22',
                fillOpacity: 0.12,
                dashArray: '8,8'
            }).bindPopup(`<b>${r.name}</b><br>⚠️ Zona de Riesgo Potencial<br>Área: ${r.area} ha`);
            markers.riesgo.addLayer(circle);
        });
    }

    applyFilters();
    updateMapStats();
}

function clearMarkers() {
    Object.values(markers).forEach(g => g.clearLayers());
}

function applyFilters() {
    const showIncendios = document.getElementById('filterIncendios').checked;
    const showTalas = document.getElementById('filterTalas').checked;
    const showSiembras = document.getElementById('filterReforestacion').checked;

    if (showIncendios && !map.hasLayer(markers.incendios)) map.addLayer(markers.incendios);
    if (!showIncendios && map.hasLayer(markers.incendios)) map.removeLayer(markers.incendios);
    if (showTalas && !map.hasLayer(markers.talas)) map.addLayer(markers.talas);
    if (!showTalas && map.hasLayer(markers.talas)) map.removeLayer(markers.talas);
    if (showSiembras && !map.hasLayer(markers.siembras)) map.addLayer(markers.siembras);
    if (!showSiembras && map.hasLayer(markers.siembras)) map.removeLayer(markers.siembras);
}

function updateMapStats() {
    document.getElementById('fireCount').textContent = DATA.fires.filter(f => f.status !== 'Simulado').length;
    document.getElementById('talaCount').textContent = DATA.talas.filter(t => t.status !== 'Simulado').length;
    document.getElementById('siembraCount').textContent = DATA.siembras.length;
    const avgRate = Math.round(DATA.siembras.reduce((s, r) => s + r.rate, 0) / DATA.siembras.length);
    document.getElementById('exitoTasa').textContent = avgRate + '%';
}

function initMapControls() {
    // Map tabs
    document.querySelectorAll('.map-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.map-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentMapView = tab.dataset.map;
            const loc = LOCATIONS[currentMapView];
            map.setView(loc.center, loc.zoom);
            renderMapData();
        });
    });

    // Mode toggle
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentMapMode = btn.dataset.mode;
            renderMapData();
        });
    });

    // Filters
    document.querySelectorAll('.filter-chip input').forEach(input => {
        input.addEventListener('change', applyFilters);
    });
}

// ============================================================
// STORE
// ============================================================
function initStore() {
    const grid = document.getElementById('storeGrid');
    grid.innerHTML = PRODUCTS.map(p => `
        <div class="store-card">
            <div class="store-img" style="background:linear-gradient(135deg,${p.color},${p.color}88)">
                ${p.tag ? `<span class="store-tag">${p.tag}</span>` : ''}
                ${p.icon}
            </div>
            <div class="store-info">
                <h4>${p.name}</h4>
                <p>${p.desc}</p>
                <div class="store-price">$${p.price}</div>
                <button class="store-btn" onclick="addToCart(${p.id})">
                    <i class="fas fa-cart-plus"></i> Añadir al Carrito
                </button>
            </div>
        </div>
    `).join('');
}

function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    showNotification(`✅ "${product.name}" añadido al carrito`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
    updateCartBadge();
}

function updateQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(productId);
        return;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
    updateCartBadge();
}

function initCart() {
    updateCartBadge();
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    const isActive = sidebar.classList.contains('active');

    if (isActive) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    } else {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        renderCartItems();
    }

    document.getElementById('cartClose').addEventListener('click', toggleCart);
    overlay.addEventListener('click', toggleCart);
}

function renderCartItems() {
    const container = document.getElementById('cartItems');
    const total = document.getElementById('cartTotal');

    if (cart.length === 0) {
        container.innerHTML = '<p class="cart-empty">Tu carrito está vacío</p>';
        total.textContent = '$0.00';
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-img">${item.icon}</div>
            <div class="cart-item-info">
                <h5>${item.name}</h5>
                <p>$${item.price}</p>
                <div class="cart-item-qty">
                    <button onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span>${item.qty}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
        </div>
    `).join('');

    const sum = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    total.textContent = '$' + sum.toFixed(2);
}

function updateCartBadge() {
    const count = cart.reduce((acc, item) => acc + item.qty, 0);
    document.getElementById('cartBadge').textContent = count;
}

function checkout() {
    if (cart.length === 0) {
        showNotification('❌ Tu carrito está vacío', 'error');
        return;
    }

    const sum = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    totalDonated += sum;
    localStorage.setItem('totalDonated', totalDonated);
    treesPlanted = Math.floor(totalDonated);

    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
    updateCartBadge();
    updateProgress();
    toggleCart();

    showNotification(`🌱 ¡Gracias por tu compra de $${sum.toFixed(2)}! Fondos destinados a reforestación`, 'success');
    playSuccessSound();
}

// ============================================================
// GALERÍA
// ============================================================
const GALLERY_IMAGES = [
    { id: 1, src: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&q=80', thumb: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&q=60', cat: 'dipilto', title: 'Bosques de Dipilto', desc: 'Vista panorámica de los bosques de pino en Dipilto, Nueva Segovia.' },
    { id: 2, src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80', thumb: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&q=60', cat: 'todas', title: 'Bosque Nativo Nicaragüense', desc: 'Densa cobertura forestal en la región norte de Nicaragua.' },
    { id: 3, src: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=600&q=80', thumb: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&q=60', cat: 'incendios', title: 'Incendio Forestal', desc: 'Área afectada por incendio en temporada seca. Pérdida de cobertura vegetal.' },
    { id: 4, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', thumb: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=60', cat: 'cusmapa', title: 'San José de Cusmapa', desc: 'Montañas y valles de San José de Cusmapa, Madriz.' },
    { id: 5, src: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&q=80', thumb: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&q=60', cat: 'reforestacion', title: 'Plantación de Árboles', desc: 'Voluntarios plantando árboles nativos en jornada comunitaria.' },
    { id: 6, src: 'https://images.unsplash.com/photo-1425913397330-cf8af2a40fda?w=600&q=80', thumb: 'https://images.unsplash.com/photo-1425913397330-cf8af2a40fda?w=400&q=60', cat: 'talas', title: 'Tala Ilegal', desc: 'Zona afectada por tala ilegal en área protegida.' },
    { id: 7, src: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&q=80', thumb: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=400&q=60', cat: 'reforestacion', title: 'Vivero Comunitario', desc: 'Nuestro vivero comunitario con miles de plantones nativos listos para sembrar.' },
    { id: 8, src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80', thumb: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=60', cat: 'dipilto', title: 'Dipilto - Zona Alta', desc: 'Zona alta de Dipilto con bosque nuboso y alta biodiversidad.' },
    { id: 9, src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80', thumb: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=60', cat: 'incendios', title: 'Prevención de Incendios', desc: 'Cortafuegos y brigada de prevención de incendios forestales.' },
    { id: 10, src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80', thumb: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=60', cat: 'cusmapa', title: 'Bosque de Cusmapa', desc: 'Denso bosque secundario en proceso de regeneración natural.' },
    { id: 11, src: 'https://images.unsplash.com/photo-1552799446-159ba9523315?w=600&q=80', thumb: 'https://images.unsplash.com/photo-1552799446-159ba9523315?w=400&q=60', cat: 'reforestacion', title: 'Reforestación Exitosa', desc: 'Área reforestada hace 2 años mostrando recuperación notable.' },
    { id: 12, src: 'https://images.unsplash.com/photo-1516634107409-8ee457e3da16?w=600&q=80', thumb: 'https://images.unsplash.com/photo-1516634107409-8ee457e3da16?w=400&q=60', cat: 'talas', title: 'Monitoreo de Talas', desc: 'Equipo de monitoreo evaluando daños por tala selectiva.' }
];

function initGallery() {
    renderGallery('todas');
    initGalleryTabs();
    initLightbox();
}

function renderGallery(filter) {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    const items = filter === 'todas'
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter(img => img.cat === filter);

    grid.innerHTML = items.map((img, i) => `
        <div class="gallery-item" data-index="${i}" data-cat="${img.cat}" onclick="openLightbox(${GALLERY_IMAGES.indexOf(img)})" data-aos="fade-up" data-aos-delay="${(i%6)*50}">
            <img src="${img.thumb}" alt="${img.title}" loading="lazy">
            <div class="gallery-overlay">
                <h4>${img.title}</h4>
                <p>${img.desc}</p>
            </div>
        </div>
    `).join('');

    if (typeof AOS !== 'undefined') AOS.refresh();
}

function initGalleryTabs() {
    document.querySelectorAll('.gallery-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderGallery(tab.dataset.gallery);
        });
    });
}

function initLightbox() {
    document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
    document.getElementById('lightbox')?.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });
    document.getElementById('lightboxPrev')?.addEventListener('click', () => navigateLightbox(-1));
    document.getElementById('lightboxNext')?.addEventListener('click', () => navigateLightbox(1));
}

let currentLightboxIndex = 0;
let currentFilter = 'todas';

function openLightbox(index) {
    currentLightboxIndex = index;
    const img = GALLERY_IMAGES[index];
    const lb = document.getElementById('lightbox');
    document.getElementById('lightboxImg').src = img.src;
    document.getElementById('lightboxCaption').textContent = `${img.title} — ${img.desc}`;
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}

function navigateLightbox(dir) {
    let newIndex = currentLightboxIndex + dir;
    if (newIndex < 0) newIndex = GALLERY_IMAGES.length - 1;
    if (newIndex >= GALLERY_IMAGES.length) newIndex = 0;
    openLightbox(newIndex);
}

// ============================================================
// NOTIFICATIONS
// ============================================================
function showNotification(message, type = 'success') {
    const container = document.getElementById('notificationContainer');
    const notif = document.createElement('div');
    notif.className = 'notification';
    notif.textContent = message;
    notif.style.background = type === 'success'
        ? 'linear-gradient(135deg, #40916c, #52b788)'
        : 'linear-gradient(135deg, #d62828, #f77f00)';
    container.appendChild(notif);

    setTimeout(() => {
        notif.style.animation = 'slideDown 0.4s ease-out reverse';
        setTimeout(() => notif.remove(), 400);
    }, 3500);
}
