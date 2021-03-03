<template>
  <article class="task-view">
    <my-header title="今日のタスク" :subTitle="state.today" :borderRadius="false" :fixed="false" :height="80" />
    <van-tabs class="task-view__tabs" style="box-shadow: 0 6px 12px -12px #969799" sticky color="#2f54eb" v-model="state.activeTab">
      <van-tab title="今日" name="today"></van-tab>
      <van-tab title="予定" name="reservation"></van-tab>
    </van-tabs>

    <van-row v-if="state.activeTab === 'today'">
      <van-col :span="24" class="g-pa-xs">
        <van-list>
          <van-radio-group v-model="taskChecked">
            <van-swipe-cell v-for="task in tasks" :key="task.taskID">
              <van-field
                v-model="task.name"
                placeholder="タスク名を入力"
                @blur="onTaskInputBlur(task)"
                class="task-view__input-field"
                :class="{ 'task-view__input-field-done': taskChecked == task.taskID }"
              >
                <template #left-icon>
                  <van-radio :name="task.taskID" @click="taskChecked = task.taskID" />
                </template>
              </van-field>
              <template #right>
                <van-button square type="danger" text="删除" />
              </template>
            </van-swipe-cell>
          </van-radio-group>
        </van-list>
      </van-col>
    </van-row>

    <van-popup v-model:show="state.showPopup" position="bottom" style="height: 100%">
      <task-pickker @onCancel="state.showPopup = false" />
    </van-popup>

    <a class="task-view__add" @click="state.showPopup = true">
      <van-icon name="plus" />
    </a>
  </article>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { MyHeader } from '../../components';
import { StringUtils } from '../../utils';
import TaskPickerView from '../TaskPickerView/TaskPickerView.vue';
import * as taskMock from '../../assets/mock/task.json';

const TaskView = defineComponent({
  name: 'TaskView',
  components: {
    'my-header': MyHeader,
    'task-pickker': TaskPickerView,
  },
  setup() {
    const state = reactive({
      showPopup: false,
      activeTab: 'today',
      today: StringUtils.dateFormat(new Date(), 'YYYY/MM/DD (dd)'),
    });

    const tasks = ref(taskMock.data);
    const taskChecked = ref(null);

    const onTaskInputBlur = (task) => {
      console.log(task);
      if (StringUtils.isBlank(task.name)) {
        const index = tasks.value.findIndex((d) => d.taskID === task.taskID);
        if (index > -1) {
          tasks.value.splice(index, 1);
        }
      }
    };

    return { state, tasks, onTaskInputBlur, taskChecked };
  },
});
export default TaskView;
</script>
<style lang="scss">
.task-view {
  height: calc(100vh - 64px);
  position: relative;
  min-height: -webkit-fill-available;
  &__tabs {
  }
  &__add {
    position: absolute;
    bottom: 10px;
    right: 16px;
    border-radius: 50%;
    font-size: 24px;
    display: inline-block;
    padding: 10px 16px;
    background: #2f54eb;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    &:active {
      background: #10239e;
    }
  }
  &__input-field {
    .van-field__left-icon {
      margin-top: 2px;
    }
    &-done {
      input.van-field__control {
        text-decoration: line-through;
      }
    }
  }
}
</style>