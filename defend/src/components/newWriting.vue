<template>
	<div class="newWrite">
		<div class="item">
			<span>类型</span>
			<input name="Fruit" type="radio" /><label>法律声明 </label> 
			<input name="Fruit" type="radio" /><label>隐私政策 </label> 
			<input name="Fruit" type="radio" /><label>公司简介 </label> 
			<input name="Fruit" type="radio" /><label>公司理念</label> 
			<input name="Fruit" type="radio" /><label>业务联盟</label> 
		</div>
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
			<input type="submit" value="保存" @click="saveHtml">
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
	margin-left: 60px;
	background-color: #fff;
	.quill-editor{
		height: 500px;
	}
}
.item{
	line-height: 100px;
	span{
		margin-right: 60px;
	}
}
.newWrite{
	width: 1200px;
	margin: 40px;
	padding: 60px;
	font-size: 20px;
	background-color: #f6f6f6;
	.bottom{
		text-align: right;
		padding-right: 240px;
		input{
			width: 80px;
			margin-right: 30px;
		}
	}
}
</style>

<script>
export default {
  data(){
     return {
     	isSelectFile: true,
     	title:'',
     	txt:'',
      	imgUrl: [],
        content: '',
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
  computed: {
      editor() {
          return this.$refs.myQuillEditor.quill;
      }
  },
  methods: {
        onEditorReady(editor) { // 准备编辑器
        },
        onEditorBlur(){}, // 失去焦点事件
        onEditorFocus(){}, // 获得焦点事件
        onEditorChange(){}, // 内容改变事件
        saveHtml:function(event){
        	var txt1 = document.getElementsByClassName("text1")
        	var txt2 = document.getElementsByClassName("text2")
        	if (this.content == '' || txt1.value =="" || txt2.value=="" || this.imgUrl.length == 0 ) {
        		alert("您还没有填完")
        	}else{
        		this.title = txt1[0].value
        		this.txt = txt2[0].value
       			alert("完美")
        	}
        },
        tirggerFile: function(event) {
	      let file = event.target.files[0];
	      let url ="";
	      var reader = new FileReader();
	      reader.readAsDataURL(file);
	      let that = this;
	      reader.onload = function(e) {
	        url = this.result.substring(this.result.indexOf(",") + 1);
	        let imgs = "data:image/png;base64," + url
	        if (that.imgUrl.length<= 0) {
	        	that.imgUrl.push(imgs)
	        }else{
	        	that.imgUrl.shift()
	        	that.imgUrl.push(imgs)
	        }
	        /*if (that.imgUrl.length<=2) {
	        	that.imgUrl.push(imgs)
	        }else{
	        	that.imgUrl.shift()
	        	that.imgUrl.push(imgs)
	        }*/
	        console.log(that.imgUrl.length)
	        // that.$refs['imgimg'].setAttribute('src','data:image/png;base64,'+url);
	      };
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