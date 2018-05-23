<template>
  <div class="card">
    <div class="img"></div>
    <div class="info">
      <div class="top">
        <p class="title">{{book.title}}</p>
      </div>
      <div class="desc">
        <p class="author">{{book.author}}</p>
        <p class="score">豆瓣评分：{{book.score}}</p>
      </div>
      <div class="bottom">
        <div class="price">￥{{book.price}}</div>
      </div>
    </div>
    <div class="right">
      <div class="user">

      </div>
      <div class="sale">
        {{book.sale}}折
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {book: Object}
  }
</script>

<style scoped>
  .card {
    padding: 10rpx;
    display: flex;
    flex-direction: row;
    margin: 10rpx 0;
    cursor: pointer;
  }

  .img {
    background-color: #aaaaaa;
    width: 135rpx;
    min-width: 135rpx;
    height: 180rpx;
  }

  .info {
    padding: 0 10rpx;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 32rpx;
    white-space:nowrap;text-overflow:ellipsis;overflow: hidden;
  }

  .desc {
    flex-grow: 1;
    font-size: 20rpx;
    color: #888888;
  }
  .author,.score{
    padding: 4rpx;
  }
  .bottom {
    font-size: 32rpx;
    font-weight: revert;
    display: flex;
    flex-direction: row;
  }
  .right{
    min-width: 75rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .user{
    width:75rpx;
    height:75rpx;
    border-radius: 37.5rpx;
    background-color:cadetblue;
  }
  .sale{
    font-size: 28rpx;
    color: #E51C23;
    border: 2rpx #E51C23 solid;
    border-radius: 6rpx;
    padding: 6rpx;
  }
</style>
