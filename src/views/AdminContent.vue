<template>
  <main>
    <Dashboard v-show="sideNavStore.menuActive == 'Dashboard'" />
    <Client v-show="sideNavStore.menuActive == 'Clients'" />
  </main>
</template>
<script setup>
import Dashboard from "@/components/dashboard/Dashboard.vue";
import Client from "@/components/client/Client.vue";

import { useSideNavStore } from "@/stores/sideNav";
const sideNavStore = useSideNavStore();
</script>
