export async function ProgramModels() {
    const page = document.createElement('div');
    page.innerHTML = `
        <section style="padding-top:240px;">
            <div class="container">
                <div class="reveal text-center">
                    <span class="label-sup">Execution Architecture</span>
                    <h1>Operational <br>Engagement Models.</h1>
                    <p style="font-size: 18px; color: var(--text-muted); max-width: 800px; margin: 40px auto;">Select the engagement depth that aligns with your school's academic calendar and student readiness.</p>
                </div>
            </div>
        </section>

        <section class="bg-subtle">
            <div class="container">
                <div class="reveal">
                    <div class="glass-card" style="padding:80px; text-align:center;">
                        <span class="label-sup">Methodology</span>
                        <h2 style="margin-bottom:60px;">The 70:20:10 Framework</h2>
                        
                        <div style="max-width: 800px; margin: 0 auto; display: grid; gap: 40px;">
                            <div style="display:flex; align-items:center; gap:24px;">
                                <div style="width:70%; height:60px; background:var(--accent-orange); border-radius:30px; display:flex; align-items:center; padding:0 30px; color:white; font-weight:700; font-family:var(--font-display);">70% ACTIVITY-DRIVEN</div>
                                <span style="font-size:14px; color:var(--text-muted); font-weight:600;">Experiential Mastery</span>
                            </div>
                            <div style="display:flex; align-items:center; gap:24px;">
                                <div style="width:20%; height:60px; background:var(--s-cyan); border-radius:30px; display:flex; align-items:center; padding:0 30px; color:white; font-weight:700; font-family:var(--font-display);">20% PROJECT</div>
                                <span style="font-size:14px; color:var(--text-muted); font-weight:600;">Collaborative Build</span>
                            </div>
                            <div style="display:flex; align-items:center; gap:24px;">
                                <div style="width:10%; height:60px; background:var(--accent-pink); border-radius:30px; display:flex; align-items:center; padding:0 30px; color:white; font-weight:700; font-family:var(--font-display);">10% CONCEPT</div>
                                <span style="font-size:14px; color:var(--text-muted); font-weight:600;">Core Theory</span>
                            </div>
                        </div>
                        
                        <p style="margin-top:60px; font-weight:700; font-family:var(--font-display); font-size:20px; color:var(--p-navy);">Execution first. Knowledge follows.</p>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="reveal" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:40px;">
                    <div class="glass-card" style="border-top:6px solid var(--accent-orange); border-left:none; text-align:center;">
                        <h3 style="margin-bottom:24px;">Intensive <br>Workshops</h3>
                        <p style="font-size:14px; color:var(--text-muted); line-height:1.8;">1–2 Day High-Impact skill exposure. Rapid prototypes and mental model shifts.</p>
                    </div>
                    <div class="glass-card" style="border-top:6px solid var(--s-cyan); border-left:none; text-align:center;">
                        <h3 style="margin-bottom:24px;">Skill <br>Bootcamps</h3>
                        <p style="font-size:14px; color:var(--text-muted); line-height:1.8;">4-Week Project journeys. From problem discovery to functional MVP build.</p>
                    </div>
                    <div class="glass-card" style="border-top:6px solid var(--accent-pink); border-left:none; text-align:center;">
                        <h3 style="margin-bottom:24px;">Integrated <br>Annual Program</h3>
                        <p style="font-size:14px; color:var(--text-muted); line-height:1.8;">10–15 Session Master Roadmap. Comprehensive skill execution across the academic year.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
    return page;
}
