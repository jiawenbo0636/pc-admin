<template>
	<div class="newcopy">
     <dialog-bar v-model="send" type="confirm" title="新建文案" content="提交失败!" :cancel="clickCancel()" ></dialog-bar>
    <dialog-bar v-model="send1" type="confirm" title="新建文案" content="您还有选项未填完!" :cancel="clickCancel()" ></dialog-bar>
    <dialog-bar v-model="send2" type="confirm" title="新建文案" content="提交成功!" :cancel="clickCancel()" @confirm="clickConfirm(name)"></dialog-bar>
		<div class="content">
      <div class="type">
        <span>类型</span>
        <label name="type_label" v-for="type in typelists" ><input @click="op(type.id)" name="copy" type="radio"/>{{type.name}}</label>
      </div>
      <p v-show="value == 'cd5837c0826233368384722df53d7b49'"><span>名称</span><input type="text" placeholder="请输入名称" class="text"></p>
      <div class="edit clearfix">
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
.newcopy{
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
		margin-bottom:40px;
    height: 40px;
		span{
			display: inline-block;
		}
		input{
			width: 70%;
			height: 38px;
      line-height: 38px;
			margin-left:50px;
      padding-left: 10px;
		}
	}
	.bottom{
		text-align: right;
    margin-top: 50px;
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
      id: '',
      title: '',
      state: 0,
      content: '您确定上架吗？',
      content1: '您确定下架吗？',
      type: 'danger',
      sendVal: false,
      send: false,
      send1:false,
      send2:false,
      details:{},
      value:'',
      copy:'',
      flag:'',
      index:'',
      file:{},
      name:'',
      isSelectFile: true,
      typelists:[
        {
          id:'',
          name:''
        }
      ],
      title:'',
      txt:'',
      imgUrl: [],
      content: '',
      editorOption: {
        theme:"snow"
      }
    }
  },
  created(){
    Axios.get("/sys/copywrit/type/list")
    .then(response => {
      // 请求成功
      this.typelists = response.data.data
      console.log(response.data.data)
    })
    .catch(error => {
      // 请求失败，
      console.log(error);
    })
    let txt1 = document.getElementsByClassName("text")
    let url = window.location.href
    let mum
    if(url.indexOf("id") >= 0 ) {
      Axios.get("/sys/copywrit/info",{
          params: {
            id: this.$route.query.id
          }
      })
      .then(response => {
        // 请求成功
        let obj = document.getElementsByName("copy");
        txt1[0].value = response.data.data.name
        this.content = response.data.data.details
        this.typeId = response.data.data.typeId
        this.value = response.data.data.typeId
        for(var i=0; i<this.typelists.length; i ++){
          if(this.typelists[i].id == this.typeId){
                mum = i
          }
        }
        obj[mum].checked = "checked"
      })
      .catch(error => {
        // 请求失败，
        console.log(error);
      })
    }
  },
  mounted(){
    let url = window.location.href
     if(url.indexOf("id") >= 0 ) {
       let type_1 = document.getElementsByClassName("type")[0]
        type_1.style.display = "none"
     }
  },
  methods: {
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
      let url = window.location.href
      let txt1 = document.getElementsByClassName("text")
      if ( this.content == '' ||  this.value == "" ) {
        this.opensend1()
      }else if( this.value == 'cd5837c0826233368384722df53d7b49' && this.content == '' ||  txt1[0].value == "" ){
        this.opensend1()
      }else if(url.indexOf("id") >= 0){
        Axios.put("/sys/copywrit/info",{
            name:txt1[0].value,
            typeId:this.value,
            details:this.content,
        })
        .then(response => {
          // 请求成功
          this.opensend2('copywriting')
        })
        .catch(error => {
          // 请求失败，
          this.openMa()
          console.log(error);
        });
      }else{
        Axios.post("/sys/copywrit/info",{
            name:txt1[0].value,
            typeId:this.value,
            details:this.content
        })
        .then(response => {
          // 请求成功
          this.opensend2('copywriting')
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
          this.name =val
        },
        clickCancel(val) {
        },
        clickDanger() {
        },
        clickConfirm(val) {
          this.$router.push(val)
        },
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>
