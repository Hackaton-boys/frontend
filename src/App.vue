<script setup>
import { ref } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue'
import MapsComponent from './components/MapsComponent.vue'

const activeSection = ref(null) // não começa no mapa

function setSection(sec) {
  activeSection.value = sec
}
</script>

<template>
  <div class="pagina">
    <header>
      <HeaderComponent :setSection="setSection" />
    </header>
    <main>
      <section v-if="activeSection === 'mapa'">
        <MapsComponent />
      </section>

      <section v-else-if="activeSection === 'cadastro'">
      </section>

      <section v-else-if="activeSection === 'reservar'">
      </section>

      <section v-else-if="activeSection === 'sobre'">
      </section>
    </main>
  </div>
</template>

<style scoped>

</style>
