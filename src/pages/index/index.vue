<template>
  <view class="content text-teal-200  text-2xl mt-[90rpx]">
    sdsddd
  </view>
</template>

<script>
import {login} from '@/api/auth'
export default {
  data() {
    return {
    }
  },
  onLoad() {
    console.log(login())
  },
  methods: {},
}
</script>