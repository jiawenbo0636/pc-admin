<template>
	<div class="newban">
		<dialog-bar v-model="sendVal" type="default" title="上传图片" :cancel="clickCancel()"></dialog-bar>
		<dialog-bar v-model="send" type="confirm" title="上传图片" content="图片上传成功!" :cancel="clickCancel()" ></dialog-bar>
    <dialog-bar v-model="send0" type="confirm" title="上传图片" content="图片上传失败!" :cancel="clickCancel()" ></dialog-bar>
		<dialog-bar v-model="send1" type="confirm" title="新建案例" content="您还有选项未填完!" :cancel="clickCancel()" ></dialog-bar>
		<dialog-bar v-model="send2" type="confirm" title="新建案例" content="提交成功!" :cancel="clickCancel()" @confirm="clickConfirm(name)"></dialog-bar>
    <dialog-bar v-model="send3" type="confirm" title="新建案例" content="提交失败!" :cancel="clickCancel()"></dialog-bar>
		<div class="content">
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
      	<div>图片</div>
          <input class="up" v-show="false" type="file" accept="image/*" @change="tirggerFile($event)" ref="input" />
          <div class="clearfix">
          	<div class="model_pic"@click="openImg"></div>
      	    <div v-show="imgUrl" style="width:125px;height:125px;text-align:center;position:relative">
      	     	<!-- <span class="del">删除</span> -->
      	      <img style="height:100%;width:100%;" :src="imgUrl" />
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
.newban{
  padding: 80px 40px 40px 40px;
  min-width: 1000px;
  .content{
    background-color: #fff;
    border-radius: 8px 8px 0 0;
    padding: 25px 30px;
  }
	p{
		margin-bottom: 40px;
		span{
			display: inline-block;
      font-size: 18px;
      color: #333;
		}
		input{
			width: 70%;
			height: 40px;
			margin-left:50px;
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
		div{
			float: left;
      font-size: 18px;
			margin-right:50px;
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
		background-color: #000;
		color: #fff;
		cursor: pointer;
		position: absolute;
		top: -10px;
		right: -10px;
	}
	.text1,.text2{
		padding-left:10px;
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
     	file:{},
     	isSelectFile: true,
     	title:'',
     	txt:'',
      	imgUrl:'',
        content: '',
        name:'',
        editorOption: {
          /*modules:{
            toolbar:[
              ['bold', 'italic', 'underline', 'strike'],    //加粗，斜体，下划线，删除线
              ['blockquote', 'code-block'],     //引用，代码块


              [{ 'header': 1 }, { 'header': 2 }],        // 标题，键值对的形式；1、2表示字体大小
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],     //列表
              [{ 'script': 'sub'}, { 'script': 'super' }],   // 上下标
              [{ 'indent': '-1'}, { 'indent': '+1' }],     // 缩进
              [{ 'direction': 'rtl' }],             // 文本方向


              [{ 'size': ['small', false, 'large', 'huge'] }], // 字体大小
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],     //几级标题


              [{ 'color': [] }, { 'background': [] }],     // 字体颜色，字体背景颜色
              [{ 'font': [] }],     //字体
              [{ 'align': [] }],    //对齐方式


              ['clean'],    //清除字体样式
              ['image','video']    //上传图片、上传视频

            ]
          },  */
          theme:"snow"
        }
     }
  },
  created(){
    let txt1 = document.getElementsByClassName("text1")
    let txt2 = document.getElementsByClassName("text2")
    let url = window.location.href
    if(url.indexOf("id") >= 0 ) {
      Axios.get("/sys/cases/info",{
          params: {
            id: this.$route.query.id
          }
      })
      .then(response => {
        // 请求成功
        txt1[0].value = response.data.data.title
        txt2[0].value = response.data.data.summary
        this.content = response.data.data.details
        this.imgUrl = response.data.data.pictureLabel
      })
      .catch(error => {
        // 请求失败，
        console.log(error);
      })
    }
  },
  methods: {
    editor() {
        return this.$refs.myQuillEditor.quill;
    },
    onEditorReady(editor) {}, // 准备编辑器
    onEditorBlur(){}, // 失去焦点事件
    onEditorFocus(){}, // 获得焦点事件
    onEditorChange(){}, // 内容改变事件
    saveHtml(){
      var txt1 = document.getElementsByClassName("text1")
      var txt2 = document.getElementsByClassName("text2")
      let url = window.location.href
      if (this.content == '' || txt1[0].value =="" || txt2[0].value=="" || this.imgUrl == "") {
        this.opensend1()
      }else if(url.indexOf("id") >= 0){
        this.title = txt1[0].value
        this.txt = txt2[0].value
        Axios.put("/sys/cases/info",{
            id: this.$route.query.id,
            title:txt1[0].value,
            summary:txt2[0].value,
            details:this.content,
            picture:this.picture,
            picName:this.picName
        })
        .then(response => {
          // 请求成功
          this.opensend2('case')
        })
        .catch(error => {
          // 请求失败，
          this.opensend3()
          console.log(error);
        });
      }else{
        Axios.post("/sys/cases/info",{
            title:txt1[0].value,
            summary:txt2[0].value,
            details:this.content,
            picture:this.picture,
            picName:this.picName
        })
        .then(response => {
          // 请求成功
          this.opensend2('case')
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
      let file = forms.files[0]
      let formdata = new FormData()
      formdata.append('file',file)
      formdata.append('module','website/index/case')
      Axios.post('/sys/file/upload',
        formdata)
      .then(function (response) {
          that.imgUrl = response.data.data.fullPath
          that.picture = response.data.data.filePath
          that.picName = response.data.data.fileName
          that.sendVal = false
          that.openMa()
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
        this.name = val
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
	    delImg(val) {
	    	this.imgUrl.splice(val,1)
	    },
	    goBack(){
	    	this.$router.go(-1);
	    }
    }
}
</script>
