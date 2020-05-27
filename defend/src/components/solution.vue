<template>
	<div class="sol">
		<div class="content">
      <div class="tab">
      	<ul>
      		<li>
      			<span>姓名</span>
      			<span>手机号</span>
      			<span>社区名称</span>
      			<span>楼栋数</span>
      			<span>地上单元数</span>
            <span>地下单元数</span>
            <span>电梯数</span>
            <span>时间</span>
      		</li>
      	</ul>
      </div>
      <div v-show="lists.length==0" style="height: 600px; text-align: center;">
        <img src="../assets/img/none.png" alt="" style="margin-top:150px;width:250px;">
      </div>
      <div v-show="shown" class="lie">
      	<li v-for="(list,index) in lists" :key="index">
      	  <span>{{list.name}}</span>
          <span>{{list.telephone}}</span>
          <span>{{list.communityName}}</span>
      		<span>{{list.tenement}}</span>
          <span>{{list.overground}}</span>
          <span>{{list.underground}}</span>
          <span>{{list.liftNum}}</span>
          <span>{{list.createTime}}</span>
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
.sol{
  padding: 40px;
  min-width: 1000px;
  .content{
    padding: 25px 30px;
    background-color: #fff;
    border-radius: 13px;
    min-height: 600px;
    text-align: center;
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
      flex: .6;
      text-align: center;
      overflow: hidden;
    }
    span:nth-child(2){
      flex: .8;
    }
    span:nth-child(3){
      flex: 1;
    }
    span:last-child{
      flex: .8;
    }
  }
	.lie{
		min-height: 600px;
    li:nth-child(2n){
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
		}
	}
  .title{
    display: flex;
    margin-bottom: 17px;
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
export default {
	data(){
		return{
			keyword: '',
			arr:'',
			shown:false,
			index:'',
      total:0,
      current:1,
      pages:0,
			num:5,
			lists:[
				/* {
          name:'',
          telephone:'',
          communityName:'',
          tenement:'',
          overground:'',
          underground:'',
          liftNum:'',
          createTime:''
        } */
			]
		}
	},
	created(){
    Axios.get("/sys/inquiry/page",{
      params:{
        page:1,
        size:this.num
      }
    })
      .then(response => {
        // 请求成功
        this.lists = response.data.data.records
        this.total = parseInt(response.data.data.total)
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
    changepage(index){
      this.current = index
      Axios.get("/sys/inquiry/page", {
        params: {
          page: index,
          size: this.num,
          title: this.keyword
        }
      })
      .then(response => {
        // 请求成功
        this.lists = response.data.data.records
        this.total = parseInt(response.data.data.total)
      })
      .catch(error => {
        // 请求失败，
        console.log(error);
      });
    }
	}
}
</script>
