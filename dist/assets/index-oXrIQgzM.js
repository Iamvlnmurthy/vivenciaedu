(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();class l{constructor(e){this.routes=e,this.app=document.getElementById("app"),window.addEventListener("popstate",()=>this.handleRoute()),document.body.addEventListener("click",o=>{o.target.matches("[data-link]")&&(o.preventDefault(),this.navigate(o.target.getAttribute("href")))})}navigate(e){history.pushState(null,null,e),this.handleRoute(),window.scrollTo(0,0)}async handleRoute(){const e=window.location.pathname,o=this.routes[e]||this.routes["/"];this.app.innerHTML="";const s=await o();this.app.appendChild(s);const t=new IntersectionObserver(a=>{a.forEach(n=>{n.isIntersecting&&n.target.classList.add("active")})},{threshold:.1});document.querySelectorAll(".reveal").forEach(a=>t.observe(a))}}function r(i){const e=document.createElement("div"),o=document.createElement("nav");o.className="nav-supreme",window.addEventListener("scroll",()=>{window.scrollY>50?o.classList.add("scrolled"):o.classList.remove("scrolled")}),o.innerHTML=`
        <div class="container nav-content">
            <a href="/" data-link class="logo-container">
                <img src="/logo.png?v=2" alt="Vivencia" class="logo-main" style="height: 48px; mix-blend-mode: multiply;">
            </a>
            
            <ul class="nav-links">
                <li><a href="/" data-link class="nav-link">Vision</a></li>
                <li><a href="/about" data-link class="nav-link">The Firm</a></li>
                <li class="dropdown" style="position:relative;">
                    <a href="#" class="nav-link">Programs ▾</a>
                    <div class="dropdown-menu" style="position:absolute; top:100%; left:0; background:white; min-width:240px; padding:20px; box-shadow:var(--glass-shadow); border-radius:8px; opacity:0; visibility:hidden; transition:var(--transition);">
                        <a href="/entrepreneurship" data-link class="dropdown-item" style="display:block; padding:12px 0; text-decoration:none; color:var(--p-navy); font-size:14px; font-weight:600;">Young Entrepreneurship</a>
                        <a href="/finance" data-link class="dropdown-item" style="display:block; padding:12px 0; text-decoration:none; color:var(--p-navy); font-size:14px; font-weight:600;">Financial Literacy</a>
                        <a href="/ai-robotics" data-link class="dropdown-item" style="display:block; padding:12px 0; text-decoration:none; color:var(--p-navy); font-size:14px; font-weight:600;">AI & Robotics</a>
                    </div>
                </li>
                <li><a href="/models" data-link class="nav-link">Models</a></li>
                <li><a href="/contact" data-link class="btn-elite" style="padding:0 24px; height:44px; font-size:12px;">Partner With Us</a></li>
            </ul>
        </div>
    `;const s=o.querySelector(".dropdown"),t=o.querySelector(".dropdown-menu");s.addEventListener("mouseenter",()=>{t.style.opacity="1",t.style.visibility="visible",t.style.transform="translateY(10px)"}),s.addEventListener("mouseleave",()=>{t.style.opacity="0",t.style.visibility="hidden",t.style.transform="translateY(0)"});const a=document.createElement("footer");a.style.background="var(--p-navy)",a.style.color="white",a.style.padding="180px 0 60px",a.innerHTML=`
        <div class="container">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 80px; margin-bottom: 80px;">
                <div>
                    <!-- Logo Hack: Grayscale->Invert->Screen to make white bg transparent and black text white -->
                    <img src="/logo.png?v=2" alt="Vivencia" style="height: 80px; margin-bottom: 32px; filter: grayscale(1) invert(1) brightness(2); mix-blend-mode: screen;">
                    <p style="opacity: 0.6; font-size: 15px; line-height: 2; max-width: 400px;">The Elite School Skill Partner ensuring NEP 2020 professional execution within the premium academic ecosystem.</p>
                </div>
                <div>
                    <h4 style="font-family:var(--font-display); font-size:14px; letter-spacing:3px; text-transform:uppercase; margin-bottom:40px; color:var(--s-cyan);">Expertise</h4>
                    <ul style="list-style:none; line-height:3; font-size:14px; font-weight:500;">
                        <li><a href="/entrepreneurship" data-link style="color:white; text-decoration:none; opacity:0.7;">Entrepreneurship</a></li>
                        <li><a href="/finance" data-link style="color:white; text-decoration:none; opacity:0.7;">Financial Literacy</a></li>
                        <li><a href="/ai-robotics" data-link style="color:white; text-decoration:none; opacity:0.7;">AI & Robotics</a></li>
                    </ul>
                </div>
                <div>
                    <h4 style="font-family:var(--font-display); font-size:14px; letter-spacing:3px; text-transform:uppercase; margin-bottom:40px; color:var(--s-cyan);">Company</h4>
                    <ul style="list-style:none; line-height:3; font-size:14px; font-weight:500;">
                        <li><a href="/about" data-link style="color:white; text-decoration:none; opacity:0.7;">About Firm</a></li>
                        <li><a href="/models" data-link style="color:white; text-decoration:none; opacity:0.7;">Execution Models</a></li>
                        <li><a href="/contact" data-link style="color:white; text-decoration:none; opacity:0.7;">Partner Contact</a></li>
                    </ul>
                </div>
                <div style="background:rgba(255,255,255,0.03); padding:40px; border-radius:8px;">
                    <h4 style="font-family:var(--font-display); font-size:14px; letter-spacing:3px; text-transform:uppercase; margin-bottom:24px; color:white;">Institutional Office</h4>
                    <p style="opacity:0.6; font-size:14px; line-height:2;">partner@vivencia.in</p>
                    <p style="opacity:0.6; font-size:14px; line-height:2;">Hyderabad, Telangana</p>
                    <p style="opacity:0.6; font-size:14px; line-height:2; margin-top:16px;">+91 97000 00000</p>
                </div>
            </div>
            <div style="padding-top:40px; border-top:1px solid rgba(255,255,255,0.08); display:flex; justify-content:space-between; align-items:center; font-size:12px; opacity:0.4; letter-spacing:1px;">
                <span>© 2026 VIVENCIA ELITE. ALL RIGHTS RESERVED.</span>
                <span>NEP 2020 COMPLIANT EXECUTION</span>
            </div>
        </div>
    `;const n=document.createElement("main");return n.style.marginTop="0",n.appendChild(i),e.appendChild(o),e.appendChild(n),e.appendChild(a),e}async function p(){const i=document.createElement("div");return i.innerHTML=`
        <!-- SECTION 1: HERO -->
        <section id="hero" style="min-height: 100vh; display: flex; align-items: center; padding-top: 100px; background: radial-gradient(circle at top right, rgba(51, 181, 229, 0.05), transparent 600px), radial-gradient(circle at bottom left, rgba(0, 42, 102, 0.03), transparent 600px);">
            <div class="container">
                <div class="reveal" style="max-width: 1000px;">
                    <span class="label-sup">The School Skill Partner</span>
                    <h1 style="margin-bottom: 40px; color:var(--p-navy);">Making Schools <br><span style="color:var(--s-cyan)">NEP 2020–Ready</span> <br>Without Adding Load.</h1>
                    <p style="font-size: 20px; color: var(--text-muted); line-height: 1.8; max-width: 720px; margin-bottom: 24px;">Vivencia enables schools to implement NEP 2020–mandated skills through a single, integrated platform — taking complete ownership of curriculum, delivery, mentors, and outcomes.</p>
                    
                    <div style="margin-bottom: 60px; font-weight: 700; color: var(--p-navy); font-family: var(--font-display); font-size: 24px;">
                        <span style="opacity:0.5;">Schools focus on academics.</span> <br>
                        Vivencia executes skills.
                    </div>

                    <div style="display: flex; gap: 24px; align-items: center;">
                        <a href="#process" style="background:var(--p-navy); color:white; padding:16px 32px; border-radius:40px; text-decoration:none; font-weight:600; font-size:14px; letter-spacing:1px;">See How We Execute</a>
                        <a href="/contact" data-link class="btn-elite" style="background:transparent; color:var(--p-navy); border:1px solid var(--p-navy);">Partner With Us</a>
                    </div>
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
                        <p style="font-size: 18px; color: var(--text-muted); line-height: 1.8;">Teachers continue teaching.<br>Vivencia executes NEP skills.</p>
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
    `,setTimeout(()=>{const e=document.querySelector("#founder-video"),o=document.querySelector("#video-overlay");e&&o&&(new IntersectionObserver(t=>{t.forEach(a=>{a.isIntersecting?e.play().then(()=>{o.style.opacity="0"}).catch(n=>console.log("Autoplay blocked:",n)):e.pause()})},{threshold:.1}).observe(e),o.addEventListener("click",()=>{e.muted=!1,e.currentTime=0,e.play(),o.style.opacity="0"}),e.addEventListener("click",()=>{e.paused?(e.play(),o.style.opacity="0"):(e.pause(),o.style.opacity="1")}))},500),i}async function d(){const i=document.createElement("div");return i.innerHTML=`
        <section style="background: radial-gradient(circle at top left, rgba(0, 42, 102, 0.05), transparent 800px); padding-top:240px;">
            <div class="container text-center">
                <div class="reveal">
                    <span class="label-sup">Operational Excellence</span>
                    <h1 style="max-width:900px; margin: 0 auto 40px;">The Elite Academic <br>Partnership Firm.</h1>
                    <p style="font-size: 20px; color: var(--text-muted); line-height: 2; max-width: 800px; margin: 0 auto;">Vivencia is the strategic skill execution arm for premium schools. We ensure that NEP 2020 initiatives are implemented with professional rigor, zero teacher burden, and institutional scale.</p>
                </div>
            </div>
        </section>

        <section class="bg-subtle">
            <div class="container">
                <div class="reveal">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 120px; align-items: center;">
                        <div>
                            <span class="label-sup">The Challenge</span>
                            <h2>Bridging the <br>Execution Gap.</h2>
                            <p style="margin-top:40px; color:var(--text-muted); line-height:2; font-size:18px;">While NEP 2020 mandates transformation, the daily reality of school management involves overloaded teachers and fragmented vendors. Vivencia was founded to provide a singular, high-integrity execution partner.</p>
                        </div>
                        <div class="glass-card" style="border-left:6px solid var(--p-navy); padding:60px;">
                            <p style="font-family:var(--font-display); font-size:24px; font-weight:600; color:var(--p-navy); line-height:1.6;">"Our firm assumes the complexity of skill delivery, so school leaders can remain focused on their core academic mission."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="reveal text-center" style="margin-bottom:100px;">
                    <span class="label-sup">Core Philosophy</span>
                    <h2>The Vivencia Standard</h2>
                </div>
                
                <div class="reveal" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:32px;">
                    <div class="glass-card">
                        <h4 style="margin-bottom:20px; color:var(--p-navy);">Zero Burden</h4>
                        <p style="font-size:14px; color:var(--text-muted); line-height:1.8;">We don't ask your teachers to plan lessons. We arrive with our own mentors and materials.</p>
                    </div>
                    <div class="glass-card">
                        <h4 style="margin-bottom:20px; color:var(--p-navy);">Project Integrity</h4>
                        <p style="font-size:14px; color:var(--text-muted); line-height:1.8;">Skills are practiced, not just heard. Every student builds, iterates, and pitches.</p>
                    </div>
                    <div class="glass-card">
                        <h4 style="margin-bottom:20px; color:var(--p-navy);">Institutional Scale</h4>
                        <p style="font-size:14px; color:var(--text-muted); line-height:1.8;">A unified framework that works across clusters and campuses with consistent high quality.</p>
                    </div>
                </div>
            </div>
        </section>
    `,i}async function c(){const i=document.createElement("div");return i.innerHTML=`
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
    `,i}async function v(){const i=document.createElement("div");return i.innerHTML=`
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
    `,i}async function y(){const i=document.createElement("div");return i.innerHTML=`
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
    `,i}async function g(){const i=document.createElement("div");return i.innerHTML=`
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
    `,i}async function h(){const i=document.createElement("div");return i.innerHTML=`
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
    `,i}const x={"/":async()=>r(await p()),"/about":async()=>r(await d()),"/models":async()=>r(await c()),"/entrepreneurship":async()=>r(await v()),"/finance":async()=>r(await y()),"/ai-robotics":async()=>r(await g()),"/contact":async()=>r(await h())};new l(x).handleRoute();
