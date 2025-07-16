<script setup>
import { Layout } from 'vuepress-theme-plume/client'
</script>

<template>
  <Layout>
    <template #page-bottom>
      <div class="custom-content">
        自定义内容
      </div>
    </template>
  </Layout>
</template>

<style>
.custom-content {
  width: 100%;
}
</style>