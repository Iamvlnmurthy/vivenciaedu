export function Layout(content) {
    const layout = document.createElement('div');

    // NAVIGATION SUPREME
    const nav = document.createElement('nav');
    nav.className = 'nav-supreme';
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });

    nav.innerHTML = `
        <div class="container nav-content">
            <a href="/" data-link class="logo-container">
                <img src="/logo.png?v=5" alt="Vivencia" class="logo-main" style="height: 48px;">
            </a>
            
            <ul class="nav-links">
                <li><a href="/" data-link class="nav-link">Vision</a></li>
                <li><a href="/about" data-link class="nav-link">The Firm</a></li>
                <li class="dropdown" style="position:relative;">
                    <a href="#" class="nav-link">Programs ▾</a>
                    <div class="dropdown-menu" style="position:absolute; top:100%; left:0; background:white; min-width:240px; padding:20px; box-shadow:var(--glass-shadow); border-radius:8px; opacity:0; visibility:hidden; transition:var(--transition);">
                        <a href="/entrepreneurship" data-link class="dropdown-item" style="display:block; padding:12px 0; text-decoration:none; color:var(--p-navy); font-size:14px; font-weight:600;">Young Entrepreneurship</a>
                        <a href="/finance" data-link class="dropdown-item" style="display:block; padding:12px 0; text-decoration:none; color:var(--p-navy); font-size:14px; font-weight:600;">Financial Literacy</a>
                        <a href="/ai-robotics" data-link class="dropdown-item" style="display:block; padding:12px 0; text-decoration:none; color:var(--p-navy); font-size:14px; font-weight:600;">AI & Robotics</a>
                    </div>
                </li>
                <li><a href="/models" data-link class="nav-link">Models</a></li>
                <li><a href="/contact" data-link class="btn-elite" style="padding:0 24px; height:44px; font-size:12px;">Partner With Us</a></li>
            </ul>
        </div>
    `;

    // Dropdown Logic
    const dd = nav.querySelector('.dropdown');
    const ddMenu = nav.querySelector('.dropdown-menu');
    dd.addEventListener('mouseenter', () => { ddMenu.style.opacity = '1'; ddMenu.style.visibility = 'visible'; ddMenu.style.transform = 'translateY(10px)'; });
    dd.addEventListener('mouseleave', () => { ddMenu.style.opacity = '0'; ddMenu.style.visibility = 'hidden'; ddMenu.style.transform = 'translateY(0)'; });

    // FOOTER SUPREME
    const footer = document.createElement('footer');
    footer.style.background = 'var(--p-navy)';
    footer.style.color = 'white';
    footer.style.padding = '180px 0 60px';
    footer.innerHTML = `
        <div class="container">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 80px; margin-bottom: 80px;">
                <div>
                    <!-- Logo Hack: Grayscale->Invert->Screen to make white bg transparent and black text white -->
                    <img src="/logo.png?v=5" alt="Vivencia" style="height: 80px; margin-bottom: 32px; filter: grayscale(1) invert(1) brightness(2); mix-blend-mode: screen;">
                    <p style="opacity: 0.6; font-size: 15px; line-height: 2; max-width: 400px;">The Elite School Skill Partner ensuring NEP 2020 professional execution within the premium academic ecosystem.</p>
                </div>
                <div>
                    <h4 style="font-family:var(--font-display); font-size:14px; letter-spacing:3px; text-transform:uppercase; margin-bottom:40px; color:var(--s-cyan);">Expertise</h4>
                    <ul style="list-style:none; line-height:3; font-size:14px; font-weight:500;">
                        <li><a href="/entrepreneurship" data-link style="color:white; text-decoration:none; opacity:0.7;">Entrepreneurship</a></li>
                        <li><a href="/finance" data-link style="color:white; text-decoration:none; opacity:0.7;">Financial Literacy</a></li>
                        <li><a href="/ai-robotics" data-link style="color:white; text-decoration:none; opacity:0.7;">AI & Robotics</a></li>
                    </ul>
                </div>
                <div>
                    <h4 style="font-family:var(--font-display); font-size:14px; letter-spacing:3px; text-transform:uppercase; margin-bottom:40px; color:var(--s-cyan);">Company</h4>
                    <ul style="list-style:none; line-height:3; font-size:14px; font-weight:500;">
                        <li><a href="/about" data-link style="color:white; text-decoration:none; opacity:0.7;">About Firm</a></li>
                        <li><a href="/models" data-link style="color:white; text-decoration:none; opacity:0.7;">Execution Models</a></li>
                        <li><a href="/contact" data-link style="color:white; text-decoration:none; opacity:0.7;">Partner Contact</a></li>
                    </ul>
                </div>
                <div style="background:rgba(255,255,255,0.03); padding:40px; border-radius:8px;">
                    <h4 style="font-family:var(--font-display); font-size:14px; letter-spacing:3px; text-transform:uppercase; margin-bottom:24px; color:white;">Institutional Office</h4>
                    <p style="opacity:0.6; font-size:14px; line-height:2;">partner@vivencia.in</p>
                    <p style="opacity:0.6; font-size:14px; line-height:2;">Hyderabad, Telangana</p>
                    <p style="opacity:0.6; font-size:14px; line-height:2; margin-top:16px;">+91 97000 00000</p>
                </div>
            </div>
            <div style="padding-top:40px; border-top:1px solid rgba(255,255,255,0.08); display:flex; justify-content:space-between; align-items:center; font-size:12px; opacity:0.4; letter-spacing:1px;">
                <span>© 2026 VIVENCIA ELITE. ALL RIGHTS RESERVED.</span>
                <span>NEP 2020 COMPLIANT EXECUTION</span>
            </div>
        </div>
    `;

    const main = document.createElement('main');
    main.style.marginTop = '0'; // Layout handles hero overlap
    main.appendChild(content);

    layout.appendChild(nav);
    layout.appendChild(main);
    layout.appendChild(footer);

    return layout;
}
