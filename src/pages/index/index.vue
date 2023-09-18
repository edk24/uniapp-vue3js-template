<template>
  <view class="container py-2">
    
    <view class="header">关注慢病健康</view>

    <view class=" flex justify-between mt-2">
      <view class="w-[335rpx] p-4 bg-white rounded-xl shadow-sm flex relative" v-for="i in [1,1]">
        <!-- icon -->
        <view class="w-12 h-12 rounded-lg bg-warning  drop-shadow-lg shadow-warning flex justify-center items-center">
          <medicine-chest theme="outline" size="36" fill="#fff"/>
        </view>
        <view class="flex flex-col ml-2 ">
          <view class="text-xl relative" >待随访 </view>
          <view class="text-xs text-muted">患者最新测量</view>
        </view>
        <!-- 角标 -->
        <view class="absolute top-3 right-2 rounded-md bg-error text-white text-sm h-5 leading-5 px-1">30</view>
      </view>
      
    </view>

    <view class="bg-white rounded-xl shadow-sm flex flex-wrap mt-3 pb-4">
      <view class="w-[172rpx] mt-4 flex flex-col items-center" v-for="i in [1,1,1,1,1,1]">
        <view class="w-12 h-12 rounded-lg bg-warning drop-shadow-lg shadow-warning flex justify-center items-center">
          <medicine-chest theme="outline" size="36" fill="#fff"/>
        </view>
        <view class="mt-2 text-base text-main">医生</view>
      </view>
    </view>

  </view>
</template>

<script setup>
  import { MedicineChest } from '@icon-park/vue-next'
</script>

<style lang="less">
.header {
  color:rgba(127, 160, 249, 1);
  font-size: 2.133rem;
  font-weight: 700;
}
</style>