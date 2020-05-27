<template>
	<div class="sign">
    <dialog-bar v-model="sendVal" type="confirm" title="登录" :content="content" :cancel="clickCancel()" @danger="clickDanger()"  @confirm="clickConfirm()"></dialog-bar>
    <div class="content">
      <div class="div1">
        <img class="img1" src="../assets/img/left.png" />
        <div class="txt">
          <p>官网后台登录</p>
          <p>
            <span>
              <img src="../assets/img/name.png" /><input v-model="username" type="text" placeholder="请输入账号">
            </span>
          </p>
          <p>
            <span>
              <img src="../assets/img/password.png" /><input v-model="password" type="password" placeholder="请输入密码">
            </span>
          </p>
          <p>
            <span>
              <input v-model="code" type="text" placeholder="请输入验证码">
              <div @click="imgs()"><img ref="pic" :src="pic"></div>
            </span>
          </p>
          <p>
            <span>
              <input  ref="check" class="check" type="checkbox" value="">
              <span style="display: inline;" class="text">记住用户名</span>
              <input class="sub" type="submit" value="立即登录" @click="sign()">
            </span>
          </p>
        </div>
      </div>
    </div>
	</div>
</template>
<style scoped lang="less">
.sign{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background-image: url(../assets/img/ground.png);
  background-size: 100% 100%;
  .content{
    width: 60%;
    min-width: 800px;
    height: 500px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -30%;
    margin-top:-250px;
    background-color: #fff;
    .div1{
      width: 800px;
      margin: 0 auto;
      .img1{
        display: inline-block;
        width: 250px;
        margin: 100px 0 0 60px;
      }
    }
    .txt{
      float: right;
      margin-right: 60px;
    }
    p:nth-child(4){
      input{
        width: 140px;
        padding-left: 20px;
        display: inline-block;
      }
      img{
        width: 80px;
        height: 35px;
        vertical-align: middle;
      }
    }
    p{
      width: 400px;
      text-align: center;
      margin-top: 30px;
      span{
        display: inline-block;
        width: 250px;
        border: 1px solid #999;
        div{
          display: inline-block;
          cursor: pointer;
        }
      }
      input{
        border: 0;  // 去除未选中状态边框
        outline: none; // 去除选中状态边框
        background-color: rgba(0, 0, 0, 0);// 透明背景
        height: 35px;
        line-height: 35px;
        font-size: 16px;
        color: #666;
      }
      img{
        width: 22px;
        height: 22px;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
    p:first-child{
      font-size: 30px;
      color: #333;
      margin-top: 60px;
    }
    p:last-child{
      font-size: 16px;
      color: #666;
      span{
        width: 250px;
        margin: 0 auto;
        text-align: left;
        border: none;
        /* height: 40px;
        line-height: 40px;
        vertical-align: middle; */
        position: relative;
        .check{
          width: 15px;
          height: 15px;
          position: absolute;
          left: 0;
          top: 12px;
        }
        .text{
          margin-left:20px ;
        }
        .sub{
          width: 130px;
          height: 40px;
          background-color: #4D69F6;
          color: #fff;
          cursor: pointer;
          margin-left: 15px;
        }
      }
    }
  }
}
</style>

<script>
import Axios from'../api/axios'
import qs from 'qs'
import dialogBar from './dialog.vue'
export default {
  components: {
    dialogBar
  },
  inject: ['reload'],
  data(){
    return{
      sendVal:false,
      type:'',
      content:'',
      flag:true,
      isRouter: true,
      pic:'/verifyCode',
      username:'',
      password:'',
      code:'',
      jess:'',
    }
  },
  mounted(){
    if(localStorage.getItem("user")){
      this.username = localStorage.getItem("user")
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.pic = "/verifyCode?"+Math.random()
    })
  },
  methods:{
    openMask(){
      this.sendVal= true
      this.content ="您还没有填完"
    },
     openMask1(){
       this.sendVal= true
       this.content ="登录失败"
     },
    clickCancel(val) {
      this.type = "confirm"
    },
    clickDanger() {
    },
    clickConfirm() {
    },
    imgs(){
      this.pic = "/verifyCode?"+Math.random()
    },
    sign(){
      let that = this
      if(this.$refs.check.checked){
        localStorage.setItem("user",`${this.username}`);
      }
      let params = {
        client_id : 'client',
        client_secret : '123456',
        scope : 'read write',
        grant_type: 'password',
        username: this.username,
        password: this.password,
        code: this.code
      }
      if(this.username == ''|| this.password  == '' || this.code == ''){
        this.openMask()
      }else{
        Axios.post("/oauth/token",qs.stringify(params))
        .then(response => {
          // 请求成
          if(response.status === 200){
            let { access_token,token_type } = response.data
            sessionStorage.setItem("access_token",`${token_type} ${access_token}`);
            that.$router.push("banner")
          }
        })
        .catch(error => {
          // 请求失败，
          this.openMask1()
          console.log(error);
        });
      }
    }
  }

}
</script>
