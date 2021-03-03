<template>
  <div class="default-layout">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const DefaultLayout = defineComponent({
  name: 'DefaultLayout',
  setup() {
    return {};
  },
});

export default DefaultLayout;
</script>

<style>
.default-layout {
}
</style>