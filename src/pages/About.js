export async function About() {
    const page = document.createElement('div');
    page.innerHTML = `
        <section style="background: radial-gradient(circle at top left, rgba(0, 42, 102, 0.05), transparent 800px); min-height: 100vh; display: flex; align-items: center;">
            <div class="container text-center">
                <div class="reveal">
                    <span class="label-sup" style="color: var(--p-navy); opacity: 0.8;">Operational Excellence</span>
                    <h1 style="max-width:900px; margin: 0 auto 40px; color: var(--p-navy); letter-spacing: -1px;">The Elite Academic <br>Partnership Firm.</h1>
                    <p style="font-size: 22px; color: var(--text-muted); line-height: 1.8; max-width: 800px; margin: 0 auto; font-weight: 500;">Vivencia is the strategic skill execution arm for premium schools. We ensure that NEP 2020 initiatives are implemented with professional rigor, zero teacher burden, and institutional scale.</p>
                </div>
            </div>
        </section>

        <section class="bg-subtle" style="min-height: 100vh; display: flex; align-items: center;">
            <div class="container">
                <div class="reveal">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 120px; align-items: center;">
                        <div>
                            <span class="label-sup">The Challenge</span>
                            <h2>Bridging the <br>Execution Gap.</h2>
                            <p style="margin-top:40px; color:var(--text-muted); line-height:2; font-size:18px;">While NEP 2020 mandates transformation, the daily reality of school management involves overloaded teachers and fragmented vendors. Vivencia was founded to provide a singular, high-integrity execution partner.</p>
                        </div>
                        <div class="glass-card" style="border-left:6px solid var(--p-navy); padding:60px; background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.8); box-shadow: 0 20px 40px rgba(0, 42, 102, 0.05);">
                            <p style="font-family:var(--font-display); font-size:28px; font-weight:600; color:var(--p-navy); line-height:1.5; letter-spacing: -0.5px;">"Our firm assumes the complexity of skill delivery, so school leaders can remain focused on their core academic mission."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section style="min-height: 100vh; display: flex; align-items: center;">
            <div class="container">
                <div class="reveal text-center" style="margin-bottom:100px;">
                    <span class="label-sup">Core Philosophy</span>
                    <h2>The Vivencia Standard</h2>
                </div>
                
                <div class="reveal" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:32px;">
                    <div class="glass-card" style="padding: 40px; background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.6); border-radius: 24px; transition: transform 0.3s ease;">
                        <h4 style="margin-bottom:20px; color:var(--p-navy); font-size: 24px; font-weight: 800;">Zero Burden</h4>
                        <p style="font-size:16px; color:var(--text-muted); line-height:1.8;">We don't ask your teachers to plan lessons. We arrive with our own mentors and materials.</p>
                    </div>
                    <div class="glass-card" style="padding: 40px; background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.6); border-radius: 24px; transition: transform 0.3s ease;">
                        <h4 style="margin-bottom:20px; color:var(--p-navy); font-size: 24px; font-weight: 800;">Project Integrity</h4>
                        <p style="font-size:16px; color:var(--text-muted); line-height:1.8;">Skills are practiced, not just heard. Every student builds, iterates, and pitches.</p>
                    </div>
                    <div class="glass-card" style="padding: 40px; background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.6); border-radius: 24px; transition: transform 0.3s ease;">
                        <h4 style="margin-bottom:20px; color:var(--p-navy); font-size: 24px; font-weight: 800;">Institutional Scale</h4>
                        <p style="font-size:16px; color:var(--text-muted); line-height:1.8;">A unified framework that works across clusters and campuses with consistent high quality.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
    return page;
}
