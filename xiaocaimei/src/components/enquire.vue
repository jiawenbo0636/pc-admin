<template>
	<div class="container">
		<div class="pie_1">
			<span>社区名称</span><input class="community" type="text">
			<span>姓名</span><input class="name" type="text">
			<span>手机号</span><input ref="phone" class="telephone" type="text" @input = "onInput5()">
      <div @click="saveTxt()" class="refer">确认</div>
		</div>
		<div class="pie_2">
			<p>大门总数 <button class="reduce">-</button><input ref="men" class="num tenement" @input = "onInput()"  type="text" value="0"><button class="plus">+</button></p>
			<p>地上单元总数 <button class="reduce">-</button><input ref="shang" class="num overground" @input = "onInput1()" type="text" value="0"><button class="plus">+</button></p>
			<p>地下单元总数 <button class="reduce">-</button><input ref="xia" class="num underground" @input = "onInput2()" type="text" value="0"><button class="plus">+</button></p>
			<p>电梯总数 <button class="reduce">-</button><input ref="ti" class="num liftNum" @input = "onInput3()" type="text" value="0"><button class="plus">+</button></p>
		</div>
		<div class="pie_3">
			<table>
				<tr>
					<th></th>
					<th></th>
					<th>月服务费</th>
					<th>三年服务费</th>
				</tr>
				<tr>
					<td>合计</td>
					<td></td>
					<td class="mon_tol">0元</td>
					<td class="ye_tol">0元</td>
				</tr>
				<tr>
					<td>合计</td>
					<td>引入合作银行服务费按50%计算</td>
					<td class="month_tol">0元</td>
					<td class="year_tol">0元</td>
				</tr>
			</table>
		</div>
		<div class="pie_4">
			<table v-for="data in data1">
				<caption class="tab_name">{{data.system}}</caption>
				<tr>
				<th>序号</th>
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
				<td><input class="xu" type="checkbox"></td>
				<td>{{list.name}}</td>
				<td>{{list.type}}</td>
				<td>{{list.unit}}</td>
				<td><button class=" down">-</button><input ref="biao" class="count_num" @input="onInput4()" :value="0"><button class="up">+</button></td>
				<td class="pie">{{list.unitPrice}}</td>
				<td class="mon_pie">0</td>
				<td class="ye_pie">0</td>
				<td>{{list.remarks}}</td>
				</tr>
				<tr>
				<td></td>
				<td>小计</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td class="month_pie"></td>
				<td class="year_pie"></td>
				<td></td>
				</tr>
			</table>
		</div>
	</div>
</template>
<style lang="less">
.pie_1{
  width:1000px;
  height: 35px;
  margin: 0 auto;
	margin-top: 56px;
	text-align: center;
	font-size: 18px;
	color: #666;
  input{
    width: 170px;
    height: 32px;
    margin:0 49px 0 8px;
  }
  .refer{
    display: inline-block;
    width: 70px;
    height: 32px;
    line-height: 32px;
    color: #fff;
    cursor: pointer;
    background-color: #21B2FD;
  }
}
.pie_2{
	width:1000px;
	margin: 0 auto;
	margin-top: 53px;
  text-align: center;
	p{
		display: inline-block;
		text-align: center;
    margin: 0 20px;
		input{
			width: 50px;
			height: 30px;
			text-align: center;
			border:none;
			background:none;
			outline:none;
		}
		input:focus{
			border:none;
		}
		button{
			width: 30px;
			height: 30px;
      color: #21B2FD;
      font-size: 20px;
		}
	}
}
.pie_3{
	margin-top: 82px;
	table{
		width: 75%;
		margin: 0 auto;
		tr:nth-child(2n+1){
			background-color: #F6FDFF;
		}
		th,td{
			border: 1px solid #E1E1E1;
		}
		th{
			font-size: 20px;
			font-weight: normal;
			color: #666;
			height: 54px;
			line-height: 54px;
			text-align: left;
			padding-left: 13px;
		}
		td{
			padding-left:13px;
			font-size: 16px;
			color: #333;
			height: 53px;
			line-height: 53px;
		}
	}
}
.pie_4{
	margin-top: 60px;
	margin-bottom: 126px;
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
			//display: flex;
			td:nth-child(7){
				max-width: 120px;
        word-wrap : break-word;
			}
      td:nth-child(8){
      	max-width: 120px;
        word-wrap : break-word;
      }
      th:last-child{
      	width: 300px;
      }
      .xu{
        width: 20px;
        height: 20px;
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
			input{
				width: 30px;
				height: 30px;
				text-align: center;
				border:none;
				background:none;
				outline:none;
			}
			input:focus{
				border:none;
			}
			button{
				width: 30px;
				height: 30px;
        color: #21B2FD;
        font-size: 20px;
			}
		}
		tr:nth-child(2n){
			background-color: #F5FDFF;
		}

	}
}
</style>
<script>
	export default{
		data(){
			return{
        number:'',
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
		mounted(){
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
      let tables = document.getElementsByClassName('pie_4')[0].children
      for (var i = 0; i < tables.length; i++) {
        calcTotal(tables[i],6);
        calcTotal(tables[i],7);
      }
			let but_reduce = document.getElementsByClassName("reduce")
			let but_plus = document.getElementsByClassName("plus")
			let but_num = document.getElementsByClassName("num")
      let pie = document.getElementsByClassName("pie")
      let mon_pie = document.getElementsByClassName("mon_pie")
      let ye_pie = document.getElementsByClassName("ye_pie")
      let count_num = document.getElementsByClassName("count_num")
      let down = document.getElementsByClassName("down")
      let up = document.getElementsByClassName("up")
      let xu = document.getElementsByClassName("xu")
      //大门总数
      but_reduce[0].onclick=function(){
        if (parseInt(but_num[0].value) <= 1 || but_num[0].value == "") {
          but_num[0].value = 0
        }else{
          but_num[0].value = parseInt(but_num[0].value) -1
          count_num[3].value = but_num[0].value
          count_num[10].value = but_num[0].value
          xu[3].checked = true
          xu[10].checked = true
          mon_pie[3].innerHTML = parseInt(but_num[0].value)*80
          mon_pie[10].innerHTML = parseInt(but_num[0].value)*100
          ye_pie[3].innerHTML = parseInt(but_num[0].value)*80*36
          ye_pie[10].innerHTML = parseInt(but_num[0].value)*100*36
          for (var i = 0; i < tables.length; i++) {
            calcTotal(tables[i],6);
            calcTotal(tables[i],7);
          }
        }
      }
      but_plus[0].onclick=function(){
        if (but_num[0].value == "") {
          but_num[0].value = 0
        }else {
          but_num[0].value = parseInt(but_num[0].value) +1
          count_num[3].value = but_num[0].value
          count_num[10].value = but_num[0].value
          xu[3].checked = true
          xu[10].checked = true
          mon_pie[3].innerHTML = parseInt(but_num[0].value)*80
          mon_pie[10].innerHTML = parseInt(but_num[0].value)*100
          ye_pie[3].innerHTML = parseInt(but_num[0].value)*80*36
          ye_pie[10].innerHTML = parseInt(but_num[0].value)*100*36
          for (var i = 0; i < tables.length; i++) {
            calcTotal(tables[i],6);
            calcTotal(tables[i],7);
          }
        }
      }
      //地上单元总数
      but_reduce[1].onclick=function(){
        if (parseInt(but_num[1].value) <= 0 || but_num[1].value == "") {
          but_num[1].value = 0
        }else{
          but_num[1].value = parseInt(but_num[1].value) -1
          count_num[8].value = but_num[1].value
          count_num[6].value = but_num[1].value
          count_num[4].value = parseInt(but_num[1].value) + parseInt(but_num[2].value)
          count_num[16].value = parseInt(but_num[1].value) + parseInt(but_num[2].value)
          xu[8].checked = true
          xu[6].checked = true
          xu[4].checked = true
          xu[16].checked = true
          mon_pie[8].innerHTML = parseInt(count_num[8].value)*30
          mon_pie[6].innerHTML = parseInt(count_num[6].value)*10
          mon_pie[4].innerHTML = parseInt(count_num[4].value)*60
          mon_pie[16].innerHTML = parseInt(count_num[16].value)*25
          ye_pie[8].innerHTML = parseInt(count_num[8].value)*30*36
          ye_pie[6].innerHTML = parseInt(count_num[6].value)*10*36
          ye_pie[4].innerHTML = parseInt(count_num[4].value)*60*36
          ye_pie[16].innerHTML = parseInt(count_num[16].value)*25*36
          for (var i = 0; i < tables.length; i++) {
            calcTotal(tables[i],6);
            calcTotal(tables[i],7);
          }
        }
      }
      but_plus[1].onclick=function(){
        if (but_num[1].value == "") {
          but_num[1].value = 0
        }else if(but_num[1].value < 999){
          but_num[1].value = parseInt(but_num[1].value) +1
          count_num[8].value = but_num[1].value
          count_num[6].value = but_num[1].value
          count_num[4].value = parseInt(but_num[1].value) + parseInt(but_num[2].value)
          count_num[16].value = parseInt(but_num[1].value) + parseInt(but_num[2].value)
          xu[8].checked = true
          xu[6].checked = true
          xu[4].checked = true
          xu[16].checked = true
          mon_pie[8].innerHTML = parseInt(count_num[8].value)*30
          mon_pie[6].innerHTML = parseInt(count_num[6].value)*10
          mon_pie[4].innerHTML = parseInt(count_num[4].value)*60
          mon_pie[16].innerHTML = parseInt(count_num[16].value)*25
          ye_pie[8].innerHTML = parseInt(count_num[8].value)*30*36
          ye_pie[6].innerHTML = parseInt(count_num[6].value)*10*36
          ye_pie[4].innerHTML = parseInt(count_num[4].value)*60*36
          ye_pie[16].innerHTML = parseInt(count_num[16].value)*25*36
          for (var i = 0; i < tables.length; i++) {
            calcTotal(tables[i],6);
            calcTotal(tables[i],7);
          }
        }
      }
      //地下单元总数
      but_reduce[2].onclick=function(){
        if (parseInt(but_num[2].value) <= 0 || but_num[2].value == "") {
          but_num[2].value = 0
        }else{
          but_num[2].value = parseInt(but_num[2].value) -1
          count_num[9].value = but_num[2].value
          count_num[7].value = but_num[2].value
          count_num[4].value = parseInt(but_num[2].value) + parseInt(but_num[1].value)
          count_num[16].value = parseInt(but_num[2].value) + parseInt(but_num[1].value)
          xu[9].checked = true
          xu[7].checked = true
          xu[4].checked = true
          xu[16].checked = true
          mon_pie[9].innerHTML = parseInt(count_num[9].value)*30
          mon_pie[7].innerHTML = parseInt(count_num[7].value)*4
          mon_pie[4].innerHTML = parseInt(count_num[4].value)*60
          mon_pie[16].innerHTML = parseInt(count_num[16].value)*25
          ye_pie[9].innerHTML = parseInt(count_num[9].value)*30*36
          ye_pie[7].innerHTML = parseInt(count_num[7].value)*4*36
          ye_pie[4].innerHTML = parseInt(count_num[4].value)*60*36
          ye_pie[16].innerHTML = parseInt(count_num[16].value)*25*36
          for (var i = 0; i < tables.length; i++) {
            calcTotal(tables[i],6);
            calcTotal(tables[i],7);
          }
        }
      }
      but_plus[2].onclick=function(){
        if (but_num[2].value == "") {
          but_num[2].value = 0
        }else if(but_num[2].value < 999){
          but_num[2].value = parseInt(but_num[2].value) +1
          count_num[9].value = but_num[2].value
          count_num[7].value = but_num[2].value
          count_num[4].value = parseInt(but_num[2].value) + parseInt(but_num[1].value)
          count_num[16].value = parseInt(but_num[2].value) + parseInt(but_num[1].value)
          xu[9].checked = true
          xu[7].checked = true
          xu[4].checked = true
          xu[16].checked = true
          mon_pie[9].innerHTML = parseInt(count_num[9].value)*30
          mon_pie[7].innerHTML = parseInt(count_num[7].value)*4
          mon_pie[4].innerHTML = parseInt(count_num[4].value)*60
          mon_pie[16].innerHTML = parseInt(count_num[16].value)*25
          ye_pie[9].innerHTML = parseInt(count_num[9].value)*30*36
          ye_pie[7].innerHTML = parseInt(count_num[7].value)*4*36
          ye_pie[4].innerHTML = parseInt(count_num[4].value)*60*36
          ye_pie[16].innerHTML = parseInt(count_num[16].value)*25*36
          for (var i = 0; i < tables.length; i++) {
            calcTotal(tables[i],6);
            calcTotal(tables[i],7);
          }
        }
      }
      //电梯总数
      but_reduce[3].onclick=function(){
        if (parseInt(but_num[3].value) <= 0 || but_num[3].value == "") {
          but_num[3].value = 0
        }else{
          but_num[3].value = parseInt(but_num[3].value) -1
          count_num[5].value = but_num[3].value
          count_num[17].value = but_num[3].value
          xu[5].checked = true
          xu[17].checked = true
          mon_pie[5].innerHTML = parseInt(but_num[3].value)*40
          mon_pie[17].innerHTML = parseInt(but_num[3].value)*20
          ye_pie[5].innerHTML = parseInt(but_num[3].value)*40*36
          ye_pie[17].innerHTML = parseInt(but_num[3].value)*20*36
          for (var i = 0; i < tables.length; i++) {
            calcTotal(tables[i],6);
            calcTotal(tables[i],7);
          }
        }
      }
      but_plus[3].onclick=function(){
        if (but_num[3].value == "") {
          but_num[3].value = 0
        }else if(but_num[3].value < 999){
          but_num[3].value = parseInt(but_num[3].value) +1
          count_num[5].value = but_num[3].value
          count_num[17].value = but_num[3].value
          xu[5].checked = true
          xu[17].checked = true
          mon_pie[5].innerHTML = parseInt(but_num[3].value)*40
          mon_pie[17].innerHTML = parseInt(but_num[3].value)*20
          ye_pie[5].innerHTML = parseInt(but_num[3].value)*40*36
          ye_pie[17].innerHTML = parseInt(but_num[3].value)*20*36
          for (var i = 0; i < tables.length; i++) {
            calcTotal(tables[i],6);
            calcTotal(tables[i],7);
          }
        }
      }
      //table列表中数字计算
      for(let i = 0;i < mon_pie.length;i++){
        (function(j){
          down[j].onclick=function(){
            if (parseInt(count_num[j].value) <= 1 || count_num[j].value == "") {
              count_num[j].value = 0
              xu[j].checked = false
              mon_pie[j].innerHTML = parseInt(pie[j].innerHTML) *parseInt(count_num[j].value)
              ye_pie[j].innerHTML = parseInt(pie[j].innerHTML) *parseInt(count_num[j].value) *36
                for (var i = 0; i < tables.length; i++) {
                calcTotal(tables[i],6);
                calcTotal(tables[i],7);
              }
            }else{
              xu[j].checked = true
              count_num[j].value = parseInt(count_num[j].value) -1
              mon_pie[j].innerHTML = parseInt(pie[j].innerHTML) *parseInt(count_num[j].value)
              ye_pie[j].innerHTML = parseInt(pie[j].innerHTML) *parseInt(count_num[j].value) *36
                for (var i = 0; i < tables.length; i++) {
                calcTotal(tables[i],6);
                calcTotal(tables[i],7);
              }
            }
          }
          up[j].onclick=function(){
            xu[j].checked = true
            if (count_num[j].value == "") {
              count_num[j].value = 0
              mon_pie[j].innerHTML = parseInt(pie[j].innerHTML) *parseInt(count_num[j].value)
              ye_pie[j].innerHTML = parseInt(pie[j].innerHTML) *parseInt(count_num[j].value) *36
              for (var i = 0; i < tables.length; i++) {
                calcTotal(tables[i],6);
                calcTotal(tables[i],7);
              }
            }else{
              count_num[j].value = parseInt(count_num[j].value) +1
              mon_pie[j].innerHTML = parseInt(pie[j].innerHTML) *parseInt(count_num[j].value)
              ye_pie[j].innerHTML = parseInt(pie[j].innerHTML) *parseInt(count_num[j].value) *36
              for (var i = 0; i < tables.length; i++) {
                calcTotal(tables[i],6);
                calcTotal(tables[i],7);
              }
            }
          }
        })(i)
      }
		},
		methods:{
      calcTotal(table,column){
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
      },
      onInput(){
        this.$refs.men.value=this.$refs.men.value.replace(/[^\d]/g,'')
        let but_reduce = document.getElementsByClassName("reduce")
        let but_plus = document.getElementsByClassName("plus")
        let but_num = document.getElementsByClassName("num")
        let pie = document.getElementsByClassName("pie")
        let mon_pie = document.getElementsByClassName("mon_pie")
        let ye_pie = document.getElementsByClassName("ye_pie")
        let count_num = document.getElementsByClassName("count_num")
        let down = document.getElementsByClassName("down")
        let up = document.getElementsByClassName("up")
        let xu = document.getElementsByClassName("xu")
        let tables = document.getElementsByClassName('pie_4')[0].children
        count_num[3].value = but_num[0].value
        count_num[10].value = but_num[0].value
        xu[3].checked = true
        xu[10].checked = true
        mon_pie[3].innerHTML = parseInt(but_num[0].value)*80
        mon_pie[10].innerHTML = parseInt(but_num[0].value)*100
        ye_pie[3].innerHTML = parseInt(but_num[0].value)*80*36
        ye_pie[10].innerHTML = parseInt(but_num[0].value)*100*36
        for (var i = 0; i < tables.length; i++) {
          this.calcTotal(tables[i],6);
          this.calcTotal(tables[i],7);
        }
      },
      onInput1(){
        this.$refs.shang.value=this.$refs.shang.value.replace(/[^\d]/g,'')
        let but_reduce = document.getElementsByClassName("reduce")
        let but_plus = document.getElementsByClassName("plus")
        let but_num = document.getElementsByClassName("num")
        let pie = document.getElementsByClassName("pie")
        let mon_pie = document.getElementsByClassName("mon_pie")
        let ye_pie = document.getElementsByClassName("ye_pie")
        let count_num = document.getElementsByClassName("count_num")
        let down = document.getElementsByClassName("down")
        let up = document.getElementsByClassName("up")
        let xu = document.getElementsByClassName("xu")
        let tables = document.getElementsByClassName('pie_4')[0].children
        count_num[8].value = but_num[1].value
        count_num[6].value = but_num[1].value
        count_num[4].value = parseInt(but_num[1].value) + parseInt(but_num[2].value)
        count_num[16].value = parseInt(but_num[1].value) + parseInt(but_num[2].value)
        xu[8].checked = true
        xu[6].checked = true
        xu[4].checked = true
        xu[16].checked = true
        mon_pie[8].innerHTML = parseInt(count_num[8].value)*30
        mon_pie[6].innerHTML = parseInt(count_num[6].value)*10
        mon_pie[4].innerHTML = parseInt(count_num[4].value)*60
        mon_pie[16].innerHTML = parseInt(count_num[16].value)*25
        ye_pie[8].innerHTML = parseInt(count_num[8].value)*30*36
        ye_pie[6].innerHTML = parseInt(count_num[6].value)*10*36
        ye_pie[4].innerHTML = parseInt(count_num[4].value)*60*36
        ye_pie[16].innerHTML = parseInt(count_num[16].value)*25*36
        for (var i = 0; i < tables.length; i++) {
          this.calcTotal(tables[i],6);
          this.calcTotal(tables[i],7);
        }
      },
      onInput2(){
        this.$refs.xia.value=this.$refs.xia.value.replace(/[^\d]/g,'')
        let but_reduce = document.getElementsByClassName("reduce")
        let but_plus = document.getElementsByClassName("plus")
        let but_num = document.getElementsByClassName("num")
        let pie = document.getElementsByClassName("pie")
        let mon_pie = document.getElementsByClassName("mon_pie")
        let ye_pie = document.getElementsByClassName("ye_pie")
        let count_num = document.getElementsByClassName("count_num")
        let down = document.getElementsByClassName("down")
        let up = document.getElementsByClassName("up")
        let xu = document.getElementsByClassName("xu")
        let tables = document.getElementsByClassName('pie_4')[0].children
        count_num[9].value = but_num[2].value
        count_num[7].value = but_num[2].value
        count_num[4].value = parseInt(but_num[2].value) + parseInt(but_num[1].value)
        count_num[16].value = parseInt(but_num[2].value) + parseInt(but_num[1].value)
        xu[9].checked = true
        xu[7].checked = true
        xu[4].checked = true
        xu[16].checked = true
        mon_pie[9].innerHTML = parseInt(count_num[9].value)*30
        mon_pie[7].innerHTML = parseInt(count_num[7].value)*4
        mon_pie[4].innerHTML = parseInt(count_num[4].value)*60
        mon_pie[16].innerHTML = parseInt(count_num[16].value)*25
        ye_pie[9].innerHTML = parseInt(count_num[9].value)*30*36
        ye_pie[7].innerHTML = parseInt(count_num[7].value)*4*36
        ye_pie[4].innerHTML = parseInt(count_num[4].value)*60*36
        ye_pie[16].innerHTML = parseInt(count_num[16].value)*25*36
        for (var i = 0; i < tables.length; i++) {
          this.calcTotal(tables[i],6);
          this.calcTotal(tables[i],7);
        }
      },
      onInput3(){
        this.$refs.ti.value=this.$refs.ti.value.replace(/[^\d]/g,'')
        let but_reduce = document.getElementsByClassName("reduce")
        let but_plus = document.getElementsByClassName("plus")
        let but_num = document.getElementsByClassName("num")
        let pie = document.getElementsByClassName("pie")
        let mon_pie = document.getElementsByClassName("mon_pie")
        let ye_pie = document.getElementsByClassName("ye_pie")
        let count_num = document.getElementsByClassName("count_num")
        let down = document.getElementsByClassName("down")
        let up = document.getElementsByClassName("up")
        let xu = document.getElementsByClassName("xu")
        let tables = document.getElementsByClassName('pie_4')[0].children
        count_num[5].value = but_num[3].value
        count_num[17].value = but_num[3].value
        xu[5].checked = true
        xu[17].checked = true
        mon_pie[5].innerHTML = parseInt(but_num[3].value)*40
        mon_pie[17].innerHTML = parseInt(but_num[3].value)*20
        ye_pie[5].innerHTML = parseInt(but_num[3].value)*40*36
        ye_pie[17].innerHTML = parseInt(but_num[3].value)*20*36
        for (var i = 0; i < tables.length; i++) {
          this.calcTotal(tables[i],6);
          this.calcTotal(tables[i],7);
        }
      },
      onInput4(){
        let but_reduce = document.getElementsByClassName("reduce")
        let but_plus = document.getElementsByClassName("plus")
        let but_num = document.getElementsByClassName("num")
        let pie = document.getElementsByClassName("pie")
        let mon_pie = document.getElementsByClassName("mon_pie")
        let ye_pie = document.getElementsByClassName("ye_pie")
        let count_num = document.getElementsByClassName("count_num")
        let down = document.getElementsByClassName("down")
        let up = document.getElementsByClassName("up")
        let xu = document.getElementsByClassName("xu")
        let tables = document.getElementsByClassName('pie_4')[0].children
         this.checked = true
        for(let j = 0;j < count_num.length;j++){
            count_num[j].value=count_num[j].value.replace(/[^\d]/g,'')
            if (count_num[j].value > 0 ) {
              xu[j].checked = true
              count_num[j].value = count_num[j].value
              mon_pie[j].innerHTML = parseInt(pie[j].innerHTML) *parseInt(count_num[j].value)
              ye_pie[j].innerHTML = parseInt(pie[j].innerHTML) *parseInt(count_num[j].value) *36
              for (var m = 0; m < tables.length; m++) {
                this.calcTotal(tables[m],6);
                this.calcTotal(tables[m],7);
              }
            }else{
              mon_pie[j].innerHTML = 0
              ye_pie[j].innerHTML = 0
            }
            /* else{
              count_num[j].value = parseInt(count_num[j].value) +1
              mon_pie[j].innerHTML = parseInt(pie[j].innerHTML) *parseInt(count_num[j].value)
              ye_pie[j].innerHTML = parseInt(pie[j].innerHTML) *parseInt(count_num[j].value) *36
              for (var i = 0; i < tables.length; i++) {
                this.calcTotal(tables[i],6);
                this.calcTotal(tables[i],7);
              }
            } */
        }
      },
      onInput5(){
        this.$refs.phone.value = this.$refs.phone.value.replace(/[^\d]/g,'')
      },
	saveTxt(){
        if(!(/^1[3456789]\d{9}$/.test(this.$refs.phone.value))){
            alert("手机号码有误，请重填");
        }
        let month_pie = document.getElementsByClassName("month_pie")
        let year_pie = document.getElementsByClassName("year_pie")
        let month_tol = document.getElementsByClassName("month_tol")
        let year_tol = document.getElementsByClassName("year_tol")
        let mon_tol = document.getElementsByClassName("mon_tol")
        let ye_tol = document.getElementsByClassName("ye_tol")
        let sum = 0
        let sum1 = 0
        for(let i =0;i < month_pie.length;i++){
          sum += parseInt(month_pie[i].innerHTML)
        }
        for(let i =0;i < month_pie.length;i++){
          sum1 += parseInt(year_pie[i].innerHTML)
        }
        parseFloat()
		let name = document.getElementsByClassName("name")
		let community = document.getElementsByClassName("community")
		let telephone = document.getElementsByClassName("telephone")
		let tenement = document.getElementsByClassName("tenement")
		let overground = document.getElementsByClassName("overground")
		let underground = document.getElementsByClassName("underground")
		let liftNum = document.getElementsByClassName("liftNum")
		if( name[0].value =='' || community[0].value =='' || telephone[0].value =='' || tenement[0].value == 0 || overground[0].value ==0 || underground[0].value ==0 || liftNum[0].value ==0){
				alert("请您填完信息查看报价！")
		}else{
        let token1 = document.getElementsByTagName("meta")[2].content
        mon_tol[0].innerHTML = sum.toFixed(2) +'元'
        month_tol[0].innerHTML = (sum/2).toFixed(2) + "元"
        ye_tol[0].innerHTML = sum1.toFixed(2) + '元'
        year_tol[0].innerHTML = (sum1/2).toFixed(2) +'元'
        this.$http.post('/api/enquire/info',{
          name: name[0].value,
          communityName:community[0].value,
          telephone:telephone[0].value,
          tenement:tenement[0].value,
          overground:overground[0].value,
          underground:underground[0].value,
          liftNum:liftNum[0].value,
          },
          {headers:{'X-CSRF-TOKEN':token1}}
        )
        .then(response => {
          // 请求成功
        })
        .catch(error => {
          // 请求失败，
          console.log(error);
        });
				}
			}
		}
	}
</script>
