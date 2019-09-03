import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  image: DS.attr('string'),
  text: DS.attr('string'),

  user: DS.belongsTo('user'),

  comments: DS.hasMany('comment')
});
