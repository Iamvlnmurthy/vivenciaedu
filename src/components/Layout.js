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
            <a href="/" data-link class="logo-container" style="display: flex; align-items: center; height: 80px; overflow: hidden;">
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
                z-index: 1000;
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

    // FLOATING BUTTON
    const whatsappBtn = document.createElement('div');
    whatsappBtn.style.position = 'fixed';
    whatsappBtn.style.bottom = '30px';
    whatsappBtn.style.right = '30px';
    whatsappBtn.style.width = '60px';
    whatsappBtn.style.height = '60px';
    whatsappBtn.style.borderRadius = '50%';
    whatsappBtn.style.background = '#25D366';
    whatsappBtn.style.color = 'white';
    whatsappBtn.style.display = 'flex';
    whatsappBtn.style.alignItems = 'center';
    whatsappBtn.style.justifyContent = 'center';
    whatsappBtn.style.fontSize = '32px';
    whatsappBtn.style.boxShadow = '0 10px 30px rgba(37, 211, 102, 0.4)';
    whatsappBtn.style.zIndex = '9999';
    whatsappBtn.style.cursor = 'pointer';
    whatsappBtn.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), background 0.3s';
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';

    // EVENTS
    let isOpen = false;

    function toggleModal() {
        isOpen = !isOpen;
        if (isOpen) {
            modal.style.opacity = '1';
            modal.style.visibility = 'visible';
            modal.style.transform = 'translateY(0)';
            whatsappBtn.style.transform = 'rotate(90deg)';
            whatsappBtn.innerHTML = '<i class="fas fa-times"></i>';
            whatsappBtn.style.background = '#ef4444'; // Red for close
        } else {
            closeModal();
        }
    }

    function closeModal() {
        isOpen = false;
        modal.style.opacity = '0';
        modal.style.visibility = 'hidden';
        modal.style.transform = 'translateY(20px)';
        whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
        whatsappBtn.style.transform = 'rotate(0)';
        whatsappBtn.style.background = '#25D366';
    }

    whatsappBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleModal();
    });

    document.addEventListener('click', (e) => {
        if (isOpen && !modal.contains(e.target) && !whatsappBtn.contains(e.target)) {
            closeModal();
        }
    });

    whatsappBtn.addEventListener('mouseenter', () => { if (!isOpen) whatsappBtn.style.transform = 'scale(1.1)'; });
    whatsappBtn.addEventListener('mouseleave', () => { if (!isOpen) whatsappBtn.style.transform = 'scale(1)'; });

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
    footer.style.background = '#F8FAFC';
    footer.style.padding = '120px 0 60px';
    footer.style.borderTop = '1px solid rgba(0,0,0,0.05)';
    footer.innerHTML = `
        <div class="container">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 60px; margin-bottom: 80px;">
                <div>
                    <img src="/logo.png" alt="Vivencia" style="height: 50px; margin-bottom: 30px;">
                    <p style="color: var(--text-muted); font-size: 15px; line-height: 1.8; margin-bottom: 30px; max-width: 320px;">
                        The School Skill Partner. We take absolute ownership of NEP 2020 skill execution for premium institutions.
                    </p>
                    <div style="display: flex; gap: 15px;">
                        <a href="https://www.facebook.com/profile.php?id=61575078729552" target="_blank" style="width:40px; height:40px; border-radius:50%; background:white; display:flex; align-items:center; justify-content:center; box-shadow:var(--shadow-premium); color:var(--p-navy); transition: transform 0.2s;"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://x.com/vivenciaedu" target="_blank" style="width:40px; height:40px; border-radius:50%; background:white; display:flex; align-items:center; justify-content:center; box-shadow:var(--shadow-premium); color:var(--p-navy); transition: transform 0.2s;"><i class="fab fa-twitter"></i></a> <!-- Using Twitter icon for X as FA 6.4 might not have X logo yet, or use fa-x-twitter if available -->
                        <a href="https://www.instagram.com/vivencia_edu/" target="_blank" style="width:40px; height:40px; border-radius:50%; background:white; display:flex; align-items:center; justify-content:center; box-shadow:var(--shadow-premium); color:var(--p-navy); transition: transform 0.2s;"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/vivencia-edu-b3675035b" target="_blank" style="width:40px; height:40px; border-radius:50%; background:white; display:flex; align-items:center; justify-content:center; box-shadow:var(--shadow-premium); color:var(--p-navy); transition: transform 0.2s;"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://www.youtube.com/@Vivenciaedu" target="_blank" style="width:40px; height:40px; border-radius:50%; background:white; display:flex; align-items:center; justify-content:center; box-shadow:var(--shadow-premium); color:var(--p-navy); transition: transform 0.2s;"><i class="fab fa-youtube"></i></a>
                    </div>
                    <div style="margin-top: 30px; font-size: 14px; color: var(--text-muted); line-height: 1.6;">
                        <strong>Headquarters:</strong><br>
                        Plot No: 288, Road No: 78,<br>
                        Jubilee Hills, Hyderabad – 500033,<br>
                        Telangana, India
                    </div>
                </div>
                <div>
                    <h4 style="color: var(--p-navy); margin-bottom: 30px; font-size: 18px;">Quick Links</h4>
                    <ul style="list-style: none; padding: 0; display: grid; gap: 15px;">
                        <li><a href="/about" data-link style="text-decoration:none; color:var(--text-muted); font-size:15px;">The Firm</a></li>
                        <li><a href="/models" data-link style="text-decoration:none; color:var(--text-muted); font-size:15px;">Models</a></li>
                        <li><a href="/contact" data-link style="text-decoration:none; color:var(--text-muted); font-size:15px;">Partner Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 style="color: var(--p-navy); margin-bottom: 30px; font-size: 18px;">Expertise</h4>
                    <ul style="list-style: none; padding: 0; display: grid; gap: 15px;">
                        <li><a href="/entrepreneurship" data-link style="text-decoration:none; color:var(--text-muted); font-size:15px;">Entrepreneurship</a></li>
                        <li><a href="/finance" data-link style="text-decoration:none; color:var(--text-muted); font-size:15px;">Financial Literacy</a></li>
                        <li><a href="/ai-robotics" data-link style="text-decoration:none; color:var(--text-muted); font-size:15px;">AI & Robotics</a></li>
                    </ul>
                </div>
                <div>
                    <h4 style="color: var(--p-navy); margin-bottom: 30px; font-size: 18px;">Contact Us</h4>
                    <ul style="list-style: none; padding: 0; display: grid; gap: 15px;">
                         <li style="color:var(--text-muted); font-size:15px;"><i class="fas fa-phone-alt" style="margin-right: 10px; color: var(--s-cyan);"></i> +91-88866 06701</li>
                         <li style="color:var(--text-muted); font-size:15px;"><i class="fas fa-envelope" style="margin-right: 10px; color: var(--s-cyan);"></i> info@vivenciaedu.com</li>
                    </ul>
                </div>
            </div>
            <div style="border-top: 1px solid rgba(0,0,0,0.05); padding-top: 30px; display: flex; justify-content: space-between; align-items: center; font-size: 14px; color: var(--text-muted);">
                <p>© 2026 Vivencia Elite. All Rights Reserved.</p>
                <div style="display:flex; gap:30px;">
                    <a href="#" style="text-decoration:none; color:inherit;">Privacy Policy</a>
                    <a href="#" style="text-decoration:none; color:inherit;">Terms of Service</a>
                </div>
            </div>
        </div>
    `;

    const main = document.createElement('main');
    main.style.marginTop = '0';
    main.appendChild(content);

    layout.appendChild(nav);
    layout.appendChild(main);
    layout.appendChild(footer);
    layout.appendChild(modal);
    layout.appendChild(whatsappBtn);

    return layout;
}
