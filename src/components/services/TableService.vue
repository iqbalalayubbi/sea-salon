<template>
  <div class="overflow-x-auto w-3/4 mt-10">
    <div class="flex justify-between">
      <h1 class="text-xl font-bold">Services</h1>
      <button class="btn btn-primary">
        <Iconify
          icon="fa6-solid:plus"
          width="16"
          height="16"
          style="color: white"
        />New Service
      </button>
    </div>
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>Service Name</th>
          <th>Duration</th>
          <th>Model</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr>
          <td>
            <span class="font-bold">Hair Style</span>
          </td>
          <td>
            <span class="badge badge-accent badge-md">1 Hour</span>
          </td>
          <td>
            <span class="badge badge-info badge-md">Abstract</span>
          </td>
          <th>
            <button class="btn btn-ghost btn-xs bg-red-500 text-cream">
              Remove
            </button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
