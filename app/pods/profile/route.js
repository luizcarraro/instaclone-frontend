import Route from '@ember/routing/route';

export default Route.extend({
  ajax: Ember.inject.service(),

  model(params) {
    console.log(params);
    // {user_id: "789"}
    // return this.get('ajax').request('http://localhost:1337/user/1');
    return this.store.findRecord('user', params.user_id);
  },

  actions: {
  }

});
