<template>
	<div class="newmation">
    <dialog-bar v-model="send" type="confirm" title="新建联系方式" content="提交失败!" :cancel="clickCancel()" ></dialog-bar>
    <dialog-bar v-model="send1" type="confirm" title="新建联系方式" content="您还有选项未填完!" :cancel="clickCancel()" ></dialog-bar>
    <dialog-bar v-model="send2" type="confirm" title="新建联系方式" content="提交成功!" :cancel="clickCancel()" @confirm="clickConfirm(name)"></dialog-bar>
		<div class="content">
      <p><span>驿站名称</span><input type="text" placeholder="请输入驿站名称" class="text"></p>
      <p><span>驿站地址</span><input type="text" placeholder="请输入驿站地址" class="text"></p>
      <p><span>驿站电话</span><input type="text" placeholder="请输入驿站电话" class="text"></p>
      <div class="bottom">
        <input type="submit" value="取消" @click="goBack()">
        <input type="submit" value="保存" @click="saveHtml()">
      </div>
    </div>
	</div>
</template>
<style scoped lang="less">
.newmation{
  padding: 80px 40px 40px 40px;
  min-width: 1000px;
  .content{
    background-color: #fff;
    border-radius: 8px 8px 0 0;
    padding: 25px 30px;
    min-height: 500px;
    position: relative;
  }
	p{
		margin-bottom: 40px;
    height: 40px;
    line-height: 40px;
		span{
			display: inline-block;
      font-size: 20px;
      color: #333;
		}
		input{
      font-size: 18px;
			width: 70%;
      height: 38px;
      line-height: 38px;
			margin-left:50px;
      padding-left: 10px;
		}
	}
	.bottom{
    position: absolute;
    bottom: 50px;
    right: 0;
		text-align: right;
		padding-right:140px;
    input{
      width: 150px;
      height: 50px;
      color: #666;
      font-size: 20px;
      background:none;
      outline:none;
      border:none;
      background-color: #E4E4E4;
      margin-right: 70px;
      cursor: pointer;
    }
    input:last-child{
      background-color: #4977FC;
      color: #fff;
    }
	}
}
</style>

<script>
  import Axios from'../api/axios'
  import dialogBar from './dialog.vue'
  export default {
    components: {
      dialogBar
    },
  data(){
     return {
       sendVal: false,
       send: false,
       send1:false,
       send2:false,
       name:'',
       contactWayInfoVo:{
         name:'',
         address:'',
         telephone:''
       }
     }
  },
  created(){
    let txt1 = document.getElementsByClassName("text")
    let url = window.location.href
    if(url.indexOf("id") >= 0 ) { //判断url地址中是否包含id字符串
      Axios.get("/sys/contact/info",{
          params: {
            id: this.$route.query.id
          }
      })
      .then(response => {
        // 请求成功
        txt1[0].value = response.data.data.name
        txt1[1].value = response.data.data.address
        txt1[2].value = response.data.data.telephone
      })
      .catch(error => {
        // 请求失败，
        console.log(error);
      })
    }
  },
  methods: {
    saveHtml(){
      let url = window.location.href
      let txt1 = document.getElementsByClassName("text")
      if (txt1[0].value =="" || txt1[1].value=="" || txt1[2].value=="" ) {
        this.opensend1()
      }else if(url.indexOf("id") >= 0 ){
        Axios.put("/sys/contact/info",{
          id: this.$route.query.id,
          name:txt1[0].value,
          address:txt1[1].value,
          telephone:txt1[2].value
        })
        .then(response => {
          // 请求成功
          this.opensend2('information')
        })
        .catch(error => {
          // 请求失败，
          this.openMa()
          console.log(error);
        });
      }else{
        Axios.post("/sys/contact/info",{
            name:txt1[0].value,
            address:txt1[1].value,
            telephone:txt1[2].value
        })
        .then(response => {
          // 请求成功
          this.opensend2('information')
        })
        .catch(error => {
          // 请求失败，
          this.openMa()
          console.log(error);
        });
      }
    },
    openMask() {
          this.sendVal = true;
        },
        openMa() {
          this.send = true;
        },
        opensend1() {
          this.send1 = true;
        },
        opensend2(val) {
          this.send2 = true;
          this.name = val
        },
        clickCancel(val) {
        },
        clickDanger() {
          console.log('这里是danger回调')
        },
        clickConfirm(val) {
          this.$router.push(val)
        },
	  goBack(){
	    	this.$router.go(-1)
    }
  }
}
</script>
