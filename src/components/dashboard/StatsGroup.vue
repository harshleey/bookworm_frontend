<script setup lang="ts">
import StatsCard from './StatsCard.vue'

interface StatItem {
  icon: string
  count: string | number
  label: string
}

interface Props {
  stats: StatItem[]
}

defineProps<Props>()
</script>

<template>
  <div class="stats__group">
    <StatsCard
      v-for="(stat, index) in stats"
      :key="index"
      :icon="stat.icon"
      :count="stat.count"
      :label="stat.label"
    />
  </div>
</template>

<style scoped>
.stats__group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-direction: column;
}
</style>
