<script setup lang="ts">
import Button from '@/ui/Button.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="container flex flex-col items-center justify-center flex-1 p-4 mx-auto">
      <h1>Boilerplate Vue, TypeScript, Tailwind</h1>
      <p>
        This is just a simple boilerplate to get you started with Vue 3, TypeScript, and Tailwind
        CSS.
      </p>
      <Button>Click Me</Button>
    </main>
    <Footer />
  </div>
</template>
