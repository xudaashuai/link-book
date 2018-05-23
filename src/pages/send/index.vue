<template>
  <div class="page">
    <p class="title">哪些书可以上传</p>
    <p class="desc">如果你的书五成新，如果你的书还有剩余价值...</p>
    <p class="title">如何上传我的书籍</p>
    <p class="desc">扫描图书后封面的条形码或手写输入即可</p>
    <p class="title">如何与他人交易</p>
    <p class="desc"> 如果，你看上了ta的书，就直接联系ta，给ta打call。
      买方选择卖家提供的时间和地点，并支付费用。
      双方共同确认交易完成后，卖方可以发起收款</p>
    <p class="tip">动手扫一扫，一秒拥有你的书店</p>
    <div class="buttons"></div>
    <img src="../../../static/img/scan.png" @click="click" class="button">
    <img src="../../../static/img/scan.png" class="button">
  </div>
</template>

<script>

export default {

  data () {
    return {
    }
  },
  methods:{
    click(){
      wx.scanCode({
        success:(data)=>{
          console.log(data)
        }
      })
    }
  }
}
</script>

<style scoped>
  .page{
    margin:0 40rpx ;
  }
  .title{
    font-weight: bold;
    font-size: 40rpx;
    margin-top: 40rpx;
    line-height: 60rpx;
    color: #009688;
  }
  .desc{
    font-size: 30rpx;
    line-height: 44rpx;
  }
  .tip{
    color: #919191;
    text-align: center;
    font-size: 32rpx;
    padding: 40rpx 0;
  }
  .button{
    width:280rpx;
    height: 280rpx;
    padding: 10rpx;
  }
</style>
