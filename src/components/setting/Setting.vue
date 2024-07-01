<template>
  <main class="flex flex-col items-center gap-8">
    <div class="avatar">
      <div class="w-24 rounded-full shadow-md">
        <img src="@/assets/image.png" />
      </div>
    </div>
    <section class="flex flex-col gap-3 text-black-color">
      <label class="input input-bordered flex items-center gap-2">
        <Iconify icon="wpf:name" width="16" height="16" />
        <input type="text" class="grow" placeholder="Full Name" />
      </label>
      <label class="input input-bordered flex items-center gap-2">
        <Iconify icon="ri:phone-fill" width="16" height="16" />
        <input type="text" class="grow" placeholder="Phone Number" />
      </label>
      <label class="input input-bordered flex items-center gap-2">
        <Iconify icon="ic:baseline-email" width="16" height="16" />
        <input type="text" class="grow" placeholder="Email" />
      </label>
      <label class="input input-bordered flex items-center gap-2">
        <Iconify icon="mdi:password" width="16" height="16" />
        <input type="password" class="grow" placeholder="password" />
      </label>
      <button class="btn btn-primary mt-5">Save</button>
    </section>
  </main>
</template>
