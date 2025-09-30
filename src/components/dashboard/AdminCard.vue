<script setup lang="ts">
interface AdminProps {
  adminName: string
  adminId: string
  adminLoginStatus: string
}

defineProps<AdminProps>()
</script>

<template>
  <div class="admin__card">
    <div class="admin__flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
      >
        <path
          d="M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM12 11C13.3807 11 14.5 9.88071 14.5 8.5C14.5 7.11929 13.3807 6 12 6C10.6193 6 9.5 7.11929 9.5 8.5C9.5 9.88071 10.6193 11 12 11ZM7.52746 16H16.4725C16.2238 13.75 14.3163 12 12 12C9.68372 12 7.77619 13.75 7.52746 16Z"
        ></path>
      </svg>
      <span class="data__border border"></span>
      <div class="admin__content">
        <h4>{{ adminName }}</h4>
        <p>Admin ID: {{ adminId }}</p>
      </div>

      <div class="online__status">
        <span class="data__circle"></span>
        <span>{{ adminLoginStatus }} </span>
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
.admin__card {
  display: flex;
  align-items: center;
  border: 1px solid black;
  margin: 0 auto 1rem auto;
  width: 87%;
  border-radius: 10px;
  padding: 0.4rem 0.4rem;
  gap: 0.6rem;
}

.admin__flex {
  padding: 3px 9px;
  background-color: #e3e3e3;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  width: 90%;
}

.data__border {
  width: 2px;
  height: 40px;
  background-color: #000;
}

.admin__content {
  width: 70%;
  /* margin-right: 1.7rem; */
  /* background-color: pink; */
}

.admin__content h4 {
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
  color: var(--thm-black);
}

.admin__content p {
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
