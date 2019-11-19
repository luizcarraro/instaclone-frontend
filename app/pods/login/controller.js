import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),

  actions: {
    login() {
      let credentials = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:jwt', credentials).catch((reason) => {
        console.log(reason);
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
