<template>
  <div class="overflow-x-auto w-3/4 mt-10">
    <div class="flex gap-2 justify-between">
      <h1 class="text-xl font-bold">Branches</h1>
      <button class="btn btn-primary">
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
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr>
          <td>
            <span class="font-bold">SEA SALON</span>
          </td>
          <td>
            <span>Jawa Timur, Indonesian</span>
          </td>
          <td>
            <span class="badge badge-accent badge-md">10 a.m</span>
          </td>
          <td>
            <span class="badge badge-accent badge-md">10 p.m</span>
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
