<template>
  <div class="authed-layout">
    <router-view />
    <my-tab-bar />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { MyTabBar } from '../components';

const AuthedLayout = defineComponent({
  name: 'AuthedLayout',
  components: {
    'my-tab-bar': MyTabBar,
  },
  setup() {
    const state = reactive({ collapsed: true });
    return { state };
  },
});

export default AuthedLayout;
</script>

<style lang="scss">
.authed-layout {
}
</style>