import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('feed', {path: '/'}); // Configura como pagina inicial
  this.route('profile', { path: '/profile/:user_id'});
  this.route('post');
});

export default Router;
