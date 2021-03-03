<template>
  <van-tabbar class="my-tabbar" v-model="state.currentTab" :border="true" @change="onTabbarChange" :safe-area-inset-bottom="true" fixed>
    <van-tabbar-item name="task">私のタスク</van-tabbar-item>
    <van-tabbar-item name="request">依頼</van-tabbar-item>
  </van-tabbar>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';

const MyTabBar = defineComponent({
  name: 'MyTabBar',
  setup() {
    const state = reactive({
      currentTab: 'task',
    });
    const onTabbarChange = () => {};
    return { state, onTabbarChange };
  },
});
export default MyTabBar;
</script>
<style lang="scss">
</style>