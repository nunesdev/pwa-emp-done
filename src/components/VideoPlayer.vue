<template>
    <div>
        <video :src="videoId" ref="videoPlayer" controls></video>
    </div>
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default() {
          return {};
      }
    },
    videoId: {
      type: String,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      player: null
    }
  },
  mounted() {
    this.options.sources.src = `/videos/`+this.videoId+`.mp4`
    // this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
    //   console.log('onPlayerReady', this);
    // })
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>
<style lang="scss">
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
