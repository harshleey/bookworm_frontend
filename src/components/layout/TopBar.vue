<script setup lang="ts"></script>

<template>
  <div class="topbar">
    <div class="topbar__admin">
      <span class="icon"><i class="ri-user-fill"></i></span>
      <div>
        <span class="user__name">Nisal Gunasekara</span>
        <span class="user__role">Admin</span>
      </div>
    </div>
    <div class="topbar__settings">
      <div class="topbar__date__time">
        <span class="time">12:29 PM</span>
        <span class="date">Sep 02, 2023</span>
      </div>
      <span class="border"></span>
      <span class="icon"><i class="ri-settings-4-fill"></i></span>
    </div>
  </div>
</template>

<style scoped>
.topbar {
  position: fixed;
  top: 0;
  left: 300px; /* Width of sidebar */
  right: 0;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: 999;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.479);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}

.icon {
  font-size: 2.5rem;
}

.topbar__admin,
.topbar__settings {
  display: flex;
  align-items: center;
  gap: 10px;
}

.topbar__admin .user__role {
  font-size: 0.8rem;
}

.topbar span {
  display: block;
  margin-bottom: 5px;
}

.topbar div span:first-of-type {
  font-weight: 700;
}
</style>
