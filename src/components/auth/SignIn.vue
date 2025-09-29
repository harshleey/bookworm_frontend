<script setup lang="ts">
import { ref } from 'vue'

const form = ref({ email: '', password: '' })

const handleSignin = () => {
  console.log('Sign In:', form.value)
}
</script>

<template>
  <div class="form__container signin__container">
    <form @submit.prevent="handleSignin">
      <img src="/src/assets/images/small_black_logo.svg" class="small__black__logo" alt="" />

      <h1 class="signin__header">Welcome Back !!</h1>

      <span class="signin__subheader">Please enter your credentials to log in</span>

      <div class="form__group">
        <input type="text" placeholder="Username" />
      </div>

      <div class="form__group">
        <input type="password" placeholder="Password" />
      </div>
      <a href="#" class="forgot__password">Forgot your password?</a>
      <button class="btn black__btn">SIGN IN</button>
    </form>
  </div>
</template>
