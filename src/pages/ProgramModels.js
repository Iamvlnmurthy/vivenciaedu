export async function ProgramModels() {
    const page = document.createElement('div');
    page.innerHTML = `
        <section style="min-height: 100vh; display: flex; align-items: center;">
            <div class="container">
                <div class="reveal text-center">
                    <span class="label-sup">Execution Architecture</span>
                    <h1>Operational <br>Engagement Models.</h1>
                    <p style="font-size: 18px; color: var(--text-muted); max-width: 800px; margin: 40px auto;">Select the engagement depth that aligns with your school's academic calendar and student readiness.</p>
                </div>
            </div>
        </section>

        <section class="bg-subtle" style="min-height: 100vh; display: flex; align-items: center;">
            <div class="container">
                <div class="reveal">
                    <div class="glass-card" style="padding:80px; text-align:center;">
                        <span class="label-sup">Methodology</span>
                        <h2 style="margin-bottom:60px;">The 70:20:10 Framework</h2>
                        
                        <div style="max-width: 800px; margin: 0 auto; display: flex; align-items: center; gap: 40px; justify-content: center;">
                            <!-- Visual Chart -->
                            <div style="position: relative; width: 200px; height: 200px;">
                                <svg viewBox="0 0 36 36" style="width: 100%; height: 100%; transform: rotate(-90deg);">
                                    <!-- 70% Ring -->
                                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E6E6E6" stroke-width="3.8" />
                                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--accent-orange)" stroke-width="3.8" stroke-dasharray="70, 100" />
                                    
                                    <!-- 20% Ring (Inner) -->
                                    <path d="M18 5.0845 a 12.9155 12.9155 0 0 1 0 25.831 a 12.9155 12.9155 0 0 1 0 -25.831" fill="none" stroke="#E6E6E6" stroke-width="3.8" />
                                    <path d="M18 5.0845 a 12.9155 12.9155 0 0 1 0 25.831 a 12.9155 12.9155 0 0 1 0 -25.831" fill="none" stroke="var(--s-cyan)" stroke-width="3.8" stroke-dasharray="20, 100" />

                                    <!-- 10% Ring (Inner) -->
                                    <path d="M18 8.0845 a 9.9155 9.9155 0 0 1 0 19.831 a 9.9155 9.9155 0 0 1 0 -19.831" fill="none" stroke="#E6E6E6" stroke-width="3.8" />
                                    <path d="M18 8.0845 a 9.9155 9.9155 0 0 1 0 19.831 a 9.9155 9.9155 0 0 1 0 -19.831" fill="none" stroke="var(--accent-pink)" stroke-width="3.8" stroke-dasharray="10, 100" />
                                </svg>
                                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;">
                                    <div style="font-weight: 800; font-size: 24px; color: var(--p-navy);">70%</div>
                                    <div style="font-size: 10px; color: var(--text-muted);">DOING</div>
                                </div>
                            </div>

                            <!-- Legend -->
                            <div style="display: grid; gap: 20px;">
                                <div style="display:flex; align-items:center; gap:16px;">
                                    <div style="width:12px; height:12px; background:var(--accent-orange); border-radius:50%;"></div>
                                    <div>
                                        <div style="font-weight: 700; color: var(--p-navy); font-size: 18px;">Activity-Driven</div>
                                        <span style="font-size:13px; color:var(--text-muted);">Experiential Mastery</span>
                                    </div>
                                </div>
                                <div style="display:flex; align-items:center; gap:16px;">
                                    <div style="width:12px; height:12px; background:var(--s-cyan); border-radius:50%;"></div>
                                    <div>
                                        <div style="font-weight: 700; color: var(--p-navy); font-size: 18px;">Project-Based</div>
                                        <span style="font-size:13px; color:var(--text-muted);">Collaborative Build</span>
                                    </div>
                                </div>
                                <div style="display:flex; align-items:center; gap:16px;">
                                    <div style="width:12px; height:12px; background:var(--accent-pink); border-radius:50%;"></div>
                                    <div>
                                        <div style="font-weight: 700; color: var(--p-navy); font-size: 18px;">Concept-Led</div>
                                        <span style="font-size:13px; color:var(--text-muted);">Core Theory</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <p style="margin-top:60px; font-weight:700; font-family:var(--font-display); font-size:20px; color:var(--p-navy);">Execution first. Knowledge follows.</p>
                    </div>
                </div>
            </div>
        </section>

        <section style="min-height: 100vh; display: flex; align-items: center;">
            <div class="container">
                <div class="reveal" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:32px;">
                    <div class="glass-card" style="padding: 40px; background: white; border-radius: 20px; text-align: center; border: 1px solid rgba(247, 148, 30, 0.1); box-shadow: 0 10px 30px rgba(247, 148, 30, 0.05); transition: transform 0.3s ease;">
                        <div style="width: 60px; height: 60px; background: rgba(247, 148, 30, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; color: var(--accent-orange); font-size: 24px;"><i class="fas fa-bolt"></i></div>
                        <h3 style="margin-bottom:16px; font-size: 24px; font-weight: 800; color: var(--p-navy);">Intensive <br>Workshops</h3>
                        <div style="font-size: 12px; font-weight: 700; color: var(--accent-orange); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px;">1–2 Days</div>
                        <p style="font-size:14px; color:var(--text-muted); line-height:1.8;">High-Impact skill exposure. Rapid prototypes and mental model shifts.</p>
                    </div>
                    <div class="glass-card" style="padding: 40px; background: white; border-radius: 20px; text-align: center; border: 1px solid rgba(51, 181, 229, 0.1); box-shadow: 0 10px 30px rgba(51, 181, 229, 0.05); transition: transform 0.3s ease;">
                        <div style="width: 60px; height: 60px; background: rgba(51, 181, 229, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; color: var(--s-cyan); font-size: 24px;"><i class="fas fa-rocket"></i></div>
                        <h3 style="margin-bottom:16px; font-size: 24px; font-weight: 800; color: var(--p-navy);">Skill <br>Bootcamps</h3>
                        <div style="font-size: 12px; font-weight: 700; color: var(--s-cyan); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px;">4 Weeks</div>
                        <p style="font-size:14px; color:var(--text-muted); line-height:1.8;">Project journeys. From problem discovery to functional MVP build.</p>
                    </div>
                    <div class="glass-card" style="padding: 40px; background: linear-gradient(135deg, #FFF5F6 0%, #FFF 100%); border-radius: 20px; text-align: center; border: 1px solid rgba(239, 91, 112, 0.1); box-shadow: 0 10px 30px rgba(239, 91, 112, 0.05); transform: scale(1.05); z-index: 2;">
                        <div style="width: 60px; height: 60px; background: rgba(239, 91, 112, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; color: var(--accent-pink); font-size: 24px;"><i class="fas fa-crown"></i></div>
                        <h3 style="margin-bottom:16px; font-size: 24px; font-weight: 800; color: var(--p-navy);">Integrated <br>Annual Program</h3>
                        <div style="font-size: 12px; font-weight: 700; color: var(--accent-pink); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px;">10–15 Sessions</div>
                        <p style="font-size:14px; color:var(--text-muted); line-height:1.8;">Master Roadmap. Comprehensive skill execution across the academic year.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
    return page;
}
