<script setup>
import { ref } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue'
import MapsComponent from './components/MapsComponent.vue'
import CadastroComponent from './components/CadastroComponent.vue'

const activeSection = ref(null) // não começa no mapa

function setSection(sec) {
  activeSection.value = sec
}
</script>
<template>

</template>
<style scoped>

</style>
