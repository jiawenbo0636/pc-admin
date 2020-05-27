<template>
  <div v-show="flag">
    <div id="parent">
      <div id="uls">
        <ul id="img_ul">
          <li v-for="(pic,index) in banner_img" :key="index">
            <router-link :to="{name:'bannerdetails',query:{id:index}}">
              <img :src="pic.pictureLabel">
            </router-link>
          </li>
        </ul>
        <ul id='litCir_ul'></ul>
      </div>
      <div id="buttons">
        <span id="left">&lt;</span>
        <span id="right">&gt;</span>
      </div>
    </div>
    <div class="container">
      <div class="yuyin" v-show="per_device">
        <div class="yu_box" style="overflow: hidden;">
          <img style="width: 100%;margin-top: -150px;filter: blur(15px);background-color: #000; opacity: .6; " :src="per_device.pictureLabel" alt="">
          <div class="img">
            <img :src="per_device.pictureLabel" alt="">
          </div>
          <div class="txt">
            <h1>{{per_device.title}}</h1>
            <p>{{per_device.summary}}</p>
            <p><span>
                <router-link :to="{name:'pergoods',query:{id:per_device.id}}">了解更多<img src="../assets/img/go_1.png"/></router-link>
              </span><span></span></p>
            <p>*图片仅供参考，请以实物为准</p>
          </div>
        </div>
      </div>
      <div class="zhongduan clearfix" v-show="bus_device.length>0">
        <div class="door" v-for="door in bus_device">
          <h1>{{door.title}}</h1>
          <div class="clearfix">
            <div class="txt">
              <p>{{door.summary}}</p>
              <p><span>
                  <router-link :to="{name:'goods',query:{id:door.id}}">了解更多<img src="../assets/img/go.png"/></router-link>
                </span><span></span></p>
              <p>*图片仅供参考，请以实物为准</p>
            </div>
            <div class="img"><img :src="door.pictureLabel" alt=""></div>
          </div>
        </div>
        <!-- <div class="door">
          <h1>{{bus_device[1].title}}</h1>
          <div class="clearfix">
            <div class="txt">
              <p>{{bus_device[1].summary}}</p>
              <p><span>
                  <router-link :to="{name:'goods',query:{id:bus_device[1].id}}">了解更多</router-link>
                </span><span></span></p>
              <p>*图片仅供参考，请以实物为准</p>
            </div>
            <div class="img"><img :src="bus_device[1].pictureLabel" alt=""></div>
          </div>
        </div> -->
      </div>
      <div class="case" v-show="case_lists.length > 2">
        <div class="banner2">
          <ul ref="ban_box" class="banner2_box clearfix" style="position:absolute;left:0;">
              <li class="banner2_list" v-for="list in case_lists">
                <p class="img"><img :src="list.pictureLabel" alt=""></p>
                <p>{{list.summary}}</p>
                <router-link :to="{name:'casedetails',query:{id:list.id}}">了解更多<img src="../assets/img/go.png"/></router-link>
                <span class="txtt">{{list.title}}</span>
              </li>
            </ul>
          </div>
          <span class="banner2_left">&lt;</span>
          <span class="banner2_right">&gt;</span>
        </div>
      </div>
  </div>
</template>
<style lang="less">
  @import '../assets/css/home.css';
  #img_ul {
    a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
</style>
<script>
  export default {
    data() {
      return {
        flag: false,
        banner_img: [{
          id: '',
          pictureLabel: '',
          title: '',
          summary: '',
          details: ''
        }],
        per_device: {
          title: '',
          summary: '',
          pictureLabel: ''
        },
        bus_device: [{
            title: '',
            summary: '',
            pictureLabel: ''
          }
        ],
        case_lists: [{
          title: '',
          summary: '',
          pictureLabel: '',
          details:''
        }]
      }
    },
    created() {
      let that = this
      this.$http.get("/api/index/info")
        .then(response => {
          // 请求成功
          this.flag = true
          this.banner_img = response.data.data.bannerInfoVoList;
          this.case_lists = response.data.data.casesInfoVoList;
          this.per_device = response.data.data.personalDeviceInfoVo;
          this.bus_device = response.data.data.enterpriseDeviceInfoVoList
          this.case_lists = response.data.data.casesInfoVoList
        })
        .catch(error => {
          // 请求失败，
          console.log(error);
        });
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        if(from.name === "business"){
          window.scrollTo(0, 2000)
        }
      })
    },
  /*  mounted(){
      let lis = document.getElementsByClassName('banner2_list')
      console.log(lis.length)
      for(let i =0;i<lis.length;i++){
        lis[i].onmouseenter = function(){
          lis[i].classList.add("active")
        }
        lis[i].onmouseleave = function(){
          lis[i].classList.remove("active")
        }
      }
    }, */
    updated() {
      /*获取HTML中的对象*/
      var parent = document.getElementById("parent");
      var img_ul = document.getElementById("img_ul");
      var litCir_ul = document.getElementById("litCir_ul");
      var buttons = document.getElementById("buttons");
      var cLis = litCir_ul.children;

      var len = img_ul.children.length; //图片张数
      var width = parent.offsetWidth; //每张图片的宽度
      var rate = 15; //一张图片的切换速度， 单位为px
      var times = 1; //切换速度的倍率
      var gap = 3000; //自动切换间隙， 单位为毫秒
      var timer = null; //初始化一个定时器
      var picN = 0; //当前显示的图片下标
      var cirN = 0; //当前显示图片的小圆点下标
      var temp;
      //添加小圆点
      for (var i = 0; i < len; i++) {
        var a_li = document.createElement("li");
        a_li.className = 'quiet';
        litCir_ul.appendChild(a_li);
      }
      litCir_ul.children[0].className = "active";

      function Roll(distance) { //参数distance：滚动的目标点（必为图片宽度的倍数）
        clearInterval(img_ul.timer); //每次运行该函数必须清除之前的定时器！
        var speed = img_ul.offsetLeft < distance ? rate : (0 - rate); //判断图片移动的方向

        img_ul.timer = setInterval(function() { //设置定时器，每隔10毫秒，调用一次该匿名函数
          img_ul.style.left = img_ul.offsetLeft + speed + "px"; //每一次调用滚动到的地方 (速度为 speed px/10 ms)
          var leave = distance - img_ul.offsetLeft; //距目标点剩余的px值
          /*接近目标点时的处理，滚动接近目标时直接到达， 避免rate值设置不当时不能完整显示图片*/
          if (Math.abs(leave) <= Math.abs(speed)) {
            clearInterval(img_ul.timer);
            img_ul.style.left = distance + "px";
          }
        }, 10);
      }
      /*克隆第一个li到列表末*/
      img_ul.appendChild(img_ul.children[0].cloneNode(true));

      function autoRun() {
        picN++;
        cirN++;
        if (picN > len) { //滚动完克隆项后
          img_ul.style.left = 0; //改变left至真正的第一项处
          picN = 1; //从第二张开始显示
        }
        Roll(-picN * width);

        if (cirN > len - 1) { //判断是否到了最后一个圆点
          cirN = 0;
        }
        for (var i = 0; i < len; i++) {
          cLis[i].className = "quiet";
        }
        cLis[cirN].className = "active";
      }
      for (var i = 0; i < len; i++) {
        cLis[i].index = i;
        cLis[i].onclick = function() {
          for (var j = 0; j < len; j++) {
            cLis[j].className = "quiet";
          }
          this.className = "active";
          temp = cirN;
          picN = cirN = this.index;
          times = Math.abs(this.index - temp); //距离上个小圆点的距离
          rate = rate * times; //根据距离改变切换速率
          Roll(-this.index * width);
          rate = 15;
        }
      }
      parent.onmouseover = function() {
        clearInterval(timer);
        buttons.style.display = 'block';
      }
      parent.onmouseout = function() {
        timer = setInterval(autoRun, gap);
        buttons.style.display = 'none';
      }
      /*上一张*/
      buttons.children[0].onclick = function() {
        picN--;
        cirN--;
        if (picN < 0) { //滚动完第一项后
          img_ul.style.left = -len * width + "px"; //改变left至克隆的第一项处
          picN = cirN = len - 1;
        }
        Roll(-picN * width);
        //bug处理
        if (cirN < 0) {
          cirN = len - 1;
        }
        for (var i = 0; i < len; i++) {
          cLis[i].className = "quiet";
        }
        cLis[cirN].className = "active";
      }
      /*下一张*/
      buttons.children[1].onclick = autoRun;

      let le = document.getElementsByClassName("banner2_box")[0];
      let num = document.getElementsByClassName("banner2_list");
      let ban2 = document.getElementsByClassName("banner2_right")[0];
      let ban3 = document.getElementsByClassName("banner2_left")[0];
      let count = num.length
      let wid = 395
      let spe = 20
      let number = 0
      let time1 = null
      le.appendChild(le.children[0].cloneNode(true));
      le.appendChild(le.children[1].cloneNode(true));
      le.appendChild(le.children[2].cloneNode(true));
      for(let i =0;i<num.length;i++){
        num[i].onmouseenter = function(){
          num[i].classList.add("active")
        }
        num[i].onmouseleave = function(){
          num[i].classList.remove("active")
        }
      }
      ban3.onclick = function() {
        number--
        if(number < 0){
        	le.style.left = -count*wid + "px";
        	number = count -1
        }
        le.time1 = setInterval(function() {
        	le.style.left = le.offsetLeft + spe + "px"
        	var leave = -number*wid - le.offsetLeft
        	if (Math.abs(leave) <= Math.abs(spe)) {
        	  clearInterval(le.time1);
        	  le.style.left = -number*wid + "px";
        	}
        },20)
      }
      ban2.onclick = function() {
        number++
        if(number > count){
        	le.style.left = 0
        	number = 1
        }
        le.time1 = setInterval(function() {
        	le.style.left = le.offsetLeft - spe + "px"
        	var leave = -number*wid - le.offsetLeft
        	if (Math.abs(leave) <= Math.abs(spe)) {
        	  clearInterval(le.time1);
        	  le.style.left = -number*wid + "px";
        	}
        },20)

      }
    },
    methods: {
      addClass($event) {
        $event.currentTarget.className = 'active';
      },
      removeClass($event) {
        $event.currentTarget.className = '';
      }
    }
  }
</script>
