<template>
  <div class="del">
    <div class="pro">
      <p></p>
      <div class="container">
        <div class="rig">
          <router-link :to="{name:'goods',query:{id:this.$route.query.id}}" >宝贝</router-link>
          <router-link :to="{name:'details',query:{id:this.$route.query.id}}" >详情</router-link>
          <router-link :to="'solution'" >解决方案</router-link>
          <!-- <span>购买</span> -->
        </div>
      </div>
    </div>
    <div class="detail">
    	<div class="txt1">
    		<div class="container">
          <div class="tt">
          	<p>{{lists.title}}</p>
          	<p>{{lists.summary}}</p>
            <div class="left">
              <!-- <img :src="lists.personModuleInfoVoList[0].pictureLabel" alt="">
              <img :src="lists.personModuleInfoVoList[1].pictureLabel" alt=""> -->
            </div>
            <div class="right">
              <img :src="lists.pictureLabel" alt="">
            </div>
          </div>
        </div>
    	</div>
    </div>
    <div class="content">
    </div>
  </div>
</template>
<style lang="less">
  .container{
    width: 1200px;
    margin: 0 auto;
  }
  .del{
    .content{
      width: 1200px;
      margin: 0 auto;
      margin-top: 40px;
      margin-bottom: 80px;
    }
  }
	.detail{
    height: 740px;
    margin-bottom: 71px;
    background-color: #F7F7F7;
		.txt1{
      /* height: 696px;
      position: absolute;
      left: 0; */
			.tt{
        height: 696px;
        position: relative;
				font-size: 15px;
        color: #999;
        padding-top: 44px;
        margin-left: 30px;
        margin-bottom: 70px;
				p{
          width: 450px;
					word-wrap:break-word;
				}
				p:first-child{
					font-size: 40px;
          font-weight: bold;
          color: #666;
          margin-bottom:69px;
				}
        p:last-child{
          line-height: 24px;
        }
        .left{
          position: absolute;
          bottom: 0;
          z-index: 333;
          img{
            width: 347px;
            height: 331px;
            margin-right: 23px;
          }
        }
        .right{
          position: absolute;
          right: 0;
          top: 0;
          z-index: 0;
        	width: 543px;
        	height: 694px;
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
				nums:'',
				lists:{
				  id:'',
				  title: '',
				  summary:'',
				  details:'',
          pictureLabel:'',
				  enterpriseDeviceModuleInfoVoList:[
            {
              caption:''
            }
          ]
				}
			}
		},
		created (){
      window.scrollTo(0, 0);
      this.$http.get("/api/enterprise/info",{
      	params: {
      	  id: this.$route.query.id
      	}
      })
      .then(response => {
        // 请求成功
        this.lists = response.data.data
      })
      .catch(error => {
        // 请求失败，
        console.log(error);
      });

		},
		updated(){
      let content = document.getElementsByClassName("content")
      content[0].innerHTML = this.lists.details
		}
	}
</script>
