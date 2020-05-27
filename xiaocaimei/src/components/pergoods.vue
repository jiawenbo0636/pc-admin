<template>
<div>
  <div class="pro">
    <p></p>
    <div class="container">
      <div class="rig">
        <router-link :to="{name:'pergoods',query:{id:this.$route.query.id}}" >宝贝</router-link>
        <router-link :to="{name:'perdetails',query:{id:this.$route.query.id}}" >详情</router-link>
        <router-link :to="'solution'" >解决方案</router-link>
        <!-- <span>购买</span> -->
      </div>
    </div>
  </div>
  <div class="good">
  	<div class="txt1">
  		<div class="container">
        <div class="tt">
        	<p>{{lists.title}}</p>
        	<p>{{lists.summary}}</p>
          <div class="right">
            <img :src="lists.pictureLabel" alt="">
            <img src="../assets/img/ju.png" alt="">
          </div>
        </div>
      </div>
  	</div>
  </div>
  <div class="container">
    <div class="modular" v-for="list in model_list">
      <div class="pic">
        <img :src="list.pictureLabel" alt="">
      </div>
      <div class="txt">
        <h1>{{list.title}}</h1>
        <p>{{list.caption}}</p>
      </div>
      <img class="bei" src="../assets/img/yuan.png" alt="">
    </div>
  </div>
</div>
</template>
<style lang="less">
.pro{
    height: 115px;
    line-height: 115px;
    p{
      width: 100%;
      position: absolute;
      left: 0;
      top: 90px;
      height: 10px;
      box-shadow:0px 4px 4px 0px rgba(116,116,116,0.36);
    }
    .rig{
      font-size: 20px;
      margin-left: 30px;
      .router-link-active{
        color:#333;
      }
      a{
        color: #999;
        margin-right: 120px;
        text-decoration: none;
      }
      a:hover{
        color:#333;
      }
      span{
        display: inline-block;
        text-align: center;
        border-radius: 30px;
        color: #fff;
        width: 100px;
        height: 50px;
        line-height: 50px;
        background-color: #a00909;
      }
    }
  }
  .modular:last-child{
    margin-bottom: 120px;
  }
  .modular{
    position: relative;
    height: 512px;
    .bei{
      position: absolute;
      left: 20px;
      bottom: 0;
      width: 387px;
      height: 387px;
    }
    .pic{
      position: absolute;
      left: 0;
      top: 0;
      width: 405px;
      height: 405px;
      margin-top: 48px;
      border-radius: 50%;
      overflow: hidden;
      margin-left: 50px;
      z-index: 9999;
      display: inline-block;
      img{
        width: 405px;
        height: 405px;
      }
    }
    .txt{
      width: 906px;
      height: 368px;
      display: inline-block;
      position: absolute;
      top: 103px;
      left: 250px;
      box-shadow:0px 3px 5px 0px rgba(126,126,126,0.38);
      h1{
        font-size: 40px;
        color: #666;
        margin-top: 47px;
        margin-left: 253px;
      }
      p{
        width: 450px;
        margin-top: 55px;
        margin-left: 253px;
        font-size: 15px;
        color: #999;
        word-wrap: break-word;
        word-break: break-all;
      }
    }
  }
  .modular:nth-child(2n){
    .pic{
      position: absolute;
      left: 700px;
    }
    .bei{
      position: absolute;
      left: 700px;
    }
    .txt{
       position: absolute;
       top: 103px;
       left: 30px;
       h1,p{
         margin-left: 50px;
       }
    }
  }
	.good{
    height: 480px;
		.txt1{
      width: 100%;
      position: absolute;
      left: 0;
      background-color: #F7F7F7;
			.tt{
        height: 436px;
        position: relative;
				font-size: 15px;
        color: #999;
        margin-left: 30px;
				p{
          width: 450px;
          line-height: 23px;
					word-wrap:break-word;
				}
				p:first-child{
					font-size: 40px;
          font-weight: bold;
          color: #666;
          margin-bottom:69px;
          margin-top: 44px;
				}
        p:last-child{
          line-height: 24px;
        }
        .right{
          position: absolute;
          left: 735px;
          top: 0;
          z-index: 0;
        	width: 322px;
        	height: 378px;
          img:nth-child(1){
            position: absolute;
            bottom: 0;
            right: 0;
            z-index: 999;
          }
          img:nth-child(2){
            width: 322px;
            height: 378px;
            position: absolute;
            bottom: -35px;
            right: -30px;
          }
        }
			}
		}
		img{
			width: 100%;
			height: 100%;
		}
	}
</style>
<script>
	export default{
		data(){
			return{
				counts:'',
				lists:{
          id:'',
          title: '',
          summary:'',
          details:'',
          pictureLabel:''
        },
        model_list:[
          {
            caption:'',
            pictureLabel:''
          }
        ]
			}
		},
		created (){
      window.scrollTo(0, 0);
      this.$http.get("/api/personal/info",{
      	params: {
      	  id: this.$route.query.id
      	}
      })
      .then(response => {
        // 请求成功
        this.lists = response.data.data
        this.model_list = response.data.data.personModuleInfoVoList
      })
      .catch(error => {
        // 请求失败，
        console.log(error);
      });
		},
		mounted (){

    }
	}
</script>
