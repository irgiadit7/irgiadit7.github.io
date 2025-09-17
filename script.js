document.addEventListener('DOMContentLoaded', () => {

    // --- Hamburger Menu Logic ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.navbar');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('nav-active');
        });
    }

    // --- Modal Elements ---
    const modalOverlay = document.getElementById('modal-overlay');
    const registerModal = document.getElementById('register-modal');
    const loginModal = document.getElementById('login-modal');
    const allCloseButtons = document.querySelectorAll('.close-modal');
    
    const loginLink = document.querySelector('.btn-login');
    const registerLink = document.querySelector('.btn-signup');

    const switchToLoginLink = document.getElementById('switch-to-login');
    const switchToRegisterLink = document.getElementById('switch-to-register');

    // --- Modal Control Functions ---
    const openModal = (modalToOpen) => {
        if (modalOverlay && modalToOpen) {
            modalOverlay.style.display = 'flex';
            loginModal.style.display = 'none'; // Pastikan semua modal lain tersembunyi
            registerModal.style.display = 'none';
            modalToOpen.style.display = 'block'; // Tampilkan hanya modal yang diminta
        }
    };

    const closeModal = () => {
        if (modalOverlay) {
            modalOverlay.style.display = 'none';
        }
    };

    // --- Event Listeners for Modals ---
    if (loginLink) {
        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(loginModal);
        });
    }

    if (registerLink) {
        registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(registerModal);
        });
    }

    allCloseButtons.forEach(button => button.addEventListener('click', closeModal));
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    if (switchToLoginLink) {
        switchToLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(loginModal);
        });
    }

    if (switchToRegisterLink) {
        switchToRegisterLink.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(registerModal);
        });
    }

    // --- Form Validation ---
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const password = document.getElementById('reg-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const phone = document.getElementById('reg-phone').value;

            if (password !== confirmPassword) {
                alert('Konfirmasi kata sandi tidak cocok!');
                return;
            }
            if (phone.length < 9 || phone.length > 12) {
                alert('Nomor HP harus terdiri dari 9 hingga 12 digit.');
                return;
            }
            alert('Pendaftaran berhasil! (Ini adalah dummy)');
            closeModal();
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Login berhasil! (Ini adalah dummy)');
            closeModal();
        });
    }

    // --- Google Button Dummy Alert ---
    const googleButtons = document.querySelectorAll('.btn-google');
    googleButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Berhasil!! Ini hanyalah dummy untuk project');
        });
    });

    // --- Course Filter Logic ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.getAttribute('data-filter');
            courseCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'semua' || filter === category) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });

    // Dark Mode Logic
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    // Form Submission Logic
    const form = document.querySelector('form');
    const submitButton = document.querySelector('button[type="submit"]');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        submitButton.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            alert('Form submitted successfully!');
            submitButton.disabled = false;
        }, 2000);
    });

    // Scroll to Top Logic
    const scrollToTopButton = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});