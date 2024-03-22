import { Router } from './router/router.js';
import { AboutView } from './view/about.js';
import { MainView } from './view/main.js';

export class App {
  constructor(pathSegmentsToKeep) {
    const routes = this.createRoutes();
    this.router = new Router(routes, pathSegmentsToKeep);
  }

  createRoutes() {
    return [
      {
        path: '',
        callback: (params) => new MainView(this.router, params),
      },
      {
        path: 'about',
        callback: (params) => new AboutView(this.router, params),
      },
      {
        path: 'main',
        callback: (params) => new MainView(this.router, params),
      },
    ];
  }
}
