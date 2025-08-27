<template>
  <a
    type="button"
    class="bg-[#23272f] text-white px-4 py-2 rounded-full mt-10 hover:bg-[#23272f]/80 border-white/20 border"
    :href="href"
    target="_blank"
    >
    <slot/>
  </a>
</template>

<script setup>
// Definir las props del componente
defineProps({
  href: {
    type: String,
    default: '#'
  }
})
</script>
