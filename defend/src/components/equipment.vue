<template>
	<div class="ment">
		<div class="title">
      <p>
        <img @click="search()" src="../assets/img/search.png" />
      	<input @input="keyup($event)" ref="text" type="text" placeholder="请输入名称" v-model="keyword">
      </p>

      <p>
        <span>类型:</span>
      	<select>
          <option name="jia" value="全部设备">全部设备</option>
          <option name="jia" v-for="list in type1" :value="list.id">{{list.name}}</option>
        </select>
      </p>
      <h1><span>
      <router-link :to="'newments'">
        <img src="../assets/img/new.png" />新建
      </router-link></span></h1>
    </div>
		<div class="content">
      <div class="tab">
      	<ul>
      		<li>
      			<span>名称</span>
      			<span>图片</span>
      			<span>创建时间</span>
      			<span>状态</span>
      			<span>操作</span>
      		</li>
      	</ul>
      </div>
      <div class="lie">
        <div v-show="lists.length==0" style="height: 600px; text-align: center;">
          <img src="../assets/img/none.png" alt="" style="margin-top:150px;width:250px;">
        </div>
        <dialog-bar v-model="sendVal" type="confirm" :title="title" :content="state==0?content:content1" :cancel="clickCancel()" @danger="del(id)"  @confirm="upper(id)"></dialog-bar>
        <dialog-bar v-model="send" type="danger" :title="title" content="您确定要删除吗？" :cancel="clickCancel()" @danger="del(id)"  @confirm="upper(id)"></dialog-bar>
        <dialog-bar v-model="send1" type="confirm" :title="title" content="您确定要置顶吗？" :cancel="clickCancel()" @confirm="istop(id)"></dialog-bar>
          <li v-for="(list,index) in lists">
            <span>{{list.title}}</span>
            <span><img class="erro" :src="list.pictureLabel" /></span>
            <span>{{list.createTime}}</span>
            <span v-if="list.whether == 1" style="color:#05B322">已上架</span>
            <span v-else style="color:#999">已下架</span>
            <span class="handle">
              <span>
                <router-link :to="{name:'newments',query:{id:list.id}}">
                  <img src="../assets/img/edit.png" />
                </router-link>
              </span>
              <span>
                <router-link :to="{name:'mentdetails',query:{id:list.id}}">
                  <img src="../assets/img/See.png" />
                </router-link>
              </span>
              <span v-if="list.whether == 1" @click="openMask(list)">
                <img src="../assets/img/down.png" /></span>
              <span v-else @click="openMask(list)">
                <img src="../assets/img/up.png" /></span>
              <span v-if="list.whether == 0" @click="openMa(list)">
                <img src="../assets/img/delete.png" /></span>
              <span v-else @click="open1(list)">
                 <img src="../assets/img/top.png" /></span>
            </span>
          </li>
      </div>
      <Page
      :total="total"
       :page-size="num"
      :current = "current"
       show-elevator @on-change="changepage" />
    </div>
	</div>
</template>
<style scoped lang="less">
.ment{
  padding: 40px;
  min-width: 1000px;
  .erro{
    width: 170px;
    height: 96px;
    position: relative;
  }
  .erro:after{
    content:'';
    display: inline-block;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 170px;
    height: 96px;
    background-image: url(../assets/img/pic_ban.png);
    background-size: cover;
    background-color: #fff;
  }
  .content{
    padding: 25px 30px;
    background-color: #fff;
    border-radius: 13px;
    min-height: 600px;
    text-align: center;
    .bot{
      text-align: center;
      span{
        display: inline-block;
        display: inline-block;
        cursor: pointer;
        width: 36px;
        height: 36px;
        line-height: 36px;
        border: 1px solid #999;
        margin-right: 25px;
        color: #999;
        font-size: 20px;
        text-align: center;
      }
      p{
        display: inline-block;
      }
      .goPage li {
        display: inline-block;
        cursor: pointer;
        width: 38px;
        height: 38px;
        line-height: 38px;
        border: 1px solid #999;
        margin-right: 25px;
        color: #999;
        font-size: 20px;
      }
    }
  }
  li{
    display: flex;
    line-height: 60px;
    background-color: #7094FD;
    font-size: 20px;
    color: #fff;
    border-radius: 8px 8px 0 0;
    border-bottom: none;
    span{
      display: inline-block;
      flex: 1;
      text-align: center;
    }
    span:last-child{
      flex: 2;
    }
    span:nth-child(2){
      flex: 2;
    }
    span:nth-child(3){
      flex: 1.5;
    }
  }
	.lie{
    min-height: 600px;
    li:nth-child(2n){
      background-color: #f0f0f0;
    }
		li{
      height: 140px;
			line-height: 140px;
			font-size: 18px;
      color: #333;
			background-color: #fff;
			border: 1px solid #DCDCDC;
      margin-top: -1px;
      border-radius: 0;
			span{
				display: inline-block;
        img{
          width: 170px;
          height: 96px;
          vertical-align: middle;

        }
			}
			.handle{
        text-align: center;
				span{
					cursor: pointer;
          margin-right: 30px;
          img{
            width: 22px;
            height: 24px;
            vertical-align: middle;
          }
				}
        span:first-child{
          margin-left: 30px;
        }
        span:last-child{
          margin-right: 0;
        }
			}
		}
	}
  .title{
    display: flex;
    margin-bottom: 17px;
    p{
      flex: 2;
      height: 40px;
    	border-radius: 6px;
      background-color: #fff;
      border: 1px solid #999;
      margin-right: 20px;
      span{
        display: inline-block;
        width: 25%;
        text-align: right;
        color: #273D52;
      }
      select{
        width: 70%;
        color: #273D52;
        height: 38px;
        border: none;
        background:none;
        outline:none;
        padding-left: 18%;
        option{
        }
      }
      select:focus{
      	border:none;
      }
      img{
        width: 18px;
        height: 18px;
        margin-left: 10px;
        cursor: pointer;
        vertical-align: middle;
      }
    	input{
    		height: 40px;
    		border: none;
    		background:none;
    		outline:none;
    		padding-left: 10px;
    	}
    	input:focus{
    		border:none;
    	}
    }
    h1{
      flex: 4;
      font-size: 16px;
      font-weight: normal;
    	text-align: right;
    	line-height: 40px;
      span{
        display: inline-block;
        width: 100px;
        line-height: 40px;
        text-align: center;
        background:rgba(73,119,252,1);
        border:1px solid rgba(216,226,240,1);
        border-radius:2px 2px 2px 2px;
        cursor: pointer;
        a{
          display: inline-block;
          width: 100%;
          height: 100%;
          list-style: none;
          text-decoration: none;
          color: #fff;
        }
        img{
          width: 14px;
          height: 16px;
          vertical-align: middle;
          margin-right: 10px;
          margin-top: -2px;
        }
      }
    }
  }
}

</style>

<script>
  import Axios from'../api/axios'
import dialogBar from './dialog.vue'
  export default {
    components:{
         dialogBar
     },
  inject:['reload'],
	data(){
		return{
      id:'',
      title:'',
      state:0,
      content:'您确定上架吗？',
      content1:'您确定下架吗？',
      type:'danger',
      sendVal: false,
      send:false,
      send1:false,
      shown:false,
      total:0,
      pages:0,
      current:1,
			keyword: '',
			arr:[],
			index:'',
			num:4,
      type1:[
        {
          id:'',
          name:''
        },
        {
          id:'',
          name:''
        },
        {
          id:'',
          name:''
        },
        {
          id:'',
          name:''
        }
      ],
			lists:[],
		}
	},
	created(){
    Axios.get("/sys/device/type/list")
    .then(response => {
      // 请求成功
      this.type1 = response.data.data
    })
    .catch(error => {
      // 请求失败，
      console.log(error);
    });
		Axios.get("/sys/device/page",{
		  params:{
		    page:1,
		    size:this.num
		  }
		})
		.then(response => {
		  // 请求成功
		  this.lists = response.data.data.records
      this.total = parseInt(response.data.data.total)
      this.pages = parseInt(response.data.data.pages)
      this.shown = true
		})
		.catch(error => {
		  // 请求失败，
		  console.log(error);
		});
	},
  mounted(){
    let op = document.getElementsByTagName("select")[0]
    let that =this
    op.addEventListener('change', function() {
      that.lists = []
      if( op.options[op.selectedIndex].text == "全部设备"){
        Axios.get("/sys/device/page",{
          params:{
            page:1,
            size:that.num
          }
        })
        .then(response => {
          // 请求成功
          that.lists = response.data.data.records
          that.total = parseInt(response.data.data.total)
        })
        .catch(error => {
          // 请求失败，
          console.log(error);
        })
      }else if(op.options[op.selectedIndex].text == "管理设备"){
        that.lists = []
        Axios.get("/sys/device/page",{
          params:{
            page:1,
            size:that.num,
            typeIds:op.options[op.selectedIndex].value
          }
        })
        .then(response => {
          // 请求成功
          that.lists = response.data.data.records
          that.total = parseInt(response.data.data.total)
        })
        .catch(error => {
          // 请求失败，
          console.log(error);
        })

      }else if(op.options[op.selectedIndex].text == "终端设备"){
        that.lists = []
        Axios.get("/sys/device/page",{
          params:{
            page:1,
            size:that.num,
            typeIds:op.options[op.selectedIndex].value
          }
        })
        .then(response => {
          // 请求成功
          that.lists = response.data.data.records
          that.total = parseInt(response.data.data.total)
        })
        .catch(error => {
          // 请求失败，
          console.log(error);
        })

      }else if(op.options[op.selectedIndex].text == "控制设备"){
        that.lists = []
        Axios.get("/sys/device/page",{
          params:{
            page:1,
            size:that.num,
            typeIds:op.options[op.selectedIndex].value
          }
        })
        .then(response => {
          // 请求成功
          that.lists = response.data.data.records
          that.total = parseInt(response.data.data.total)
        })
        .catch(error => {
          // 请求失败，
          console.log(error);
        })

      }else if(op.options[op.selectedIndex].text == "家庭设备"){
        that.lists = []
        Axios.get("/sys/device/page",{
          params:{
            page:1,
            size:that.num,
            typeIds:op.options[op.selectedIndex].value
          }
        })
        .then(response => {
          // 请求成功
          that.lists = response.data.data.records
          that.total = parseInt(response.data.data.total)
        })
        .catch(error => {
          // 请求失败，
          console.log(error);
        })
      }
    }, false);
  },
	methods:{
    changepage(index){
      this.current = index
      Axios.get("/sys/device/page", {
        params: {
          page: index,
          size: this.num,
          title: this.keyword
        }
      })
      .then(response => {
        // 请求成功
        this.lists = response.data.data.records
      })
      .catch(error => {
        // 请求失败，
        console.log(error);
      });
    },
    search() {
      this.current = 1
      Axios.get("/sys/device/page", {
          params: {
            page: this.current,
            size: this.num,
            title: this.keyword
          }
        })
        .then(response => {
          // 请求成功
          this.lists = response.data.data.records
          this.total = parseInt(response.data.data.total)
          this.pages = response.data.data.pages
          console.log(response.data.data)
        })
        .catch(error => {
          // 请求失败，
          console.log(error);
        });
    },
    keyup(e){
     var evt = window.$event || e;
        this.search()
    },
		upper(val){
			Axios.put(`/sys/device/whether?id=${val}`)
      .then(response => {
        // 请求成功
       /*alert("上架成功")*/
        this.reload()
      })
      .catch(error => {
        // 请求失败，
        console.log(error);
      });

		},
		del(val){
			Axios.delete("/sys/device/info",{
  			  params:{
  			    id:val
  			  }
			})
			.then(response => {
			  // 请求成功
			  this.reload()
			})
			.catch(error => {
			  // 请求失败，
			  console.log(error);
			});
		},
    istop(val){
      Axios.put(`/sys/device/stick?id=${val}`)
      .then(response => {
        // 请求成功
       /*alert("上架成功")*/
        this.reload()
      })
      .catch(error => {
        // 请求失败，
        console.log(error);
      });
    },
    openMask(list){
      this.title = list.title;
      this.state = list.whether;
      this.id = list.id;
      this.sendVal = true;
    },
    openMa(val){
      this.title = val.title;
      this.state = val.whether;
      this.id = val.id;
      this.send = true;
    },
    open1(val){
      this.title = val.title;
      this.state = val.whether;
      this.id = val.id;
      this.send1 = true;
    },
    clickCancel(val){
    },
    clickDanger(){
    },
    clickConfirm(val){
    },
	}
}
</script>
