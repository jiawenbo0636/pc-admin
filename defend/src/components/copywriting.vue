<template>
	<div class="writing">
		<div class="title">
      <h1><span @click="newcopy()">
      <img src="../assets/img/new.png" />新建</span></h1>
    </div>
		<div class="content">
      <div class="tab">
      	<ul>
      		<li>
      			<span>类型</span>
      			<span>操作</span>
      		</li>
      	</ul>
      </div>
      <div v-show="lists.length==0" style="height: 600px; text-align: center;">
        <img src="../assets/img/none.png" alt="" style="margin-top:150px;width:250px;">
      </div>
      <div v-show="shown" class="lie">
        <dialog-bar v-model="send" type="danger" :title="title" content="您确定要删除吗？" :cancel="clickCancel()" @danger="del(id)"  @confirm="upper(id)"></dialog-bar>
      	  <li v-for="(list,index) in lists" :key="index">
      	  <span>{{list.typeLabel == "业务联盟" ? list.name : list.typeLabel}}</span>
      		<span class="handle">
            <span>
              <router-link :to="{name:'newcopy',query:{id:list.id}}">
                <img src="../assets/img/edit.png" />
              </router-link>
            </span>
            <span>
              <router-link :to="{name:'writingDetails',query:{id:list.id}}">
                <img src="../assets/img/See.png" />
              </router-link>
            </span>
      			<span @click="openMa(list)">
              <img src="../assets/img/delete.png" /></span>
      		</span>
      	  </li>
      </div>
    </div>
	</div>
</template>
<style scoped lang="less">
.writing{
  padding: 40px;
  min-width: 1000px;
  .content{
    padding: 25px 30px;
    background-color: #fff;
    border-radius: 13px;
    min-height: 600px;
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
      flex: 4;
      text-align: center;
    }
    span:last-child{
      flex: 2;
    }
  }
	.lie{
		min-height: 600px;
    li:nth-child(2n+1){
      background-color: #f0f0f0;
    }
		li{
      height: 110px;
			line-height: 110px;
			font-size: 18px;
      color: #333;
			background-color: #fff;
			border: 1px solid #DCDCDC;
      margin-top: -1px;
      border-radius: 0;
			span{
				display: inline-block;
        img{
          width: 100%;
          height: 120px;
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
          margin-left: 40px;
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
      flex: 6;
      font-size: 16px;
      font-weight: normal;
    	text-align: right;
    	line-height: 40px;
      span{
        display: inline-block;
        width: 100px;
        color: #fff;
        line-height: 40px;
        text-align: center;
        background:rgba(73,119,252,1);
        border:1px solid rgba(216,226,240,1);
        border-radius:2px 2px 2px 2px;
        cursor: pointer;
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
			shown:false,
			index:'',
			num:4,
			lists:[
        /* {
          id:'',
          typeLabel:'',
        } */
			]
		}
	},
	created(){
    Axios.get("/sys/copywrit/list")
    .then(response => {
      // 请求成功
      this.lists = response.data.data
      this.shown = true
    })
    .catch(error => {
      // 请求失败，
      console.log(error);
    });
	},
  mounted(){

  },
	methods:{
		del(val){
			Axios.delete("/sys/copywrit/info",{
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
		openMa(val){
		  this.title = val.typeLabel;
		  this.id = val.id;
		  this.send = true;
		},
    newcopy(){
      this.$router.push("newcopy")
    },
		clickCancel(val){
		},
		clickDanger(){
		},
		clickConfirm(val){
		}
	}
}
</script>
