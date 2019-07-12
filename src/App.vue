<template>
  <div id="app">
    <div class="">
      <md-snackbar class="md-green" :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar" md-persistent>
      <span>{{label}}</span>
      <md-button class="md-primary" @click="showSnackbar = false">Retry</md-button>
    </md-snackbar>
    </div>
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <router-view/>
    <main-footer></main-footer>
  </div>
</template>

<style lang="scss">

body{
  background: #000;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script type="text/javascript">
  import Footer from '@/components/Footer'
  //hackathon-4a2dc
  export default {
    components: { 'main-footer': Footer },
    data: () => ({
        showSnackbar: false,
        position: 'center',
        duration: 4000,
        isInfinity: false,
        isOnline: true,
        isShow: false,
        label: 'Você está conectado novamente!'
    }),
    mounted() {
     setInterval(() => { this.checkOnline() }, 2000)
    },
    methods: {
      checkOnline(){
        if(!navigator.onLine && !this.isShow) {
          this.isShow = true
          this.showSnackbar = true
          this.label = 'Você está offline, mas tudo bem, pode continuar navegando...'
        } else if(navigator.onLine) {
          this.isShow = false
          this.showSnackbar = false
        }
      }
    }
  }
</script>
