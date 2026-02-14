import './style.css';
import { Router } from './router.js';
import { Layout } from './components/Layout.js';

// PAGE IMPORTS
import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { ProgramModels } from './pages/ProgramModels.js';
import { Entrepreneurship, Finance, AI } from './pages/Domains.js';
import { Contact } from './pages/Contact.js';

const routes = {
    '/': async () => Layout(await Home()),
    '/about': async () => Layout(await About()),
    '/models': async () => Layout(await ProgramModels()),
    '/entrepreneurship': async () => Layout(await Entrepreneurship()),
    '/finance': async () => Layout(await Finance()),
    '/ai-robotics': async () => Layout(await AI()),
    '/contact': async () => Layout(await Contact())
};

new Router(routes).handleRoute();
