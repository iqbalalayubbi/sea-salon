<template>
  <main>
    <Dashboard v-if="sideNavStore.menuActive == 'Dashboard'" />
    <Client v-if="sideNavStore.menuActive == 'Clients'" />
    <Services v-if="sideNavStore.menuActive == 'Services'" />
    <Branch v-if="sideNavStore.menuActive == 'Branches'" />
    <Reservation v-if="sideNavStore.menuActive == 'Reservations'" />
    <Setting v-if="sideNavStore.menuActive == 'Settings'" />
  </main>
</template>
<script setup>
import Dashboard from "@/components/dashboard/Dashboard.vue";
import Client from "@/components/client/Client.vue";
import Services from "@/components/services/Services.vue";
import Branch from "@/components/branches/Branch.vue";
import Reservation from "@/components/reservation/Reservation.vue";
import Setting from "@/components/setting/Setting.vue";

import { useSideNavStore } from "@/stores/sideNav";
const sideNavStore = useSideNavStore();
</script>
