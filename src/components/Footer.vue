<template lang="html">
  <footer>
    <p>Nós NÃO compartilharemos seu endereço de e-mail com ninguém. Você pode cancelar sua inscrição a qualquer momento. Essa é uma publicação gratuita oferecida pela Empiricus. Ao se cadastrar você está concordando com os termos de nossa <a title="Política de Privacidade" target="_blank" href="https://www.empiricus.com.br/politica-de-privacidade/">Política de Privacidade</a>.</p>

    <p>Copyright © Empiricus <span id="year"></span></p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  background-color: #000;
  color: #fff;
  font-weight: 300;
  margin: 0 auto;
  padding: 20px;
  text-align: center;

  p {
    max-width: 620px;
    font-size: 1em!important;
  }

  a {
    color: #FFFFFF!important;
    text-decoration: underline;
  }
}
</style>
