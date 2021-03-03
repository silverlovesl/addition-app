<template>
  <section class="task-picker-view">
    <my-header title="タスク作成" />
    <van-row>
      <van-col :span="24" class="g-pa-sm">
        <my-card class="g-mb-sm">
          <div class="fc-gray-7 g-pb-xs g-fs-20">
            <span>どの時間帯でやりますか</span>
          </div>
          <van-grid :column-num="4" clickable :border="false">
            <van-grid-item
              v-for="span in timeSpans"
              :key="span.key"
              :class="{ selected: span.key === state.selectedTimeSpan }"
              @click="state.selectedTimeSpan = span.key"
            >
              <template #icon>
                <van-image :src="span.icon" :height="state.timeSpanIconSize" :width="state.timeSpanIconSize" />
              </template>
              <template #text>
                <span class="g-fs-14">{{ span.title }}</span>
              </template>
            </van-grid-item>
          </van-grid>
        </my-card>

        <my-card class="g-mb-xl">
          <div class="fc-gray-7 g-pb-xs g-fs-20">
            <span>何をやりますか</span>
          </div>
          <van-grid :column-num="4" clickable :border="false">
            <van-grid-item
              v-for="tc in taskCategories"
              :key="tc.categoryID"
              :class="{ selected: tc.categoryID === state.selectedTaskCategory?.categoryID }"
              @click="onTaskCategoryChange(tc)"
            >
              <template #icon>
                <van-image :src="tc.icon" :height="state.taskCategoryIconSize" :width="state.taskCategoryIconSize" />
              </template>
              <template #text>
                <span class="g-fs-12">{{ tc.name }}</span>
              </template>
            </van-grid-item>
          </van-grid>
          <van-checkbox-group v-if="state.selectedTaskCategory" v-model="taskChecked">
            <van-cell-group>
              <van-cell
                :title="item.name"
                v-for="(item, index) in state.selectedTaskCategory.items"
                :key="item.itemID"
                clickable
                @click="toggleCheckbox(index)"
              >
                <template #right-icon>
                  <van-checkbox :name="item.name" :ref="(el) => (taskCheckboxes[index] = el)" @click.stop />
                </template>
              </van-cell>
            </van-cell-group>
          </van-checkbox-group>
          <div class="g-mt-sm">
            <van-button round block type="primary" icon="plus">タスク登録</van-button>
          </div>
          <div class="g-mt-sm">
            <van-button round block type="danger" plain @click="onCancel">取消</van-button>
          </div>
        </my-card>
      </van-col>
    </van-row>
  </section>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue';
import { MyHeader, MyCard } from '../../components';
import { Consts } from '../../models';

const TaskPickerView = defineComponent({
  name: 'TaskPickerView',
  emits: ['onCancel'],
  components: {
    'my-header': MyHeader,
    'my-card': MyCard,
  },
  setup(props, { emit }) {
    const state = reactive({
      selectedTimeSpan: 0,
      selectedTaskCategory: null,
      timeSpanIconSize: 50,
      taskCategoryIconSize: 40,
    });
    const taskChecked = ref([]);
    const taskCheckboxes = ref([]);

    const timeSpans = computed(() => Consts.taskTimeSpans);
    const taskCategories = computed(() => Consts.taskCategories);
    const taskCategoryIndex = computed(() => Consts.taskCategories.map((d) => d.name));
    const toggleCheckbox = (index: number) => {
      taskCheckboxes.value[index].toggle();
      console.log(taskCheckboxes.value[index]);
    };

    const onCancel = () => {
      emit('onCancel');
    };

    const onTaskCategoryChange = (taskCategory: any) => {
      state.selectedTaskCategory = taskCategory;
      taskChecked.value = [];
    };

    return {
      state,
      timeSpans,
      taskCategories,
      taskCategoryIndex,
      toggleCheckbox,
      taskCheckboxes,
      onTaskCategoryChange,
      taskChecked,
      onCancel,
      //End of line
    };
  },
});
export default TaskPickerView;
</script>
<style lang="scss">
.task-picker-view {
  position: relative;
  padding-top: 64px;
  height: calc(100vh - 64px);
  overflow: scroll;
  background: #d9d9d9;
  .van-grid-item {
    &.selected {
      .van-grid-item__content {
        background: #2f54eb;
        color: white;
        border-radius: 16px;
      }
    }
  }
}
</style>