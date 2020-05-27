<template>
	<div class="container">
		<div class="pro">
        	<p></p>
			<div class="rig">
				<router-link :to="{name:'goods',query:{id:nums}}" >宝贝</router-link>
				<router-link :to="{name:'details',query:{id:nums}}" >详情</router-link>
				<router-link :to="{name:'solution',query:{id:nums}}" >解决方案</router-link>
				<span>购买</span> 	
			</div>
		</div>
		<router-view></router-view>
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
</style>
<script>
	export default{
		data(){
			return{
				nums:''
			}
		},
		create(){
            //获取路由参数
            //vue-router中挂载两个对象的属性
            //$route(信息数据)
            //$router(功能函数)
            /*console.log(this.$route.params);*/
        },
        mounted (){
        	let num = this.$route.query.id
        	this.nums = num
        }
	}
</script>
