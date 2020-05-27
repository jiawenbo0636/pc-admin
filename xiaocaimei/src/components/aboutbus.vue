<template>
<div class="aboutbus">
  <div class="pic">
      <img :src="imgs" alt="">
  </div>
  <div class="container">
  	<div class="th">
      <p class="title">{{name}}</p>
  		<p><img src="../assets/img/19.png" alt=""></p>
  	</div>
  	<div class="content" v-html="detail.details"></div>
  </div>
</div>
</template>

<style scoped lang="less">
.aboutbus{
  .pic{
    width: 100%;
    max-width: 1920px;
    height: 500px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 70px;
  }
  .container{
    position: relative;
    .content{
      margin-bottom: 80px;
    }
    .th{
      img{
        width: 430px;
        height: 20px;
        margin: 0 auto;
        margin-bottom: 50px;
        margin-top: 20px;
      }
      p:nth-child(1){
        text-align: center;
        font-size: 40px;
        color: #333;
      }
      p:nth-child(2){
        text-align: center;
        font-size: 14px;
        color: #999;
      }
      p:nth-child(3){
        text-align: center;
        font-size: 40px;
        color: #333333;
      }
    }
    .th:last-child{
      margin-bottom: 105px;
    }
  }
}
</style>
<script>
export default{
  inject:['reload'],
  data(){
    return{
      index:0,
      name:'',
      detail:{
        id:'',
        details:'',
      },
      imgs:''
    }
  },
  watch: {
    '$route'(to, from){
      let val = this.$route.query.id
      this.$http.get(`/api/writing/info?type=${val}`)
      .then(response => {
        // 请求成功
        this.detail = response.data.data
        window.scrollTo(0, 100)
      })
      .catch(error => {
        // 请求失败，
        console.log(error);
      });
    }
  },
  created(){
   let val = this.$route.query.id
    this.$http.get(`/api/writing/info?type=${val}`)
    .then(response => {
      // 请求成功
      this.detail = response.data.data
      window.scrollTo(0, 100)
    })
    .catch(error => {
      // 请求失败，
      console.log(error);
    });
  },
  updated(){
    let val = this.$route.query.id
    if(val == 1){
      this.name ="法律声明"
      this.imgs = require("@/assets/img/21_1.png")
    }else if(val == 2){
      this.name = "隐私政策"
      this.imgs = require("@/assets/img/21_1.png")
    }
    else if(val == 3){
      this.name = "公司简介"
      this.imgs = require("@/assets/img/21.png")
    }
    else if(val == 4){
      this.name = "公司理念"
      this.imgs = require("@/assets/img/21.png")
    }
  }
}
</script>
