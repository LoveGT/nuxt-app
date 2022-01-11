<template>
  <NuxtLayout name="custom">
    <template #title>
      <div>
        <h4>helloworld Title</h4>
      </div>
    </template>
    <template #default>
      <div>
        <h4>helloworld Page</h4>
      </div>
    </template>
  </NuxtLayout>
</template>

<script>
export default {
  layout: false,
};
</script>

<style></style>
