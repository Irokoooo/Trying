<script setup>
import { RouterView } from 'vue-router'
import Sleepy from '@/components/Sleepy.vue'
</script>

<template>
  <RouterView />
  <Sleepy class="fixed bottom-4 right-4" />
</template>
