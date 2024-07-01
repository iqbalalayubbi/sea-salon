<template>
  <div class="overflow-x-auto w-3/4 mt-10">
    <div class="flex gap-2">
      <h1 class="text-xl font-bold">Reservation</h1>
    </div>
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Type Of Service</th>
          <th>Time</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr>
          <td>
            <span class="font-bold">Budi Ikup</span>
          </td>
          <td>
            <span>123456789</span>
          </td>
          <td>
            <span class="badge badge-accent badge-md">Hair Style</span>
          </td>
          <td>
            <span class="badge badge-info badge-md">24-03-2024 12 p.m</span>
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
