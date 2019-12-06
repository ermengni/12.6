<template>
  <van-swipe :autoplay="3000" indicator-color="white">
  <van-swipe-item >
      <img src="../assets/img1.png" alt="" class="img">
  </van-swipe-item>
  <van-swipe-item >
      <img src="../assets/img2.jpg" alt="" class="img">
  </van-swipe-item>
  
</van-swipe>
</template>

<script>
export default {
    data(){
        return {
           
        }
    }

}
</script>

<style>
.img{
    width: 100%;
    height: 200px;
}

</style>