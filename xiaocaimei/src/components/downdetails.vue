<template>
	<div class="downdetails">
		<div class="pic">
			<div class="mask"></div>
			<div class="container clearfix">
				<div class="imgs"><img src="../assets/img/39.png" alt=""></div>
				<div class="text">
					<p>小彩妹社区</p>
					<p>基于深度学习算法的人脸识别与二维码、NFC、密码等技术应用于门禁系统，通过抓拍人脸照片、动态二维码与密码、手机NFC功能用于业主数据库比对核实、验证身份，进而实现无感通行。<br />
通过业主为访客授权，在微信和短信平台上推送动态二维码及密码，实现人员精准管理。</p>
					<p><img src="../assets/img/90.png" alt=""></p>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="th">
				<p>多种方式-安全开门</p>
				<p style="margin-top: 10px;">M u l t i p l e &emsp; w a y s &emsp; t o &emsp; o p e n &emsp; t h e &emsp; d o o r &emsp; s a f e l y</p>
				<p><img src="../assets/img/19.png" alt=""></p>
				<p>
					<span class="down_img">
            <img src="../assets/img/36.png" alt="">
            <img src="../assets/img/36_1.png" alt="">
          <br/>人脸</span>
					<span class="down_img"><img src="../assets/img/30.png" alt="">
          <img src="../assets/img/30_1.png" alt="">
          <br/>二维码</span>
					<span class="down_img"><img  src="../assets/img/35.png" alt="">
          <img src="../assets/img/35_1.png" alt="">
          <br/>密码</span>
					<span class="down_img"><img  src="../assets/img/34.png" alt="">
          <img src="../assets/img/34_1.png" alt="">
          <br/>NFC</span>
				</p>
			</div>
			<div class="th">
				<p>线上授权-轻松出入</p>
				<p style="margin-top: 10px;">O n l i n e&emsp; a u t h o r i z a t i o n&emsp; e a s y &emsp;a c c e s s</p>
				<p><img src="../assets/img/19.png" alt=""></p>
				<p>
					<span class="down_img">
            <img  src="../assets/img/32.png" alt="">
            <img  src="../assets/img/32_1.png" alt="">
            <br/>家庭成员</span>
					<span class="down_img">
            <img  src="../assets/img/31.png" alt="">
            <img  src="../assets/img/31_1.png" alt="">
            <br/>访客</span>
					<span class="down_img">
            <img  src="../assets/img/38.png" alt="">
            <img  src="../assets/img/38_1.png" alt="">
            <br/>熟人</span>
				</p>
			</div>
			<div class="th">
				<p>线上缴费-维护管理</p>
				<p style="margin-top: 10px;">O n l i n e &emsp; p a y m e n t &emsp; m a i n t e n a n c e&emsp; m a n a g e m e n t</p>
				<p><img src="../assets/img/19.png" alt=""></p>
				<p>
					<span class="down_img">
            <img  src="../assets/img/33.png" alt="">
            <img  src="../assets/img/33_1.png" alt="">
            <br/>生活缴费</span>
					<span class="down_img">
            <img  src="../assets/img/37.png" alt="">
            <img  src="../assets/img/37_1.png" alt="">
            <br/>维修</span>
				</p>
			</div>
		</div>
	</div>
</template>
<style scope lang="less">
.downdetails{
  .pic{
  	width: 100%;
	  max-width: 1920px;
  	height: 550px;
  	margin: 0 auto;
  	background-image: url(../assets/img/21.png);
  	background-repeat:no-repeat;
    background-size:100% 100%;
    position: relative;
  	.mask{
  		width: 100%;
  		height: 100%;
  		background-color: #000;
  		opacity:0.4;
  		position: absolute;
  		left: 0 ;
  	}
    .container{
      position: relative;
    }
  	.imgs{
      z-index: 999;
  		float: left;
  		margin:62px 116px 0 70px;
  		width: 330px;
  		height: 395px;
  		img{
  			width: 100%;
  			height: 100%;
  		}
  	}
  	.text{
  		float: left;
  		width: 480px;
  		color: #fff;
      margin-top: 62px;
  		p:nth-child(1){
  			font-size: 40px;
  			font-weight: bold;
  		}
  		p:nth-child(2){
  			margin-top: 45px;
  			font-size: 16px;
  			line-height: 25px;
  		}
  		p:nth-child(3){
  			margin-top: 30px;
  			width: 130px;
  			height: 130px;
  			img{
  				width: 100%;
  				height: 100%;
  			}
  		}
  	}
  }
  .active{
      background-color: #21B2FD;
      color: #fff;
    }
  .th{
  	margin-top: 117px;
    margin-bottom: 167px;
  	p:nth-child(1){
  		text-align: center;
  		font-size: 40px;
  		color: #333;
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
  	p:nth-child(4){
  		text-align: center;
  		margin-top: 55px;
  		span{
  			color: #333;
  			font-size: 24px;
  			display: inline-block;
  			width:165px;
  			height:177px;
  			margin-left: 168px;
  			text-align:center;
  			background:rgba(255,255,255,1);
  			box-shadow:0px 4px 5px 0px rgba(116,116,116,0.36);
  			border-bottom: 6px solid #21B2FD;
  			img{
  				margin: 40px 0 24px 0;
  				width: 50px;
  				height: 54px;
  			}
        img:nth-child(2){
          display: none;
        }
  		}
  		span:nth-child(1){
  			margin-left: 10px;
  		}
  	}
  }
  .th:last-child{
  	margin-bottom: 105px;
  }
}
</style>
<script>
	export default{
		data(){
			return{
        flag:false
			}
		},
    mounted(){
      window.scrollTo(0, 0);
      let down1 = document.getElementsByClassName("down_img")
      for(var i = 0;i < down1.length;i++){
        (function(j){
          down1[j].onmouseenter = function(){
            down1[j].style.backgroundColor = "#21B2FD"
            down1[j].style.color = "#fff"
            down1[j].children[0].style.display = "none"
            down1[j].children[1].style.display = "inline-block"
            this.flag = true
          }
          down1[j].onmouseleave = function(){
            down1[j].style.backgroundColor = "#fff"
            down1[j].style.color = "#333"
            down1[j].children[0].style.display = "inline-block"
            down1[j].children[1].style.display = "none"
            this.flag = false
          }
        })(i)
      }
    }
	}
</script>
