<template>
  <main class="flex flex-col items-center lg:flex-row h-screen">
    <section class="bg-cream-brown flex-1 h-full relative hidden lg:block">
      <h1 class="text-center text-5xl text-primary font-bold mt-40">
        Welcome To
      </h1>
      <h5 class="text-center text-primary font-extrabold text-3xl mt-5">
        SEA SALON
      </h5>
      <img src="@/assets/hands.png" alt="" class="absolute bottom-0" />
    </section>
    <form
      @submit.prevent="createUser"
      class="flex flex-col items-center w-full lg:flex-1"
    >
      <Logo class="mt-12" />
      <h1 class="mt-5 mb-8 font-bold text-3xl text-primary">Signup</h1>
      <section class="flex flex-col items-center gap-3">
        <input
          :type="input.type"
          :placeholder="input.placeholder"
          class="input input-bordered w-full max-w-xs bg-cream-brown"
          v-for="input in inputs"
          v-model="input.value"
          @input="inputChange(input.name)"
          :key="input"
          required
        />
      </section>
      <button
        class="btn btn-primary w-full max-w-xs mt-8"
        :disabled="disabledButton"
        type="submit"
      >
        Create Account
      </button>
      <span class="mb-3 mt-2"
        >Already have account ?
        <RouterLink to="/login" class="link link-hover text-primary"
          >Login</RouterLink
        ></span
      >
    </form>
  </main>
</template>

<script setup>
import { reactive, ref } from "vue";
import Logo from "@/components/Home/Logo.vue";

const inputs = reactive([
  {
    type: "text",
    placeholder: "Enter Your Full Name",
    name: "fullName",
    value: "",
  },
  {
    type: "email",
    placeholder: "Enter Your Email",
    name: "email",
    value: "",
  },
  {
    type: "text",
    placeholder: "Enter Your Phone Number",
    name: "phoneNumber",
    value: "",
  },
  {
    type: "password",
    placeholder: "Enter Your Password",
    name: "password",
    value: "",
  },
  {
    type: "password",
    placeholder: "Enter Your Confirm Password",
    name: "confirmPassword",
    value: "",
  },
]);
const disabledButton = ref(true);

import apiClient from "@/api";
import router from "@/router";

async function createUser() {
  const user = {
    fullName: getValue("fullName"),
    email: getValue("email"),
    phoneNumber: getValue("phoneNumber"),
    password: getValue("password"),
  };
  const result = await apiClient.post("/client/register", user);
  const response = result.data;
  if (response.isSuccess) {
    router.push("/login");
  } else {
    router.push("/register");
  }
}

function getValue(inputName) {
  return inputs.find((input) => input.name == inputName).value;
}

function isEmpty(value) {
  return value.length <= 0;
}

function checkPassword() {
  const password = getValue("password");
  const confirmPassword = getValue("confirmPassword");
  if (
    !isEmpty(password) &&
    !isEmpty(confirmPassword) &&
    password == confirmPassword
  ) {
    disabledButton.value = false;
  }
}

function inputChange(name) {
  checkPassword();
}
</script>
