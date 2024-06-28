<template>
  <div class="overflow-x-auto w-3/4 mt-10">
    <div class="flex gap-2">
      <h1 class="text-xl font-bold">Reservation</h1>
      <h5 class="link link-info">View All</h5>
    </div>
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>Name</th>
          <th>Service</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="mask mask-squircle h-12 w-12">
                  <img
                    src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div class="font-bold">Hart Hagerty</div>
                <div class="text-sm opacity-50">08123456789</div>
              </div>
            </div>
          </td>
          <td>
            <span class="badge badge-ghost badge-sm">Hairstyle</span>
          </td>
          <td>
            30-10-2024
            <br />
            <span class="badge badge-ghost badge-sm">11:20 AM</span>
          </td>
          <th>
            <button class="btn btn-ghost btn-xs">Details</button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
