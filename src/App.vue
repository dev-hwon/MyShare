<template>
  <div id="app">
    <Sheetleft :isActive="isActive" @sheetLayerOnOff="sheetLayerOnOff"></Sheetleft>
    <Header 
      :isActive="isActive"
      @sheetLayerOnOff="sheetLayerOnOff" 
    />
    <div class="container_outer">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    
  </div>
</template>

<script>
import './assets/css/common.css';
import Sheetleft from './views/layouts/Sheetleft.vue'
import Header from './views/layouts/Header.vue'


export default {
  name: 'App',
  components: {
    Sheetleft,
    Header
  },
  data() {
    return {
      isActive : false,
    }
  },
  methods : {
    sheetLayerOnOff() {
      this.isActive = !this.isActive;
    },
  }
}
</script>

<style>

</style>