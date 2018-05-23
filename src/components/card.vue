<template>
  <div class="card">
    <p class="text">
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style>
.card {
  padding: 10px;
  box-shadow: #aaaaaa 0 0 10rpx 0;
  border-radius: 5rpx;
}
</style>
