<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from './SideBar.vue'
import TopBar from '@/components/layout/TopBar.vue'
</script>

<template>
  <div class="app__wrapper">
    <SideBar />
    <div class="main__content">
      <TopBar />
      <div class="content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.app__wrapper {
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: var(--thm-white);
}

.main__content {
  flex: 1;
  margin-left: 300px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  padding: 20px;
  margin-top: 80px; /* Height of the topbar */
  background-color: #e3e3e3;
}
</style>
