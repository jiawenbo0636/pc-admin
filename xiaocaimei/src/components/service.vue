<template>
  <div class="service">
    <div class="mask"></div>
    <div class="container clearfix">
      <div class="imgs">
        <img src="../assets/img/222.jpg" />
        <img src="../assets/img/111.jpg" />
      </div>
      <div class="txt">
        <h1>资源置换</h1>
        <p>什么是资源置换？我们通俗点来说，就是拿对自己没用的东西去换对自己有用的东西。<br />
一种有偿性的废品处理生活服务，回收之后对废品进行科学处理和分类达到再次循环利
用的标准。废品回收对环境保护、节约能源和带动社会效益起着积极作用。<br />
   资源置换，变废为宝，利国利民，让我们行动起来吧！戳下面
</p>
        <p><span>了解更多 <img src="../assets/img/go.png" /></span></p>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.service{
	width: 100%;
	height: 955px;
	margin: 0 auto;
	background-image: url(../assets/img/2222.jpg);
  background-size: cover;
  position: relative;
	.mask{
		width: 100%;
		height: 100%;
		background-color: #fff;
		opacity:.5;
		position: absolute;
    left: 0;
	}
  .container{
    position: relative;
  }
	.imgs{
    z-index: 999;
		float: left;
		width: 485px;
    margin-top: 154px;
		img{
			width: 485px;
			height: 273px;
      display: block;
      margin-bottom: 75px;
      border: 2px solid #fff;
		}
	}
	.txt{
		float: left;
		width: 600px;
		color: #333;
    margin-left: 78px;
    h1{
      font-size: 50px;
      margin-top: 213px;
      font-weight: 500;
    }
    p{
      font-size: 20px;
      line-height: 40px;
      min-height: 303px;
    }
    p{
      margin-top: 85px;
    }
    p:last-child{
      font-size: 30px;
      margin-top: 0;
    }
	}
}
</style>
<script>
	export default{
		data(){
			return{

			}
		}
	}
</script>
