<template>
  <main class="flex flex-col items-center">
    <h1 class="mt-20 mb-8 font-bold text-3xl text-primary">Signup</h1>
    <section class="flex flex-col items-center gap-3">
      <input
        :type="input.type"
        :placeholder="input.placeholder"
        class="input input-bordered w-full max-w-xs bg-cream-brown"
        v-for="input in inputs"
        :key="input"
      />
    </section>
    <button class="btn btn-primary w-full max-w-xs mt-8 mb-5">
      Create Account
    </button>
    <span
      >Already have account ?
      <a class="link link-hover text-primary">Login</a></span
    >
  </main>
</template>

<script setup>
import { reactive } from "vue";

const inputs = reactive([
  {
    type: "text",
    placeholder: "Enter Your Full Name",
  },
  {
    type: "email",
    placeholder: "Enter Your Email",
  },
  {
    type: "text",
    placeholder: "Enter Your Phone Number",
  },
  {
    type: "password",
    placeholder: "Enter Your Password",
  },
  {
    type: "password",
    placeholder: "Enter Your Confirm Password",
  },
]);
</script>
