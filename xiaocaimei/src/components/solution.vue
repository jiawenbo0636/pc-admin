<template>
	<div>
		<div class="pic">
      <img src="../assets/img/28.png" alt="">
    </div>
		<div class="container">
			<div class="sol">
				<div class="sol_title">
					<span class="but">个人用户解决方案</span><span class="but active">企业用户解决方案</span>
					<p class="clearfix">
						<img src="../assets/img/26.png" alt="">
					</p>
          <p>
            <router-link :to="'enquire'"><img style="display: inline-block;" src="../assets/img/27.png" alt="">询价</router-link>
          </p>
				</div>
				<div class="per_sol">
          个人用户询价
				</div>
				<div class="bus_sol sol_active">
					<table v-for="data in data1">
						<caption class="tab_name">{{data.system}}</caption>
						<tr>
						<th>{{data.title.name}}</th>
						<th>{{data.title.type}}</th>
						<th>{{data.title.unit}}</th>
						<th>{{data.title.number}}</th>
						<th>{{data.title.unitPrice}}</th>
						<th>{{data.title.monthPrice}}</th>
						<th>{{data.title.threePrice}}</th>
						<th>{{data.title.remarks}}</th>
						</tr>
						<tr v-for="list in data.lists">
						<td>{{list.name}}</td>
						<td>{{list.type}}</td>
						<td>{{list.unit}}</td>
						<td>{{list.number}}</td>
						<td>{{list.unitPrice}}</td>
						<td>{{list.unitPrice}}</td>
						<td>{{list.unitPrice*36}}</td>
						<td>{{list.remarks}}</td>
						</tr>
						<tr>
						<td>小计</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less">
.pic{
	width: 100%;
	height: 550px;
	max-width: 1920px;
	margin: 0 auto;
  position: relative;
}
.sol{
	margin-top: 40px;
	margin-bottom: 89px;
	.active{
		background-color: #21B2FD;
		color: #fff;
	}
	.per_sol,.bus_sol{
		display: none;
	}
	.sol_active{
		display: block;
	}
	.sol_title{
		position: relative;
		text-align: center;
		font-size: 20px;
		color: #21B2FD;
    .but{
      cursor: pointer;
    }
		span{
			display: inline-block;
			width: 181px;
			height: 45px;
			line-height: 47px;
			border: 1px solid #21B2FD;
			margin-right: -1px;
      margin-bottom: 20px;
		}
		p{
			width: 100%;
			height: 15px;
			text-align: center;
			img{
				width: 648px;
				height: 15px;
			}
			a{
				display: inline-block;
				width: 120px;
				height: 35px;
        line-height: 35px;
				border-radius: 20px;
				text-decoration: none;
				color: #fff;
				background-color: #21B2FD;
				float: right;
				margin-right: 10px;
        margin-bottom: 20px;
				img{
					width: 21px;
					height: 20px;
					margin-right: 6px;
          margin-bottom: 5px;
          vertical-align: middle;
				}
			}
		}
	}
	table{
		width: 100%;
		.tab_name{
			height: 68px;
			line-height: 68px;
			color: #3D6BFF;
			font-size: 26px;
			background-color: #BFD6FF;
		}
    tr{
    	th:last-child{
    		width: 300px;
    	}
    }
		th,td{
			text-align: left;
			padding-left: 14px;
			border: 1px solid #999;
		}
		th{
			font-size: 20px;
			height: 55px;
			border-top: none;
			font-weight: normal;
			color: #666;
		}
		td{
			height: 73px;
			font-size: 16px;
			color: #333;
		}
		tr:nth-child(2n){
			background-color: #F5FDFF;
		}

	}
}
</style>
<script>
const axios = require('axios');
	export default{
		data(){
			return{
				data1:[
				{
					system:"物业管理系统",
					title:{
						name:'产品名称',
						type:'型号/品牌',
						unit:'单位',
						number:'数量',
						unitPrice:'月服务单价',
						monthPrice:'月服务费',
						threePrice:'三年服务费',
						remarks:'备注'
					},
					lists:[
					{
						name:'物业主控制台',
						type:'XCM-WR-A01',
						unit:'套',
						number:'1',
						unitPrice:'700',
						monthPrice:'',
						threePrice:'',
						remarks:'双联机柜（路由器、交换机、OLT、AI服务器等'
					},
					{
						name:'物业管理系统终端',
						type:'XCM-WGD-A10',
						unit:'台',
						number:'1',
						unitPrice:'500',
						monthPrice:'',
						threePrice:'',
						remarks:'社区物管、背景音乐管理，业主/物业认证、门禁、电梯管理车辆、车位管理'
					},
					{
						name:'监控管理系统终端',
						type:'XCM-SMD-A01',
						unit:'台',
						number:'1',
						unitPrice:'100',
						monthPrice:'',
						threePrice:'',
						remarks:'视频监控设置、监看、回放'
					}
					]
				},
				{
					system:"人行管理系统",
					title:{
						name:'产品名称',
						type:'型号/品牌',
						unit:'单位',
						number:'数量',
						unitPrice:'月服务单价',
						monthPrice:'月服务费',
						threePrice:'三年服务费',
						remarks:'备注'
					},
					lists:[
					{
						name:'数字门禁终端',
						type:'XCM-RS-A01',
						unit:'台',
						number:'1',
						unitPrice:'80',
						monthPrice:'',
						threePrice:'',
						remarks:'社区主、次出入口（人脸、二维码、密码、NFC）'
					},
					{
						name:'数字门禁终端',
						type:'XCM-RS-B01',
						unit:'台',
						number:'1',
						unitPrice:'60',
						monthPrice:'',
						threePrice:'',
						remarks:'地上、地下单元门口（人脸、二维码、密码、NFC）'
					},
					{
						name:'数字门禁终端',
						type:'XCM-RS-C01',
						unit:'台',
						number:'1',
						unitPrice:'40',
						monthPrice:'',
						threePrice:'',
						remarks:'电梯轿厢（人脸、二维码、密码、NFC）'
					},
					{
						name:'立式支架',
						type:'XCM-ZJ-A01',
						unit:'个',
						number:'1',
						unitPrice:'10',
						monthPrice:'',
						threePrice:'',
						remarks:'高1.5米、直径140'
					},
					{
						name:'壁挂支架',
						type:'XCM-ZJ-B01',
						unit:'个',
						number:'1',
						unitPrice:'4',
						monthPrice:'',
						threePrice:'',
						remarks:'可左右旋转'
					},
					{
						name:'单元门自动开门机',
						type:'XCM-RK-A01',
						unit:'台',
						number:'1',
						unitPrice:'30',
						monthPrice:'',
						threePrice:'',
						remarks:'地上单元门口（含电磁锁、雷达、出门按钮）'
					},
					{
						name:'防火门自动开门机',
						type:'XCM-RK-B01',
						unit:'台',
						number:'1',
						unitPrice:'30',
						monthPrice:'',
						threePrice:'',
						remarks:'地下单元门口（含电磁锁、雷达、出门按钮）'
					},
					{
						name:'自动广告门',
						type:'XCM-RK-C01',
						unit:'樘',
						number:'1',
						unitPrice:'100',
						monthPrice:'',
						threePrice:'',
						remarks:'社区主、次出入口'
					}
					]
				},
				{
					system:"车行管理系统",
					title:{
						name:'产品名称',
						type:'型号/品牌',
						unit:'单位',
						number:'数量',
						unitPrice:'月服务单价',
						monthPrice:'月服务费',
						threePrice:'三年服务费',
						remarks:'备注'
					},
					lists:[
					{
						name:'智慧停车场控制主机',
						type:'XCM-CK-A01',
						unit:'套',
						number:'1',
						unitPrice:'750',
						monthPrice:'',
						threePrice:'',
						remarks:'单进或单出（支持车牌识别、ETC、人脸支付、二维码支付、密码支付、NFC支付、含闸机'
					},
					{
						name:'智慧停车场控制主机',
						type:'XCM-CK-B01',
						unit:'套',
						number:'1',
						unitPrice:'350',
						monthPrice:'',
						threePrice:'',
						remarks:'单进或单出（支持车牌识别、人脸支付、二维码支付、密码支付、NFC支付、含闸机）'
					},
					{
						name:'智慧停车场控制主机',
						type:'XCM-CK-C01',
						unit:'套',
						number:'1',
						unitPrice:'200',
						monthPrice:'',
						threePrice:'',
						remarks:'单进或单出（支持车牌识别、含闸机）'
					}
					]
				},
				{
					system:"视频监控系统",
					title:{
						name:'产品名称',
						type:'型号/品牌',
						unit:'单位',
						number:'数量',
						unitPrice:'月服务单价',
						monthPrice:'月服务费',
						threePrice:'三年服务费',
						remarks:'备注'
					},
					lists:[
					{
						name:'摄像终端',
						type:'XCM-IPC-A01',
						unit:'台',
						number:'1',
						unitPrice:'35',
						monthPrice:'',
						threePrice:'',
						remarks:'社区地上（日夜全彩、人脸抓拍）'
					},
					{
						name:'摄像终端',
						type:'XCM-IPC-B01',
						unit:'台',
						number:'1',
						unitPrice:'30',
						monthPrice:'',
						threePrice:'',
						remarks:'地下车库（日夜全彩、人脸抓拍）'
					},
					{
						name:'摄像终端',
						type:'XCM-WR-C01',
						unit:'台',
						number:'1',
						unitPrice:'25',
						monthPrice:'',
						threePrice:'',
						remarks:'地上、地下单元门口、储藏间（日夜全彩、人脸抓拍）'
					},
				  {
				  	name:'摄像终端',
				  	type:'XCM-WR-D01',
				  	unit:'台',
				  	number:'1',
				  	unitPrice:'25',
				  	monthPrice:'',
				  	threePrice:'',
				  	remarks:'电梯轿厢（日夜全彩、人脸抓拍）'
				  },
					{
						name:'监视器',
						type:'86寸',
						unit:'台',
						number:'1',
						unitPrice:'800',
						monthPrice:'',
						threePrice:'',
						remarks:'86寸'
					},
					{
						name:'摄像机立柱',
						type:'XCM-JZ-A01 ',
						unit:'根',
						number:'1',
						unitPrice:'40',
						monthPrice:'',
						threePrice:'',
						remarks:'社区地上 3.5米六角杆'
					}
					]
				},
				{
					system:"背景音乐系统",
					title:{
						name:'产品名称',
						type:'型号/品牌',
						unit:'单位',
						number:'数量',
						unitPrice:'月服务单价',
						monthPrice:'月服务费',
						threePrice:'三年服务费',
						remarks:'备注'
					},
					lists:[
					{
						name:'网络音箱',
						type:'XCM-GB-A01',
						unit:'台',
						number:'1',
						unitPrice:'15',
						monthPrice:'',
						threePrice:'',
						remarks:'背景音乐、公共广播'
					}
					]
				},
				{
					system:"网络及控制系统",
					title:{
						name:'产品名称',
						type:'型号/品牌',
						unit:'单位',
						number:'数量',
						unitPrice:'月服务单价',
						monthPrice:'月服务费',
						threePrice:'三年服务费',
						remarks:'备注'
					},
					lists:[
					{
						name:'节点网络控制器',
						type:'XCM-KZ-A01',
						unit:'套',
						number:'1',
						unitPrice:'80',
						monthPrice:'',
						threePrice:'',
						remarks:'地上无线覆盖'
					},
					{
						name:'节点网络控制器',
						type:'XCM-KZ-B01',
						unit:'套',
						number:'1',
						unitPrice:'80',
						monthPrice:'',
						threePrice:'',
						remarks:'地下无线覆盖'
					},
					{
						name:'节点网络控制器',
						type:'XCM-KZ-C01',
						unit:'套',
						number:'1',
						unitPrice:'20',
						monthPrice:'',
						threePrice:'',
						remarks:'每部电梯1套'
					},
					{
						name:'终端网络中继器',
						type:'XCM-KZ-D01',
						unit:'套',
						number:'1',
						unitPrice:'10',
						monthPrice:'',
						threePrice:'',
						remarks:'地上、地下无线中继'
					},
					{
						name:'ONU',
						type:'厂家型号',
						unit:'台',
						number:'1',
						unitPrice:'5',
						monthPrice:'',
						threePrice:'',
						remarks:'按方案匹配'
					},
					{
						name:'电梯网桥',
						type:'厂家型号',
						unit:'对',
						number:'1',
						unitPrice:'15',
						monthPrice:'',
						threePrice:'',
						remarks:'每部电梯1对'
					}
					]
				}
				]
			}
		},
		mounted () {
			axios.get('/api/personal/list')
			.then(function (response) {
			// handle success
			})
			.catch(function (error) {
			// handle error
			console.log(error);
			})
			.then(function () {
			// always executed
			});

			var calcTotal=function(table,column){
				//合计，表格对象，对哪一列进行合计，第一列从0开始
		        var trs=table.getElementsByTagName('tr');
		        var start=1,//忽略第一行的表头
		        end=trs.length-1;//忽略最后合计的一行
		        var total=0;
		        for(var i=start;i<end;i++){
		            var td=trs[i].getElementsByTagName('td')[column];
		            var t=parseFloat(td.innerHTML);
		            if(t)total+=t;
		        }
		        trs[end].getElementsByTagName('td')[column].innerHTML=total;
		    };
		    let tables = document.getElementsByTagName('table')
		    for (var i = 0; i < tables.length; i++) {
		    	calcTotal(document.getElementsByTagName('table')[i],5);
		    	calcTotal(document.getElementsByTagName('table')[i],6);
		    }
			let but = document.getElementsByClassName("but");
			let per = document.getElementsByClassName("per_sol");
			let bus = document.getElementsByClassName("bus_sol");
			but[0].onclick = function(){
				but[0].classList.add("active")
				but[1].classList.remove("active")
				bus[0].classList.remove("sol_active")
				per[0].classList.add("sol_active")
			}
			but[1].onclick = function(){
				but[1].classList.add("active")
				but[0].classList.remove("active")
				per[0].classList.remove("sol_active")
				bus[0].classList.add("sol_active")
			}
		},
		methods:{
		}
	}
</script>
