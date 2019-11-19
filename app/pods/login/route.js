import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      login: 'email@gmail.com',
      password: 'minhasenha123'
    }
  }
});
