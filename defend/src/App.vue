<template>
  <div id="app">
    <router-view v-if="isRouter"/>
  </div>
</template>
<style lang="less">
</style>

<script>

export default {
  name: 'App',
  provide(){
    return{
      reload: this.reload
    }
  },
  data(){
    return{
      isRouter: true
    }
  },
  mounted(){
  },
  methods:{
    reload(){
      this.isRouter =false
      this.$nextTick(function(){
        this.isRouter =true
      })
    }
  }
}
</script>
