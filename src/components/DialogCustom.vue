<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>
        <p class="titleForm"><b>Digite seu e-mail abaixo</b> para participar da <span class="highlight-2 noWrap">série gratuita</span> de 4 episódios:</p>
      </md-dialog-title>
      <md-content class="modal-content">
        <form class="md-layout">
          <md-field name="email">
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" v-model="form.email" placeholder="Digite aqui o seu e-mail" required/>
            <span class="md-error" v-if="errorEmail">E-mail é obrigatório!</span>
          </md-field>
        </form>
      </md-content>

      <md-dialog-actions>
        <md-button class="md-primary md-raised" @click="handlerRedirect" :disabled="isEnabled">Quero Assistir</md-button>
        <md-button @click="handlerCloseDialog">Não, Obrigado!</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
  import GoogleLogin from 'vue-google-login'

  export default {
    name: 'DialogCustom',
    components: {
      GoogleLogin
    },
    data: () => ({
      showDialog: true,
      isEnabled: true,
      errorEmail: false,
      form: {
        email: null,
      },
      params: {
          client_id: "742975930271-0h5nit922kdqbmmmou1o0a4jdbd50ja9.apps.googleusercontent.com"
      },
      renderParams: {
          width: 250,
          height: 50,
          longtitle: true
      }
    }),
    methods: {
      handlerCloseDialog: function() {
        this.showDialog = false;
        this.$eventHub.$emit('close-dialog', false);
      },
      handlerRedirect: function() {
        this.$router.push('/videos');
      }
    },
    watch: {
      'showDialog': function () {
        if (this.showDialog === false) {
          this.handlerCloseDialog();
        }
      },
      'form.email': function() {
        if (this.form.email !== '' && this.form.email !== null) {
          this.isEnabled = false;
          this.errorEmail = false;
        } else {
          this.isEnabled = true;
          this.errorEmail = true;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.md-dialog-title {
  margin-bottom: 0px!important;
}

.divider {
  padding: 10px;
  margin: 0 auto;
}
.md-overlay.md-fixed, body>.md-overlay {
  z-index: 9999!important;
}

.modal-content {
  padding: 0px 25px;
}

.titleForm {
  color: #333;
  font-size: 1em!important;
  margin: 20px 0;
}
</style>
