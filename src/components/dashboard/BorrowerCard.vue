<script setup lang="ts">
interface BorrowerProps {
  borrowerName: string
  borrowerId: string
}

defineProps<BorrowerProps>()
</script>

<template>
  <div class="borrower__card">
    <div class="borrower__flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
      >
        <path
          d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"
        ></path>
      </svg>
      <span class="data__border border"></span>
      <div class="borrower__content">
        <h4>{{ borrowerName }}</h4>
        <p>Borrowed ID: {{ borrowerId }}</p>
      </div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path
        d="M12 4C9.4095 4 7.10606 5.23053 5.64274 7.14274L8 9.5H2V3.5L4.21863 5.71863C6.05061 3.452 8.85558 2 12 2 17.5228 2 22 6.47715 22 12H20C20 7.58172 16.4183 4 12 4ZM4 12C4 16.4183 7.58172 20 12 20 14.5905 20 16.894 18.7695 18.3573 16.8573L16 14.5 22 14.5V20.5L19.7814 18.2814C17.9494 20.548 15.1444 22 12 22 6.47715 22 2 17.5228 2 12H4Z"
      ></path>
    </svg>
  </div>
</template>

<style scoped>
.borrower__card {
  display: flex;
  align-items: center;
  border: 1px solid black;
  margin: 0 auto 1rem auto;
  width: 87%;
  border-radius: 10px;
  padding: 0rem 0.4rem;
  gap: 0.5rem;
}

.borrower__flex {
  padding: 3px 9px;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 85%;
}

.data__border {
  width: 2px;
  height: 40px;
  background-color: #000;
}

.borrower__content {
  width: 70%;
  /* margin-right: 1.7rem; */
  /* background-color: pink; */
}

.borrower__content h4 {
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
  color: var(--thm-black);
}

.borrower__content p {
  font-size: 0.65rem;
  color: var(--thm-dark-gray);
}

.online__status {
  /* background-color: yellow; */
  align-self: flex-end;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  gap: 5px;
}

.data__circle {
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background-color: #000;
}
</style>
