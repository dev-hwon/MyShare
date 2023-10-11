<template>
  <header class="golbal_header">
    <div class="container">
      <button type="button" @click="$emit('sheetLayerOnOff')" class="btn_menu" >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1 class="gnb_page_title">Gui Test Page</h1>
      <div class="gnb_menus">
        <router-link to="/user/login">로그인</router-link>
        <router-link to="/user/signup">회원가입</router-link>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  props: {
    isActive: {
      type: Boolean
    }
  },
  methods:{
    
  },
  
}
</script>
<style lang="scss">
.golbal_header {
  padding:16px 0;
  border-bottom:1px solid #ddd;
  box-shadow: 0 0 10px 2px rgba(0,0,0,.24);
}
.btn_menu {
  padding:2px 4px;
  vertical-align:middle;
  span {
    display:block;
    width:40px;
    height:4px;
    background-color: #777;
    margin: 8px auto;
  }
}
.gnb_page_title {
  display: inline-block;
  vertical-align:middle;
  font-size :32px;
  font-weight: bold;
  color:#333;
  margin-left:32px;
}
.gnb_menus {
  float: right;

  > a {
    display: inline-block;
    vertical-align:middle;
    width: 48px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 11px;
    margin-left:4px;
    text-align: center;
    &:hover {
      border-color:#333;
    }
  }
}
</style>