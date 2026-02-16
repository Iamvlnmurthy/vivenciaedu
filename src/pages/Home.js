export async function Home() {
    const page = document.createElement('div');
    page.innerHTML = `
        <!-- SECTION 1: VISIONARY HERO 2.0 (LIGHT ELITE) -->
        <section id="hero" style="min-height: 100vh; display: flex; align-items: center; padding: 120px 0 60px; background: var(--bg-white); overflow: hidden; position: relative;">
            <!-- Light Mesh Gradients -->
            <div class="blob" style="top: -200px; right: -100px; background: radial-gradient(circle, rgba(0, 174, 239, 0.08) 0%, transparent 70%); width: 800px; height: 800px;"></div>
            <div class="blob" style="bottom: -100px; left: -100px; background: radial-gradient(circle, rgba(239, 91, 112, 0.05) 0%, transparent 70%); width: 600px; height: 600px;"></div>
            
            <div class="container" style="display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: center; position: relative; z-index: 2;">
                
                <div class="reveal">
                    <span class="label-sup" style="color: var(--s-cyan); letter-spacing: 8px; font-weight: 800; margin-bottom: 32px;">The Visionary Elite</span>
                    <h1 style="font-size: clamp(48px, 6vw, 84px); line-height: 1.1; margin-bottom: 32px; color: var(--p-navy); font-weight: 800; letter-spacing: -2px;">The New Era of <br> <span class="text-gradient">Skill Mastery.</span></h1>
                    <p style="font-size: 22px; color: var(--text-muted); line-height: 1.8; margin-bottom: 48px; max-width: 600px;">Vivencia takes absolute ownership of NEP 2020 skill execution—delivering curriculum, mentors, and outcomes for India's most prestigious institutions.</p>
                    
                    <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
                        <a href="/contact" data-link class="btn-elite" style="background: var(--p-navy); color: white; padding: 0 40px; font-weight: 800; border-radius: 16px;">Elevate Your School</a>
                        <a href="#vision" style="display: flex; align-items: center; gap: 16px; text-decoration: none; color: var(--p-navy); font-weight: 700; letter-spacing: 2px; text-transform: uppercase; font-size: 14px; opacity: 0.8; transition: var(--transition);">
                            <div style="width: 50px; height: 50px; border-radius: 50%; border: 1px solid rgba(0, 13, 26, 0.1); display: flex; align-items: center; justify-content: center; background: rgba(0, 13, 26, 0.02); backdrop-filter: blur(10px);">
                                <i class="fas fa-play" style="font-size: 14px;"></i>
                            </div>
                            The Vision
                        </a>
                    </div>
                </div>

                <div class="reveal" style="position: relative;">
                    <div style="width: 100%; height: 650px; border-radius: 48px; overflow: hidden; box-shadow: 0 50px 100px rgba(0, 13, 26, 0.15); border: 1px solid rgba(0, 13, 26, 0.05); background: white;">
                        <style>
                            .hero-slide {
                                position: absolute;
                                inset: 0;
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                opacity: 0;
                                transition: opacity 2s cubic-bezier(0.16, 1, 0.3, 1);
                                filter: brightness(1.05) contrast(1.02);
                            }
                            .hero-slide.active { opacity: 1; }
                        </style>
                        <img src="/hero-1.jpg" class="hero-slide active" alt="Institutional Excellence 1" width="1200" height="650">
                        <img src="/hero-2.jpg" class="hero-slide" alt="Institutional Excellence 2" width="1200" height="650" loading="lazy">
                        <img src="/hero-3.jpg" class="hero-slide" alt="Institutional Excellence 3" width="1200" height="650" loading="lazy">
                        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(255,255,255,0.4), transparent 60%);"></div>
                    </div>
                    
                    <!-- Monolithic Glass Badge (Light) -->
                    <div class="glass-elite" style="position: absolute; bottom: 60px; left: -40px; padding: 40px 56px; display: flex; align-items: center; gap: 32px; border-radius: 32px; background: rgba(255,255,255,0.8); border-color: white; box-shadow: 0 40px 80px rgba(0, 42, 102, 0.1);">
                        <div style="width: 72px; height: 72px; border-radius: 20px; background: var(--s-cyan-muted); display: flex; align-items: center; justify-content: center; color: var(--s-cyan); font-size: 32px;">
                            <i class="fas fa-crown"></i>
                        </div>
                        <div>
                            <div style="font-weight: 800; color: var(--p-navy); font-size: 28px; letter-spacing: 1px; line-height: 1.1;">NEP 2020</div>
                            <div style="font-size: 14px; color: var(--s-cyan); font-weight: 700; text-transform: uppercase; letter-spacing: 3px; margin-top: 4px;">Supreme Executor</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 2: THE VISIONARY BENTO (VISION & REALITY) -->
        <section id="vision" style="min-height: 100vh; display: flex; align-items: center; padding: 60px 0; background: var(--bg-soft); position: relative; overflow: hidden;">
            <div class="blob" style="top: 10%; left: -100px; background: radial-gradient(circle, rgba(247, 148, 30, 0.05) 0%, transparent 70%); width: 500px; height: 500px;"></div>
            
            <div class="container">
                <div class="bento-grid">
                    <!-- 1. The Monolith: Vision Video -->
                    <div class="bento-item reveal" style="grid-column: span 7; grid-row: span 5; padding: 0; background: #000; border-radius: 48px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 40px 100px rgba(0,0,0,0.3);">
                        <video id="founder-video" autoplay muted playsinline loop style="width:100%; height:100%; object-fit:cover; opacity: 0.9;">
                            <source src="/founders_note.mp4" type="video/mp4">
                        </video>
                        <div class="glass-elite" style="position: absolute; bottom: 32px; left: 32px; right: 32px; padding: 24px; border-radius: 20px; border-color: rgba(255,255,255,0.2);">
                            <div style="display: flex; align-items: center; gap: 20px;">
                                <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--s-cyan); display: flex; align-items: center; justify-content: center; color: var(--p-navy);">
                                    <i class="fas fa-play"></i>
                                </div>
                                <div>
                                    <h4 style="color: white; font-size: 18px; margin: 0;">The Founder's Vision</h4>
                                    <p style="color: rgba(255,255,255,0.6); font-size: 13px; margin: 0;">Institutional Mastery Note</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 2. The Narrative: Why it burdens -->
                    <div class="bento-item reveal" style="grid-column: span 5; grid-row: span 3; background: transparent; border: none; padding: 40px 0 0 40px; justify-content: center;">
                        <span class="label-sup" style="color: var(--s-cyan); font-weight: 800;">Real-World Friction</span>
                        <h2 style="font-size: 56px; line-height: 1.1; margin: 24px 0; color: var(--p-navy); font-weight: 800;">Why NEP 2020 <br> <span class="script-font" style="color: var(--s-cyan); font-size: 1.2em;">Feels Like a Burden</span> <br> for Elite Schools.</h2>
                        <p style="color: var(--text-muted); font-size: 20px; line-height: 1.8; max-width: 450px;">Schools want compliance, but face operational exhaustion. Vivencia bridges this gap with absolute execution ownership.</p>
                    </div>

                    <!-- 3. Friction Point 1 -->
                    <div class="bento-item reveal" style="grid-column: span 2; grid-row: span 3; background: white; border-bottom: 8px solid var(--s-cyan); justify-content: center; padding: 32px;">
                        <div style="font-size: 32px; color: var(--p-navy); margin-bottom: 20px; opacity: 0.9;"><i class="fas fa-user-clock"></i></div>
                        <h4 style="font-size: 20px; color: var(--p-navy); margin-bottom: 12px; font-weight: 800; line-height: 1.2;">Teacher <br>Exhaustion</h4>
                        <p style="font-size: 14px; color: var(--text-muted); line-height: 1.5; margin: 0;">Academic staff are already at capacity with core syllabus.</p>
                    </div>

                    <!-- 4. Friction Point 2 -->
                    <div class="bento-item reveal" style="grid-column: span 3; grid-row: span 3; background: var(--p-brand-blue); color: white; border-radius: 48px; justify-content: center; padding: 40px;">
                        <div style="font-size: 32px; color: var(--p-blue); margin-bottom: 24px;"><i class="fas fa-puzzle-piece"></i></div>
                        <h4 style="font-size: 24px; color: white; margin-bottom: 16px; font-weight: 800; line-height: 1.2;">Execution <br>Gap</h4>
                        <p style="font-size: 15px; color: rgba(255,255,255,0.7); line-height: 1.6; margin: 0;">Designing curriculum mandates is different from delivering classroom results.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 3: OUR PROMISE (THE OWNERSHIP MODEL) -->
        <section id="promise" style="min-height: 100vh; display: flex; align-items: center; padding: 60px 0; background: var(--bg-white);">
            <div class="container">
                <div class="reveal" style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 120px; align-items: center;">
                    <div>
                        <span class="label-sup" style="color: var(--s-cyan); font-weight: 800;">Execution Ownership</span>
                        <h2 style="font-size: 64px; line-height: 1.1; margin: 16px 0; color: var(--p-navy); font-weight: 800;">Vivencia Takes <br> <span class="script-font" style="color: var(--s-cyan); font-size: 1.2em;">Complete Ownership.</span></h2>
                        <p style="margin-bottom: 24px; color: var(--text-muted); font-size: 22px; line-height: 1.8; max-width: 650px;">Once a school partners with Vivencia, the operational friction vanishes. Teachers continue their academic mission while we handle the institutional complexity of NEP 2020.</p>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px;">
                            <div style="display: flex; gap: 20px; align-items: flex-start;">
                                <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--s-cyan-muted); color: var(--s-cyan); display: flex; align-items: center; justify-content: center; flex-shrink: 0;"><i class="fas fa-check"></i></div>
                                <div>
                                    <h5 style="font-weight: 800; color: var(--p-navy); font-size: 18px; margin-bottom: 8px;">Zero Design Load</h5>
                                    <p style="font-size: 14px; color: var(--text-muted);">No curriculum designing required.</p>
                                </div>
                            </div>
                            <div style="display: flex; gap: 20px; align-items: flex-start;">
                                <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--s-cyan-muted); color: var(--s-cyan); display: flex; align-items: center; justify-content: center; flex-shrink: 0;"><i class="fas fa-check"></i></div>
                                <div>
                                    <h5 style="font-weight: 800; color: var(--p-navy); font-size: 18px; margin-bottom: 8px;">No Trainer Hiring</h5>
                                    <p style="font-size: 14px; color: var(--text-muted);">We deploy certified experts.</p>
                                </div>
                            </div>
                            <div style="display: flex; gap: 20px; align-items: flex-start;">
                                <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--s-cyan-muted); color: var(--s-cyan); display: flex; align-items: center; justify-content: center; flex-shrink: 0;"><i class="fas fa-check"></i></div>
                                <div>
                                    <h5 style="font-weight: 800; color: var(--p-navy); font-size: 18px; margin-bottom: 8px;">Seamless Logistics</h5>
                                    <p style="font-size: 14px; color: var(--text-muted);">End-to-end mentor management.</p>
                                </div>
                            </div>
                            <div style="display: flex; gap: 20px; align-items: flex-start;">
                                <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--s-cyan-muted); color: var(--s-cyan); display: flex; align-items: center; justify-content: center; flex-shrink: 0;"><i class="fas fa-check"></i></div>
                                <div>
                                    <h5 style="font-weight: 800; color: var(--p-navy); font-size: 18px; margin-bottom: 8px;">Outcome Reports</h5>
                                    <p style="font-size: 14px; color: var(--text-muted);">Compliance ready audit trails.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="glass-elite" style="background: var(--p-navy); padding: 80px 60px; color: white; border-radius: 48px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 50px 100px rgba(0,0,0,0.4); text-align: center;">
                        <h3 style="color: white; margin-bottom: 32px; font-size: 42px; font-weight: 800; line-height: 1.1;">The Institutional <br> Gold Standard.</h3>
                        <p style="font-size: 20px; opacity: 0.7; line-height: 1.8; margin-bottom: 40px;">Academic Excellence by Teachers. <br> <span class="script-font" style="color: var(--s-cyan); font-size: 1.5em; font-weight: 400;">Skill Mastery</span> by Vivencia.</p>
                        <i class="fas fa-shield-alt" style="font-size: 60px; color: var(--s-cyan); opacity: 0.3;"></i>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 4: ZERO LOAD PROMISE (PREMIUM FLOATING TAGS) -->
        <section id="zero-load" style="min-height: 100vh; display: flex; align-items: center; padding: 120px 0; background: var(--bg-white); position: relative; overflow: hidden;">
            <!-- Atmospheric Depth Blobs -->
            <div class="blob" style="top: 10%; right: -100px; background: radial-gradient(circle, rgba(0, 174, 239, 0.05) 0%, transparent 70%); width: 600px; height: 600px;"></div>
            <div class="blob" style="bottom: 10%; left: -100px; background: radial-gradient(circle, rgba(239, 91, 112, 0.03) 0%, transparent 70%); width: 500px; height: 500px;"></div>
            
            <div class="container text-center" style="position: relative; z-index: 2;">
                <div class="reveal">
                    <span class="label-sup" style="color: var(--p-blue); font-weight: 800; letter-spacing: 12px; margin-bottom: 32px;">Zero Load Promise</span>
                    <h2 style="margin: 24px 0 64px; font-size: clamp(32px, 5vw, 64px); color: var(--p-navy); font-weight: 800; line-height: 1.1;">What You <span class="script-font" style="color: var(--p-blue); font-size: 1.2em;">Don't Worry</span> About.</h2>
                    
                    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 32px; max-width: 1100px; margin: 0 auto;">
                        <div class="zero-load-tag" style="animation-delay: 0s;">
                            <i class="fas fa-book-open"></i>
                            No Lesson Planning
                        </div>
                        <div class="zero-load-tag" style="animation-delay: -1.2s;">
                            <i class="fas fa-chalkboard-teacher"></i>
                            No Teacher Training
                        </div>
                        <div class="zero-load-tag" style="animation-delay: -2.5s;">
                            <i class="fas fa-boxes"></i>
                            No Vendor Chaos
                        </div>
                        <div class="zero-load-tag" style="animation-delay: -0.8s;">
                            <i class="fas fa-file-signature"></i>
                            No Compliance Stress
                        </div>
                        <div class="zero-load-tag" style="animation-delay: -3.7s;">
                            <i class="fas fa-chart-pie"></i>
                            No Outcome Confusion
                        </div>
                        <div class="zero-load-tag" style="animation-delay: -1.9s;">
                            <i class="fas fa-calendar-alt"></i>
                            No Scheduling Conflicts
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 5: HOW WE EXECUTE (ELITE PROCESS GRID) -->
        <section id="process" style="min-height: 100vh; display: flex; align-items: center; padding: 60px 0; background: var(--bg-white);">
            <div class="container">
                <div class="reveal text-center" style="margin-bottom: 30px;">
                    <span class="label-sup" style="color: var(--s-cyan); font-weight: 800;">Our Process</span>
                    <h2 style="font-size: 64px; color: var(--p-navy); font-weight: 800;">From Policy to <span class="script-font" style="color: var(--s-cyan); font-size: 1.2em;">Classroom.</span></h2>
                </div>
                
                <div class="reveal bento-grid" style="grid-auto-rows: auto;">
                    <div class="bento-item" style="grid-column: span 4; padding: 60px;">
                        <div style="font-size: 80px; font-weight: 900; color: rgba(0,0,0,0.03); position: absolute; top: 0; left: 20px; line-height: 1;">01</div>
                        <h4 style="margin-bottom: 20px; color: var(--p-navy); font-size: 24px; font-weight: 800; position: relative;">Annual Planning</h4>
                        <p style="font-size: 16px; color: var(--text-muted); line-height: 1.8;">Mapping NEP mandates to your unique academic calendar for a frictionless integration.</p>
                    </div>
                    <div class="bento-item" style="grid-column: span 4; padding: 60px;">
                        <div style="font-size: 80px; font-weight: 900; color: rgba(0,0,0,0.03); position: absolute; top: 0; left: 20px; line-height: 1;">02</div>
                        <h4 style="margin-bottom: 20px; color: var(--p-navy); font-size: 24px; font-weight: 800; position: relative;">Deployment</h4>
                        <p style="font-size: 16px; color: var(--text-muted); line-height: 1.8;">Certified Vivencia trainers and proprietary materials arrive on-campus as per the roadmap.</p>
                    </div>
                    <div class="bento-item" style="grid-column: span 4; padding: 60px;">
                        <div style="font-size: 80px; font-weight: 900; color: rgba(0,0,0,0.03); position: absolute; top: 0; left: 20px; line-height: 1;">03</div>
                        <h4 style="margin-bottom: 20px; color: var(--p-navy); font-size: 24px; font-weight: 800; position: relative;">Execution</h4>
                        <p style="font-size: 16px; color: var(--text-muted); line-height: 1.8;">Structured weekly sessions delivered by industrial experts integrated into your timetable.</p>
                    </div>
                    <div class="bento-item" style="grid-column: span 4; padding: 60px;">
                        <div style="font-size: 80px; font-weight: 900; color: rgba(0,0,0,0.03); position: absolute; top: 0; left: 20px; line-height: 1;">04</div>
                        <h4 style="margin-bottom: 20px; color: var(--p-navy); font-size: 24px; font-weight: 800; position: relative;">Mentorship</h4>
                        <p style="font-size: 16px; color: var(--text-muted); line-height: 1.8;">Industry professionals guide student projects, bringing real-world wisdom to the floor.</p>
                    </div>
                    <div class="bento-item" style="grid-column: span 4; padding: 60px;">
                        <div style="font-size: 80px; font-weight: 900; color: rgba(0,0,0,0.03); position: absolute; top: 0; left: 20px; line-height: 1;">05</div>
                        <h4 style="margin-bottom: 20px; color: var(--p-navy); font-size: 24px; font-weight: 800; position: relative;">Showcase</h4>
                        <p style="font-size: 16px; color: var(--text-muted); line-height: 1.8;">Students present prototypes and pitches to parents, demonstrating verified skill mastery.</p>
                    </div>
                    <div class="bento-item" style="grid-column: span 4; padding: 60px;">
                        <div style="font-size: 80px; font-weight: 900; color: rgba(0,0,0,0.03); position: absolute; top: 0; left: 20px; line-height: 1;">06</div>
                        <h4 style="margin-bottom: 20px; color: var(--p-navy); font-size: 24px; font-weight: 800; position: relative;">Reporting</h4>
                        <p style="font-size: 16px; color: var(--text-muted); line-height: 1.8;">Detailed outcome and compliance reports generated for official institutional records.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 6: ELITE DOMAINS (VIEWPORT OPTIMIZED 2.0) -->
        <section id="domains" style="min-height: 100vh; height: 100vh; display: flex; align-items: center; padding: 0; background: var(--bg-soft); position: relative; overflow: hidden; justify-content: center;">
            <div class="blob" style="top: 20%; right: -200px; background: radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, transparent 70%); width: 800px; height: 800px;"></div>
            
            <div class="container">
                <div class="reveal text-center" style="margin-bottom: 30px;">
                    <span class="label-sup" style="color: var(--s-cyan); font-weight: 800;">World-Class Pedagogy</span>
                    <h2 style="font-size: 64px; color: var(--p-navy); font-weight: 800;">Supreme <span class="script-font" style="color: var(--s-cyan); font-size: 1.2em;">NEP 2020</span> Domains.</h2>
                </div>
                
                <div class="reveal bento-grid" style="grid-template-rows: repeat(6, 10vh); height: auto; gap: 20px; max-width: 1200px; margin: 0 auto; width: 100%;">
                    <!-- 1. Entrepreneurship (Top Left - Span 3) -->
                    <div class="bento-item" style="grid-column: span 7; grid-row: span 3; background: #FFF9F2; border: 1px solid rgba(247, 148, 30, 0.1); padding: 30px; position: relative; overflow: hidden; display: flex; flex-direction: column;">
                        <img src="/entrepreneurship_3d_icon_final_1771050098762.png" alt="Entrepreneurship" style="position: absolute; top: 10%; right: -12%; height: 80%; width: auto; opacity: 1; transform: rotate(-5deg); pointer-events: none; z-index: 1; mix-blend-mode: multiply; filter: contrast(1.05) brightness(1.05);" width="350" height="350" loading="lazy">
                        <span style="background: rgba(247, 148, 30, 0.1); color: #C05621; padding: 6px 16px; border-radius: 50px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; align-self: flex-start; position: relative; z-index: 2;">High Impact</span>
                        <h3 style="font-size: 28px; margin: 8px 0 8px; color: #7B341E; font-family: var(--font-display); font-weight: 800; line-height: 1.1; position: relative; z-index: 2; max-width: 60%;">Young <br>Entrepreneurship</h3>
                        <p style="font-size: 13px; color: #9C4221; line-height: 1.4; max-width: 60%; opacity: 0.9; position: relative; z-index: 2;">Students identify real problems, build prototypes, and pitch solutions to industry titans.</p>
                        <a href="/entrepreneurship" data-link style="margin-top: auto; text-decoration: none; color: #7B341E; font-weight: 800; text-transform:uppercase; letter-spacing:3px; font-size:12px; display: flex; align-items: center; gap: 12px; position: relative; z-index: 2;">Explore Domain <i class="fas fa-arrow-right"></i></a>
                    </div>

                    <!-- 2. Financial Literacy (The Light Monolith) -->
                    <div class="bento-item" style="grid-column: span 5; grid-row: span 6; background-image: linear-gradient(135deg, #F5FCFF 0%, #D6F0FF 100%), url('/finance_3d_icon_final_1771050114806.png'); background-position: center, 110% 110%; background-size: cover, 100% auto; background-repeat: no-repeat; background-blend-mode: multiply; border: 1px solid rgba(0, 72, 146, 0.1); padding: 50px 40px; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: center;">
                        <div style="position: relative; z-index: 3;">
                            <h3 style="font-size: 36px; margin-bottom: 16px; color: #004892; font-family: var(--font-display); font-weight: 800; line-height: 1.1;">Financial <br>Literacy</h3>
                            <p style="font-size: 15px; color: #4F6B8C; line-height: 1.6; margin-bottom: 32px; max-width: 280px;">Wealth creation, compounding, and simulation-led mastery.</p>
                            
                            <div style="display: flex; flex-direction: column; gap: 12px; max-width: 240px; margin-bottom: 40px;">
                                <div style="background: rgba(255, 255, 255, 0.6); border: 1px solid rgba(0, 72, 146, 0.15); padding: 12px 24px; border-radius: 14px; font-weight: 800; color: #004892; font-size: 13px; box-shadow: 0 4px 12px rgba(0, 72, 146, 0.05);">Market Simulations</div>
                                <div style="background: rgba(255, 255, 255, 0.6); border: 1px solid rgba(0, 72, 146, 0.15); padding: 12px 24px; border-radius: 14px; font-weight: 800; color: #004892; font-size: 13px; box-shadow: 0 4px 12px rgba(0, 72, 146, 0.05);">Asset Management</div>
                            </div>
                        </div>
                        
                        <a href="/finance" data-link style="text-decoration: none; color: #004892; font-weight: 800; text-transform:uppercase; letter-spacing:3px; font-size:13px; display: flex; align-items: center; gap: 12px; position: relative; z-index: 3; margin-top: 20px;">Explore Domain <i class="fas fa-arrow-right"></i></a>
                    </div>

                    <!-- 3. AI & Robotics (Bottom Left - Span 3) -->
                    <div class="bento-item" style="grid-column: span 7; grid-row: span 3; background: #FFF5F6; border: 1px solid rgba(239, 91, 112, 0.1); padding: 30px; position: relative; overflow: hidden; display: flex; align-items: center;">
                        <div style="width: 55%; position: relative; z-index: 3;">
                            <h3 style="font-size: 28px; margin-bottom: 8px; color: #EF5B70; font-family: var(--font-display); font-weight: 800; line-height: 1.1;">AI & <br>Robotics</h3>
                            <p style="font-size: 13px; color: #D14D5F; line-height: 1.5; opacity: 0.9;">Industrial-grade implementation of tomorrow's tech.</p>
                            <a href="/ai-robotics" data-link style="margin-top: 16px; text-decoration: none; color: #EF5B70; font-weight: 800; text-transform:uppercase; letter-spacing:3px; font-size:12px; display: flex; align-items: center; gap: 12px;">Explore Domain <i class="fas fa-arrow-right"></i></a>
                        </div>
                        
                        <img src="/ai_robotics_3d_icon_final_1771050129801.png" alt="AI Robotics" style="position: absolute; right: -30px; height: 100%; width: auto; z-index: 1; pointer-events: none; mix-blend-mode: multiply; filter: contrast(1.05) brightness(1.05);" width="350" height="350" loading="lazy">
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 7: PLATFORM (INTEGRATED TILES) -->
        <section id="platform" style="min-height: 100vh; display: flex; align-items: center; padding: 80px 0; background: var(--bg-white);">
            <div class="container">
                <div class="reveal" style="display: grid; grid-template-columns: 1fr 1fr; gap: 120px; align-items: center;">
                    <div>
                        <span class="label-sup" style="color: var(--s-cyan); font-weight: 800;">Integrated Ecosystem</span>
                        <h2 style="font-size: 64px; font-weight: 800; color: var(--p-navy); line-height: 1.1; margin: 32px 0;">A Platform That <br> Works <span class="script-font" style="color: var(--s-cyan); font-size: 1.2em;">For Schools.</span></h2>
                        <p style="color:var(--text-muted); font-size:22px; line-height: 1.8;">Not against them. We integrate seamlessly into your institutional ecosystem, maintaining the elite standards of your campus.</p>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
                        <div class="bento-item" style="text-align:center; padding: 40px; border-radius: 24px;">
                            <div style="font-size: 32px; color: var(--s-cyan); margin-bottom: 24px;"><i class="fas fa-shield-virus"></i></div>
                            <h4 style="color:var(--p-navy); margin-bottom:12px; font-size: 20px; font-weight: 800;">Unified Ops</h4>
                            <p style="font-size:13px; color:var(--text-muted);">One-view oversight.</p>
                        </div>
                        <div class="bento-item" style="text-align:center; padding: 40px; border-radius: 24px;">
                            <div style="font-size: 32px; color: var(--s-cyan); margin-bottom: 24px;"><i class="fas fa-id-badge"></i></div>
                            <h4 style="color:var(--p-navy); margin-bottom:12px; font-size: 20px; font-weight: 800;">Elite Mentors</h4>
                            <p style="font-size:13px; color:var(--text-muted);">Industrial experts.</p>
                        </div>
                        <div class="bento-item" style="text-align:center; padding: 40px; border-radius: 24px;">
                            <div style="font-size: 32px; color: var(--s-cyan); margin-bottom: 24px;"><i class="fas fa-project-diagram"></i></div>
                            <h4 style="color:var(--p-navy); margin-bottom:12px; font-size: 20px; font-weight: 800;">Real World</h4>
                            <p style="font-size:13px; color:var(--text-muted);">Direct firm connect.</p>
                        </div>
                        <div class="bento-item" style="text-align:center; padding: 40px; border-radius: 24px;">
                            <div style="font-size: 32px; color: var(--s-cyan); margin-bottom: 24px;"><i class="fas fa-meteor"></i></div>
                            <h4 style="color:var(--p-navy); margin-bottom:12px; font-size: 20px; font-weight: 800;">Live Events</h4>
                            <p style="font-size:13px; color:var(--text-muted);">Hackathons & Summits.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 10: FINAL VISIONARY CTA -->
        <section id="cta" style="min-height: 100vh; display: flex; align-items: center; background: var(--p-navy); color: white; padding: 80px 0; position: relative; overflow: hidden;">
            <div class="blob" style="background: radial-gradient(circle, rgba(0, 229, 255, 0.2) 0%, transparent 70%); width: 1200px; height: 1200px; bottom: -600px; right: -400px; filter: blur(100px);"></div>
            <div class="container text-center">
                <div class="reveal">
                    <span class="label-sup" style="color: var(--s-cyan); letter-spacing: 12px; font-weight: 800; opacity: 0.6;">Ready to Transform?</span>
                    <h2 style="color: white; font-size: clamp(40px, 8vw, 96px); margin: 16px 0 32px; font-weight: 800; line-height: 0.9;">Execute <span class="script-font" style="color: var(--s-cyan); font-size: 1.25em;">NEP 2020</span> Skills. <br> With Global Standards.</h2>
                    <p style="opacity: 0.7; max-width: 800px; margin: 0 auto 32px; font-size: 24px; line-height: 1.8;">Vivencia partners with elite institutions to ensure compliance, outcomes, and zero operational friction. The future of skill mastery is here.</p>
                    <a href="/contact" data-link class="btn-elite" style="background: var(--s-cyan); color: var(--p-navy); border-radius: 12px; padding: 24px 80px; font-size: 18px; font-weight: 800; height: 80px; box-shadow: 0 30px 60px rgba(0,229,255,0.3);">Launch Your Partnership</a>
                </div>
            </div>
        </section>
    `;

    // ALL PAGE LOGIC (VIDEO + CAROUSEL + REVEAL)
    setTimeout(() => {
        // VIDEO LOGIC
        const video = document.querySelector('#founder-video');
        const overlay = document.querySelector('#video-overlay');
        if (video) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        video.play().catch(e => console.log('Autoplay blocked:', e));
                    } else { video.pause(); }
                });
            }, { threshold: 0.1 });
            observer.observe(video);

            if (overlay) {
                overlay.addEventListener('click', () => {
                    video.muted = false;
                    video.play();
                    overlay.style.opacity = '0';
                    overlay.style.pointerEvents = 'none';
                });
            }
        }

        // CAROUSEL LOGIC
        const slides = document.querySelectorAll('.hero-slide');
        if (slides.length > 0) {
            let currentSlide = 0;
            setInterval(() => {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }, 5000);
        }

        // REVEAL LOGIC - COMPACT & ROBUST
        const reveals = document.querySelectorAll('.reveal');
        const revObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    revObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0, rootMargin: '0px 0px -50px 0px' });
        reveals.forEach(r => revObserver.observe(r));
    }, 100);

    return page;
}
