<script setup lang="ts">
interface BranchProps {
  branchName: string
  branchId: string
}

defineProps<BranchProps>()
</script>

<template>
  <div class="branch__card">
    <div class="branch__flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
      >
        <path
          d="M21 21H3C2.44772 21 2 20.5523 2 20V12.4868C2 12.1978 2.12501 11.9229 2.34282 11.733L6 8.54435V4C6 3.44772 6.44772 3 7 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21ZM9 19H12V12.9416L8 9.45402L4 12.9416V19H7V15H9V19ZM14 19H20V5H8V7.12729C8.23444 7.12729 8.46888 7.20938 8.65718 7.37355L13.6572 11.733C13.875 11.9229 14 12.1978 14 12.4868V19ZM16 11H18V13H16V11ZM16 15H18V17H16V15ZM16 7H18V9H16V7ZM12 7H14V9H12V7Z"
        ></path>
      </svg>
      <span class="data__border border"></span>
      <div class="branch__content">
        <h4>{{ branchName }}</h4>
        <p>Borrowed ID: {{ branchId }}</p>
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
.branch__card {
  display: flex;
  align-items: center;
  border: 1px solid black;
  margin: 0 auto 1rem auto;
  width: 87%;
  border-radius: 10px;
  padding: 0rem 0.4rem;
  gap: 0.5rem;
}

.branch__flex {
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

.branch__content {
  width: 70%;
  /* margin-right: 1.7rem; */
  /* background-color: pink; */
}

.branch__content h4 {
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
  color: var(--thm-black);
}

.branch__content p {
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
