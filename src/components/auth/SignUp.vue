<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  first_name: '',
  last_name: '',
  contact: '',
  email: '',
  username: '',
  password: '',
})

const handleSignup = () => {
  console.log('Sign Up:', form.value)
}
</script>

<template>
  <div class="form__container signup__container">
    <form @submit.prevent="handleSignup">
      <div class="signup__header">
        <h2>Sign up</h2>
        <img src="/src/assets/images/small_black_logo.svg" alt="" />
      </div>

      <span class="signup__subheader">Please provide your information to sign up.</span>

      <!-- <span class="signup__subheader">Please enter your credentials to log in</span> -->

      <div class="form__group">
        <input type="text" placeholder="First Name" required />

        <input type="text" placeholder="Last Name" required />
      </div>

      <div class="form__group">
        <input type="text" placeholder="Contact No" required />

        <input type="email" placeholder="Email" required />
      </div>

      <div class="form__group">
        <input type="text" placeholder="Username" required />

        <input type="password" placeholder="Password" required />
      </div>
      <button>SIGN UP</button>
    </form>
  </div>
</template>
