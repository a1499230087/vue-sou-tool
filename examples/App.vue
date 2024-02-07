<template>
  <div id="app">
    <div v-if="is">
      <span>多文件上传</span>
      <div v-sou-file:multiple="change">123</div>
    </div>
    <button @click="is = !is">销毁</button>
    <span>单文件上传</span>
    <img v-sou-file="change" alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class App extends Vue {
  data() {
    return {
      is: true
    }
  }
  change(files?: FileList) {
    console.log(files);

  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
