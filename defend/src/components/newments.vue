<template>
	<div class="newment">
    <dialog-bar v-model="sendVal" type="default" title="上传图片" :cancel="clickCancel()"></dialog-bar>
    <dialog-bar v-model="send" type="confirm" title="上传图片" content="图片上传成功!" :cancel="clickCancel()" ></dialog-bar>
    <dialog-bar v-model="send0" type="confirm" title="上传图片" content="图片上传失败!" :cancel="clickCancel()" ></dialog-bar>
    <dialog-bar v-model="send1" type="confirm" title="新建设备" content="您还有选项未填完!" :cancel="clickCancel()" ></dialog-bar>
    <dialog-bar v-model="send2" type="confirm" title="新建设备" content="提交成功!" :cancel="clickCancel()" @confirm="clickConfirm(router_name)"></dialog-bar>
    <dialog-bar v-model="send3" type="confirm" title="新建设备" content="提交失败!" :cancel="clickCancel()"></dialog-bar>
    <div class="mo_log" v-show="flag">
        <div class="mo_content">
          <div>
            <img :src="mo_img" alt="">
            <input ref="mo_title" type="text" placeholder="模块标题" :value="mo_title">
          </div>
          <textarea ref="mo_txt" placeholder="模块说明" :value="mo_txt"/>
          </textarea>
          <div class="mo_sub">
            <span @click="closeLog1()">取消</span><span @click="closeLog(count)">确认</span>
          </div>
        </div>
    </div>
		<div class="content">
      <div class="type">
        <span>类型</span>
        <label v-for="item in typelists"><input @click="op(item.id)" name="copy" type="radio"/>{{item.name}}</label>
      </div>
      <p><span>名称</span><input type="text" placeholder="请输入名称" class="text1"></p>
      <p><span>摘要</span><input type="text" placeholder="请输入摘要" class="text2"></p>
      <p class="edit clearfix">
      	<span>详情</span>
      	<span class="edit_container">
              <quill-editor
                  v-model="content"
                  ref="myQuillEditor"
                  :options="editorOption"
                  @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                  @change="onEditorChange($event)">
              </quill-editor>
          </span>
      </p>
      <div class="upImg clearfix">
      	<div class="img1">图片</div>
        <input class="up" v-show="false" type="file" accept="image/*" @change="tirggerFile($event)" ref="input" />
        <div class="clearfix up2">
          <div class="model_pic" @click="openImg" style="float: left;margin-right: 50px;"></div>
          <div v-show="imgUrl" style="width:125px;height:125px;text-align:center;position:relative;float: left;">
            <!-- <span class="del">删除</span> -->
            <img style="height:100%;width:100%;" :src="imgUrl" />
          </div>
        </div>
      </div>
      <div class="upImg clearfix">
        <div class="img2">模块图片</div>
        <input class="up1" v-show="false" type="file" accept="image/*" @change="tirggerFile1($event)" ref="input1" />
        <div class="clearfix up2">
          <div style="width:125px;">
            <div class="model_pic" @click="openImg1" style="margin-bottom: 30px;"></div>
            <!-- <textarea style="display:inline-block;width:125px;" placeholder="模块描述"></textarea> -->
          </div>
          <div v-show ="imglist" class="area" v-for = "(img,index) in imglist" :key="index" style="display:flex;width: 50%; float: left;">
            <div style="width:125px;height:125px; text-align:center;margin: 0 0 30px 0;position: relative;">
               <span @click="del(index)" class="del"><img src="../assets/img/del.png" alt=""></span>
              <img class="area_img" style="height:100%;width:100%;" :src="img.pictureLabel" />
            </div>
            <div class="mo_txt" style="flex: 2;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
              <p>{{img.title == '' ? '模块标题' :img.title}}</p>
              <p>{{img.caption == '' ? '模块说明描述':img.caption }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <input type="submit" value="取消" @click="goBack()">
        <input type="submit" value="保存" @click="saveHtml()">
      </div>
    </div>
	</div>
</template>
<style scoped lang="less">
.mo_log{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 17px;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  .mo_content {
    width: 550px;
    height: 447px;
    background: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    position: relative;
    .mo_sub{
      span:first-child{
        margin-left: 280px;
      }
      span{
        display: inline-block;
        width: 100px;
        height: 45px;
        line-height: 45px;
        background-color: #4977FC;
        text-align: center;
        color: #fff;
        margin-right: 30px;
        cursor: pointer;
      }
    }
    img{
      width: 125px;
      height: 125px;
      margin: 17px 0 0 17px;
    }
    textarea{
      width: 92%;
      height: 170px;
      resize:none;
      margin: 30px 17px 37px;
      border: 1px solid #dcdcdc;
      background: none;
      outline: none;
      padding: 5px;
    }
    input{
      width: 360px;
      height: 55px;
      float: right;
      margin:17px;
      border: none;
      background: none;
      outline: none;
      border-bottom: 1px solid #dcdcdc;
    }
   }
}
.edit{
	span{
		float: left;
	}
}
.edit_container{
	display: inline-block;
  width: 70%;
	height: 566px;
	margin-left: 50px;
	background-color: #fff;
	.quill-editor{
		height: 500px;
	}
}
.newment{
  padding: 80px 40px 40px 40px;
  min-width: 1000px;
  .content{
    background-color: #fff;
    border-radius: 8px 8px 0 0;
    padding: 25px 30px;
    font-size: 18px;
    color: #333;
  }
  .type{
    height: 40px;
    line-height: 40px;
    margin-bottom: 40px;
    span{
      margin-right: 50px;
    }
    input{
      margin-right: 5px;
    }
    label{
      margin-right: 40px;
    }
  }
	p{
		margin-bottom: 40px;
		span{
			display: inline-block;
		}
		input{
			width: 70%;
			height: 40px;
			margin-left:50px;
      padding-left: 10px;
		}
	}
	.bottom{
		text-align: right;
    margin-top: 50px;
		padding-right:100px;
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
	.upImg{
		margin-bottom: 30px;
    .img1{
      float: left;
      font-size: 18px;
      margin-right: 50px;
    }
    .img2{
      float: left;
      font-size: 18px;
      margin-right: 14px;
    }
    .up2{
      width: 80%;
      float: left;
      left: 86px;
      p{
        max-width: 350px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 0;
        line-height: 60px;
        height: 60px;
        margin-left: 5px;
        padding-left: 10px;
        margin-right: 10px;
        border-bottom: 1px solid #dcdcdc;
      }
    }
    .model_pic{
      width:125px;
      height:125px;
      line-height:125px;
      text-align:center;
      background-image:url(../assets/img/upload.png);
      background-size: 100% 100%;
      cursor: pointer;
    }
	}
	.del{
		display: inline-block;
		width: 40px;
		height: 25px;
		cursor: pointer;
		position: absolute;
		top: -10px;
		right: -10px;
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
       send0:false,
       send1:false,
       send2:false,
       send3:false,
       mo_img:'',
       mo_title:'',
       mo_txt:'',
      count:'',
      value:'',
      index:'',
      index1:'',
      flag:false,
     	isSelectFile: true,
     	title:'',
     	txt:'',
      picture:'',
      picName:'',
      typeId:'',
      router_name:'',
      	imgUrl:'',
        imglist:[],
        content: '',
        typelists:[{
          id:'',
          name:''
        }],
        detailList:{
          details: "",
          deviceModuleInfoList: [
            {
              caption: "",
              id: "",
              picName: "",
              picture: ""
            }
          ],
          id: "",
          picName: "",
          picture: "",
          summary: "",
          title: "",
          typeId: ""
        },
        editorOption: {
          theme:"snow"
        }
     }
  },
  created(){
    Axios.get("/sys/device/type/list")
    .then(response => {
      // 请求成功
      this.typelists = response.data.data
    })
    .catch(error => {
      // 请求失败，
      console.log(error);
    })
    let txt1 = document.getElementsByClassName("text1")
    let txt2 = document.getElementsByClassName("text2")
    let url = window.location.href
    let mum
    if(url.indexOf("id") >= 0 ) {
    //判断url地址中是否包含id字符串
      Axios.get("/sys/device/info",{
          params: {
            id: this.$route.query.id
          }
      })
      .then(response => {
        // 请求成功
        let obj = document.getElementsByName("copy");
        this.detailList = response.data.data
        txt1[0].value = this.detailList.title
        txt2[0].value = this.detailList.summary
        this.content = this.detailList.details
        this.imgUrl = response.data.data.pictureLabel
        this.picture = response.data.data.picture
        this.picName = response.data.data.picName
        this.imglist = response.data.data.deviceModuleInfoList
        this.typeId = response.data.data.typeId
        for(var i=0; i<this.typelists.length; i ++){
          if(this.typelists[i].id == this.typeId){
                mum = i
          }
        }
        obj[mum].checked = "checked"
        this.value = this.typeId
      })
      .catch(error => {
        // 请求失败，
        console.log(error);
      })
    }
  },
  updated(){
    let that = this
    let area = document.getElementsByClassName("area")
    let area_img = document.getElementsByClassName("area_img")
    for(let i = 0;i<area.length;i++){
      (function(j){
        area_img[j].onclick = function(){
          that.count = j
          that.mo_img = that.imglist[that.count].pictureLabel
          that.mo_title = that.imglist[that.count].title
          that.mo_txt= that.imglist[that.count].caption
          that.flag = true
        }
      })(i)
    }
  },
  methods: {
    closeLog1(){
      this.flag = false
    },
    closeLog(val){
      console.log(val)
      this.imglist[val].title = this.$refs.mo_title.value
      this.imglist[val].caption = this.$refs.mo_txt.value
      this.flag = false
    },
    op(val){
      this.value = val
    },
    editor() {
        return this.$refs.myQuillEditor.quill;
    },
    onEditorReady(editor) {}, // 准备编辑器
    onEditorBlur(){}, // 失去焦点事件
    onEditorFocus(){}, // 获得焦点事件
    onEditorChange(){}, // 内容改变事件
    saveHtml(){
      let areaTxt = document.getElementsByClassName("areaTxt")
      for(var i=0; i<areaTxt.length; i ++){
         this.imglist[i].caption =  areaTxt[i].value
      }
      var txt1 = document.getElementsByClassName("text1")
      var txt2 = document.getElementsByClassName("text2")
      let url = window.location.href
      if (this.content == '' || txt1[0].value =="" || txt2[0].value=="" || this.value == '' || this.imglist.length < 3 || this.imgUrl =="" ) {
        this.opensend1()
      }else if(url.indexOf("id") >= 0){
        this.title = txt1[0].value
        this.txt = txt2[0].value
        Axios.put("/sys/device/info",{
            id:this.$route.query.id,
            title:txt1[0].value,
            summary:txt2[0].value,
            details:this.content,
            typeId:this.value,
            deviceModuleInfoList:this.imglist,
            picture:this.picture,
            picName:this.picName

        })
        .then(response => {
          // 请求成功
          this.opensend2('equipment')
        })
        .catch(error => {
          // 请求失败，
          this.opensend3()
          console.log(error);
        });
      }else{
        Axios.post("/sys/device/info",{
            title:txt1[0].value,
            summary:txt2[0].value,
            details:this.content,
            typeId:this.value,
            deviceModuleInfoList:this.imglist,
            picture:this.picture,
            picName:this.picName
        })
        .then(response => {
          // 请求成功
          this.opensend2('equipment')
        })
        .catch(error => {
          // 请求失败，
          this.opensend3()
          console.log(error);
        });
      }
    },
    tirggerFile: function(event) {
      let that = this
      that.openMask()
      let forms = document.getElementsByClassName("up")[0]
      let file1 = forms.files[0]
      let formdata1 = new FormData()
      formdata1.append('file',file1)
      formdata1.append('module','website/index/banner')
      Axios.post('/sys/file/upload',
        formdata1)
      .then(function (response) {
          that.imgUrl = response.data.data.fullPath
          that.picture = response.data.data.filePath
          that.picName = response.data.data.fileName
          that.sendVal = false
          that.openMa()
          console.log(response.data.data);
      })
      .catch(function (error) {
        that.sendVal = false
        that.opensend0()
      })
      .then(function () {
        // always executed
      })
    },

    tirggerFile1: function(event) {
      let that = this
      that.openMask()
      let forms = document.getElementsByClassName("up1")[0]
      let file2 = forms.files[0]
      let formdata2 = new FormData()
      formdata2.append('file',file2)
      formdata2.append('module','website/index/banner')
      let img = ''
      let pic = ''
      let name = ''

      Axios.post('/sys/file/upload',
        formdata2)
      .then(function (response) {
          img = response.data.data.fullPath
          pic = response.data.data.filePath
          name = response.data.data.fileName
          that.sendVal = false
          that.openMa()
      })
      .then(()=>{
        let txt = document.getElementsByClassName("mo_txt")
        if(txt.length < 1 ){
          let obj ={
            pictureLabel:img,
            picName:name,
            picture:pic,
            title:"",
            caption:""
          }
          that.imglist.push(obj)
        }
        else {
          let index = txt.length - 1
          let obj ={
            pictureLabel:img,
            picName:name,
            picture:pic,
            title:"",
            caption:""
          }
          if(that.imglist.length>4){
            that.imglist.splice(0,1)
            that.imglist.push(obj)
          }else{
            that.imglist.push(obj)
          }
        }
      })
      .catch(function (error) {
        that.sendVal = false
        that.opensend0()
        console.log(error);
      })
      .then(function () {
        // always executed
      })
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
          this.router_name = val
        },
        opensend0() {
          this.send0 = true;
        },
        opensend3() {
          this.send3 = true;
        },
        clickCancel(val) {
        },
        clickDanger() {
        },
        clickConfirm(val) {
          this.$router.push(val)
        },
    openImg() {
      this.$refs.input.click();
    },
    openImg1() {
      this.$refs.input1.click();
    },
    del(val) {
    	this.imglist.splice(val,1)
    },
    goBack(){
    	this.$router.go(-1);
    }
  }
}
</script>
