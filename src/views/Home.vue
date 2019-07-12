<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <md-button>Botão teste</md-button> -->
    <main-header></main-header>
    <main-content></main-content>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header'
import Content from '@/components/Content'

export default {
  name: 'home',
  components: {
    HelloWorld,
    'main-header': Header,
    'main-content': Content,
  }
}
</script>
