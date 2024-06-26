<template>
  <footer
    class="mt-10 footer bg-cream-brown text-black-color flex flex-col items-center"
  >
    <aside class="mt-10">
      <h1 class="text-3xl text-primary font-bold">SEA SALON</h1>
    </aside>
    <nav class="flex flex-col items-center">
      <h6 class="footer-title">Services</h6>
      <a class="link link-hover">Haircuts and Styling</a>
      <a class="link link-hover">Manicure and Pedicure</a>
      <a class="link link-hover">Facial Treatments</a>
    </nav>
    <nav class="flex flex-col items-center">
      <h6 class="footer-title">Menu</h6>
      <a class="link link-hover">Home</a>
      <a class="link link-hover">Services</a>
      <a class="link link-hover">Testimonials</a>
    </nav>
    <nav class="flex flex-col items-center mb-10">
      <h6 class="footer-title">Contact</h6>
      <a class="link link-hover flex gap-2">
        <Iconify icon="carbon:phone" width="16" height="16" />
        08123456789 (Thomas)
      </a>
      <a class="link link-hover flex gap-2">
        <Iconify icon="carbon:phone" width="16" height="16" />
        08123456789 (Sekar)
      </a>
    </nav>
  </footer>
</template>
