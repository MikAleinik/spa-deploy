export class Router {
  pathSegmentsToKeep = null;
  routes = null;

  constructor(routes, pathSegmentsToKeep) {
    this.routes = routes;
    this.pathSegmentsToKeep = pathSegmentsToKeep;

    document.addEventListener('DOMContentLoaded', () => {
      const currentPath = window.location.pathname
        .split('/')
        .slice(this.pathSegmentsToKeep + 1)
        .join('/');
      this.navigate(currentPath);
    });
  }

  navigate(url) {
    const pathnameApp = window.location.pathname
      .split('/')
      .slice(1, this.pathSegmentsToKeep + 1)
      .join('/');
    window.history.pushState({}, '', `/${pathnameApp}/${url}`);

    const pathParts = url.split('/');
    const route = this.routes.find((item) => item.path === pathParts[0]);
    if (typeof route === 'undefined') {
      alert('Нет такой страницы');
      return;
    }

    const pathAfterRepoAndApp = url.split('/');
    route.callback(pathAfterRepoAndApp[1]);
  }
}
