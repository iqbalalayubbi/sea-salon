<template>
  <div class="overflow-x-auto w-3/4 mt-10">
    <div class="flex gap-2">
      <h1 class="text-xl font-bold">Clients</h1>
    </div>
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Total Transaction</th>
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
            <span class="font-bold">@Hart Hagerty</span>
          </td>
          <td>
            <span class="badge badge-accent badge-md">10</span>
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
