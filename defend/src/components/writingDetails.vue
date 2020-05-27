<template>
	<div class="details">
    <div class="top">
      <div class="img">
      	<h1>{{lists.name}}</h1>
      	<h2>{{lists.summary}}</h2>
      </div>
      <div class="content" v-html="lists.details"></div>
    </div>
	</div>
</template>
<style scoped lang="less">
  .top{
    padding: 25px 30px;
    background-color: #fff;
    border-radius: 13px;
    min-height: 600px;
  }
.details{
  min-height: 600px;
  margin-top: 20px;
  padding: 40px;
	.img{
		width: 100%;
		img{
			width: 100%;
			height: 400px;
		}
		h1{
			font-size: 30px;
			line-height: 60px;
		}
		h2{
			font-size: 24px;
			line-height: 40px;
			margin-left: 50px;
		}
	}
}
</style>

<script>
import Axios from'../api/axios'
export default {
	data(){
		return{
      lists:{}
		}
	},
	created(){
		Axios.get("/sys/copywrit/info",{
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
		})
	},
  updated(){
    let content = document.getElementsByClassName("content")
    content[0].innerHTML = this.lists.details
  }

}
</script>
