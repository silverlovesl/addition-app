<template>
  <div class="my-header" :class="classObject" :style="styleObject">
    <span class="my-header__title">{{ title }}</span>
    <span class="my-header__title sub">{{ subTitle }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

const MyHeader = defineComponent({
  name: 'MyHeader',
  props: {
    title: { type: String, required: true, default: 'My Title' },
    subTitle: { type: String, default: null },
    borderRadius: { type: Boolean, default: true },
    fixed: { type: Boolean, default: true },
    height: { type: Number, default: 240 },
  },
  setup(props) {
    const classObject = {
      'my-header__border-radius': props.borderRadius,
      'my-header__fixed': props.fixed,
    };
    const styleObject = {
      height: `${props.height}px`,
    };
    return { props, classObject, styleObject };
  },
});
export default MyHeader;
</script>
<style lang="scss">
.my-header {
  padding: 8px 0px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #10239e 0%, #2f54eb 100%);
  &__title {
    display: block;
    padding: 0px 0px 0px 8px;
    font-size: 32px;
    color: white;
    &.sub {
      font-size: 14px;
    }
  }
  &__fixed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  &__border-radius {
    border-radius: 0 0 30% 30%;
  }
}
</style>