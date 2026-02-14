export function Layout(content) {
    const layout = document.createElement('div');

    // PREMIUM NAVIGATION
    const nav = document.createElement('nav');
    nav.className = 'nav-supreme';
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });

    nav.innerHTML = `
        <div class="container nav-content">
            <a href="/" data-link class="logo-container" style="display: flex; align-items: center; height: 100px; overflow: hidden;">
                <img src="/logo.png" alt="Vivencia" class="logo-main">
            </a>
            
            <ul class="nav-links">
                <li><a href="/" data-link class="nav-link">Vision</a></li>
                <li><a href="/about" data-link class="nav-link">The Firm</a></li>
                <li class="dropdown" style="position:relative;">
                    <a href="#" class="nav-link">Programs ▾</a>
                    <div class="dropdown-menu">
                        <a href="/entrepreneurship" data-link class="dropdown-item">Young Entrepreneurship</a>
                        <a href="/finance" data-link class="dropdown-item">Financial Literacy</a>
                        <a href="/ai-robotics" data-link class="dropdown-item">AI & Robotics</a>
                    </div>
                </li>
                <li><a href="/models" data-link class="nav-link">Models</a></li>
            </ul>

            <div style="display: flex; gap: 32px; align-items: center;">
                <a href="https://vivenciaedu.com/erp/index.php" target="_blank" class="nav-link" style="color: var(--p-brand-blue); border-bottom: 2px solid transparent; transition: var(--transition);">Login</a>
                <a href="/contact" data-link class="btn-elite" style="height:50px; padding: 0 40px; border-radius: 8px; font-size: 13px;">Partner With Us</a>
            </div>
        </div>
        <style>
            .dropdown-menu {
                position: absolute;
                top: 100%;
                left: 0;
                background: white;
                min-width: 240px;
                padding: 10px 0;
                box-shadow: var(--shadow-premium);
                border-radius: 12px;
                opacity: 0;
                visibility: hidden;
                transform: translateY(20px);
                transition: var(--transition);
                z-index: 10001;
            }
            .dropdown-item {
                display: block;
                padding: 12px 24px;
                text-decoration: none;
                color: var(--p-navy);
                font-size: 14px;
                font-weight: 600;
                transition: background 0.3s;
            }
            .dropdown-item:hover {
                background: var(--bg-soft);
                color: var(--s-cyan);
            }
            .dropdown:hover .dropdown-menu {
                opacity: 1;
                visibility: visible;
                transform: translateY(10px);
            }
        </style>
    `;

    // WHATSAPP MODAL
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.bottom = '100px';
    modal.style.right = '30px';
    modal.style.width = '350px';
    modal.style.maxWidth = 'calc(100vw - 60px)';
    modal.style.backgroundColor = 'white';
    modal.style.borderRadius = '20px';
    modal.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
    modal.style.zIndex = '10000';
    modal.style.padding = '24px';
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';
    modal.style.transform = 'translateY(20px)';
    modal.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
    modal.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
            <h5 style="margin:0; color:var(--p-navy); font-weight:800; font-size:16px;">Institutional Consultation</h5>
            <button id="close-modal" style="background:none; border:none; cursor:pointer; font-size:24px; color:var(--text-muted); line-height:1;">&times;</button>
        </div>
        <form id="wa-modal-form" style="display:grid; gap:16px;">
            <input type="text" id="wa-school" placeholder="School Name" required style="padding:12px; border:1px solid rgba(0,0,0,0.1); border-radius:8px; font-size:13px; outline:none; font-family:inherit; width:100%; box-sizing:border-box;">
            <input type="text" id="wa-rep" placeholder="Representative Name" required style="padding:12px; border:1px solid rgba(0,0,0,0.1); border-radius:8px; font-size:13px; outline:none; font-family:inherit; width:100%; box-sizing:border-box;">
            <input type="email" id="wa-email" placeholder="Official Email" required style="padding:12px; border:1px solid rgba(0,0,0,0.1); border-radius:8px; font-size:13px; outline:none; font-family:inherit; width:100%; box-sizing:border-box;">
            <textarea id="wa-message" rows="3" placeholder="How can we help?" required style="padding:12px; border:1px solid rgba(0,0,0,0.1); border-radius:8px; font-size:13px; outline:none; font-family:inherit; resize:none; width:100%; box-sizing:border-box;"></textarea>
            <button type="submit" style="background:#25D366; color:white; border:none; padding:12px; border-radius:8px; font-weight:700; cursor:pointer; font-size:14px; display:flex; align-items:center; justify-content:center; gap:8px; width:100%;">
                <i class="fab fa-whatsapp"></i> Start Chat
            </button>
        </form>
    `;

    // SIDEBAR INTERACTIVE BUTTONS
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar-elite';
    sidebar.innerHTML = `
        <a class="sidebar-btn wa" id="sidebar-wa" title="WhatsApp Consultation"><i class="fab fa-whatsapp"></i></a>
        <a href="tel:+918886606701" class="sidebar-btn phone" title="Call Us"><i class="fas fa-phone-alt"></i></a>
        <a href="https://www.facebook.com/profile.php?id=61575078729552" target="_blank" class="sidebar-btn fb" title="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="https://x.com/vivenciaedu" target="_blank" class="sidebar-btn x" title="Twitter / X"><i class="fab fa-x-twitter"></i></a>
        <a href="https://www.instagram.com/vivencia_edu/" target="_blank" class="sidebar-btn ig" title="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="https://www.youtube.com/@Vivenciaedu" target="_blank" class="sidebar-btn yt" title="YouTube"><i class="fab fa-youtube"></i></a>
    `;

    // EVENTS
    let isOpen = false;

    function toggleModal() {
        isOpen = !isOpen;
        if (isOpen) {
            modal.style.opacity = '1';
            modal.style.visibility = 'visible';
            modal.style.transform = 'translateY(0)';
            const waIcon = sidebar.querySelector('#sidebar-wa i');
            if (waIcon) waIcon.className = 'fas fa-times';
            sidebar.querySelector('#sidebar-wa').style.background = '#ef4444';
        } else {
            closeModal();
        }
    }

    function closeModal() {
        isOpen = false;
        modal.style.opacity = '0';
        modal.style.visibility = 'hidden';
        modal.style.transform = 'translateY(20px)';
        const waIcon = sidebar.querySelector('#sidebar-wa i');
        if (waIcon) waIcon.className = 'fab fa-whatsapp';
        sidebar.querySelector('#sidebar-wa').style.background = '#25D366';
    }

    sidebar.querySelector('#sidebar-wa').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleModal();
    });

    document.addEventListener('click', (e) => {
        if (isOpen && !modal.contains(e.target) && !sidebar.contains(e.target)) {
            closeModal();
        }
    });

    // Modal Form Events
    setTimeout(() => {
        const closeBtn = modal.querySelector('#close-modal');
        const form = modal.querySelector('#wa-modal-form');

        if (closeBtn) closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeModal();
        });

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const school = modal.querySelector('#wa-school').value;
                const rep = modal.querySelector('#wa-rep').value;
                const email = modal.querySelector('#wa-email').value;
                const msg = modal.querySelector('#wa-message').value;

                const whatsappMsg = `*New Institutional Inquiry*\n\n*School:* ${school}\n*Representative:* ${rep}\n*Email:* ${email}\n*Message:* ${msg}`;
                const encodedMsg = encodeURIComponent(whatsappMsg);
                window.open(`https://wa.me/918886606701?text=${encodedMsg}`, '_blank');
                closeModal();
                form.reset();
            });
        }
    }, 100);

    // PREMIUM FOOTER
    const footer = document.createElement('footer');
    footer.className = 'footer-supreme';
    footer.style.padding = '120px 0 60px';
    footer.style.borderTop = '1px solid rgba(0,0,0,0.05)';
    footer.innerHTML = `
        <div class="container">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 2.2fr; gap: 60px; margin-bottom: 80px;">
                <div>
                    <img src="/logo.png" alt="Vivencia" class="footer-logo-elite">
                    <p style="color: var(--text-muted); font-size: 15px; line-height: 1.8; margin-bottom: 32px; max-width: 320px; opacity: 0.9;">
                        The School Skill Partner. We take absolute ownership of NEP 2020 skill execution for world-class institutions.
                    </p>
                    <div style="display: flex; gap: 12px;">
                        <a href="https://www.facebook.com/profile.php?id=61575078729552" target="_blank" class="footer-social-btn"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://x.com/vivenciaedu" target="_blank" class="footer-social-btn"><i class="fab fa-x-twitter"></i></a> 
                        <a href="https://www.instagram.com/vivencia_edu/" target="_blank" class="footer-social-btn"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/vivencia-edu-b3675035b" target="_blank" class="footer-social-btn"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://www.youtube.com/@Vivenciaedu" target="_blank" class="footer-social-btn"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div>
                    <h4 style="color: var(--p-navy); margin-bottom: 30px; font-size: 16px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">The Firm</h4>
                    <ul style="list-style: none; padding: 0; display: grid; gap: 16px;">
                        <li><a href="/about" data-link class="footer-link">About Us <i class="fas fa-chevron-right"></i></a></li>
                        <li><a href="/models" data-link class="footer-link">Our Models <i class="fas fa-chevron-right"></i></a></li>
                        <li><a href="/contact" data-link class="footer-link">Partner With Us <i class="fas fa-chevron-right"></i></a></li>
                    </ul>
                </div>
                <div>
                    <h4 style="color: var(--p-navy); margin-bottom: 30px; font-size: 16px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Pedagogy</h4>
                    <ul style="list-style: none; padding: 0; display: grid; gap: 16px;">
                        <li><a href="/entrepreneurship" data-link class="footer-link">Entrepreneurship <i class="fas fa-chevron-right"></i></a></li>
                        <li><a href="/finance" data-link class="footer-link">Financial Literacy <i class="fas fa-chevron-right"></i></a></li>
                        <li><a href="/ai-robotics" data-link class="footer-link">AI & Robotics <i class="fas fa-chevron-right"></i></a></li>
                    </ul>
                </div>
                <div>
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
                        <span style="background: var(--s-cyan-muted); color: var(--p-navy); padding: 4px 12px; border-radius: 6px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Corporate Headquarters</span>
                    </div>
                    <div style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 24px; font-weight: 500;">
                        Plot No: 288, Road No: 78, Jubilee Hills,<br>
                        Hyderabad – 500033, Telangana, India
                    </div>
                    <div class="footer-map-container">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7126839352723!2d78.38883937516574!3d17.425576783468043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7930514ca7d!2sVivencia%20Elite!5e0!3m2!1sen!2sin!4v1707921234567!5m2!1sen!2sin" 
                            width="100%" 
                            height="100%" 
                            style="border:0; filter: grayscale(0.2) contrast(1.1);" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
            <div style="border-top: 1px solid rgba(0,0,0,0.06); padding-top: 30px; display: flex; justify-content: space-between; align-items: center; font-size: 13px; color: var(--text-muted); font-weight: 500;">
                <p>© 2026 Vivencia Educational Services. Global Education Standards.</p>
                <div style="display:flex; gap:32px;">
                    <a href="#" style="text-decoration:none; color:inherit; transition: color 0.3s;" onmouseover="this.style.color='var(--p-blue)'" onmouseout="this.style.color='inherit'">Privacy Policy</a>
                    <a href="#" style="text-decoration:none; color:inherit; transition: color 0.3s;" onmouseover="this.style.color='var(--p-blue)'" onmouseout="this.style.color='inherit'">Terms of Service</a>
                </div>
            </div>
        </div>
    `;

    // BACK TO TOP BUTTON
    const backToTop = document.createElement('a');
    backToTop.href = '#';
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const main = document.createElement('main');
    main.className = 'main-content';
    main.appendChild(content);

    layout.appendChild(nav);
    layout.appendChild(main);
    layout.appendChild(footer);
    layout.appendChild(modal);
    layout.appendChild(sidebar);
    layout.appendChild(backToTop);

    return layout;
}
