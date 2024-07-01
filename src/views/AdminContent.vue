<template>
  <main>
    <Dashboard v-show="sideNavStore.menuActive == 'Dashboard'" />
    <Client v-show="sideNavStore.menuActive == 'Clients'" />
    <Services v-show="sideNavStore.menuActive == 'Services'" />
    <Branch v-show="sideNavStore.menuActive == 'Branches'" />
    <Reservation v-show="sideNavStore.menuActive == 'Reservations'" />
    <Setting v-show="sideNavStore.menuActive == 'Settings'" />
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
