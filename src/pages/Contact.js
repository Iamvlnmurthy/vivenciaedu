export async function Contact() {
    const page = document.createElement('div');
    page.innerHTML = `
        <section style="padding-top:240px; min-height:100vh; background: radial-gradient(circle at bottom right, rgba(0, 42, 102, 0.05), transparent 800px);">
            <div class="container">
                <div class="reveal" style="display: grid; grid-template-columns: 1fr 1fr; gap: 120px; align-items: start;">
                    <div>
                        <span class="label-sup">Strategic Partnership</span>
                        <h1 style="margin-bottom:40px;">Partner With <br>Vivencia.</h1>
                        <p style="font-size: 18px; color: var(--text-muted); line-height:2; margin-bottom:60px;">Select the right execution model for your institution. Our firm handles everything from mentor onboarding to project showcases.</p>
                        
                        <div style="display:grid; gap:32px;">
                            <div style="display:flex; align-items:center; gap:20px;">
                                <div style="width:48px; height:48px; background:rgba(0,42,102,0.05); border-radius:50%; display:flex; align-items:center; justify-content:center; color:var(--p-navy); font-weight:700;">@</div>
                                <div>
                                    <h5 style="color:var(--p-navy); margin:0;">Email Support</h5>
                                    <p style="font-size:14px; color:var(--text-muted); margin:0;">partner@vivencia.in</p>
                                </div>
                            </div>
                            <div style="display:flex; align-items:center; gap:20px;">
                                <div style="width:48px; height:48px; background:rgba(0,42,102,0.05); border-radius:50%; display:flex; align-items:center; justify-content:center; color:var(--p-navy); font-weight:700;">#</div>
                                <div>
                                    <h5 style="color:var(--p-navy); margin:0;">Headquarters</h5>
                                    <p style="font-size:14px; color:var(--text-muted); margin:0;">Hyderabad, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="glass-card" style="padding:60px; border-top:6px solid var(--p-navy); border-left:none;">
                        <h4 style="font-family:var(--font-display); margin-bottom:40px; color:var(--p-navy);">Institutional Consultation</h4>
                        <form style="display: grid; gap: 32px;">
                            <div style="display:grid; gap:12px;">
                                <label style="font-family:var(--font-display); font-size:12px; font-weight:700; letter-spacing:1px; color:var(--p-navy);">SCHOOL NAME</label>
                                <input type="text" style="padding:16px; border:1px solid rgba(0,0,0,0.1); border-radius:4px; outline:none; background:rgba(255,255,255,0.5); font-family:inherit;">
                            </div>
                            <div style="display:grid; gap:12px;">
                                <label style="font-family:var(--font-display); font-size:12px; font-weight:700; letter-spacing:1px; color:var(--p-navy);">ACADEMIC REPRESENTATIVE</label>
                                <input type="text" style="padding:16px; border:1px solid rgba(0,0,0,0.1); border-radius:4px; outline:none; background:rgba(255,255,255,0.5); font-family:inherit;">
                            </div>
                            <div style="display:grid; gap:12px;">
                                <label style="font-family:var(--font-display); font-size:12px; font-weight:700; letter-spacing:1px; color:var(--p-navy);">INSTITUTIONAL EMAIL</label>
                                <input type="email" style="padding:16px; border:1px solid rgba(0,0,0,0.1); border-radius:4px; outline:none; background:rgba(255,255,255,0.5); font-family:inherit;">
                            </div>
                            <div style="display:grid; gap:12px;">
                                <label style="font-family:var(--font-display); font-size:12px; font-weight:700; letter-spacing:1px; color:var(--p-navy);">PROJECT MESSAGE</label>
                                <textarea rows="4" style="padding:16px; border:1px solid rgba(0,0,0,0.1); border-radius:4px; outline:none; background:rgba(255,255,255,0.5); font-family:inherit;"></textarea>
                            </div>
                            <button type="submit" class="btn-elite" style="width:100%;">Book Consultation</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    `;
    return page;
}
