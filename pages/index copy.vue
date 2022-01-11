<template>
  <div style="border: 3px solid orange; padding: 10px">
    <h1>Index page</h1>
    <!-- 组件自动导入 -->
    <BaseFooButton></BaseFooButton>

    <!-- 组件懒加载 -->
    <h1>Mountains</h1>
    <LazyMountainsList v-if="show"></LazyMountainsList>
    <button @click="show = !show">显示列表</button>

    <!-- 接口调用、代办列表 -->
    <div v-for="todo in todos" :key="todo.id">
      <input type="checkbox" v-model="todo.completed" />
      <strong>{{ todo.title }}</strong>
    </div>

    <NuxtLink to="/detail">Detail</NuxtLink> &nbsp;&nbsp;&nbsp;&nbsp;
    <NuxtLink to="/user-admin/1">/user-admin/1</NuxtLink
    >&nbsp;&nbsp;&nbsp;&nbsp;
    <NuxtLink to="/parent/child">parent/child</NuxtLink>&nbsp;&nbsp;&nbsp;&nbsp;
    <NuxtLink to="/helloworld">helloworld</NuxtLink>
    <!-- 路由出口 -->
    <!-- <NuxtPage></NuxtPage> -->
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent, useAsyncData } from "nuxt3";
import { ref } from "vue";

export default defineNuxtComponent({
  setup() {
    const show = ref(false);
    const todos = ref();
    const fetchData = async () => {
      const { data } = await useAsyncData("todos", () => $fetch("/api/todos"));
      todos.value = data
    };
    fetchData();
    return {
      show,
      todos,
    };
  },
});
</script>


