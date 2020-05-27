<template>
  <div class="case">
    <div class="title">
      <p>
        <img @click="search()" src="../assets/img/search.png" />
        <input @input="keyup($event)" ref="text" type="text" placeholder="请输入名称" v-model="keyword">
      </p>
      <h1>
        <span>
          <router-link :to="'newcase'">
            <img src="../assets/img/new.png" />新建
          </router-link>
        </span>
      </h1>
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
          <li v-for="(list,index) in lists">
            <span>{{list.title}}</span>
            <span><img class="erro" :src="list.pictureLabel" /></span>
            <span>{{list.createTime}}</span>
            <span v-if="list.whether == 1" style="color:#05B322">已上架</span>
            <span v-else style="color:#999">已下架</span>
            <span class="handle">
              <span>
                <router-link :to="{name:'newcase',query:{id:list.id}}">
                  <img src="../assets/img/edit.png" />
                </router-link>
              </span>
              <span>
                <router-link :to="{name:'casedetails',query:{id:list.id}}">
                  <img src="../assets/img/See.png" />
                </router-link>
              </span>
              <span v-if="list.whether == 1" @click="openMask(list)">
                <img src="../assets/img/down.png" /></span>
              <span v-else @click="openMask(list)">
                <img src="../assets/img/up.png" /></span>
              <span v-show="list.whether == 0" @click="openMa(list)">
                <img src="../assets/img/delete.png" /></span>
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
  </div>
</template>
<style scoped lang="less">
  .case {
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
    .content {
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

    li {
      display: flex;
      line-height: 60px;
      background-color: #7094FD;
      font-size: 20px;
      color: #fff;
      border-radius: 8px 8px 0 0;
      border-bottom: none;

      span {
        display: inline-block;
        flex: 1;
        text-align: center;
      }

      span:last-child {
        flex: 2;
      }

      span:nth-child(2) {
        flex: 2;
      }

      span:nth-child(3) {
        flex: 1.5;
      }
    }

    .lie {
      min-height: 600px;
      li:nth-child(2n+1){
        background-color: #f0f0f0;
      }
      li {
        height: 140px;
        line-height: 140px;
        font-size: 18px;
        color: #333;
        background-color: #fff;
        border: 1px solid #DCDCDC;
        margin-top: -1px;
        border-radius: 0;

        span {
          display: inline-block;

          img {
            width: 170px;
            height: 96px;
            vertical-align: middle;

          }
        }

        .handle {
          text-align: center;

          span {
            cursor: pointer;
            margin-right: 30px;

            img {
              width: 22px;
              height: 24px;
              vertical-align: middle;
            }
          }

          span:first-child {
            margin-left: 30px;
          }

          span:last-child {
            margin-right: 0;
          }
        }
      }
    }

    .title {
      display: flex;
      margin-bottom: 17px;

      p {
        flex: 2;
        height: 40px;
        border-radius: 6px;
        background-color: #fff;
        border: 1px solid #999;

        img {
          width: 18px;
          height: 18px;
          margin-left: 10px;
          cursor: pointer;
          vertical-align: middle;
        }

        input {
          height: 40px;
          border: none;
          background: none;
          outline: none;
          padding-left: 10px;
        }

        input:focus {
          border: none;
        }
      }

      h1 {
        flex: 6;
        font-size: 16px;
        font-weight: normal;
        text-align: right;
        line-height: 40px;

        span {
          display: inline-block;
          width: 100px;
          line-height: 40px;
          text-align: center;
          background: rgba(73, 119, 252, 1);
          border: 1px solid rgba(216, 226, 240, 1);
          border-radius: 2px 2px 2px 2px;
          cursor: pointer;

          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            list-style: none;
            text-decoration: none;
            color: #fff;
          }

          img {
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
    inject: ['reload'],
    data() {
      return {
        id:'',
        title:'',
        state:0,
        content:'您确定上架吗？',
        content1:'您确定下架吗？',
        type:'danger',
        sendVal: false,
        send:false,
        total:0,
        pages:0,
        current:1,
        keyword: '',
        arr: [],
        shown: false,
        index: '',
        num: 4,
        lists: [],
        paginate: ['lang'],
      }
    },
    created() {
      Axios.get("/sys/cases/page", {
          params: {
            page: 1,
            size: this.num
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
    methods: {
      changepage(index){
        this.current = index
        Axios.get("/sys/cases/page", {
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
        Axios.get("/sys/cases/page", {
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
          })
          .catch(error => {
            // 请求失败，
            console.log(error);
          });
      },
      keyup(e) {
        var evt = window.$event || e;
          this.search()
      },
      upper(val) {
        Axios.put(`/sys/cases/whether?id=${val}`)
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
      del(val) {
        Axios.delete("/sys/cases/info", {
            params: {
              id: val
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
      clickCancel(val){
      },
      clickDanger(){
      },
      clickConfirm(val){
      }
    }
  }
</script>
