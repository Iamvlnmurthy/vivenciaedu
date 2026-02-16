export async function Privacy() {
    const page = document.createElement('div');
    page.innerHTML = `
        <section style="padding-top:180px; padding-bottom:100px; min-height:100vh;">
            <div class="container">
                <div class="reveal">
                    <span class="label-sup">Legal</span>
                    <h1>Privacy Policy</h1>
                    <div style="max-width: 800px; margin-top: 60px; color: var(--text-muted); line-height: 1.8;">
                        <p>At Vivencia, we take the privacy of our institutional partners and their students seriously...</p>
                        <h4 style="color: var(--p-navy); margin: 32px 0 16px;">1. Information Collection</h4>
                        <p>We collect minimal data necessary for institutional reporting and outcome tracking...</p>
                        <h4 style="color: var(--p-navy); margin: 32px 0 16px;">2. Data Security</h4>
                        <p>All student outcome data is stored in encrypted, tier-IV data centers...</p>
                        <!-- Add more policy details as needed -->
                    </div>
                </div>
            </div>
        </section>
    `;
    return page;
}
