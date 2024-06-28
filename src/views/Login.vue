<template>
  <main class="flex flex-col items-center lg:flex-row h-screen">
    <section class="bg-cream-brown flex-1 h-full relative hidden lg:block">
      <h1 class="text-center text-5xl text-primary font-bold mt-40">
        Welcome Back
      </h1>
      <img src="@/assets/hands.png" alt="" class="absolute bottom-0" />
    </section>
    <section class="flex flex-col items-center w-full lg:flex-1">
      <Logo class="mt-20" />
      <h1 class="mt-5 mb-10 font-bold text-3xl text-black-color">Signin</h1>
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
        <RouterLink to="/register" class="link link-hover text-primary"
          >Register</RouterLink
        ></span
      >
    </section>
  </main>
</template>

<script setup>
import Logo from "@/components/Home/Logo.vue";
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
