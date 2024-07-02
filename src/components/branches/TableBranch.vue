<template>
  <div class="overflow-x-auto w-3/4 mt-10">
    <div class="flex gap-2 justify-between">
      <h1 class="text-xl font-bold">Branches</h1>
      <button class="btn btn-primary" @click="showForm">
        <Iconify
          icon="fa6-solid:plus"
          width="16"
          height="16"
          style="color: white"
        />New Branch
      </button>
    </div>
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>Branch Name</th>
          <th>Location</th>
          <th>Opening Time</th>
          <th>Closing Time</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr
          v-for="branch in branches"
          :key="branch"
          class="hover:bg-cream-brown hover:cursor-pointer"
        >
          <td>
            <span class="font-bold">{{ branch.branchName }}</span>
          </td>
          <td>
            <span>{{ branch.location }}</span>
          </td>
          <td>
            <span class="badge badge-accent badge-md">{{
              branch.openingTime
            }}</span>
          </td>
          <td>
            <span class="badge badge-accent badge-md">{{
              branch.closingTime
            }}</span>
          </td>
          <th>
            <button
              @click="deleteBranch(branch._id)"
              class="btn btn-ghost btn-xs bg-red-500 text-cream"
            >
              Remove
            </button>
          </th>
          <th>
            <button
              @click="getServices(branch._id)"
              class="btn btn-primary btn-xs"
            >
              Services
            </button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import apiClient from "@/api";
import { onMounted, ref } from "vue";

// pinia
import { useBranchStore } from "@/stores/branch";
import { useSideNavStore } from "@/stores/sideNav";
import { useServiceStore } from "@/stores/service";

const branchStore = useBranchStore();
const serviceStore = useServiceStore();
const sideNavStore = useSideNavStore();

const branches = ref();
const emit = defineEmits(["showForm"]);

async function getBranches() {
  const allBranch = await branchStore.getBranches();
  branches.value = allBranch;
}

async function getServices(branchId) {
  await serviceStore.getServices(branchId);
  branchStore.branchActive = branchId;
  sideNavStore.menuActive = "Services";
}

async function deleteBranch(branchId) {
  const isSuccess = await branchStore.deleteBranch(branchId);
  if (isSuccess) await getBranches();
}

getBranches();

function showForm() {
  emit("showForm");
}
</script>
