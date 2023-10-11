<template>
  <div>
    <div class="form_area">
      <div class="form_title">test SignUp</div>
      <form name="form_login">
        <!-- <div class="input_wrap">
          <input
            ref="input_mail"
            type="search"
            class="input_text"
            placeholder="mail"
            v-model="user.mail"
          />
        </div> -->
        <div class="input_wrap mt10">
          <input
            ref="input_pass"
            type="username"
            class="input_text"
            placeholder="username"
            v-model="user.username"
          />
        </div>
        <div class="input_wrap mt10">
          <input
            ref="input_pass"
            type="password"
            class="input_text"
            placeholder="password"
            v-model="user.password"
          />
        </div>
        <div class="input_wrap mt10">
          <input
            ref="input_pass"
            type="password"
            class="input_text"
            placeholder="password"
            v-model="user.passwordCheck"
          />
        </div>
        <button type="button" class="mt10" @click="signup" >submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import getUUID from "../../utils/uuid.js"

const sample_url = "https://jsonplaceholder.typicode.com/users/"

export default {
  data() {
    return {
      user : {
        mail : '',
        username : '',
        password : '',
        passwordCheck : ''
      }
    }
  },
  mounted() {
  },
  methods : {
    callGlobalFunction() {
      this.$myGlobalFunction(); // 전역 함수 호출
    },
    checkString (event) {
      this.length = event.target.value.length
      return false;
    },
    handleClick(event) {
      event.preventDefault();
      console.log(getUUID());
      let data="";
      this.axios.post(sample_url).then((res) => data = res)
      console.log(data);
      // console.log(this.$axios);
      
    },
    signup : async function(e) {
      e.preventDefault();

      // axios test1
      try {
        const response = await this.$axios.post(sample_url, {
          username : this.user.username,
          password : this.user.password,
        })
        console.log(response.data);
      } catch {
        console.log('!------ axios error ------');
      }
      // axios test2
      // await this.$axios.post(sample_url, {
      //   username : this.user.username,
      //   password : this.user.password,
      // }).then((res) => {
      //   console.log(res);
      //   console.log(res.data);
      //   if (res.status === 201) {
      //     console.log('success!!');
      //   }
      // }).catch(error => {
      //   console.log('error : ', error)
      // }).finally(() => {
      //   console.log("항상 마지막에 실행");
      // });


      
      // if(this.user.id == '') {alert('아이디 입력하세요'); return;}
      // if(this.user.password == '') {alert('비밀번호 입력하세요'); return;}
      
      
      // googleSpreadSheetApi.getKeyInfo().then((res) => this.googleData = res.data.values);

      // console.log('id:', this.user.id,' / password:', this.user.password, this.googleData);

      // this.$axios.post("/db/user.json", JSON.stringify({
      //     id : this.user.id,
      //     password : this.user.password
      //   }), { headers: {
      //     "Content-Type": `application/json`,
      //   }},
      // ).then((res) => {
      //   console.log(res.data);
      //   if (res.status === 200) {
      //     console.log('success!!');
      //   }
      //     // if(res.data.success) {

      //     // } else {
            
      //     // }
      //   }
      // ).catch(error => {
      //     console.log('error : ', error)
      //   }
      // ).finally(() => {
      //     console.log("항상 마지막에 실행");
      //   }
      // );
    }
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

  > button {
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
