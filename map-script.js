// Coordenadas de Dipilto y San José de Cusmapa
const DIPILTO = { lat: 14.4419, lng: -86.3639 };
const CUSMAPA = { lat: 14.3944, lng: -86.5269 };
const CENTER = { lat: 14.417, lng: -86.445 };

// Inicializar el mapa
const map = L.map('map').setView([CENTER.lat, CENTER.lng], 11);

// Agregar capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
}).addTo(map);

// Agregar una capa satellite
const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri',
    maxZoom: 19
});

// Control de capas
const layerControl = L.control.layers(
    {
        'Mapa Base': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(map),
        'Satélite': satelliteLayer
    }
).addTo(map);

// Datos de eventos
const events = {
    fires: [
        {
            id: 1,
            name: 'Incendio Sector Norte - Dipilto',
            lat: 14.5,
            lng: -86.35,
            area: 45.2,
            status: 'Controlado',
            date: '2 junio 2026',
            time: '14:30',
            severity: 'alto',
            description: 'Incendio forestal en bosque de pino. Área afectada: 45.2 hectáreas. Causas: actividad humana.',
            firefighters: 24,
            equipment: 'Helicóptero, vehículos tipo tanque'
        },
        {
            id: 2,
            name: 'Incendio Sector Oeste - Cusmapa',
            lat: 14.35,
            lng: -86.60,
            area: 32.8,
            status: 'Controlado',
            date: '1 junio 2026',
            time: '10:15',
            severity: 'medio',
            description: 'Incendio en zona mixta de bosque tropical y cultivos. Área: 32.8 hectáreas.',
            firefighters: 18,
            equipment: 'Camiones bomberos, motos acuáticas'
        },
        {
            id: 3,
            name: 'Incendio Sector Sur - Dipilto',
            lat: 14.38,
            lng: -86.30,
            area: 18.5,
            status: 'Vigilancia',
            date: '31 mayo 2026',
            time: '16:45',
            severity: 'bajo',
            description: 'Pequeño incendio controlado. Vigilancia preventiva activa. Área: 18.5 hectáreas.',
            firefighters: 12,
            equipment: 'Patrullas terrestres'
        },
        {
            id: 4,
            name: 'Incendio Zona Centro - Cusmapa',
            lat: 14.42,
            lng: -86.55,
            area: 28.0,
            status: 'Controlado',
            date: '30 mayo 2026',
            time: '11:20',
            severity: 'medio',
            description: 'Incendio en área de regeneración natural. Controlado exitosamente.',
            firefighters: 15,
            equipment: 'Equipo especializado'
        }
    ],
    deforestation: [
        {
            id: 10,
            name: 'Despalme Ilegal - Zona Protegida',
            lat: 14.48,
            lng: -86.38,
            area: 12.5,
            status: 'Investigación',
            date: '2 junio 2026',
            time: '09:00',
            severity: 'crítico',
            description: 'Tala ilegal detectada en zona protegida. Se ha iniciado investigación. Aproximadamente 12.5 hectáreas afectadas.',
            trees: 450,
            authorities: 'MARENA, Policía Ambiental'
        },
        {
            id: 11,
            name: 'Despalme Detectado - Dipilto',
            lat: 14.42,
            lng: -86.32,
            area: 8.3,
            status: 'Vigilancia',
            date: '1 junio 2026',
            time: '14:30',
            severity: 'alto',
            description: 'Actividad de tala detectada. Personal responsable identificado. Monitoreo continuo.',
            trees: 290,
            authorities: 'MARENA'
        },
        {
            id: 12,
            name: 'Despalme Fronterizo - Cusmapa',
            lat: 14.35,
            lng: -86.58,
            area: 15.2,
            status: 'Investigación',
            date: '30 mayo 2026',
            time: '08:45',
            severity: 'alto',
            description: 'Zona fronteriza. Se investiga origen del despalme. Colaboración con Honduras.',
            trees: 520,
            authorities: 'MARENA, Aduanas, Honduras'
        },
        {
            id: 13,
            name: 'Extracción Selectiva - Dipilto',
            lat: 14.46,
            lng: -86.34,
            area: 5.8,
            status: 'Legal',
            date: '28 mayo 2026',
            time: '10:00',
            severity: 'bajo',
            description: 'Extracción de maderas con autorización MARENA. Actividad regulada.',
            trees: 180,
            authorities: 'MARENA (Autorizado)'
        }
    ],
    reforested: [
        {
            id: 20,
            name: 'Plantación Exitosa - Dipilto Sur',
            lat: 14.39,
            lng: -86.36,
            area: 18.0,
            status: 'Exitoso',
            date: '15 mayo 2026',
            trees: 1250,
            species: 'Guanacaste, Pino, Laurel',
            survival_rate: 92,
            description: 'Reforestación exitosa con especies nativas. Tasa de supervivencia: 92%.'
        },
        {
            id: 21,
            name: 'Bosque Restaurado - Cusmapa Centro',
            lat: 14.40,
            lng: -86.54,
            area: 22.5,
            status: 'Exitoso',
            date: '1 mayo 2026',
            trees: 1580,
            species: 'Caoba, Madroño, Chaperno',
            survival_rate: 88,
            description: 'Proyecto de restauración forestal. Monitoreo continuo de crecimiento.'
        },
        {
            id: 22,
            name: 'Vivero Comunitario - Dipilto',
            lat: 14.44,
            lng: -86.36,
            area: 2.0,
            status: 'Activo',
            date: '1 enero 2026',
            trees: 8500,
            species: 'Múltiples nativas',
            survival_rate: 95,
            description: 'Vivero comunitario con 8,500 plantones en desarrollo. Base de reforestación.'
        },
        {
            id: 23,
            name: 'Restauración Cuenca Hídrica - Cusmapa',
            lat: 14.36,
            lng: -86.52,
            area: 35.0,
            status: 'Progreso',
            date: '1 febrero 2026',
            trees: 2100,
            species: 'Especies ribereñas',
            survival_rate: 85,
            description: 'Proyecto de protección de cuencas hídricas. Mejora de calidad de agua detectada.'
        }
    ],
    protected: [
        {
            id: 30,
            name: 'Reserva Forestal - Dipilto',
            lat: 14.42,
            lng: -86.32,
            area: 156.0,
            status: 'Protegida',
            description: 'Zona bajo protección legal. Monitoreo continuo por MARENA.',
            protection_level: 'Alto'
        },
        {
            id: 31,
            name: 'Bosque Nuboso - Cusmapa',
            lat: 14.38,
            lng: -86.56,
            area: 248.0,
            status: 'Protegida',
            description: 'Ecosistema crítico. Biodiversidad única de Centroamérica.',
            protection_level: 'Máximo'
        }
    ]
};

// Grupos de marcadores
const fireMarkers = L.featureGroup();
const deforestationMarkers = L.featureGroup();
const reforestedMarkers = L.featureGroup();
const protectedMarkers = L.featureGroup();

// Función para crear iconos personalizados
function createMarkerIcon(type, severity = null) {
    const colors = {
        fire: {
            bajo: '#ff9944',
            medio: '#ff6644',
            alto: '#ff4444'
        },
        deforestation: {
            bajo: '#ffaa22',
            medio: '#ff7722',
            crítico: '#dd2c2c'
        },
        reforested: '#52b788',
        protected: '#1b4332'
    };

    let color = colors[type];
    if (severity && colors[type][severity]) {
        color = colors[type][severity];
    }

    return L.divIcon({
        className: `custom-marker ${type}`,
        html: `<div style="background: ${color};"></div>`,
        iconSize: [40, 40]
    });
}

// Agregar marcadores de incendios
events.fires.forEach(fire => {
    const marker = L.marker([fire.lat, fire.lng], {
        icon: createMarkerIcon('fire', fire.severity)
    })
    .bindPopup(createPopup('fire', fire))
    .on('click', () => showMarkerDetails('fire', fire));
    
    fireMarkers.addLayer(marker);
});

// Agregar marcadores de despalme
events.deforestation.forEach(def => {
    const marker = L.marker([def.lat, def.lng], {
        icon: createMarkerIcon('deforestation', def.severity)
    })
    .bindPopup(createPopup('deforestation', def))
    .on('click', () => showMarkerDetails('deforestation', def));
    
    deforestationMarkers.addLayer(marker);
});

// Agregar marcadores de reforestación
events.reforested.forEach(ref => {
    const marker = L.marker([ref.lat, ref.lng], {
        icon: createMarkerIcon('reforested')
    })
    .bindPopup(createPopup('reforested', ref))
    .on('click', () => showMarkerDetails('reforested', ref));
    
    reforestedMarkers.addLayer(marker);
});

// Agregar áreas protegidas como círculos
events.protected.forEach(prot => {
    const circle = L.circle([prot.lat, prot.lng], {
        radius: prot.area * 100,
        color: '#1b4332',
        weight: 2,
        opacity: 0.3,
        fillColor: '#1b4332',
        fillOpacity: 0.1
    })
    .bindPopup(createPopup('protected', prot))
    .on('click', () => showMarkerDetails('protected', prot));
    
    protectedMarkers.addLayer(circle);
});

// Agregar grupos al mapa por defecto
fireMarkers.addTo(map);
deforestationMarkers.addTo(map);
reforestedMarkers.addTo(map);
protectedMarkers.addTo(map);

// Agregar a control de capas
layerControl.addOverlay(fireMarkers, '🔥 Incendios');
layerControl.addOverlay(deforestationMarkers, '🪚 Despalmes');
layerControl.addOverlay(reforestedMarkers, '🌱 Reforestación');
layerControl.addOverlay(protectedMarkers, '🛡️ Áreas Protegidas');

// Función para crear popup
function createPopup(type, data) {
    let html = `<div class="popup-title">${data.name}</div>`;
    html += `<div class="popup-info">`;
    
    if (type === 'fire') {
        html += `<p><strong>Área:</strong> ${data.area} ha</p>`;
        html += `<p><strong>Estado:</strong> ${data.status}</p>`;
        html += `<p><strong>Fecha:</strong> ${data.date} ${data.time}</p>`;
        html += `<p><strong>Personal:</strong> ${data.firefighters} bomberos</p>`;
    } else if (type === 'deforestation') {
        html += `<p><strong>Área:</strong> ${data.area} ha</p>`;
        html += `<p><strong>Estado:</strong> ${data.status}</p>`;
        html += `<p><strong>Árboles:</strong> ~${data.trees}</p>`;
    } else if (type === 'reforested') {
        html += `<p><strong>Área:</strong> ${data.area} ha</p>`;
        html += `<p><strong>Árboles:</strong> ${data.trees}</p>`;
        html += `<p><strong>Tasa Éxito:</strong> ${data.survival_rate}%</p>`;
    } else if (type === 'protected') {
        html += `<p><strong>Área:</strong> ${data.area} ha</p>`;
        html += `<p><strong>Protección:</strong> ${data.protection_level}</p>`;
    }
    
    html += `</div>`;
    return html;
}

// Mostrar detalles del marcador
function showMarkerDetails(type, data) {
    const panel = document.getElementById('marker-details');
    const title = document.getElementById('details-title');
    const body = document.getElementById('details-body');

    title.textContent = data.name;
    
    let html = '';
    if (type === 'fire') {
        html = `
            <div class="detail-item critical">
                <div class="detail-label">🔥 Incendio Forestal</div>
                <div class="detail-value">${data.status}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Área Afectada</div>
                <div class="detail-value">${data.area} hectáreas</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Severidad</div>
                <div class="detail-value">${data.severity.toUpperCase()}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Fecha de Reporte</div>
                <div class="detail-value">${data.date} - ${data.time}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Personal Responsable</div>
                <div class="detail-value">${data.firefighters} bomberos</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Equipamiento</div>
                <div class="detail-value">${data.equipment}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Descripción</div>
                <div class="detail-value">${data.description}</div>
            </div>
        `;
    } else if (type === 'deforestation') {
        html = `
            <div class="detail-item warning">
                <div class="detail-label">🪚 Despalme Detectado</div>
                <div class="detail-value">${data.status}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Área Afectada</div>
                <div class="detail-value">${data.area} hectáreas</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Árboles Removidos</div>
                <div class="detail-value">Aproximadamente ${data.trees} árboles</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Severidad</div>
                <div class="detail-value">${data.severity.toUpperCase()}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Fecha de Detección</div>
                <div class="detail-value">${data.date} - ${data.time}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Autoridades Involucradas</div>
                <div class="detail-value">${data.authorities}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Descripción</div>
                <div class="detail-value">${data.description}</div>
            </div>
        `;
    } else if (type === 'reforested') {
        html = `
            <div class="detail-item success">
                <div class="detail-label">🌱 Reforestación</div>
                <div class="detail-value">${data.status}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Área Restaurada</div>
                <div class="detail-value">${data.area} hectáreas</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Árboles Plantados</div>
                <div class="detail-value">${data.trees} árboles</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Especies Nativas</div>
                <div class="detail-value">${data.species}</div>
            </div>
            <div class="detail-item success">
                <div class="detail-label">Tasa de Supervivencia</div>
                <div class="detail-value">${data.survival_rate}%</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Fecha de Inicio</div>
                <div class="detail-value">${data.date}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Descripción</div>
                <div class="detail-value">${data.description}</div>
            </div>
        `;
    } else if (type === 'protected') {
        html = `
            <div class="detail-item success">
                <div class="detail-label">🛡️ Área Protegida</div>
                <div class="detail-value">${data.status}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Extensión</div>
                <div class="detail-value">${data.area} hectáreas</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Nivel de Protección</div>
                <div class="detail-value">${data.protection_level}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Descripción</div>
                <div class="detail-value">${data.description}</div>
            </div>
        `;
    }

    body.innerHTML = html;
    panel.classList.add('active');

    // Centrarse en el marcador
    map.setView([data.lat, data.lng], 13);
}

// Cerrar panel de detalles
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('marker-details').classList.remove('active');
});

// Tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.getAttribute('data-tab');
        
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(`tab-${tabName}`).classList.add('active');
    });
});

// Filtros
document.getElementById('filter-fires').addEventListener('change', (e) => {
    if (e.target.checked) {
        map.addLayer(fireMarkers);
    } else {
        map.removeLayer(fireMarkers);
    }
});

document.getElementById('filter-deforestation').addEventListener('change', (e) => {
    if (e.target.checked) {
        map.addLayer(deforestationMarkers);
    } else {
        map.removeLayer(deforestationMarkers);
    }
});

document.getElementById('filter-reforested').addEventListener('change', (e) => {
    if (e.target.checked) {
        map.addLayer(reforestedMarkers);
    } else {
        map.removeLayer(reforestedMarkers);
    }
});

document.getElementById('filter-protected').addEventListener('change', (e) => {
    if (e.target.checked) {
        map.addLayer(protectedMarkers);
    } else {
        map.removeLayer(protectedMarkers);
    }
});

// Botones de control
document.getElementById('locate-btn').addEventListener('click', () => {
    map.setView([CENTER.lat, CENTER.lng], 11);
});

document.getElementById('fullscreen-btn').addEventListener('click', () => {
    const mapElement = document.getElementById('map');
    if (mapElement.requestFullscreen) {
        mapElement.requestFullscreen();
    }
});

document.getElementById('refresh-btn').addEventListener('click', () => {
    console.log('Datos actualizados');
    document.getElementById('update-time').textContent = new Date().toLocaleString('es-ES');
});

document.getElementById('download-btn').addEventListener('click', () => {
    alert('Descargando reporte en formato PDF...');
    // Aquí iría la lógica de descarga
});
