import Component from '@ember/component';
import $ from 'jquery';
import { inject as service } from '@ember/service';

export default Component.extend({
  ajax: service(),
  router: service(),

  renderPreview: function (element) {
    /*jshint loopfunc: true */
    var files = element[0].files;
    for (var i = 0; i < files.length; i++) {
      let file = files[i];
      let oFReader = new FileReader();
      oFReader.readAsDataURL(files[i]);
      oFReader.onload = (oFREvent) => {
        var img = new Image();
        img.src = oFREvent.target.result;
        img.onload = () => {
          this.set('imagePreview', oFREvent.target.result);
          this.set('postImage', file)
          // this.get('postImages').pushObject({
          //   preview: oFREvent.target.result,
          //   form: file
          // });
        };
      };
    }
  },

  actions: {
    createPost() {
      const form = new FormData();

      form.append('user', 1); // Fixa o user em 1 para teste

      form.append('text', this.get('postText'));
      form.append('picture', this.get('postImage'));

      this.get('ajax').request('http://localhost:1337/posts/uploadPicture', {
        contentType: false,
        processData: false,
        type: 'POST',
        data: form
      }).then((response) => {
        console.log('Sucesso: ', response);
        this.router.transitionTo('profile', 1);
      }).catch( (responseError) => {
        console.log('ResponseError: ', responseError);
      });
    },
    setPicture() {
      const files = $('#inputImage');
      console.log('files: ', files);
      this.renderPreview(files);
    }
  }
});
