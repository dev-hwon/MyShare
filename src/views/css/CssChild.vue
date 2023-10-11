<template>
  <div>
    <sampleFlex v-if="this.cssPathName === 'flex'" />
    <sampleFloat v-if="this.cssPathName === 'float'" />
  </div>
</template>

<script>
import sampleFlex from './Flex.vue';
import sampleFloat from './Float.vue';

export default {
  data() {
    return {
      cssPathName : '',
    }
  },
  components: {
    sampleFlex,
    sampleFloat
  },
  // watch: {
  //   cssPathName(prev, next ) {
  //     this.cssPathName = this.$route.params.cssName;
  //     console.log(prev, next, this.cssPathName)
  //   }
  // },
  created() {
    if(!this.$route.params.cssName && this.$route.params.cssName === '' && this.$route.params.cssName === undefined) return;
    this.cssPathName = this.$route.params.cssName
    this.$watch(() => this.$route.params, (toParams, previousParams) => {
        this.cssPathName = toParams.cssName;
        // console.log(toParams.cssName, previousParams.cssName);
      }
    )
  }
}
</script>
<style>
</style>