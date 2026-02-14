export async function Home() {
    const page = document.createElement('div');
    page.innerHTML = `
        <!-- SECTION 1: HERO CAROUSEL -->
        <section id="hero" style="min-height: 100vh; display: flex; align-items: center; padding-top: 100px; background: radial-gradient(circle at top right, rgba(51, 181, 229, 0.05), transparent 600px), radial-gradient(circle at bottom left, rgba(0, 42, 102, 0.03), transparent 600px);">
            <div class="container" style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;">
                
                <!-- Left: Text Content -->
                <div class="reveal">
                    <span class="label-sup">The School Skill Partner</span>
                    <h1 style="margin-bottom: 32px; color:var(--p-navy); font-size:56px; line-height:1.1;">Making Schools <br><span style="color:var(--s-cyan)">NEP 2020–Ready</span> <br>Without Adding Load.</h1>
                    <p style="font-size: 18px; color: var(--text-muted); line-height: 1.8; margin-bottom: 32px;">Vivencia takes absolute ownership of specific skill execution—delivering curriculum, mentors, and outcomes through a single integrated platform.</p>
                    
                    <div style="margin-bottom: 40px; font-weight: 700; color: var(--p-navy); font-family: var(--font-display); font-size: 20px;">
                        <span style="opacity:0.5;">Schools focus on academics.</span> <br>
                        Vivencia executes skills.
                    </div>

                    <div style="display: flex; gap: 24px; align-items: center;">
                        <a href="#process" style="background:var(--p-navy); color:white; padding:16px 32px; border-radius:40px; text-decoration:none; font-weight:600; font-size:14px; letter-spacing:1px;">See How We Execute</a>
                        <a href="/contact" data-link class="btn-elite" style="background:transparent; color:var(--p-navy); border:1px solid var(--p-navy);">Partner With Us</a>
                    </div>
                </div>

                <!-- Right: Image Carousel -->
                <div class="reveal" style="position: relative; height: 500px; border-radius: 24px; overflow: hidden; box-shadow: var(--shadow-elite); background: white;">
                    <style>
                        .hero-slide {
                            position: absolute;
                            inset: 0;
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            opacity: 0;
                            transition: opacity 1.5s ease-in-out;
                        }
                        .hero-slide.active {
                            opacity: 1;
                        }
                    </style>
                    <img src="/hero-1.jpg" class="hero-slide active" alt="Vivencia Implementation 1">
                    <img src="/hero-2.jpg" class="hero-slide" alt="Vivencia Implementation 2">
                    <img src="/hero-3.jpg" class="hero-slide" alt="Vivencia Implementation 3">
                    <img src="/hero-4.jpg" class="hero-slide" alt="Vivencia Implementation 4">
                    
                    <!-- Gradient Overlay for Depth -->
                    <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,53,128,0.3), transparent);"></div>
                </div>
            </div>
        </section>

        <!-- SECTION 2: THE REALITY -->
        <section class="bg-subtle">
            <div class="container">
                <div class="reveal text-center" style="margin-bottom: 80px;">
                    <span class="label-sup">The Challenge</span>
                    <h2>Why NEP 2020 Feels <br>Like a Burden.</h2>
                    <p style="margin-top:24px; color:var(--text-muted); font-size:18px;">Schools want compliance, but face operational reality:</p>
                </div>
                <div class="reveal" style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
                    <div class="glass-card" style="border-left: 4px solid var(--p-navy);">
                        <h4 style="margin-bottom:16px; color:var(--p-navy);">Teacher Overload</h4>
                        <p style="font-size:15px; color:var(--text-muted); line-height:1.7;">Academic staff are already at capacity. Adding skill coordination affects core teaching quality.</p>
                    </div>
                    <div class="glass-card" style="border-left: 4px solid var(--p-navy);">
                        <h4 style="margin-bottom:16px; color:var(--p-navy);">Planning Complexity</h4>
                        <p style="font-size:15px; color:var(--text-muted); line-height:1.7;">Designing a new curriculum that meets NEP mandates requires specialized expertise.</p>
                    </div>
                    <div class="glass-card" style="border-left: 4px solid var(--p-navy);">
                        <h4 style="margin-bottom:16px; color:var(--p-navy);">Vendor Fragmentation</h4>
                        <p style="font-size:15px; color:var(--text-muted); line-height:1.7;">Managing separate vendors for robotics, finance, and soft skills creates specific friction.</p>
                    </div>
                    <div class="glass-card" style="border-left: 4px solid var(--p-navy);">
                        <h4 style="margin-bottom:16px; color:var(--p-navy);">Theoretical Learning</h4>
                        <p style="font-size:15px; color:var(--text-muted); line-height:1.7;">Without dedicated ownership, skills become just another subject to study, not practice.</p>
                    </div>
                </div>
                <div class="reveal text-center" style="margin-top: 60px;">
                    <p style="font-family:var(--font-display); font-weight:700; color:var(--p-navy); font-size:20px;">NEP fails when it becomes another teacher responsibility.</p>
                </div>
            </div>
        </section>

        <!-- SECTION 3: OUR PROMISE -->
        <section>
            <div class="container">
                <div class="reveal" style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 80px; align-items: center;">
                    <div>
                        <h2>Vivencia Takes <br>Complete Ownership.</h2>
                        <p style="margin: 24px 0 40px; color: var(--text-muted); font-size: 18px;">Once a school partners with Vivencia, the operational burden vanishes.</p>
                        
                        <ul style="list-style: none; padding: 0; display: grid; gap: 20px;">
                            <li style="display: flex; gap: 16px; align-items: center; color: var(--p-navy); font-weight: 500;"><span style="color:var(--s-cyan)">✔</span> No curriculum design or mapping</li>
                            <li style="display: flex; gap: 16px; align-items: center; color: var(--p-navy); font-weight: 500;"><span style="color:var(--s-cyan)">✔</span> No trainer hiring or scheduling</li>
                            <li style="display: flex; gap: 16px; align-items: center; color: var(--p-navy); font-weight: 500;"><span style="color:var(--s-cyan)">✔</span> No mentor coordination</li>
                            <li style="display: flex; gap: 16px; align-items: center; color: var(--p-navy); font-weight: 500;"><span style="color:var(--s-cyan)">✔</span> No assessment management</li>
                        </ul>
                    </div>
                    <div class="glass-card" style="background:var(--cream); border-left: 6px solid var(--s-cyan); padding: 60px;">
                        <h3 style="color:var(--p-navy); margin-bottom: 24px;">We handle everything.</h3>
                        <p style="font-size: 18px; color: var(--text-muted); line-height: 1.8;">Teachers continue teaching.<br>Vivencia executes skills.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 4: ZERO BURDEN -->
        <section class="bg-subtle">
            <div class="container text-center">
                <div class="reveal">
                    <span class="label-sup">Zero Load Promise</span>
                    <h2 style="margin-bottom: 60px;">What You Don't Worry About</h2>
                    
                    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
                        <div class="glass-card" style="padding: 16px 32px; border-radius: 40px; font-weight: 700; color: var(--p-navy);">No Lesson Planning</div>
                        <div class="glass-card" style="padding: 16px 32px; border-radius: 40px; font-weight: 700; color: var(--p-navy);">No Teacher Training</div>
                        <div class="glass-card" style="padding: 16px 32px; border-radius: 40px; font-weight: 700; color: var(--p-navy);">No Vendor Chaos</div>
                        <div class="glass-card" style="padding: 16px 32px; border-radius: 40px; font-weight: 700; color: var(--p-navy);">No Compliance Stress</div>
                        <div class="glass-card" style="padding: 16px 32px; border-radius: 40px; font-weight: 700; color: var(--p-navy);">No Outcome Confusion</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 5: HOW WE EXECUTE -->
        <section id="process">
            <div class="container">
                <div class="reveal text-center" style="margin-bottom: 80px;">
                    <span class="label-sup">Our Process</span>
                    <h2>From Policy to Classroom.</h2>
                </div>
                
                <div class="reveal" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px;">
                    <div style="position:relative;">
                        <div style="font-size: 64px; font-weight: 700; color: rgba(0,0,0,0.05); position: absolute; top: -30px; left: 0;">01</div>
                        <h4 style="margin-bottom: 12px; color: var(--p-navy); position: relative;">Annual Planning</h4>
                        <p style="font-size: 14px; color: var(--text-muted);">We map the NEP mandates to your academic calendar.</p>
                    </div>
                    <div style="position:relative;">
                        <div style="font-size: 64px; font-weight: 700; color: rgba(0,0,0,0.05); position: absolute; top: -30px; left: 0;">02</div>
                        <h4 style="margin-bottom: 12px; color: var(--p-navy); position: relative;">Deployment</h4>
                        <p style="font-size: 14px; color: var(--text-muted);">Vivencia trainers and materials arrive at your campus.</p>
                    </div>
                    <div style="position:relative;">
                        <div style="font-size: 64px; font-weight: 700; color: rgba(0,0,0,0.05); position: absolute; top: -30px; left: 0;">03</div>
                        <h4 style="margin-bottom: 12px; color: var(--p-navy); position: relative;">Execution</h4>
                        <p style="font-size: 14px; color: var(--text-muted);">Structured weekly sessions delivered by our experts.</p>
                    </div>
                    <div style="position:relative;">
                        <div style="font-size: 64px; font-weight: 700; color: rgba(0,0,0,0.05); position: absolute; top: -30px; left: 0;">04</div>
                        <h4 style="margin-bottom: 12px; color: var(--p-navy); position: relative;">Mentorship</h4>
                        <p style="font-size: 14px; color: var(--text-muted);">Industry professionals guide student projects.</p>
                    </div>
                    <div style="position:relative;">
                        <div style="font-size: 64px; font-weight: 700; color: rgba(0,0,0,0.05); position: absolute; top: -30px; left: 0;">05</div>
                        <h4 style="margin-bottom: 12px; color: var(--p-navy); position: relative;">Showcase</h4>
                        <p style="font-size: 14px; color: var(--text-muted);">Students present prototypes and pitches.</p>
                    </div>
                    <div style="position:relative;">
                        <div style="font-size: 64px; font-weight: 700; color: rgba(0,0,0,0.05); position: absolute; top: -30px; left: 0;">06</div>
                        <h4 style="margin-bottom: 12px; color: var(--p-navy); position: relative;">Reporting</h4>
                        <p style="font-size: 14px; color: var(--text-muted);">Detailed outcome reports for school records.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 6: DOMAINS -->
        <section class="bg-subtle">
            <div class="container">
                <div class="reveal text-center" style="margin-bottom: 80px;">
                    <span class="label-sup">What We Deliver</span>
                    <h2>NEP 2020 Domains.</h2>
                </div>
                
                <div class="reveal" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px;">
                    <div class="glass-card" style="border-top: 4px solid var(--accent-orange); display: flex; flex-direction: column;">
                        <h3 style="font-family:var(--font-display); margin-bottom: 24px;">Young <br>Entrepreneurship</h3>
                        <p style="flex-grow: 1; font-size: 15px; color: var(--text-muted); line-height:1.8;">Students identify real problems, build ideas into prototypes, and pitch solutions.</p>
                        <a href="/entrepreneurship" data-link style="margin-top: 40px; text-decoration: none; color: var(--accent-orange); font-weight: 700; text-transform:uppercase; letter-spacing:2px; font-size:12px;">Explore Domain →</a>
                    </div>
                    <div class="glass-card" style="border-top: 4px solid var(--s-cyan); display: flex; flex-direction: column;">
                        <h3 style="font-family:var(--font-display); margin-bottom: 24px;">Financial <br>Literacy</h3>
                        <p style="flex-grow: 1; font-size: 15px; color: var(--text-muted); line-height:1.8;">Building money awareness. Compounding, wealth management, and simulation-led mastery.</p>
                        <a href="/finance" data-link style="margin-top: 40px; text-decoration: none; color: var(--s-cyan); font-weight: 700; text-transform:uppercase; letter-spacing:2px; font-size:12px;">Explore Domain →</a>
                    </div>
                    <div class="glass-card" style="border-top: 4px solid var(--accent-pink); display: flex; flex-direction: column;">
                        <h3 style="font-family:var(--font-display); margin-bottom: 24px;">AI & <br>Robotics</h3>
                        <p style="flex-grow: 1; font-size: 15px; color: var(--text-muted); line-height:1.8;">Tech as a tool. Applied solutions, robotics, and industrial automation for the next generation.</p>
                        <a href="/ai-robotics" data-link style="margin-top: 40px; text-decoration: none; color: var(--accent-pink); font-weight: 700; text-transform:uppercase; letter-spacing:2px; font-size:12px;">Explore Domain →</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 7: PLATFORM -->
        <section>
            <div class="container">
                <div class="reveal" style="display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;">
                    <div>
                        <h2>A Platform That <br>Works For Schools.</h2>
                        <p style="margin-top:24px; color:var(--text-muted); font-size:18px;">Not against them. We integrate seamlessly into your ecosystem.</p>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
                        <div class="glass-card" style="text-align:center;">
                            <h4 style="color:var(--p-navy); margin-bottom:12px;">Unified Dash</h4>
                            <p style="font-size:13px; color:var(--text-muted);">One view for all skill progress.</p>
                        </div>
                        <div class="glass-card" style="text-align:center;">
                            <h4 style="color:var(--p-navy); margin-bottom:12px;">Expert Mentors</h4>
                            <p style="font-size:13px; color:var(--text-muted);">Certified professionals on-ground.</p>
                        </div>
                        <div class="glass-card" style="text-align:center;">
                            <h4 style="color:var(--p-navy); margin-bottom:12px;">Industry Link</h4>
                            <p style="font-size:13px; color:var(--text-muted);">Connect with real-world firms.</p>
                        </div>
                        <div class="glass-card" style="text-align:center;">
                            <h4 style="color:var(--p-navy); margin-bottom:12px;">Live Events</h4>
                            <p style="font-size:13px; color:var(--text-muted);">Pitch days and hackathons.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 8: VISION (Autoplay Video) -->
        <section class="bg-subtle" id="vision">
            <div class="container">
                <div class="reveal text-center" style="margin-bottom: 60px;">
                    <span class="label-sup">Our Vision</span>
                    <h2>Building a Future-Ready <br>School Ecosystem.</h2>
                </div>
                
                <div class="reveal">
                    <div class="video-theater" style="margin-bottom: 80px;">
                        <video id="founder-video" autoplay muted playsinline loop style="width:100%; height:100%; object-fit:cover;">
                            <source src="/Founder's Note.mp4?v=3" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <div id="video-overlay" style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.3); transition:all 0.5s; cursor:pointer;">
                            <div style="width:80px; height:80px; background:rgba(255,255,255,0.2); backdrop-filter:blur(10px); border-radius:50%; display:flex; align-items:center; justify-content:center; border:1px solid rgba(255,255,255,0.4);">
                                <div style="width:0; height:0; border-top:12px solid transparent; border-bottom:12px solid transparent; border-left:20px solid white; margin-left:4px;"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="reveal" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; text-align: center;">
                    <div>
                        <h5 style="color:var(--p-navy); margin-bottom:12px;">Cluster Level</h5>
                        <p style="font-size:13px; color:var(--text-muted);">Local inter-school colabs.</p>
                    </div>
                    <div>
                        <h5 style="color:var(--p-navy); margin-bottom:12px;">Regional Level</h5>
                        <p style="font-size:13px; color:var(--text-muted);">City-wide innovation summits.</p>
                    </div>
                    <div>
                        <h5 style="color:var(--p-navy); margin-bottom:12px;">National Level</h5>
                        <p style="font-size:13px; color:var(--text-muted);">India-wide recognition.</p>
                    </div>
                    <div>
                        <h5 style="color:var(--p-navy); margin-bottom:12px;">Open Level</h5>
                        <p style="font-size:13px; color:var(--text-muted);">Direct industry integration.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 9: EXECUTION IN ACTION -->
        <section>
            <div class="container text-center">
                <div class="reveal">
                    <h2>NEP Skill Execution — <br>As It Should Be.</h2>
                    <div style="margin-top: 60px; display: flex; justify-content: center; gap: 80px; text-align: left;">
                        <div style="max-width: 300px;">
                            <h4 style="color:var(--p-navy); margin-bottom:16px;">Zero Disruption</h4>
                            <p style="font-size:15px; color:var(--text-muted); line-height:1.7;">Sessions integrated into the timetable without disturbing core academics.</p>
                        </div>
                        <div style="max-width: 300px;">
                            <h4 style="color:var(--p-navy); margin-bottom:16px;">Active Building</h4>
                            <p style="font-size:15px; color:var(--text-muted); line-height:1.7;">Students aren't just listening; they are building, pitching, and iterating.</p>
                        </div>
                        <div style="max-width: 300px;">
                            <h4 style="color:var(--p-navy); margin-bottom:16px;">Confident Schools</h4>
                            <p style="font-size:15px; color:var(--text-muted); line-height:1.7;">Management sleeps better knowing NEP compliance is professionally handled.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 10: FINAL CTA -->
        <section style="background: var(--p-navy); color: white; text-align: center; padding: 200px 0;">
            <div class="container">
                <div class="reveal">
                    <h2 style="color: white; font-size: 56px; margin-bottom: 32px;">Execute NEP 2020 Skills. <br>Not More Teacher Work.</h2>
                    <p style="opacity: 0.7; max-width: 700px; margin: 0 auto 60px; font-size: 20px;">Vivencia partners with schools to ensure compliance, outcomes, and zero operational stress.</p>
                    <a href="/contact" data-link class="btn-elite" style="background:white; color:var(--p-navy); border-radius:40px; padding:20px 60px;">Partner With Vivencia</a>
                </div>
            </div>
        </section>
    `;

    // VIDEO & CAROUSEL LOGIC INJECTOR
    setTimeout(() => {
        const video = document.querySelector('#founder-video');
        const overlay = document.querySelector('#video-overlay');

        if (video && overlay) {
            // Autoplay Logic
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        video.play().then(() => {
                            overlay.style.opacity = '0';
                        }).catch(e => console.log('Autoplay blocked:', e));
                    } else {
                        video.pause();
                    }
                });
            }, { threshold: 0.1 });
            observer.observe(video);

            // Click interaction
            overlay.addEventListener('click', () => {
                video.muted = false;
                video.currentTime = 0;
                video.play();
                overlay.style.opacity = '0';
            });

            video.addEventListener('click', () => {
                if (video.paused) {
                    video.play();
                    overlay.style.opacity = '0';
                } else {
                    video.pause();
                    overlay.style.opacity = '1';
                }
            });
        }

        // CAROUSEL LOGIC
        const slides = document.querySelectorAll('.hero-slide');
        if (slides.length > 0) {
            let currentSlide = 0;
            setInterval(() => {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }, 3000); // 3 Seconds per slide
        }
    }, 500);

    return page;
}
