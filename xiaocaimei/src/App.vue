<template>
  <div id="app" v-show="shown">
    <div class="app_header">
      <div class="header clearfix">
        <div class="left">
          <div>
            <router-link :to="'home'">
              <img src="./assets/img/logo.png" alt="logo" >
              <span>彩虹桥互联</span>
            </router-link>
          </div>
        </div>
        <div class="right">
          <div class="ban">
            <router-link :to="'home'">
              <span>主页</span>
              <span :class="{active:$route.name=='home'}"></span>
            </router-link>
            <router-link :to="'person'">
              <span>个人用户</span>
              <span :class="{active:$route.name=='person'}"></span>
            </router-link>
            <router-link :to="'business'">
              <span>企业用户</span>
              <span :class="{active:$route.name=='business'}"></span>
            </router-link>
            <router-link :to="'solution'">
              <span>解决方案</span>
              <span :class="{active:$route.name=='solution'}"></span>
            </router-link>
            <router-link :to="'service'">
              <span>第三方服务</span>
              <span :class="{active:$route.name=='service'}"></span>
            </router-link>
            <router-link :to="'about'">
              <span>联系我们</span>
              <span :class="{active:$route.name=='about'}"></span>
            </router-link>
            <!-- <router-link :to="'market'">
              <span>商城</span>
              <span :class="{active:$route.name=='market'}"></span>
            </router-link> -->
          </div>
        </div>
      </div>
	  <p></p>
    </div>
    <router-view v-show="isRouter"></router-view>
    <div class="footer">
        <div class="footer-top clearfix">
          <div class="container">
            <ul>
              <li>关于彩虹桥互联</li>
              <li><router-link :to="{name:'aboutbus',query:{id:3}}">公司简介</router-link></li>
              <li><router-link :to="{name:'aboutbus',query:{id:4}}">公司理念</router-link></li>
            </ul>
            <ul>
              <li>业务联盟</li>
              <li v-for="lie in lies" v-show="flag"><router-link :to="{name:'uniondetails',query:{id:lie.id}}">{{lie.name}}</router-link></li>
            </ul>
            <ul>
              <li>相关网站</li>
              <li><a href="https://www.baidu.com" onclick="return false" target="_blank">小彩妹智慧社区民情数据应用平台</a></li>
              <li><a href="#" onclick="return false" target="_blank">小彩妹智慧社区党建数据应用平台</a></li>
              <li><a href="#" onclick="return false" target="_blank">小彩妹智慧警务控制平台</a></li>
              <li><a href="#" onclick="return false" target="_blank">小彩妹智慧社区业务综合管理平台</a></li>
              <li><a href="#" onclick="return false" target="_blank">小彩妹智慧社区资源置换管理平台</a></li>
              <li><a href="#" onclick="return false" target="_blank">小彩妹综合服务管理平台</a></li>
              <li><a href="#" onclick="return false" target="_blank">小彩妹智慧社区系统管理平台</a></li>
            </ul>
            <ul class="pics">
              <li>相关下载</li>
              <li><router-link :to="'downdetails'">小彩妹社区</router-link><img src="./assets/img/shequ.png"/></li>
              <li><a href="#" onclick="return false">小彩妹物管</a><img src="./assets/img/wuguan.png"/></li>
              <li><a href="#" onclick="return false">小彩妹运维</a><img src="./assets/img/yunwei.png"/></li>
            </ul>
            <ul>
              <li>联系我们</li>
              <li><a href="#" onclick="return false">09514116441</a></li>
              <li><router-link :to="'about'">驿站联系方式与地址</router-link></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <span>@2020彩虹桥互联网有限公司 XXXXXXXXXXX</span>
            <span><router-link :to="{name:'aboutbus',query:{id:1}}">法律声明</router-link></span>
            <span><router-link :to="{name:'aboutbus',query:{id:2}}">隐私政策</router-link></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
@import './assets/css/index.less';
.ban_act{
  color: #21B2FD
}
.under_act{
  display: block;
  width: 40px;
  margin: 0 auto;
  margin-top: 10px;
  border-bottom: 2px solid #21B2FD;
}
.app_header{
  position: relative;
  p{
    width: 100%;
    position: absolute;
    left: 0;
    top: 90px;
    height: 10px;
    box-shadow:0px 4px 4px 0px rgba(116,116,116,0.36);
  }
}
.footer{
  .pics{
    li:nth-child(2),li:nth-child(3){
      margin-bottom: 30px;
    }
    li:nth-child(2),li:nth-child(3),li:nth-child(4){
      height: 60px;
      position: relative;
      a{
        display: inline-block;
        width: 110px;
      }
      img{
        display: inline-block;
        width: 58px;
        height: 58px;
        vertical-align: middle;
      }
    }
  }
}

</style>

<script>
export default {
  provide(){
    return{
      reload: this.reload
    }
  },
  data(){
    return{
      isRouter: true,
      shown: true,
      flag:false,
      lines:{},
      lies:[
        {
          id:'',
          name:''
        }
      ]
    }
  },
  created(){
    this.$http.get("/api/union/list")
    .then(response => {
      // 请求成功
      this.shown = true
      this.flag = true
      this.lies = response.data.data
    })
    .catch(error => {
      // 请求失败，
      console.log(error);
    });
  },
  mounted (){
    /* let all = document.getElementsByClassName("all")
    let show_all = document.getElementsByClassName("show_all")
    for(let i = 0 ;i< all.length; i++){
      (function(j){
        let flag = true
        all[j].onclick=function(){
          if(flag){
            show_all[j].style.height = "100%"
            flag = false
          }else{
            show_all[j].style.height = "70px"
            flag = true
          }
        }
      })(i)
    }
     let bus_show = document.getElementsByClassName("bus_show");
     let lis = document.getElementsByClassName("ban")[0].children;
     bus_show[0].onmouseleave = function(){
       bus_show[0].style.display="none"
     }
     lis[2].onmouseenter = function(){
       bus_show[0].style.display="block"
     }
     lis[2].onmouseleave = function(){
       bus_show[0].style.display="none"
     } */
  },
  methods:{
    reload(){
      this.isRouter =false
      this.$nextTick(function(){
        this.isRouter =true
      })
    }
  }
}
</script>
