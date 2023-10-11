<template>
  <div>
    <div class="form_area">
      <div class="form_title">test Login</div>
      <form name="form_login" @submit.prevent="loginUser">
        <div class="input_wrap">
          <input
            type="text"
            class="input_text"
            placeholder="username"
            v-model="userinfo.username"
          /> 
        </div>
        <div class="input_wrap mt10">
          <input
            type="password"
            class="input_text"
            placeholder="password"
            v-model="userinfo.password"
          />
        </div>
        <button type="submit" class="mt10" >submit</button>
        <button v-if="isLoggedIn" @click="logoutUser">Logout</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      userinfo : {
        mail : '',
        username : '',
        password : '',
        passwordCheck : ''
      }
    }
  },
  computed: {
    isLoggedIn() {
      return console.log('@#@# : ', this.$store.state);
      // return this.$store.userStore.state.isLoggedIn;
    },
    user() {
      return console.log('@#@# : ', this.$store);
      // return this.$store.userStore.state.user;
    },
  },
  mounted() {
  },
  methods : {
    async loginUser() {
      await this.$store.dispatch('loginUser', {
        username: this.userinfo.username,
        password: this.userinfo.password,
      });
    },
    logoutUser() {
      this.$store.dispatch('logoutUser');
    },
    // callGlobalFunction() {
    //   this.$myGlobalFunction(); // 전역 함수 호출
    // },
    // checkString (event) {
    //   this.length = event.target.value.length
    //   return false;
    // },
    // handleClick(event) {
    //   event.preventDefault();
    //   console.log(getUUID());
    //   let data="";
    //   this.axios.post(sample_url).then((res) => data = res)
    //   console.log(data);
    //   // console.log(this.$axios);
      
    // },
    // login : async function(e) {
    //   e.preventDefault();
    //   this.gsNew = this.gsBody.map((bd) => { return { id : bd[0], password : bd[1] } } )
    // }
  }
}
</script>
<style lang="scss" scoped>
.form_area {
  width: 440px;
  margin:0 auto;
}
.form_title { 
  font-size: 20px;
  font-weight: bold;
  color:#333;
  text-align: center;
  margin-bottom:24px;
}
form[name=form_login] {
  padding:20px 16px;
  border-radius: 8px;
  box-shadow: 0 0 10px 2px rgba(0,0,0,.16);

  > button[type=submit] {
    width:100%;
    background-color: var(--site-bg-color);
    text-align: center;
    color:#fff;
    font-size: 16px;
    border-radius: 4px;
    line-height: 40px;
    text-transform: uppercase;
  }
}
</style>
