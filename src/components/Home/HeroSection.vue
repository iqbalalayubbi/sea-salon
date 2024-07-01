<template>
  <main
    class="flex flex-col justify-between sm:flex-row sm:items-center sm:mt-20 sm:justify-center lg:items-start"
  >
    <section
      class="mt-8 text-black-color flex flex-col gap-3 sm:w-1/2 self-center"
    >
      <h1 class="text-4xl font-kaushan lg:text-5xl">
        Welcome to <span class="text-primary">SEA SALON</span>
      </h1>
      <h3 class="text-2xl font-pollar lg:text-3xlxl">
        Beauty and Elegance Redefined
      </h3>
      <h5 class="text-lg">Style your face & hair today in this salon</h5>
      <RouterLink
        to="/register"
        class="btn btn-primary mt-3 w-3/4 text-lg lg:w-1/2 lg:mt-5"
      >
        Reservation Now
      </RouterLink>
    </section>
    <section class="self-end mt-10 w-60 sm:w-80 lg:w-[350px]">
      <img src="../../assets/image.png" alt="" />
    </section>
  </main>
</template>
