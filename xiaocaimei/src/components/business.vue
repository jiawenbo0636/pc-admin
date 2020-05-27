<template>
	<div class="container">
    <!-- <div ref="top" class="bus_show" v-show="$route.name=='business'">
      <div class="bus_content">
        <ul>
          <li class="clearfix" v-for="ment in ments">
            <p>
              <span>{{ment.name}}:</span>
              <span class="all" @click="opentype(ment.id)">全部</span>
            </p>
            <p class="show_all">
              <router-link v-for="list in ment.enterpriseDeviceTypeInfoVoList" :key="list.id" :to="{name:'goods',query:{id:list.id}}">{{list.title}}</router-link>
            </p>
          </li>
        </ul>
      </div>
    </div> -->
		<div class="per">
			<ul class="clearfix">
				<li v-for="(list,index) in lists"  @mouseenter="addClass($event)" @mouseleave="removeClass($event)" :key="index">
					<div>
						<img :src="list.pictureLabel" alt="">
					</div>
					<p class="title">{{list.title}}<img src="../assets/img/line.png"></p>
					<p class="txt">{{list.summary}}</p>
					<p class="goDel clearfix">
						<!-- <span @click="goPro()">了解详情</span> -->
						<span>
							<router-link :to="{name:'goods',query:{id:list.id}}">了解详情<img src="../assets/img/go_2.png" /></router-link>
						</span>
						<!-- <span class="buy">立即购买</span> -->
					</p>
				</li>
			</ul>
			<div class="so">
				<span><router-link :to="'solution'">解决方案</router-link></span>
				<span><router-link :to="'home'">成功案例</router-link></span>
			</div>
		</div>
	</div>
</template>
<style lang="less">
 .bus_show{
   display: block;
   z-index: 999;
   width: 100%;
   background-color: #fff;
   margin: 0 auto;
   color: #666;
   position: absolute;
   left :0;
   top: 100px;
   box-shadow:0px 3px 5px 0px #747474;
 }
 .bus_content{
   width: 1200px;
   margin: 0 auto;
   ul{
     text-align: left;
     li:last-child{
       border-bottom: none;
     }
     li{
       border-bottom: 1px solid #F0F0F0;
       p{
         display: inline-block;
         float: left;
         height: 70px;
         overflow: hidden;
       }
       p:nth-child(1){
         width: 200px;
       }
       p:nth-child(2){
         width: 990px;
       }
       span{
         display: inline-block;
         margin: 0;
         text-align: center;
         height: 70px;
         line-height: 70px;
       }
       span:nth-child(1){
         font-size: 20px;
         font-weight: bold;
         color: #333;
         margin-right: 40px;
       }
       span:nth-child(2){
         width: 50px;
         height: 30px;
         line-height: 30px;
         font-size: 16px;
         color: #1EB1FF;
         background-color: #D3F0FF;
         border-radius: 20px;
         cursor: pointer;
       }
       a{
         list-style: none;
         text-decoration: none;
         width: 20%;
         display: inline-block;
         font-size: 16px;
         color: #666;
         height: 70px;
         line-height: 70px;
       }
       a:hover{
         color: #21B2FD;
       }
     }
   }
 }
.per{
	width: 100%;
	ul{
		margin-top: 60px;
		width: 100%;
		li{
			position: relative;
			width: 530px;
			height: 535px;
			margin-bottom:80px;
			background-color: #FBFBFB;
			float: left;
			div{
				width: 100%;
				height: 250px;
        img{
          width: 100%;
          height: 250px;
        }
			}
			.title{
				height: 60px;
				line-height: 60px;
				font-size: 34px;
				font-weight: bold;
				margin-left: 10px;
				color: #333333;
				img{
					display: block;
					width: 400px;
					height: 2px;
				}
			}
			.txt{
				margin: 27px 25px 60px 10px;
				line-height: 24px;
				font-size: 15px;
				color:#999999;
			}
			.goDel{
				position: absolute;
				left: 30px;
				bottom: 30px;
				font-size: 22px;
				/* span{
					display: inline-block;
					width: 172px;
					height: 53px;
					border: 1px solid #0072E6;
					text-align: center;
					margin-right: 30px;
					line-height: 53px;
					background-color: #CAECFF;
				} */
        img{
          display: inline-block;
          width: 11px;
          height: 19px;
          margin-left: 10px;
          vertical-align: middle;
          margin-top: -4px;
        }
				a{
					list-style: none;
					color: #B9B9B9;
					text-decoration: none;
				}
				.buy{
					background-color: #07A6FF;
					border: 1px solid #07A6FF;
					color: #fff;
				}
			}
		}
		li:nth-child(2n+1){
			margin-right: 140px;
		}
		.active{
			background-color: #fff;
			box-shadow: 2px 4px 5px #dfdfdf;
		}
	}
	.so{
		width: 100%;
		text-align: center;
		padding:40px 0 40px 0;
		border-bottom: 1px solid #999;
		span{
			display: inline-block;
			width: 250px;
			height: 80px;
			line-height: 80px;
			text-align: center;
			background-color: #000;
			color: #fff;
			font-size: 20px;
      a{
        list-style: none;
        text-decoration: none;
        color: #fff;
      }
		}
		span:nth-child(1){
			margin-right: 80px;
		}
	}
}
</style>
<script>
	export default{
		data(){
			return{
				seen:false,
     		current:0,
        ments:[
          {
            id: '',
            name: '',
            enterpriseDeviceTypeInfoVoList:[
              {
                id:'',
                title:''
              }
            ]
          }
        ],
				lists:[
					{
						id:'',
						pictureLabel:'',
						title:'',
						summary:''
					}
				]
			}
		},
    created(){
      this.$http.get("/api/enterprise/type")
      .then(response => {
        // 请求成功
        this.ments = response.data.data
      })
      .catch(error => {
        // 请求失败，
        console.log(error);
      });
      this.$http.get("/api/enterprise/list")
      .then(response => {
        // 请求成功
        this.lists = response.data.data
      })
      .catch(error => {
        // 请求失败，
        console.log(error);
      });
    },
	mounted(){
    /* let box = document.getElementsByClassName("bus_show")[0]
    let all = document.getElementsByClassName("all")
    let that = this
    box.onmousemove = function(){
       box.style.height = "210px"
     }
     box.onmouseleave = function(){
        box.style.height = "70px"
        box.style.overflow = "hidden"
      }
      for(var i =0 ;i<all.length;i++){
        (function(j){
          all[j].ondblclick =function(){
            that.$http.get("/api/enterprise/type")
            .then(response => {
              // 请求成功
              that.ments = response.data.data
            })
            .catch(error => {
              // 请求失败，
              console.log(error);
            });
          }
        })(i)
      } */

	},
	methods:{
    opentype(val){
      this.$http.get("/api/enterprise/list",{
        params:{
          typeId:val
        }
      })
      .then(response => {
        // 请求成功
        this.lists = response.data.data
        console.log(response.data.data);
      })
      .catch(error => {
        // 请求失败，
        console.log(error);
      });
    },
		addClass($event){
			$event.currentTarget.className = 'active';
		},
		removeClass($event){
			$event.currentTarget.className = '';
		}
	}
	}
</script>
