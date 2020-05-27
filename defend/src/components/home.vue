<template>
    <div class="home">
      <div class="left">
        <ul>
          <li class="logo">
            <router-link :to="'banner'">
              <img src="../assets/img/logo.png"/>管网维护
            </router-link>
            </li>
          <li>
            <router-link :to="'banner'">
            <img src="../assets/img/111.png" v-if="this.$route.name == 'banner'" />
            <img src="../assets/img/11.png" v-else />首页管理
            </router-link>
          </li>
          <li>
            <router-link :to="'case'">
              <img src="../assets/img/222.png" v-if="this.$route.name == 'case'" />
              <img src="../assets/img/22.png" v-else />案例管理
            </router-link>
          </li>
          <li>
            <router-link :to="'equipment'">
              <img src="../assets/img/333.png" v-if="this.$route.name == 'equipment'" />
              <img src="../assets/img/33.png" v-else />设备管理
            </router-link>
          </li>
          <li>
            <router-link :to="'solution'">
              <img src="../assets/img/555.png" v-if="this.$route.name == 'solution'" />
              <img src="../assets/img/55.png" v-else />询价管理
            </router-link>
          </li>
          <li>
            <router-link :to="'copywriting'">
              <img src="../assets/img/444.png" v-if="this.$route.name == 'copywriting'" />
              <img src="../assets/img/44.png" v-else />文案管理
            </router-link>
          </li>
          <li>
            <router-link :to="'information'">
              <img src="../assets/img/666.png" v-if="this.$route.name == 'information'" />
              <img src="../assets/img/66.png" v-else />联系方式
            </router-link>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="top clearfix">
          <img class="pull" @click="pulls()" src="../assets/img/ban.png"/>
          <img class="exit" @click="exit()" src="../assets/img/exit.png"/>
        </div>
        <router-view></router-view>
      </div>
    </div>
</template>
<style scoped lang="less">
@import '../assets/css/index.less';
.top{
  height: 60px;
  img{
    cursor: pointer;
    width: 25px;
    height: 25px;
  }
}
.pull{
  float: left;
  margin: 30px 0  0 40px;
}
.exit{
  float: right;
  margin: 30px 40px 0  0 ;
}
</style>

<script>
import Axios from'../api/axios'
export default {
  data(){
    return{
      flag:true,
    }
  },
  mounted(){

  },
  methods:{
    goItem(i){
      this.$router.push(i.path)
    },
    pulls(){
      let pull_left = document.getElementsByClassName("left")
      let pull_right = document.getElementsByClassName("right")
      if(this.flag){
        pull_left[0].style.flex = "0.5"
        pull_right[0].style.flex = "11.5"
        this.flag = false
      }else{
        pull_left[0].style.flex = "2"
        pull_right[0].style.flex = "10"
        this.flag = true
      }
    },
    exit(){
      Axios.post("/sys/logout")
      .then(response => {
        // 请求成功
        sessionStorage.removeItem("access_token")
        this.$router.push("sign")
      })
    }
  }
}
</script>
