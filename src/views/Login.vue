<template>
  <main class="flex flex-col items-center">
    <h1 class="mt-20 mb-20 font-bold text-3xl text-primary">Signin</h1>
    <section class="flex flex-col items-center gap-3">
      <input
        :type="input.type"
        :placeholder="input.placeholder"
        class="input input-bordered w-full max-w-xs bg-cream-brown"
        v-for="input in inputs"
        :key="input"
      />
    </section>
    <button class="btn btn-primary w-full max-w-xs mt-12 mb-5">Login</button>
    <span
      >Don't have an account ?
      <a class="link link-hover text-primary">Register</a></span
    >
  </main>
</template>

<script setup>
import { reactive } from "vue";

const inputs = reactive([
  {
    type: "email",
    placeholder: "Enter Your Email",
  },
  {
    type: "password",
    placeholder: "Enter Your Password",
  },
]);
</script>
