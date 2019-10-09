import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  ajax: Ember.inject.service(),

  model(params) {
    console.log(params);
    // {user_id: "789"}
    // return this.get('ajax').request('http://localhost:1337/user/1');
    return hash({
      user: this.store.findRecord('user', params.user_id),
      posts: this.store.query('post', { sort: 'createdAt DESC'})
    });
  },

  actions: {
  }

});
