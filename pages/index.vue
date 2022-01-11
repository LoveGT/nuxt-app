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
    <button @click="handleClick">添加todo项</button>
    <div>Page visits: {{ data }}</div>

    <!-- useState初体验 -->
    <button @click="counter++">+1</button>
    {{ counter }}
    <button @click="counter--">-1</button>

    <!-- dev-ui的组件库的使用 -->
    <div>
      <d-button>xxxx</d-button>
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

<script lang="ts" setup>

const show = ref(false);
// useAsyncData的使用
// const {data: todos } = await useAsyncData('todos', () => $fetch('/api/todos'))
const { data } = await useAsyncData("count", () => $fetch("/api/count"));
// useFetch的使用
const { data: todos } = await useFetch("/api/todos");
const handleClick = () => {
  todos.value.push({ id: 3, title: "吃饭", completed: false });
};

// 声明SSR友好的状态
const counter = useCounter();

// 插件使用
const { $hello } = useNuxtApp();
console.log($hello(), '$hello')
</script>
