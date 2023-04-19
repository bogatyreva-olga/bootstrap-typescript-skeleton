import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

const moduleIds = {
  'helloWorld': PLATFORM.moduleName('resources/hello-world/hello-world')
}

export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Bootstrap Skeleton';
    config.map([
      { route: ['', 'hello'], moduleId: moduleIds.helloWorld, title: 'Hello' }
    ]);
  }
}
