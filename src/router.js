export class Router {
    constructor(routes) {
        this.routes = routes;
        this.app = document.getElementById('app');

        window.addEventListener('popstate', () => this.handleRoute());
        document.body.addEventListener('click', e => {
            if (e.target.matches('[data-link]')) {
                e.preventDefault();
                this.navigate(e.target.getAttribute('href'));
            }
        });
    }

    navigate(url) {
        history.pushState(null, null, url);
        this.handleRoute();
        window.scrollTo(0, 0);
    }

    async handleRoute() {
        const path = window.location.pathname;
        const route = this.routes[path] || this.routes['/'];

        // Render Page
        this.app.innerHTML = '';
        const page = await route();
        this.app.appendChild(page);

        // Trigger scroll animations for new content
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }
}
