export async function Terms() {
    const page = document.createElement('div');
    page.innerHTML = `
        <section style="padding-top:180px; padding-bottom:100px; min-height:100vh;">
            <div class="container">
                <div class="reveal">
                    <span class="label-sup">Legal</span>
                    <h1>Terms of Service</h1>
                    <div style="max-width: 800px; margin-top: 60px; color: var(--text-muted); line-height: 1.8;">
                        <p>Welcome to Vivencia. By accessing our services, you agree to the following terms...</p>
                        <h4 style="color: var(--p-navy); margin: 32px 0 16px;">1. Institutional Partnership</h4>
                        <p>Our engagement models are strictly for educational institutions and organizations...</p>
                        <h4 style="color: var(--p-navy); margin: 32px 0 16px;">2. Intellectual Property</h4>
                        <p>All curriculum materials, 70:20:10 frameworks, and proprietary pedagogy are the sole property of Vivencia...</p>
                        <!-- Add more terms as needed -->
                    </div>
                </div>
            </div>
        </section>
    `;
    return page;
}
