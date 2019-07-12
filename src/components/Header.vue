<template>
  <div>
    <div class="targe">
      <div class="container">
        <p><b>ATENÇÃO:</b> Retornos passados não são garantia de retorno futuro. Investimentos envolvem riscos e podem causar perdas ao investidor.</p>
      </div>
    </div>
    <header class="blocks stHeader">

      <div class="container">
        <div class="boxInfos">
          <img src="@/assets/svg/logo.svg" alt="RENDA SOBRE RENDA" class="logo">
          <h2>A <u class="showModal">Estratégia Vencedora</u> para quem deseja ter rendimentos crescentes</h2>
          <h1><span class="highlight noWrap">SEM TRABALHO ADICIONAL</span></h1>
          <md-button class="md-raised md-accent btn-accent" @click.prevent="handlerOpenDialog">Conheça agora</md-button>
          <img src="@/assets/images/bg.jpg" alt="" class="photo">
        </div>
      </div>
    </header>

    <dialog-custom v-if="showDialog"></dialog-custom>
  </div>
</template>

<script>
import Vue from 'vue'
import DialogCustom from '@/components/DialogCustom'

export default {
  name: 'Header',
  components: {
    DialogCustom,
  },
  data: function() {
    return {
      showDialog: false,
    }
  },
  created() {
    this.$eventHub.$on('close-dialog', (option) => {
      this.showDialog = option;
    });
  },
  destroyed: function() {
    this.$eventHub.$off('close-dialog');
  },
  methods: {
    handlerOpenDialog: function() {
      this.showDialog = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.highlight {
    color: #00ffc5;
    font-family: inherit;
}

.noWrap {
  white-space: nowrap;
}

.container{
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1000;

  @media only screen and (min-width: 1000px) {
    max-width: 880px;
  }

  @media only screen and (min-width: 1440px){
    max-width: 1200px;
  }
}

.stHeader{
  background-size: cover;
  background-position: center;
  text-align: center;

  &::after{
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0, 0);
  }

  @media only screen and (min-width: 1000px) {
    background-image: url("../assets/images/bg-desktop.jpg");
  }
}

.logo{
  width: 100%;
  max-width: 200px;
  margin-bottom: 22px;
}

.photo {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: table;
  position: relative;

  &::after{
    content: "";
    background: linear-gradient(to top, rgba(0, 0, 0, 1.0), rgba(0, 0, 0, 0.0));
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
  }

  @media only screen and (min-width: 1000px) {
    display: none;
  }
}

.boxInfos{
  width: 100%;
  display: table;
  color: #fff;

  @media only screen and (min-width: 1000px) {
    width: 45%;
    margin-left: auto;
  }
}
</style>
