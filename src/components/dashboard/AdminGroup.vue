<script setup lang="ts">
import AdminCard from './AdminCard.vue'

interface AdminCardItem {
  adminName: string
  adminId: string
  adminLoginStatus: string
}

interface AdminProps {
  stats: AdminCardItem[]
}

defineProps<AdminProps>()
</script>

<template>
  <div class="admin__group">
    <h3>BookWorm Admins</h3>
    <AdminCard
      v-for="(stat, index) in stats"
      :key="index"
      :adminName="stat.adminName"
      :adminId="stat.adminId"
      :adminLoginStatus="stat.adminLoginStatus"
    />
  </div>
</template>

<style scoped>
.admin__group {
  background-color: var(--thm-white);
  width: 320px;
  border-radius: 10px;
  padding: 1rem 0.3rem 0.1rem 0;
}

.admin__group h3 {
  text-align: center;
  margin-bottom: 1.2rem;
  font-weight: 400;
}
</style>
