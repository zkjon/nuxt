<template>
  <a
    type="button"
    class=""
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
