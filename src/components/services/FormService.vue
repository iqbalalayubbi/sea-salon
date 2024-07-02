<template>
  <main>
    <h1 class="text-center font-bold text-3xl mb-5">Create New Service</h1>
    <form
      @submit.prevent="createService"
      class="flex flex-col items-center gap-3"
    >
      <input
        type="text"
        placeholder="Enter service name"
        class="input input-bordered w-full max-w-xs bg-cream-brown"
        v-model="newService.serviceName"
      />
      <input
        type="text"
        placeholder="Enter duration service"
        class="input input-bordered w-full max-w-xs bg-cream-brown"
        v-model="newService.duration"
      />
      <input
        type="text"
        placeholder="Enter model service"
        class="input input-bordered w-full max-w-xs bg-cream-brown"
        v-model="newService.model"
      />
      <div class="w-full max-w-xs mt-5">
        <button class="btn btn-primary w-full" type="submit">
          Create Service
        </button>
        <button
          @click="emit('closeForm')"
          type="button"
          class="btn btn-secondary w-full mt-3"
        >
          Back
        </button>
      </div>
    </form>
  </main>
</template>

<script setup>
import { reactive } from "vue";
import { useServiceStore } from "@/stores/service";
import { useBranchStore } from "@/stores/branch";

const serviceStore = useServiceStore();
const branchStore = useBranchStore();

const emit = defineEmits(["closeForm"]);
const newService = reactive({
  serviceName: "",
  duration: "",
  model: "",
});

async function createService() {
  try {
    const branchId = branchStore.branchActive;
    await serviceStore.createService(branchId, newService);
    await serviceStore.getServices(branchId);
    emit("closeForm");
  } catch (error) {
    console.log(error);
  }
}
</script>
