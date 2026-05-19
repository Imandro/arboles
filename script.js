// Variables globales
let totalDonated = parseFloat(localStorage.getItem('totalDonated')) || 0;
let treesPlanted = Math.floor(totalDonated);
const goal = 1000;
let celebrationTriggered = false;

// Actualizar la interfaz cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    updateProgress();
    setupEventListeners();
});

// Configurar event listeners
function setupEventListeners() {
    const donationInput = document.getElementById('donationAmount');
    
    // Permitir Enter para donar
    donationInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            donate(Number(donationInput.value));
        }
    });

    // Limpiar el campo cuando enfoca
    donationInput.addEventListener('focus', function() {
        if (this.value === '') {
            this.value = '';
        }
    });
}

// Actualizar la barra de progreso y contadores
function updateProgress() {
    let progressPercent = (treesPlanted / goal) * 100;
    
    if (progressPercent > 100) {
        progressPercent = 100;
    }

    // Actualizar barra de progreso
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = progressPercent + '%';

    // Actualizar estadísticas
    animateCounter('progressText', treesPlanted);
    animateCounter('totalDonated', totalDonated.toFixed(2));
    
    // Actualizar porcentaje
    document.getElementById('progressPercent').textContent = Math.round(progressPercent) + '%';

    // Celebración al alcanzar el objetivo
    if (treesPlanted >= goal && !celebrationTriggered) {
        celebrationTriggered = true;
        triggerCelebration();
    }
}

// Animar números del contador
function animateCounter(elementId, finalValue) {
    const element = document.getElementById(elementId);
    const startValue = parseFloat(element.textContent) || 0;
    const duration = 600;
    const start = Date.now();

    function updateValue() {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        
        if (elementId === 'totalDonated') {
            const current = startValue + (finalValue - startValue) * easeOutQuad(progress);
            element.textContent = current.toFixed(2);
        } else {
            const current = Math.floor(startValue + (finalValue - startValue) * easeOutQuad(progress));
            element.textContent = current;
        }

        if (progress < 1) {
            requestAnimationFrame(updateValue);
        }
    }

    updateValue();
}

// Función de easing
function easeOutQuad(t) {
    return t * (2 - t);
}

// Establecer cantidad predefinida
function setAmount(amount) {
    document.getElementById('donationAmount').value = amount;
}

// Procesar donación
function donate(amount) {
    if (isNaN(amount) || amount <= 0) {
        showNotification('❌ Por favor ingresa una cantidad válida', 'error');
        return;
    }

    totalDonated += amount;
    localStorage.setItem('totalDonated', totalDonated);
    treesPlanted = Math.floor(totalDonated);
    
    // Limpiar el input
    document.getElementById('donationAmount').value = '';

    // Reproducir sonido de éxito
    playSuccessSound();

    // Actualizar la interfaz
    updateProgress();

    // Mostrar notificación
    showNotification(`✅ ¡Gracias! Donaste $${amount.toFixed(2)} y plantaste ${Math.floor(amount)} árbol(es) en Dipilto y San José de Cusmapa`, 'success');
}

// Mostrar notificación
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.background = type === 'success' 
        ? 'linear-gradient(135deg, #40916c 0%, #52b788 100%)'
        : 'linear-gradient(135deg, #d62828 0%, #f77f00 100%)';
    
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideDown 0.5s ease-out reverse';
        setTimeout(() => notification.remove(), 500);
    }, 4000);
}

// Celebración al alcanzar objetivo
function triggerCelebration() {
    // Crear confeti
    createConfetti(150);

    // Mostrar mensaje especial
    showNotification('🎉 ¡¡¡FELICIDADES!!! ¡Alcanzamos 1000 árboles plantados en Nicaragua! 🎉', 'success');

    // Animar barra de progreso
    const progressBar = document.getElementById('progressBar');
    progressBar.style.animation = 'pulse 0.5s ease-out 3';

    // Reproducir sonido celebratorio
    playCelebrationSound();
}

// Crear efecto de confeti
function createConfetti(count) {
    const colors = ['#2d6a4f', '#40916c', '#52b788', '#74c69d', '#ff6b6b', '#4ecdc4'];

    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.zIndex = '999';
        confetti.style.pointerEvents = 'none';
        confetti.style.opacity = '1';
        confetti.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';

        const duration = 2.5 + Math.random() * 1.5;
        const delay = Math.random() * 0.5;
        const rotation = Math.random() * 360;

        confetti.style.animation = `confetti-fall ${duration}s linear ${delay}s forwards`;
        confetti.style.transform = `rotate(${rotation}deg)`;

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), (duration + delay) * 1000);
    }
}

// Reproducir sonido de éxito
function playSuccessSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();

        oscillator.connect(gain);
        gain.connect(audioContext.destination);

        oscillator.frequency.value = 800;
        oscillator.type = 'sine';

        gain.gain.setValueAtTime(0.2, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.15);
    } catch (e) {
        // Ignorar si hay error
    }
}

// Reproducir sonido de celebración
function playCelebrationSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const notes = [523.25, 659.25, 783.99, 1046.50]; // Do, Mi, Sol, Do agudo

        notes.forEach((freq, index) => {
            setTimeout(() => {
                const oscillator = audioContext.createOscillator();
                const gain = audioContext.createGain();

                oscillator.connect(gain);
                gain.connect(audioContext.destination);

                oscillator.frequency.value = freq;
                oscillator.type = 'sine';

                gain.gain.setValueAtTime(0.2, audioContext.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.3);
            }, index * 150);
        });
    } catch (e) {
        // Ignorar si hay error
    }
}

// Sincronizar entre pestañas
window.addEventListener('storage', (event) => {
    if (event.key === 'totalDonated') {
        totalDonated = parseFloat(event.newValue) || 0;
        treesPlanted = Math.floor(totalDonated);
        updateProgress();
    }
});

// Event listener para scroll mejorado
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 10px 30px rgba(27, 67, 50, 0.3)';
    } else {
        header.style.boxShadow = '0 4px 15px rgba(27, 67, 50, 0.15)';
    }
});
