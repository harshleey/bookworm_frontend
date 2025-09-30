<script setup lang="ts">
interface Props {
  icon: string
  count: string | number
  label: string
}

defineProps<Props>()
</script>

<template>
  <div class="stats__card">
    <img :src="icon" class="gray__icon" alt="" />
    <span class="data__border border"></span>
    <div class="stats__content">
      <h3>{{ count }}</h3>
      <p>{{ label }}</p>
    </div>
  </div>
</template>

<style scoped>
.stats__card {
  display: flex;
  align-items: center;
  background-color: #fff;
  width: 320px;
  border-radius: 10px;
  padding: 0.3rem 0.7rem;
  gap: 1rem;
}

.gray__icon {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}

.data__border {
  width: 2px;
  height: 50px;
  background-color: #000;
  flex-shrink: 0;
}

.stats__content {
  flex: 1;
}

.stats__content h3 {
  font-size: 1.9rem;
  margin-bottom: 0.4rem;
  color: var(--thm-black);
}

.stats__content p {
  font-size: 0.9rem;
  color: var(--thm-dark-gray);
}
</style>
