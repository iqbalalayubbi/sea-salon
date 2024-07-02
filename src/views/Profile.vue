<template>
  <main class="flex flex-col items-center justify-center gap-5 h-screen">
    <div class="avatar">
      <div
        class="ring-slate-700 ring-offset-base-100 w-16 rounded-full ring ring-offset-2"
      >
        <img
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        />
      </div>
    </div>
    <div class="flex flex-col items-center gap-3 mt-5">
      <input
        v-for="input in inputs"
        :key="input"
        :type="input.type"
        :placeholder="input.placeholder"
        class="input input-bordered w-full max-w-xs bg-cream-brown"
      />
    </div>
    <div class="flex flex-col gap-3 w-full max-w-xs mt-5">
      <button class="btn btn-primary">Save</button>
      <RouterLink to="/client/dashboard" class="btn btn-secondary"
        >Back</RouterLink
      >
    </div>
  </main>
</template>
<script setup>
import { reactive } from "vue";

const inputs = reactive([
  { type: "text", placeholder: "Full Name" },
  { type: "text", placeholder: "Phone Number" },
  { type: "email", placeholder: "Email" },
  { type: "password", placeholder: "Password" },
]);
</script>
