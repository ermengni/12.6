<template>
  <div class="home">
    <div class="header">
      多加网
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer">
      <router-link v-for="(item,index) in list" :key="index" tag="span" :to="item.path" active-class="active">{{item.name}}</router-link>
    </div>
  </div>
</template>

<script>


export default {
  name: 'home',
  data(){
    return {
      list:[{
        name:"首页",
        path:"/shou"
      },{
        name:"我的",
        path:"/about"
      }]
    }
  }
 
}
</script>
<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header{
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ccc;
  background: #000;
  color: #fff;
  text-align: center;
  line-height: 50px;
}
.main{
  overflow: auto;
  width: 100%;
  flex: 1;
}
.footer{
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  span{
    flex: 1;
    height: 100%;
    line-height: 50px;
    text-align: center;
  }
  .active{
    color: hotpink;
  }
}

</style>
