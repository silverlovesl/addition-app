<template>
  <div class="my-card">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

const MyCard = defineComponent({
  name: 'MyCard',
  setup() {
    return {};
  },
});
export default MyCard;
</script>
<style lang="scss">
.my-card {
  position: relative;
  padding: 8px;
  border-radius: 16px;
  background: white;
}
</style>