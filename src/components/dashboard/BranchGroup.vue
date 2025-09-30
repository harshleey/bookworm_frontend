<script setup lang="ts">
import BranchCard from './BranchCard.vue'

interface BranchCardItem {
  branchName: string
  branchId: string
}

interface BranchProps {
  stats: BranchCardItem[]
}

defineProps<BranchProps>()
</script>

<template>
  <div class="branch__group">
    <h3>Branch Network</h3>
    <BranchCard
      v-for="(stat, index) in stats"
      :key="index"
      :branchName="stat.branchName"
      :branchId="stat.branchId"
    />
  </div>
</template>

<style scoped>
.branch__group {
  background-color: var(--thm-white);
  width: 320px;
  border-radius: 10px;
  padding: 0.7rem 0.3rem 0.1rem 0;
}

.branch__group h3 {
  text-align: center;
  margin-bottom: 1.1rem;
  font-weight: 400;
}
</style>
