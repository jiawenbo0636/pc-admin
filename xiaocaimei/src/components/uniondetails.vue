<template>
<div class="uniondetails">
  <div class="pic">
    	<div class="mask"></div>
  </div>
  <div class="container">
  	<div class="th">
      <p class="title">{{detail.name}}</p>
  		<p><img src="../assets/img/19.png" alt=""></p>
  	</div>
  	<div class="content" v-html="detail.details"></div>
  </div>
</div>
</template>

<style lang="less">
.uniondetails{
  .pic{
    width: 100%;
    max-width: 1920px;
    height: 500px;
    margin: 0 auto;
    background-image: url(../assets/img/21.png);
    background-repeat:no-repeat;
    background-size:100% 100%;
    position: relative;
    margin-bottom: 70px;
    .mask{
      width: 100%;
      height: 100%;
      background-color: #000;
      opacity:0.4;
      position: absolute;
      left: 0 ;
    }
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
        margin-bottom: 50px;
      }
      p:nth-child(1){
        text-align: center;
        font-size: 40px;
        color: #333;
        margin-bottom: 40px;
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
  data(){
    return{
      index:0,
      detail:{
        id:'',
        details:'',
        name:''
      }
    }
  },
  watch: {
    '$route'(to, from){
      let val = this.$route.query.id
      this.$http.get(`/api/union/info?id=${val}`)
      .then(response => {
        // 请求成功
        this.detail = response.data.data
      })
      .catch(error => {
        // 请求失败，
        console.log(error);
      });
    }
  },
  created(){
    let val = this.$route.query.id
    this.$http.get(`/api/union/info?id=${val}`)
    .then(response => {
      // 请求成功
      this.detail = response.data.data
    })
    .catch(error => {
      // 请求失败，
    });
  }
}
</script>
