<template>
  <div id="app">
    <component :is="layout" />
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import { Enums } from './models';

const defaultLayout = defineAsyncComponent(() => import(`./layout/DefaultLayout.vue`));
const authedLayout = defineAsyncComponent(() => import(`./layout/AuthedLayout.vue`));

const app = defineComponent({
  name: 'App',
  components: {
    defaultLayout,
    authedLayout,
  },
  setup() {
    const route = useRoute();
    const layout = computed(() => {
      return route.meta.template == Enums.LayoutTemplate.Authed ? authedLayout : defaultLayout;
    });

    return { layout };
  },
});

export default app;
</script>

<style>
</style>