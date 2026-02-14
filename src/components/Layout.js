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
                        <a href="#" style="width:40px; height:40px; border-radius:50%; background:white; display:flex; align-items:center; justify-content:center; box-shadow:var(--shadow-premium); color:var(--p-navy);"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" style="width:40px; height:40px; border-radius:50%; background:white; display:flex; align-items:center; justify-content:center; box-shadow:var(--shadow-premium); color:var(--p-navy);"><i class="fab fa-twitter"></i></a>
                        <a href="#" style="width:40px; height:40px; border-radius:50%; background:white; display:flex; align-items:center; justify-content:center; box-shadow:var(--shadow-premium); color:var(--p-navy);"><i class="fab fa-instagram"></i></a>
                        <a href="#" style="width:40px; height:40px; border-radius:50%; background:white; display:flex; align-items:center; justify-content:center; box-shadow:var(--shadow-premium); color:var(--p-navy);"><i class="fab fa-linkedin-in"></i></a>
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
                    <h4 style="color: var(--p-navy); margin-bottom: 30px; font-size: 18px;">Newsletter</h4>
                    <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 20px;">Stay updated with NEP 2020 insights.</p>
                    <div style="display:flex; gap:10px;">
                        <input type="email" placeholder="Your email" style="flex:1; padding:12px 20px; border-radius:30px; border:1px solid rgba(0,0,0,0.1); font-size:14px;">
                        <button style="background:var(--s-cyan); color:white; border:none; padding:0 20px; border-radius:30px; font-weight:700; cursor:pointer;">Go</button>
                    </div>
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
    </footer>
    `;

    const main = document.createElement('main');
    main.style.marginTop = '0';
    main.appendChild(content);

    layout.appendChild(nav);
    layout.appendChild(main);
    layout.appendChild(footer);

    return layout;
}
