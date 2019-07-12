<template>
  <section class="blocks content">
    <div class="container">
      <p>Você acha mesmo que <u>um bom diploma e um bom salário são garantias de uma vida próspera?</u> Pois está enganado!</p>

      <p>Quantas pessoas que você conhece ganham bem, mas <b>mesmo assim vivem com problemas financeiros</b>, endividadas e não conseguem progredir?</p>

      <h2><b class="highlight-2">Só enriquece de verdade quem dá um passo adiante e transforma seu próprio dinheiro numa nova fonte de renda.</b></h2>

      <p>1.000 reais... 2.000 reais... 5.000 reais... 10.000 reais... e cada vez mais.</p>

      <p><b>Renda composta, que gera mais renda...</b></p>

      <p>Esta <u class="showModal"><b>série gratuita de 4 vídeos</b></u> vai te mostrar como ter rendimentos crescentes, de forma contínua.</p>

      <p>Pra viver mais tranquilo, com chance real de enriquecer, seja qual for sua profissão ou seu ponto de partida.</p>

      <p>Clique no botão abaixo e faça seu cadastro para receber os vídeos da Semana da <b>RENDA sobre RENDA</b> entre os dias <b>8 a 15 de julho</b>.</p>

      <!-- <span class="btOpenForm showModal">QUERO MULTIPLICAR MEU DINHEIRO COM <span class="noWrap">RENDA SOBRE RENDA</span></span> -->
      <md-button class="md-raised md-accent btn-accent" @click.prevent="handlerOpenDialog">QUERO COMEÇAR</md-button>
    </div>

    <dialog-custom v-if="showDialog"></dialog-custom>
  </section>
</template>

<script>
import DialogCustom from '@/components/DialogCustom'

export default {
  name: 'Content',
  components: {
    DialogCustom
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
.highlight-2 {
  color: #0faa87;
}

.noWrap {
  white-space: nowrap;
}

.container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1000;
}

.content{
  background: #f9f9f9;
  color: #000;
  text-align: center;
}

.content .container{
  max-width: 840px;
}

.content p, .content ul li{
  font-family: 'Noto Serif', serif;
}

.content span, u{
  text-decoration-color: #0faa87;
}

.content h2{
  font-family: 'Noto Serif', serif;
}

</style>
