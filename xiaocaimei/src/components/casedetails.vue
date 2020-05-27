<template>
	<div>
		<div class="pic">
      <img :src="case_lists[0].pictureLabel" alt="">
			<div class="mask"></div>
		</div>
		<div class="container">
			<div class="th">
				<p>{{case_lists[0].title}}</p>
				<p>{{case_lists[0].summary}}</p>
				<p><img src="../assets/img/19.png" alt=""></p>
			</div>
			<div class="content"></div>
		</div>
	</div>
</template>
<style scoped lang="less">
.pic{
	width: 100%;
	height: 500px;
	margin: 0 auto;
  position: relative;
  img{
    width: 100%;
    height: 500px;
  }
	.mask{
		width: 100%;
		height: 500px;
		background-color: #000;
		opacity:0.4;
		position: absolute;
		left: 0 ;
    top: 0;
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
}
.th{
	margin-top: 117px;
	p:nth-child(1){
		text-align: center;
		font-size: 40px;
    margin-bottom: 20px;
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
}
.th:last-child{
	margin-bottom: 105px;
}
</style>
<script>
	export default{
		data(){
			return{
				arr:[],
				case_lists:[
					{
						id:'',
						pictureLabel:'',
						title:'',
						summary:'',
						details:''
					}
				]
			}
		},
		created(){
			this.$http.get("/api/index/info")
	      .then(response => {
	        // 请求成功
	        this.arr = response.data.data.casesInfoVoList
	      })
	      .then(()=>{
	      	this.case_lists = []
	        this.arr.forEach((item) => {
	            if (item.id == this.$route.query.id) {
	              this.case_lists.push(item)
	            }
	        })
	        let content = document.getElementsByClassName("content")
            content[0].innerHTML = this.case_lists[0].details
	      })
	      .catch(error => {
	        // 请求失败，
	        console.log(error);
	      });
		},
	    mounted(){
	      window.scrollTo(0, 0);
	    },
	}
</script>
