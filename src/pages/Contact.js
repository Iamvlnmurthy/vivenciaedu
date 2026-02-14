export async function Contact() {
    const page = document.createElement('div');
    page.innerHTML = `
        <section style="padding-top:180px; min-height:100vh; background: radial-gradient(circle at bottom right, rgba(0, 42, 102, 0.05), transparent 800px);">
            <div class="container">
                <div class="reveal" style="display: grid; grid-template-columns: 1fr 1fr; gap: 120px; align-items: start;">
                    <div>
                        <span class="label-sup">Strategic Partnership</span>
                        <h1 style="margin-bottom:40px;">Partner With <br>Vivencia.</h1>
                        <p style="font-size: 18px; color: var(--text-muted); line-height:2; margin-bottom:60px;">Select the right execution model for your institution. Our firm handles everything from mentor onboarding to project showcases.</p>
                        
                        <div style="display:grid; gap:32px;">
                            <div style="display:flex; align-items:center; gap:20px;">
                                <div style="width:48px; height:48px; background:rgba(0,42,102,0.05); border-radius:50%; display:flex; align-items:center; justify-content:center; color:var(--p-navy); font-size:20px;"><i class="fas fa-envelope"></i></div>
                                <div>
                                    <h5 style="color:var(--p-navy); margin:0;">Email Support</h5>
                                    <p style="font-size:14px; color:var(--text-muted); margin:0;">info@vivenciaedu.com</p>
                                </div>
                            </div>
                            <div style="display:flex; align-items:center; gap:20px;">
                                <div style="width:48px; height:48px; background:rgba(0,42,102,0.05); border-radius:50%; display:flex; align-items:center; justify-content:center; color:var(--p-navy); font-size:20px;"><i class="fas fa-phone-alt"></i></div>
                                <div>
                                    <h5 style="color:var(--p-navy); margin:0;">Phone</h5>
                                    <p style="font-size:14px; color:var(--text-muted); margin:0;">+91-88866 06701</p>
                                </div>
                            </div>
                            <div style="display:flex; align-items:center; gap:20px;">
                                <div style="width:48px; height:48px; background:rgba(0,42,102,0.05); border-radius:50%; display:flex; align-items:center; justify-content:center; color:var(--p-navy); font-size:20px;"><i class="fas fa-map-marker-alt"></i></div>
                                <div>
                                    <h5 style="color:var(--p-navy); margin:0;">Headquarters</h5>
                                    <p style="font-size:14px; color:var(--text-muted); margin:0;">Plot No: 288, Road No: 78, Jubilee Hills,<br>Hyderabad – 500033, Telangana, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="glass-card" style="padding:60px; border-top:6px solid var(--p-navy); border-left:none;">
                        <h4 style="font-family:var(--font-display); margin-bottom:40px; color:var(--p-navy);">Institutional Consultation</h4>
                        <form id="contact-form" style="display: grid; gap: 32px;">
                            <div style="display:grid; gap:12px;">
                                <label style="font-family:var(--font-display); font-size:12px; font-weight:700; letter-spacing:1px; color:var(--p-navy);">SCHOOL NAME</label>
                                <input type="text" id="school-name" required style="padding:16px; border:1px solid rgba(0,0,0,0.1); border-radius:4px; outline:none; background:rgba(255,255,255,0.5); font-family:inherit;">
                            </div>
                            <div style="display:grid; gap:12px;">
                                <label style="font-family:var(--font-display); font-size:12px; font-weight:700; letter-spacing:1px; color:var(--p-navy);">ACADEMIC REPRESENTATIVE</label>
                                <input type="text" id="rep-name" required style="padding:16px; border:1px solid rgba(0,0,0,0.1); border-radius:4px; outline:none; background:rgba(255,255,255,0.5); font-family:inherit;">
                            </div>
                            <div style="display:grid; gap:12px;">
                                <label style="font-family:var(--font-display); font-size:12px; font-weight:700; letter-spacing:1px; color:var(--p-navy);">INSTITUTIONAL EMAIL</label>
                                <input type="email" id="email" required style="padding:16px; border:1px solid rgba(0,0,0,0.1); border-radius:4px; outline:none; background:rgba(255,255,255,0.5); font-family:inherit;">
                            </div>
                            <div style="display:grid; gap:12px;">
                                <label style="font-family:var(--font-display); font-size:12px; font-weight:700; letter-spacing:1px; color:var(--p-navy);">PROJECT MESSAGE</label>
                                <textarea id="message" rows="4" required style="padding:16px; border:1px solid rgba(0,0,0,0.1); border-radius:4px; outline:none; background:rgba(255,255,255,0.5); font-family:inherit;"></textarea>
                            </div>
                            <button type="submit" class="btn-elite" style="width:100%;">Book Consultation via WhatsApp</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    `;

    setTimeout(() => {
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const school = document.getElementById('school-name').value;
                const rep = document.getElementById('rep-name').value;
                const email = document.getElementById('email').value;
                const msg = document.getElementById('message').value;

                const whatsappMsg = `*New Institutional Inquiry*\n\n*School:* ${school}\n*Representative:* ${rep}\n*Email:* ${email}\n*Message:* ${msg}`;
                const encodedMsg = encodeURIComponent(whatsappMsg);
                window.open(`https://wa.me/918886606701?text=${encodedMsg}`, '_blank');
            });
        }
    }, 100);

    return page;
}
