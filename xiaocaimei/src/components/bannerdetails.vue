<template>
  <div class="banner_details">
    <img :src="img"/>
    <div class="container">
      <h1>{{title}}</h1>
      <p>{{summary}}</p>
      <div class="text" v-html="details"></div>
    </div>
  </div>
</template>

<script>
export default {
	data () {
		return {
      index:'',
      img:'',
      title:'',
      summary:'',
      details:'',
      list:[
       /* {
          id:'',
          pictureLabel:'',
          details:'',
          title:'',
          summary:''
        } */
      ]
    }
  },
  created(){
    this.index = this.$route.query.id
    this.$http.get("/api/index/info")
      .then(response => {
        // 请求成功
        this.img = response.data.data.bannerInfoVoList[this.index].pictureLabel;
        this.title = response.data.data.bannerInfoVoList[this.index].title;
        this.summary = response.data.data.bannerInfoVoList[this.index].summary;
        this.details = response.data.data.bannerInfoVoList[this.index].details;
      })
      /* .then(()=>{
        this.list.forEach((item) => {
          if (item.id.indexOf(this.$route.query.id) > -1) {
            this.list = []
            this.list.push(item)
          }
        })
        console.log(this.list)
      }) */
      .catch(error => {
        // 请求失败，
        console.log(error);
      });
  },
  /* updated(){
    let txt = document.getElementsByClassName("text")
    txt[0].innerHTML= this.list[this.index].details
  } */
}
</script>

<style lang="less">
.banner_details{
  img{
    display: block;
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    height: 550px;
  }
  .text{
    margin-bottom: 80px;
  }
  h1{
    line-height: 60px;
  }
  p{
    line-height: 40px;
  }
}

</style>
