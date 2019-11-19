import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import { inject as service } from '@ember/service';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  host: 'http://localhost:1337',
  session: service(),
  authorize(xhr) {
    const token = this.get('session.data.authenticated.token');
    if (token) {
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    }
  }
});
