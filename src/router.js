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
        const routeConfig = this.routes[path] || this.routes['/'];

        // Handle both simple function routes and object-based routes with metadata
        const routeHandler = typeof routeConfig === 'function' ? routeConfig : routeConfig.handler;
        const metadata = routeConfig.metadata || {};

        // Update Metadata
        if (metadata.title) document.title = metadata.title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && metadata.description) metaDesc.setAttribute('content', metadata.description);

        // Render Page
        this.app.innerHTML = '';
        const page = await routeHandler();
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
