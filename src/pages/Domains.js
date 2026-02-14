export async function Entrepreneurship() {
    const page = document.createElement('div');
    page.innerHTML = `
        <section style="padding-top:240px; background: radial-gradient(circle at top right, rgba(245, 146, 30, 0.05), transparent 800px);">
            <div class="container text-center">
                <div class="reveal">
                    <span class="label-sup" style="color:var(--accent-orange);">Domain Mastery</span>
                    <h1>Young <br>Entrepreneurship.</h1>
                    <p style="font-size: 20px; color: var(--text-muted); line-height: 2; max-width: 800px; margin: 40px auto;">Building confident problem-solvers and young innovators (Classes 3–12) through a professional builder journey.</p>
                </div>
            </div>
        </section>

        <section class="bg-subtle">
            <div class="container">
                <div class="reveal">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 120px; align-items: center;">
                        <div class="glass-card" style="border-left:6px solid var(--accent-orange);">
                            <p style="font-family:var(--font-display); font-size:24px; font-weight:600; color:var(--p-navy); line-height:1.6;">"Entrepreneurship at Vivencia is not about starting businesses early. It is about building thinking, confidence, and problem-solving skills early."</p>
                        </div>
                        <div>
                            <div style="display:grid; gap:20px; font-family:var(--font-display); font-weight:700; color:var(--accent-orange); letter-spacing:2px;">
                                <div style="display:flex; align-items:center; gap:16px;"><span>01</span> OBSERVE</div>
                                <div style="display:flex; align-items:center; gap:16px;"><span>02</span> THINK</div>
                                <div style="display:flex; align-items:center; gap:16px;"><span>03</span> DESIGN</div>
                                <div style="display:flex; align-items:center; gap:16px;"><span>04</span> BUILD</div>
                                <div style="display:flex; align-items:center; gap:16px;"><span>05</span> COMMUNICATE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="reveal text-center" style="margin-bottom:80px;">
                    <span class="label-sup">Learning Roadmap</span>
                    <h2>Age-Appropriate Tiers</h2>
                </div>
                <div class="reveal" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:32px;">
                    <div class="glass-card" style="border-top:4px solid var(--accent-orange); border-left:none;">
                        <h4 style="margin-bottom:16px; color:var(--p-navy);">Curiosity & Creativity</h4>
                        <p style="font-size:12px; font-weight:700; color:var(--accent-orange); margin-bottom:20px;">CLASSES 3–5</p>
                        <p style="font-size:14px; color:var(--text-muted); line-height:1.8;">Basic problem spotting, group brainstorming, and visualizing solutions through creative play.</p>
                    </div>
                    <div class="glass-card" style="border-top:4px solid var(--accent-orange); border-left:none;">
                        <h4 style="margin-bottom:16px; color:var(--p-navy);">Exploration & Application</h4>
                        <p style="font-size:12px; font-weight:700; color:var(--accent-orange); margin-bottom:20px;">CLASSES 6–8</p>
                        <p style="font-size:14px; color:var(--text-muted); line-height:1.8;">User interviews, basic Lean Canvas, and cardboard prototyping for real-world frictions.</p>
                    </div>
                    <div class="glass-card" style="border-top:4px solid var(--accent-orange); border-left:none;">
                        <h4 style="margin-bottom:16px; color:var(--p-navy);">Execution & Innovation</h4>
                        <p style="font-size:12px; font-weight:700; color:var(--accent-orange); margin-bottom:20px;">CLASSES 9–12</p>
                        <p style="font-size:14px; color:var(--text-muted); line-height:1.8;">Tech stack integration, full pitch deck mastery, and high-stakes Demo Day execution.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
    return page;
}

export async function Finance() {
    const page = document.createElement('div');
    page.innerHTML = `
        <section style="padding-top:240px; background: radial-gradient(circle at top right, rgba(51, 181, 229, 0.05), transparent 800px);">
            <div class="container text-center">
                <div class="reveal">
                    <span class="label-sup" style="color:var(--s-cyan);">Domain Mastery</span>
                    <h1>Financial <br>Literacy.</h1>
                    <p style="font-size: 20px; color: var(--text-muted); line-height: 2; max-width: 800px; margin: 40px auto;">Equipping students with money awareness, management, and long-term thinking through simulation-led mastery.</p>
                </div>
            </div>
        </section>

        <section class="bg-subtle text-center">
            <div class="container">
                <div class="reveal" style="max-width:800px; margin:0 auto;">
                    <h2 style="margin-bottom:60px;">Money as a Lifeskill</h2>
                    <div class="glass-card" style="border-top:6px solid var(--s-cyan); border-left:none; padding:80px;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:40px;">
                            <div>
                                <h4 style="color:var(--p-navy);">CLASSES 3–5</h4>
                                <p style="font-size:14px; color:var(--text-muted); margin-top:16px;">Understanding the concept of value and currency through play.</p>
                            </div>
                            <div>
                                <h4 style="color:var(--p-navy);">CLASSES 6–8</h4>
                                <p style="font-size:14px; color:var(--text-muted); margin-top:16px;">Budgeting, saving, and the power of compounding.</p>
                            </div>
                            <div>
                                <h4 style="color:var(--p-navy);">CLASSES 9–12</h4>
                                <p style="font-size:14px; color:var(--text-muted); margin-top:16px;">Wealth thinking, fund management, and investing simulations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    return page;
}

export async function AI() {
    const page = document.createElement('div');
    page.innerHTML = `
        <section style="padding-top:240px; background: radial-gradient(circle at top right, rgba(233, 73, 128, 0.05), transparent 800px);">
            <div class="container text-center">
                <div class="reveal">
                    <span class="label-sup" style="color:var(--accent-pink);">Domain Mastery</span>
                    <h1>Artificial <br>Intelligence.</h1>
                    <p style="font-size: 20px; color: var(--text-muted); line-height: 2; max-width: 800px; margin: 40px auto;">Technology as a tool for solving real-world challenges. Moving from tech consumers to tech creators.</p>
                </div>
            </div>
        </section>

        <section class="bg-subtle text-center">
            <div class="container">
                <div class="reveal" style="max-width:800px; margin:0 auto;">
                    <div class="glass-card" style="border-top:6px solid var(--accent-pink); border-left:none; padding:80px;">
                        <h2 style="margin-bottom:40px;">Technology Capability</h2>
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:40px; text-align:left;">
                            <div>
                                <h5 style="color:var(--p-navy);">3–5 EXPLORATORY</h5>
                                <p style="font-size:14px; color:var(--text-muted); margin-top:12px;">Demystifying AI and robots through play.</p>
                            </div>
                            <div>
                                <h5 style="color:var(--p-navy);">6–8 APPLIED</h5>
                                <p style="font-size:14px; color:var(--text-muted); margin-top:12px;">Building mini-solutions and hardware prototypes.</p>
                            </div>
                            <div>
                                <h5 style="color:var(--p-navy);">9–12 PRODUCT</h5>
                                <p style="font-size:14px; color:var(--text-muted); margin-top:12px;">Industrial-grade tech solution building.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    return page;
}
