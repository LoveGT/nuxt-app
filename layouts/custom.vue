<template>
  <div style="border:1px solid red;padding: 10px;">
    内容来自于自定义布局也custom.vue!
    <slot name="title"></slot>
    <slot></slot>
  </div>
</template>

<script>
import TheFooter from '../components/TheFooter.vue'
export default {
  components: { TheFooter },

}
</script>

<style>

</style>