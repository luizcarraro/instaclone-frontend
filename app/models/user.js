import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  username: DS.attr('string'),
  posts: DS.hasMany('post')
});
