<template>
  <article class="login-view">
    <my-header title="ログイン" />
    <van-row>
      <van-col :span="24" class="g-text-center g-px-sm">
        <div class="login-view__form-card">
          <van-image round :width="state.headerImgSize" :height="state.headerImgSize" :src="bgImg" fit="fill" class="login-view__header-img" />
          <van-field required label="メール" placeholder="ログインアカウント" error-message="" />
          <van-field required label="パスワード" placeholder="パスワード" error-message="" />
          <div class="g-my-lg"></div>
          <van-button round block type="primary">ログイン</van-button>
          <div class="g-my-md"></div>
          <van-button round block color="#00C300" plain :icon="lineIcon">Lineでログイン</van-button>
          <div class="g-my-md"></div>
          <span class="g-fs-14 fc-gray-6">アカウントを持ってない方は、<a class="fc-primary">こちらへ</a></span>
        </div>
      </van-col>
    </van-row>
  </article>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { MyHeader } from '../../components';
import bgImg from '../../assets/images/family_kaji_tetsudai.png';
import lineIcon from '../../assets/images/line-icon.png';

const LoginView = defineComponent({
  name: 'LoginView',
  components: {
    'my-header': MyHeader,
  },
  setup() {
    const state = reactive({
      headerImgSize: 160,
    });
    return { state, bgImg, lineIcon };
  },
});
export default LoginView;
</script>
<style lang="scss">
.login-view {
  height: 100vh;
  position: relative;
  background: #f0f0f0;
  &__header-img {
    top: -80px;
    left: 50%;
    transform: translate(-50%, 0%);
    position: absolute;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  &__form-card {
    position: relative;
    z-index: 2;
    padding: 16px;
    margin-top: 140px;
    border-radius: 50px;
    padding-top: 100px;
    height: 320px;
    background: white;
  }
}
</style>