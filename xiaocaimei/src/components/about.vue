<template>
	<div>
    <div class="pic">
      	<img src="../assets/img/about.png" alt="">
    </div>
    <div class="container">
    	<div class="about">
    		<h1>联系我们：09514116441</h1>
    		<p>地址：宁夏银川金凤区宝湖中路南侧宝湖福邸1号楼602室</p>
    		<ul>
    			<li><span>驿站名称</span><span>驿站地址</span><span>驿站电话</span></li>
    			<li v-for="item in items">
    				<span>{{item.name}}</span>
    				<span>{{item.address}}</span>
    				<span>{{item.telephone}}</span>
    			</li>
    		</ul>
    	</div>
    </div>
  </div>
</template>
<style lang="less">
  .pic{
  	width: 100%;
    max-width: 1920px;
  	height: 550px;
  	margin: 0 auto;
    position: relative;
  	.mask{
  		width: 100%;
  		height: 100%;
  		background-color: #000;
  		opacity:0.4;
  		position: absolute;
  		left: 0 ;
  	}
  }
	.about{
    text-align: center;
    margin-bottom: 181px;
		h1{
			font-size: 40px;
			font-weight: bold;
      color: #333;
      margin-top: 75px;
		}
		p{
			font-size: 26px;
			margin:40px 0 45px 0;
      color: #333;
		}
		li{
			width: 100%;
			height: 68px;
			font-size: 20px;
      color: #666;
			line-height: 68px;
      margin-bottom: -1px;
      display: flex;
			span{
				display: inline-block;
        border: 1px solid #999;
        margin-right: -1px;
			}
			span:nth-child(1){
				flex: 1;
			}
			span:nth-child(2){
				flex: 2;
			}
			span:nth-child(3){
				flex: 1;
        margin-right: 0;
			}
		}
		li:nth-child(1){
			font-size: 26px;
      color: #3D6BFF;
			background-color: #BFD6FF;
      span{
        border: none;
      }
		}
		li:nth-child(2n){
      background-color: #F5FDFF;
		}
	}
</style>
<script>
	export default{
		data(){
			return{
				items:[
        {
          name:"",
          address:"",
          telephone:""
        }
			  ]
			}
		},
    created(){
      this.$http.get("/api/relation/list")
        .then(response => {
          // 请求成功
          this.items = response.data.data
        })
        .catch(error => {
          // 请求失败，
          console.log(error);
        });
    },
    mounted(){
      window.scrollTo(0, 0);
    }
	}
</script>
