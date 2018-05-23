<template>
  <div class="page">
    <swiper :indicator-dots="true">
      <swiper-item v-for="item in swipers">
        <div class="s-img"></div>
      </swiper-item>
    </swiper>
    <BookCard v-for="book in books" :book="book"></BookCard>
  </div>
</template>

<script>
  import BookCard from '@/components/BookCard'

  export default {
    data() {
      return {
        motto: 'Hello World',
        userInfo: {},
        books: [
          {
            title: 'LinkBook 从入门到放弃',
            desc: 'desc',
            user: '徐大帅',
            author: '徐大帅',
            score: 9.9,
            price: 5.0,
            sale: 7.7,
          },
          {
            title: 'LinkBook 从入门到放弃',
            desc: 'desc',
            user: '徐大帅',
            author: '徐大帅',
            score: 9.9,
            price: 5.0,
            sale: 7.7,
          },
          {
            title: 'LinkBook 从入门到放弃',
            desc: 'desc',
            user: '徐大帅',
            author: '徐大帅',
            score: 9.9,
            price: 5.0,
            sale: 7.7,
          },
          {
            title: 'LinkBook 从入门到放弃',
            desc: 'desc',
            user: '徐大帅',
            author: '徐大帅',
            score: 9.9,
            price: 5.0,
            sale: 7.7,
          },
          {
            title: 'LinkBook 从入门到放弃',
            desc: 'desc',
            user: '徐大帅',
            author: '徐大帅',
            score: 9.9,
            price: 5.0,
            sale: 7.7,
          },
          {
            title: 'LinkBook 从入门到放弃',
            desc: 'desc',
            user: '徐大帅',
            author: '徐大帅',
            score: 9.9,
            price: 5.0,
            sale: 7.7,
          },
        ],
        swipers:[
          {
            url:'',
          },
          {
            url:'',
          },
          {
            url:'',
          },
        ]
      }
    },

    components: {
      BookCard
    },

    methods: {
      bindViewTap() {
        const url = '../logs/main'
        wx.navigateTo({url})
      },
      getUserInfo() {
        // 调用登录接口
        wx.login({
          success: () => {
            wx.getUserInfo({
              success: (res) => {
                this.userInfo = res.userInfo
              }
            })
          }
        })
      },
    },

    created() {
      // 调用应用实例的方法获取全局数据
      this.getUserInfo()
    }
  }
</script>

<style scoped>
  .page {
    font-size: 16rpx;
  }
  .s-img{
    background-color: #aaaaaa;
    width: 100%;
    height: 300rpx;
  }
</style>
