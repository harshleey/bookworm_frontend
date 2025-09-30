<script setup lang="ts">
import BorrowersCard from './BorrowerCard.vue'

interface BorrowerCardItem {
  borrowerName: string
  borrowerId: string
}

interface BorrowerProps {
  stats: BorrowerCardItem[]
}

defineProps<BorrowerProps>()
</script>

<template>
  <div class="borrower__group">
    <h3>Overdue Borrowers</h3>
    <BorrowersCard
      v-for="(stat, index) in stats"
      :key="index"
      :borrowerName="stat.borrowerName"
      :borrowerId="stat.borrowerId"
    />
  </div>
</template>

<style scoped>
.borrower__group {
  background-color: var(--thm-white);
  width: 320px;
  border-radius: 10px;
  padding: 0.7rem 0.3rem 0.1rem 0;
}

.borrower__group h3 {
  text-align: center;
  margin-bottom: 1.1rem;
  font-weight: 400;
}
</style>
