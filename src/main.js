import './style.css';
import { Router } from './router.js';
import { Layout } from './components/Layout.js';

// PAGE IMPORTS
import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { ProgramModels } from './pages/ProgramModels.js';
import { Entrepreneurship, Finance, AI } from './pages/Domains.js';
import { Contact } from './pages/Contact.js';
import { Privacy } from './pages/Privacy.js';
import { Terms } from './pages/Terms.js';

const routes = {
    '/': {
        handler: async () => Layout(await Home()),
        metadata: {
            title: 'Vivencia — The Elite School Skill Partner',
            description: 'Vivencia is the strategic skill execution partner for world-class institutions, ensuring NEP 2020 compliance with zero teacher burden.'
        }
    },
    '/about': {
        handler: async () => Layout(await About()),
        metadata: {
            title: 'The Firm | Vivencia — Elite Academic Partnership',
            description: 'Learn about Vivencia, the strategic skill execution arm for premium schools. Professional rigor, zero teacher burden, and institutional scale.'
        }
    },
    '/models': {
        handler: async () => Layout(await ProgramModels()),
        metadata: {
            title: 'Operational Models | Vivencia — Execution Architecture',
            description: 'Explore our engagement models and the 70:20:10 pedagogical framework for NEP 2020 skill mastery.'
        }
    },
    '/entrepreneurship': {
        handler: async () => Layout(await Entrepreneurship()),
        metadata: {
            title: 'Young Entrepreneurship | Vivencia Domain Mastery',
            description: 'Building confident problem-solvers and young innovators through our activity-driven entrepreneurship program.'
        }
    },
    '/finance': {
        handler: async () => Layout(await Finance()),
        metadata: {
            title: 'Financial Literacy | Vivencia Domain Mastery',
            description: 'Equipping students with money awareness, management, and long-term thinking through simulation-led mastery.'
        }
    },
    '/ai-robotics': {
        handler: async () => Layout(await AI()),
        metadata: {
            title: 'AI & Robotics | Vivencia Domain Mastery',
            description: 'Moving students from technology consumers to creators through industrial-grade AI and robotics implementation.'
        }
    },
    '/contact': {
        handler: async () => Layout(await Contact()),
        metadata: {
            title: 'Book a Consultation | Vivencia Institutional Partnership',
            description: 'Partner with Vivencia to execute NEP 2020 skills in your institution. Book a strategic partnership consultation today.'
        }
    },
    '/privacy': {
        handler: async () => Layout(await Privacy()),
        metadata: {
            title: 'Privacy Policy | Vivencia',
            description: 'Vivencia Privacy Policy.'
        }
    },
    '/terms': {
        handler: async () => Layout(await Terms()),
        metadata: {
            title: 'Terms of Service | Vivencia',
            description: 'Vivencia Terms of Service.'
        }
    }
};

new Router(routes).handleRoute();
