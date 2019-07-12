<template lang="html">
  <div class="">
    <div class="targe">
      <div class="container">
        <p><b>ATENÇÃO:</b> Retornos passados não são garantia de retorno futuro. Investimentos envolvem riscos e podem causar perdas ao investidor.</p>
      </div>
    </div>
    <div class="videos">
      <div class="videos__thumbs">
        <ul class="box">
          <li>
            <router-link :to="{ name: 'videos', params: { slug: 'video-1' } }">
              <img src="/img/cpl-1.jpg" alt="" loading="lazy">
              <p>
                <span class="vDate">1º Episódio - Liberado</span>
                <span class="vTitle">Você já recebeu esta Carta do seu banco?</span>
            </p>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'videos', params: { slug: 'video-2' } }">
              <img src="/img/cpl-2.jpg" alt="" loading="lazy">
              <p>
                <span class="vDate">2º Episódio - Liberado</span>
                <span class="vTitle">De quanto pode ser a sua Renda?</span>
              </p>
            </router-link>
          </li>
          <li>
            <a class="disabled" href="#">
              <img src="/img/cpl-3-locked.jpg" alt="" loading="lazy">
              <p>
                <span class="vDate">3º Episódio - 12/07</span>
                <span class="vTitle">O momento ideal para gerar Renda sobre Renda</span>
            </p>
            </a>
          </li>
          <li>
            <a class="disabled" href="#">
              <img src="/img/cpl-4-locked.jpg" alt="" loading="lazy">
              <p>
                <span class="vDate">4º Episódio - 15/07</span>
                <span class="vTitle">10 Ações Geradoras de Renda</span>
              </p>
            </a>
          </li>
        </ul>
      </div>
      <div class="videos__wrapper">
        <VideoPlayer :videoId="getVideo" class="videos__item" :options="videoOptions"></VideoPlayer>
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from '@/components/VideoPlayer'
export default {
  name: 'videos',
  props: ['slug'],
  components: { VideoPlayer },
  computed: {
    getVideo() {
     return `/videos/`+this.slug+`.mp4`
    }
  },
  data() {
    return {
      videoOptions: {
				autoplay: false,
				controls: true,
				sources: { src: undefined, type: `video/mp4` }
			}
    }
  }
}
</script>

<style lang="scss">

  .box {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .disabled {
    color: #dedede;
    user-select: none;
    pointer-events: none;
  }
  .videos {
    &__thumbs {
      max-width: 900px;
      margin: 0 auto;
      ul {
        padding-left: 0;
        li {
          width: calc(25% - 20px);
          margin: 0 0 25px;
          cursor: pointer;
          display: inline-block;
          margin-right: 10px;

          img {
            width: 100%;
            max-width: 100px;
            display: table;
          }

          p {
            text-align: left;
            font-size: 1em;
            color: #fff;
            text-transform: uppercase;
            font-size: 16px!important;
            letter-spacing: 0.2px;
            margin: 0;
            margin-top: 10px;

            .vDate {
              font-weight: bold;
              display: block;

              @media only screen and (max-width: 600px) {
                font-size: 0.8em;
              }
            }

            .vTitle {
              @media only screen and (max-width: 600px) {
                display: none;
              }
            }
          }
        }
      }
    }
    &__wrapper {
      max-width: 900px;
      margin: 0 auto;
      position: relative;
      padding-bottom: 52%
    }
  }
</style>
