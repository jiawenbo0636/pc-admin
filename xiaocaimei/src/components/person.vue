<template>
  <div class="container">
    <div class="per">
      <ul class="clearfix">
        <li v-for="(list,index) in lists" @mouseenter="addClass($event)" @mouseleave="removeClass($event)" :key="index">
          <div>
            <img :src="list.pictureLabel" alt="">
          </div>
          <p class="title">{{list.title}}<img src="../assets/img/line.png"></p>
          <p class="txt">{{list.summary}}</p>
          <p class="goDel">
            <span>
              <router-link :to="{name:'pergoods',query:{id:list.id}}">了解详情<img src="../assets/img/go_2.png" /></router-link>
            </span>
            <!-- <span class="buy">立即购买</span> -->
          </p>
        </li>
      </ul>
      <div class="so">
        <span><router-link :to="'solution'">解决方案</router-link></span>
        <!-- <span>成功案例</span> -->
      </div>
    </div>
  </div>
</template>
<style lang="less">
  .per {
    width: 100%;

    ul {
      margin-top: 60px;
      width: 100%;

      li {
        position: relative;
        width: 530px;
        height: 535px;
        margin-bottom: 80px;
        background-color: #FBFBFB;
        float: left;
        div{
        	width: 100%;
        	height: 250px;
          img{
            width: 100%;
            height: 250px;
          }
        }
        .title {
          height: 60px;
          line-height: 60px;
          font-size: 30px;
          font-weight: bold;
          margin-left: 20px;
          color: #333333;

          img {
            display: block;
            width: 400px;
            height: 2px;
          }
        }

        .txt {
          margin: 27px 25px 60px 20px;
          line-height: 24px;
          font-size: 16px;
          color: #999999;
        }

        .goDel {
          position: absolute;
          left: 30px;
          bottom: 30px;
          font-size: 22px;

          /* span {
            display: inline-block;
            width: 172px;
            height: 53px;
            border: 1px solid #0072E6;
            text-align: center;
            margin-right: 30px;
            line-height: 53px;
            background-color: #CAECFF;
          } */
          img{
            display: inline-block;
            width: 11px;
            height: 19px;
            margin-left: 10px;
            vertical-align: middle;
            margin-top: -4px;
          }
          a {
            list-style: none;
            color: #B9B9B9;
            display: inline-block;
            text-decoration: none;
            height: 30px;
          }

          .buy {
            background-color: #07A6FF;
            border: 1px solid #07A6FF;
            color: #fff;
          }
        }
      }

      li:nth-child(2n+1) {
        margin-right: 140px;
      }

      .active {
        background-color: #fff;
        box-shadow: 2px 4px 5px #dfdfdf;
      }
    }

    .so {
      width: 100%;
      text-align: center;
      padding: 40px 0 40px 0;
      border-bottom: 1px solid #999;

      span {
        display: inline-block;
        width: 250px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        background-color: #000;
        color: #fff;
        font-size: 20px;
        a{
          display: inline-block;
          color: #fff;
          list-style: none;
          text-decoration: none;
        }
      }

      span:nth-child(1) {
        margin-right: 80px;
      }
    }
  }
</style>
<script>
  export default {
    data() {
      return {
        seen: false,
        current: 0,
        lists: [{
          id: '',
          title: '',
          summary: '',
          pictureLabel: ''
        }]
      }
    },
    created() {
      this.$http.get("/api/personal/list")
        .then(response => {
          // 请求成功
          this.lists = response.data.data
        })
        .catch(error => {
          // 请求失败，
          console.log(error);
        });
    },
    mounted() {

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
